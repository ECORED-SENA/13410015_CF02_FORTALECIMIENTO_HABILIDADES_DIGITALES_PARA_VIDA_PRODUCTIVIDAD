<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 3
        h1 Participación ciudadana, redes sociales y comunidades digitales
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p Los entornos digitales amplían las posibilidades de interacción con comunidades, organizaciones e instituciones y facilitan la vinculación con asuntos de interés colectivo. Sin embargo, utilizar internet, consultar información o acceder a un servicio no constituye automáticamente participación ciudadana; esta implica alguna forma de intervención, aporte, colaboración o seguimiento relacionada con un propósito público, comunitario o institucional.
      #t_3_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.1 Participación ciudadana en línea: concepto y características
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-3_p
            p.mb-0 La participación ciudadana en línea comprende acciones realizadas mediante medios digitales para intervenir en asuntos públicos, comunitarios o institucionales. Puede incluir consultas vinculadas a estos procesos, opiniones, propuestas, aportes, colaboración y seguimiento. Una gestión digital exclusivamente personal no constituye, por sí sola, participación ciudadana.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img2.png', alt='' style="width: 500px").m-auto
      p.mb-5 Las características adquieren sentido cuando facilitan la intervención ciudadana y no solo el funcionamiento general de los medios digitales:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t3/img3.png', alt='' style="max-width: 500px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img4.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Accesibilidad e inclusión
                  p.mb-0.text-center Debe favorecer el acceso, comprensión y participación, reduciendo barreras personales, tecnológicas o del entorno.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img5.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Interacción e inmediatez
                  p.mb-0.text-center Facilita formular preguntas, aportar opiniones y recibir respuestas sin depender siempre de encuentros presenciales.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img6.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Alcance
                  p.mb-0.text-center Puede vincular personas y comunidades ubicadas en diferentes lugares alrededor de un asunto de interés común.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Registro y transparencia
                  p.mb-0.text-center Los aportes, solicitudes o respuestas pueden quedar documentados y facilitar el seguimiento de procesos y compromisos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Colaboración
                  p.mb-0.text-center Permite construir propuestas, identificar necesidades y aportar soluciones mediante la participación de diferentes personas o grupos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t3/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Responsabilidad
                  p.mb-0.text-center Exige intervenciones pertinentes, información verificable y cuidado de los datos compartidos durante el proceso de participación.
      p.mb-5 La participación puede adoptar distintas formas. Estas acciones no representan niveles jerárquicos ni una secuencia obligatoria:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 7.
        span Acciones de participación ciudadana en línea
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Acción
              th.ajuste-border-tabla.texto-left Finalidad
              th.texto-left Ejemplo
          tbody
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Consulta
              td.ajuste-border-tabla.texto-left Conocer información necesaria para participar en un asunto colectivo.
              td.texto-left Consultar una propuesta antes de una convocatoria ciudadana.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Interacción
              td.ajuste-border-tabla.texto-left Formular preguntas o solicitudes relacionadas con un proceso.
              td.texto-left Solicitar aclaración sobre una convocatoria institucional.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Aporte
              td.ajuste-border-tabla.texto-left Expresar opiniones, necesidades o propuestas.
              td.texto-left Comentar una iniciativa sometida a consulta pública.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Colaboración
              td.ajuste-border-tabla.texto-left Contribuir a una solución o iniciativa común.
              td.texto-left Aportar ideas para recuperar un espacio comunitario.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Difusión
              td.ajuste-border-tabla.texto-left Ampliar el conocimiento de una iniciativa de interés colectivo.
              td.texto-left Compartir una convocatoria oficial con la comunidad.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Seguimiento
              td.ajuste-border-tabla.texto-left Consultar avances, respuestas o compromisos.
              td.texto-left Revisar el estado de una solicitud o acuerdo institucional.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img11.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La consulta se relaciona con participación ciudadana cuando aporta a un asunto público o colectivo; una consulta realizada únicamente para resolver una necesidad personal corresponde a una gestión digital.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img10.png', alt='').m-auto
        .col-xl
          p El siguiente caso permite diferenciar una gestión individual de una acción de participación ciudadana:
          .caja-1.color-1.ajuste-1(data-aos="fade-left")
            h5 Ejemplo aplicado
            p Una persona descarga un certificado personal desde un portal institucional. Esta acción corresponde a una #[b gestión digital individual].
            p.mb-0 Luego consulta una propuesta para adecuar un parque de su barrio y envía una observación mediante el espacio habilitado para recibir aportes ciudadanos. Esta segunda acción constituye #[b participación ciudadana en línea], porque se relaciona con un asunto comunitario.
      Separador
      #t_3_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.2 Servicios en línea y acceso a espacios digitales de participación
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-3_p
            p.mb-0 Los servicios en línea permiten realizar consultas, trámites, solicitudes, pagos, inscripciones, certificaciones, reportes y otras gestiones. Algunos también incorporan mecanismos de interacción o participación ciudadana. Por ello, conviene distinguir una gestión digital individual de aquellos espacios que permiten aportar, consultar asuntos colectivos o realizar seguimiento.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t3/img11.png', alt='' style="width: 500px").m-auto
      p.mb-5 Los servicios pueden organizarse según la gestión principal que permiten realizar:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img12.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Consultas y certificaciones
                  p.mb-0 Permiten consultar información, verificar estados y obtener certificados o documentos disponibles mediante una plataforma.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img13.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Trámites y solicitudes
                  p.mb-0 Facilitan radicar formularios, peticiones, documentos o gestiones que pueden generar una respuesta o número de seguimiento.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img14.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Pagos y reservas
                  p.mb-0 Permiten efectuar pagos, programar citas, reservar servicios o confirmar transacciones mediante plataformas habilitadas.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img15.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Inscripciones y registros
                  p.mb-0 Facilitan registrarse en convocatorias, programas, actividades, eventos o servicios que requieren información previa.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img16.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Reportes y comunicaciones
                  p.mb-0 Permiten informar situaciones, realizar consultas o solicitar atención mediante canales establecidos por una organización.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t3/img17.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Espacios de participación
                  p.mb-0 Permiten aportar mediante consultas públicas, formularios de opinión, encuestas participativas, foros ciudadanos u otros mecanismos habilitados.
      .row.justify-content-center.mb-5
        .col-lg-10
          .caja-5(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 El acceso a un servicio requiere comprobar su procedencia y la relación entre los datos solicitados y la gestión que se desea realizar. La apariencia gráfica o un logotipo no son suficientes para confirmar legitimidad.
      p.mb-5 Para acceder con mayor seguridad, conviene aplicar una comprobación breve:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificar el servicio
                p.mb-0 Se determina qué entidad u organización lo ofrece y cuál es la finalidad de la gestión antes de ingresar información.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img18.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img19.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Acceder desde un canal oficial
                p.mb-0 Conviene ingresar desde el sitio institucional, un portal gubernamental reconocido o una dirección previamente verificada, evitando enlaces inesperados.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Comprobar dirección y finalidad
                p.mb-0 Se confirma que la dirección corresponda al sitio esperado y que el trámite o formulario coincida con la gestión requerida.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img20.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img21.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Proteger datos y credenciales
                p.mb-0 La información solicitada debe guardar relación con el servicio. Las contraseñas y códigos de verificación no deben compartirse; en equipos compartidos, debe cerrarse la sesión.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Conservar soportes
                p.mb-0 Cuando la gestión genere radicado, comprobante, confirmación o respuesta, conviene conservarlo si puede requerirse para seguimiento o verificación posterior.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t3/img22.png', alt='' style="width: 300px").m-auto
      p.mb-5 MinTIC recomienda verificar la fuente antes de entregar datos personales y comprobar que el medio utilizado sea seguro y oficial.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t3/img23.png', alt='').m-auto
        .col-xl
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img11.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 El siguiente caso permite comprobar la legitimidad de una plataforma antes de suministrar información personal:
          .caja-1.color-1(data-aos="fade-left")
            h5 Ejemplo aplicado
            p Una persona recibe un enlace para inscribirse en un supuesto beneficio institucional. La página solicita identificación, contraseña de correo y código de verificación.
            p.mb-0 Antes de continuar, ingresa directamente al sitio oficial de la entidad. Allí identifica que el enlace recibido no corresponde al canal institucional y que varios datos solicitados no son necesarios para la inscripción.
      Separador
      #t_3_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.3 Redes sociales y comunidades digitales
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p Las redes sociales facilitan conexiones, publicaciones e interacción entre usuarios. Las comunidades digitales reúnen personas alrededor de intereses, objetivos, actividades o necesidades compartidas. Una comunidad puede funcionar dentro de una red social, pero también mediante foros, plataformas educativas, mensajería, espacios profesionales u otros entornos digitales. 
          .caja-5.mb-5(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 Las diferencias principales pueden organizarse según su función, organización y forma de participación:
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img24.png', alt='').m-auto
      p.mb-5 
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 8.
        span Redes sociales y comunidades digitales
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Aspecto
              th.ajuste-border-tabla.texto-left Red social digital
              th.texto-left Comunidad digital
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Función principal
              td.ajuste-border-tabla.texto-left Facilitar conexiones, publicaciones e interacción.
              td.texto-left Reunir personas alrededor de un propósito común.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Organización
              td.ajuste-border-tabla.texto-left Depende de las funciones de la plataforma.
              td.texto-left Se articula mediante intereses, objetivos o necesidades compartidas.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Participación
              td.ajuste-border-tabla.texto-left Puede abarcar múltiples temas y relaciones.
              td.texto-left Se concentra principalmente en el propósito del grupo.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Alcance
              td.ajuste-border-tabla.texto-left Puede reunir públicos amplios y diversos.
              td.texto-left Puede ser abierta, cerrada, local o especializada.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Relación
              td.ajuste-border-tabla.texto-left Puede alojar varias comunidades.
              td.texto-left Puede utilizar una o varias plataformas.
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img25.png')})` }")
        .bloque-texto-g__texto.p-4
          p Estos espacios pueden favorecer aprendizaje, intercambio de experiencias, participación en grupos de interés, orientación, colaboración e iniciativas académicas, profesionales o comunitarias.
      p.mb-5 Para participar de manera pertinente, conviene considerar prácticas directamente relacionadas con el propósito del espacio:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t3/img26.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Reconocer el propósito y las reglas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Antes de intervenir, conviene identificar para qué existe el espacio, qué temas admite y cuáles son sus reglas. Esto facilita aportes relacionados con el objetivo común.
            .row(titulo="Aportar información pertinente").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las preguntas, respuestas, experiencias o recursos deben guardar relación con el tema. Antes de publicar, puede resultar útil comprobar si el asunto ya fue tratado.
            .row(titulo="Proteger información del grupo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 No deben divulgarse fuera de la comunidad conversaciones, documentos o datos privados o restringidos sin la autorización correspondiente.
            .row(titulo="Comprobar antes de compartir").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La información externa requiere revisión de procedencia y pertinencia. Un contenido llamativo o ampliamente difundido no necesariamente es confiable ni útil para la comunidad.
            .row(titulo="Utilizar mecanismos de apoyo").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Ante cuentas falsas, contenido engañoso o conductas abusivas, pueden utilizarse las funciones de reporte, moderación o apoyo disponibles en el espacio.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p  El siguiente caso muestra una participación acorde con los objetivos y reglas de una comunidad:
          .caja-1.color-1(data-aos="fade-right")
            h5 Ejemplo aplicado
            p Una persona ingresa a una comunidad digital sobre huertas urbanas. Revisa sus reglas y comprueba si una duda sobre riego ya fue tratada.
            p.mb-0 Luego comparte una guía de una entidad reconocida y explica brevemente su utilidad. El aporte se relaciona con el objetivo de la comunidad y no expone información privada de otras personas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t3/img27.png', alt='').m-auto
      Separador
      #t_3_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 3.4 Uso de medios digitales para la difusión de trabajos, experiencias o temas de interés
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t3/img28.png')})` }")
        .bloque-texto-g__texto.p-4
          p Difundir un trabajo, experiencia o tema de interés implica hacerlo llegar a una audiencia determinada mediante un canal adecuado. La decisión debe considerar propósito, público, alcance y evidencias disponibles. El objetivo es facilitar el acceso a resultados, aprendizajes o iniciativas sin convertir la difusión en un proceso completo de creación de contenidos. Un medio o canal corresponde al espacio utilizado para distribuir la información; el formato representa su forma de presentación y el producto es la pieza concreta que se difunde.
      p.mb-5 La selección del canal puede relacionarse con la necesidad de difusión y la audiencia prevista:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 9.
        span Medios para la difusión de trabajos y experiencias
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Tipo de contenido
              th.ajuste-border-tabla.texto-left Medio sugerido
              th.texto-left Recomendación
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Trabajo escrito
              td.ajuste-border-tabla.texto-left Documento PDF, repositorio o aula virtual
              td.texto-left Cuidar estructura, portada, referencias y nombre del archivo.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Experiencia o testimonio
              td.ajuste-border-tabla.texto-left Video corto, blog o publicación
              td.texto-left Mantener claridad, respeto y autorización de imagen.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Tema explicativo
              td.ajuste-border-tabla.texto-left Infografía, presentación o video
              td.texto-left Usar lenguaje sencillo y organización visual.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Proyecto o portafolio
              td.ajuste-border-tabla.texto-left Página web, repositorio o perfil profesional
              td.texto-left Mostrar evidencias organizadas y actualizadas.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Invitación o campaña
              td.ajuste-border-tabla.texto-left Red social, cartel digital o boletín
              td.texto-left Definir fecha, lugar, objetivo y llamado a la acción.
      p.mb-5 La difusión no requiere compartir todo el material disponible. Conviene seleccionar evidencias suficientes para respaldar el trabajo o experiencia ante la audiencia prevista.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img25.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Antes de compartir el contenido, puede revisarse desde tres aspectos:
      .row.justify-content-center.mb-5
        .col-xl-10
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="zoom-in")
            .row(titulo="Organización del contenido para difundir").ajuste-cajaAcordion.ajuste-vineta
              p En contenido difundido en medios digitales debe ser claro, ordenado y coherente. Para ello, puede organizarse con una estructura básica:
              ol.lista-ol--cuadro.mb-0
                li
                  .lista-ol--cuadro__vineta
                    span 1
                  | #[b Título:] presenta el tema principal.
                li
                  .lista-ol--cuadro__vineta
                    span 2
                  | #[b Propósito:] explica para qué se comparte el contenido.
                li
                  .lista-ol--cuadro__vineta
                    span 3
                  | #[b Mensaje central:] desarrolla la idea principal.
                li
                  .lista-ol--cuadro__vineta
                    span 4
                  | #[b Soportes:] incluye datos, imágenes, ejemplos, evidencias o enlaces.
                li
                  .lista-ol--cuadro__vineta
                    span 5
                  | #[b Cierre:] resume o invita a una acción.
                li
                  .lista-ol--cuadro__vineta
                    span 6
                  | #[b Créditos:] reconoce autoría, fuentes o participantes cuando corresponda.
              p.mb-3 Esta estructura puede adaptarse según el formato. En una infografía, el mensaje debe ser breve y visual. En un video, se requiere inicio, desarrollo y cierre. En un documento, se necesita mayor profundidad y organización textual.
            .row(titulo="Criterios de calidad para la difusión digital").ajuste-cajaAcordion.ajuste-vineta
              p Antes de publicar o compartir un trabajo, experiencia o tema de interés, se recomienda revisar:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Claridad del mensaje.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Coherencia entre título, contenido y propósito.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Ortografía y redacción.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Calidad de imágenes, audio o video.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Tamaño y formato del archivo.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Funcionamiento de enlaces.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Pertinencia del canal utilizado.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Respeto por derechos de autor.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Autorización para usar imágenes o datos de otras personas.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Protección de información personal o sensible.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Adecuación del lenguaje al público.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Revisión de privacidad y permisos de acceso.
            .row(titulo="Difusión responsable de experiencias y trabajos").ajuste-cajaAcordion.ajuste-vineta
              p Cuando se difunden experiencias o trabajos, se deben cuidar aspectos éticos y de privacidad. No todo producto puede publicarse abiertamente. Algunos trabajos pueden contener datos personales, nombres de instituciones, fotografías de personas, información interna o documentos que requieren autorización.
              p Para difundir responsablemente, se recomienda:
              ul.fa-ul.mb-3
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Solicitar autorización cuando se usen imágenes o datos de otras personas.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Eliminar información personal innecesaria.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Citar fuentes utilizadas.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | No presentar como propio el trabajo de otra persona.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Evitar modificar evidencias de manera engañosa.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Verificar que el contenido no afecte la privacidad de terceros.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Revisar la configuración de acceso antes de compartir enlaces.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Usar lenguaje respetuoso y profesional.
                li.mb-0
                  span.fa-li
                    i.fas.fa-arrow-alt-circle-right
                  | Corregir errores si se identifican después de publicar.
      p.mb-0 La difusión digital puede fortalecer la participación, el aprendizaje y la visibilidad de trabajos o experiencias. También permite compartir conocimientos con comunidades más amplias. Sin embargo, debe realizarse con responsabilidad, asegurando que el contenido sea pertinente, respetuoso, verificable y seguro.

</template>

<script>
export default {
  name: 'Tema3',
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
