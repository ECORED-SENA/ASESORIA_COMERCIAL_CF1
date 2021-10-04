<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 3
      h1 Segmentación del mercado
    
    .row.justify-content-center.mb-4
      .col-lg-9.mb-4
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema3/img01.png')})`}"
          )
          .bloque-texto-g__texto.p-5(data-aos="fade-left")
            p.mb-0 Este punto se refiere a la segmentación de mercados de consumo, la manera de hacerlo es variada, dependiendo mucho del criterio de la empresa. La empresa combina una serie de variables buscando la mejor manera de tener una estructura del mercado a atender.
    
    Separador
    #t_3_1.titulo-segundo(data-aos="fade-right")
      .h3 3.1 Bases para segmentar mercados de consumo masivo
    
    figure.mb-4
      img(src='@/assets/curso/tema3/img02.png')
    p.mb-4 Con el proceso de segmentación se procura que la empresa tenga que definir qué mercado está en capacidad de atender utilizando todos sus recursos. Para hacer este proceso se deben identificar cuáles son esas variables que tiene que manipular para definir ese mercado, eso no quiere decir que no pueda usar los demás; esto depende de su apalancamiento en recursos, tanto humanos, financieros o de producción. Entre las principales variables a atender están las geográficas, demográficas, psicográficas y conductuales.
    p.mb-4 En el siguiente recurso se precisan aspectos relacionados con cada una de ellas:

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        img(src='@/assets/curso/tema3/img03.svg') 

    Separador
    #t_3_2.titulo-segundo(data-aos="fade-right")
      .h3 3.2 Requisitos para segmentar
    p.mb-4 Para segmentar de manera eficaz en un producto o servicio hay que tener en cuenta las siguientes características, para que el proceso sea significativo:
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        img(src='@/assets/curso/tema3/img04.svg')
    
    Separador
    #t_3_3.titulo-segundo(data-aos="fade-right")
      .h3 3.3 Estrategias de cobertura de un mercado meta
    
    p.mb-4 Luego de identificar los diferentes segmentos, se debe decidir cuál será el mercado meta o los segmentos elegidos. 
    .row.justify-content-center.mb-4
      .col-lg-8.mb-4(data-aos="fade-right")
        .bloque-texto-d.color-primario
          .bloque-texto-d__texto.mb-2
            .row
              .col-2.p-2
                i.fas.fa-quote-left
              .col-8
                .h5.mb-0 Un mercado meta consiste en un conjunto de compradores que comparten necesidades o características comunes que la empresa decide atender
                i.fas.fa-quote-right
          .bloque-texto-d__autor
            p (Kotler y Armstrong, 2013).
    p.mb-4 A continuación, se muestran las diferentes maneras de atender el mercado objetivo:

    figure.mb-4(data-aos="flip-up") 
      img(src='@/assets/curso/tema3/img05.png')

    .row.justify-content-center.mb-4
      .col-lg-11.mb-4
        img(src='@/assets/curso/tema3/img06.svg')

    Separador
    #t_3_4.titulo-segundo(data-aos="fade-right")
      .h3 3.4 Pasos para segmentar un mercado

    p.mb-4 Aquí es necesario seguir unos pasos que se indican en el siguiente recurso:

    PasosA.color-acento-contenido.mb-5(tipo="n")
      .row(data-aos="fade-left")
        .col-md-7.mb-4.mb-md-0
          h4 Investigar el mercado
          p Para ver qué oferta podremos dar al público seleccionado, se desarrollan entrevistas informales con grupos de consumidores para entender motivaciones, actitudes y comportamientos, a través de un cuestionario. Incluyendo:
          ul.lista-ul--color
            li 
              i.fas.fa-star-half-alt
              | Atributos y su nivel de importancia.
            li 
              i.fas.fa-star-half-alt
              | Formas de uso del producto.
            li 
              i.fas.fa-star-half-alt
              | Actitudes hacia la categoría.
            li 
              i.fas.fa-star-half-alt
              | Factores demográficos y psicográficos de los encuestados.
        .col-md-4
          img(src='@/assets/curso/tema3/img07.svg')
      .row(data-aos="fade-right")
        .col-md-4
          img(src='@/assets/curso/tema3/img08.svg')
        .col-md-7.mb-4.mb-md-0
          h4 Etapa de análisis
          p.mb-4 Identificar los grupos homogéneos pero diferentes a los demás. Donde se:
          ul.lista-ul--color
            li 
              i.fas.fa-star-half-alt
              | Realiza la macrosegmentación. 
            li 
              i.fas.fa-star-half-alt
              | Realiza la microsegmentación.
      .row(data-aos="fade-left")
        .col-md-7.mb-4.mb-md-0
          h4 Definición de los perfiles
          p Se define cada grupo de acuerdo con sus actitudes, comportamientos, factores demográficos y psicográficos. Aplica los criterios de segmentación y tiene en cuenta sus características.
        .col-md-4
          img(src='@/assets/curso/tema3/img09.svg')
        
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

<style lang="sass" scoped></style>
