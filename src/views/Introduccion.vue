<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.mb-4
      .col-lg-10
        .cajon.color-primario.p-4.mb-4(data-aos="fade-right")
          p A continuación, puede observar un video que refiere la introducción de este componente formativo que trata sobre 
            strong identificación de nichos de mercado: 
        figure.mb-5
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/M68wZYueEq8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
