<template lang="pug">
  .curso-main-container.introduccion
    BannerInterno
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
      .titulo-principal.color-acento-contenido
        .titulo-principal__numero
          span
            i.fas.fa-info
        h1 Introducción
      .bloque-texto-g.bloque-texto-g--inverso.color-acento-contenido.p-3.p-sm-4.p-md-5.mb-5(data-aos="zoom-in")
        .bloque-texto-g__img(
          :style="{ backgroundImage: `url(${require_src('@/assets/curso/temas/intro/img1.png')})` }")
        .bloque-texto-g__texto.p-4
          p La interacción en entornos digitales hace parte de las actividades cotidianas que se desarrollan en espacios personales, académicos, laborales y sociales. A través de medios como el correo electrónico, los chats, los foros, las videoconferencias, las redes sociales, las plataformas colaborativas y los servicios en línea, las personas pueden comunicarse, compartir información, participar en comunidades, construir conocimiento y difundir experiencias sin depender exclusivamente de un espacio físico. Sin embargo, comunicarse en medios digitales no consiste únicamente en enviar mensajes o publicar contenidos; también implica reconocer el contexto, seleccionar el canal adecuado, usar expresiones respetuosas, cuidar la información compartida y aplicar normas básicas de convivencia digital.
      .caja-1(data-aos="zoom-in").mb-5
        p.mb-0 La comunicación digital exige claridad, responsabilidad y criterio. Cada mensaje, comentario, publicación, archivo o recurso compartido puede generar una respuesta, aportar a una conversación, apoyar un proceso colaborativo o afectar la percepción que otras personas tienen sobre quien participa. Por ello, es importante comprender las diferencias entre medios sincrónicos y asincrónicos, la función del correo electrónico, el uso de chats y foros, la participación en videoconferencias, la gestión de mensajes y la aplicación de normas de netiqueta. Estas prácticas permiten mantener interacciones más ordenadas, respetuosas y efectivas, evitando malentendidos, saturación de información o usos inadecuados de los canales digitales.
      .row.justify-content-center.align-items-center.mb-0
        .col-xl-auto.col-md-9.mb-4.mb-lg-0(data-aos="fade-right")
          figure
            img(src='@/assets/curso/temas/intro/img2.png', alt='').m-auto
        .col-xl
          p Además de comunicarse, los entornos digitales permiten participar en redes sociales, comunidades virtuales, espacios ciudadanos y plataformas de trabajo colaborativo. En estos escenarios se comparten ideas, proyectos, recursos, evidencias, opiniones y experiencias que pueden llegar a diferentes públicos. Por esta razón, la participación digital debe realizarse con respeto, seguridad y responsabilidad, reconociendo los riesgos que pueden presentarse en la red, como la desinformación, el ciberacoso, el grooming, la suplantación, la exposición de datos personales o la difusión de contenidos sin autorización. Actuar de manera consciente en estos espacios ayuda a fortalecer la identidad digital, proteger la reputación en línea y construir perfiles personales, académicos o laborales coherentes con los propósitos de cada persona.
          .caja-1.color-1(data-aos="fade-left")
            p.mb-0 La producción de contenidos digitales también cumple un papel importante en la interacción actual. Crear una imagen, una presentación, un video, una infografía, un documento, una publicación o un recurso interactivo requiere planear el mensaje, identificar el público, seleccionar la herramienta adecuada, organizar la información, revisar la calidad del contenido y respetar los derechos de autor. Un contenido digital bien elaborado no solo debe verse atractivo, sino ser claro, pertinente, seguro, verificable y adecuado al medio donde será publicado. Por ello, a lo largo de este material se abordarán aspectos relacionados con la comunicación digital, la gestión de mensajes, la participación en redes y comunidades, la colaboración en línea, el comportamiento responsable, la identidad digital y la creación, edición y publicación de contenidos digitales.

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
