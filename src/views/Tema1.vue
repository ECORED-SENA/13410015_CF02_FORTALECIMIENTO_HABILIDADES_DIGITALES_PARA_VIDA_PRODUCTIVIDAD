<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 1
        h1 Comunicación e interacción en entornos digitales
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p La comunicación en entornos digitales facilita el intercambio entre personas, grupos, comunidades e instituciones en contextos personales, académicos, laborales y sociales. Su uso adecuado requiere mensajes claros, responsabilidad frente a la información compartida y consideración de las condiciones de cada situación, con el fin de favorecer interacciones organizadas, pertinentes y seguras.
      #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.1 Concepto de comunicación digital
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t1/img2.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p.mb-0 La comunicación digital es el proceso mediante el cual se transmite, recibe e interpreta información utilizando dispositivos, aplicaciones, plataformas y redes tecnológicas. Puede desarrollarse de forma simultánea o diferida e integrar texto, imágenes, audio, video, enlaces, documentos y otros recursos, según la intención y el contexto del intercambio.
      p.mb-5 Los elementos que intervienen en este proceso se relacionan a continuación mediante su función y un ejemplo de aplicación digital:
      .bg-1
        .px-5
          .row.justify-content-center.mb-5
            .col-xl-10
              .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
                h5 Tabla 1.
                span Elementos de la comunicación digital
              .tabla-a(data-aos="zoom-in")
                table
                  thead
                    tr
                      th.ajuste-border-tabla.texto-left Elemento
                      th.ajuste-border-tabla.texto-left Descripción
                      th.texto-left Ejemplo en entorno digital
                  tbody
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Emisor
                      td.ajuste-border-tabla.texto-left Persona o entidad que crea y envía el mensaje.
                      td.texto-left Persona que envía un correo electrónico.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Receptor
                      td.ajuste-border-tabla.texto-left Persona, grupo o comunidad que recibe e interpreta el mensaje.
                      td.texto-left Equipo de trabajo que recibe la comunicación.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Mensaje
                      td.ajuste-border-tabla.texto-left Información que se desea comunicar.
                      td.texto-left Instrucción, solicitud, comentario o información adjunta.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Canal
                      td.ajuste-border-tabla.texto-left Medio digital utilizado para transmitir el mensaje.
                      td.texto-left Correo electrónico, chat, foro o videoconferencia.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Código
                      td.ajuste-border-tabla.texto-left Sistema de signos y convenciones compartidas que permite construir e interpretar el mensaje.
                      td.texto-left Español escrito, símbolos o convenciones comprensibles para quienes participan.
                    tr
                      td.ajuste-border-tabla.texto-left.text-weight-bold Contexto
                      td.ajuste-border-tabla.texto-left Situación y condiciones en las que ocurre el intercambio comunicativo.
                      td.texto-left Solicitud académica relacionada con una actividad y una fecha de entrega.
                    tr.ajuste-color-tabla
                      td.ajuste-border-tabla.texto-left.text-weight-bold Retroalimentación
                      td.ajuste-border-tabla.texto-left Respuesta o reacción que permite conocer cómo fue recibido o interpretado el mensaje.
                      td.texto-left Confirmación, respuesta, comentario o reacción.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 La claridad permite reducir confusiones e interpretaciones diferentes. Un mensaje preciso identifica la información necesaria para que quien lo recibe pueda comprender qué se solicita o comunica.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El siguiente caso compara una solicitud ambigua con otra formulada de manera precisa:
          .caja-1.color-1.ajuste-1(data-aos="fade-right")
            h5 Ejemplo aplicado
            p Mensaje impreciso: «Envíeme eso después».
            p Mensaje preciso: «Envíe el archivo en formato PDF hoy antes de las 5:00 p. m.».
            p En el segundo mensaje se identifica qué debe enviarse, en qué formato y dentro de qué plazo. La precisión reduce la posibilidad de interpretaciones diferentes y facilita una respuesta acorde con la solicitud.
            p.mb-0 La comunicación digital también puede responder a distintos propósitos. No todos requieren la misma forma de organizar el mensaje ni producen el mismo tipo de interacción.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img4.png', alt='').m-auto
      p.mb-5 La comunicación digital puede responder a varias finalidades, según la acción principal que se busca realizar:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-0
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t1/img5.png', alt='' style="max-width: 400px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img6.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Informar y solicitar
                  p.mb-0.text-center Permite comunicar una situación o decisión y solicitar datos, archivos, respuestas o confirmaciones necesarias para continuar una actividad.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img7.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Compartir recursos
                  p.mb-0.text-center Facilita intercambiar documentos, enlaces, archivos y otros recursos útiles en contextos personales, académicos, laborales o productivos.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img8.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Coordinar y resolver
                  p.mb-0.text-center Permite organizar tareas, precisar responsabilidades, resolver dudas y atender situaciones relacionadas con una actividad común.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img9.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Participar y socializar
                  p.mb-0.text-center Favorece la participación en discusiones y la socialización de experiencias, avances, resultados e ideas relacionadas con un tema.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img10.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Reunirse y orientar
                  p.mb-0.text-center Facilita reuniones, entrevistas, asesorías y otros intercambios que requieren participación entre dos o más personas.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t1/img11.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Publicar y colaborar
                  p.mb-0.text-center Permite difundir contenidos para una comunidad y aportar en proyectos o actividades desarrolladas de manera compartida.
      Separador
      #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.2 Características de los medios de comunicación digital
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img12.png')})` }")
        .bloque-texto-g__texto.p-4
          p Los medios digitales permiten transmitir, recibir, almacenar, publicar o compartir información mediante recursos electrónicos. Sus posibilidades de uso están relacionadas con características como rapidez, conectividad, registro, interactividad, multimedialidad y alcance. Cada una aporta ventajas a la comunicación, pero también exige cuidados para reducir errores y utilizar la información responsablemente.
      p.mb-5 Las principales características se presentan según la posibilidad que ofrecen y las condiciones que requieren durante su uso:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img13.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Rapidez
                  p.mb-0 Los mensajes digitales pueden circular en pocos segundos, facilitando la coordinación y el intercambio oportuno. Esta inmediatez también puede favorecer respuestas impulsivas o contenidos incompletos; por ello, la rapidez no debe sustituir la revisión previa.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img14.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Conectividad
                  p.mb-0 La conectividad permite interactuar desde diferentes lugares mediante internet u otras redes. Facilita reuniones, acceso a plataformas e intercambio de archivos, aunque depende de condiciones como calidad de conexión, dispositivo, servicio y disponibilidad de energía o datos.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img15.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Registro de la información
                  p.mb-0 Muchos medios conservan mensajes, archivos, fechas, participantes y respuestas. Este registro facilita seguimiento y recuperación de información, pero exige responsabilidad porque los contenidos pueden permanecer almacenados y conservarse durante periodos prolongados.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img16.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Interactividad
                  p.mb-0 Los medios digitales permiten responder, comentar, reaccionar, compartir o editar información. Esta interacción favorece la colaboración y construcción colectiva, siempre que las intervenciones mantengan relación con el propósito del intercambio y aporten al desarrollo de la actividad.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img17.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Multimedialidad
                  p.mb-0 La comunicación digital puede integrar texto, imagen, audio, video, enlaces, documentos, gráficos y formularios. Combinar formatos puede enriquecer un mensaje, siempre que cada recurso cumpla una función y no genere acumulación innecesaria de información.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t1/img18.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Alcance
                  p.mb-0 Un mensaje puede dirigirse a una persona, grupo o comunidad amplia y circular más allá del público inicial mediante copias o reenvíos. Por ello, conviene considerar destinatarios, información compartida y posibles efectos de su difusión.
      p.mb-5 Cada característica implica cuidados concretos para mantener una comunicación clara, pertinente y responsable:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img19.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Rapidez").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Antes de enviar información, conviene comprobar que el contenido esté completo, el destinatario sea correcto, el tono corresponda al propósito y los archivos mencionados estén incorporados. La inmediatez no debe impedir una revisión básica.
            .row(titulo="Conectividad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Cuando una comunicación sea importante, conviene comprobar la conexión, el acceso a la plataforma y el funcionamiento del dispositivo. Si una falla técnica puede afectar la actividad, resulta útil prever una alternativa de comunicación.
            .row(titulo="Registro de la información").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los mensajes, publicaciones y archivos pueden permanecer almacenados. Por esta razón, se requiere proteger datos personales y evitar compartir información que pueda afectar la privacidad o seguridad de otras personas.
      .row.align-items-center.mb-0
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Interactividad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las respuestas deben relacionarse con el asunto tratado y aportar al intercambio. En actividades grupales conviene mantener claridad, evitar intervenciones repetitivas y reducir contenidos que no contribuyan al propósito común.
            .row(titulo="Multimedialidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Cada formato debe cumplir una función dentro del mensaje. Los archivos, enlaces y recursos complementarios requieren organización para que su relación con el contenido sea clara y no dificulten la comprensión.
            .row(titulo="Alcance").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Antes de compartir o reenviar información, se requiere comprobar quién la recibirá, si puede difundirse y si contiene datos que necesiten autorización, tratamiento especial o acceso restringido.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img20.png", alt="" style="width: 300px").m-auto
      Separador
      #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.3 Medios digitales sincrónicos y asincrónicos
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img21.png')})` }")
        .bloque-texto-g__texto.p-4
          p La comunicación sincrónica requiere participación simultánea y ocurre en tiempo real; la asincrónica permite intervenir en momentos diferentes. Esta distinción depende de la coincidencia temporal entre participantes, no de la velocidad técnica del mensaje. Ambas modalidades pueden complementarse según la urgencia, disponibilidad y necesidad de registro.
      p.mb-5 Las diferencias principales pueden compararse según participación, utilidad, ventajas y limitaciones: 
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 2.
        span Comparación entre comunicación sincrónica y asincrónica
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Aspecto
              th.ajuste-border-tabla.texto-left Comunicación sincrónica
              th.texto-left Comunicación asincrónica
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Participación
              td.ajuste-border-tabla.texto-left Las personas participan al mismo tiempo.
              td.texto-left Las personas no necesitan participar simultáneamente.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Usos frecuentes
              td.ajuste-border-tabla.texto-left Resolver dudas urgentes, coordinar acciones inmediatas, discutir situaciones o tomar decisiones rápidas.
              td.texto-left Compartir información detallada, dejar evidencia, analizar documentos, desarrollar discusiones extendidas o coordinar actividades sin horario común.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Ejemplos frecuentes
              td.ajuste-border-tabla.texto-left Videoconferencia, llamada mediante internet, chat en vivo, reunión virtual o transmisión en directo con interacción.
              td.texto-left Correo electrónico, foro, comentarios en plataformas, formularios, documentos compartidos con observaciones o mensajes que pueden responderse posteriormente.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Ventajas
              td.ajuste-border-tabla.texto-left Permite intercambio inmediato, aclaraciones en tiempo real y participación directa.
              td.texto-left Ofrece flexibilidad, mayor tiempo para elaborar respuestas y posibilidad de conservar registros, archivos y antecedentes del intercambio.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Limitaciones
              td.ajuste-border-tabla.texto-left Requiere disponibilidad simultánea y puede depender fuertemente de las condiciones de conexión. Los acuerdos importantes pueden necesitar registro posterior.
              td.texto-left La respuesta puede tardar, pueden acumularse mensajes y una redacción poco clara puede ocasionar interpretaciones diferentes. No resulta apropiada para todas las situaciones urgentes.
      p.mb-5 Para organizar la interacción, conviene considerar estos criterios antes de seleccionar una modalidad:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img22.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Urgencia y simultaneidad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se debe establecer si la respuesta se necesita de inmediato y si las personas pueden coincidir temporalmente. Cuando existe urgencia y disponibilidad común, una interacción sincrónica puede facilitar la resolución del asunto.
            .row(titulo="Complejidad y tiempo de análisis").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Cuando la información requiere revisión, consulta de documentos o preparación de una respuesta, la modalidad asincrónica puede ofrecer mayor flexibilidad. Algunos asuntos complejos también pueden requerir una aclaración sincrónica inicial.
            .row(titulo="Registro y recursos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Conviene determinar si se necesita conservar evidencia escrita, adjuntar archivos o documentar acuerdos. Estas necesidades pueden favorecer medios asincrónicos o requerir que una interacción sincrónica se complemente con un registro posterior.
            .row(titulo="Participación y características del intercambio").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La selección también considera cantidad de participantes, disponibilidad y grado de formalidad. La formalidad por sí sola no determina la modalidad; debe valorarse junto con las demás condiciones del intercambio.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p Este caso integra ambos modos para resolver una necesidad inmediata y conservar evidencia del acuerdo:
          .caja-1.color-1(data-aos="fade-right")
            h5 Ejemplo aplicado
            p.mb-0 Un equipo detecta una inconsistencia en un informe pocas horas antes de su entrega. Sus integrantes realizan una reunión virtual breve para aclarar el dato y acordar la corrección. Después, la persona responsable envía por correo electrónico el archivo definitivo y registra el acuerdo alcanzado.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img23.png', alt='').m-auto
      p.mb-0 La interacción sincrónica facilita la aclaración inmediata; la asincrónica permite conservar la versión final y el registro del acuerdo.
      Separador
      #t_1_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 1.4 Herramientas de comunicación digital: correo, chat, foros, voz IP, videoconferencia y SMS
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t1/img24.png')})` }")
        .bloque-texto-g__texto.p-4
          p Las herramientas de comunicación digital permiten intercambiar mensajes, archivos y otros recursos mediante diferentes formas de interacción. Cada una dispone de funciones particulares relacionadas con el tipo de información, el registro y la participación. Su elección depende de la necesidad comunicativa y de las condiciones en que ocurre el intercambio.
      .row.align-items-center.mb-5
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img25.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Estas herramientas facilitan mensajes escritos, intercambio de archivos y participación individual o grupal:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Correo electrónico")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img26.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Correo electrónico
              p El correo electrónico es principalmente asincrónico y permite enviar mensajes, archivos, documentos y enlaces a una o varias personas. Se utiliza ampliamente en contextos académicos, laborales e institucionales porque facilita conservar registro.
              p.mb-0 Un mensaje puede incluir asunto, saludo, contenido, adjuntos y cierre. Antes del envío conviene comprobar destinatarios, asunto y archivos. Resulta apropiado para solicitudes, entregas, reportes y confirmaciones.
        .py-3.py-md-4(titulo="Chat o mensajería instantánea")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img27.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Chat o mensajería instantánea
              p El chat permite intercambiar mensajes breves, archivos, imágenes, audios y enlaces en conversaciones individuales o grupales. Puede funcionar de manera sincrónica cuando las respuestas son inmediatas o asincrónica cuando se producen en momentos diferentes.
              p.mb-0 Resulta útil para coordinar acciones, confirmar información y resolver dudas concretas. Si el asunto exige una explicación extensa, alta formalidad o registro estructurado, puede complementarse con otro medio.
        .py-3.py-md-4(titulo="Foros digitales")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img28.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Foros digitales
              p El foro es un espacio principalmente asincrónico donde varias personas participan mediante publicaciones, respuestas o comentarios relacionados con un tema. Permite analizar aportes anteriores, formular argumentos y complementar ideas.
              p.mb-0 Una intervención puede presentar una postura, justificarla y relacionarla con otros aportes. Cuando se incorporan contenidos de terceros, deben reconocerse las fuentes correspondientes.
      p.mb-5 Antes de continuar, conviene aplicar cuidados comunes que reduzcan errores en cualquier intercambio digital:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t1/img29.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Destinatarios y alcance").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Antes del envío, se debe comprobar si el mensaje corresponde a una persona, grupo específico o audiencia más amplia. Una selección incorrecta puede divulgar información de forma innecesaria o dirigirla a personas que no requieren recibirla.
            .row(titulo="Archivos y enlaces").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los archivos mencionados deben incorporarse correctamente y los enlaces deben corresponder al destino previsto. También conviene evitar reenviar contenidos cuyo origen, finalidad o confiabilidad no estén suficientemente claros.
            .row(titulo="Información sensible").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los datos privados, reservados o sensibles requieren medidas de protección acordes con el contexto. No deben compartirse indiscriminadamente mediante correos, chats, foros u otros canales digitales.
            .row(titulo="Acuerdos importantes").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Cuando una conversación produce decisiones, entregas o compromisos relevantes, puede resultar necesario conservar un registro mediante correo, documento, acta u otro medio definido para esa finalidad.
      p.mb-5 Estas herramientas incorporan comunicación por voz, video o mensajería móvil y requieren cuidados técnicos específicos:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Voz IP")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img30.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Voz IP
              p La voz sobre protocolo de internet (VoIP) permite transmitir comunicación vocal mediante redes IP. Se utiliza en aplicaciones de comunicación, plataformas de mensajería, sistemas empresariales y servicios de atención.
              p.mb-0 Su calidad depende de la conexión, el dispositivo y los recursos de audio. Antes de una llamada, conviene comprobar su funcionamiento y proteger información sensible. Los acuerdos importantes pueden complementarse con un registro escrito.
        .py-3.py-md-4(titulo="Videoconferencia")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img31.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Videoconferencia
              p La videoconferencia permite realizar reuniones mediante audio, video, chat y funciones como pantalla compartida. Se emplea en clases, reuniones, asesorías, entrevistas y actividades colaborativas.
              p.mb-0 Requiere preparar enlace, horario, dispositivo y conexión. Durante la sesión conviene mantener el micrófono desactivado cuando no se interviene, participar ordenadamente y comprobar la información antes de compartir pantalla. También debe protegerse la privacidad de las personas participantes.
        .py-3.py-md-4(titulo="SMS o mensajes de texto")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t1/img32.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 SMS o mensajes de texto
              p El servicio de mensajes cortos (SMS) permite transmitir texto mediante una red móvil sin requerir conexión de datos a internet. Puede utilizarse para alertas, confirmaciones, notificaciones o códigos de verificación.
              p.mb-0 Su contenido es limitado y también puede emplearse en intentos de fraude. Los códigos de verificación no deben compartirse. Ante mensajes inesperados que soliciten datos, pagos o enlaces, conviene comprobar su procedencia mediante un canal oficial.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p El siguiente caso permite combinar herramientas según la función inmediata y la necesidad de conservar registro:
          .caja-1.color-1(data-aos="fade-right")
            h5 Ejemplo aplicado
            p.mb-0 Un equipo debe corregir un informe antes de su entrega. El chat permite confirmar rápidamente la disponibilidad de sus integrantes; una llamada mediante voz IP o una videoconferencia facilita resolver el asunto que requiere interacción inmediata; finalmente, el correo electrónico permite enviar el archivo definitivo y dejar constancia de la entrega.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t1/img33.png', alt='').m-auto
      .row.align-items-center.mb-0
        .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
          figure
            img(src='@/assets/curso/temas/t1/img25.svg', alt='' style="width: 85px").m-auto
        .col-xl
          p.mb-0 Las herramientas se complementan según la función requerida y no dependen únicamente de una clasificación rígida como sincrónicas o asincrónicas.

</template>

<script>
export default {
  name: 'Tema1',
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
