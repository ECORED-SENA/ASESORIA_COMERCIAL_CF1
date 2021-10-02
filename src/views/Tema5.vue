<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal(data-aos="flip-up")
      .titulo-principal__numero
        span 5
      h1 Bases de datos
    
    .row.justify-content-center.mb-4
      .col-lg-6.mb-4.mb-lg-0
        p.mb-4 Las bases de datos son una herramienta fundamental en el entorno informático hoy en día y tienen aplicación prácticamente en todos los campos como los negocios, organizaciones y en la vida personal. Su aplicabilidad responde a la necesidad de gestionar datos que provean información pertinente.
        .cajon.color-secundario.p-4
          p Una base de datos es un conjunto de datos estructurado y almacenado de forma sistemática para facilitar su posterior utilización. Igualmente, es una colección organizada de información estructurada, o datos, típicamente almacenados electrónicamente en un sistema de computadora.
      .col-lg-6
        img(src='@/assets/curso/tema5/img01.png')

    .row.mb-4
      .col-lg-4.mb-4.mb-lg-0
        img(src='@/assets/curso/tema5/img02.svg')
    
    p.mb-4 Cada sistema de base de datos tiene tipos de campos que pueden ser similares o diferentes; entre los más comunes se pueden nombrar:

    .row.justify-content-center.mb-4
      .col-lg-10
        figure.mb-3
          img(src='@/assets/curso/tema1/img99.svg')
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img.p-2
            img(src='@/assets/curso/tema5/img03.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4
            .row
              .col-1
              .col-10
                strong Numérico
                p Entre los diferentes tipos de campos numéricos se pueden encontrar enteros “sin decimales” y reales “decimales”.
      .col-lg-10
        figure.mb-3
          img(src='@/assets/curso/tema1/img99.svg')
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img.p-2
            img(src='@/assets/curso/tema5/img04.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4
            .row
              .col-1
              .col-10
                strong Booleanos
                p Poseen dos estados: verdadero “Sí” y falso “No”.
      .col-lg-10
        figure.mb-3
          img(src='@/assets/curso/tema1/img99.svg')
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img.p-2
            img(src='@/assets/curso/tema5/img05.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4
            .row
              .col-1
              .col-10
                strong Memos
                p Son campos alfanuméricos de longitud ilimitada. Presentan el inconveniente de no poder ser indexados.
      .col-lg-10
        figure.mb-3
          img(src='@/assets/curso/tema1/img99.svg')
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img.p-2
            img(src='@/assets/curso/tema5/img06.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4
            .row
              .col-1
              .col-10
                strong Fechas
                p Almacenan fechas facilitando su explotación. Almacenar fechas de esta forma posibilita ordenar los registros por fechas o calcular los días entre una fecha y otra.
      .col-lg-10
        figure.mb-3
          img(src='@/assets/curso/tema1/img99.svg')
        .tarjeta-avatar-b.mb-5
          .tarjeta-avatar-b__img.p-2
            img(src='@/assets/curso/tema5/img07.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4
            .row
              .col-1
              .col-10
                strong Alfanuméricos
                p Contienen cifras y letras. Presentan una longitud limitada (255 caracteres).
      .col-lg-10
        figure.mb-3
          img(src='@/assets/curso/tema1/img99.svg')
        .tarjeta-avatar-b.mb-4
          .tarjeta-avatar-b__img.p-2
            img(src='@/assets/curso/tema5/img08.svg' alt='AvatarTop')
          .tarjeta.tarjeta--azul.p-4
            .row
              .col-1
              .col-10
                strong Auto incrementables
                p Son campos numéricos enteros que incrementan en una unidad su valor para cada registro incorporado. Su utilidad resulta: servir de identificador ya que resultan exclusivos de un registro.       
        figure.mb-4
          img(src='@/assets/curso/tema1/img99.svg')
        p.mb-4 Las bases de datos más conocidas son:
        
        .cajon.color-secundario.p-4
          .row.justify-content-center.mb-4
            .col-lg-6.mb-4.mb-lg-0
              ul.lista-ul--color
                li 
                  i.fas.fa-bullhorn
                  | Microsoft Access. También conocido como MS Access, es un sistema de gestión de bases de datos (SGBD) incluido en el paquete de programas de Microsoft Office. Igualmente un gestor de datos que recopila información relativa a un asunto o propósito particular, como el seguimiento de pedidos de clientes o el mantenimiento de una colección de música.
                li 
                  i.fas.fa-bullhorn
                  | Oracle.
                li 
                  i.fas.fa-bullhorn
                  | DB2 de IBM.
                li 
                  i.fas.fa-bullhorn
                  | SQL Server.
            .col-lg-6
              img(src='@/assets/curso/tema5/img09.svg')

    Separador
    #t_5_1.titulo-segundo
      .h3 5.1 Tipos de bases de datos
    
    p.mb-4 Hay muchos tipos diferentes de bases de datos, pero la mejor base de datos para una organización específica depende de cómo la organización pretende utilizar los datos; así se encuentran:

    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="Bases de datos relacionales")
        .col-lg-10
          p Son las bases de datos más usadas. Los elementos de una base de datos relacional se organizan como un conjunto de tablas con columnas y filas. La tecnología de base de datos relacional proporciona la manera más eficiente y flexible de acceder a información estructurada.
      .row.justify-content-center(titulo="Bases de datos jerárquicas")
        .col-lg-10
          p Los datos se recogen mediante una estructura basada en nodos interconectados. Cada nodo puede tener un único padre y cero, uno o varios hijos. De este modo, se crea una estructura en forma de árbol invertido en el que todos sus nodos dependen en última instancia de uno denominado raíz.
      .row.justify-content-center(titulo="Bases de datos en red")
        .col-lg-10
          p Es aquella base de datos formada por una serie de registros, los cuales están enlazados entre sí creando una red. Estos registros son similares a los campos en las bases de datos relacionales y cada uno de ellos contiene un único atributo o valor.
      .row.justify-content-center(titulo="Bases de datos orientadas a objetos")
        .col-lg-10
          p El modelo extiende las capacidades de las bases de datos relacionales, de tal modo que estas pueden contener objetos, permitiendo así una integración más fácil con la propia arquitectura de los programas empleados para el manejo de la base de datos, en caso de que estos hayan sido desarrollados mediante programación orientada a objetos.

    Separador
    #t_5_2.titulo-segundo
      .h3 5.2 Estructura de una base de datos
    
    .row.justify-content-center.mb-4
      .col-lg-9.mb-4
        .bloque-texto-g.color-primario.p-3.p-sm-4.p-md-5.mb-5
          .bloque-texto-g__img(
            :style="{'background-image': `url(${require('@/assets/curso/tema5/img10.svg')})`}"
          )
          .bloque-texto-g__texto.p-5
            p.mb-4 La denominación más completa de la estructura de una base de datos corresponde a cada uno de los elementos, formatos y normas que la integran y permiten su óptimo funcionamiento, permitiendo un almacenamiento eficiente de los datos, sin que estos se puedan perder durante la actuación del programa en el modo digital.
            p.mb-4 Permiten almacenar, manipular y ordenar los datos, que son materia prima en cualquier sistema de información. 
            p.mb-0 También admiten unas operaciones básicas: adicionar, realizar búsquedas, recorrer y eliminar datos. 
        p Las estructuras de bases de datos se pueden combinar de varias maneras para formar estructuras más complejas como:

    TabsC.color-primario.mb-5
      .py-3.py-md-4(titulo="Primitivas")
        .row.justify-content-center
          .col-md-11
            h4 ● Primitivas
            p.mb-4 compuestas por otras estructuras de datos así:
            ImagenInfografica.color-acento-contenido.mb-5
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema5/img11.svg')
              .tarjeta.color-secundario.p-3(x="32%" y="32%")
                .h5.texto-white.mb-2 Char
                p.texto-white El tipo de datos CHAR almacena datos de carácter en un campo de longitud fija. Los datos pueden ser una serie de letras, números y otros caracteres de un solo byte o varios bytes que pueden ser utilizados por el juego de códigos del entorno local de la base de datos.
              .tarjeta.color-secundario.p-3(x="27%" y="53%")
                .h5.texto-white.mb-2 Int
                p.texto-white Los tipos de datos INTEGER y SMALLINT albergan números enteros pequeños. Ambos tipos de datos se almacenan como enteros binarios con signo. Los valores INTEGER tienen 32 bits y pueden representar números enteros desde –2 31–1 hasta 2 31–1. Los valores SMALLINT solo tienen 16 bits.
              .tarjeta.color-secundario.p-3(x="32%" y="75%")
                .h5.texto-white.mb-2 Float
                p.texto-white Almacena números de coma flotante, donde 'm' es el número de dígitos de la parte entera y 'd' el número de decimales. DOUBLE (REAL): almacena número de coma flotante con precisión doble. Igual que FLOAT, la diferencia es el rango de valores posibles.
              .tarjeta.color-secundario.p-3(x="74%" y="35%")
                .h5.texto-white.mb-2 Boolean
                p.texto-white El tipo de dato lógico o booleano es en computación aquel que puede representar valores de lógica binaria, esto es 2 valores que, normalmente, representan falso o verdadero. Se utiliza normalmente en la programación, estadística, electrónica, matemáticas (álgebra booleana), entre otras.
              .tarjeta.color-secundario.p-3(x="74%" y="74%")
                .h5.texto-white.mb-2 Double
                p.texto-white El tipo double es similar a float, pero se utiliza cuando la precisión de una variable de coma flotante no es suficiente. Las variables declaradas como tipo double pueden contener aproximadamente el doble de dígitos significativos que las variables de tipo float.
      .py-3.py-md-4(titulo="No primitivas o simples: ")
        .row.justify-content-center
          .col-md-11
            h4 ●	No primitivas o simples:
            p se construyen a partir de estructuras primitivas y son cadenas, arreglos y registros. Se componen en lineales y no lineales.
            .row.mb-4
              .col-lg-6.mb-4.mb-lg-0
                img(src='@/assets/curso/tema5/img12.svg')
              .col-lg-6
                img(src='@/assets/curso/tema5/img13.svg')
      .py-3.py-md-4(titulo="Estructuras de base de datos dinámicas y estáticas")
        .row.justify-content-center
          .col-md-11
            h4 ●	Estructuras de base de datos dinámicas y estáticas
            p La principal diferencia entre ambas es que mientras las bases de datos estáticas son de solo lectura y no permite modificar o añadir datos, las bases de datos dinámicas son mucho más flexibles y sí permiten editar, actualizar o borrar datos.
            .row.justify-content-center
              .col-md-6
                img(src='@/assets/curso/tema5/img14.png')
      .py-3.py-md-4(titulo="Diseño de la base de datos")
        .row.justify-content-center
          img(src='@/assets/curso/tema5/img15.svg')

    Separador
    #t_5_3.titulo-segundo
      .h3 5.3 Manejo de una base de datos
    
    p.mb-4 Una base de datos necesita desarrollarse en una herramienta específica, puede hacerse de manera elemental en un Excel o utilizar un software de base de datos. La Base de Datos de Mercadeo (BDM) es la columna vertebral de cualquier sistema de información y más aún en programas de mercadeo uno a uno. Para manejar una base de datos es importante conocer el proceso que lleva a construirla y manejarla.
    p.mb-4 El proceso de diseño consta de los siguientes pasos:

    .tarjeta.tarjeta--gris.p-4.mb-5
      LineaTiempoC.color-acento-contenido(text-small)
        .row.p-4.justify-content-center(titulo="Paso 1")
          p Determinar el propósito de la base de datos. Esto le ayudará a prepararse para los pasos restantes.
          .col-md-6
            img(src='@/assets/curso/tema5/img16.png')
        .row.p-4.justify-content-center(titulo="Paso 2")
          p Buscar y organizar la información necesaria. Recopile todos los tipos de información que podría querer registrar en la base de datos, como los nombres de producto y los números de pedido.
          .col-md-4
            img(src='@/assets/curso/tema5/img17.svg')
        .row.p-4(titulo="Paso 3")
          .col-md-6.mb-4.mb-lg-0
            p.mb-4 El funcionamiento del hardware sin fallas es la base para dotar a un sistema una alta disponibilidad. Para saber cómo presentar el valor de alta disponibilidad a ofrecer se debe tener en cuenta la norma IEEE 762/2006 que suministra el método del cálculo de este indicador para sistemas eléctricos pero es aplicable a todo sistema eléctrico o electrónico.
            p.mb-4 En dicha norma se mencionan algunos indicadores como lo son: fiabilidad, disponibilidad, tiempo medio entre paradas (MTBF, Mid Time Between Failures), duración de las paradas (MTTR, o Mid Time To Repair), número de paradas por mantenimiento y tiempo total perdido por mantenimiento.
            p.mb-4 Para poder realizar este cálculo se necesita tener registrado en una tabla un registro por cada parada de los servicios con los siguientes datos:
            ul.lista-ul--color
              li 
                i.fas.fa-bullhorn
                | Servicio que ha parado.
              li 
                i.fas.fa-bullhorn
                |  Motivo de la parada (mantenimiento, actualización, falla, etc.).
              li 
                i.fas.fa-bullhorn
                | Duración de la parada (en minutos o segundos).
          .col-md-5
            img(src='@/assets/curso/tema5/img18.svg')
        .row.p-4.justify-content-center(titulo="Paso 4")
          p Convertir los elementos de información en columnas. Decida qué información quiere almacenar en cada tabla. Cada elemento se convierte en un campo y se muestra como una columna en la tabla. Por ejemplo, una tabla de clientes de seguros podría incluir campos como se muestra en  la figura.
          .col-md-8
            img(src='@/assets/curso/tema5/img19.png')
        .row.p-4.justify-content-center(titulo="Paso 5")
          p Especificar las claves principales. Elija la clave principal de cada tabla. La clave principal es una columna que se usa para identificar cada fila; un ejemplo podría ser Id. de producto o Id. de pedido
          .col-md-5
            img(src='@/assets/curso/tema5/img20.svg')
        .row.p-4(titulo="Paso 6")
          p Establecer las relaciones de tablas. Busque en cada tabla y decida cómo se relacionan los datos en una tabla con los datos de otras tablas. Agregue campos a las tablas o cree tablas para aclarar las relaciones, según sea necesario. 
          .col-md-6.mb-4.mb-lg-0
            .cajon.color-acento-contenido.p-4
              p.mb-4 Las relaciones consisten en una colección, o conjunto, de relaciones de la misma naturaleza. Ejemplo: Dados los conjuntos de entidades “Cliente" y “Factura", todas las relaciones de la forma cliente-factura, permiten obtener la información de los clientes y sus respectivas facturas.
              p La dependencia o asociación entre los conjuntos de entidades es llamada participación. En el ejemplo anterior los conjuntos de entidades “Factura" y “Cliente" participan en el conjunto de relaciones factura-cliente. Se llama grada del conjunto de relaciones a la cantidad de conjuntos de entidades participantes en la relación.
          .col-md-4
            img(src='@/assets/curso/tema5/img20.svg')
        .row.p-4(titulo="Paso 7")
          p Perfeccionar el diseño. Analice el diseño en busca de errores. Cree las tablas y agregue unos cuantos registros de datos de ejemplo. Compruebe si puede obtener los resultados que quiere de las tablas. Haga algunos ajustes en el diseño, si es necesario. Ejemplos de relaciones que expresan cardinalidad:
          ul.lista-ul--color
            li 
              i.fas.fa-bullhorn
              | Un policía (entidad) tiene (relación) un arma (entidad) siempre y cuando no realice funciones de oficina, pudiendo entonces tenerla o no asignada. Es una relación 0:1.
            li 
              i.fas.fa-bullhorn
              | UCada esposo (entidad) está casado (relación) con una única esposa (entidad) y viceversa. Es una relación 1:1.
            li 
              i.fas.fa-bullhorn
              | UUna factura (entidad) se emite (relación) a un cliente (entidad) y sólo una, pero una cliente puede tener varias facturas emitidas a su nombre. Todas las facturas se emiten a nombre de alguien. Es una relación 1: N.
            li 
              i.fas.fa-bullhorn
              | UUn cliente (entidad) puede comprar (relación) varios servicios (entidad) y un servicio puede ser comprado por varios clientes distintos. Es una relación N:M.
        .row.p-4(titulo="Paso 8")
          .col-md-6.mb-4.mb-lg-0  
            p Aplicar las reglas de normalización. Aplique las reglas de normalización de datos para ver si las tablas están estructuradas correctamente. Haga algunos ajustes en las tablas, si es necesario. La normalización es el proceso de organizar de manera eficiente los datos dentro de una base de datos. Hay que organizar tablas y el establecimiento de relaciones y el establecimiento de relaciones entre ellas según reglas preestablecidas.
          .col-md-6
            img(src='@/assets/curso/tema5/img22.svg')
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

<style lang="sass" scoped></style>
