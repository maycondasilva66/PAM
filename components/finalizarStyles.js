// ------------------------------------------------------
  // Finalização do pedido
import { StyleSheet } from 'react-native';
export const finalizarStyles = StyleSheet.create({
    
  containerFinalizar: {
    marginTop: 10,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 7,
  },

  tituloPrincipalFinalizar: {
    textAlign: 'center',
    fontSize: 26,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 8,
    backgroundColor: '#d35400',
    padding: 10,
    paddingHorizontal: 25,
    borderRadius: 12,
  },

  containerPrincipalFinalizar: {
    backgroundColor: '#ffffff',
    width: '90%',
    padding: 15,
    borderRadius: 12,
    alignItems: 'center',
    marginTop: 8,
  },

  imagemComidaFinalizar: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 10,
    resizeMode: 'cover',
  },

  nomeComidaFinalizar: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c2c2c',
    textAlign: 'center',
    marginBottom: 5,
  },

  descComidaFinalizar: {
    fontSize: 16,
    color: '#555555',
    textAlign: 'center',
    marginBottom: 15,
    lineHeight: 23,
  },

  precoComidaFinalizar: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#228b22',
    marginBottom: 15,
  },

  botaoComprarFinalizar: {
    backgroundColor: '#d35400',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 15,
    borderWidth: 1.8,
    borderColor: '#0e0d0d',
    marginBottom: 20,
  },

  textoBotaoComprarFinalizar: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  botaoWhatsApp: {
    backgroundColor: '#25D366',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 8,
    marginTop: 10,
    marginBottom: 20,
    borderWidth: 1.8,
    borderColor: '#0e0d0d',
  },
  
  textoBotaoWhatsApp: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  //Parte de cima do app
  headerCustom: {
    height: 60,
    backgroundColor: '#006e7c', 
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 15,
    elevation: 4, 
    shadowColor: '#000', 
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    justifyContent: 'center',
    position: 'relative',
  },

  botaoVoltar: {
    left: 15,
    zIndex:1,
    position: 'absolute',
  },

  textoBotaoVoltar: {
    color: '#FFFFFF',
    fontSize: 24,
    fontWeight: 'bold',
  },

  tituloHeader: {
    color: '#FFFFFF',
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});