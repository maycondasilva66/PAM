// ------------------------------------------------------
  // Comidas
  import { StyleSheet } from 'react-native';
  export const comidaStyles = StyleSheet.create({

  containerPrincipalComida: {
    flex: 1,                    
    backgroundColor: '#f5e6d3',
    width: '100%',
    maxHeight: '100vh',
    overflowY: 'auto',
  },

  containerTextoPrincipalComida: {
    width: '100%',
    justifyContent: 'flex-start',
    paddingTop: 20, 
    alignItems: 'center',
    height: 100,
  },

  containerFiltroComida: {
    marginTop: 25,
    marginHorizontal: 20,
    marginBottom: 15,
  },

  textoPrincipalComida: {
    textAlign: 'center',
    fontSize: 28,
    color: '#ffffff',
    fontWeight: 'bold',
    marginBottom: 25,
    backgroundColor: '#d35400',
    padding: 12,
    paddingHorizontal: 25,
    borderRadius: 12,
  },

  containerPickerWrapper: {
    width: '100%',
    backgroundColor: '#ffffff',
    borderRadius: 14,
    borderWidth: 2,
    borderColor: '#d35400',
    overflow: 'hidden', 
    justifyContent: 'center',
    height: 50,
  },

  pickerComida: {
    width: '100%',
    height: 50,
    backgroundColor: 'transparent',
    color: '#2c2c2c',
    fontSize: 21,
    fontWeight: 'bold',
    paddingHorizontal: 16,
    outlineStyle: 'none', 
    borderWidth: 0,       
  },
  
  flatListContent: {
    paddingHorizontal: 20,
    paddingBottom: 60,          
  },

  flatListStyle: {
    flex: 1,                    
    width: '100%',
  },

  blocoComida: {
    backgroundColor: '#ffffff',
    padding: 15,
    borderRadius: 12,
    marginBottom: 18,
    alignItems: 'center',
  },

  imagemComida: {
    width: '100%',
    height: 180,
    borderRadius: 10,
    marginBottom: 12,
  },

  nomeComida: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#2c2c2c',
    marginBottom: 5,
  },

  descricaoComida: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 10,
  },

  precoComidaAntesPromocao: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#ac0404',
    marginBottom: 12,
  },

  precoComida: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#228b22',
    marginBottom: 12,
  },

  botaoComprar: {
    backgroundColor: '#d35400',
    paddingVertical: 11,
    paddingHorizontal: 30,
    borderRadius: 8,
    borderWidth: 1.8,
    borderColor: '#0e0d0d',
  },

  textoBotaoComprar: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },

  precoAntigoComida: {
    fontSize: 17,
    color: '#9c0e0e',
    textDecorationLine: 'line-through',
    textAlign: 'center',
    marginBottom: 2,
  },

  //Parte de cima do app
  headerCustom: {
    height: 80,
    // backgroundColor: '#006e7c', 
    backgroundColor: '#170e7c',
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
    fontSize: 27,
    fontWeight: 'bold',
  },

  tituloHeader: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});