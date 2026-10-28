// ------------------------------------------------------
  // Home
import { StyleSheet, StatusBar } from 'react-native';
export const homeStyles = StyleSheet.create({

  containerHome: {
    flex: 1,
    backgroundColor: '#f3dcbf',
    width: '100%',
    height: '100vh',           
    alignItems: 'center',
    justifyContent: 'flex-start', 
    paddingTop: 7,
    paddingBottom: 50,
  },

  containerLogo: {
    width: 110,
    height: 110,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 17,
    marginTop: 0,
    overflow: 'hidden',
    borderRadius:55,
  },

  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },


  containerCarrossel: {
    height: 346,           
    width: '100%',
    marginTop:0,
    padding:0,
  },

  flatListContent: {
    paddingHorizontal: 16, 
    alignItems: 'center', 
  },

  flatListStyle: {
    flexGrow: 0,              
    width: '100%',
  },

  txtPromocao: {
    textAlign: 'center',
    fontSize: 26,             
    color: '#a80d02',
    marginTop: 16,
    marginBottom: 16,          
    fontWeight: 'bold',
  },

  containerBotoes: {
    width: '100%', 
    alignItems: 'center', 
    justifyContent: 'center',
    gap: 9,    
    marginTop:8,
    marginBottom:40,  
  },

  botaoEntrarHome: {
    width: '80%', 
    alignSelf: 'center', 
    padding: 15, 
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2.3,
    borderColor: '#0e0d0d',
    backgroundColor: '#C25100',
  },

  textoBotaoEntrarHome: {
    color: '#f1e8e8',
    fontWeight: 'bold',
    fontSize: 17,
  },

  botaoEntrarDevs: {
    width: '80%', 
    alignSelf: 'center', 
    padding: 15, 
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2.3,
    borderColor: '#0e0d0d',
    backgroundColor: '#004c4e',
  },

  textoBotaoEntrarDevs: {
    color: '#f1e8e8',
    fontWeight: 'bold',
    fontSize: 17,
  },

  botaoEntrarPergunta: {
    width: '80%', 
    alignSelf: 'center', 
    padding: 15, 
    borderRadius: 8,
    alignItems: 'center',
    borderWidth: 2.3,
    borderColor: '#0e0d0d',
    backgroundColor: '#1a1d1d',
  },

  textoBotaoEntrarPergunta: {
    color: '#f1e8e8',
    fontWeight: 'bold',
    fontSize: 17,
  },

  blocoComida: {
    backgroundColor: '#ffffff',
    padding: 20,              
    borderRadius: 15,
    marginRight: 16, 
    height: '98%',
    alignItems: 'center',
    justifyContent: 'space-between', 
    elevation: 3, 
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },

  imagemComida: {
    width: '100%',
    height: 150,              
    borderRadius: 10,
    marginBottom: 4,
    resizeMode: 'cover',
  },

  nomeComida: {
    fontSize: 27,
    fontWeight: 'bold',
    color: '#2c2c2c',
    marginBottom: 3,
  },

  precoComida: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#228b22',
    marginBottom: 4,
  },

  precoComidaAntesPromocaoBase: {
    fontSize: 19,
    fontWeight: 'bold',
    color: '#a80505',
    marginBottom: 3,
  },

  precoComidaRiscado: {
    textDecorationLine: 'line-through',
  },

  botaoComprar: {
    backgroundColor: '#d35400',
    paddingVertical: 12,   
    paddingHorizontal: 23, 
    borderRadius: 8,
    borderWidth: 1.8,
    borderColor: '#0e0d0d',
    marginTop:11,
  },

  botaoEntrarPerfil: {
    position: 'absolute',
    bottom: 50,
    left: 100,
    // width: 80,
    // height: 80,
    borderRadius: 22.5,
    borderWidth: 2,
    borderColor: '#C25100',
    overflow: 'hidden',
  }, 
  
  perfil: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
    overflow: 'hidden',
  },

  containerPerfil: {
    width: 45,
    height: 45,
    borderWidth: 2,
    // alignItems: 'left',
    // justifyContent: 'left',
    marginTop: -120,
    overflow: 'hidden',
    borderRadius:55,
    position: 'absolute',
    left: 140,  
    resizeMode: 'contain',
  },

  textoBotaoComprar: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 17,
  },
  
  containerInput: {
    flexDirection: 'row',     
    alignItems: 'center',       
    backgroundColor: '#FFFFFF', 
    width: '85%',            
    height: 50,               
    borderRadius: 22,           
    paddingHorizontal: 16,     
    alignSelf: 'center',       
    elevation: 4,    
    marginBottom: 8,          
  },

  caixaTextoHome: {
    flex: 1,                     
    height: '100%',
    fontSize: 17,
    color: '#070707',       
    textAlign: 'center',        
    textAlignVertical: 'center',
    outlineStyle: 'none',       
  },

  precoAntigoComida: {
    fontSize: 16,
    color: '#9c0e0e',
    textDecorationLine: 'line-through', 
    textAlign: 'center',
    marginBottom: 2,
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