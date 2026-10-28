import React, { useEffect, useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, FlatList, SafeAreaView, Modal, Platform, Alert } from 'react-native';
import { SQLiteProvider, useSQLiteContext } from 'expo-sqlite';
import { styles } from './components/styles';

import * as FileSystem from 'expo-file-system/legacy';
import * as Sharing from 'expo-sharing';

// 1. Função de Inicialização
async function initDatabase(db) {
  try {
    await db.execAsync(`
      CREATE TABLE IF NOT EXISTS users (
        id INTEGER PRIMARY KEY AUTOINCREMENT, 
        name TEXT NOT NULL
      );
    `);
    console.log('Tabela criada/verificada com sucesso.');
  } catch (error) {
    console.error('Erro ao inicializar a tabela:', error);
  }
}

function MainApp() {
  const db = useSQLiteContext();
  const [name, setName] = useState('');
  const [search, setSearch] = useState('');
  const [users, setUsers] = useState([]);
  const [editingId, setEditingId] = useState(null);

  // Estados para controlar o Modal de Exclusão
  const [modalVisible, setModalVisible] = useState(false);
  const [userToDelete, setUserToDelete] = useState(null);

  const loadUsers = async () => {
    try {
      const allUsers = await db.getAllAsync('SELECT * FROM users;');
      setUsers(allUsers);
    } catch (error) {
      console.error('Erro ao buscar usuários:', error);
    }
  };

  useEffect(() => {
    loadUsers();
  }, []);

  const handleSave = async () => {
    if (!name.trim()) return;

    try {
      if (editingId) {
        await db.runAsync('UPDATE users SET name = ? WHERE id = ?;', [name, editingId]);
        setEditingId(null);
      } else {
        await db.runAsync('INSERT INTO users (name) VALUES (?);', [name]);
      }

      setName('');
      await loadUsers();
    } catch (error) {
      console.error('Erro ao salvar usuário:', error);
      Alert.alert('Erro', 'Não foi possível salvar: ' + error.message);
    }
  };

  const exportarBanco = async () => {
    try {
      // --- NAVEGADOR WEB ---
      if (Platform.OS === 'web') {
        const allUsers = await db.getAllAsync('SELECT * FROM users;');
        const jsonString = `data:text/json;charset=utf-8,${encodeURIComponent(
          JSON.stringify(allUsers, null, 2)
        )}`;

        const linkDownload = document.createElement('a');
        linkDownload.href = jsonString;
        linkDownload.download = 'meubanco_backup.json';
        linkDownload.click();

        alert('Base de dados exportada como ficheiro JSON no navegador!');
        return;
      }

      // --- DISPOSITIVOS MÓVEIS (ANDROID / IOS) ---
      const NOME_BANCO = 'meubanco.db';
      
      // Garante que o diretório SQLite/ existe na pasta de Documentos
      const pastaSQLite = `${FileSystem.documentDirectory}SQLite/`;
      const dirInfo = await FileSystem.getInfoAsync(pastaSQLite);
      if (!dirInfo.exists) {
        await FileSystem.makeDirectoryAsync(pastaSQLite, { intermediates: true });
      }

      // Caminhos de pesquisa comuns no Android/iOS no Expo
      const caminhosPossiveis = [
        `${FileSystem.documentDirectory}SQLite/${NOME_BANCO}`,
        `${FileSystem.documentDirectory}${NOME_BANCO}`,
      ];

      let caminhoOrigem = null;

      for (const caminho of caminhosPossiveis) {
        const info = await FileSystem.getInfoAsync(caminho);
        if (info.exists) {
          caminhoOrigem = caminho;
          break;
        }
      }

      // Se o ficheiro não estiver em Documentos, tenta copiar forçadamente da pasta interna do sistema SQLite
      if (!caminhoOrigem) {
        // No Android/iOS com o expo-sqlite recente, tenta forçar a verificação no diretório interno do SQLite
        caminhoOrigem = `${FileSystem.documentDirectory}SQLite/${NOME_BANCO}`;
      }

      const destinationPath = `${FileSystem.documentDirectory}meubanco_exportado.db`;

      // Copia o ficheiro da base de dados para um local acessível ao expo-sharing
      await FileSystem.copyAsync({
        from: caminhoOrigem,
        to: destinationPath,
      });

      if (await Sharing.isAvailableAsync()) {
        await Sharing.shareAsync(destinationPath, {
          mimeType: 'application/x-sqlite3',
          dialogTitle: 'Exportar Base de Dados',
          UTI: 'public.database',
        });
      } else {
        Alert.alert('Aviso', 'A partilha não está disponível neste dispositivo.');
      }
    } catch (error) {
      console.error('Erro ao exportar base de dados:', error);
      Alert.alert(
        'Aviso',
        'Regista primeiro pelo menos um utilizador no telemóvel para a base de dados ser criada no armazenamento.'
      );
    }
  };

  const confirmDelete = (user) => {
    setUserToDelete(user);
    setModalVisible(true);
  };

  const handleExecuteDelete = async () => {
    if (!userToDelete) return;

    try {
      await db.runAsync('DELETE FROM users WHERE id = ?;', [userToDelete.id]);
      if (editingId === userToDelete.id) cancelEdit();
      
      setModalVisible(false);
      setUserToDelete(null);
      await loadUsers();
    } catch (error) {
      console.error('Erro ao deletar usuário:', error);
    }
  };

  const startEdit = (user) => {
    setEditingId(user.id);
    setName(user.name);
  };

  const cancelEdit = () => {
    setEditingId(null);
    setName('');
  };

  const filteredUsers = users.filter(u => 
    u.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>Painel do Usuário</Text>
        <Text style={styles.headerSubtitle}>Gerenciamento com Expo SQLite</Text>
      </View>

      <View style={styles.statsRow}>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{users.length}</Text>
          <Text style={styles.statLabel}>Total Cadastrados</Text>
        </View>
        <View style={styles.statCard}>
          <Text style={styles.statNumber}>{filteredUsers.length}</Text>
          <Text style={styles.statLabel}>Exibidos na Busca</Text>
        </View>
      </View>

      <View style={styles.formCard}>
        <View style={styles.formHeader}>
          <Text style={styles.formTitle}>
            {editingId ? 'Editar Cadastro' : 'Novo Cadastro'}
          </Text>
          {editingId && (
            <View style={styles.badgeEdit}>
              <Text style={styles.badgeEditText}>Modo Edição</Text>
            </View>
          )}
        </View>
        
        <TextInput
          style={styles.input}
          placeholder="Digite o nome completo..."
          placeholderTextColor="#94A3B8"
          value={name}
          onChangeText={setName}
        />

        <View style={styles.buttonGroup}>
          <TouchableOpacity style={styles.btnPrimary} onPress={handleSave}>
            <Text style={styles.btnPrimaryText}>
              {editingId ? 'Salvar Alterações' : 'Adicionar Usuário'}
            </Text>
          </TouchableOpacity>

          {editingId && (
            <TouchableOpacity style={styles.btnCancel} onPress={cancelEdit}>
              <Text style={styles.btnCancelText}>Cancelar</Text>
            </TouchableOpacity>
          )}
        </View>
      </View>

      <View style={styles.searchContainer}>
        <TextInput
          style={styles.searchInput}
          placeholder="🔍 Pesquisar por nome..."
          placeholderTextColor="#94A3B8"
          value={search}
          onChangeText={setSearch}
        />
      </View>

      <FlatList
        data={filteredUsers}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const isEditing = editingId === item.id;
          const initialLetter = item.name.charAt(0).toUpperCase();

          return (
            <View style={[styles.userCard, isEditing && styles.userCardEditing]}>
              <View style={styles.avatar}>
                <Text style={styles.avatarText}>{initialLetter}</Text>
              </View>

              <View style={styles.userInfo}>
                <Text style={styles.userName}>{item.name}</Text>
                <Text style={styles.userId}>ID: #{item.id}</Text>
              </View>

              <View style={styles.actions}>
                <TouchableOpacity 
                  style={styles.actionBtnEdit} 
                  onPress={() => startEdit(item)}
                >
                  <Text style={styles.actionBtnEditText}>Editar</Text>
                </TouchableOpacity>

                <TouchableOpacity 
                  style={styles.actionBtnDelete} 
                  onPress={() => confirmDelete(item)}
                >
                  <Text style={styles.actionBtnDeleteText}>Excluir</Text>
                </TouchableOpacity>
              </View>
            </View>
          );
        }}
        ListEmptyComponent={
          <View style={styles.emptyContainer}>
            <Text style={styles.emptyText}>Nenhum usuário encontrado.</Text>
          </View>
        }
      />

      <Modal
        animationType="fade"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalOverlay}>
          <View style={styles.modalCard}>
            <Text style={styles.modalTitle}>Confirmar Exclusão</Text>
            <Text style={styles.modalMessage}>
              Tem certeza de que deseja apagar{' '}
              <Text style={{ fontWeight: '700', color: '#0F172A' }}>
                "{userToDelete?.name}"
              </Text>?
            </Text>

            <View style={styles.modalButtonGroup}>
              <TouchableOpacity
                style={styles.modalBtnCancel}
                onPress={() => setModalVisible(false)}
              >
                <Text style={styles.modalBtnCancelText}>Cancelar</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.modalBtnDelete}
                onPress={handleExecuteDelete}
              >
                <Text style={styles.modalBtnDeleteText}>Sim, Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>

      <TouchableOpacity 
        style={{
          backgroundColor: '#3B82F6',
          padding: 12,
          borderRadius: 8,
          alignItems: 'center',
          marginHorizontal: 16,
          marginBottom: 50,
        }} 
        onPress={exportarBanco}
      >
        <Text style={{ color: '#FFF', fontWeight: 'bold' }}>
          📁 Exportar Banco de Dados
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

export default function App() {
  return (
    <SQLiteProvider databaseName="meubanco.db" onInit={initDatabase}>
      <MainApp />
    </SQLiteProvider>
  );
}