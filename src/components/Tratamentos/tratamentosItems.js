import alodine from '../../assets/images/alodine.jpg';
import bissulfeto from '../../assets/images/bissulfeto.jpg';
import cadmio from '../../assets/images/cadmio.jpg';
import estanho from '../../assets/images/estanho.jpg';
import fosfatizacao from '../../assets/images/fosfatizacao.jpg';
import niquel from '../../assets/images/niquel.jpg';

export function getTratamento(item) {
  const tratamentosItems = [
    {
      route: 'alodine',
      title: 'Alodine',
      description: [
        'O que é alodine: Alodine é um tipo de tratamento de superfície para alumínio e suas ligas que forma uma película anticorrosiva de cromatos estáveis',
        'Qual a sua aplicação: Alodine pode ser aplicado por pulverização ou imersão, sem necessidade de corrente elétrica. Alodine é usado principalmente em peças aeronáuticas, automotivas e industriais.',
        'Quais os seus benefícios: Alodine melhora a aderência da tinta e fornece proteção contra corrosão para os substratos de metal leve. Alodine é um produto livre de cromo e formulado especificamente para o tratamento de alumínio e suas ligas, o que reduz o impacto ambiental e os riscos à saúde.',
      ],
      image: alodine,
    },
    {
      route: 'bissulfeto',
      title: 'Bissulfeto de Molibdênio',
      description: [
        'O bissulfeto de molibdênio (MoS2) é um composto químico formado por dois átomos de enxofre e um átomo de molibdênio. Ele tem uma estrutura cristalina em camadas que lhe confere propriedades lubrificantes e antiaderentes.',
        'O tratamento de superfície com bissulfeto de molibdênio consiste em aplicar uma camada fina desse composto sobre um material metálico ou não metálico para melhorar suas características tribológicas, ou seja, relacionadas ao atrito, desgaste e lubrificação.',
        'O tratamento de superfície com bissulfeto de molibdênio pode ser feito por diferentes métodos, como pulverização térmica, deposição química a vapor, imersão a quente ou revestimento por fricção.',
        'Os benefícios do tratamento de superfície com bissulfeto de molibdênio são: redução do coeficiente de atrito e do desgaste entre as superfícies em contato, aumento da resistência à corrosão e à oxidação, melhoria da estabilidade térmica e da condutividade elétrica e possibilidade de operar em condições extremas de temperatura, pressão e umidade.',
        'Aplicação em diversos setores industriais, como automotivo, aeroespacial, mecânico, elétrico e médico.',
      ],
      image: bissulfeto,
    },
    {
      route: 'cadmio',
      title: 'Cádmio',
      description: [
        'O tratamento de superfície com cádmio é um processo de revestimento de peças metálicas com uma camada fina de cádmio para aumentar sua resistência e prevenção contra a corrosão.',
        'O cádmio é um metal branco-prateado que tem boa condutividade elétrica e térmica, baixo ponto de fusão e alta resistência à fadiga.',
        'O tratamento de superfície com cádmio é aplicável em especial em peças do segmento petroquímico, como parafusos, porcas, arruelas e tubos, mas também pode ser usado em outras indústrias que requerem alta durabilidade e proteção contra ambientes agressivos.',
        'Os benefícios do tratamento de superfície com cádmio são: proteger as peças metálicas da oxidação, corrosão galvânica e abrasão; melhorar a soldabilidade, a lubrificação e a aderência de tintas; reduzir o atrito e o desgaste; aumentar a vida útil das peças.',
      ],
      image: cadmio,
    },
    {
      route: 'estanho',
      title: 'Estanho',
      description: [
        'O tratamento de superfície de banho em estanho brilhante é um processo que consiste na aplicação de um revestimento metálico de estanho sobre diversos tipos de materiais.',
        'O principal objetivo desse tratamento é conferir propriedades de proteção às peças, capazes de aprimorar sua resistência e durabilidade.',
        'O banho com estanho brilhante é indicado para peças técnicas, principalmente da indústria eletroeletrônica, que necessitam de excelente condutividade elétrica e resistência à corrosão.',
        'Além disso, o banho com estanho brilhante confere um aspecto estético às peças, pois proporciona um acabamento uniforme e brilhante.',
      ],
      image: estanho,
    },
    {
      route: 'fosfatizacao',
      title: 'Fosfatização',
      description: [
        'O tratamento de superfície de fosfatização é um processo que transforma uma superfície metálica em uma superfície com uma fina camada de fosfato metálico.',
        'O objetivo desse tratamento é proteger o metal da oxidação e da corrosão, também conhecidas como ferrugem e desgaste.',
        'O tratamento também serve como base para um acabamento posterior por pintura ou impregnação de óleos protetivos, melhorando a adesão e a resistência da tinta ao metal.',
        'O tratamento pode ser feito por imersão ou aspersão, dependendo do tipo e do tamanho da peça metálica.',
        'Existem diferentes tipos de fosfatização, como a fosfatização de zinco, a fosfatização de manganês e a fosfatização orgânica.',
        'Cada tipo tem suas vantagens e desvantagens, dependendo da aplicação e das exigências ambientais.',
      ],
      image: fosfatizacao,
    },
    {
      route: 'niquel',
      title: 'Níquel',
      description: [
        'O tratamento de superfície de níquel é uma técnica que visa melhorar as propriedades de peças metálicas, como resistência à corrosão, abrasão e desgaste. Existem dois principais tipos de tratamento de superfície de níquel:',
        'O tratamento a nível químico, usado com banhos em elementos químicos como por exemplo, sulfato de níquel e o hipofosfito de sódio. Esse tipo de tratamento é autocatalítico, ou seja, não precisa de corrente elétrica para ocorrer.',
        'O tratamento eletrolítico, usado com um tratamento a base de uma corrente elétrica de alta potência1. Esse tipo de tratamento permite controlar a espessura e a composição do revestimento de níquel.',
        'Algumas aplicações do tratamento de superfície de níquel são: peças para indústrias petrolíferas, químicas e alimentícias, equipamentos mecânicos, peças automóveis e motocicletas e peças para instrumentos médicos e odontológicos',
        'Alguns benefícios do tratamento de superfície de níquel são: aumento da durabilidade e da vida útil das peças metálicas, melhoria da estética e do brilho das peças metálicas e proteção contra oxidação e corrosão das peças metálicas',
      ],
      image: niquel,
    },
  ];

  return tratamentosItems.filter(
    (tratamentoItem) => tratamentoItem.route === item
  )[0];
}
