<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      p La síntesis integra los conceptos principales desarrollados en el componente formativo:
      .row.justify-content-center
        .col-lg-10.mb-5.bgs.p-4.brad
          figure
            img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual del componente Interacción y producción de contenidos digitales, el cual se articula en seis temas. El primer tema aborda la comunicación digital, los medios sincrónicos y asincrónicos, las herramientas de comunicación y las características de los medios digitales. El segundo organiza la gestión del correo electrónico, la publicación de contenidos y recursos digitales, el uso de medios según el contexto comunicativo y la netiqueta con expresiones adecuadas. El tercero comprende la participación ciudadana en línea, los servicios y espacios digitales de participación, las redes sociales y comunidades digitales, y la difusión de trabajos y experiencias. El cuarto requiere comprender la colaboración en línea, los roles y responsabilidades, las plataformas y herramientas colaborativas, y la gestión de contenidos y recursos compartidos. El quinto orienta el comportamiento responsable en la red, los riesgos en redes y comunidades digitales, la identidad digital y el perfil y portafolio digital. El sexto desarrolla los tipos y características de contenidos digitales, las herramientas de creación y edición, la planeación y estructura del contenido, y la preparación, publicación, comprobación y mejora.")
        .col-auto
          a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
            .anexo__icono
              img(src="@/assets/bullets/icono-pdf.svg")
            .anexo__texto
              p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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
