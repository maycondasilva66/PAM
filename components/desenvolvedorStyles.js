import { StyleSheet,Platform } from 'react-native';
export const desenvolvedorStyles = StyleSheet.create({
  containerPrincipalDesenvolvedores_2: {
    flex: 1,
    backgroundColor: '#f3dcbf', 
    // backgroundColor: '#fdfdfd',
    width: '100%',
    paddingTop: 20,
    height: '100vh',            
    maxHeight: '100vh',
  },

  tituloPrincipalDevs_2: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#a80d02',
    textAlign: 'center',
    marginBottom: 16,
  },

  containerInputBusca: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 25,
    height: 50,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom: 20,
    borderWidth: 2,
    borderColor: '#001322',
  },

  caixaTextoBusca: {
    flex: 1,
    height: '100%',
    fontSize: 16,
    color: '#333333',
    textAlignVertical: 'center',
    outlineStyle: 'none',
  },

  conteudoListasDevs_2: {
    paddingHorizontal: 16,
    paddingBottom: 80,
  },

  itemDevs_2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 30,
    borderWidth: 2,
    borderColor: '#001322',
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
  },

  containerImgDev_2: {
    height: 110, 
    width: 110,  
    borderRadius: 55, 
    overflow: 'hidden',
    borderWidth: 2.5,
    borderColor: '#ED5E03', 
    marginRight: 16,
    backgroundColor: '#ffffff', 
  },

  imgDev_2: {
    height: '100%',
    width: '100%',
    resizeMode: 'cover',
    ...Platform.select({
      web: {
        imageRendering: 'high-quality', 
      },
    }),
  },

  containerTextoDev_2: {
    flex: 1,
    justifyContent: 'center',
  },

  nomeDev_2: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c2c2c',
    marginBottom: 4,
  },

  idadeDev_2: {
    fontSize: 15,
    color: '#228b22',
    fontWeight: '600',
  },
});