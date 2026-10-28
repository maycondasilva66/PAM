// ------------------------------------------------------
  // Login
import { StyleSheet, StatusBar } from 'react-native';
export const loginStyles = StyleSheet.create({

  containerLogin: {
    flex: 1,
    // marginTop: StatusBar.currentHeight || 0,
    backgroundColor: '#f3dcbf',
    // backgroundColor: '#fdfdfd',
    width: '100%',
    alignItems: 'center',
    // justifyContent: 'flex-start',
    paddingTop: 15,
  },

  containerLogo: {
    width: 140,
    height: 140,
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
    marginTop: 0,
    overflow: 'hidden',
    borderRadius: 70,
  },

  logo: {
    width: '100%',
    height: '100%',
    resizeMode: 'contain',
  },

  textoAbaixoLogo: {
    textAlign: 'center',
    color: '#3a3935',
    fontSize: 26,
    marginBottom: 40,
    marginTop:15,
  },

  textoPrincipalScreenLogin: {
    textAlign: 'center',
    fontSize: 22,
    color: '#f0e4e4',
    // color: '#111111',
    fontWeight: 'bold',
    marginBottom: 35,
    backgroundColor: '#d35400',
    // backgroundColor: '#fad327',
    // backgroundColor: '#62b0dd',
    padding: 14,
    paddingHorizontal: 40,
    borderRadius: 14,
    borderColor: '#001322',
    borderWidth: 2.1,
    marginTop:0,
  },

  containerTextInputLogin: {
    width: '85%',
    padding: 20,
    borderRadius: 12,
    // backgroundColor: '#003561',
    backgroundColor: '#2c1ca8',
    alignItems: 'center',
    borderWidth:2,
    borderColor:'#006e7c',
  },

  caixaTextoLogin: {
    backgroundColor: '#fff',
    width: '100%',
    height: 48, 
    paddingHorizontal: 12,
    marginBottom: 12,
    borderRadius: 8,
    borderWidth: 2,
    borderColor: '#1f0604',
    fontSize: 16,
    color: '#333',
    textAlignVertical: 'center', 
  },

  botaoEntrarLogin: {
    backgroundColor: '#f0690e',
    // backgroundColor: '#e4f121',
    // backgroundColor: '#fad327',
    width: '100%',
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 10,
    borderWidth: 2.3,
    borderColor: '#0e0d0d',
  },

  textoBotaoEntrarLogin: {
    color: '#080808',
    fontWeight: 'bold',
    fontSize: 16,
  },

  containerCheckboxRow: {
    flexDirection: 'row', 
    alignItems: 'center', 
    marginVertical: 10,  
    gap: 10,              
  },

  textoCheckbox: {
    fontSize: 15,       
    color: '#f7f7f7',     
    flexShrink: 1,      
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