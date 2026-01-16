// ============================================
// TENUA - SITE CONTENT DATA
// Edite este arquivo para alterar todo o conteúdo do site
// ============================================

export const SITE_CONFIG = {
  name: 'Tenua',
  tagline: 'Feito à mão. Tecido com sentimento.',
  description:
    'Ateliê autoral de crochê artesanal. Peças únicas feitas com amor, tempo e dedicação.',

  // Links de contato - EDITE AQUI
  whatsapp: '5589999812679', // Número com código do país, sem espaços ou símbolos
  whatsappMessage:
    'Olá! Vim pelo site e gostaria de saber mais sobre as peças da Tenua.',
  instagram: 'tenua.artesanal',
  email: 'contato@tenua.com.br',
  website: 'tenua.com.br',
}

export const HERO_CONTENT = {
  subtitle: 'Ateliê de Crochê Autoral',
  title: 'Tenua',
  tagline: 'Feito à mão. Tecido com sentimento.',
  description:
    'Cada peça é uma história tecida com calma, paciência e muito carinho. Criamos objetos únicos que acolhem, conectam e transformam espaços em lares.',
  ctaPrimary: 'Fazer Pedido',
  ctaSecondary: 'Ver Instagram',
}

export const ABOUT_CONTENT = {
  sectionTitle: 'Nossa História',
  sectionSubtitle: 'O Início de Tudo',
  paragraphs: [
    'A Tenua nasce do silêncio e da repetição. Mais do que uma marca de crochê, é o resgate de uma herança familiar que atravessa gerações através das mãos que tecem.',
    'Em um mundo que corre sem fôlego, a Tenua escolhe parar. O crochê aqui não é apenas técnica — é terapia, é cuidado e, acima de tudo, é uma forma de materializar o afeto em cada laçada.',
    'Nossa jornada começou com o desejo de valorizar o tempo lento. Cada peça carrega consigo o ritmo humano, a imperfeição perfeita do artesanal e a memória de quem a criou.',
  ],
  quote: 'Transformamos fios em histórias, pontos em gestos de carinho.',
}

export const ESSENCE_CONTENT = {
  sectionTitle: 'Essência da Marca',
  sectionSubtitle: 'Missão, Visão e Valores',
  mission: {
    title: 'Missão',
    description:
      'Valorizar o feito à mão, criando peças artesanais que acolhem, conectam e carregam sentimento.',
  },
  vision: {
    title: 'Visão',
    description:
      'Ser referência em design artesanal autoral, conectando a tradição ao lifestyle contemporâneo.',
  },
  values: [
    {
      number: '01',
      title: 'Autenticidade',
      description: 'Expressão genuína através de designs autorais.',
    },
    {
      number: '02',
      title: 'Afeto',
      description: 'Cuidado em cada detalhe do processo e entrega.',
    },
    {
      number: '03',
      title: 'Tradição',
      description: 'Honrar o saber manual passado entre gerações.',
    },
    {
      number: '04',
      title: 'Acessibilidade',
      description: 'Arte artesanal ao alcance de quem valoriza.',
    },
    {
      number: '05',
      title: 'Simplicidade',
      description: 'A beleza que reside no essencial e natural.',
    },
  ],
}

export const PRODUCTS_CONTENT = {
  sectionTitle: 'Coleções',
  sectionSubtitle: 'Destaques do Ateliê',
  products: [
    {
      id: 'bolsa-mediterraneo',
      name: 'Bolsa Mediterrâneo',
      description:
        'Bolsa artesanal em fio de algodão, perfeita para o dia a dia com elegância natural.',
      category: 'Acessórios',
      price: 'A partir de R$ 180',
      available: true,
    },
    {
      id: 'almofada-mandala',
      name: 'Almofada Mandala',
      description:
        'Almofada decorativa com padrão mandala, trazendo aconchego e sofisticação para seu lar.',
      category: 'Decoração',
      price: 'A partir de R$ 120',
      available: true,
    },
    {
      id: 'tapete-sol',
      name: 'Tapete Sol',
      description:
        'Tapete circular com bordas detalhadas, uma obra de arte para receber os dias com calor.',
      category: 'Decoração',
      price: 'A partir de R$ 350',
      available: true,
    },
    {
      id: 'kit-presente',
      name: 'Kit Presente Afeto',
      description:
        'Conjunto especial para presentear com carinho: manta bebê, embalagem artesanal e cartão.',
      category: 'Presentes',
      price: 'A partir de R$ 250',
      available: true,
    },
  ],
  ctaText: 'Quero Encomendar',
}

export const GALLERY_CONTENT = {
  sectionTitle: 'Portfólio',
  sectionSubtitle: 'Galeria de Peças',
  categories: ['Todas', 'Decoração', 'Acessórios', 'Presentes', 'Lifestyle'],
}

export const ORDER_CONTENT = {
  sectionTitle: 'Como Encomendar',
  sectionSubtitle: 'Passo a Passo',
  description:
    'Cada peça Tenua é feita especialmente para você. Veja como funciona:',
  steps: [
    {
      number: '01',
      title: 'Escolha a Peça',
      description: 'Navegue pelo portfólio ou compartilhe sua ideia conosco.',
    },
    {
      number: '02',
      title: 'Personalize',
      description: 'Defina cores, tamanhos e detalhes que combinem com você.',
    },
    {
      number: '03',
      title: 'Prazo de Produção',
      description:
        'Informamos o tempo necessário para tecer sua peça com cuidado.',
    },
    {
      number: '04',
      title: 'Pagamento',
      description:
        'Pix, cartão ou transferência. Entrada para confirmar o pedido.',
    },
    {
      number: '05',
      title: 'Envio ou Retirada',
      description: 'Enviamos para todo o Brasil ou combine a retirada.',
    },
  ],
  note: 'Cada peça leva tempo. É assim que garantimos qualidade e amor em cada ponto.',
}

export const CARE_CONTENT = {
  sectionTitle: 'Cuidados com a Peça',
  sectionSubtitle: 'Para Durar Uma Vida',
  description:
    'Peças artesanais merecem atenção especial. Siga estas orientações para manter sua Tenua sempre linda:',
  instructions: [
    {
      icon: 'wash',
      title: 'Lavagem',
      description: 'Lave à mão com água fria e sabão neutro. Não torça.',
    },
    {
      icon: 'dry',
      title: 'Secagem',
      description: 'Seque à sombra, de preferência na horizontal.',
    },
    {
      icon: 'iron',
      title: 'Passar',
      description: 'Se necessário, passe com ferro morno no avesso.',
    },
    {
      icon: 'store',
      title: 'Guardar',
      description: 'Armazene em local seco e arejado, dobrada com cuidado.',
    },
  ],
  note: 'Em caso de dúvidas, estamos sempre disponíveis para ajudar!',
}

export const FAQ_CONTENT = {
  sectionTitle: 'Dúvidas Frequentes',
  sectionSubtitle: 'FAQ',
  questions: [
    {
      question: 'Quanto tempo leva para produzir uma peça?',
      answer:
        'O prazo varia conforme a complexidade da peça. Peças simples levam de 5 a 7 dias úteis. Peças maiores ou personalizadas podem levar de 15 a 30 dias. Informamos o prazo exato no momento do pedido.',
    },
    {
      question: 'Vocês fazem peças personalizadas?',
      answer:
        'Sim! Adoramos criar peças únicas. Você pode escolher cores, tamanhos e até mesmo enviar referências. Cada personalização é um novo desafio que abraçamos com carinho.',
    },
    {
      question: 'Quais formas de pagamento são aceitas?',
      answer:
        'Aceitamos Pix, cartão de crédito (em até 3x sem juros) e transferência bancária. Para encomendas, pedimos 50% de entrada para confirmar o pedido.',
    },
    {
      question: 'Vocês enviam para todo o Brasil?',
      answer:
        'Sim! Enviamos para todo o Brasil pelos Correios ou transportadora. O frete é calculado com base no CEP de destino e tamanho do pacote.',
    },
    {
      question: 'As peças encolhem com a lavagem?',
      answer:
        'Se seguir as instruções de cuidado, não há encolhimento. Usamos fios de alta qualidade pré-lavados. Em caso de dúvida, estamos aqui para orientar.',
    },
    {
      question: 'Posso encomendar para presentear?',
      answer:
        'Com certeza! Oferecemos embalagem especial para presente com cartão personalizado. Basta informar no momento do pedido.',
    },
    {
      question: 'Como faço para acompanhar meu pedido?',
      answer:
        'Após a postagem, enviamos o código de rastreio por WhatsApp. Você também pode nos chamar a qualquer momento para saber o status da produção.',
    },
    {
      question: 'Vocês têm loja física?',
      answer:
        'No momento, trabalhamos apenas com ateliê e vendas online. Mas se estiver em nossa cidade, pode agendar uma visita para conhecer as peças pessoalmente.',
    },
  ],
}

export const FOOTER_CONTENT = {
  tagline: 'Acalma, envolve, Tenua.',
  copyright: `© ${new Date().getFullYear()} Tenua. Ateliê de Crochê Autoral. Todos os direitos reservados.`,
  madeWith: 'Feito à mão, com alma.',
  artisan: {
    role: 'Fundadora e artesã',
    name: 'Jordane Passos',
    city: 'Guadalupe - PI',
    cep: '64840-000',
  },
}
