import alodine from '../../assets/images/alodine.jpg';
import bissulfeto from '../../assets/images/bissulfeto.jpg';
import cadmio from '../../assets/images/cadmio.jpg';
import estanho from '../../assets/images/estanho.jpg';

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
  ];

  return tratamentosItems.filter(
    (tratamentoItem) => tratamentoItem.route === item
  )[0];
}
