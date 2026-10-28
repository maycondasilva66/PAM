export const COMIDA = [
    // ------------------------------------------------------
    // Fast Food
    {
        id: 1,
        nomeComida: 'Hambúrguer',
        preco: 'R$31,99',
        precoAntigo: 'R$ 38,99',
        categoria: 'Fast Food',
        fotoComida: require('./components/images/hamburguer.jpg'),
        descricao: "Hambúrguer artesanal grelhado com queijo prato, alface, tomate e molho especial, servido em pão de brioche na manteiga."
    },
    {
        id: 2,
        nomeComida: 'Pizza',
        preco: 'R$49,99',
        precoAntigo: 'R$ 59,99',
        categoria: 'Fast Food',
        fotoComida: require('./components/images/pizza.jpg'),
        descricao: "Pizza assada no forno a lenha, coberta com molho de tomate pelati, muçarela de búfala, manjericão fresco e azeite extra virgem."
    },
    {
        id: 14,
        nomeComida: 'Esfiha',
        preco: 'R$18,99',
        precoAntigo: 'R$ 22,99',
        categoria: 'Fast Food',
        fotoComida: require('./components/images/esfiha.jpg'),
        descricao: "Esse salgado árabe é uma massa leve e macia feita ao forno, recheada tradicionalmente com carne moída temperada com limão e especiarias."
    },
    {
        id: 17,
        nomeComida: 'Cachorro-Quente',
        preco: 'R$14,99',
        precoAntigo: 'R$ 18,99',
        categoria: 'Fast Food',
        fotoComida: require('./components/images/cachorroQuente.png'),
        descricao: "Pão macio recheado com salsicha suculenta, molho de tomate caseiro, milho, batata palha e um toque de mostarda e ketchup."
    },
    {
        id: 18,
        nomeComida: 'Batata Frita',
        preco: 'R$12,99',
        precoAntigo: 'R$ 16,99',
        categoria: 'Fast Food',
        fotoComida: require('./components/images/batataFrita.png'),
        descricao: "Porção generosa de batatas fritas crocantes por fora e macias por dentro, temperadas com sal e ervas finas."
    },

    // ------------------------------------------------------
    // Marmita / Comidas Brasileiras
    {
        id: 3,
        nomeComida: 'Feijoada',
        preco: 'R$69,99',
        precoAntigo: 'R$ 79,99',
        categoria: ['Marmita', 'Comidas Brasileiras'],
        fotoComida: require('./components/images/feijoada.jpg'),
        descricao: "Guisado rico de feijão preto cozido lentamente com lombo, paio e bacon. O caldo grosso leva alho, louro e cachaça. Acompanha arroz, couve, farofa e laranja."
    },
    {
        id: 4,
        nomeComida: 'Moqueca',
        preco: 'R$66,99',
        precoAntigo: 'R$ 75,99',
        categoria: ['Marmita', 'Comidas Brasileiras'],
        fotoComida: require('./components/images/moqueca.jpg'),
        descricao: "Cozido tradicional de peixe fresco e frutos do mar em panela de barro. Leva pimentões, cebola, tomate e coentro cozidos lentamente. O molho combina leite de coco e azeite de dendê."
    },
    {
        id: 8,
        nomeComida: 'Macarronada',
        preco: 'R$35,99',
        precoAntigo: 'R$ 42,99',
        categoria: ['Marmita', 'Comidas Brasileiras'],
        fotoComida: require('./components/images/macarrao.jpg'),
        descricao: "Essa massa caseira é um prato reconfortante feito com macarrão cozido al dente e envolvido em um molho de tomate encorpado."
    },
    {
        id: 10,
        nomeComida: 'Frango',
        preco: 'R$32,99',
        precoAntigo: 'R$ 39,99',
        categoria: ['Marmita', 'Comidas Brasileiras'],
        fotoComida: require('./components/images/frango_cozido.jpg'),
        descricao: "Essa carne macia é um prato caseiro feito com pedaços suculentos cozidos lentamente em um caldo rico com temperos e legumes."
    },
    {
        id: 15,
        nomeComida: 'Sopa',
        preco: 'R$19,99',
        precoAntigo: 'R$ 24,99',
        categoria: ['Marmita', 'Comidas Brasileiras'],
        fotoComida: require('./components/images/sopa.jpg'),
        descricao: "Esse prato reconfortante é uma refeição quente feita com um caldo nutritivo cozido lentamente com legumes selecionados e temperos frescos."
    },

    {
        id: 40,
        nomeComida: 'Espetinhos',
        preco: 'R$15,99',
        precoAntigo: 'R$ 19,99',
        categoria: ['Marmita', 'Comidas Brasileiras'],
        fotoComida: require('./components/images/espetinho.webp'),
        descricao: "Combo de espetinhos de carne, coração de galinha, frango e linguiça"
    },
    {
        id: 41,
        nomeComida: 'Churrasco',
        preco: 'R$33,99',
        precoAntigo: 'R$ 41,99',
        categoria: ['Marmita', 'Comidas Brasileiras'],
        fotoComida: require('./components/images/marmitaChurrasco.jpg'),
        descricao: "Neymar comeria um desses"
    },
    // {
    //     id: 42,
    //     nomeComida: 'Strogonoff',
    //     preco: 'R$29,99',
    //     precoAntigo: 'R$ 35,99',
    //     categoria: ['Marmita', 'Comidas Brasileiras'],
    //     fotoComida: require('./components/images/marmitaStrogonoff'),
    //     descricao: "Chá gelado adoçado na medida certa, servido com gelo e uma rodela de limão para refrescar."
    // },

    // ------------------------------------------------------
    // Vegetariano
    {
        id: 5,
        nomeComida: 'Salada',
        preco: 'R$15,99',
        precoAntigo: 'R$ 19,99',
        categoria: 'Vegetariano',
        fotoComida: require('./components/images/salada.jpg'),
        descricao: "Salada refrescante de folhas verdes, vegetais coloridos e fatias de tomate. Leva lascas de parmesão e croutons dourados. É finalizada com azeite extra virgem e ervas frescas."
    },
    {
        id: 21,
        nomeComida: 'Wrap Vegetariano',
        preco: 'R$22,99',
        precoAntigo: 'R$ 27,99',
        categoria: 'Vegetariano',
        fotoComida: require('./components/images/wrapVegetariano.png'),
        descricao: "Tortilha macia recheada com grão-de-bico temperado, folhas verdes, cenoura ralada, pepino e molho de iogurte com ervas."
    },
    {
        id: 22,
        nomeComida: 'Risoto de Cogumelos',
        preco: 'R$28,99',
        precoAntigo: 'R$ 34,99',
        categoria: 'Vegetariano',
        fotoComida: require('./components/images/risotoCogumelos.png'),
        descricao: "Arroz arbóreo cozido lentamente com caldo de legumes, finalizado com cogumelos salteados na manteiga e queijo parmesão."
    },
    {
        id: 23,
        nomeComida: 'Falafel',
        preco: 'R$19,99',
        precoAntigo: 'R$ 24,99',
        categoria: 'Vegetariano',
        fotoComida: require('./components/images/falafel.png'),
        descricao: "Bolinhos crocantes de grão-de-bico temperados com cominho e coentro, servidos com molho tahine e pão sírio."
    },
    {
        id: 24,
        nomeComida: 'Torta de Legumes',
        preco: 'R$24,99',
        precoAntigo: 'R$ 29,99',
        categoria: 'Vegetariano',
        fotoComida: require('./components/images/tortaLegumes.png'),
        descricao: "Massa amanteigada recheada com um mix de legumes salteados, queijo e ervas frescas, assada até dourar."
    },

    // ------------------------------------------------------
    // Bebidas
    {
        id: 6,
        nomeComida: 'Suco Natural',
        preco: 'R$11,99',
        precoAntigo: 'R$ 14,99',
        categoria: 'Bebidas',
        fotoComida: require('./components/images/sucoNatural.jpg'),
        descricao: "Esse suco natural é uma bebida refrescante feita com frutas frescas espremidas ou batidas na hora."
    },
    {
        id: 7,
        nomeComida: 'Coca-Cola',
        preco: 'R$8,99',
        precoAntigo: 'R$ 11,99',
        categoria: 'Bebidas',
        fotoComida: require('./components/images/coca_cola.png'),
        descricao: "Esse refrigerante icônico é uma bebida gaseificada refrescante feita com extrato de noz de cola e servida bem gelada."
    },
    {
        id: 12,
        nomeComida: 'Energético',
        preco: 'R$4,99',
        precoAntigo: 'R$ 7,99',
        categoria: 'Bebidas',
        fotoComida: require('./components/images/energetico.webp'),
        descricao: "Essa bebida funcional é uma opção estimulante feita com cafeína e taurina para garantir uma dose extra de energia e foco."
    },
    {
        id: 19,
        nomeComida: 'Água Mineral',
        preco: 'R$5,99',
        precoAntigo: 'R$ 7,99',
        categoria: 'Bebidas',
        fotoComida: require('./components/images/aguaMineral.png'),
        descricao: "Água mineral gelada, leve e refrescante, ideal para acompanhar qualquer refeição."
    },
    {
        id: 20,
        nomeComida: 'Chá Gelado',
        preco: 'R$7,99',
        precoAntigo: 'R$ 9,99',
        categoria: 'Bebidas',
        fotoComida: require('./components/images/chaGelado.png'),
        descricao: "Chá gelado adoçado na medida certa, servido com gelo e uma rodela de limão para refrescar."
    },
    {
        id: 36,
        nomeComida: 'Cervejas',
        preco: 'R$11,99',
        precoAntigo: 'R$ 15,99',
        categoria: 'Bebidas',
        fotoComida: require('./components/images/cerveja2.jpg'),
        descricao: "Cerveja gelada estralando alegria"
    },


    // ------------------------------------------------------
    // Comidas Japonesa
    {
        id: 9,
        nomeComida: 'Sushi',
        preco: 'R$31,99',
        precoAntigo: 'R$ 39,99',
        categoria: 'Comidas Japonesa',
        fotoComida: require('./components/images/sushi.jpg'),
        descricao: " Essa iguaria japonesa é um prato delicado feito com arroz temperado com vinagre e combinado com peixes frescos ou frutos do mar."
    },
    {
        id: 25,
        nomeComida: 'Temaki',
        preco: 'R$16,99',
        precoAntigo: 'R$ 21,99',
        categoria: 'Comidas Japonesa',
        fotoComida: require('./components/images/temaki.png'),
        descricao: "Cone crocante de alga nori recheado com arroz temperado, peixe fresco, cream cheese e cebolinha."
    },
    {
        id: 26,
        nomeComida: 'Yakisoba',
        preco: 'R$29,99',
        precoAntigo: 'R$ 36,99',
        categoria: 'Comidas Japonesa',
        fotoComida: require('./components/images/yakisoba.png'),
        descricao: "Macarrão oriental salteado no wok com legumes crocantes, carne e um molho agridoce à base de shoyu."
    },
    {
        id: 27,
        nomeComida: 'Hot Roll',
        preco: 'R$24,99',
        precoAntigo: 'R$ 30,99',
        categoria: 'Comidas Japonesa',
        fotoComida: require('./components/images/hotRoll.png'),
        descricao: "Rolinho de sushi empanado e frito, recheado com salmão e cream cheese, servido com molho tarê."
    },
    {
        id: 28,
        nomeComida: 'Missoshiru',
        preco: 'R$9,99',
        precoAntigo: 'R$ 13,99',
        categoria: 'Comidas Japonesa',
        fotoComida: require('./components/images/missoshiru.png'),
        descricao: "Sopa tradicional japonesa à base de pasta de missô, tofu, algas wakame e cebolinha."
    },

    // ------------------------------------------------------
    // Salgados
    {
        id: 11,
        nomeComida: 'Coxinha',
        preco: 'R$18,99',
        precoAntigo: 'R$ 23,99',
        categoria: ['Salgados', 'Comidas Brasileiras'],
        fotoComida: require('./components/images/coxinha.jpg'),
        descricao: "Esse salgado icônico é uma delícia crocante feita com massa de batata moldada em forma de gota e recheada com frango desfiado temperado."
    },
    {
        id: 29,
        nomeComida: 'Pastel',
        preco: 'R$9,99',
        precoAntigo: 'R$ 13,99',
        categoria: ['Salgados', 'Comidas Brasileiras'],
        fotoComida: require('./components/images/pastel.png'),
        descricao: "Massa fininha frita até ficar bem crocante, recheada com carne moída temperada e queijo derretido."
    },
    {
        id: 30,
        nomeComida: 'Kibe',
        preco: 'R$8,99',
        precoAntigo: 'R$ 12,99',
        categoria: ['Salgados', 'Comidas Brasileiras'],
        fotoComida: require('./components/images/kibe.png'),
        descricao: "Salgado árabe frito, feito com trigo para quibe e carne moída temperada com hortelã e especiarias."
    },
    {
        id: 31,
        nomeComida: 'Empada',
        preco: 'R$10,99',
        precoAntigo: 'R$ 14,99',
        categoria: ['Salgados', 'Comidas Brasileiras'],
        fotoComida: require('./components/images/empada.png'),
        descricao: "Massa amanteigada assada, recheada com frango desfiado e temperos, uma opção mais leve entre os salgados."
    },
    {
        id: 32,
        nomeComida: 'Rissole',
        preco: 'R$8,99',
        precoAntigo: 'R$ 12,99',
        categoria: ['Salgados', 'Comidas Brasileiras'],
        fotoComida: require('./components/images/risole.png'),
        descricao: "Massa macia frita em formato de meia-lua, recheada com presunto e queijo derretido."
    },

    // ------------------------------------------------------
    // Sobremesas
    {
        id: 13,
        nomeComida: 'Brownie',
        preco: 'R$27,99',
        precoAntigo: 'R$ 34,99',
        categoria: 'Sobremesas',
        fotoComida: require('./components/images/brownie.webp'),
        descricao: "Esse doce americano é uma sobremesa densa feita com chocolate meio amargo, textura macia por dentro e uma casquinha crocante por fora."
    },
    {
        id: 16,
        nomeComida: 'Casquinha Sorvete',
        preco: 'R$58,99',
        precoAntigo: 'R$ 69,99',
        categoria: 'Sobremesas',
        fotoComida: require('./components/images/sorvete.webp'),
        descricao: "Essa sobremesa clássica é uma combinação refrescante feita com sorvete cremoso servido em uma casquinha de biscoito doce super crocante."
    },
    {
        id: 33,
        nomeComida: 'Pudim',
        preco: 'R$12,99',
        precoAntigo: 'R$ 16,99',
        categoria: 'Sobremesas',
        fotoComida: require('./components/images/pudim.png'),
        descricao: "Pudim de leite condensado cremoso, com uma calda de caramelo generosa por cima."
    },
    {
        id: 34,
        nomeComida: 'Torta de Limão',
        preco: 'R$14,99',
        precoAntigo: 'R$ 18,99',
        categoria: 'Sobremesas',
        fotoComida: require('./components/images/tortaLimao.png'),
        descricao: "Base crocante de biscoito com recheio cremoso de limão e cobertura de merengue maçaricado."
    },
    {
        id: 35,
        nomeComida: 'Mousse de Chocolate',
        preco: 'R$13,99',
        precoAntigo: 'R$ 17,99',
        categoria: 'Sobremesas',
        fotoComida: require('./components/images/mouseChocolate.png'),
        descricao: "Mousse aerado e cremoso feito com chocolate meio amargo, leve e intenso ao mesmo tempo."
    },
    {
        id: 37,
        nomeComida: 'Açaí',
        preco: 'R$19,99',
        precoAntigo: 'R$ 24,99',
        categoria: 'Sobremesas',
        fotoComida: require('./components/images/acai.jpg'),
        descricao: "Açaí cremoso com cobertura de leite condensado com Nutella."
    },
    {
        id: 38,
        nomeComida: 'Bolo De Pote',
        preco: 'R$22,99',
        precoAntigo: 'R$ 28,99',
        categoria: 'Sobremesas',
        fotoComida: require('./components/images/boloPote.jpg'),
        descricao: "Bolo de pote preparado com amor e muita dedicação e doce"
    },

    // {
    //     id: 39,
    //     nomeComida: 'Bolo Vulcão de Chocolate',
    //     preco: 'R$44,99',
    //     precoAntigo: 'R$ 54,99',
    //     categoria: 'Sobremesas',
    //     fotoComida: require('./components/images/boloVulcão.jfif'),
    //     descricao: "Bolo vulcão de chocolate."
    // },
];