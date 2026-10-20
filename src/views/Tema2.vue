<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 2
        h1 Gestión de medios, mensajes y recursos digitales
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-3_p
            p.mb-0 La gestión de medios, mensajes y recursos digitales permite organizar, recuperar, compartir y comunicar información de manera pertinente. Aplicar criterios claros contribuye a reducir pérdidas, duplicidades, confusiones y exposiciones innecesarias de datos, además de facilitar el seguimiento de actividades y el uso responsable de los recursos en diferentes contextos digitales.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img1.png', alt='' style="width: 500px").m-auto
      #t_2_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.1 Gestión del correo electrónico: almacenamiento, etiquetado y búsqueda
      .bloque-texto-g.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img2.png')})` }")
        .bloque-texto-g__texto.p-4
          p Organizar el correo electrónico facilita la identificación y recuperación de mensajes, archivos, evidencias y comunicaciones importantes. Para ello pueden utilizarse carpetas, etiquetas, categorías, marcadores, filtros, reglas, archivo y herramientas de búsqueda, cuyas funciones y denominaciones pueden variar según la plataforma utilizada.
      p.mb-5 Estas funciones cumplen propósitos diferentes y pueden combinarse para mantener una organización coherente de los mensajes:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Carpetas
                  p.mb-0 Permiten agrupar mensajes según temas, actividades, áreas o procesos. Una estructura sencilla facilita la recuperación de información; demasiadas carpetas o nombres muy similares pueden generar confusión.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img3.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Etiquetas
                  p.mb-0 Permiten asociar una o varias categorías a un mensaje según tema, prioridad o estado. Conviene utilizar denominaciones breves, consistentes y suficientemente diferenciadas.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img4.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Categorías y marcadores
                  p.mb-0 Algunas plataformas incorporan estrellas, banderas, categorías o indicadores de importancia. Estas funciones permiten destacar mensajes pendientes o prioritarios y complementan la organización general de la cuenta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img5.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Filtros y reglas
                  p.mb-0 Permiten automatizar acciones cuando un mensaje cumple determinadas condiciones, como remitente o asunto. Por ejemplo, una regla puede clasificar automáticamente notificaciones en una carpeta. Su funcionamiento depende de cada servicio.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img6.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Archivo
                  p.mb-0 Archivar permite retirar mensajes de la bandeja principal sin eliminarlos. Resulta útil cuando una comunicación ya fue atendida, pero debe conservarse como referencia, soporte o antecedente.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img7.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Búsqueda
                  p.mb-0 Permite recuperar mensajes mediante datos como remitente, asunto, palabras clave, fecha, adjuntos, estado o categorías. Su precisión mejora cuando se utilizan criterios suficientemente específicos y las funciones disponibles en cada plataforma.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t2/img8.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 Microsoft Outlook y Gmail organizan estas funciones de manera diferente. Por ello, no conviene asumir que todas las plataformas utilizan las mismas denominaciones o mecanismos de clasificación.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img9.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Almacenamiento y conservación de mensajes y archivos adjuntos
      p.mb-5 Los mensajes y archivos importantes deben conservarse de acuerdo con su utilidad, las necesidades del proceso y las políticas aplicables. Los adjuntos pueden requerir almacenamiento en ubicaciones autorizadas, con nombres claros y evitando duplicidades.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img10.png', alt='').m-auto
        .col-xl
          .caja-1.color-1(data-aos="fade-left").mb-3
            p.mb-0 La descarga, eliminación o conservación de correos no debe realizarse automáticamente. Cuando un mensaje constituye evidencia o soporte, deben considerarse las políticas institucionales, la protección de la información y las autorizaciones correspondientes.
          .row.align-items-center
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 También es recomendable mantener espacio disponible, comprobar que los archivos puedan abrirse y evitar descargar adjuntos de remitentes desconocidos.
      p.mb-5 Las etiquetas pueden organizarse por estado, prioridad o tipo de contenido; algunos ejemplos son:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-6
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 3.
                span Etiquetas para la gestión del correo electrónico
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Etiqueta
                      th.texto-left Uso recomendado
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pendiente
                      td.texto-left Requiere respuesta o acción posterior.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Importante
                      td.texto-left Debe consultarse con prioridad.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Evidencias
                      td.texto-left Sirve como soporte de una actividad o proceso.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Documentos
                      td.texto-left Contiene archivos adjuntos relevantes.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Seguimiento
                      td.texto-left Corresponde a un proceso en desarrollo.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Revisado
                      td.texto-left  Ya fue atendido.
      p.mb-5 Una lógica constante de clasificación facilita recuperar la información y evita crear etiquetas innecesarias o demasiado similares.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img9.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Recuperación y búsqueda de información
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t2/img11.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La búsqueda permite localizar mensajes o archivos mediante datos conocidos, como remitente, asunto, fecha aproximada, nombre del adjunto, palabras clave, estado o marcadores.
      p.mb-5 Para recuperar un mensaje con mayor precisión, la búsqueda puede organizarse en una secuencia breve:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Identificar la información conocida
                p.mb-0 Se determina qué datos se recuerdan: remitente, asunto, periodo aproximado, nombre del archivo, palabras clave o estado del mensaje.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img12.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img13.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Iniciar con criterios relevantes
                p.mb-0 Se incorporan uno o dos datos suficientemente específicos. Una palabra demasiado general puede generar numerosos resultados y dificultar la recuperación.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Refinar mediante funciones de la plataforma
                p.mb-0 Cuando sea necesario, se utilizan filtros u operadores disponibles para remitente, fecha, adjuntos, asunto, categorías u otras condiciones.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img14.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img15.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Comprobar el resultado
                p.mb-0 Se confirma que el mensaje corresponda al remitente, periodo, asunto o archivo requerido antes de descargar, reenviar o utilizar su contenido.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Facilitar una recuperación posterior
                p.mb-0 Si el mensaje debe conservarse, puede clasificarse mediante las funciones autorizadas de la cuenta y la lógica de organización establecida.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img16.png', alt='' style="width: 300px").m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img17.png', alt='').m-auto
        .col-xl
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img11.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 El siguiente caso aplica criterios de búsqueda para recuperar un certificado recibido durante un periodo específico:
          .caja-1.ajuste-2(data-aos="fade-left")
            h5 Ejemplo aplicado
            p Una persona necesita recuperar un certificado PDF recibido en marzo de 2026. Escribir «certificado PDF marzo» puede localizar coincidencias, pero no garantiza un filtrado técnico por fecha o formato.
            p En Gmail puede utilizarse:
            p certificado filename:pdf after:2026/03/01 before:2026/04/01
            p.mb-0 Si se conoce el remitente, puede agregarse from:. Esta sintaxis corresponde específicamente a Gmail; otras plataformas utilizan funciones diferentes.
      Separador
      #t_2_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.2 Publicación de contenidos, conocimientos y recursos digitales
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t2/img18.png')})` }")
        .bloque-texto-g__texto.p-4
          p Publicar o compartir un recurso digital significa poner información, documentos, conocimientos u otros contenidos a disposición de una audiencia. Antes de hacerlo, es necesario identificar el propósito, el público y las condiciones de difusión, además de comprobar que el recurso sea pertinente y pueda compartirse responsablemente.
      p.mb-5 Antes de publicar o compartir, conviene definir tres decisiones básicas que orientan la adecuación del recurso:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img19.png', alt="" ).m-auto
              h4.text-center Propósito
              .caja-4_p
                p.mb-0 Define para qué se comparte el contenido. Puede buscar informar, orientar, presentar resultados, socializar experiencias, divulgar evidencias, invitar a participar o compartir conocimientos.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img20.png', alt="" ).m-auto
              h4.text-center Público destinatario
              .caja-4_p
                p.mb-0 Permite ajustar lenguaje, profundidad, cantidad de información y condiciones de acceso. También orienta la protección de datos y evita asumir que todas las personas tienen los mismos conocimientos o formas de participación.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t2/img21.png', alt="" ).m-auto
              h4.text-center Recurso y espacio de publicación
              .caja-4_p
                p.mb-0 El recurso debe relacionarse con la finalidad y con las posibilidades del espacio donde será compartido. Un documento, imagen, audio, video o enlace puede distribuirse mediante distintos canales según público, alcance y condiciones de acceso.
      p.mb-5 Los recursos pueden adoptar diferentes formatos y distribuirse mediante distintos medios. Por ejemplo, un video puede compartirse en una plataforma educativa, un repositorio, una página web o una red social.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img25.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Los recursos pueden cumplir funciones diferentes; la relación entre uso y cuidado puede organizarse así:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 4.
                span Recursos digitales según su uso
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Contenido o recurso compartido
                      th.ajuste-border-tabla.texto-left Uso principal
                      th.texto-left Cuidado asociado con su publicación
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Texto
                      td.ajuste-border-tabla.texto-left Explicar, informar o argumentar.
                      td.texto-left Revisar claridad, pertinencia y extensión.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Imagen
                      td.ajuste-border-tabla.texto-left Ilustrar ideas o evidencias.
                      td.texto-left Comprobar autoría, permisos y pertinencia.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Video
                      td.ajuste-border-tabla.texto-left Explicar procesos o experiencias.
                      td.texto-left Proteger privacidad y condiciones de uso.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Audio
                      td.ajuste-border-tabla.texto-left Compartir explicaciones o entrevistas.
                      td.texto-left Revisar autorización y condiciones de difusión.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Documento
                      td.ajuste-border-tabla.texto-left Presentar información formal o extensa.
                      td.texto-left Proteger datos y nombrar claramente el archivo.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Enlace
                      td.ajuste-border-tabla.texto-left Dirigir hacia un recurso externo.
                      td.texto-left Comprobar destino y confiabilidad.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Infografía
                      td.ajuste-border-tabla.texto-left Sintetizar información gráfica y textual.
                      td.texto-left Evitar sobrecarga y reconocer fuentes.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img11.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 Esta organización evita presentar el formato como si fuera necesariamente el canal de comunicación.
          .caja-1(data-aos="fade-right")
            h5 Publicación responsable
            p.mb-0 Antes de publicar, se requiere comprobar que el recurso sea pertinente, comprensible y adecuado para el público previsto. También deben considerarse autoría, condiciones de uso, privacidad, alcance y posibles correcciones posteriores.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img22.png', alt='').m-auto
      p.mb-5 La publicación responsable requiere comprobar aspectos relacionados con la información, los permisos y su posible circulación:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t2/img23.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Pertinencia y calidad de la información").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El contenido debe responder al propósito y ser comprensible para la audiencia. Cuando procede de fuentes externas, conviene comprobar su vigencia y confiabilidad antes de difundirlo.
            .row(titulo="Autoría, atribución y condiciones de uso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los contenidos de terceros requieren reconocimiento de procedencia cuando corresponda. Sin embargo, citar una fuente no autoriza automáticamente su reutilización; también deben revisarse licencias, permisos y restricciones.
            .row(titulo="Privacidad y alcance").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Antes de publicar, se debe comprobar si aparecen datos personales, imágenes, conversaciones o documentos que requieran autorización o protección, así como quién podrá acceder al recurso.
            .row(titulo="Corrección y responsabilidad posterior").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Si se identifica un error, conviene corregir la información o retirar el contenido cuando corresponda. También deben respetarse las normas del espacio y evitar información engañosa, ofensiva o no comprobada.
      p.mb-5 Creative Commons establece que sus licencias incluyen condiciones específicas de reutilización. Por ello, reconocer una fuente no sustituye la comprobación de la licencia o autorización aplicable.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 El siguiente caso relaciona propósito, público y canal en una situación de difusión académica:
          .caja-1.color-1(data-aos="fade-right")
            h5 Ejemplo aplicado
            p Un grupo debe entregar al instructor un informe con evidencias académicas. Como el público está definido, utiliza la plataforma institucional y restringe el acceso a las personas autorizadas.
            p.mb-0 Publicarlo en una red social abierta ampliaría innecesariamente su alcance y podría exponer información que no fue preparada para difusión pública.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t2/img24.png', alt='').m-auto
      Separador
      #t_2_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.3 Uso adecuado de medios digitales según el contexto comunicativo
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-3_p
            p.mb-0 El contexto comunicativo comprende la finalidad, los participantes, la formalidad, el tiempo de respuesta, la privacidad y las características de la información. Estas condiciones orientan la elección y el uso del medio. Una misma intención puede requerir diferente tono, extensión, canal o nivel de registro según la situación.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t2/img25.png', alt='' style="width: 500px").m-auto
      p.mb-5 Las condiciones de uso cambian según el contexto; las principales particularidades se presentan en cuatro ámbitos:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Comunicación personal")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img26.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Comunicación personal
              p.mb-0 Se desarrolla entre familiares, amistades o contactos cercanos y puede admitir mayor flexibilidad. La confianza no elimina la necesidad de respetar privacidad, horarios y decisiones de otras personas.
        .py-3.py-md-4(titulo="Comunicación académica")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img27.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Comunicación académica
              p.mb-0 Se desarrolla en ambientes de aprendizaje, plataformas, correos institucionales, foros y reuniones. Requiere claridad, cumplimiento de indicaciones, fechas y formatos, además de identificación adecuada de archivos y reconocimiento de fuentes.
        .py-3.py-md-4(titulo="Comunicación laboral")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img28.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Comunicación laboral
              p.mb-0 Se relaciona con procesos, clientes, equipos, reportes, solicitudes y decisiones. Requiere precisión, oportunidad, uso de canales definidos, protección de información interna y registro de acuerdos cuando corresponda.
        .py-3.py-md-4(titulo="Comunicación social o comunitaria")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img29.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Comunicación social o comunitaria
              p.mb-0 Puede desarrollarse en redes, comunidades y espacios públicos digitales. Requiere respeto por perspectivas diversas, protección de datos, comprobación de información y cumplimiento de las reglas del espacio.
      .tarjeta--container.row.justify-content-center.mb-5.m-0(data-aos="zoom-in")
        .col-xl-6.col-md-10.tarjeta.color-acento-contenido.p-5.mb-4.mb-lg-0.text-white
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img30.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Diversidad y adecuación al contexto
          p.mb-0 Adaptar una comunicación no implica atribuir comportamientos por edad, procedencia, cultura o grupo social. Conviene considerar las condiciones reales de quienes participan, como formas de tratamiento acordadas, conectividad, accesibilidad, disponibilidad y experiencia con la herramienta, evitando suposiciones o estereotipos.
        .col-xl-6.col-md-10.tarjeta.color-primario.p-5
          .row.d-flex.align-items-end.mb-4
            .col-xl-auto.mb-3.mb-lg-0(data-aos="fade-right")
              figure
                img(src='@/assets/curso/temas/t2/img31.svg', alt='' style="max-width: 100px")
            .col-xl
              h2.mb-0 Criterios para seleccionar el medio
          p.mb-0 Un medio o canal permite realizar el intercambio; un formato representa la información mediante texto, imagen, audio o video; y un producto es una pieza concreta, como un informe, invitación o presentación. Estas categorías pueden combinarse.
      p.mb-5 La elección del medio puede apoyarse en criterios que relacionan la situación comunicativa con las condiciones de participación:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 5.
                span Criterios para seleccionar el medio según la necesidad comunicativa
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Criterio
                      th.ajuste-border-tabla.texto-left Pregunta orientadora
                      th.texto-left Incidencia en la elección
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Finalidad
                      td.ajuste-border-tabla.texto-left ¿Qué se busca lograr?
                      td.texto-left Define la necesidad comunicativa.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Destinatario
                      td.ajuste-border-tabla.texto-left ¿Quién recibirá la información?
                      td.texto-left Orienta lenguaje, formalidad y alcance.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Urgencia
                      td.ajuste-border-tabla.texto-left ¿Se necesita respuesta inmediata?
                      td.texto-left Ayuda a definir la temporalidad.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Formalidad
                      td.ajuste-border-tabla.texto-left ¿El intercambio es institucional o formal?
                      td.texto-left Influye en tono, estructura y canal.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Registro
                      td.ajuste-border-tabla.texto-left ¿Debe quedar evidencia?
                      td.texto-left Favorece medios que conserven información.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Participantes
                      td.ajuste-border-tabla.texto-left ¿Interviene una persona, grupo o audiencia?
                      td.texto-left Orienta el tipo de espacio.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Disponibilidad
                      td.ajuste-border-tabla.texto-left ¿Pueden coincidir y acceder al medio?
                      td.texto-left Considera horarios y conectividad.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Privacidad
                      td.ajuste-border-tabla.texto-left ¿La información requiere protección?
                      td.texto-left Determina nivel de acceso.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Características del mensaje
                      td.ajuste-border-tabla.texto-left ¿Es breve, complejo o incluye archivos?
                      td.texto-left Orienta el medio más adecuado.
      p.mb-5 No existe un único medio correcto para cada situación. La decisión depende de la combinación de criterios y de los acuerdos establecidos entre quienes participan.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t2/img32.png', alt='').m-auto
        .col-xl
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 El siguiente caso muestra cómo una misma intención cambia según el contexto y el destinatario:
          .caja-1(data-aos="fade-left")
            h5 Ejemplo aplicado
            p La intención es #[b informar un cambio de horario].
            ul.fa-ul.estilo___ul.mb-0
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Personal:] «El encuentro cambia a las 3:00 p. m. ¿Me confirman si pueden asistir?». 
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Académico:] «La asesoría se realizará a las 4:00 p. m. Se agradece confirmar la recepción del cambio». 
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Laboral:] «La reunión se reprograma para las 10:00 a. m. del jueves. Confirme disponibilidad antes del miércoles». 
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | #[b Social o comunitario:] «La jornada comunitaria se realizará el sábado a las 9:00 a. m.».
      P.mb-0 La finalidad es la misma, pero cambian formalidad, medio, cantidad de información y necesidad de registro.
      Separador
      #t_2_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 2.4 Expresiones adecuadas y normas de netiqueta en la comunicación digital
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img33.png')})` }")
        .bloque-texto-g__texto.p-4
          p La netiqueta reúne pautas para mantener comunicaciones respetuosas, claras y pertinentes en entornos digitales. Su aplicación ayuda a reducir malentendidos y organizar la interacción. Una expresión cordial también debe comunicar con precisión una solicitud, decisión, corrección o desacuerdo, de acuerdo con el contexto y el canal utilizado.
      p.mb-5 Las normas generales pueden agruparse según el aspecto comunicativo que ayudan a cuidar:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t2/img34.png', alt='' style="max-width: 300px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img35.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Claridad y organización
                  p.mb-0.text-center Expresar la idea principal con precisión, revisar redacción e incluir los datos necesarios para comprender el mensaje.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img36.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Respeto y tono
                  p.mb-0.text-center Mantener un tono respetuoso y evitar insultos, burlas, agresiones o uso generalizado de mayúsculas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img37.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Pertinencia y oportunidad
                  p.mb-0.text-center Enviar mensajes relacionados con el propósito del espacio y evitar contenidos repetitivos, fragmentados o fuera de tema.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img38.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Privacidad y consentimiento
                  p.mb-0.text-center Proteger conversaciones, fotografías y datos de terceros, comprobando destinatarios y alcance antes de compartirlos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img39.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Verificación y autoría
                  p.mb-0.text-center Comprobar la procedencia de la información y reconocer las fuentes y condiciones de uso cuando corresponda.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t2/img40.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Aclaración antes de asumir
                  p.mb-0.text-center Solicitar aclaraciones cuando un mensaje sea ambiguo antes de atribuir intenciones negativas o responder impulsivamente.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img25.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 El nivel de formalidad depende del contexto. Una comunicación respetuosa debe mantener clara la intención del mensaje.
      p.mb-5 Las expresiones siguientes contrastan formulaciones poco adecuadas con alternativas respetuosas y suficientemente precisas:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 6.
                span Expresiones adecuadas según el contexto
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Situación
                      th.ajuste-border-tabla.texto-left Expresión poco adecuada
                      th.texto-left Expresión adecuada
                  tbody
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Solicitar información
                      td.ajuste-border-tabla.texto-left «Mándeme eso ya».
                      td.texto-left «Por favor, envíe el documento antes del viernes a las 3:00 p. m.».
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Pedir aclaración
                      td.ajuste-border-tabla.texto-left «No se entiende nada».
                      td.texto-left «¿Podría aclarar este punto? No queda definida la relación entre las dos ideas».
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Responder en un foro
                      td.ajuste-border-tabla.texto-left «Eso está mal».
                      td.texto-left «No coincido con esta interpretación. Considero que puede analizarse desde otra perspectiva por las siguientes razones…».
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Recordar una entrega
                      td.ajuste-border-tabla.texto-left «No han enviado nada».
                      td.texto-left «Se recuerda que el archivo está pendiente y debe enviarse hoy antes de las 5:00 p. m.».
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Corregir un error
                      td.ajuste-border-tabla.texto-left «Usted se equivocó».
                      td.texto-left «En este dato se requiere un ajuste; el valor correcto es 25 y no 20».
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Rechazar una propuesta
                      td.ajuste-border-tabla.texto-left «Eso no sirve».
                      td.texto-left «Gracias por la propuesta. En esta ocasión no se aprueba porque no responde al objetivo establecido».
      p.mb-5 Estas alternativas mantienen el respeto sin ocultar la intención: una solicitud con plazo debe precisarlo y un rechazo debe comunicar claramente la decisión.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img9.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Netiqueta según el canal
      p.mb-5 La aplicación de la netiqueta cambia según el canal; estas son algunas prácticas específicas para cada espacio:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Correo electrónico")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img41.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Correo electrónico
              p Conviene utilizar un asunto claro, saludo y cierre cuando correspondan, organizar el contenido y comprobar destinatarios y archivos antes del envío.
              p.mb-0 También debe evitarse «responder a todos» cuando la información no corresponda a todas las personas. El nivel de formalidad y el uso de firma dependen del contexto.
        .py-3.py-md-4(titulo="Chats y grupos")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img42.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Chats y grupos
              p Los mensajes deben corresponder a la finalidad del espacio. Conviene revisar mensajes anteriores, respetar horarios acordados y evitar cadenas, contenidos repetidos o conflictos personales.
              p.mb-0 Los mensajes de audio deben utilizarse cuando resulten pertinentes y no como sustitución automática del texto.
        .py-3.py-md-4(titulo="Foros y comunidades")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img43.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Foros y comunidades
              p.mb-0 Los aportes deben relacionarse con el tema y presentar argumentos claros. Es necesario respetar opiniones diferentes, reconocer contenidos ajenos y evitar ataques personales o intervenciones que desvíen deliberadamente la conversación.
        .py-3.py-md-4(titulo="Videoconferencias")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t2/img44.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Videoconferencias
              p Conviene ingresar puntualmente, utilizar una identificación comprensible, evitar interrupciones y respetar los mecanismos de participación acordados.
              p.mb-0 El micrófono puede mantenerse desactivado cuando no se interviene. No deben grabarse sesiones sin autorización ni compartirse datos privados mediante pantalla compartida.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img9.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Manejo de desacuerdos en entornos digitales
      p.mb-5 Los desacuerdos pueden expresarse sin trasladar la discusión hacia ataques personales. Una respuesta adecuada se centra en las ideas, formula argumentos, solicita aclaraciones cuando sean necesarias y plantea alternativas relacionadas con el tema.
      .row.justify-content-center.mb-5
        .col-lg-10
          .caja-5.mb-5(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 Ante un desacuerdo, conviene organizar la respuesta para mantener el foco en las ideas y evitar una escalada innecesaria:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Revisar completamente el mensaje
                p.mb-0 Se identifica la idea principal y el punto concreto de desacuerdo. Responder de manera inmediata puede llevar a interpretar el mensaje de forma incompleta.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img45.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img46.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Separar la idea de la persona
                p.mb-0 La respuesta debe referirse al argumento, dato o propuesta y evitar comentarios sobre características personales de quien participa.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Formular la posición con argumentos
                p.mb-0 Se expresa claramente el desacuerdo y, cuando corresponda, se incorporan razones, datos o ejemplos que sustenten la posición.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img47.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img48.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Solicitar aclaración cuando sea necesaria
                p.mb-0 Si una expresión admite varias interpretaciones, conviene preguntar por su sentido antes de atribuir una intención negativa.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Reconocer aportes y plantear alternativas
                p.mb-0 Cuando existan elementos válidos, pueden reconocerse. Si el intercambio puede continuar, se propone una alternativa concreta relacionada con el asunto tratado.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t2/img49.png', alt='' style="width: 300px").m-auto
      p.mb-5 Para reforzar la aplicación de la netiqueta en situaciones cotidianas, se invita a reproducir el siguiente pódcast: 
      .row.align-items-center.m-0.mb-5
        .col-xl
          .row.align-items-center.justify-content-center.caja-6(data-aos="zoom-in")
            .col-auto.mb-4.mb-lg-0
              figure(data-aos="fade-right")
                img(src="@/assets/curso/temas/t2/img50.svg" style="max-width: 220px").m-auto
            .col
              h4.mb-4 Pódcast
              TarjetaAudio.color-acento-contenido.mb-4(
                  texto="&quot;Netiqueta en acción: comunicar con claridad y respeto&quot;"
                  :audio="audio1"
                  @audio-hover="mostrarIndicadorTarjetaAudio = false"
                )
                  .indicador--click(v-if="mostrarIndicadorTarjetaAudio")
        .col-xl-auto.d-none.d-xl-block
          figure(data-aos="fade-left")
            img(src="@/assets/curso/temas/t2/img51.png" style="max-width: 510px").m-auto
      p.mb-0 Se invita a profundizar en situaciones de comunicación digital donde el tono, la claridad y la elección de expresiones adecuadas favorecen interacciones respetuosas y reducen malentendidos en distintos contextos.

</template>

<script>
import audio1 from '@/assets/curso/temas/t2/audios/audio-ej.mp3'
export default {
  name: 'Tema2',
  data: () => ({
    audio1,
    mostrarIndicadorTarjetaAudio: true,
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
