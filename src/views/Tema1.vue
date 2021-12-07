<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 1
      h1 Mercadeo
    
    .row.mb-4
      .col-lg-7
        p.mb-4 El mercadeo o #[i marketing] involucra el cómo hacer coincidir el producto o marca de una empresa con lo que quiere el mercado o los consumidores para, de esta manera, generar ventas y rentabilidad. Esto quiere decir que, de acuerdo con el mercado, la empresa puede modificar el diseño del producto, estructurar precios, promociones, buscar canales para hacer llegar la marca a los clientes, comunicar todos los beneficios y atributos, además de llegar a nuevos consumidores.
        .cajon.color-primario.p-4.mb-4(data-aos="fade-right")
          p De acuerdo con Kotler y Armstrong (2013, p. 35), el mercadeo es un “proceso mediante el cual las empresas crean valor para sus clientes y generan fuertes relaciones con ellos para, en reciprocidad, captar valor de los clientes”. Igualmente, Stanton et al, (2007, p. 9) manifiestan que el “concepto de #[i marketing] hace hincapié en la orientación al cliente y en la coordinación de las actividades de #[i marketing] para alcanzar los objetivos de desempeño de la organización”.
        p.mb-4 Por tanto, se puede decir que el mercadeo es una serie de procesos y actividades que busca conocer las necesidades de los consumidores para influir en sus gustos y deseos mediante técnicas y estrategias, ofreciendo bienes y servicios que le generen un valor agregado y le dejen una experiencia.
      .col-lg-4
        img(src='@/assets/curso/tema1/img01.svg')(data-aos="fade-left")
    
    Separador
    #t_1_1.titulo-segundo(data-aos="fade-right")
      .h3 1.1 Comprender el mercado y al cliente
    
    .row.justify-content-center.mb-4
      .col-lg-8
        .bloque-texto-a.color-primario.p-4.mb-2
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8
              .bloque-texto-a__texto.p-3(data-aos="fade-right")
                p Para que una empresa o un emprendimiento tenga probabilidades de éxito y beneficios debe entender las necesidades de los clientes, y para el logro de esta información se debe realizar una investigación al cliente para entregarle los productos mediante la comercialización y el desarrollo de tácticas de venta para los clientes de su mercado sobre la base de una información fiable y precisa.
            .col-lg-4.mb-4.mb-lg-0
              img(src='@/assets/curso/tema1/img02.svg')(data-aos="fade-left")
    
    .row.justify-content-center.mb-4
      .col-lg-7
        p.mb-4 Según QuestiónPro (2021), tener esa información lograda mediante la investigación de mercados permitirá, entre otros aspectos:
        ul.lista-ul--color
          li 
            i.fas.fa-star-half-alt
            | Atraer a más clientes.
          li 
            i.fas.fa-star-half-alt
            | Establecer el mejor precio para sus productos.
          li 
            i.fas.fa-star-half-alt
            p.mb-0 
              | Crear el mensaje de #[i marketing] adecuado.
          li 
            i.fas.fa-star-half-alt
            | Aumentar la cantidad que satisface la demanda de sus clientes.
          li 
            i.fas.fa-star-half-alt
            | Elevar la frecuencia de visitas de sus clientes.
          li 
            i.fas.fa-star-half-alt
            | Aumentar sus ventas.
          li 
            i.fas.fa-star-half-alt
            | Disminuir costos.
          li 
            i.fas.fa-star-half-alt
            | Afinar su enfoque del servicio al cliente.
        p Para entender el mercado es importante identificar conceptos del cliente y del mercado en el cual se realiza la acción de negocio, los que Kotler y Armstrong (2012, p. 33) fijan en los siguientes conceptos:
      .col-lg-4
        img(src='@/assets/curso/tema1/img03.png')(data-aos="fade-left")
      
    .row.justify-content-center.mb-4
      .col-lg-10
        figure.mb-3
          img(src='@/assets/curso/tema1/img99.svg')
        .tarjeta-avatar-b.mb-5(data-aos="fade-right")
          .tarjeta-avatar-b__img.p-2
            img(src='@/assets/curso/tema1/img04.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4
            .row
              .col-1
              .col-10
                p
                  strong Necesidades, deseos y demandas del cliente. 
                  | Necesidades son los estados de carencia percibida. Una persona necesita alimentarse, mientras que los deseos son la forma que adopta una necesidad humana moldeada por la cultura y la personalidad del individuo. Por ejemplo, esa persona escoge comerse una hamburguesa de McDonald’s o pollo de Frisby.
      .col-lg-10
        figure.mb-3
          img(src='@/assets/curso/tema1/img99.svg')
        .tarjeta-avatar-b.mb-5(data-aos="fade-right")
          .tarjeta-avatar-b__img.p-2
            img(src='@/assets/curso/tema1/img05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4
            .row
              .col-1
              .col-10
                p
                  strong Demandas son los deseos humanos respaldados por el poder de compra. 
                  | Esa persona para poder realizar su compra necesita tener dinero y satisfacer su deseo.
      .col-lg-10
        figure.mb-3
          img(src='@/assets/curso/tema1/img99.svg')
        .tarjeta-avatar-b.mb-5(data-aos="fade-right")
          .tarjeta-avatar-b__img.p-2
            img(src='@/assets/curso/tema1/img06.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4
            .row
              .col-1
              .col-10
                p
                  strong Ofertas de mercado. 
                  | Son los productos, servicios y experiencias. Son una combinación de productos, servicios, información o experiencias que se ofrece a un mercado para satisfacer una necesidad o un deseo.
      .col-lg-10
        figure.mb-3
          img(src='@/assets/curso/tema1/img99.svg')
        .tarjeta-avatar-b.mb-5(data-aos="fade-right")
          .tarjeta-avatar-b__img.p-2
            img(src='@/assets/curso/tema1/img07.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4
            .row
              .col-1
              .col-10
                p
                  strong Valor y satisfacción del cliente. 
                  | La empresa o emprendedor debe entregar productos o servicios que logren cumplir con las expectativas del cliente de lo que espera recibir y es capaz de pagar por eso y, así, volver a comprar.
      .col-lg-10
        figure.mb-3
          img(src='@/assets/curso/tema1/img99.svg')
        .tarjeta-avatar-b.mb-5(data-aos="fade-right")
          .tarjeta-avatar-b__img.p-2
            img(src='@/assets/curso/tema1/img08.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4
            .row
              .col-1
              .col-10
                p
                  strong Intercambios y relaciones. 
                  |  Es el acto de obtener de alguien un objeto deseado, ofreciéndole algo a cambio.
      .col-lg-10
        figure.mb-3
          img(src='@/assets/curso/tema1/img99.svg')
        .tarjeta-avatar-b.mb-5(data-aos="fade-right")
          .tarjeta-avatar-b__img.p-2
            img(src='@/assets/curso/tema1/img09.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4
            .row
              .col-1
              .col-10
                p
                  strong Mercados.  
                  | Corresponde al conjunto de todos los compradores reales y potenciales de un producto o servicio.

    Separador
    #t_1_2.titulo-segundo(data-aos="fade-right")
      .h3 1.2 Mezcla de mercadeo
    
    .row.justify-content-center.mb-4
      .col-lg-10
        p.mb-4 Para llegar a los clientes la empresa debe establecer planes, programas, herramientas y acciones y junto a ese conjunto de variables con que cuenta, combinarlas para formar estrategias y tácticas que lleven al logro de los objetivos de la empresa o del emprendimiento. 
        p.mb-4 La siguiente figura presenta el objetivo general de una empresa:
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 1
          span Objetivo general de una empresa
        img(src='@/assets/curso/tema1/img10.svg')

    p.mb-4 Luego, la compañía debe, basada en la 
      strong estrategia de mercadeo, 
      | combinar cuatro factores importantes para lograr el objetivo que se denominan 
      strong “mezcla de mercadeo” 
      | (producto, fijación de precio, canales de distribución y promoción o comunicación). Con las actividades que surjan de esas combinaciones o mezclas la empresa debe adaptarse al entorno e influir en el mercado.
    
    separador
    figure.mb-4(data-aos="flip-up") 
      img(src='@/assets/curso/tema1/img11.png')

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        p.mb-4 En este factor la empresa debe decidir lo que vende la empresa y el mercado en el que se encuentra, además, debe tener en cuenta que el producto que tenga éxito y sea innovador hoy puede convertirse en el #[i commodity] de mañana. Es por esto que se debe pensar en los productos actuales y en los potenciales.
      .col-lg-4.d-flex.mb-4(data-aos="fade-right")
        .cajon.color-acento-contenido.p-4
          p Se debe tener en cuenta que, en mercadeo, el enfoque de producto debe centrarse en lo que el consumidor necesita y le cause experiencias significativas.
      .col-lg-6.mb-4(data-aos="fade-left")
        p De acuerdo con Kotler y Armstrong (2012), el producto es
        .bloque-texto-d.color-primario
          .bloque-texto-d__texto.mb-2
            .row
              .col-2.p-2
                i.fas.fa-quote-left
              .col-8
                .h5.mb-0 … cualquier bien que se ofrezca a un mercado para su atención, adquisición, uso o consumo, y que podría satisfacer un deseo o una necesidad. Mientras que el servicio la define como la “actividad, beneficio o satisfacción que se ofrece por una venta, que básicamente es intangible y no tiene como resultado la posesión de algo (p. 224). 
          .bloque-texto-d__autor
            i.fas.fa-quote-right
      .col-lg-10.mb-4
        p.mb-4 El propósito de toda empresa es que sus productos sean reconocidos en el mercado; es decir, que el producto se convierta en #[strong una marca], que según la SIC (2021), “es una categoría de signo distintivo que identifica los productos o servicios de una empresa o empresario”.
      .col-lg-10.mb-4
        .tarjeta--container.row.mb-5
          .col-md.tarjeta.color-secundario.p-5(data-aos="fade-right")
            .row.justify-content-center.mb-4
              .col-4
                figure
                  img(src='@/assets/curso/tema1/img12.png')
              
            p.mb-4.text-white El producto y servicio generan una serie de beneficios y atributos que la marca utiliza para posicionarse en un mercado generando valor agregado. Algunos atributos del producto son: 
            ul.lista-ul--color
              li 
                i.fas.fa-star.text-white
                p.text-white Utilidad. 
              li 
                i.fas.fa-star.text-white
                p.text-white Empaque.
              li 
                i.fas.fa-star.text-white
                p.text-white Apariencia.
              li 
                i.fas.fa-star.text-white
                p.text-white Marca-identidad.
              li 
                i.fas.fa-star.text-white
                p.text-white Sabor, aroma.
              li 
                i.fas.fa-star.text-white
                p.text-white Calidad.
              li 
                i.fas.fa-star.text-white
                p.text-white Disponibilidad.
              li 
                i.fas.fa-star.text-white
                p.text-white Servicio y precio.


          .col-md.tarjeta.color-acento-contenido.p-5(data-aos="fade-left")
            .row.justify-content-center.mb-4
              .col-4
                figure
                  img(src='@/assets/curso/tema1/img13.png')
            p.mb-4.text-white Así mismo, se precisan los atributos del servicio como:
            ul.lista-ul--color
              li 
                i.fas.fa-star.text-white
                p.text-white Efectividad.
              li 
                i.fas.fa-star.text-white
                p.text-white Rapidez.
              li 
                i.fas.fa-star.text-white
                p.text-white Disponibilidad.
              li 
                i.fas.fa-star.text-white
                p.text-white Tecnología.
              li 
                i.fas.fa-star.text-white
                p.text-white Prestigio.
              li 
                i.fas.fa-star.text-white
                p.text-white Identidad.
              li 
                i.fas.fa-star.text-white
                p.text-white Precio.

        p.mb-4 Por otra parte, se debe tener en cuenta que los productos y servicios se componen de tres niveles, cada uno agrega valor para el cliente y deben considerarse a la hora de su planificación. Como se muestra en la siguiente figura:

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 2
          span Niveles de producto
        figure
          img(src='@/assets/curso/tema1/img14.svg') 
          figcaption Nota. Tomada de Santesmases, Valderrey y Sánchez. (2014)
      .col-lg-10.mb-4
        p Finalmente, es importante mencionar que los productos se clasifican en 
          strong productos de consumo 
          | y 
          strong 
          | productos industriales. Se catalogan de esa manera de acuerdo con el tipo de comprador, aunque el uso que se le dé al producto sea el mismo; por ejemplo, una bolsa de detergente es utilizada por una ama de casa para la limpieza (retirar la mugre), igual su uso en la industria se utilizaría para un proceso.
        p En ese sentido, se precisa que los productos de consumo tienen un uso final, mientras que los productos industriales son utilizados para un proceso o para distribuirlo a otros clientes.

    separador
    figure.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/tema1/img15.png') 
    p.mb-4 El precio es el valor monetario fijado a un bien o servicio.
    .row.mb-4
      .col-lg-6
        p El precio según Santesmases, Valderrey y Sánchez (2014) puede ser considerado como
        .bloque-texto-d.color-primario(data-aos="fade-right")
          .bloque-texto-d__texto.mb-2
            .row
              .col-2.p-2
                i.fas.fa-quote-left
              .col-8
                .h5.mb-0 el punto en el que se iguala el valor monetario de un producto para el comprador con el valor de realizar la transacción para el vendedor (p. 201).
          .bloque-texto-d__autor
            i.fas.fa-quote-right
      .col-lg-6
        p.mb-4 La gran mayoría de productos tiene libertad de precios y estos se definen por acción de la oferta y la demanda, otros son controlados por el Gobierno, como los servicios de energía, agua, el transporte público o algunas drogas medicinales.
        p Basado en lo anterior, se invita a revisar el siguiente recurso en el que se precisan aspectos relacionados con el precio:

    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row.justify-content-center(titulo="Fijación de precios")
          .col-md-10.mb-4.mb-md-0
            h4.mb-4 Fijación de precios
          .col-md-6.mb-4.mb-md-0
            p.mb-4 El precio es el valor monetario fijado a un bien o servicio. 
            p.mb-4 El precio según Santesmases, Valderrey y Sánchez (2014, p. 201), puede ser considerado como 
            .bloque-texto-d.color-primario(data-aos="fade-right")
              .bloque-texto-d__texto.mb-2
                .row
                  .col-2.p-2
                    i.fas.fa-quote-left
                  .col-8
                    .h5.mb-0 el punto en el que se iguala el valor monetario de un producto para el comprador con el valor de realizar la transacción para el vendedor
              .bloque-texto-d__autor
                i.fas.fa-quote-right
            p.mb-0 La gran mayoría de productos tienen libertad de precios y se definen por acción de la oferta y la demanda, otros son controlados por el gobierno, como los servicios de energía, agua, el transporte público, algunas drogas medicinales.
          .col-md-4
            img(src='@/assets/curso/tema1/img16.png')
        .row.justify-content-center(titulo="Diferentes formas de precio")
          .col-md-10.mb-4.mb-md-0
            h4.mb-4 Diferentes formas de precio
          .col-md-6.mb-4.mb-md-0
            p.mb-4 Cada servicio o producto tiene una manera de fijar el precio de su oferta, aquí algunos ejemplos:
            img(src='@/assets/curso/tema1/img17.svg') 
          .col-md-4
            .tarjeta.color-acento-contenido.p-4
              p 
                | Alquiler = Apartamento
                br
                | Pensión = Colegios
                br
                | Honorarios = Servicios profesionales
                br
                | Pasaje = Transporte
                br
                | Interés = Crédito
                br
                | Sueldo = Ejecutivo
                br
                | Propina = Mesero
                br
                | Prima = Seguro
                br
                | Impuesto = Gobierno
                br
                | Comisión = Vendedor
        .row.justify-content-center(titulo="Precio de penetración")
          .col-md-10.mb-4.mb-md-0
            h4.mb-4 Precio de penetración
          .col-md-6.mb-4.mb-md-0
            p.mb-4 El precio de penetración busca captar a los clientes con un producto nuevo, generalmente de consumo masivo; que cuenta con un descuento elevado, la intención es llegar al mayor número de clientes, darse a conocer rápidamente para de manera paulatina ir subiendo el precio al nivel deseado. Con este tipo de precio se busca un volumen alto de venta para poder llegar al punto de equilibrio.
          .col-md-4
             img(src='@/assets/curso/tema1/img18.png')
        .row.justify-content-center(titulo="Importancia del precio")
          .col-md-10.mb-4.mb-md-0
            h4.mb-4 Importancia del precio
          .col-md-5.mb-4.mb-md-0
            img(src='@/assets/curso/tema1/img19.svg')(data-aos="fade-right")
          .col-md-5
            <br><br>
            img(src='@/assets/curso/tema1/img20.svg')(data-aos="fade-left")
        .row.justify-content-center(titulo="Indicaciones para la producción")          
          .col-md-10.mb-4.mb-md-0
            h4.mb-4 Indicaciones para la producción
          .col-lg-10
            p Pasos para la asignación de los precios
            img(src='@/assets/curso/tema1/img21.svg')
        .row.justify-content-center(titulo="Estrategias de precios")
          .col-md-10.mb-4.mb-md-0
            h4.mb-4 Estrategias de precios
            p.mb-4 A lo largo del ciclo de vida del producto y desde el lanzamiento de este al mercado, la empresa adopta diferentes maneras de comunicarse con los clientes a través de los precios. Los precios son una herramienta muy importante de relacionarse con los clientes sin perder el objetivo final de la empresa, Goñi (2008) manifiesta al respecto,
            .bloque-texto-d.color-primario(data-aos="fade-right")
              .bloque-texto-d__texto.mb-2
                .row
                  .col-2.p-2
                    i.fas.fa-quote-left
                  .col-8
                    .h5.mb-0 (…) cuando un producto está en la etapa de introducción se iniciará con un precio, el cual variará conforme se haga más conocido, haya más competidores o dependiendo de la importancia social de este, como es el caso de las medicinas
              .bloque-texto-d__autor
                i.fas.fa-quote-right
            p.mb-4 Las estrategias que más se utilizan en la empresa para fijar precios, teniendo en cuenta el ciclo de vida de producto o servicio son:
            .row.justify-content-center
              .col-md-10.md-0
                img(src='@/assets/curso/tema1/img22.svg') 
        .row.justify-content-center(titulo="Precio de desnatado")
          .col-md-10.mb-4.mb-md-0
            h4.mb-4 Precio de desnatado
          .col-md-6.mb-4.mb-md-0
            p Generalmente se aplica en el lanzamiento de un producto, se establece un precio muy alto al principio para maximizar la ganancia vendiendo el producto a un segmento que esté dispuesto a pagar ese precio, luego el precio lentamente disminuye con el tiempo para maximizar la ganancia vendiendo el producto a otro grupo de consumidores que son más sensibles al precio, es decir a aquellos clientes que al precio inicial no podían pagarlo. Este tipo de producto debe tener unas características o beneficios únicas no encontradas en otro producto que son percibidas por el mercado. 
          .col-md-4
            img(src='@/assets/curso/tema1/img23.svg')
        .row.justify-content-center(titulo="Precio de statu quo")
          .col-md-10.mb-4.mb-md-0
            h4.mb-4 Precio de #[i statu quo]
          .col-md-6.mb-4.mb-md-0
            p Para fijar el precio de #[i statu quo], por lo general, es un producto que ya tiene presencia en el mercado, por lo que la empresa realiza un chequeo de precios que le permite ver el comportamiento de la competencia y sigue al precio más alto, sin superar a este.
          .col-md-4
            img(src='@/assets/curso/tema1/img24.png')
        .row.justify-content-center(titulo="Otras tácticas que acompañan al precio")
          .col-md-10.mb-4.mb-md-0
            h4.mb-4 Otras tácticas que acompañan al precio
          .col-md-6.mb-4.mb-md-0
            p A lo largo del ciclo de vida del producto, la empresa puede manejar situaciones alrededor del precio para mantener a la cliente que se sientan satisfechos. Hay varias maneras que según Goñi (2008) se puede utilizar, entre ellas:
          .col-md-4
            img(src='@/assets/curso/tema1/img25.svg') 

    separador
    figure.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/tema1/img26.png')   

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        .bloque-texto-a.color-primario.p-3.mb-4 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8(data-aos="fade-right")
              .bloque-texto-a__texto.p-5
                p.mb-0 Imaginarse una fábrica entregando todos los productos que vende directamente a los compradores, sobre todo los productos de consumo masivo como alimentos, productos de aseo entre otros, sin barreras geográficas, resultaría casi imposible. El papel de los intermediarios del canal de distribución consiste en transformar los volúmenes de bienes que fabrican los productores en pequeñas cantidades que a los consumidores les es más fácil adquirir. Por tanto, la función de llevar los productos desde el lugar de producción hasta el cliente final se conoce como distribución.
            .col-lg-4.mb-0(data-aos="fade-left")
              .titulo-sexto.color-acento-contenido.mb-4
                h5 Figura 3
                span Canales de distribución
              img(src='@/assets/curso/tema1/img27.svg')  
      .col-lg-4
        .cajon.color-acento-contenido.p-4
          p La distribución se encarga de llevar los productos hasta el consumidor final o los usuarios de negocios.
      .col-lg-6.mb-4
        p.mb-4 De acuerdo con Arellano (2010)       
        .bloque-texto-d.color-primario(data-aos="fade-left")
          .bloque-texto-d__texto.mb-2
            .row
              .col-2.p-2
                i.fas.fa-quote-left
              .col-8
                .h5.mb-0 son los organismos independientes que se encargan de la tarea de distribución entre la empresa productora y los clientes (p. 341)
          .bloque-texto-d__autor
            i.fas.fa-quote-right 
      .col-lg-8.mb-4
        p.mb-4 Para Kerin, Hartley y Rudelius (2014) la distribución consiste
        .bloque-texto-d.color-primario(data-aos="fade-right")
          .bloque-texto-d__texto.mb-2
            .row
              .col-2.p-2
                i.fas.fa-quote-left
              .col-8
                .h5.mb-0 “(…) en individuos y empresas que participan en el proceso que permite hacer disponible un bien o servicio para su uso o consumo por los consumidores finales o por los usuarios industriales (p. 392)
          .bloque-texto-d__autor
            i.fas.fa-quote-right
      .col-lg-10
        p Para cumplir la labor de distribución la empresa dispone de:
      
    .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
      h5 Figura 4
      span Disposición de la empresa
    
    .tarjeta--container.row.mb-5
      .col-md.tarjeta.color-primario-25.p-5(data-aos="fade-right")
        h4.text-center Canal de distribución 
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/tema1/img28.svg')       
        p.mb-4 Red de organismos para ejercer la acción de distribución. 
      .col-md.tarjeta.color-acento-contenido-25.p-5
        h4.text-center Gestión de canales de distribución 
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/tema1/img29.svg')       
        p.mb-4 Relaciones de los miembros con el canal de distribución.
      .col-md.tarjeta.color-primario-25.p-5(data-aos="fade-left")
        h4.text-center Gestión física 
        .row.justify-content-center.mb-4
          .col-8
            img(src='@/assets/curso/tema1/img30.svg')       
        p.mb-4 Conecta a la empresa con los clientes.

    separador
    h4 Funciones importantes realizadas por los intermediarios
    figure.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/tema1/img31.png') 
    
    p.mb-4 Los canales de distribución utilizan la red de organismos para que los bienes fluyan a través de los intermediarios, desde un fabricante hasta un comprador, y estos reciben diversos nombres y realizan varias funciones. Algunos compran realmente los bienes al vendedor, los almacenan y los revenden a los compradores. Según Kerin (2014), estos son algunos de los nombres que reciben los intermediarios:

    LineaTiempoD.color-primario.mb-4
      .row(numero="1" titulo="Intermediario")
        .col-md-6.mb-4.mb-md-0
          p Toda persona o entidad que media entre el fabricante y los mercados de usuarios finales.
        .col-md-4
          img(src='@/assets/curso/tema1/img32.png')
      .row(numero="2" titulo="Agente comercial")
        .col-md-6.mb-4.mb-md-0
          p Todo intermediario con autoridad legal para actuar en nombre del fabricante.
        .col-md-4
          img(src='@/assets/curso/tema1/img33.png')
      .row(numero="3" titulo="Mayorista")
        .col-md-6.mb-4.mb-md-0
          p Intermediario que vende a otros intermediarios, usualmente a detallistas; el término se aplica comúnmente a los mercados de consumidores.
        .col-md-4
          img(src='@/assets/curso/tema1/img34.png')
      .row(numero="4" titulo="Minorista")
        .col-md-6.mb-4.mb-md-0
          p Intermediario que vende a los consumidores.
        .col-md-4
          img(src='@/assets/curso/tema1/img35.png')
      .row(numero="5" titulo="Distribuidor")
        .col-md-6.mb-4.mb-md-0
          p Intermediarios que realizan diversas funciones de distribución, como venta, almacenamiento de inventarios, otorgamiento de crédito, etc.; término más utilizado en los mercados empresariales, pero también podría emplearse para hacer referencia a los mayoristas.
        .col-md-4
          img(src='@/assets/curso/tema1/img36.png')
      .row(numero="6" titulo="Concesionario")
        .col-md-6.mb-4.mb-md-0
          p Término aún más impreciso que el anterior y que puede ser sinónimo de distribuidor, detallista, mayorista, etcétera.
        .col-md-4
          img(src='@/assets/curso/tema1/img37.png')
    
    .row.justify-content-center.mb-4
      .col-lg-8.mb-4
        .cajon.color-acento-contenido.p-4(data-aos="fade-right")
          .row.p-4
            .col-lg-6.mb-4.mb-lg-0
              p Entre sus funciones están las siguientes:
              ul.lista-ul--color
                li 
                  i.fas.fa-star-half-alt
                  |	Representación (compra – venta).
                li 
                  i.fas.fa-star-half-alt
                  |	Investigación (información).
                li 
                  i.fas.fa-star-half-alt
                  |	Promoción (servicios).
                li 
                  i.fas.fa-star-half-alt
                  |	Transporte.
                li 
                  i.fas.fa-star-half-alt
                  |	Almacenamiento.
                li 
                  i.fas.fa-star-half-alt
                  |	Financiamiento.
                li 
                  i.fas.fa-star-half-alt
                  |	Riesgo.
                li 
                  i.fas.fa-star-half-alt
                  |	Otros.

            .col-lg-5
              img(src='@/assets/curso/tema1/img38.svg')
  
    separador
    h4.mb-4 Flujos de los canales de distribución en los mercados
    figure.mb-4(data-aos="flip-up") 
      img(src='@/assets/curso/tema1/img39.png')

    p.mb-4 Los flujos son actividades que se realizan a lo largo del canal y en la que participan los intermediarios, por ejemplo, mayoristas, minoristas, transportadores, servicios bancarios, entre otros. La realización de las funciones o actividades de la distribución comercial da lugar a una serie de flujos entre los participantes en el canal de distribución. Se pueden identificar cinco flujos diferentes, a saber:

    h4 Flujo de los canales en los mercados

    ImagenInfografica.color-acento-contenido.mb-5
      template(v-slot:imagen)
        figure
          img(src='@/assets/curso/tema1/img40.svg')
      .tarjeta.color-acento-contenido.p-3(x="59%" y="18%")
        .h5.mb-2 Flujo físico
        p Describe los desplazamientos reales del producto desde el productor hasta el consumidor final, pasando por los sucesivos intermediarios.
      .tarjeta.color-acento-contenido.p-3(x="60%" y="55%")
        .h5.mb-2 Flujo de propiedad
        p Refleja cómo se transmite el título de propiedad de los bienes que son distribuidos; su sentido es descendente, ya que va desde el productor hasta los usuarios finales; no obstante, en algunos casos se transmite el uso del bien, pero no su propiedad, como sería el caso de la reserva de una habitación de hotel.
      .tarjeta.color-acento-contenido.p-3(x="86%" y="30%")
        .h5.mb-2 Flujo de pagos
        p Derivado de las transacciones ocasionadas por los flujos anteriores, incluye los pagos y las comisiones por la compra del producto y la realización de las funciones de los intermediarios dentro del canal de distribución.
      .tarjeta.color-acento-contenido.p-3(x="71%" y="14%")
        .h5.mb-2 Flujo de Información
        p Refleja la información que circula dentro del canal. Los intermediarios facilitan la comunicación en ambos sentidos, eliminando el desconocimiento que supone la distancia geográfica entre fabricantes y consumidores. 
      .tarjeta.color-acento-contenido.p-3(x="88%" y="68%")
        .h5.mb-2 Flujo de Promoción
        p Los consumidores finales realizan sus pedidos a los intermediarios y estos a su vez a los fabricantes.

    h4.mb-4 Participantes en el canal de distribución
    p.mb-4 En un canal de distribución intervienen los siguientes integrantes:
    .row.justify-content-center.mb-4
      .col-lg-11.mb-4.p-4
        img(src='@/assets/curso/tema1/img41.svg')
      .col-lg-9.mb-4.p-4
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 5
          span Participantes del canal
        img(src='@/assets/curso/tema1/img42.svg')
      .col-lg-8.mb-4
        .cajon.color-acento-contenido.p-4(data-aos="fade-right")
          p.mb-4 Puede haber canales en los que intervengan todos estos elementos o solo algunos; este sería el caso de la tienda que compra a una fábrica para vender al consumidor.
          p.mb-4 Algunos tipos de intermediarios que son conocidos son:
          ul.lista-ul--color
            li 
              i.fas.fa-star-half-alt
              |	Mercados itinerantes.
            li 
              i.fas.fa-star-half-alt
              |	Tiendas de barrio.
            li 
              i.fas.fa-star-half-alt
              |	Supermercados.
            li 
              i.fas.fa-star-half-alt
              |	Tiendas de conveniencia.
            li 
              i.fas.fa-star-half-alt
              |	Tiendas de descuento duro.
            li 
              i.fas.fa-star-half-alt
              |	Tiendas por departamentos.
            li 
              i.fas.fa-star-half-alt
              |	Centros comerciales.

    separador
    h4.mb-4 Longitud del canal de distribución
    figure.mb-4(data-aos="flip-up") 
      img(src='@/assets/curso/tema1/img43.png')
    
    p.mb-4 Las empresas estructuran sus canales de distribución de distintas maneras para poner sus productos y servicios a disposición de los consumidores. Cada intermediario del canal de distribución realiza alguna actividad para acercar el producto y su posesión al comprador final, lo que lo convierte en un nivel de canal; además, como el productor y el consumidor final realizan ciertas funciones, también forman parte de cada canal.
    
    .row.justify-content-center.mb-4
      .col-lg-12.mb-4
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 6
          span Niveles de los canales de distribución
        img(src='@/assets/curso/tema1/img44.svg')  
      .col-lg-8
        .cajon.color-acento-contenido.p-4(data-aos="fade-right")
          p.mb-4 Los canales de distribución se conforman o estructuran según su orientación del mercado en:
          ul.lista-ul--color
            li 
              i.fas.fa-star-half-alt
              | Canales de distribución para bienes y servicios de consumo.
            li 
              i.fas.fa-star-half-alt
              | Canales de distribución para bienes y servicios de las empresas.
            li 
              i.fas.fa-star-half-alt
              p.mb-0
                | Canales de distribución para mercadeo #[i online].
            li 
              i.fas.fa-star-half-alt
              | Canales de distribución directa y multicanal.

    separador
    h4.mb-4 Tipos de canales de distribución
    figure.mb-4(data-aos="flip-up") 
      img(src='@/assets/curso/tema1/img45.png')
    
    p.mb-4 Los tipos de canales de distribución representan los medios que cada empresa elige para acercar los bienes y servicios que produce a sus consumidores finales.

    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 7
          span Tipos de canales de distribución
        img(src='@/assets/curso/tema1/img46.svg')

    separador
    h4.mb-4 Estructura de los canales de distribución
    figure.mb-4(data-aos="flip-up")
      img(src='@/assets/curso/tema1/img47.png') 
    p.mb-4 Una estructura de canal de distribución se relaciona con el sistema utilizado por una compañía para entregar bienes y productos a los consumidores. La compañía diseña su propia estructura de acuerdo al mercado objetivo, los hábitos de los consumidores, las características del producto y la capacidad y necesidades de la empresa.
    .row.justify-content-center.mb-4
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 8
          span Estructura de los canales de distribución
        img(src='@/assets/curso/tema1/img48.svg')
    
    separador
    h4.mb-4 Estrategias de los canales de distribución
    figure.mb-4(data-aos="flip-up") 
      img(src='@/assets/curso/tema1/img49.png') 
    .row.justify-content-center.mb-4
      .col-lg-8.mb-4
        .cajon.color-acento-contenido.p-4
          p Las empresas deben definir el número de miembros del canal que utilizará en cada nivel. De acuerdo con Kotler y Armstrong (2013, p. 335), existen tres estrategias de distribución: intensiva, exclusiva y selectiva:
          ul.lista-ul--color
            li 
              i.fas.fa-angle-double-right
              p
                strong Distribución intensiva: 
                | es una estrategia en que abastecen sus productos en tantos puntos de venta como sea posible.
            li 
              i.fas.fa-angle-double-right
              p
                strong Distribución exclusiva: 
                | busca que algunos productores de manera deliberada limiten el número de intermediarios que manejan sus productos.
            li 
              i.fas.fa-angle-double-right
              p
                strong Distribución selectiva: 
                | corresponde al uso de más de uno, pero menos que todos los intermediarios dispuestos a tener el inventario de los productos de la compañía.
      .col-lg-10
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 8
          span Estrategias de los canales de distribución
        img(src='@/assets/curso/tema1/img50.svg')

    separador
    h4 Indicadores en el canal de distribución

    .row.mb-4
      .col-lg-7.mb-4.mb-lg-0
        p.mb-4 Son coeficientes que miden el desempeño de un canal, además de ser herramientas que se obtienen del resultado de una razón entre dos o más cifras o variables que dan una interpretación de lo que ha sucedido en un periodo de tiempo determinado, para proyectar la gestión de la empresa en el futuro. 
        p.mb-4 Los siguientes son los indicadores para medir los canales de distribución:
        ul.lista-ul--color
          li 
            i.fas.fa-star-half-alt
            |	Indicador maestro.
          li 
            i.fas.fa-star-half-alt
            |	Indicador de prestigio.
          li 
            i.fas.fa-star-half-alt
            |	Indicador de cobertura: en bienes mide habitualidad y en servicios mide acceso.
          li 
            i.fas.fa-star-half-alt
            |	Indicador de Incidencia: aplica a B&S en el CF y mide habitualidad en el uso (consumidor).
          li 
            i.fas.fa-star-half-alt
            |	Indicador de disponibilidad: aplica a bienes y los canales que los tengan.
      .col-lg-5
        img(src='@/assets/curso/tema1/img51.png')

    separador
    figure.mb-4(data-aos="flip-up") 
      img(src='@/assets/curso/tema1/img52.png')
    
    .row.justify-content-center.mb-4
      .col-lg-10.mb-4.mb-lg-0
        img(src='@/assets/curso/tema1/img53.svg')

    separador
    figure.mb-4(data-aos="flip-up") 
      img(src='@/assets/curso/tema1/img54.png')  
    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/ZtS0dRaNtfM" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

    p.mb-4 Después de desarrollar un producto, fijarle un precio según el ciclo de vida de este, estructurar el canal de distribución accesible a un mercado objetivo, la comunicación con ese mercado objetivo es de vital importancia. Pero, ¿qué es la comunicación? De acuerdo con Kerin, Hartley y Rudelius (2014, p. 450), la comunicación es el proceso de transmitir un mensaje a otros y requiere seis elementos: fuente o emisor, mensaje, canal de comunicación, receptor y procesos de codificación y decodificación.

    .row.justify-content-center.mb-4
      .col-lg-10.mb-4
        .titulo-sexto.color-acento-contenido.mb-4(data-aos="fade-right")
          h5 Figura 9
          span Proceso de la comunicación
        img(src='@/assets/curso/tema1/img55.svg')
      .col-lg-8
        .cajon.color-acento-contenido.p-4.mb-4(data-aos="fade-right")
          p Para que la empresa pueda comunicarse con su mercado debe utilizar diversas herramientas que hacen efectivo el mensaje que quiere hacer llegar. Kotler y Armstrong (2014), proponen las siguientes herramientas:
          ul.lista-ul--color
            li 
              i.fas.fa-angle-double-right
              p
                strong Publicidad: 
                | cualquier forma pagada e impersonal de presentación y promoción de ideas, bienes o servicios por un patrocinador identificado.
            li 
              i.fas.fa-angle-double-right
              p
                strong Promoción de ventas: 
                | incentivos a corto plazo para fomentar la compra o venta de un producto o servicio.
            li 
              i.fas.fa-angle-double-right
              p
                strong Ventas personales: 
                | presentación personal por la fuerza de ventas de la empresa con el propósito de realizar ventas y construir relaciones con los clientes.
            li 
              i.fas.fa-angle-double-right
              p
                strong Relaciones públicas: 
                | forjar buenas relaciones con los diversos públicos de la empresa al obtener publicity (publicidad no pagada) favorable, construir una buena imagen corporativa y manejar o desviar rumores, historias y eventos desfavorables.
            li 
              i.fas.fa-angle-double-right
              p
                strong marketing directo: 
                | conexiones directas con consumidores individuales cuidadosamente seleccionados tanto para obtener una respuesta inmediata como para cultivar relaciones duraderas con los clientes.

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

<style lang="sass" scoped></style>
