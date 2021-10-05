<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 2
      h1 Mercado
    
    figure.mb-4
      img(src='@/assets/curso/tema2/img01.png')
    
    p.mb-4 Se entiende el mercado como un grupo de compradores y vendedores de un bien en particular o servicio. Al respecto, economipedia indica que “el mercado es un proceso que opera cuando hay personas que actúan como compradores y otras como vendedores de bienes y servicios, generando la acción del intercambio”.

    Separador
    #t_2_1.titulo-segundo(data-aos="fade-right")
      .h3 2.1 Tipos de mercados
    p.mb-4 Dependiendo del enfoque en el cual se ubiquen los mercados de acuerdo con Fernández (2009), tienen los siguientes tipos:

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        ImagenInfografica.color-acento-contenido.mb-5
          template(v-slot:imagen)
            figure
              img(src='@/assets/curso/tema2/img02.svg')
          .tarjeta.color-primario.p-3(x="91%" y="44%")
            .h5.mb-2 Desde el punto de vista geográfico
            ul.lista-ul--color
              li 
                i.fas.fa-angle-double-right
                | Mercados locales y/o mercados regionales.
              li 
                i.fas.fa-angle-double-right
                | Mercados nacionales.
              li 
                i.fas.fa-angle-double-right
                | Mercados multinacionales y extranjeros.
              li 
                i.fas.fa-angle-double-right
                | Mercados globales.
          .tarjeta.color-primario.p-3(x="26%" y="62%")
            .h5.mb-2 Según el tipo de consumo
            ul.lista-ul--color
              li 
                i.fas.fa-angle-double-right
                | Mercado de consumo.
              li 
                i.fas.fa-angle-double-right
                | Mercado de servicios.
              li 
                i.fas.fa-angle-double-right
                | Mercadotecnia industrial.
          .tarjeta.color-primario.p-3(x="84%" y="82%")
            .h5.mb-2 Según el tipo de productos
            ul.lista-ul--color
              li 
                i.fas.fa-angle-double-right
                | Mercado de materias primas.
              li 
                i.fas.fa-angle-double-right
                | Mercado de productos industriales.
              li 
                i.fas.fa-angle-double-right
                | Mercado de productos informáticos.
              li 
                i.fas.fa-angle-double-right
                | Mercado de productos manufacturados.
              li 
                i.fas.fa-angle-double-right
                | Mercado de servicios.

          .tarjeta.color-primario.p-3(x="45%" y="27%")
            .h5.mb-2 De acuerdo con el tipo de demanda
            ul.lista-ul--color
              li 
                i.fas.fa-angle-double-right
                | Mercado disponible.
              li 
                i.fas.fa-angle-double-right
                | Mercado real.
              li 
                i.fas.fa-angle-double-right
                | Mercado potencial.
              li 
                i.fas.fa-angle-double-right
                | Mercado meta.

    Separador
    #t_2_2.titulo-segundo(data-aos="fade-right")
      .h3 2.2 Clases de mercado
    
    .row.justify-content-center.mb-4
      .col-lg-7.mb-4
        p.mb-4 Con base en la demanda, los mercados están construidos por personas, hogares, empresas o instituciones que demandan productos, así, las acciones de #[i marketing] de una empresa deben estar sistemáticamente dirigidas a cubrir los requerimientos particulares de estos mercados para proporcionarles una mejor satisfacción de sus necesidades específicas. Según el monto de la mercancía hay:
        ul.lista-ul--color
          li 
            i.fas.fa-angle-double-right
            p
              strong Mercado total. 
              | Conformado por el universo con necesidades que pueden ser satisfechas por la oferta de una empresa.
          li 
            i.fas.fa-angle-double-right
            p
              strong Mercado potencial. 
              | Conformado por todos los entes del mercado total que además de desear un servicio, un bien está en condiciones de adquirirlas.
          li 
            i.fas.fa-angle-double-right
            p
              strong  Mercado meta. 
              | Está configurado por los segmentos del mercado potencial que han sido seleccionados en forma específica, como destinatarios de la gestión de #[i marketing], es el mercado que la empresa desea y decide captar.
          li 
            i.fas.fa-angle-double-right
            p 
              strong Mercado real. 
              | Representa el mercado al cual se ha logrado llegar a los consumidores de los segmentos del mercado meta que se han captado.
      .col-lg-5
        img(src='@/assets/curso/tema2/img03.png')

    Separador
    #t_2_3.titulo-segundo(data-aos="fade-right")
      .h3 2.3	Otros tipos de mercados 
    
    .row.justify-content-center.mb-4
      .col-lg-10
        img(src='@/assets/curso/tema2/img04.svg')

    Separador
    #t_2_4.titulo-segundo(data-aos="fade-right")
      .h3 2.4	Características del mercado
    
    p.mb-4 Debido a los rasgos que caracterizan el mercado, que es en donde se genera la aplicación de las estrategias de mercadeo y las condiciones de operación de los distintos oferentes de un bien o servicio en un mercado específico, se puede hablar de dos tipos de competencia:
    
    .row.justify-content-center.mb-4
      .col-lg-5.mb-4.mb-lg-0.p-4(data-aos="fade-right")
        img(src='@/assets/curso/tema2/img05.svg')
      .col-lg-5.d-flex(data-aos="fade-left")
        img(src='@/assets/curso/tema2/img06.svg')

    Separador
    #t_2_5.titulo-segundo(data-aos="fade-right")
      .h3 2.5	Estrategias del mercado
    
    p.mb-4 La demanda de un mercado la constituyen diversos tipos de compradores con diferentes necesidades, como empresa se quiere llegarles a todos, pero no siempre se puede atender a todos o la mayoría como se quisiera, y unos clientes son atendidos mejor que otros. 
    p.mb-4 Por tanto, cada empresa debe mirar a qué clientes puede atender mejor y que sean más rentables, para ello, se debe dividir el mercado y escoger a quien le se le puede llegar con el portafolio de productos que ofrece la compañía; este proceso según Kotler y Armstrong (2013), implica la segmentación de mercado, la selección de mercado meta, la diferenciación y el posicionamiento. 

    .row.justify-content-center.mb-4
      .col-lg-10
        .bloque-texto-a.color-secundario.p-4.mb-4
          .row.m-0.align-items-center.justify-content-between
            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-right")
              img(src='@/assets/curso/tema2/img07.png')
            .col-lg-8(data-aos="fade-left")
              .bloque-texto-a__texto.p-4
                p Luego de segmentado este mercado, se debe evaluar cómo poder llegarle a cada uno de esos segmentos definidos por la empresa, es ahí donde entran las estrategias. El pensamiento de Michael E. Porter citado por Fano (2015), describió la estrategia competitiva, como las acciones ofensivas o defensivas de una empresa para crear una posición defendible dentro de una industria, acciones que eran la respuesta a las cinco fuerzas competitivas que el autor indicó como determinantes de la naturaleza y el grado de competencia que rodeaba a una empresa y que, como resultado, buscaba obtener un importante rendimiento sobre la inversión. También es según el autor “la creación de una posición única y valiosa en el mercado”.
        p.mb-4 Existen diversos tipos de estrategias:
        img(src='@/assets/curso/tema2/img08.png')(data-aos="flip-up")
    
    Separador
    #t_2_6.titulo-segundo(data-aos="fade-right")
      .h3 2.6	Participación del mercado   
    
    .row.justify-content-center.mb-4
      .col-lg-10(data-aos="fade-right")
        .cajon.color-acento-contenido.p-4
          p.mb-4 Desde el punto de vista de la empresa, el mercado es un ámbito donde hay que conquistar un espacio para "colocar" los productos o servicios. Por ejemplo, para bebidas colas qué espacio del mercado de bebidas pertenece a la empresa tanto en dinero como en unidades, y esto se expresa normalmente en términos relativos. El concepto de participación de mercados es una comparación de las ventas de una compañía con las ventas totales de la industria; y puede ser actual o potencial.
          .row.justify-content-center.mb-4
            .col-lg-5
              .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-left")
                h5 Figura 10
                span Participación de mercado  
              img(src='@/assets/curso/tema2/img09.svg')

    Separador
    #t_2_7.titulo-segundo(data-aos="fade-right")
      .h3 2.7	Pasos para definir el mercado meta    
    
    p.mb-4 La empresa debe saber quiénes son los consumidores a los que va dirigida su oferta y cada decisión hacia ellos, a ese grupo de clientes se le llama “mercado objetivo” o “mercado meta”.
    p.mb-4 Con ese mercado meta se puede tomar la decisión de qué publicidad se va a usar, qué precio y qué programa de fidelización montar. Para ello, se deben llevar a cabo los siguientes pasos:

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Segmentación")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Segmentación
            p Es el proceso de dividir un mercado en grupos de clientes potenciales con necesidades y/o características similares y que pueden requerir un producto diferente y/o una forma de comunicación diferente. De acuerdo con Kerin et al (2014, p. 228), la segmentación de mercados consiste en dividir a los compradores potenciales en grupos que: tienen necesidades comunes y responden de manera similar a una acción de #[i marketing]. ¿Qué se puede segmentar?: usos, deseos, poder de compra, residencia, actitudes, hábitos de compra.
          .col-md-4
            img(src='@/assets/curso/tema2/img10.png')
      .py-3.py-md-4(titulo="Mercado meta")
        .row.justify-content-center
          .col-md-7.mb-4.mb-md-0
            h4 Mercado meta
            p.mb-4 Se refiere al grupo de personas ideales para adquirir tu servicio o producto, al que debemos dirigir nuestra atención y esfuerzos de #[i marketing].
            p.mb-4 ¿Cómo definir el mercado meta? Seguir estos pasos para poder definir el mercado objetivo:
            p.mb-4 #[strong Analizar los clientes existentes]. Recolectar toda la información sobre los clientes actuales y potenciales y tratar de identificar características que tengan en común como edad, sexo, ubicación, intereses, etc.
            p.mb-4 #[strong Conoce los beneficios de tu producto]. Cuáles son los elementos de tu producto, y sus beneficios con respecto a otros, así como cuáles son tus áreas de oportunidad.
            p.mb-4 #[strong Investiga a tus competidores]. Revisar lo que hacen tus competidores más importantes. 
            p.mb-4 #[strong Segmenta a los consumidores]. Con la información muy valiosa acerca de los consumidores, es hora de comenzar a separarlos en diferentes grupos (a esto se le llama segmentar al mercado). Estos distintos grupos serán la base del mercado meta.
            p.mb-4 #[strong Escribir el mercado meta]. Tener el mercado meta definido y en papel no solamente es para que tener claridad sobre esto, sino también servirá para el entorno con proveedores externos, ellos entiendan tanto como a quién va dirigido el producto (piensa en diseñadores, fotógrafos, publicistas, entre otros). Ejemplo: “El mercado meta son hombres y mujeres de 18 a 30 años, con un poder adquisitivo alto, que estén interesados en festivales de música electrónica y viajes”.
            p Redefinir el producto. Tomar decisiones para introducir cambios ajustados a lo que solicita ese segmento de mercado.  
          .col-md-5
            img(src='@/assets/curso/tema2/img11.png')
      .py-3.py-md-4(titulo="Posicionamiento")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Posicionamiento
            p.mb-4 Colocar la oferta de mercado en la mente del mercado meta. Para Kotler (2013), “una posición de producto es la forma en que un producto está definido por los consumidores en atributos importantes, el lugar que ocupa en la mente de los consumidores respecto a los productos competidores”. Esto es importante porque la empresa procura recordación en los consumidores a la hora de cumplir con sus necesidades. 
            p El mapa de posicionamiento es una herramienta que permite medir la posición que ocupa nuestra marca o empresa en la mente del consumidor. Se tiene en cuenta los atributos que utiliza la competencia para posicionarse y con ellos se elabora el mapa. Este consiste en por lo menos dos coordenadas que corresponden a los atributos, por ejemplo, precio y calidad, tamaño y velocidad, color y textura, entre otros. Una vez que se determina el mapa, se ubicarán en el mismo a los competidores y a nuestra empresa o los productos, para saber el posicionamiento que podemos generar en nuestro segmento meta.
          .col-md-4
            img(src='@/assets/curso/tema2/img12.svg')
      .py-3.py-md-4(titulo="Comunicación")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Comunicación
            p Luego de definir el posicionamiento de la marca, la empresa debe desarrollar su estrategia de comunicación en los segmentos de mercado definidos.
          .col-md-4
            img(src='@/assets/curso/tema2/img13.png')
      .py-3.py-md-4(titulo="Ventas")
        .row.justify-content-center
          .col-md-6.mb-4.mb-md-0
            h4 Ventas
            p El siguiente paso es llegarle a esos segmentos o nichos de mercado a través de la estrategia de ventas para cada uno de los segmentos. La segmentación del mercado es una estrategia de #[i marketing] que permite obtener mejores resultados de ventas, en tanto que se basa en la división de nuestro mercado, entendido este como potenciales clientes, en distintos segmentos o nichos con necesidades, características y comportamientos comunes, para adaptar la oferta a sus requerimientos específicos.
          .col-md-4
            img(src='@/assets/curso/tema2/img14.png')
         









</template>

<script>
export default {
  name: 'Tema2',
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
