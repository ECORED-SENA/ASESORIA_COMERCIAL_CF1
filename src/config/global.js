export default {
  global: {
    componenteFormativo: 'Identificación de nichos de mercado',
    descripcionCurso:
      'En este documento se comprenderá el mercadeo y sus componentes necesarios para desarrollar acciones en el mercado dirigidas a los consumidores de un producto o servicio. Igualmente, se entenderán los mercados y el proceso de cómo dividirlos en grupos de clientes potenciales. Por otro lado, se explorarán técnicas e instrumentos de recolección de datos para crear una base de datos.',
    imagenBannerPrincipal: require('@/assets/curso/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner-principal.png'),
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Mercadeo',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Comprender el mercado y al cliente',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Mezcla de mercadeo',
            hash: 't_1_2',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Mercados',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Tipos de mercados',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Clases de mercado',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Otros tipos de mercados',
            hash: 't_2_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.4',
            titulo: 'Características del mercado',
            hash: 't_2_4',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.5',
            titulo: 'Estrategias del mercado',
            hash: 't_2_5',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.6',
            titulo: 'Participación del mercado',
            hash: 't_2_6',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.7',
            titulo: 'Pasos para definir el mercado',
            hash: 't_2_7',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Segmentación del mercado',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Bases para segmentar mercados de consumo masivo',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Requisitos para segmentar',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo: 'Estrategias de cobertura de un mercado meta',
            hash: 't_3_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.4',
            titulo: 'Pasos para segmentar un mercado',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        icono: 'far fa-file-alt',
        numero: '4',
        titulo: 'Técnica de recolección de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '4.1',
            titulo: 'Técnicas',
            hash: 't_4_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '4.2',
            titulo: 'Instrumentos para la recolección de información',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        icono: 'far fa-file-alt',
        numero: '5',
        titulo: 'Bases de datos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '5.1',
            titulo: 'Tipos de bases de datos',
            hash: 't_5_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.2',
            titulo: 'Estructura de una base de datos',
            hash: 't_5_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '5.3',
            titulo: 'Manejo de una base de datos',
            hash: 't_5_3',
          },
        ],
      },
    ],
    subMenu: [
      //{
      //  nombreRuta: 'actividad',
      //  icono: 'far fa-question-circle',
      //  titulo: 'Actividad didáctica',
      //  desarrolloContenidos: true,
      //},
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Arellano, C., R. (2010). Marketing enfoque América Latina. Pearson Prentice Hall. ',
    },
    {
      referencia:
        'Caro, L. (2019). 7 Técnicas e Instrumentos para la Recolección de Datos. Lifeder. ',
      link: 'https://www.lifeder.com/tecnicas-instrumentos-recoleccion-datos/',
    },
    {
      referencia:
        'Díaz-Bravo, L., Torruco-García, U., Martínez-Hernández, M., y Varela-Ruiz, M. (2013). La entrevista, recurso flexible y dinámico. ',
      link:
        'http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S2007-50572013000300009',
    },
    {
      referencia:
        'Fano, F. (2015). ¿Qué es estrategia? El pensamiento de Michael E. Porter. Mejora Competitiva. ',
      link: 'https://www.mejoracompetitiva.es/2015/09/que-es-estrategia/',
    },
    {
      referencia: 'Goñi, Á., N. (2008). El precio. Pearson Prentice Hall.',
    },
    {
      referencia:
        'Kendall, K., y Kendall, J. (2011). Análisis y diseño de sistemas. Pearson Education.',
    },
    {
      referencia:
        'Kerin. H., y Rudelius, W. (2014). Marketing. McGraw Hill Education. 11a Edición.',
    },
    {
      referencia:
        'Kotler, P., y Armstrong, G. (2013). Fundamentos de marketing. Pearson Prentice Hall.',
    },
    {
      referencia:
        'Kotler, P., y Armstrong, G. (2012). Marketing. Pearson Prentice Hall.',
    },
    {
      referencia: 'Pereda, G (2017). Métodos y técnicas de investigación. ',
      link:
        'https://es.slideshare.net/guillermopereda/mtodos-y-tcnicas-de-investigacin-79785371',
    },
    {
      referencia: 'QuestioPro. (s.f.). Encuesta. ',
      link: 'https://www.questionpro.com/es/una-encuesta.html#que_es_encuesta',
    },
    {
      referencia:
        'Santesmases, M., Valderrey, F., y Sánchez, A. (2014). Fundamentos de mercadotecnia. Grupo Editorial Patria.',
    },
    {
      referencia:
        'Stanton, W., Etzel, M., y Walker, B. (2007). Fundamentos de marketing. McGraw Hill Education.',
    },
  ],
  glosario: [
    {
      termino: 'Base de datos',
      significado:
        'herramienta fundamental en el entorno informático hoy en día y tienen aplicación en la práctica como los negocios, organizaciones y en la vida personal. Su aplicabilidad responde a la necesidad de gestionar datos que provean información pertinente.',
    },
    {
      termino: 'Encuesta',
      significado:
        '“Las encuestas son un método de investigación y recopilación de datos utilizadas para obtener información a un grupo de individuos sobre diversos temas” (QuestionPro, s.f.).',
    },
    {
      termino: 'Entrevista',
      significado:
        'charla en la que una persona hace a otra una serie de preguntas sobre un tema determinado.',
    },
    {
      termino: 'Mercadeo ',
      significado:
        '“Es un proceso mediante el cual las empresas crean valor para sus clientes y generan fuertes relaciones con ellos para, en reciprocidad, captar valor de los clientes” (Kotler y Armstrong, 2013, p. 35).',
    },
    {
      termino: 'Mercado',
      significado:
        '“El mercado es un proceso que opera cuando hay personas que actúan como compradores y otras como vendedores de bienes y servicios, generando la acción del intercambio” (Quiroga, 2020).',
    },
    {
      termino: 'Observación',
      significado:
        '“Es una técnica que consiste en observar atentamente el fenómeno, hecho o caso, tomar información y registrarla para su posterior análisis” (Pereda, 2017).',
    },
    {
      termino: 'Posicionamiento',
      significado:
        '“Una posición de producto es la forma en que un producto está definido por los consumidores en atributos importantes, el lugar que ocupa en la mente de los consumidores respecto a los productos competidores” (Kotler y Armstrong, 2013).',
    },
    {
      termino: 'Segmentación',
      significado:
        'proceso de dividir un mercado en grupos de clientes potenciales con necesidades y/o características similares y que pueden requerir un producto diferente y/o una forma de comunicación diferente.',
    },
    {
      termino: 'Ventas',
      significado:
        'actividades relacionadas con la venta o la cantidad de bienes vendidos en un período de tiempo determinado. La entrega de un servicio por un costo también se considera una venta.',
    },
  ],
  complementario: [
    {
      texto:
        'QuestioPro. (s.f.). El mercado y las necesidades del cliente en la investigación (Parte I).',
      tipo: 'Otro (Página web)',
      link:
        'https://www.questionpro.com/blog/es/mercado-y-necesidades-del-cliente/',
    },
    {
      texto: 'Coll, F. (2021). Mezcla de mercadotecnia. Economipedia.',
      tipo: 'Otro (Página web)',
      link:
        'https://economipedia.com/definiciones/mezcla-de-mercadotecnia.html',
    },
    {
      texto:
        'Rodríguez, I., Maraver, G. & Martínez, F. (s.f.). Canales de distribución. Universitat Oberta de Catalunya.',
      tipo: 'Artículo',
      link:
        'http://cv.uoc.edu/annotation/e278f6575e9eb38a49450e18f778004e/607706/PID_00195275/PID_00195275.html',
    },
    {
      texto: 'Comercionista. (2020). Tipos de mayoristas.',
      tipo: 'Otro (Página web)',
      link: 'https://www.comercionista.com/compras/que-es-un-mayorista-tipos/',
    },
    {
      texto: 'Quiroga, M. (2020). Mercado. Economipedia.',
      tipo: 'Otro (Página web)',
      link: 'https://economipedia.com/definiciones/mercado.html',
    },
    {
      texto: 'Máxima, A. (2019). Características del mercado.',
      tipo: 'Otro (Página web)',
      link: 'https://www.caracteristicas.co/mercado/#ixzz74Q1rHzhJ',
    },
    {
      texto:
        'WixBlog. (2020). Mercado meta: Qué es, como definirlo y ejemplos.',
      tipo: 'Otro (Página web)',
      link:
        'https://es.wix.com/blog/2020/12/mercado-meta-que-es-como-definirlo-y-ejemplos',
    },
    {
      texto:
        'Núñez, V. (2019). ¿Qué es la segmentación del mercado y cómo potencia tu estrategia de marketing?',
      tipo: 'Otro (Página web)',
      link: 'https://vilmanunez.com/segmentacion-del-mercado/',
    },
    {
      texto:
        'QuestionPro. (s.f.). ¿Qué es la recolección de datos y cómo realizarla?',
      tipo: 'Otro (Página web)',
      link:
        'https://www.questionpro.com/blog/es/recoleccion-de-datos-para-investigacion/',
    },
    {
      texto: 'Westreicher, G. (2021). Recolección de datos. Economipedia.',
      tipo: 'Otro (Página web)',
      link: 'https://economipedia.com/definiciones/recoleccion-de-datos.html',
    },
    {
      texto: 'QuestioPro. (s.f.). Encuesta.',
      tipo: 'Otro (Página web)',
      link: 'https://www.questionpro.com/es/una-encuesta.html#que_es_encuesta',
    },
    {
      texto:
        'Díaz-Bravo, L., Torruco-García, U., Martínez-Hernández, M., y Varela-Ruiz, M. (2013). La entrevista, recurso flexible y dinámico. Investigación en Educación Médica, 2(7), 162-167.',
      tipo: 'Artículo',
      link:
        'http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S2007-50572013000300009',
    },
    {
      texto:
        'Nota Tecnológica. (s.f.). Estructura de una base de datos: normalización y más.',
      tipo: 'Otro (Página web)',
      link:
        'https://notatecnologica.com/tecnologia/estructura-de-una-base-de-datos/ ',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Javier del Carmen Martínez Pérez',
        cargo: 'Instructor Técnico',
        centro: 'Regional Bolívar - Centro de Comercio y Servicio',
      },
      {
        nombre: 'Zenith Chinchilla Ruedas',
        cargo: 'Diseñador Instruccional',
        centro: 'Regional Distrito Capital – Centro de Diseño y Metrología',
      },
      {
        nombre: 'Andrés Felipe Velandia Espitia',
        cargo: 'Revisor Metodológico y Pedagógico',
        centro: 'Regional Distrito Capital - Centro de Diseño y Metrología',
      },
      {
        nombre: 'José Gabriel Ortiz Abella',
        cargo: 'Corrector de estilo',
        centro:
          'Regional Distrito Capital – Centro de para la Comunicación de la Industria de la Comunicación Gráfica.',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Anllelo Andres Reina Montañez',
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Diego Fernando Velasco Güiza',
        cargo: 'Desarrollo Front-End',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Zuleidy Maria Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'José Jaime Luis Tang Pinzón',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Ernesto Navarro Jaimes',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Daniela Muñoz Bedoya',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
      {
        nombre: 'Yuli Marcela Gómez Tarazona',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional Tolima',
      },
    ],
  },
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
