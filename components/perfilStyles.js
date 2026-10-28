import { StyleSheet, StatusBar } from 'react-native';

export const perfilStyles = StyleSheet.create({
    containerPerfil: {
        flex: 1,
        backgroundColor: '#f3dcbf',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'flex-start',
        paddingTop: 10,
        paddingBottom: 40,
    },

    viewDeCima: {
        alignItems: 'center',
        justifyContent: 'center',
        paddingVertical: 15, 
        backgroundColor: '#f3dcbf',
        width: '100%',
    },

    tituloCima: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#444',
        marginBottom: 15, 
    },

    imgPerfil: {
        width: 130,
        height: 130,
        borderRadius: 65,
        borderWidth: 4,
        borderColor: '#c06e09',
        resizeMode: 'cover'
    },

    textoPrincipal: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 25,
        fontWeight: 'bold',
        // backgroundColor: '#503EBD',
        backgroundColor: '#ed5e03',
        paddingVertical: 12,
        paddingHorizontal: 30,
        borderRadius: 14,
        borderColor: '#001322',
        borderWidth: 2,
        marginTop: 20,
        overflow: 'hidden',
    },

    containerQuadradoEmVolta: {
        width: '90%',
        // backgroundColor: '#575968',
        backgroundColor: '#575968',
        borderRadius: 14,
        borderColor: '#001322',
        borderWidth: 2,
        marginTop: 8,
        paddingBottom: 25,
        alignItems: 'center',
    },

    textoFormasPagamento: {
        textAlign: 'center',
        color: '#020202',
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        backgroundColor: '#ffa500',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 12,
        borderColor: '#001322',
        borderWidth: 2,
        alignSelf: 'center',
        overflow: 'hidden',
    },

    containerOpcoes: {
        marginTop: 25,
        width: '100%',
        flexDirection: 'row', 
        alignItems: 'center',
        justifyContent: 'center',
        gap: 8,
    },

    estrelaTexto: {
        fontSize: 38,
        color: '#FFD700',
        paddingHorizontal: 4,
    },

    textoOpcaoSelecionada: {
        textAlign: 'center',
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        marginTop: 20,
        paddingHorizontal: 10,
    },

    botaoPagar: {
        backgroundColor: '#d35400',
        padding: 12,
        borderRadius: 8,
        borderWidth: 2,
        borderColor: '#0e0d0d',
        marginTop: 25,
        width: '85%',
        alignSelf: 'center',
    },

    textoBotaoPagar: {
        color: '#ffffff',
        fontWeight: 'bold',
        fontSize: 18,
        textAlign: 'center',
    },

    containerModal: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        justifyContent: 'center',
        alignItems: 'center',
    },

    containerAlert: {
        width: '80%',
        backgroundColor: '#575968',
        borderRadius: 14,
        padding: 20,
        alignItems: 'center',
        borderColor: '#001322',
        borderWidth: 2,
    },

    modalTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#FFF',
        marginBottom: 15,
        textAlign: 'center',
    },

    modalMensagemOpcaoEscolhida: {
        fontSize: 16,
        color: '#E0E0E0',
        textAlign: 'center',
        marginBottom: 20,
    },

    modalBotao: {
        backgroundColor: '#503EBD', 
        paddingVertical: 10,
        paddingHorizontal: 30,
        borderRadius: 10,
    },

    modalBotaoTexto: {
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 16,
    },
});