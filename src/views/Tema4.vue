<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span 4
        h1 Colaboración en línea y trabajo digital compartido
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p La colaboración digital permite que varias personas articulen aportes, responsabilidades y recursos para alcanzar un propósito común, aunque se encuentren en lugares diferentes o no coincidan siempre en el mismo horario. Su efectividad depende de la coordinación, la organización y el compromiso de quienes participan mediante entornos tecnológicos compartidos.
      #t_4_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.1 Concepto y características de la colaboración en línea
      .caja-2(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl-auto
            figure
              img(src='@/assets/curso/temas/t4/img2.png', alt='' style="width: 500px").m-auto
          .col-xl.caja-2_p
            p.mb-0 La colaboración en línea es el proceso mediante el cual dos o más personas trabajan mediante recursos digitales para alcanzar un propósito común. A diferencia de un simple intercambio de mensajes o archivos, requiere coordinación, aportes compartidos, organización de actividades y seguimiento del trabajo realizado.
      p.mb-5 Sus características principales se relacionan con la manera en que las personas participan y construyen un resultado conjunto:
      .bg-carrusel
        .px-5
          SlyderF(columnas="col-lg-6 col-xl-4")(data-aos="zoom-in").mb-5
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img3.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Interacción
              p.mb-0.text-center Permite intercambiar ideas, comentarios y respuestas necesarios para coordinar el desarrollo de una actividad.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img4.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Participación compartida
              p.mb-0.text-center Cada integrante aporta tareas, conocimientos o recursos que contribuyen al propósito común.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img5.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Acceso remoto y flexibilidad
              p.mb-0.text-center Permite colaborar desde distintos lugares y participar en tiempo real o en momentos diferentes.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img6.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Organización de tareas
              p.mb-0.text-center Facilita distribuir actividades, establecer compromisos y reconocer qué aportes corresponden a cada participante.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img7.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Registro de avances
              p.mb-0.text-center Los cambios, comentarios o versiones pueden facilitar el seguimiento del trabajo cuando la herramienta utilizada dispone de estas funciones.
            .tarjeta.color-acento-botones.p-4
              .row.justify-content-center.mb-3
                .col-8
                  img(src='@/assets/curso/temas/t4/img8.svg' style="max-width: 90px").m-auto
              h4.mb-3.estilo-text Construcción conjunta
              p.mb-0.text-center Los aportes individuales se integran para producir documentos, recursos, propuestas o soluciones compartidas.
      p.mb-5 Una colaboración adecuada requiere algunas condiciones básicas que orienten el trabajo sin convertir los acuerdos en procedimientos innecesariamente complejos:
      .row.align-items-center.mb-0
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img9.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Propósito y acuerdos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El equipo debe conocer qué resultado busca y establecer criterios básicos sobre tiempos, formas de participación y organización. Los acuerdos pueden ajustarse cuando cambian las condiciones de la actividad.
            .row(titulo="Participación y comunicación").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Cada integrante debe aportar al trabajo y comunicar oportunamente avances o dificultades. Una colaboración efectiva requiere intercambio suficiente para coordinar las actividades y evitar tareas duplicadas o incompletas.
            .row(titulo="Disponibilidad y organización").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los participantes pueden tener horarios, conectividad o condiciones de acceso diferentes. Conviene acordar mecanismos que permitan continuar el trabajo sin exigir coincidencia permanente entre todas las personas.
            .row(titulo="Seguimiento").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 El equipo debe revisar periódicamente el avance de la actividad, identificar pendientes y registrar los acuerdos importantes para mantener claridad sobre el estado del trabajo.
      Separador
      #t_4_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.2 Roles en el trabajo colaborativo digital
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img10.png')})` }")
        .bloque-texto-g__texto.p-4
          p Los roles permiten distribuir funciones y organizar los aportes dentro de una actividad compartida. No representan cargos obligatorios ni permanentes: pueden combinarse, rotarse o adaptarse según el objetivo, el número de participantes y el producto que se construirá. Cada integrante mantiene responsabilidades propias y compromisos con el resultado común.
      p.mb-5 Estos son los roles propuestos para organizar diferentes funciones del trabajo colaborativo:
      .row.align-items-center.mb-3
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img11.png", alt="" style="width: 350px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Coordinador").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Organiza tareas, fechas, acuerdos y seguimiento para mantener articulado el trabajo del equipo.
            .row(titulo="Comunicador").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Mantiene informados a los participantes y facilita la circulación de dudas, respuestas y acuerdos.
            .row(titulo="Investigador").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Busca, selecciona y valida la información o los recursos necesarios para desarrollar la actividad.
            .row(titulo="Redactor").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Construye textos, explicaciones, informes u otros contenidos escritos requeridos para el producto compartido.
      .row.align-items-center.mb-5
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-right")
            .row(titulo="Editor").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Revisa coherencia, estilo, ortografía y presentación del contenido elaborado por el equipo.
            .row(titulo="Diseñador").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Organiza elementos visuales, gráficos, presentaciones u otras piezas requeridas para comunicar la información.
            .row(titulo="Revisor").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Comprueba calidad, consistencia y cumplimiento de los criterios definidos para el producto final.
            .row(titulo="Responsable de archivos").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Mantiene organizados carpetas, versiones, enlaces y accesos asociados con los recursos del equipo.
        .col-xl-auto(data-aos="fade-left")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img12.png", alt="" style="width: 350px").m-auto
      p El rol de editor se refiere a una función dentro del equipo y no equivale necesariamente al permiso técnico de edición otorgado por una plataforma.
      p.mb-5 Las funciones asumidas por cada participante deben complementarse con responsabilidades y acuerdos que mantengan coherencia en el trabajo:
      .row.justify-content-center.mb-5
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t4/img13.png', alt="" ).m-auto
              h4.text-center Responsabilidades individuales
              .caja-4_p
                p.mb-0 Cada integrante debe cumplir la tarea acordada, respetar los plazos, informar dificultades y revisar la calidad de su aporte. También debe evitar eliminar información sin autorización, reconocer las fuentes externas utilizadas y emplear los mecanismos acordados para proponer modificaciones.
        .col-xl-4.col-md-9.mb-4.mb-lg-0(data-aos="zoom-in")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t4/img14.png', alt="" ).m-auto
              h4.text-center Responsabilidades grupales
              .caja-4_p
                p.mb-0 El equipo debe asegurar que el producto final tenga continuidad, claridad y relación con el propósito. Esto implica integrar los aportes, eliminar repeticiones, comprobar fuentes y enlaces, revisar la presentación, validar la información y conservar una versión final identificable.
        .col-xl-4.col-md-9(data-aos="fade-left")
          .caja-4.h-100
            .row.justify-content-center.mb-3
              .col-12
                figure.mb-4
                  img(src='@/assets/curso/temas/t4/img15.png', alt="" ).m-auto
              h4.text-center Acuerdos básicos de trabajo
              .caja-4_p
                p.mb-0 El grupo puede definir el canal principal de comunicación, espacio de almacenamiento, fechas, nombres de archivos, forma de realizar comentarios, tiempos de respuesta, criterios de revisión y mecanismo para resolver desacuerdos. Los acuerdos pueden ajustarse cuando la actividad lo requiera.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img16.png', alt='').m-auto
        .col-xl
          .row.align-items-center.mb-3
            .col-xl-auto.d-none.d-xl-block(data-aos="zoom-in")
              figure
                img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 80px").m-auto
            .col-xl
              p.mb-0 El siguiente caso permite aplicar los roles y responsabilidades en la construcción de un producto común:
          .caja-1(data-aos="fade-left")
            h5 Ejemplo aplicado
            p Un equipo de cuatro personas debe elaborar un informe. Una coordina fechas y tareas; otra investiga y redacta; una tercera revisa el texto y organiza los archivos; la cuarta prepara los elementos gráficos.
            p.mb-0 Antes de entregar, todas participan en la revisión final y validan conjuntamente el producto.
      Separador
      #t_4_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.3 Plataformas colaborativas y herramientas de trabajo en línea
      .bloque-texto-g.bloque-texto-g--inverso.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img17.png')})` }")
        .bloque-texto-g__texto.p-4
          p Las plataformas colaborativas reúnen funciones que permiten coordinar actividades, trabajar con recursos compartidos y mantener seguimiento de un proceso común. Algunas herramientas concentran varias capacidades y otras se especializan en determinadas necesidades; por ello, su selección debe responder al propósito del trabajo y a las condiciones de quienes participan.
      p.mb-5 Las principales necesidades pueden relacionarse con diferentes tipos de herramientas sin asumir que cada una cumple una única función:
      .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
        h5 Tabla 10.
        span Herramientas colaborativas según la necesidad
      .tabla-a(data-aos="zoom-in").mb-5
        table
          thead
            tr
              th.ajuste-border-tabla.texto-left Necesidad de trabajo
              th.ajuste-border-tabla.texto-left Tipo de herramienta
              th.texto-left Función principal
          tbody
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Crear o revisar contenido
              td.ajuste-border-tabla.texto-left Documentos, hojas de cálculo o presentaciones compartidas.
              td.texto-left Editar, comentar y consolidar aportes.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Organizar archivos
              td.ajuste-border-tabla.texto-left Almacenamiento compartido o repositorios.
              td.texto-left Centralizar y recuperar recursos.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Distribuir actividades
              td.ajuste-border-tabla.texto-left Tableros de tareas.
              td.texto-left Asignar responsables, fechas y estados.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Coordinar tiempos
              td.ajuste-border-tabla.texto-left Calendarios compartidos.
              td.texto-left Programar reuniones y entregas.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Interactuar en tiempo real
              td.ajuste-border-tabla.texto-left Videoconferencia o chat de equipo.
              td.texto-left Coordinar o resolver asuntos inmediatos.
            tr
              td.ajuste-border-tabla.texto-left.text-weight-bold Debatir con mayor tiempo
              td.ajuste-border-tabla.texto-left Foros o espacios de comentarios.
              td.texto-left Desarrollar aportes asincrónicos.
            tr.ajuste-color-tabla
              td.ajuste-border-tabla.texto-left.text-weight-bold Hacer seguimiento
              td.ajuste-border-tabla.texto-left Tableros, registros o funciones de historial.
              td.texto-left Consultar avances y cambios.
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-3_p
            p.mb-0 Una misma herramienta puede atender varias de estas necesidades. La selección debe considerar propósito, participantes, condiciones de acceso, seguridad, compatibilidad y complejidad del trabajo.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img18.png', alt='' style="width: 500px").m-auto
      p.mb-5 Las plataformas pueden incorporar diferentes funciones para apoyar la coordinación del equipo:
      TabsC.color-acento-contenido.mb-5(data-aos="zoom-in")
        .py-3.py-md-4(titulo="Edición y comentarios")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img19.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Edición y comentarios
              p.mb-0 Algunas plataformas permiten que varias personas trabajen sobre un mismo recurso, incorporen comentarios o propongan cambios. Estas funciones reducen la circulación de copias separadas cuando existe una adecuada organización del archivo.
        .py-3.py-md-4(titulo="Tareas y notificaciones")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img20.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Tareas y notificaciones
              p.mb-0 La asignación de actividades, fechas, responsables y avisos facilita identificar pendientes y avances. Estas funciones resultan especialmente útiles cuando participan varias personas o existen diferentes entregas dentro del mismo proceso.
        .py-3.py-md-4(titulo="Archivos y búsqueda")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img21.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Archivos y búsqueda
              p.mb-0 Las carpetas compartidas, repositorios y funciones de búsqueda ayudan a centralizar recursos y recuperarlos sin depender de copias distribuidas entre diferentes participantes.
        .py-3.py-md-4(titulo="Historial y registro de cambios")
          .row.justify-content-center.align-items-center
            .col-xl-5.order-2.order-lg-1
              figure
                img(src='@/assets/curso/temas/t4/img22.png', alt="" ).m-auto
            .col-xl-7.order-1.order-lg-2.mb-4.mb-lg-0
              h4.txt--purpura.mb-4 Historial y registro de cambios
              p.mb-0 Cuando la plataforma dispone de historial, puede conservar información sobre modificaciones y versiones. Esta función facilita reconocer cambios y, según las posibilidades del servicio, recuperar una versión anterior.
      p.mb-5 Configurar un recurso compartido implica responder dos preguntas diferentes: qué puede hacer una persona y quién puede acceder. Las opciones concretas dependen de la plataforma y de las restricciones establecidas por la organización.
      .row.justify-content-center.mb-5
        .col-xl-10
          .titulo-sexto.color-acento-contenido.mb-2(data-aos="fade-right")
            h5 Tabla 11.
            span Acciones permitidas y alcance del acceso
          .tabla-a(data-aos="zoom-in")
            table
              thead
                tr
                  th.ajuste-border-tabla.texto-left Dimensión
                  th.ajuste-border-tabla.texto-left Ejemplos generales
                  th.texto-left Qué define
              tbody
                tr
                  td.ajuste-border-tabla.texto-left.text-weight-bold Acciones o permisos
                  td.ajuste-border-tabla.texto-left Visualizar, comentar, editar, descargar, compartir o administrar, cuando la plataforma lo permita.
                  td.texto-left Qué puede hacer una persona con el recurso.
                tr.ajuste-color-tabla
                  td.ajuste-border-tabla.texto-left.text-weight-bold Alcance del acceso
                  td.ajuste-border-tabla.texto-left Personas específicas, grupo o equipo, integrantes de una organización, acceso mediante enlace o acceso público, cuando esté disponible.
                  td.texto-left Quién puede ingresar al recurso.
      p.mb-5 Por ejemplo, una persona puede tener permiso para editar un documento y, al mismo tiempo, el recurso puede estar restringido únicamente a integrantes específicos. Las dos configuraciones cumplen funciones distintas.
      .bloque-texto-g.color-secundario.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/t4/img23.png')})` }")
        .bloque-texto-g__texto.p-4
          p La documentación oficial de Google Drive diferencia los roles de visualizador, comentador y editor del alcance general del acceso; Microsoft OneDrive también separa quién recibe acceso de las facultades de visualización o edición.
      .row.justify-content-center.align-items-center.mb-5
        .col-xl.mb-4.mb-lg-0
          p  El siguiente caso integra permisos, alcance del acceso y recuperación de una versión anterior:
          .caja-1.ajuste-2(data-aos="fade-right")
            h5 Ejemplo aplicado
            p Un equipo comparte un informe. Quienes elaboran el contenido reciben permiso de edición y la persona revisora puede comentar. El acceso queda restringido al equipo.
            p.mb-0 Tras un cambio accidental, consultan el historial disponible en la plataforma y recuperan una versión anterior del archivo.
        .col-xl-auto.col-md-9(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/t4/img24.png', alt='').m-auto
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img25.png', alt='').m-auto
        .col-xl
          .caja-1.color-1.ajuste-3(data-aos="fade-left").mb-3
            h5 Riesgos del trabajo en plataformas colaborativas
            p Aunque estas herramientas facilitan el trabajo compartido, también pueden generar riesgos si se usan sin control:
            ul.fa-ul.estilo___ul.mb-0
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Pérdida de información por eliminación accidental.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Cambios no autorizados.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Exposición de archivos por enlaces públicos.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Confusión por versiones duplicadas.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Participación limitada de algunos integrantes.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Sobrecarga de mensajes o notificaciones.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Desorganización de carpetas compartidas.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Uso de cuentas personales para información sensible.
              li.mb-0
                span.fa-li
                  i.fas.fa-arrow-alt-circle-right
                | Falta de respaldo de documentos importantes.
          p.mb-0 Estos riesgos pueden reducirse mediante organización, permisos adecuados, comunicación clara y revisión periódica de los archivos compartidos.
      Separador
      #t_4_4.titulo-segundo.color-acento-contenido(data-aos="fade-right")
        h2 4.4 Uso de contenidos y recursos digitales en plataformas colaborativas
      .caja-3(data-aos="zoom-in").mb-5
        .row.align-items-center
          .col-xl.order-2.order-lg-1.caja-3_p
            p.mb-0 Gestionar recursos dentro de una plataforma colaborativa requiere seleccionar materiales pertinentes, organizarlos de forma coherente y mantener claridad sobre su identificación, autoría y protección. El trabajo compartido también exige utilizar comentarios y versiones con criterio, de modo que varias personas puedan aportar sin perder control sobre los recursos utilizados.
          .col-xl-auto.order-1.order-lg-2
            figure
              img(src='@/assets/curso/temas/t4/img26.png', alt='' style="width: 500px").m-auto
      .row.justify-content-center.mb-5
        .col-lg-8
          .caja-5.mb-5.color-1(data-aos="flip-up")
            .row.align-items-center
              .col-xl-auto.col-md-2.mb-3.mb-lg-0.mb-md-0(data-aos="fade-right")
                figure
                  img(src='@/assets/curso/temas/t1/img3.svg', alt='' style="width: 85px").m-auto
              .col-xl.col-md-10
                p.mb-0 El flujo básico puede organizarse en las siguientes acciones:
      .row.justify-content-center.mb-5
        .col-lg-10
          PasosA.color-acento-contenido(tipo="n")
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Seleccionar el recurso
                p.mb-0 Se comprueba que el archivo o contenido responda al propósito, tenga calidad suficiente y pueda utilizarse según su origen, autoría, licencia, formato, compatibilidad y condiciones de seguridad.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img27.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img28.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Ubicarlo en el espacio definido
                p.mb-0 El recurso se almacena en la carpeta o ubicación acordada, evitando dispersarlo entre diferentes espacios o generar copias innecesarias que dificulten identificar la versión vigente.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Nombrar el archivo con claridad
                p.mb-0 El nombre debe permitir reconocer el contenido y, cuando resulte necesario, incluir versión o fecha. El equipo debe mantener una lógica común para identificar sus archivos.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img29.png', alt='' style="width: 300px").m-auto
            .row.align-items-center
              .col-auto.mb-4.mb-lg-0(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img30.png', alt='' style="width: 300px").m-auto
              .col-lg.fit___pasosA-left
                h3 Incorporar aportes y comentarios
                p.mb-0 Los cambios y sugerencias deben realizarse mediante los mecanismos acordados. Los comentarios deben indicar qué aspecto requiere revisión y aportar una razón o propuesta concreta.
            .row.align-items-center
              .col-lg.mb-4.mb-lg-0
                h3 Validar antes de compartir
                p.mb-0 Antes de utilizar o entregar el recurso, se comprueban versión, autoría, fuentes, permisos, datos que deban protegerse, funcionamiento de enlaces y correspondencia con el propósito de la actividad.
              .col-auto(data-aos="zoom-in")
                figure
                  img(src='@/assets/curso/temas/t4/img31.png', alt='' style="width: 300px").m-auto
      .row.justify-content-center.align-items-center.mb-5
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/t4/img32.png', alt='').m-auto
        .col-xl
          p Estos ejemplos aplican una nomenclatura común y una observación orientada a mejorar el producto:
          .caja-1.color-1.ajuste-2(data-aos="fade-left")
            h5 Ejemplo aplicado
            p.mb-0 #[b Nombre del archivo:]
            p ColaboracionDigital_Infografia_V1_2026-05-10.png
            p La denominación permite identificar tema, tipo de recurso, versión y fecha.
            p.mb-0 #[b Comentario constructivo:]
            p «Se sugiere precisar la fuente de esta información para mejorar la confiabilidad del contenido».
            p.mb-0  El comentario identifica qué debe revisarse y explica la finalidad del ajuste.
      p.mb-5 Además del flujo de trabajo, algunos cuidados ayudan a mantener control sobre los contenidos compartidos:
      .row.align-items-center.mb-5
        .col-xl-auto(data-aos="fade-right")
          figure.d-none.d-xl-block
            img(src="@/assets/curso/temas/t4/img33.png", alt="" style="width: 300px").m-auto
        .col-xl
          AcordionA(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")(data-aos="fade-left")
            .row(titulo="Organización y versiones").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Conviene mantener una estructura común de carpetas y evitar copias innecesarias. Cuando la plataforma disponga de historial de versiones, este puede utilizarse para reconocer cambios o recuperar información modificada accidentalmente.
            .row(titulo="Autoría y condiciones de uso").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Los recursos externos deben conservar información sobre su procedencia y utilizarse de acuerdo con sus permisos o licencias. Reconocer la fuente no sustituye una autorización cuando esta sea necesaria.
            .row(titulo="Privacidad y seguridad").ajuste-cajaAcordion.ajuste-vineta
              p.mb-3 Antes de compartir un archivo o enlace, se debe revisar quién tendrá acceso y si el recurso contiene datos personales, información interna o materiales que requieran protección adicional.
      p.mb-5 Para profundizar en la gestión práctica de archivos y recursos compartidos, se invita a consultar el siguiente documento complementario:
      .caja-7.mb-0(data-aos="flip-up")
        .row.align-items-center
          .col-xl-auto.mb-4.mb-lg-0(data-aos="fade-right")
            figure
              img(src='@/assets/curso/temas/t4/img34.svg', alt='' style="max-width: 85px").m-auto
          .col-xl.mb-4.mb-lg-0
            h4 Anexo 1. Guía práctica para organizar y gestionar recursos digitales compartidos 
            p.mb-0 Se invita a consultar el documento #[b “Guía práctica para organizar y gestionar recursos digitales compartidos”] para profundizar en la organización de carpetas, versiones, comentarios, fuentes y comprobación de recursos compartidos.
          .col-xl-2
            a.boton.color-acento-botones.texto-negro(:href="obtenerLink('/downloads/Anexos/Anexo_01_Organizar_gestionar_recursos.pdf')" target="_blank" type="application/pdf")
              span Descargar
              i.fas.fa-file-download

</template>

<script>
export default {
  name: 'Tema4',
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
