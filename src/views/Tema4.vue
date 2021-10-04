<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 4
      h1 Técnica de recolección de datos
    
    figure.mb-4
      img(src='@/assets/curso/tema4/img01.png')
    
    p.mb-4 Cuando se realiza una investigación para obtener una información del mercado, se hace necesario conocer la manera cómo se obtiene dicha información, llamada recolección de datos. Luego de definido se procede a realizar el trabajo de campo que implica la selección, capacitación y supervisión de las personas que reúnen los datos. Se debe tener en cuenta que el trabajo de campo depende de la modalidad de la recolección de los datos: observación, entrevistas telefónicas, personales, por correo o electrónicas, encuestas.

    Separador
    #t_4_1.titulo-segundo(data-aos="fade-right")
      .h3 4.1 Técnicas
    
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        .cajon.color-secundario.mb-4.p-4
          p.mb-4 Existen diferentes métodos y técnicas de recolección de datos que pueden ser de utilidad. La elección del método depende de la estrategia, el tipo de variable, la precisión deseada, el punto de recolección y las habilidades del encuestador.
          .row.justify-content-center.mb-4
            .col-lg-10.mb-4
              .bloque-texto-d.color-acento-contenido.mb-4(data-aos="fade-right")
                .bloque-texto-d__texto.mb-2
                  .row
                    .col-2.p-2
                      i.fas.fa-quote-left
                    .col-8
                      .h5.mb-0 Las técnicas de recolección de datos son mecanismos e instrumentos que se utilizan para reunir y medir información de forma organizada y con un objetivo específico (Caro, 2019).
                .bloque-texto-d__autor
                  i.fas.fa-quote-right
              .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
                h5 Figura 13
                span Técnicas de recolección de información
              .row.justify-content-center.mb-4
                .col-lg-10
                  img(src='@/assets/curso/tema4/img02.svg') 
                  figcaption Nota. Tomada de QuestionPro: https://www.questionpro.com/blog/es/recoleccion-de-datos-para-investigacion/
      .col-lg-10
        .cajon.color-acento-contenido.p-4(data-aos="fade-right")
          p.mb-4 En el siguiente documento se pueden revisar las técnicas de recolección de información a profundidad:
          .row.justify-content-center
            .col-4
            .col-6(data-aos="fade-left")
              a.anexo.mb-4(:href="obtenerLink('/downloads/Tecnica_Recoleccion_Datos.pdf')" target="_blank")
                .anexo__icono
                  img(src="@/assets/template/icono-pdf.svg")
                .anexo__texto
                  p 
                    strong Anexo. 
                    | Técnica de recolección de datos

    Separador
    #t_4_2.titulo-segundo(data-aos="fade-right")
      .h3 4.2 Instrumentos para la recolección de información 
    
    p.mb-4 En este nivel se tiene claro la clase de investigación o proyecto que se desea realizar; por tanto, es el momento de trazar un plan que lleve a obtener la información para cumplir con el proyecto y escoger el método a utilizar que resuelva el problema planteado. Se debe responder a la pregunta ¿Con qué…? Mientras que en la observación se utiliza un guion de observación, notas de campo, listas de chequeo, registros, entre otros, en la entrevista se utiliza el cuestionario o instrumento de preguntas; para la encuesta se utiliza el cuestionario o instrumento o escalas de actitud.
    p.mb-4 Se determinan los métodos y se escoge el más conveniente a utilizar. Kendall y Kendall (2011, p. 115) aportan dos métodos para la recolección de datos: el interactivo y el intrusivo.

    .row.justify-content-center
      .col-lg-4(data-aos="fade-right")
        img(src='@/assets/curso/tema4/img03.svg')
      .col-lg-4(data-aos="fade-left")
        img(src='@/assets/curso/tema4/img04.svg')

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

<style lang="sass" scoped></style>
