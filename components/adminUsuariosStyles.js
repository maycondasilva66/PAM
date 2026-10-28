import { StyleSheet } from 'react-native';
export const adminUsuariosStyles = StyleSheet.create({
  containerPrincipal: {
    flex: 1,
    backgroundColor: '#f3dcbf',
    paddingHorizontal: 15,
    paddingTop: 15,
    width: '100%',
    maxHeight: '100vh',
    overflowY: 'auto',
  },

  botaoCadastrar: {
    backgroundColor: '#b44f0c',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
    alignSelf: 'center',
    width: '90%',
    marginBottom: 20,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
  },

  textoBotaoCadastrar: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
    textAlign: 'center',
  },

  conteudoLista: {
    width: '100%',
    paddingBottom: 20,
  },

  cardUsuario: {
    backgroundColor: '#ffffff',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#e0c4a8',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 2,
  },

  infoUsuario: {
    flex: 1,
  },

  nomeUsuario: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#503EBD',
    marginBottom: 4,
  },

  tipoUsuario: {
    fontSize: 14,
    color: '#666666',
    fontWeight: '600',
  },

  containerAcoes: {
    flexDirection: 'row',
    gap: 10,
  },

  botaoEditar: {
    backgroundColor: '#2196F3',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },

  botaoExcluir: {
    backgroundColor: '#f44336',
    paddingVertical: 8,
    paddingHorizontal: 14,
    borderRadius: 6,
  },

  textoBotaoAcao: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 14,
  },

  containerModalContent: {
    backgroundColor: '#ffffff',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#001322',
  },

  tituloModal: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333333',
    marginBottom: 20,
  },

  inputModal: {
    width: '100%',
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 2,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 15,
    fontSize: 16,
    color: '#333333',         
    textAlignVertical: 'center',
  },

  rotuloTipoUsuario: {
    alignSelf: 'flex-start',
    fontWeight: 'bold',
    fontSize: 15,
    color: '#444444',
    marginBottom: 8,
    marginTop:10,
  },

  containerSelecaoTipo: {
    flexDirection: 'row',
    gap: 10,
    marginBottom: 25,
    width: '100%',
  },

  opcaoTipo: {
    flex: 1,
    paddingVertical: 10,
    borderRadius: 6,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#cccccc',
  },

  opcaoTipoAtiva: {
    backgroundColor: '#b44f0c',
    borderColor: '#b44f0c',
  },

  opcaoTipoInativa: {
    backgroundColor: '#eeeeee',
    borderColor: '#cccccc',
  },

  textoTipoAtivo: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  textoTipoInativo: {
    color: '#333333',
  },

  containerBotoesModal: {
    flexDirection: 'row',
    gap: 12,
    width: '100%',
  },

  botaoCancelarModal: {
    backgroundColor: '#888888',
    paddingVertical: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },

  botaoSalvarModal: {
    backgroundColor: '#b44f0c',
    paddingVertical: 12,
    borderRadius: 8,
    flex: 1,
    alignItems: 'center',
  },

  textoBotaoModal: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  //flat list
  containerInfoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
    flex: 1,
    paddingRight: 10,
  },

  badgeId: {
    backgroundColor: '#503EBD',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 6,
  },

  textoBadgeId: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 13,
  },

  containerTextoUsuario: {
    flex: 1,
  },

  listaContentContainer: {
    paddingBottom: 100,
  },
});