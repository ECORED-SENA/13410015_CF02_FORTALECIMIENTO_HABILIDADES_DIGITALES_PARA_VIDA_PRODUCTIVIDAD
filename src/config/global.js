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
      termino: 'Término',
      significado: 'Definición',
    },
  ],
  referencias: [
    {
      referencia: '',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Líder del Ecosistema',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Olga Constanza Bermúdez',
          cargo: 'Responsable de línea de producción Huila',
          centro: 'Dirección General',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: '',
          cargo: '',
          centro: 'Centro XYZ - Regional XYZ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: '',
          cargo: 'Diseñador de contenidos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: 'Desarrollador <i>full stack</i>',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
          cargo: '',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validador de recursos educativos digitales',
          centro:
            'Centro Agroempresarial y Desarrollo Pecuario - Regional Huila',
        },
        {
          nombre: '',
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
