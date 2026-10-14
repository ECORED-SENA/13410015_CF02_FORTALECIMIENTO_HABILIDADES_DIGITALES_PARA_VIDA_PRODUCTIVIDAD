export default {
  global: {
    Name: 'Interacción y producción de contenidos digitales',
    Description:
      'Este componente aborda la comunicación, participación, colaboración y producción de contenidos en entornos digitales, aplicando normas de interacción, criterios de netiqueta, uso responsable de plataformas, construcción de perfil digital y creación de recursos digitales de acuerdo con el contexto y la normativa.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.png',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.png',
      },
    ],
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
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Comunicación e interacción en entornos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Concepto de comunicación digital',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Características de los medios de comunicación digital',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Medios digitales sincrónicos y asincrónicos',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo:
              'Herramientas de comunicación digital: correo, chat, foros, voz IP, videoconferencia y SMS',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Gestión de medios, mensajes y recursos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo:
              'Gestión del correo electrónico: almacenamiento, etiquetado y búsqueda',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo:
              'Publicación de contenidos, conocimientos y recursos digitales',
            hash: 't_2_2',
          },
          {
            numero: '2.3',
            titulo:
              'Uso adecuado de medios digitales según el contexto comunicativo',
            hash: 't_2_3',
          },
          {
            numero: '2.4',
            titulo:
              'Expresiones adecuadas y normas de netiqueta en la comunicación digital',
            hash: 't_2_4',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo:
          'Participación ciudadana, redes sociales y comunidades digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '3.1',
            titulo:
              'Participación ciudadana en línea: concepto y características',
            hash: 't_3_1',
          },
          {
            numero: '3.2',
            titulo:
              'Servicios en línea y acceso a espacios digitales de participación',
            hash: 't_3_2',
          },
          {
            numero: '3.3',
            titulo: 'Redes sociales y comunidades digitales',
            hash: 't_3_3',
          },
          {
            numero: '3.4',
            titulo:
              'Uso de medios digitales para la difusión de trabajos, experiencias o temas de interés',
            hash: 't_3_4',
          },
        ],
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Colaboración en línea y trabajo digital compartido',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Concepto y características de la colaboración en línea',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Roles en el trabajo colaborativo digital',
            hash: 't_4_2',
          },
          {
            numero: '4.3',
            titulo:
              'Plataformas colaborativas y herramientas de trabajo en línea',
            hash: 't_4_3',
          },
          {
            numero: '4.4',
            titulo:
              'Uso de contenidos y recursos digitales en plataformas colaborativas',
            hash: 't_4_4',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Comportamiento en la red, identidad y perfil digital',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo:
              'Normas de interacción digital y comportamiento responsable en la red',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo:
              'Peligros en redes y comunidades digitales: ciberbullying, grooming y ciberacoso',
            hash: 't_5_2',
          },
          {
            numero: '5.3',
            titulo: 'Identidad digital: concepto, características y tipos',
            hash: 't_5_3',
          },
          {
            numero: '5.4',
            titulo:
              'Construcción de perfil digital personal, académico y laboral',
            hash: 't_5_4',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Creación, edición y publicación de contenidos digitales',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Contenidos digitales: concepto, tipos y características',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo:
              'Herramientas tecnológicas para la creación y edición de contenidos digitales',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Planeación y estructura del contenido digital',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo:
              'Preparación, publicación y revisión de contenidos según el contexto',
            hash: 't_6_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
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
  glosario: [
    {
      termino: 'Accesibilidad digital',
      significado:
        'condición de un contenido o recurso digital que facilita su acceso, comprensión y uso por personas con diferentes capacidades y condiciones, mediante estructura adecuada, legibilidad y alternativas de accesibilidad pertinentes.',
    },
    {
      termino: 'Atribución',
      significado:
        'reconocimiento de la procedencia y autoría de un recurso utilizado. Debe realizarse conforme a las condiciones aplicables y no equivale, por sí sola, a una autorización para reutilizarlo.',
    },
    {
      termino: 'Ciberacoso',
      significado:
        'hostigamiento, intimidación, vigilancia o persecución reiterada mediante medios digitales. En el componente se utiliza como categoría pedagógica amplia; la Ley 2564 de 2026 emplea la expresión «ciberacoso o cyberbullying» de manera conjunta.',
    },
    {
      termino: 'Ciberbullying',
      significado:
        'acoso repetido entre pares mediante medios digitales, orientado a humillar, intimidar, ridiculizar o excluir. Su diferenciación frente al ciberacoso se utiliza en el componente con finalidad pedagógica y no constituye una taxonomía legal exclusiva.',
    },
    {
      termino: 'Colaboración en línea',
      significado:
        'proceso mediante el cual dos o más personas coordinan tareas, aportes y recursos a través de medios digitales para alcanzar un propósito común.',
    },
    {
      termino: 'Comunicación digital',
      significado:
        'proceso mediante el cual se transmite, recibe e interpreta información utilizando dispositivos, aplicaciones, plataformas y redes tecnológicas. Puede integrar distintos formatos y desarrollarse de forma simultánea o diferida.',
    },
    {
      termino: 'Contenido digital',
      significado:
        'recurso creado, almacenado, transmitido o publicado en formato electrónico que puede integrar texto, imagen, audio, video o interacción para responder a una finalidad determinada.',
    },
    {
      termino: 'Grooming',
      significado:
        'acercamiento o manipulación intencional de una persona adulta hacia una persona menor de edad mediante entornos digitales con finalidad sexual, que puede incluir engaño, generación de confianza, solicitud de contenido íntimo o promoción de encuentros.',
    },
    {
      termino: 'Identidad digital',
      significado:
        'conjunto amplio de información, rastros, contenidos, interacciones y referencias asociados con una persona en entornos digitales. Se construye mediante acciones propias, datos generados durante el uso de servicios y contenidos de terceros.',
    },
    {
      termino: 'Licencia',
      significado:
        'conjunto de condiciones mediante las cuales quien posee los derechos de un recurso autoriza determinados usos. La reutilización debe respetar el alcance y las condiciones establecidas por la licencia correspondiente.',
    },
    {
      termino: 'Medios sincrónicos y asincrónicos',
      significado:
        'formas de comunicación digital diferenciadas por la coincidencia temporal: la comunicación sincrónica requiere participación simultánea; la asincrónica permite intervenir en momentos diferentes. Un mismo medio puede admitir ambos usos.',
    },
    {
      termino: 'Netiqueta',
      significado:
        'conjunto de pautas que orientan una comunicación respetuosa, clara y pertinente en entornos digitales mediante el cuidado del tono, las expresiones, el contexto y el manejo de desacuerdos.',
    },
    {
      termino: 'Participación ciudadana en línea',
      significado:
        'conjunto de acciones realizadas mediante medios digitales para intervenir, aportar, consultar, proponer, solicitar información o hacer seguimiento a asuntos públicos, comunitarios o institucionales. El uso de un servicio digital no constituye automáticamente participación ciudadana.',
    },
    {
      termino: 'Perfil digital',
      significado:
        'espacio específico y organizado en el que se presenta información seleccionada según un propósito y una audiencia. Forma parte de la identidad digital, pero no equivale a ella.',
    },
    {
      termino: 'Portafolio digital',
      significado:
        'selección organizada de productos o evidencias que permite respaldar aprendizajes, capacidades, proyectos o experiencia. Puede vincularse con un perfil, pero cumple una función diferente.',
    },
  ],
  referencias: [
    {
      referencia:
        'Center for Teaching Innovation, Cornell University. (s. f.).Selecting Online Teaching Tools.',
      link: 'https://teaching.cornell.edu/teaching-resources/online-teaching/selecting-online-teaching-tools',
    },
    {
      referencia:
        'Congreso de Colombia. (2026, 8 de enero). Ley 2564 de 2026. Por medio del cual se crean medidas de sensibilización, visibilización, prevención, protección, atención frente a la salud mental y la violencia del entorno digital en los niños, niñas y adolescentes, se modifican y adicionan los artículos 3°, 30, 31 de la Ley 1616 de 2013 y se dictan otras disposiciones. SUIN-Juriscol.',
      link: 'https://www.suin-juriscol.gov.co/clp/contenidos.dll/Leyes/30055979',
    },
    {
      referencia: 'Creative Commons. (s. f.). Reusing CC-Licensed Content.',
      link: 'https://creativecommons.org/reusing-cc-licensed-content/',
    },
    {
      referencia:
        'Departamento Administrativo de la Función Pública. (s. f.). Niveles de Participación Ciudadana.',
      link: 'https://www1.funcionpublica.gov.co/web/eva/niveles-de-participacion-ciudadana',
    },
    {
      referencia:
        'Google. (s. f.-a). Acotar las búsquedas en Gmail. Ayuda de Gmail.',
      link: 'https://support.google.com/mail/answer/7190?hl=es',
    },
    {
      referencia:
        'Google. (s. f.-b). Compartir carpetas en Google Drive. Ayuda de Google Drive.',
      link: 'https://support.google.com/drive/answer/7166529?hl=es',
    },
    {
      referencia:
        'Instituto Colombiano de Bienestar Familiar. (2021, 18 de marzo). Grooming, la amenaza disfrazada de confianza que engaña a los niños en internet.',
      link: 'https://www.icbf.gov.co/mis-manos-te-ensenan/grooming-la-amenaza-disfrazada-de-confianza-que-engana-los-ninos-en-internet',
    },
    {
      referencia:
        'Instituto Colombiano de Bienestar Familiar. (2025, 1 de julio). Orientación en linea.',
      link: 'https://www.icbf.gov.co/orientacion-en-linea',
    },
    {
      referencia:
        'International Telecommunication Union. (2024). Security in telecommunications and information technology (8th edition).',
      link: 'https://www.itu.int/epublications/publication/itu-t-sec-manual-2024-09-security-in-telecommunications-and-information-technology-8th-edition',
    },
    {
      referencia:
        'Microsoft. (s. f.). Restore a previous version of a file stored in OneDrive. Microsoft Support.',
      link: 'https://support.microsoft.com/en-us/onedrive/restore-a-previous-version-of-a-file-stored-in-onedrive',
    },
    {
      referencia:
        'Ministerio de Tecnologías de la Información y las Comunicaciones. (2020, 27 de enero). ¡Pilas con los datos personales en la vida digital!',
      link: 'https://www.mintic.gov.co/portal/historico/w3-article-125647.html',
    },
    {
      referencia: 'UNICEF. (2026, enero). Ciberacoso: qué es y cómo detenerlo.',
      link: 'https://www.unicef.org/es/end-violence/ciberacoso-que-es-y-como-detenerlo',
    },
    {
      referencia:
        'World Wide Web Consortium (W3C), Web Accessibility Initiative (WAI). (2024, 17 de septiembre). Captions/Subtitles.',
      link: 'https://www.w3.org/WAI/media/av/captions/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional 06 - Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Ana Roció Rosero Cortes',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Leonardo Camacho Acevedo',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alba Mireya Orjuela Toro',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Cristancho Cubillos',
          cargo: 'Experto temático',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Angelica Gómez Morales',
          cargo: 'Experta temática',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Paula Marcela Vidal Quintero',
          cargo: 'Evaluadora instruccional',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Jorge David Barbosa Losada',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cielo Damaris Angulo Rodríguez',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Alejandro Delgado Acosta',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Cristhian Giovanni Gordillo Segura',
          cargo: 'Intérprete lenguaje de señas',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Juan Pablo Rojas Polania',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Carlos Eduardo Garavito Parada',
          cargo: 'Animador y productor multimedia',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'María Carolina Tamayo López',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'German Acosta Ramos',
          cargo: 'Locución',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Ricardo Oliveros Zambrano ',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Aixa Natalia Sendoya Fernández',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Daniel Ricardo Mutis Gómez',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: 'Anyerson Wilfredo Pizo Ossa',
          cargo: 'Evaluador para contenidos inclusivos y accesibles',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
