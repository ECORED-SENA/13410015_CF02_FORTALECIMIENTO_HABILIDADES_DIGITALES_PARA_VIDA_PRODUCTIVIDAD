<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 6
        h1 Creación, edición y publicación de contenidos digitales
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-3_p
            p.mb-0 La producción de contenidos digitales transforma información, ideas y experiencias en recursos adecuados para distintos propósitos y contextos. Crear y editar implica tomar decisiones sobre el mensaje, los recursos y la forma de presentación; posteriormente, la preparación y publicación requieren comprobar que el producto responda a su finalidad y pueda utilizarse adecuadamente. 
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t6/img1.png', alt='' style="width: 500px").m-auto
      #t_6_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.1 Contenidos digitales: concepto, tipos y características
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p Un contenido digital es un recurso creado, almacenado, transmitido o publicado en formato electrónico. Puede comunicar información mediante texto, imagen, audio, video o interacción y responder a necesidades académicas, laborales, sociales, culturales o comunitarias. Su complejidad depende del propósito, la forma de presentación y los recursos que integra.
      p.mb-5 Los contenidos pueden adoptar diferentes formas o categorías según la manera en que presentan la información:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Texto digital
                  p.mb-0 Presenta información escrita, como artículos, guías, publicaciones, correos o entradas de blog.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Imagen digital
                  p.mb-0 Representa ideas o evidencias mediante fotografías, ilustraciones, gráficos, carteles u otros recursos estáticos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Audio digital
                  p.mb-0 Comunica mediante contenido sonoro, como pódcast, narraciones, entrevistas, explicaciones o mensajes de voz.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Video digital
                  p.mb-0 Puede integrar imagen en movimiento, texto y sonido para desarrollar tutoriales, explicaciones, demostraciones o presentaciones grabadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Infografía
                  p.mb-0 Sintetiza información mediante texto breve, íconos, gráficos, cifras, pasos o relaciones entre conceptos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Presentación digital
                  p.mb-0 Organiza información en diapositivas para explicar, sustentar, informar o socializar un tema.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img8.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Contenido interactivo
                  p.mb-0 Permite alguna forma de participación mediante formularios, cuestionarios, actividades u otros recursos interactivos.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img9.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Publicación para redes
                  p.mb-0 Adapta contenidos a plataformas sociales mediante carruseles, historias, videos breves u otras publicaciones informativas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t6/img10.png', alt='' style="max-width: 500px").m-auto
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img11.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Los contenidos pueden utilizarse para informar, explicar procedimientos, presentar resultados, compartir conocimientos o experiencias, promover actividades, sensibilizar, orientar, publicar evidencias, comunicar propuestas y facilitar procesos de aprendizaje.
      p.mb-5 Un contenido digital de calidad debe cumplir ciertas características que faciliten su comprensión y uso:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t6/img11.png', alt='' style="max-width: 300px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t6/img12.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Claridad
                  p.mb-0.text-center El mensaje debe entenderse con facilidad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t6/img13.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Pertinencia
                  p.mb-0.text-center El contenido debe responder al propósito definido.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t6/img14.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Coherencia
                  p.mb-0.text-center Las ideas, imágenes y recursos deben relacionarse entre sí.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t6/img15.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Accesibilidad
                  p.mb-0.text-center Debe poder consultarse de manera sencilla desde el medio elegido.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t6/img16.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Calidad visual o sonora
                  p.mb-0.text-center Las imágenes, audios o videos deben tener buena presentación.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t6/img17.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Organización
                  p.mb-0.text-center La información debe seguir una estructura lógica.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t6/img18.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Originalidad
                  p.mb-0.text-center Debe aportar una elaboración propia o una forma adecuada de presentar el tema.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t6/img19.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Legalidad
                  p.mb-0.text-center Debe respetar derechos de autor, licencias y condiciones de uso.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t6/img20.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Seguridad
                  p.mb-0.text-center No debe exponer datos personales o información sensible.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t6/img21.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Adaptabilidad
                  p.mb-0.text-center Debe ajustarse al canal, público y formato donde será publicado.
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-3_p
            p.mb-0 La calidad de un contenido depende de la exactitud, organización, uso responsable de la información y adecuación al público y al medio, no únicamente de su apariencia.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t6/img22.png', alt='' style="width: 500px").m-auto
      p.mb-5 Los contenidos digitales pueden responder a diferentes propósitos según la información que se desea comunicar y las necesidades de la audiencia. Entre sus principales finalidades se encuentran:
      .row.justify-content-center.mb-3
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t6/img23.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Informar y explicar
            p.mb-0.text-center Comunicar un tema, explicar procedimientos u orientar sobre el uso de una herramienta.
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="zoom-in")
                  img(src='@/assets/curso/temas/t6/img24.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Compartir y difundir
            p.mb-0.text-center Transmitir conocimientos, experiencias, propuestas o resultados.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t6/img25.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Promover y sensibilizar
            p.mb-0.text-center Divulgar actividades o generar conciencia sobre una situación.
      .row.justify-content-center.mb-5
        .col-lg-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-right")
                  img(src='@/assets/curso/temas/t6/img26.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Documentar y proyectar
            p.mb-0.text-center Publicar evidencias de trabajo y fortalecer una identidad académica o laboral.
        .col-lg-4.col-md-9(data-aos="zoom-in")
          .tarjeta--boton.p-5.h-100
            .row.justify-content-center.mb-3
              .col-7
                figure(data-aos="fade-left")
                  img(src='@/assets/curso/temas/t6/img27.svg', alt="" style="max-width: 90px").m-auto
            h3.text-center Apoyar el aprendizaje
            p.mb-0.text-center Facilitar la comprensión y apropiación de conocimientos.
      p.mb-5 Definir la finalidad antes de crear el contenido ayuda a orientar decisiones sobre su formato, lenguaje, extensión, diseño, canal y recursos.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t6/img28.png', alt='').m-auto
        .col-xl
          p A continuación, se presenta un ejemplo:
          .caja-1.color-1(data-aos="fade-left")
            h5 Ejemplo aplicado
            p.mb-0 Para explicar un procedimiento puede utilizarse una infografía paso a paso o un video breve; para presentar resultados, un documento o una presentación; y para compartir una experiencia, una publicación que combine imagen y texto.
      Separador
      #t_6_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.2 Herramientas tecnológicas para la creación y edición de contenidos digitales
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img29.png')})` }")
        .bloque-texto-g__texto.p-4
          p Las herramientas tecnológicas permiten redactar, diseñar, grabar, editar, organizar y preparar diferentes productos digitales. Su elección debe responder al contenido que se desea crear, las funciones necesarias, las condiciones de acceso y la experiencia de quien las utiliza. Una herramienta más compleja no necesariamente produce un mejor resultado.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img9.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Herramientas para texto, imágenes e infografías
      p.mb-5 Estas herramientas responden principalmente a necesidades de redacción, organización gráfica y exposición de información:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Texto digital")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img30.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Texto digital
              p Los procesadores y editores de texto permiten redactar, estructurar y corregir guías, informes, artículos y otros documentos. Resultan útiles cuando se requiere desarrollar información con mayor profundidad.
              p.mb-0 Conviene utilizar títulos claros, párrafos organizados, tipografía legible y una estructura coherente. También se requiere revisar ortografía, referencias y funcionamiento de los enlaces incorporados.
        .py-3.py-md-4(titulo="Imágenes e infografías")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img31.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Imágenes e infografías
              p Los editores gráficos permiten crear o ajustar fotografías, ilustraciones, gráficos e infografías. Son útiles cuando se necesita sintetizar información o representarla mediante elementos gráficos.
              p.mb-0 Conviene mantener legibilidad, contraste y jerarquía, evitar la saturación de elementos y comprobar que imágenes, íconos y gráficos aporten al mensaje. Los recursos externos requieren revisión de autoría y condiciones de uso.
        .py-3.py-md-4(titulo="Presentaciones")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img32.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Presentaciones
              p Las herramientas para presentaciones permiten organizar información en diapositivas e integrar texto, imágenes, tablas, gráficos, videos o enlaces.
              p.mb-0 Una presentación debe apoyar la explicación y priorizar ideas esenciales. Conviene mantener una estructura y diseño coherentes, títulos descriptivos, textos legibles, contraste suficiente y una cantidad moderada de elementos y animaciones.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img9.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Herramientas para audio, video y publicación o distribución
      p.mb-5 Estas herramientas permiten producir contenidos multimedia o preparar su incorporación en espacios digitales:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t6/img33.png', alt="" ).m-auto
              h4.text-center Audio
              .caja-4_p
                p.mb-0 Las herramientas de edición de audio permiten grabar, organizar y mejorar contenidos sonoros como narraciones, pódcast, entrevistas o explicaciones. Para favorecer la comprensión, conviene preparar un guion, grabar con poco ruido, mantener claridad y ritmo adecuados, revisar volumen y calidad, eliminar silencios innecesarios, evitar efectos que interfieran y comprobar el archivo antes de publicarlo.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t6/img34.png', alt="" ).m-auto
              h4.text-center Video
              .caja-4_p
                p.mb-0 Las herramientas de edición de video permiten organizar clips, incorporar texto, imágenes, audio, transiciones y subtítulos para crear tutoriales, demostraciones, entrevistas o piezas informativas. Para lograr un resultado claro, conviene definir la duración y estructura, cuidar encuadre, iluminación y audio, evitar elementos distractores, proteger la privacidad, utilizar un formato compatible y revisar el video completo antes de publicarlo.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t6/img35.png', alt="" ).m-auto
              h4.text-center Publicación o distribución
              .caja-4_p
                p.mb-0 Después de crear un contenido, se requiere seleccionar el medio adecuado para publicarlo o compartirlo. Antes de hacerlo, conviene revisar el formato y tamaño del archivo, la calidad del recurso, los permisos y privacidad, los derechos de autor, la audiencia, el texto de acompañamiento, el momento de publicación y las opciones de interacción.
      p.mb-5 La herramienta debe seleccionarse según la función que necesita cumplir, no únicamente por su popularidad o cantidad de opciones:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 13.
        span Selección de herramientas de creación y edición
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Producto
              th.ajuste-border-tabla.texto-left Funciones necesarias
              th.ajuste-border-tabla.texto-left Tipo de herramienta
              th.texto-left Condición que debe considerarse
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Guía o informe
              td.ajuste-border-tabla.texto-left Redactar, organizar y corregir.
              td.ajuste-border-tabla.texto-left Procesador o editor de texto.
              td.texto-left Estructura, legibilidad y revisión.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Infografía
              td.ajuste-border-tabla.texto-left Organizar texto, gráficos e imágenes.
              td.ajuste-border-tabla.texto-left Editor gráfico o de diseño.
              td.texto-left Síntesis, contraste y permisos.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Presentación
              td.ajuste-border-tabla.texto-left Crear y ordenar diapositivas.
              td.ajuste-border-tabla.texto-left Herramienta de presentaciones.
              td.texto-left Jerarquía, legibilidad y coherencia.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Explicación sonora
              td.ajuste-border-tabla.texto-left Grabar, cortar y mejorar audio.
              td.ajuste-border-tabla.texto-left Grabador o editor de audio.
              td.texto-left Claridad sonora y accesibilidad.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Tutorial
              td.ajuste-border-tabla.texto-left Integrar imagen, audio, texto y subtítulos.
              td.ajuste-border-tabla.texto-left Editor de video.
              td.texto-left Calidad, duración, accesibilidad y privacidad.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Recurso interactivo
              td.ajuste-border-tabla.texto-left Incorporar preguntas o participación.
              td.ajuste-border-tabla.texto-left Herramienta interactiva o educativa.
              td.texto-left Funcionalidad y facilidad de uso.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Contenido para publicar
              td.ajuste-border-tabla.texto-left Alojar o distribuir el producto.
              td.ajuste-border-tabla.texto-left Plataforma o servicio de publicación.
              td.texto-left Formato, acceso, audiencia y privacidad.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t6/img36.png', alt='').m-auto
        .col-xl
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 El siguiente caso relaciona el producto esperado con las funciones necesarias y las condiciones reales de producción:
          .caja-1(data-aos="fade-left")
            h5 Ejemplo aplicado
            p Un equipo necesita crear un tutorial corto sobre una tarea digital. Requiere organizar fragmentos, integrar audio, texto y subtítulos y exportar un archivo compatible.
            p.mb-0 Selecciona un editor de video que cubre esas funciones y que el equipo puede utilizar adecuadamente, sin elegir una herramienta más compleja de lo necesario.
      Separador
      #t_6_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.3 Planeación y estructura del contenido digital
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img37.png')})` }")
        .bloque-texto-g__texto.p-4
          p La planeación define, antes de producir un contenido, qué se comunicará, para quién, mediante qué tipo de recurso y con qué organización. Permite seleccionar la información necesaria, prever recursos y establecer criterios de revisión. La finalidad orienta decisiones sobre lenguaje, extensión, forma de presentación, canal y estructura.
      p.mb-5 La planeación puede organizarse mediante decisiones sucesivas que integran los elementos y preguntas orientadoras del experto:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Delimitar tema y propósito
                p.mb-0 Se define qué asunto se abordará y qué se espera lograr. Conviene precisar qué debe comprender, conocer o realizar la audiencia después de acceder al contenido.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t6/img38.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t6/img39.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Identificar la audiencia
                p.mb-0 Se determina a quién se dirige el contenido y qué necesita saber. Esta información orienta el lenguaje, nivel de profundidad, extensión y condiciones de acceso.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Seleccionar el tipo de contenido y el canal
                p.mb-0 Se elige la forma de presentación y el espacio donde será utilizado. La decisión debe responder al propósito, audiencia y posibilidades del medio.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t6/img40.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t6/img41.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Definir el mensaje central
                p.mb-0 Se establece la idea principal y la información indispensable. Esto ayuda a evitar contenidos dispersos, repeticiones y elementos que no aportan al objetivo.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Organizar la estructura y el estilo
                p.mb-0 Se define el orden de las ideas, el tono, la extensión o duración y, cuando corresponda, la organización gráfica o narrativa del producto.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t6/img42.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t6/img43.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Identificar los recursos necesarios
                p.mb-0 Se determinan textos, datos, imágenes, audios, videos, fuentes u otros elementos requeridos, incluyendo sus condiciones de uso, disponibilidad y calidad.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Preparar un guion o esquema
                p.mb-0 Cuando el producto lo requiera, se organiza previamente su secuencia y se establecen criterios que permitan revisar el resultado antes de publicarlo.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t6/img44.png', alt='' style="width: 300px").m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img9.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Guion para contenidos digitales
      p.mb-5 El guion ayuda a organizar qué se comunicará y qué recursos se incorporarán. Puede ser sencillo o detallado según el producto; resulta especialmente útil para videos, audios, presentaciones, tutoriales y publicaciones secuenciales.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img25.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Un guion básico puede incluir:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 14.
                span Componentes de un guion digital
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Componente
                      th.texto-left Función
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Título
                      td.texto-left Identificar el contenido o tema principal.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Objetivo
                      td.texto-left Precisar qué se espera comunicar o lograr.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Introducción
                      td.texto-left Presentar brevemente el tema.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Desarrollo
                      td.texto-left Organizar ideas, pasos, ejemplos o explicaciones.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Recursos
                      td.texto-left Identificar imágenes, audios, enlaces, datos u otros apoyos.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Cierre
                      td.texto-left Sintetizar, concluir o proponer una acción.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Créditos
                      td.texto-left Registrar fuentes, autoría o licencias utilizadas.
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-3_p
            p.mb-0 La estructura debe adaptarse al contenido. Una infografía, un audio, una presentación o un video no requieren exactamente el mismo nivel de detalle ni la misma organización.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t6/img45.png', alt='' style="width: 500px").m-auto
      p.mb-5 La planeación también debe considerar cómo se organizará, adaptará y documentará el producto:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Estructura y organización visual")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img46.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Estructura y organización visual
              p.mb-0 En productos con componentes gráficos, la información debe mantener jerarquía y orden. Conviene utilizar títulos claros, agrupar elementos relacionados, mantener alineación, utilizar espacios suficientes, limitar la cantidad de tipografías e imágenes y asegurar que el texto conserve legibilidad en el tamaño final. La organización debe facilitar la comprensión y mantener coherencia entre las diferentes partes.
        .py-3.py-md-4(titulo="Adaptación al público y al canal")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img47.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Adaptación al público y al canal
              p El contenido debe ajustarse a las condiciones del espacio donde será utilizado. Pueden variar extensión, nivel de formalidad, tamaño, formato, duración, enlaces, interacción, privacidad y requisitos de accesibilidad.
              p.mb-0 Por ello, una información extensa puede requerir un documento, mientras que una síntesis puede adoptar una infografía u otra forma breve, según la finalidad y la audiencia.
        .py-3.py-md-4(titulo="Autoría, licencias y uso responsable")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t6/img48.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Autoría, licencias y uso responsable
              p Si se incorporarán textos, imágenes, audios, plantillas, gráficos u otros recursos de terceros, desde la planeación deben revisarse autoría, licencia, permisos y condiciones de reutilización.
              p.mb-0 La atribución reconoce procedencia o autoría; una licencia establece usos autorizados bajo determinadas condiciones; y un permiso puede autorizar expresamente un uso. Citar una fuente no concede por sí mismo autorización para cualquier reutilización.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p El siguiente caso aplica la planeación a un único producto antes de iniciar su elaboración:
          .caja-1.color-1(data-aos="fade-right")
            h5 Ejemplo aplicado
            p Una persona planea una infografía sobre recomendaciones para organizar archivos digitales.
            p.mb-0 Define como propósito explicar cinco prácticas básicas a aprendices, selecciona únicamente las ideas esenciales, organiza título, cinco recomendaciones y fuentes, identifica los recursos gráficos necesarios y comprueba sus condiciones de uso antes de iniciar el diseño.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img49.png', alt='').m-auto
      Separador
      #t_6_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 6.4 Preparación, publicación y revisión de contenidos según el contexto
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t6/img50.png')})` }")
        .bloque-texto-g__texto.p-4
          p La preparación final permite comprobar un contenido ya elaborado antes de ponerlo a disposición de su audiencia. Esta revisión integra calidad del mensaje, presentación, accesibilidad, funcionamiento, privacidad y condiciones de uso. Después de publicar, también se requiere comprobar el resultado y realizar ajustes cuando existan errores, cambios o retroalimentación pertinente.
      p.mb-5 Antes de publicar, conviene realizar una comprobación organizada según el tipo de recurso y el contexto:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-8
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 15.
                span Verificación de contenidos antes de publicar
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Criterio
                      th.texto-left Qué se comprueba
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Contenido
                      td.texto-left Propósito, claridad, organización, exactitud y adecuación al público.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Forma
                      td.texto-left Ortografía, redacción, estructura y calidad suficiente de los recursos incorporados.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Accesibilidad
                      td.texto-left Legibilidad y alternativas accesibles requeridas según el tipo de contenido.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Privacidad y seguridad
                      td.texto-left Datos personales, información sensible, permisos y alcance del acceso.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Autoría y permisos
                      td.texto-left Fuentes, licencias, créditos y autorizaciones necesarias.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Funcionamiento técnico
                      td.texto-left Nombre, formato, apertura del archivo, enlaces y compatibilidad con la plataforma.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Audiencia y alcance
                      td.texto-left Destinatarios, canal, nivel de acceso y condiciones de publicación.
      p.mb-5 La comprobación debe adaptarse al producto: un video requiere revisar imagen, audio, subtítulos y transcripción; una presentación, secuencia y legibilidad; un documento, estructura y referencias; y una publicación social, contenido, acceso y audiencia.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.ajuste-4(data-aos="fade-right").mb-3
            h5 Publicación y comprobación posterior
            p Una vez completada la revisión, el contenido se incorpora en el canal definido, con el formato y permisos correspondientes. Después de publicarlo, conviene confirmar:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Acceso correcto para la audiencia prevista. 
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Funcionamiento de archivos y enlaces. 
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Presentación adecuada del contenido. 
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Configuración correcta de permisos. 
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Ausencia de información publicada por error. 
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Necesidad de corregir o actualizar el recurso. 
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Conservación de evidencia de publicación cuando resulte necesaria. 
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t6/img51.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 La retroalimentación puede aportar información para mejorar el contenido. No toda observación exige un cambio: debe valorarse si identifica un error, mejora la comprensión, corrige un problema técnico o responde mejor al propósito y a la audiencia.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img52.png', alt='').m-auto
      p.mb-5 Los errores frecuentes pueden agruparse según el tipo de ajuste que requieren:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img53.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Contenido y forma").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Publicar con errores de redacción, información confusa, exceso de texto o un archivo equivocado afecta la calidad del producto. El ajuste consiste en corregir el contenido y confirmar que corresponda a la versión prevista.
            .row(titulo="Canal y funcionamiento técnico").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Un formato incompatible, un enlace defectuoso o un archivo que no abre correctamente puede impedir el acceso. También debe comprobarse que el producto esté adaptado al canal y a sus condiciones técnicas.
            .row(titulo="Privacidad y acceso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los enlaces abiertos sin control, datos personales innecesarios, documentos privados, comentarios internos o versiones preliminares pueden generar exposición. Se requiere revisar información, destinatarios y permisos antes y después de publicar.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Autoría y permisos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Utilizar imágenes u otros recursos sin autorización, omitir créditos o desconocer condiciones de licencia puede generar un uso inadecuado. Las fuentes, permisos y condiciones aplicables deben comprobarse antes de mantener el contenido publicado.
            .row(titulo="Vigencia y versiones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Un contenido puede requerir actualización cuando cambian datos, enlaces, herramientas, normas o necesidades de la audiencia. Conviene conservar una versión identificable y retirar o reemplazar información que haya perdido vigencia.
            .row(titulo="Retroalimentación y mejora").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los comentarios y consultas pertinentes pueden revelar errores o dificultades de comprensión. Antes de modificar el contenido, se analiza si la observación responde al propósito del recurso y si el ajuste mejora su calidad o funcionamiento.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t6/img54.png", alt="" style="width: 300px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El siguiente caso integra preparación, publicación y comprobación posterior de un recurso concreto:
          .caja-1.color-1(data-aos="fade-right")
            h5 Ejemplo aplicado
            p Una persona prepara una guía en PDF para un aula virtual. Antes de publicarla, revisa contenido, referencias, formato y permisos de acceso.
            p.mb-0 Después comprueba el recurso desde la plataforma y detecta que un enlace no funciona. Corrige la dirección, reemplaza el archivo y confirma nuevamente el acceso de la audiencia prevista.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t6/img55.png', alt='').m-auto
      p.mb-5 Para profundizar en la aplicación de la revisión y publicación de contenidos, se propone un caso práctico centrado en comprobar y ajustar un recurso digital:
      figure(data-aos="zoom-in").mb-5
        .video
          iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
        figcaption Video. “Publicar con criterio: comprobar, corregir y ajustar”
      p.mb-0 Se invita a profundizar en una secuencia aplicada para preparar, comprobar y publicar un contenido digital, verificar su funcionamiento y realizar ajustes cuando se identifican errores o mejoras pertinentes.

</template>

<script>
export default {
  name: 'Tema6',
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
