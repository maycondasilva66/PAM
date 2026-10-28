import * as React from 'react';
import { useState, useEffect } from 'react';
import { Text, TextInput, View, FlatList, TouchableOpacity, Image,Platform, Alert, ScrollView, Linking, useWindowDimensions } from 'react-native';
import {
  createStaticNavigation,
  useNavigation,
  useRoute, 
} from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Modal from 'react-native-modal';
import { Picker } from '@react-native-picker/picker';
import Checkbox from 'expo-checkbox';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { DATADEVS_2 } from './dataDesenvolvedores_2';
import { COMIDA } from './comidas';

//Import Exportar Banco
import * as FileSystem from 'expo-file-system';
import * as Sharing from 'expo-sharing';

// Import CSS
import { homeStyles } from './components/homeStyles';
import { loginStyles } from './components/loginStyles';
import { desenvolvedorStyles } from './components/desenvolvedorStyles';
import { finalizarStyles } from './components/finalizarStyles';
import { comidaStyles } from './components/comidaStyles';
import { perfilStyles } from './components/perfilStyles'; 
import { adminUsuariosStyles } from './components/adminUsuariosStyles';

// -------------------------------------------------------------------------
// // Desenvolvedores (Tela Pública tradicional com DATADEVS_2)
// const ItemDevs_2 = ({ nomeDev, idadeDev, fotoDev }) => {
//   return (
//     <View style={desenvolvedorStyles.itemDevs_2}>
//       <View style={desenvolvedorStyles.containerImgDev_2}>
//         <Image style={desenvolvedorStyles.imgDev_2} source={fotoDev} />
//       </View>
//       <Text style={desenvolvedorStyles.nomeDev_2}>{nomeDev}</Text>
//       <Text style={desenvolvedorStyles.idadeDev_2}>{idadeDev}</Text>
//     </View>
//   );
// };

// function DesenvolvedoresScreen() {
//   return (
//     <View style={desenvolvedorStyles.containerPrincipalDesenvolvedores_2}>
//       <FlatList
//         data={DATADEVS_2}
//         renderItem={({ item }) => (
//           <ItemDevs_2
//             nomeDev={item.nomeDev}
//             idadeDev={item.idadeDev}
//             fotoDev={item.fotoDev}
//           />
//         )}
//         showsVerticalScrollIndicator={false}
//         keyExtractor={(item) => item.id.toString()}
//         style={desenvolvedorStyles.conteudoListasDevs_2}
//       />
//     </View>
//   );
// }

// Componente individual atualizado para o formato de linha horizontal
// Componente individual com foto maior e destaque central
const ItemDevs_2 = ({ nomeDev, idadeDev, fotoDev }) => {
  return (
    <View style={desenvolvedorStyles.itemDevs_2}>
      <View style={desenvolvedorStyles.containerImgDev_2}>
        <Image style={desenvolvedorStyles.imgDev_2} source={fotoDev} />
      </View>
      <View style={desenvolvedorStyles.containerTextoDev_2}>
        <Text style={desenvolvedorStyles.nomeDev_2}>{nomeDev}</Text>
        <Text style={desenvolvedorStyles.idadeDev_2}>Idade: {idadeDev}</Text>
      </View>
    </View>
  );
};

function DesenvolvedoresScreen() {
  const navigation = useNavigation();
  const [busca, setBusca] = useState('');
  const devsFiltrados = DATADEVS_2.filter(item =>
    item.nomeDev.toLowerCase().includes(busca.toLowerCase())
  );
  return (
    <View style={desenvolvedorStyles.containerPrincipalDesenvolvedores_2}>
      {/* <Text style={desenvolvedorStyles.tituloPrincipalDevs_2}>Nossos Desenvolvedores</Text> */}
      <View style={desenvolvedorStyles.containerInputBusca}>
        <TextInput
          placeholder="Pesquisar desenvolvedor..."
          placeholderTextColor="#888888"
          value={busca}
          onChangeText={setBusca}
          style={desenvolvedorStyles.caixaTextoBusca}
        />
      </View>
      <FlatList
        data={devsFiltrados}
        renderItem={({ item }) => (
          <ItemDevs_2
            nomeDev={item.nomeDev}
            idadeDev={item.idadeDev}
            fotoDev={item.fotoDev}
          />
        )}
        showsVerticalScrollIndicator={false}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={desenvolvedorStyles.conteudoListasDevs_2}
      />
    </View>
  );
}

// -------------------------------------------------------------------------
// Tela de Gerenciamento CRUD de Usuários (Exclusiva para o Admin)
function AdminGerenciarUsuariosScreen() {
  const [usuarios, setUsuarios] = useState([]);
  const [nomeUsuario, setNomeUsuario] = useState('');
  const [tipoUsuario, setTipoUsuario] = useState('Desenvolvedor');
  const [idEditando, setIdEditando] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [modalDeletarVisible, setModalDeletarVisible] = useState(false);
  const [usuarioParaExcluir, setUsuarioParaExcluir] = useState(null);

  useEffect(() => {
    carregarDados();
  }, []);

  const carregarDados = async () => {
    try {
      const dados = await AsyncStorage.getItem('@usuarios_sistema_v2');
      if (dados) {
        setUsuarios(JSON.parse(dados));
      } else {
        const padrao = [
          { id: 1, nomeUsuario: 'Maycon', tipoUsuario: 'Desenvolvedor' },
          { id: 2, nomeUsuario: 'John', tipoUsuario: 'Desenvolvedor' },
          { id: 3, nomeUsuario: 'Arthur', tipoUsuario: 'Desenvolvedor' },
          { id: 4, nomeUsuario: 'Gustavo Silva', tipoUsuario: 'Desenvolvedor' },
        ];
        await AsyncStorage.setItem('@usuarios_sistema_v2', JSON.stringify(padrao));
        setUsuarios(padrao);
      }
    } catch (error) {
      console.error("Erro ao carregar usuários:", error);
    }
  };

  const salvarNoStorage = async (novosDados) => {
    try {
      await AsyncStorage.setItem('@usuarios_sistema_v2', JSON.stringify(novosDados));
      setUsuarios(novosDados);
    } catch (error) {
      console.error("Erro ao salvar usuários:", error);
    }
  };

  const salvarUsuario = async () => {
    if (!nomeUsuario.trim()) {
      Alert.alert('Atenção', 'Informe o nome do usuário!');
      return;
    }

    if (idEditando) {
      const atualizados = usuarios.map((user) => 
        user.id === idEditando ? { ...user, nomeUsuario, tipoUsuario } : user
      );
      await salvarNoStorage(atualizados);
      Alert.alert('Sucesso', 'Usuário atualizado!');
    } else {
      const novoUser = {
        id: Date.now(),
        nomeUsuario,
        tipoUsuario,
      };
      const atualizados = [...usuarios, novoUser];
      await salvarNoStorage(atualizados);
      Alert.alert('Sucesso', 'Usuário cadastrado!');
    }

    setNomeUsuario('');
    setTipoUsuario('Desenvolvedor');
    setIdEditando(null);
    setModalVisible(false);
  };

  const confirmarDelecao = (id) => {
    setUsuarioParaExcluir(id);
    setModalDeletarVisible(true);
  };

  const deletarUsuarioEfetivo = async () => {
    if (usuarioParaExcluir) {
      const atualizados = usuarios.filter((user) => user.id !== usuarioParaExcluir);
      await salvarNoStorage(atualizados);
    }
    setModalDeletarVisible(false);
    setUsuarioParaExcluir(null);
  };

  const iniciarEdicao = (item) => {
    setNomeUsuario(item.nomeUsuario);
    setTipoUsuario(item.tipoUsuario || 'Desenvolvedor');
    setIdEditando(item.id);
    setModalVisible(true);
  };

  const exportarBancoDados = async () => {
    try {
      console.log('1. Buscando dados do AsyncStorage...');
      const dados = await AsyncStorage.getItem('@usuarios_sistema_v2');
      
      if (!dados) {
        Alert.alert('Aviso', 'Não existem dados para exportar!');
        return;
      }

      const dadosFormatados = JSON.stringify(JSON.parse(dados), null, 2);

      // --- NAVEGADOR WEB ---
      if (Platform.OS === 'web') {
        const blob = new Blob([dadosFormatados], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = 'usuarios_sistema.json';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        URL.revokeObjectURL(url);
        return;
      }

      // --- DISPOSITIVOS MÓVEIS (ANDROID / IOS) ---
      console.log('2. Gravando ficheiro no documentDirectory...');
      
      // Utiliza o documentDirectory que é o caminho seguro e garantido que funcionou no outro app
      const fileUri = `${FileSystem.documentDirectory}usuarios_sistema.json`;
      
      await FileSystem.writeAsStringAsync(fileUri, dadosFormatados, {
        encoding: FileSystem.EncodingType.UTF8,
      });

      console.log('3. Verificando disponibilidade de compartilhamento...');
      const isSharingAvailable = await Sharing.isAvailableAsync();
      
      if (isSharingAvailable) {
        console.log('4. Abrindo menu de compartilhamento...');
        await Sharing.shareAsync(fileUri, {
          mimeType: 'application/json',
          dialogTitle: 'Exportar dados de utilizadores',
          UTI: 'public.json',
        });
      } else {
        Alert.alert('Aviso', 'A partilha não está disponível neste dispositivo.');
      }
    } catch (error) {
      console.error('Erro detalhado ao exportar dados:', error);
      Alert.alert('Erro', `Não foi possível exportar: ${error.message}`);
    }
  };

  // const exportarBancoDados = async () => {
  //   try {
  //     console.log('1. Buscando dados do AsyncStorage...');
  //     const dados = await AsyncStorage.getItem('@usuarios_sistema_v2');
      
  //     if (!dados) {
  //       Alert.alert('Aviso', 'Não existem dados para exportar!');
  //       return;
  //     }
  
  //     const dadosFormatados = JSON.stringify(JSON.parse(dados), null, 2);
  
  //     // Se estiver na Web
  //     if (Platform.OS === 'web') {
  //       const blob = new Blob([dadosFormatados], { type: 'application/json' });
  //       const url = URL.createObjectURL(blob);
  //       const link = document.createElement('a');
  //       link.href = url;
  //       link.download = 'usuarios_sistema.json';
  //       document.body.appendChild(link);
  //       link.click();
  //       document.body.removeChild(link);
  //       URL.revokeObjectURL(url);
  //       return;
  //     }
  
  //     // Para Dispositivos Móveis (Android / iOS)
  //     console.log('2. Gravando arquivo na cache...');
  //     const fileUri = `${FileSystem.cacheDirectory}usuarios_sistema.json`;
      
  //     await FileSystem.writeAsStringAsync(fileUri, dadosFormatados, {
  //       encoding: FileSystem.EncodingType.UTF8,
  //     });
  
  //     console.log('3. Verificando disponibilidade de compartilhamento...');
  //     const isSharingAvailable = await Sharing.isAvailableAsync();
      
  //     if (isSharingAvailable) {
  //       console.log('4. Abrindo menu de compartilhamento...');
  //       await Sharing.shareAsync(fileUri, {
  //         mimeType: 'application/json',
  //         dialogTitle: 'Exportar dados de utilizadores',
  //         UTI: 'public.json',
  //       });
  //     } else {
  //       Alert.alert('Aviso', 'A partilha não está disponível neste dispositivo.');
  //     }
  //   } catch (error) {
  //     // IMPORTANTE: Olhe o terminal/console para ver este erro detalhado
  //     console.error('Erro detalhado ao exportar dados:', error);
  //     Alert.alert('Erro', `Não foi possível exportar: ${error.message}`);
  //   }
  // };

  return (
    <View style={adminUsuariosStyles.containerPrincipal}>
      <FlatList
        data={usuarios}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={true}
        nestedScrollEnabled={true}
        style={{ flex: 1 }}
        ListHeaderComponent={
          <TouchableOpacity 
            style={adminUsuariosStyles.botaoCadastrar} 
            onPress={() => {
              setNomeUsuario('');
              setTipoUsuario('Desenvolvedor');
              setIdEditando(null);
              setModalVisible(true);
            }}
          >
            <Text style={adminUsuariosStyles.textoBotaoCadastrar}>+ Cadastrar Novo Usuário</Text>
          </TouchableOpacity>
        }
        renderItem={({ item, index }) => (
          <View style={adminUsuariosStyles.cardUsuario}>
            <View style={adminUsuariosStyles.containerInfoItem}>
              <View style={adminUsuariosStyles.badgeId}>
                <Text style={adminUsuariosStyles.textoBadgeId}>#{index + 1}</Text>
              </View>
              
              <View style={adminUsuariosStyles.containerTextoUsuario}>
                <Text 
                  style={adminUsuariosStyles.nomeUsuario} 
                  numberOfLines={1} 
                  ellipsizeMode="tail"
                >
                  {item.nomeUsuario}
                </Text>
                <Text style={adminUsuariosStyles.tipoUsuario}>{item.tipoUsuario}</Text>
              </View>
            </View>

            <View style={adminUsuariosStyles.containerAcoes}>
              <TouchableOpacity onPress={() => iniciarEdicao(item)} style={adminUsuariosStyles.botaoEditar}>
                <Text style={adminUsuariosStyles.textoBotaoAcao}>Editar</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={() => confirmarDelecao(item.id)} style={adminUsuariosStyles.botaoExcluir}>
                <Text style={adminUsuariosStyles.textoBotaoAcao}>Excluir</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}
        ListFooterComponent={
          <TouchableOpacity 
            style={[adminUsuariosStyles.botaoCadastrar, { backgroundColor: '#2196F3', marginTop: 8, marginBottom: 80 }]} 
            onPress={exportarBancoDados}
          >
            <Text style={adminUsuariosStyles.textoBotaoCadastrar}>📥 Exportar Dados</Text>
          </TouchableOpacity>
        }
        contentContainerStyle={adminUsuariosStyles.conteudoLista}
      />

      {/* Modal para Criar / Editar Usuário */}
      <Modal isVisible={modalVisible} onBackdropPress={() => setModalVisible(false)}>
        <View style={adminUsuariosStyles.containerModalContent}>
          <Text style={adminUsuariosStyles.tituloModal}>
            {idEditando ? 'Editar Usuário' : 'Novo Usuário'}
          </Text>

          <TextInput 
            placeholder="Nome do Usuário"
            placeholderTextColor="#888888"
            value={nomeUsuario}
            onChangeText={setNomeUsuario}
            style={adminUsuariosStyles.inputModal}
          />

          <Text style={adminUsuariosStyles.rotuloTipoUsuario}>Tipo de Usuário:</Text>
          <View style={adminUsuariosStyles.containerSelecaoTipo}>
            <TouchableOpacity 
              style={[
                adminUsuariosStyles.opcaoTipo,
                tipoUsuario === 'Desenvolvedor' ? adminUsuariosStyles.opcaoTipoAtiva : adminUsuariosStyles.opcaoTipoInativa
              ]}
              onPress={() => setTipoUsuario('Desenvolvedor')}
            >
              <Text style={tipoUsuario === 'Desenvolvedor' ? adminUsuariosStyles.textoTipoAtivo : adminUsuariosStyles.textoTipoInativo}>
                Desenvolvedor
              </Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[
                adminUsuariosStyles.opcaoTipo,
                tipoUsuario === 'Usuário Comum' ? adminUsuariosStyles.opcaoTipoAtiva : adminUsuariosStyles.opcaoTipoInativa
              ]}
              onPress={() => setTipoUsuario('Usuário Comum')}
            >
              <Text style={tipoUsuario === 'Usuário Comum' ? adminUsuariosStyles.textoTipoAtivo : adminUsuariosStyles.textoTipoInativo}>
                Usuário Comum
              </Text>
            </TouchableOpacity>
          </View>

         <View style={adminUsuariosStyles.containerBotoesModal}>
            <TouchableOpacity style={adminUsuariosStyles.botaoCancelarModal} onPress={() => setModalVisible(false)}>
              <Text style={adminUsuariosStyles.textoBotaoModal}>Cancelar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={adminUsuariosStyles.botaoSalvarModal} onPress={salvarUsuario}>
              <Text style={adminUsuariosStyles.textoBotaoModal}>Salvar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>

      {/* Modal de Confirmação de Exclusão */}
      <Modal isVisible={modalDeletarVisible} onBackdropPress={() => setModalDeletarVisible(false)}>
        <View style={adminUsuariosStyles.containerModalContent}>
          <Text style={adminUsuariosStyles.tituloModal}>Tem certeza?</Text>
          <Text style={{ textAlign: 'center', marginBottom: 20, color: '#444', fontSize: 16 }}>
            Você tem certeza de que deseja excluir este usuário?
          </Text>

          <View style={adminUsuariosStyles.containerBotoesModal}>
            <TouchableOpacity 
              style={adminUsuariosStyles.botaoCancelarModal} 
              onPress={() => setModalDeletarVisible(false)}
            >
              <Text style={adminUsuariosStyles.textoBotaoModal}>Cancelar</Text>
            </TouchableOpacity>

            <TouchableOpacity 
              style={[adminUsuariosStyles.botaoSalvarModal, { backgroundColor: '#f44336' }]} 
              onPress={deletarUsuarioEfetivo}
            >
              <Text style={adminUsuariosStyles.textoBotaoModal}>Excluir</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// -------------------------------------------------------------------------
// Perfil (Mostra o botão de Gerenciar Usuários se o admin estiver logado)
function perfilScreen({ route }) {
  const navigation = useNavigation();
  const { imagemUsuario, usuarioLogado } = route.params || {};
  const [avaliacao, setAvaliacao] = useState(0); 
  const [modalVisivel, setModalVisivel] = useState(false);

  const enviarAvaliacao = () => {
    if (avaliacao === 0) {
      Alert.alert('Atenção', 'Selecione pelo menos 1 estrela para avaliar.');
      return;
    }
    setModalVisivel(true);
  };

  return (
    <ScrollView style={{ flex: 1, width: '100%' }} contentContainerStyle={{ flexGrow: 1, backgroundColor: '#f3dcbf' }}>
      <View style={perfilStyles.containerPerfil}>
        <Text style={perfilStyles.textoPrincipal}>Perfil do Usuário</Text>
        
        <View style={perfilStyles.viewDeCima}>
          <Text style={perfilStyles.tituloCima}>Bem-vindo ao seu perfil!</Text>
          {imagemUsuario ? (
            <Image
              source={typeof imagemUsuario === 'string' ? { uri: imagemUsuario } : imagemUsuario}
              style={perfilStyles.imgPerfil}
            />
          ) : (
            <Text>Nenhuma imagem de perfil definida</Text>
          )}
        </View>
        
        <View style={perfilStyles.containerQuadradoEmVolta}>
          <Text style={perfilStyles.textoFormasPagamento}>Avalie nosso App</Text>
          
          <View style={perfilStyles.containerOpcoes}>
            {[1, 2, 3, 4, 5].map((estrela) => (
              <TouchableOpacity
                key={estrela}
                onPress={() => setAvaliacao(estrela)}
                activeOpacity={0.7}
              >
                <Text style={perfilStyles.estrelaTexto}>
                  {estrela <= avaliacao ? '★' : '☆'}
                </Text>
              </TouchableOpacity>
            ))}
          </View>

          <Text style={perfilStyles.textoOpcaoSelecionada}>
            {avaliacao > 0 ? `Sua nota: ${avaliacao} de 5 estrelas` : 'Toque nas estrelas para avaliar'}
          </Text>

          <TouchableOpacity style={perfilStyles.botaoPagar} onPress={enviarAvaliacao} activeOpacity={0.7}>
            <Text style={perfilStyles.textoBotaoPagar}>Enviar Avaliação</Text>
          </TouchableOpacity>
        </View>

        {usuarioLogado === 'admin' && (
          <TouchableOpacity 
            style={[perfilStyles.botaoPagar, { backgroundColor: '#228b22', marginTop: 40 }]} 
            onPress={() => navigation.navigate('AdminGerenciarUsuarios')}
            activeOpacity={0.7}
          >
            <Text style={perfilStyles.textoBotaoPagar}>Gerenciar Usuários</Text>
          </TouchableOpacity>
        )}

        <Modal animationType="slide" transparent={true} visible={modalVisivel} onRequestClose={() => setModalVisivel(false)}>
          <View style={perfilStyles.containerModal}>
            <View style={perfilStyles.containerAlert}>
              <Text style={perfilStyles.modalTitulo}>Obrigado pelo seu feedback!</Text>
              <Text style={perfilStyles.modalMensagemOpcaoEscolhida}>
                Você avaliou nosso aplicativo com {avaliacao} {avaliacao === 1 ? 'estrela' : 'estrelas'}.
              </Text>
              <TouchableOpacity style={perfilStyles.modalBotao} onPress={() => setModalVisivel(false)}>
                <Text style={perfilStyles.modalBotaoTexto}>Entendido</Text>
              </TouchableOpacity>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}

// -------------------------------------------------------------------------
// Login
function LoginScreen() {
  const navigation = useNavigation();
  const [isCheckbox, setCheckbox] = useState(true);
  const [usuario, setUsuario] = useState('admin');
  const [senha, setSenha] = useState('admin');
  const gerenciarCheckbox = (marcado) => {
    setCheckbox(marcado);
    if (!marcado) {
      setUsuario('');
      setSenha('');
    } else {
      setUsuario('admin');
      setSenha('admin');
    }
  };
  const verificarUsuarioESenha = () => {
    if (usuario === 'admin' && senha === 'admin') {
      const imagemAdmin = require('./components/images/icones/gustavo.jpeg');
      navigation.navigate('Home', { imagemUsuario: imagemAdmin, usuarioLogado: 'admin' });
    } else if (usuario === 'Arthur' && senha === 'Morgan') {
      const imagemArthur = require('./components/images/ArthurMorgan.jpeg');
      navigation.navigate('Home', { imagemUsuario: imagemArthur, usuarioLogado: 'Arthur' });
    } else if (usuario === 'Maycolas' && senha === 'Morgan') {
      const imagemMaycon = require('./components/images/Maycon_v2.jpeg');
      navigation.navigate('Home', { imagemUsuario: imagemMaycon, usuarioLogado: 'Maycolas' });
    } else if (usuario === 'John' && senha === 'Amongus') {
      const imagemJohn = require('./components/images/John_v2.jpeg');
      navigation.navigate('Home', { imagemUsuario: imagemJohn, usuarioLogado: 'John' });
    } else if (usuario === 'Gustavo' && senha === 'Morgan') {
      const imagemGustavo = require('./components/images/Gustavo.jpeg');
      navigation.navigate('Home', { imagemUsuario: imagemGustavo, usuarioLogado: 'Gustavo' });
    } else {
      Alert.alert('Usuário ou senha incorretos!');
    }
  };
  return (
    <View style={loginStyles.containerLogin}>
      <View style={loginStyles.containerLogo}>
        <Image source={require('./components/images/logoApp.png')} style={loginStyles.logo} />
      </View>
      <Text style={loginStyles.textoAbaixoLogo}>Bem-vindo ao iComida</Text>
      <Text style={loginStyles.textoPrincipalScreenLogin}>Login</Text>
      <View style={loginStyles.containerTextInputLogin}>
        <TextInput 
          placeholder="Usuário" 
          placeholderTextColor="#888888"
          value={usuario} 
          onChangeText={setUsuario} 
          style={loginStyles.caixaTextoLogin} 
        />
        <TextInput 
          placeholder="Senha" 
          placeholderTextColor="#888888"
          value={senha} 
          onChangeText={setSenha} 
          secureTextEntry={true} 
          style={loginStyles.caixaTextoLogin} 
        />
        <View style={loginStyles.containerCheckboxRow}>
          <Checkbox value={isCheckbox} onValueChange={gerenciarCheckbox} color={isCheckbox ? '#b44f0c' : undefined} />
          <Text style={loginStyles.textoCheckbox}>Lembrar meus dados de acesso</Text>
        </View> 
        <TouchableOpacity style={loginStyles.botaoEntrarLogin} onPress={verificarUsuarioESenha}>
          <Text style={loginStyles.textoBotaoEntrarLogin}>Entrar</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const IDS_PROMOCAO = [1, 4, 5, 11, 18,14];
const ItemComida = ({ nomeComida, preco, precoAntigo, fotoComida, descricao }) => {
  const navigation = useNavigation();
  const comprarComida = () => {
    navigation.navigate('FinalizarPedido', { nomeComida, preco, fotoComida, descricao });
  };
  return (
    <View style={comidaStyles.blocoComida}>
      <Image source={fotoComida} style={comidaStyles.imagemComida} />
      <Text style={comidaStyles.nomeComida}>{nomeComida}</Text>
      {precoAntigo && (
        <Text style={comidaStyles.precoAntigoComida}>{precoAntigo}</Text>
      )}
      <Text style={comidaStyles.precoComida}>{preco}</Text>
      <TouchableOpacity style={comidaStyles.botaoComprar} onPress={comprarComida}>
        <Text style={comidaStyles.textoBotaoComprar}>Comprar</Text>
      </TouchableOpacity>
    </View>
  );
};

function ComidasScreen() {
  const [categoriaSelecionada, setCategoriaSelecionada] = useState('TodasComidas');
  const categorias = ['TodasComidas', ...Array.from(new Set(COMIDA.flatMap((item) => item.categoria)))];
  const comidasFiltradas = categoriaSelecionada === 'TodasComidas' ? COMIDA : COMIDA.filter((item) => item.categoria.includes(categoriaSelecionada));
  return (
    <View style={comidaStyles.containerPrincipalComida}>
      <View style={comidaStyles.containerFiltroComida}>
        <Text style={comidaStyles.textoPrincipalComida}>Filtrar por Categoria</Text>
        <View style={comidaStyles.containerPickerWrapper}>
          <Picker 
            selectedValue={categoriaSelecionada} 
            onValueChange={(itemValue) => setCategoriaSelecionada(itemValue)} 
            style={comidaStyles.pickerComida}
            dropdownIconColor="#d35400"
          >
            {categorias.map((cat) => (
              <Picker.Item key={cat} label={cat === 'TodasComidas' ? 'Todas' : cat} value={cat} />
            ))}
          </Picker>
        </View>
      </View>
      <FlatList
        data={comidasFiltradas}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => {
          const estaEmPromocao = IDS_PROMOCAO.includes(item.id);
          return (
            <ItemComida 
              nomeComida={item.nomeComida} 
              preco={item.preco} 
              precoAntigo={estaEmPromocao ? item.precoAntigo : null} 
              fotoComida={item.fotoComida} 
              descricao={item.descricao} 
            />
          );
        }}
        contentContainerStyle={comidaStyles.flatListContent}
        style={comidaStyles.flatListStyle}
      />
    </View>
  );
}

// function HomeScreen({ route }) {
//   const navigation = useNavigation();
//   const { width: screenWidth } = useWindowDimensions(); 
//   const { imagemUsuario, usuarioLogado } = route.params || {};
//   const cardWidth = screenWidth * 0.80; 
//   const comidasPromocao = COMIDA.filter(item => [1, 4, 5, 11, 18,14].includes(item.id));

//   // Componente interno atualizado para receber precoAntigo
//   const ItemComidaHome = ({ nomeComida, preco, precoAntigo, fotoComida, descricao }) => {
//     const comprarComida = () => {
//       navigation.navigate('FinalizarPedido', { nomeComida, preco, fotoComida, descricao });
//     };

//     return (
//       <View style={[homeStyles.blocoComida, { width: cardWidth }]}>
//         <Image source={fotoComida} style={homeStyles.imagemComida} />
//         <Text style={homeStyles.nomeComida}>{nomeComida}</Text>
        
//         {precoAntigo && (
//           <Text style={homeStyles.precoAntigoComida}>{precoAntigo}</Text>
//         )}

//         <Text style={homeStyles.precoComida}>{preco}</Text>
        
//         <TouchableOpacity style={homeStyles.botaoComprar} onPress={comprarComida}>
//           <Text style={homeStyles.textoBotaoComprar}>Comprar</Text>
//         </TouchableOpacity>
//       </View>
//     );
//   };

//   return (
//     <View style={homeStyles.containerHome}>
//       <View style={homeStyles.containerLogo}>
//         <Image source={require('./components/images/logoApp.png')} style={homeStyles.logo} />
//       </View>
//       <View>
//         <TouchableOpacity style={homeStyles.containerPerfil} onPress={() => navigation.navigate('TelaPerfil', { imagemUsuario, usuarioLogado })}>
//           <Image source={imagemUsuario} style={homeStyles.perfil} fadeDuration={0} />
//         </TouchableOpacity>
//       </View>
//       <View style={homeStyles.containerInput}>
//         <TextInput 
//           placeholder="O que você deseja comer hoje?" 
//           placeholderTextColor="#313131" 
//           style={homeStyles.caixaTextoHome} 
//         />
//       </View>
//       <Text style={homeStyles.txtPromocao}>PROMOÇÕES DA SEMANA!</Text>
//       <View style={homeStyles.containerCarrossel}> 
//         <FlatList
//           data={comidasPromocao}
//           keyExtractor={(item) => item.id.toString()}
//           horizontal
//           showsHorizontalScrollIndicator={false}
//           renderItem={({ item }) => (
//             <ItemComidaHome 
//               nomeComida={item.nomeComida} 
//               preco={item.preco} 
//               precoAntigo={item.precoAntigo}
//               fotoComida={item.fotoComida} 
//               descricao={item.descricao} 
//             />
//           )}
//           contentContainerStyle={homeStyles.flatListContent}
//           style={homeStyles.flatListStyle}
//         />
//       </View>
//       <View style={homeStyles.containerBotoes}>
//         <TouchableOpacity style={homeStyles.botaoEntrarHome} onPress={() => navigation.navigate('Comidas')}>
//           <Text style={homeStyles.textoBotaoEntrarHome}>Ver mais comidas</Text>
//         </TouchableOpacity>
//         <TouchableOpacity style={homeStyles.botaoEntrarDevs} onPress={() => navigation.navigate('Desenvolvedores_2')}>
//           <Text style={homeStyles.textoBotaoEntrarDevs}>Desenvolvedores</Text>
//         </TouchableOpacity>
//       </View>
//     </View>
//   );
// }

function HomeScreen({ route }) {
  const navigation = useNavigation();
  const { width: screenWidth } = useWindowDimensions(); 
  const { imagemUsuario, usuarioLogado } = route.params || {};
  const cardWidth = screenWidth * 0.80; 
  const [busca, setBusca] = useState('');
  const idsPromocao = [1, 4, 5, 11, 18, 14];
  const comidasExibidas = busca.trim() === ''
    ? COMIDA.filter(item => idsPromocao.includes(item.id))
    : COMIDA.filter(item => item.nomeComida.toLowerCase().includes(busca.toLowerCase()));
  const ItemComidaHome = ({ nomeComida, preco, precoAntigo, fotoComida, descricao, id }) => {
    const comprarComida = () => {
      navigation.navigate('FinalizarPedido', { nomeComida, preco, fotoComida, descricao });
    };
    const estaEmPromocao = idsPromocao.includes(id);
    return (
      <View style={[homeStyles.blocoComida, { width: cardWidth }]}>
        <Image source={fotoComida} style={homeStyles.imagemComida} />
        <Text style={homeStyles.nomeComida}>{nomeComida}</Text>
        {estaEmPromocao && precoAntigo && (
          <Text style={homeStyles.precoAntigoComida}>{precoAntigo}</Text>
        )}
        <Text style={homeStyles.precoComida}>{preco}</Text>
        <TouchableOpacity style={homeStyles.botaoComprar} onPress={comprarComida}>
          <Text style={homeStyles.textoBotaoComprar}>Comprar</Text>
        </TouchableOpacity>
      </View>
    );
  };
  return (
    <View style={homeStyles.containerHome}>
      <View style={homeStyles.containerLogo}>
        <Image source={require('./components/images/logoApp.png')} style={homeStyles.logo} />
      </View>
      <View>
        <TouchableOpacity style={homeStyles.containerPerfil} onPress={() => navigation.navigate('TelaPerfil', { imagemUsuario, usuarioLogado })}>
          <Image source={imagemUsuario} style={homeStyles.perfil} fadeDuration={0} />
        </TouchableOpacity>
      </View>
      <View style={homeStyles.containerInput}>
        <TextInput 
          placeholder="O que você deseja comer hoje?" 
          placeholderTextColor="#313131" 
          style={homeStyles.caixaTextoHome}
          value={busca}
          onChangeText={setBusca} 
        />
      </View>
      <Text style={homeStyles.txtPromocao}>
        {busca.trim() === '' ? 'PROMOÇÕES DA SEMANA!' : 'RESULTADOS DA PESQUISA:'}
      </Text>
      <View style={homeStyles.containerCarrossel}> 
        <FlatList
          data={comidasExibidas}
          keyExtractor={(item) => item.id.toString()}
          horizontal
          showsHorizontalScrollIndicator={false}
          renderItem={({ item }) => (
            <ItemComidaHome 
              id={item.id}
              nomeComida={item.nomeComida} 
              preco={item.preco} 
              precoAntigo={item.precoAntigo}
              fotoComida={item.fotoComida} 
              descricao={item.descricao} 
            />
          )}
          contentContainerStyle={homeStyles.flatListContent}
          style={homeStyles.flatListStyle}
        />
      </View>
      <View style={homeStyles.containerBotoes}>
        <TouchableOpacity style={homeStyles.botaoEntrarHome} onPress={() => navigation.navigate('Comidas')}>
          <Text style={homeStyles.textoBotaoEntrarHome}>Ver mais comidas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={homeStyles.botaoEntrarDevs} onPress={() => navigation.navigate('Desenvolvedores_2')}>
          <Text style={homeStyles.textoBotaoEntrarDevs}>Desenvolvedores</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// -------------------------------------------------------------------------
// FinalizarPedido
function FinalizarPedidoScreen() {
  const route = useRoute();
  const [modalVisivel1, setModalVisivel1] = useState(false);
  const { nomeComida, preco, fotoComida, descricao } = route.params || {};
  const finalizarCompra = () => {
    setModalVisivel1(true);
  };

  const abrirWhatsApp = async () => {
    const numero = '5511949788282';
    const mensagem = `Olá! Gostaria de mais informações sobre o pedido: ${nomeComida || 'Produto'}.`; 
    
    const urlWeb = `https://wa.me/${numero}?text=${encodeURIComponent(mensagem)}`;
    const urlMobile = `whatsapp://send?phone=${numero}&text=${encodeURIComponent(mensagem)}`;

    try {
      if (Platform.OS === 'web') {
        window.open(urlWeb, '_blank');
      } else {
        const supported = await Linking.canOpenURL(urlMobile);
        if (supported) {
          await Linking.openURL(urlMobile);
        } else {
          await Linking.openURL(urlWeb);
        }
      }
    } catch (error) {
      console.error("Erro ao tentar abrir o WhatsApp:", error);
      Alert.alert('Erro', 'Não foi possível abrir o WhatsApp.');
    }  
  }
  
  return (
    <View style={{ flex: 1, backgroundColor: '#f5e6d3', width: '100%', overflowY: 'auto', maxHeight: '100vh' }}>
      <View style={{ width: '100%', alignItems: 'center', paddingBottom: 60 }}>
        <View style={finalizarStyles.containerFinalizar}>
          <Text style={finalizarStyles.tituloPrincipalFinalizar}>Finalizar Pedido</Text>
        </View>
        <View style={finalizarStyles.containerPrincipalFinalizar}>
          {fotoComida && (<Image source={fotoComida} style={finalizarStyles.imagemComidaFinalizar} />)}
          <Text style={finalizarStyles.nomeComidaFinalizar}>{nomeComida}</Text>
          <Text style={finalizarStyles.precoComidaFinalizar}>{preco}</Text>
          <Text style={finalizarStyles.descComidaFinalizar}>{descricao}</Text>
        </View>
        <TouchableOpacity style={finalizarStyles.botaoComprarFinalizar} onPress={finalizarCompra}>
          <Text style={finalizarStyles.textoBotaoComprarFinalizar}>Finalizar compra</Text>
        </TouchableOpacity>
        <TouchableOpacity style={finalizarStyles.botaoWhatsApp} onPress={abrirWhatsApp}>
          <Text style={finalizarStyles.textoBotaoWhatsApp}>Pedir pelo WhatsApp</Text>
        </TouchableOpacity>
      </View>
      <Modal
        isVisible={modalVisivel1}             
        onBackdropPress={() => setModalVisivel1(false)} 
        onBackButtonPress={() => setModalVisivel1(false)} 
        animationIn="flipInY"                     
        animationOut="flipOutY"                    
        animationInTiming={400}                    
        animationOutTiming={400}                   
      >
        <View style={perfilStyles.containerModal}>
          <View style={perfilStyles.containerAlert}>
            <Text style={perfilStyles.modalTitulo}>Compra finalizada: {nomeComida} por {preco}</Text>
            <TouchableOpacity style={perfilStyles.modalBotao} onPress={() => setModalVisivel1(false)}>
              <Text style={perfilStyles.modalBotaoTexto}>Entendido</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

// -------------------------------------------------------------------------
// Navigation Stack
const MyStack = createStackNavigator({
  screens: {
    Login: LoginScreen,
    Home: HomeScreen,
    Desenvolvedores_2: DesenvolvedoresScreen,
    AdminGerenciarUsuarios: AdminGerenciarUsuariosScreen,
    Comidas: ComidasScreen,
    FinalizarPedido: FinalizarPedidoScreen,
    TelaPerfil: perfilScreen,

    Comidas: {
      screen: ComidasScreen,
      options: {
        header: ({ navigation }) => (
          <View style={comidaStyles.headerCustom}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={comidaStyles.botaoVoltar}>
              <Text style={comidaStyles.textoBotaoVoltar}>←</Text>
            </TouchableOpacity>
            <Text style={comidaStyles.tituloHeader}>iComida</Text>
          </View>
        ),
      },
    },

    Home: {
      screen: HomeScreen,
      options: {
        header: ({ navigation }) => (
          <View style={comidaStyles.headerCustom}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={comidaStyles.botaoVoltar}>
              <Text style={comidaStyles.textoBotaoVoltar}>←</Text>
            </TouchableOpacity>
            <Text style={comidaStyles.tituloHeader}>iComida</Text>
          </View>
        ),
      },
    },

    Desenvolvedores_2: {
      screen: DesenvolvedoresScreen,
      options: {
        header: ({ navigation }) => (
          <View style={comidaStyles.headerCustom}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={comidaStyles.botaoVoltar}>
              <Text style={comidaStyles.textoBotaoVoltar}>←</Text>
            </TouchableOpacity>
            <Text style={comidaStyles.tituloHeader}>Desenvolvedores</Text>
          </View>
        ),
      },
    },

    AdminGerenciarUsuarios: {
      screen: AdminGerenciarUsuariosScreen,
      options: {
        header: ({ navigation }) => (
          <View style={comidaStyles.headerCustom}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={comidaStyles.botaoVoltar}>
              <Text style={comidaStyles.textoBotaoVoltar}>←</Text>
            </TouchableOpacity>
            <Text style={comidaStyles.tituloHeader}>Gerenciar Usuários (Admin)</Text>
          </View>
        ),
      },
    },

    Login: {
      screen: LoginScreen,
      options: {
        header: ({ navigation }) => (
          <View style={comidaStyles.headerCustom}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={comidaStyles.botaoVoltar}>
              <Text style={comidaStyles.textoBotaoVoltar}>←</Text>
            </TouchableOpacity>
            <Text style={comidaStyles.tituloHeader}>iComida</Text>
          </View>
        ),
      },
    },

    FinalizarPedido: {
      screen: FinalizarPedidoScreen,
      options: {
        header: ({ navigation }) => (
          <View style={comidaStyles.headerCustom}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={comidaStyles.botaoVoltar}>
              <Text style={comidaStyles.textoBotaoVoltar}>←</Text>
            </TouchableOpacity>
            <Text style={comidaStyles.tituloHeader}>iComida</Text>
          </View>
        ),
      },
    },

    TelaPerfil: {
      screen: perfilScreen,
      options: {
        header: ({ navigation }) => (
          <View style={comidaStyles.headerCustom}>
            <TouchableOpacity onPress={() => navigation.goBack()} style={comidaStyles.botaoVoltar}>
              <Text style={comidaStyles.textoBotaoVoltar}>←</Text>
            </TouchableOpacity>
            <Text style={comidaStyles.tituloHeader}>iComida</Text>
          </View>
        ),
      },
    },
  }, 
});

const Navigation = createStaticNavigation(MyStack);
export default function App() {
  return <Navigation />;
}