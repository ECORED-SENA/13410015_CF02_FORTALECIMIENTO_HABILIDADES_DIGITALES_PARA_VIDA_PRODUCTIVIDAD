<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 5
        h1 Comportamiento en la red, identidad y perfil digital
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p Las acciones realizadas en entornos digitales pueden generar consecuencias para quien participa y para otras personas, además de influir en la seguridad, la privacidad y la identidad construida en línea. Actuar con criterio implica reconocer responsabilidades, identificar situaciones de riesgo y gestionar conscientemente la información que forma parte de la presencia digital.
      #t_5_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.1 Normas de interacción digital y comportamiento responsable en la red
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t5/img2.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p.mb-0 El comportamiento responsable en la red implica asumir las consecuencias de las propias acciones y considerar cómo pueden afectar a otras personas. Incluye respetar las reglas de los espacios digitales, proteger información, comprobar lo que se comparte y tomar decisiones conscientes antes de publicar, comentar, etiquetar, mencionar o interactuar.
      p.mb-5 Los principales criterios permiten orientar las decisiones más allá de la forma en que se redacta un mensaje:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img3.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Respeto
              p.mb-0.text-center Implica considerar los derechos y la integridad de otras personas al participar, publicar o interactuar.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img4.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Pertinencia
              p.mb-0.text-center Las acciones y aportes deben corresponder con el propósito, las reglas y las características del espacio digital.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img5.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Veracidad
              p.mb-0.text-center Antes de compartir o respaldar información, conviene comprobar su procedencia y evitar contribuir a la difusión de contenidos falsos.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img6.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Privacidad
              p.mb-0.text-center La información, imágenes o conversaciones de terceros no deben compartirse sin la autorización que corresponda.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img7.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Seguridad
              p.mb-0.text-center Las decisiones digitales deben evitar exposiciones innecesarias de cuentas, datos, archivos o información personal.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t5/img8.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Responsabilidad
              p.mb-0.text-center Cada publicación, respuesta, reacción o contenido compartido puede producir consecuencias y requiere una decisión consciente.
      p.mb-5 La responsabilidad digital también se refleja en conductas concretas antes, durante y después de participar:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img9.png", alt="" style="width: 400px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Antes de publicar o compartir").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Conviene comprobar la información, valorar quién podrá recibirla y considerar sus posibles consecuencias. El contenido puede permanecer disponible, copiarse o circular fuera del espacio inicialmente previsto.
            .row(titulo="Al participar en comunidades").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Se deben respetar las reglas del espacio, realizar aportes pertinentes y reconocer las contribuciones de otras personas. Cuando la comunidad lo requiera, conviene presentarse de acuerdo con sus normas o características.
            .row(titulo="Al utilizar información de otras personas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Antes de publicar fotografías, conversaciones, datos, etiquetas o menciones, se debe considerar la privacidad y contar con la autorización correspondiente cuando sea necesaria.
            .row(titulo="Ante solicitudes de contacto").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las solicitudes de personas desconocidas requieren comprobación antes de aceptarse. También conviene evitar entregar información privada únicamente porque exista un perfil, nombre o fotografía aparentemente confiable.
            .row(titulo="Conductas que conviene evitar").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Difundir rumores, suplantar identidades, crear perfiles para engañar, participar en burlas colectivas, intimidar, divulgar conversaciones privadas, manipular contenidos para perjudicar o presionar a otras personas puede causar afectaciones personales, académicas, laborales o legales.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 El siguiente caso permite valorar una decisión antes de compartir información relacionada con otras personas:
          .caja-1.color-1(data-aos="fade-right")
            h5 Ejemplo aplicado
            p Una persona desea publicar una fotografía grupal para destacar un logro académico y etiquetar a sus compañeros. Antes de hacerlo, confirma que puede compartirla, revisa el alcance de la publicación y reconoce la participación del equipo.
            p.mb-0 Esta decisión evita exponer información ajena sin autorización y reconoce los aportes de otras personas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img10.png', alt='').m-auto
      Separador
      #t_5_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.2 Peligros en redes y comunidades digitales: <i>ciberbullying</i>, <i>grooming</i> y ciberacoso
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img11.png')})` }")
        .bloque-texto-g__texto.p-4
          p Los entornos digitales pueden utilizarse para intimidar, hostigar, manipular o vulnerar la privacidad de otras personas. Reconocer las diferencias entre estas situaciones permite identificar señales de alerta y actuar de forma segura. El <i>ciberbullying</i>, el <i>grooming</i> y el ciberacoso presentan características y manifestaciones que requieren criterios de reconocimiento y protección acordes con cada situación.
      p.mb-5 Las principales diferencias pueden organizarse según las personas involucradas, la conducta y su finalidad:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 12.
        span Diferencias entre #[i ciberbullying], #[i grooming] y ciberacoso
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Riesgo
              th.ajuste-border-tabla.texto-left Criterio de reconocimiento
              th.texto-left Manifestaciones frecuentes
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold #[i Ciberbullying]
              td.ajuste-border-tabla.texto-left Acoso repetido entre pares mediante medios digitales, orientado a humillar, intimidar, ridiculizar o excluir.
              td.texto-left Burlas, rumores, amenazas, exclusión, imágenes humillantes o perfiles creados para ridiculizar.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold #[i Grooming]
              td.ajuste-border-tabla.texto-left Acercamiento o manipulación de una persona adulta hacia una persona menor de edad mediante entornos digitales con finalidad sexual.
              td.texto-left Ganar confianza, pedir secretos, información personal o material íntimo, ejercer presión o promover encuentros.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Ciberacoso
              td.ajuste-border-tabla.texto-left Hostigamiento, intimidación, vigilancia o persecución reiterada mediante medios digitales, en distintos tipos de relaciones.
              td.texto-left Mensajes insistentes, amenazas, seguimiento, publicación de datos, contacto no deseado o perfiles utilizados para intimidar.
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img12.png')})` }")
        .bloque-texto-g__texto.p-4
          p En este apartado se diferencia pedagógicamente el #[i ciberbullying] asociado principalmente con situaciones reiteradas entre pares del uso más amplio de ciberacoso. Sin embargo, esta distinción no constituye una clasificación jurídica: la normativa colombiana vigente utiliza también las expresiones ciberacoso y #[i ciberbullying] como denominaciones equivalentes. 
      p.mb-5 Algunas manifestaciones permiten reconocer cuándo una interacción requiere detenerse, solicitar apoyo o utilizar mecanismos de protección:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img13.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="<i>Ciberbullying</i>").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede manifestarse mediante burlas o mensajes humillantes repetidos, difusión de rumores, exclusión deliberada, amenazas, contenidos manipulados o perfiles utilizados para ridiculizar a una persona.
            .row(titulo="<i>Grooming</i>").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Requiere especial atención cuando una persona adulta busca conversaciones privadas con un menor, solicita mantener secretos, pide fotografías o datos personales, ofrece regalos, pregunta por rutinas o ubicación, presiona para obtener contenido íntimo o formula amenazas.
            .row(titulo="Ciberacoso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Puede incluir mensajes no deseados persistentes, amenazas, vigilancia de publicaciones, difusión de información privada, contacto reiterado después de solicitar que se detenga o perfiles creados para vigilar o intimidar.
            .row(titulo="Prevención").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Conviene revisar privacidad y contactos, comprobar solicitudes de personas desconocidas, evitar exponer ubicación o rutinas innecesariamente, proteger información privada y no participar en burlas, rumores o cadenas de agresión. La existencia previa de datos o contenidos privados nunca justifica amenazas, manipulación o acoso.
      p.mb-5 Ante una interacción agresiva, manipuladora o amenazante, la prioridad es reducir la exposición y solicitar apoyo adecuado:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Interrumpir la interacción riesgosa
                  p.mb-0 No es necesario continuar una conversación agresiva, amenazante o manipuladora. Cuando corresponda, se evita responder a provocaciones, solicitudes de secreto o presiones para entregar información.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img14.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Conservar evidencias de forma segura
                  p.mb-0 Cuando resulte pertinente, pueden conservarse capturas, enlaces, nombres de usuario y fechas. Las evidencias deben protegerse y no difundirse públicamente, porque hacerlo puede aumentar la exposición.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img15.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Utilizar controles de la plataforma
                  p.mb-0 Puede bloquearse o restringirse la cuenta, reportar el contenido y revisar la privacidad. Si existe sospecha de acceso no autorizado, también corresponde proteger la cuenta.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img16.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Solicitar apoyo
                  p.mb-0 Cuando intervenga una persona menor de edad, exista presión, amenaza o una situación difícil de gestionar, se debe recurrir a una persona adulta responsable o a una instancia institucional de apoyo.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img17.png', alt='' style="max-width: 500px").m-auto
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  h4 Acudir a canales oficiales cuando corresponda
                  p.mb-0 Cuando la situación pueda comprometer la integridad o los derechos de una persona, conviene utilizar canales oficiales de orientación, protección o denuncia aplicables al caso.
                .col-xl-6
                  figure
                    img(src='@/assets/curso/temas/t5/img18.png', alt='' style="max-width: 500px").m-auto
      p.mb-5 En Colombia, la Línea 141 del ICBF brinda protección, emergencia y orientación y se encuentra disponible las 24 horas.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t5/img19.png', alt='').m-auto
        .col-xl
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t2/img11.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 El siguiente caso permite reconocer señales de <i>grooming</i> y aplicar decisiones básicas de protección:
          .caja-1.color-1(data-aos="fade-left")
            h5 Ejemplo aplicado
            p Una persona menor de edad recibe mensajes de alguien que insiste en conversar en privado, mantener el contacto en secreto y enviar una fotografía íntima.
            p.mb-0 Ante estas señales, se interrumpe la conversación, se conservan las evidencias necesarias, se bloquea y reporta la cuenta y se solicita apoyo de una persona adulta responsable.
      Separador
      #t_5_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.3 Identidad digital: concepto, características y tipos
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-3_p
            p.mb-0 La identidad digital es el conjunto de información, rastros, contenidos, interacciones y referencias asociados con una persona, entidad o marca en entornos digitales. Se construye mediante acciones propias, datos generados durante el uso de servicios y contenidos publicados por terceros, por lo que es más amplia que un perfil específico.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t5/img20.png', alt='' style="width: 500px").m-auto
      p.mb-5 La identidad digital presenta características que explican cómo se forma y cambia con el tiempo:
      .bg-carrusel
        .px-5
          .row.align-items-center.mb-5
            .col-xl-4(data-aos="fade-right")
              figure.d-none.d-xl-block
                img(src='@/assets/curso/temas/t5/img21.png', alt='' style="max-width: 500px").m-auto
            .col-xl-8(data-aos="fade-left")
              SlyderF(columnas="col-lg-6 col-xl-6")
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img22.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Dinámica
                  p.mb-0.text-center Cambia mediante publicaciones, comentarios, interacciones, actualizaciones y nuevas actividades realizadas en entornos digitales.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img23.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Visible
                  p.mb-0.text-center Parte de la información puede ser consultada por otras personas según su publicación y configuración de acceso.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img24.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Acumulativa
                  p.mb-0.text-center Se construye progresivamente mediante contenidos, registros y rastros generados a lo largo del tiempo.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img25.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Interconectada
                  p.mb-0.text-center Puede relacionar diferentes cuentas, plataformas, perfiles, actividades y referencias vinculadas con una misma persona.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img26.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Proyectiva
                  p.mb-0.text-center Contribuye a comunicar una imagen personal, académica, laboral, profesional, social o institucional.
                .tarjeta.color-acento-botones.p-4
                  .row.justify-content-center.mb-3
                    .col-8
                      img(src='@/assets/curso/temas/t5/img27.svg' style="max-width: 90px").m-auto
                  h4.mb-3.estilo-text Vulnerable
                  p.mb-0.text-center Puede verse afectada por exposición indebida de datos, suplantación, contenidos descontextualizados o uso no autorizado de información.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img9.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Elementos que forman la identidad digital
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          .caja-1.ajuste-3(data-aos="fade-right")
            p La identidad digital puede estar compuesta por:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Nombre o usuario utilizado en plataformas.
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Fotografía de perfil.
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Biografía o descripción personal.
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Publicaciones realizadas.
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Comentarios y respuestas.
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Contenidos compartidos.
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Participación en grupos o comunidades.
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Portafolios digitales.
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Certificados o evidencias publicadas.
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Opiniones expresadas.
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Contactos y redes profesionales.
              li.mb-2
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Historial de interacción visible.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Recomendaciones o valoraciones recibidas.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img28.png', alt='').m-auto
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img9.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Tipos de identidad digital
      p.mb-5 La identidad puede expresarse de manera diferente según el contexto y el propósito:
      .bg-slider.mb-5
        .px-5
          .ajuste-slider(data-aos="zoom-in")
            SlyderA(tipo="b")
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t5/img29.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Identidad personal
                  p.mb-0 Se relaciona con vida cotidiana, intereses, opiniones, relaciones y actividades personales. Requiere cuidar qué información se hace pública para evitar exposición innecesaria de datos, rutinas o ubicaciones.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t5/img30.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Identidad académica
                  p.mb-0 Se construye mediante actividades de aprendizaje, trabajos, proyectos, evidencias, certificados, participación en foros y comunidades de conocimiento. Puede contribuir a representar compromiso, aprendizaje y trayectoria formativa.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t5/img31.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Identidad laboral o profesional
                  p.mb-0 Integra experiencia, habilidades, proyectos, competencias, logros y relaciones vinculadas con el trabajo. Puede manifestarse mediante redes profesionales, repositorios, publicaciones, portafolios o espacios relacionados con un campo ocupacional.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t5/img32.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Identidad social o comunitaria
                  p.mb-0 Surge de la participación en grupos, comunidades, causas, iniciativas o redes ciudadanas. Las opiniones, aportes y actividades realizadas en estos espacios también contribuyen a la identidad digital.
              .row.justify-content-center.align-items-center
                .col-xl-6.mb-4
                  figure
                    img(src='@/assets/curso/temas/t5/img33.png', alt='' style="max-width: 500px").m-auto
                .col-xl-6
                  h4 Identidad institucional o de marca
                  p.mb-0 Corresponde a organizaciones, emprendimientos, entidades o proyectos con presencia digital. Requiere mantener coherencia entre la información, la comunicación y la representación pública asociada con esa identidad.
      .titulo-tercer-nivel.mb-5(data-aos="fade-right")
        img.titulo-tercer-nivel__icon(src='@/assets/curso/temas/t2/img9.svg')
        h3.titulo-tercer-nivel__text.mb-0.px-0.py-2 Riesgos y cuidado de la identidad digital
      p.mb-5 La identidad digital puede verse afectada por publicaciones, datos, configuraciones o contenidos que permanecen asociados con una persona. Estos riesgos pueden agruparse para facilitar su identificación y cuidado:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t5/img34.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Publicaciones y participación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Las publicaciones impulsivas, comentarios ofensivos, fotografías inadecuadas o fuera de contexto y participación en conflictos pueden afectar la imagen asociada con una persona. Conviene revisar el contenido antes de publicarlo y gestionar aquellos elementos antiguos que ya no correspondan con la identidad actual.
            .row(titulo="Exposición de información").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La información personal visible, la difusión de datos privados, la ubicación en tiempo real, las etiquetas y las menciones pueden aumentar la exposición. Conviene revisar periódicamente qué información es pública, quién puede acceder a publicaciones y fotografías y qué datos resulta necesario retirar o proteger.
            .row(titulo="Suplantación y seguridad de cuentas").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los perfiles falsos, la suplantación de identidad y las contraseñas débiles pueden comprometer cuentas e información. Se requiere proteger las credenciales, revisar actividades o perfiles sospechosos y gestionar adecuadamente las cuentas que ya no se utilizan.
            .row(titulo="Coherencia y actualización").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 La falta de coherencia entre perfiles, el uso de nombres o correos poco apropiados en contextos formales y los contenidos desactualizados pueden generar una imagen contradictoria. Conviene diferenciar los espacios personales, académicos y laborales y mantener actualizada la información relevante.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl.mb-4.mb-lg-0
          p El siguiente caso evidencia cómo la identidad digital también se construye mediante acciones de otras personas:
          .caja-1.ajuste-4(data-aos="fade-right")
            h5 Ejemplo aplicado
            p Una persona publica un proyecto académico y participa en una comunidad profesional. Posteriormente, otra persona la etiqueta en una fotografía y un compañero deja una recomendación sobre su trabajo.
            p.mb-0 El proyecto, las interacciones, la etiqueta y la recomendación forman parte de la información asociada con su identidad digital, aunque no todo haya sido publicado directamente por ella.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t5/img35.png', alt='').m-auto
      Separador
      #t_5_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 5.4 Construcción de perfil digital personal, académico y laboral
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t5/img36.png')})` }")
        .bloque-texto-g__texto.p-4
          p El perfil digital es un espacio concreto donde se presenta información seleccionada sobre una persona según un propósito y una audiencia. Puede incluir datos de identificación, intereses, formación, habilidades, experiencias, proyectos y evidencias. La identidad digital es más amplia, porque también comprende rastros e interacciones generados fuera de ese perfil.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t5/img37.png', alt='').m-auto
        .col-xl
          .caja-1.ajuste-3(data-aos="fade-left")
            h5 Elementos básicos de un perfil digital
            p Un perfil digital puede incluir:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Nombre o identificación adecuada.
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Fotografía o imagen de perfil.
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Descripción breve.
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Formación o intereses.
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Habilidades o competencias.
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Experiencias relevantes.
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Proyectos o evidencias.
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Datos de contacto, cuando sea necesario.
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Enlaces a portafolios, repositorios o documentos.
              li.mb-1
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Configuración de privacidad.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Publicaciones o recursos destacados.
      p.mb-5 El propósito y la audiencia determinan qué información conviene destacar. Los perfiles personal, académico y laboral responden a necesidades diferentes:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t5/img38.png', alt="" ).m-auto
              h4.text-center Perfil digital personal
              .caja-4_p
                p.mb-0 Se utiliza para interactuar con familiares, amistades, comunidades de interés o redes sociales generales. Puede admitir una comunicación más flexible, pero requiere cuidado con la información publicada, la privacidad y el alcance de los contenidos compartidos.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t5/img39.png', alt="" ).m-auto
              h4.text-center Perfil digital académico
              .caja-4_p
                p.mb-0 Representa la participación en procesos de aprendizaje, plataformas formativas, comunidades educativas, foros, grupos de estudio o repositorios. Puede integrar proyectos, evidencias, certificados y trabajos, y debe reflejar responsabilidad, interés por aprender y capacidad para comunicar ideas.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t5/img40.png', alt="" ).m-auto
              h4.text-center Perfil digital laboral o profesional
              .caja-4_p
                p.mb-0 Permite presentar formación, habilidades, experiencia, proyectos, servicios, logros y áreas de interés relacionadas con el trabajo. Puede encontrarse en redes profesionales, portales de empleo, hojas de vida digitales, portafolios o repositorios. Requiere información clara, coherente, pertinente y actualizada.
      p.mb-5 Un perfil puede organizarse mediante decisiones sencillas que permitan adecuar la información al espacio donde será utilizado:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Definir propósito y audiencia
                p.mb-0 Se determina para qué se utilizará el perfil y quién podrá consultarlo. Esto orienta el nivel de información personal, académica o laboral que resulta pertinente.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img41.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img42.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Seleccionar la información
                p.mb-0 Se incorporan datos reales y relevantes para la finalidad definida. No es necesario incluir toda la información disponible ni exponer datos sensibles.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Seleccionar evidencias
                p.mb-0 Cuando corresponda, se incorporan trabajos, proyectos, certificados, publicaciones o enlaces que permitan respaldar aprendizajes, habilidades o experiencias relacionadas con el propósito.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img43.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img44.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Revisar privacidad y alcance
                p.mb-0 Se configura quién puede acceder al perfil, publicaciones y fotografías según las posibilidades de la plataforma. También conviene comprobar etiquetas, menciones y datos visibles.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Mantener coherencia y actualización
                p.mb-0 La información, las evidencias y las publicaciones destacadas deben guardar relación con el propósito del espacio. Conviene actualizar datos y retirar aquellos que hayan perdido pertinencia.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t5/img45.png', alt='' style="width: 300px").m-auto
      p.mb-5 Un portafolio digital puede complementar especialmente los perfiles académico y laboral al reunir proyectos, productos, trabajos, certificaciones o evidencias relevantes. Su función es presentar capacidades mediante una selección organizada, no acumular indiscriminadamente todo lo realizado.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t5/img46.png', alt='').m-auto
        .col-xl
          p  El siguiente caso permite adecuar información y evidencias según la finalidad del perfil:
          .caja-1.color-1.ajuste-4(data-aos="fade-left")
            h5 Ejemplo aplicado
            p Una persona utiliza diferentes perfiles según su contexto:
            ul.fa-ul.estilo___ul.mb-3
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | En el #[b personal], comparte intereses y experiencias con privacidad acorde con su audiencia. 
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | En el #[b académico], destaca su área de formación, proyectos, certificados y evidencias de aprendizaje. 
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | En el #[b laboral], prioriza competencias, experiencia, proyectos relevantes y un enlace a su portafolio. 
            p.mb-0 La información cambia porque cada perfil responde a un propósito y público diferentes.
      p.mb-5 Para profundizar en la selección de información, evidencias y actualización de perfiles, se propone consultar la siguiente guía práctica:
      .caja-7.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t4/img34.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 2. Guía práctica para organizar perfiles y portafolios digitales
            p.mb-0 Se invita a consultar el documento #[b «Guía práctica para organizar perfiles y portafolios digitales»] para profundizar en la adecuación de perfiles, selección de evidencias, organización del portafolio y actualización de la información.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_02_Organizar_perfiles_digitales.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema5',
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
