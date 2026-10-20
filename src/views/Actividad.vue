<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>

</template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Cuestionario sobre interacción y producción de contenidos digitales',
      titulo: 'Cuestionario',
      introduccion:
        '<b>Objetivo:</b> Comprobar la comprensión y aplicación de criterios para comunicarse, participar y colaborar en entornos digitales, gestionar medios y recursos, actuar responsablemente y planear, crear, publicar y mejorar contenidos digitales.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué criterio define la diferencia básica entre una interacción sincrónica y una asincrónica en medios digitales?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La cantidad de formatos que pueden incorporarse durante el intercambio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El número de destinatarios que pueden recibir el contenido compartido.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La coincidencia temporal entre las personas que participan en la interacción.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El nivel de formalidad aplicado al mensaje dentro del medio utilizado.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 2,
          texto:
            'Un grupo utiliza un chat para coordinar una actividad. Durante una reunión, todas las personas responden de inmediato; horas después, otras continúan la conversación. ¿Qué conclusión es correcta?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El mismo medio puede utilizarse de forma sincrónica o asincrónica según el momento de participación.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'El chat debe considerarse siempre sincrónico porque admite respuestas inmediatas entre sus participantes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El chat se considera asincrónico únicamente cuando los mensajes incluyen documentos para revisar.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La modalidad depende principalmente del número de personas que participan en cada intercambio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 3,
          texto:
            'Un equipo necesita resolver una situación urgente mediante preguntas, respuestas y decisiones inmediatas. ¿Qué criterio debe priorizar al seleccionar el medio digital?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Utilizar un medio orientado principalmente a publicar información para una audiencia abierta.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Elegir un medio que no requiera coincidencia temporal y permita respuestas diferidas.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Seleccionar un canal atendiendo solamente al formato del archivo que se desea compartir.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Preferir un medio que permita participación simultánea y retroalimentación inmediata.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 4,
          texto:
            'Una cuenta de correo contiene numerosos mensajes y se necesita recuperar los enviados por una persona específica durante un periodo determinado. ¿Qué práctica facilita la búsqueda?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Revisar manualmente la bandeja completa siguiendo el orden de recepción de los mensajes.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Combinar criterios como remitente, fecha y palabras clave relacionadas con el asunto buscado.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Crear una etiqueta nueva y aplicarla a todos los mensajes antes de iniciar la búsqueda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Ordenar los correos únicamente por tamaño de archivo para identificar los mensajes relacionados.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 5,
          texto:
            'Una persona debe enviar una solicitud académica formal, adjuntar un documento y conservar evidencia del intercambio. ¿Qué elección responde mejor a esa necesidad?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Un medio asincrónico institucional que permita estructurar el mensaje, adjuntar el archivo y conservar registro.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Una publicación abierta que permita exponer la solicitud ante una audiencia amplia y recibir reacciones.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Un chat grupal informal que priorice mensajes breves aunque no organice adecuadamente la solicitud.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Una llamada en tiempo real que resuelva el asunto sin necesidad de conservar evidencia del intercambio.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 6,
          texto:
            'Durante un foro académico, una persona interpreta como ofensivo un comentario cuyo sentido no resulta claro. ¿Qué actuación corresponde mejor con la netiqueta?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Responder inmediatamente con un mensaje público que cuestione la intención de quien escribió.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Repetir el desacuerdo en varios mensajes para asegurar que la posición quede registrada.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Solicitar aclaración, expresar el desacuerdo con respeto y mantener la respuesta centrada en el tema.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'Compartir el comentario en otro grupo para solicitar respaldo antes de continuar la conversación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 7,
          texto:
            '¿Cuál de las siguientes acciones constituye con mayor claridad una forma de participación ciudadana en línea?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Realizar el pago de una factura personal mediante un servicio digital habilitado para ese trámite.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Descargar un certificado personal desde una plataforma que permite obtener documentos en línea.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Actualizar los datos de contacto registrados en la cuenta privada de un servicio institucional.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Presentar una propuesta en una consulta institucional relacionada con una iniciativa de interés comunitario.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 8,
          texto:
            'Una plataforma solicita datos personales para realizar un trámite en línea. ¿Qué acción resulta más adecuada antes de suministrarlos?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Confiar en la plataforma cuando utiliza símbolos y elementos gráficos similares a los institucionales.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Comprobar su legitimidad mediante canales oficiales y valorar si los datos solicitados son necesarios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Acceder desde el primer enlace disponible en un buscador si coincide con el nombre del servicio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Completar inicialmente todos los campos solicitados y comprobar la procedencia del sitio al finalizar.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 9,
          texto:
            '¿Cuál afirmación diferencia adecuadamente una red social digital de una comunidad digital?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La red social conecta personas por intereses, mientras la comunidad funciona siempre con acceso privado.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La red social permite compartir contenidos, mientras la comunidad funciona únicamente dentro de una plataforma.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La red social facilita conexiones e interacción, mientras la comunidad se organiza alrededor de propósitos compartidos.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'La red social reúne contactos diversos, mientras la comunidad se diferencia únicamente por tener menos participantes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 10,
          texto:
            'Varias personas comparten documentos en línea, pero no han definido un propósito común, responsabilidades ni criterios para coordinar sus aportes. ¿Qué elemento necesitan fortalecer?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La organización colaborativa mediante un propósito compartido, responsabilidades y acuerdos de trabajo.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'La cantidad de archivos disponibles para que cada integrante pueda seleccionar actividades diferentes.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La autonomía de cada participante para modificar el producto sin consultar las decisiones del equipo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La separación completa de las tareas para evitar cualquier intercambio durante el desarrollo del producto.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 11,
          texto:
            'En una plataforma colaborativa, una persona puede comentar un documento, pero no editarlo, y únicamente los integrantes del proyecto pueden acceder a él. ¿Cómo se interpretan estas condiciones?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La posibilidad de comentar y la restricción al equipo corresponden únicamente al alcance del acceso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La posibilidad de comentar y la restricción al equipo corresponden únicamente a permisos de acción.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'La posibilidad de comentar define el alcance, mientras la selección del equipo determina el permiso de edición.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La posibilidad de comentar corresponde al permiso de acción y el acceso limitado al equipo define su alcance.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 12,
          texto:
            'Un equipo necesita revisar un documento compartido sin perder la versión previamente aprobada. ¿Qué práctica facilita una gestión adecuada?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Crear copias locales separadas y nombrarlas todas como «versión final» para facilitar su reconocimiento.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Mantener control de versiones, nombres coherentes y comentarios o sugerencias antes de aprobar los cambios.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Sustituir siempre el archivo anterior por el más reciente y eliminar cualquier versión previa disponible.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Permitir edición mediante un enlace abierto para que cualquier persona pueda corregir el documento compartido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 13,
          texto:
            'Una persona desea publicar una fotografía grupal relacionada con un logro académico. ¿Qué actuación refleja un comportamiento responsable en la red?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Confirmar la autorización correspondiente y revisar quién podrá acceder a la publicación antes de compartirla.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Publicar primero la fotografía y retirar posteriormente las etiquetas de quienes soliciten no aparecer.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Compartir la imagen con acceso abierto porque su contenido corresponde a una actividad académica.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Publicar la fotografía sin identificar a las personas, aunque permita reconocerlas y revele información privada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 14,
          texto:
            'Una persona adulta establece contacto digital con una persona menor de edad, busca ganar su confianza, pide mantener la conversación en secreto y solicita contenido íntimo con finalidad sexual. ¿Qué riesgo corresponde a esta situación?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Ciberacoso.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: '<i>Ciberbullying</i>.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: '<i>Grooming</i>.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Suplantación de identidad.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 15,
          texto:
            '¿Cuál afirmación diferencia correctamente identidad digital, perfil digital y portafolio digital?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'La identidad es una cuenta concreta, el perfil reúne toda la huella digital y el portafolio reemplaza la información del perfil.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'La identidad abarca rastros e interacciones, el perfil organiza información seleccionada y el portafolio reúne evidencias de capacidades o experiencia.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'La identidad contiene solo publicaciones propias, el perfil reúne datos de terceros y el portafolio conserva cualquier archivo sin selección.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'La identidad, el perfil y el portafolio son formas equivalentes que se diferencian únicamente por la plataforma donde se encuentran.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 16,
          texto:
            'En una diferenciación pedagógica, sin convertirla en una taxonomía jurídica exclusiva, ¿qué relación es adecuada entre ciberbullying y ciberacoso?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El <i>ciberbullying</i> corresponde a cualquier desacuerdo digital y el ciberacoso ocurre únicamente entre personas desconocidas.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El <i>ciberbullying</i> implica necesariamente una relación entre persona adulta y menor, mientras el <i>ciberacoso</i> ocurre entre pares.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El <i>ciberbullying</i> y el <i>ciberacoso</i> son conceptos idénticos y deben aplicarse con los mismos criterios en cualquier situación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'El <i>ciberbullying</i> se asocia con acoso repetido entre pares y el <i>ciberacoso</i> comprende formas más amplias de hostigamiento digital.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 17,
          texto:
            '¿Cuál afirmación diferencia correctamente un tipo de contenido digital de un criterio de calidad?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'El tipo determina el nivel de seguridad requerido y el criterio de calidad identifica únicamente la extensión del archivo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'El tipo establece quién puede acceder al recurso y el criterio de calidad determina exclusivamente el formato utilizado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'El tipo describe la forma de presentar información; criterios como claridad, accesibilidad y seguridad orientan su adecuada elaboración.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto:
                'El tipo y el criterio de calidad corresponden al mismo concepto y dependen principalmente de la herramienta utilizada.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 18,
          texto:
            'Una persona necesita crear una explicación breve en audio y dispone de recursos tecnológicos básicos. ¿Qué criterio debe orientar principalmente la selección de la herramienta?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Elegir una herramienta con numerosas funciones, aunque varias no sean necesarias para producir el audio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Elegir una herramienta con las funciones necesarias y adecuada a los recursos y experiencia disponibles.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto:
                'Utilizar una herramienta reconocida, aunque sus formatos no respondan a las necesidades del contenido.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Escoger una herramienta con muchas plantillas, aunque estas no correspondan al producto requerido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 19,
          texto:
            'Una persona desea incorporar en un recurso propio una imagen creada por un tercero y ya conoce quién es su autor. ¿Qué debe comprobar antes de reutilizarla?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Que la imagen se encuentre disponible públicamente en internet y pueda descargarse desde algún sitio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto:
                'Que sea posible citar el nombre del autor, porque esta atribución autoriza cualquier forma de reutilización.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Que pueda modificarse parcialmente, porque los cambios convierten automáticamente la imagen en un recurso propio.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Que la licencia o el permiso autoricen el uso previsto y que se cumplan sus condiciones, además de reconocer la autoría.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
        {
          id: 20,
          texto:
            'Después de publicar un recurso educativo, se identifica un enlace que no funciona y se recibe además una sugerencia de cambio meramente decorativo. ¿Qué actuación es más adecuada?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Corregir el enlace y valorar la sugerencia según su pertinencia para el propósito, la audiencia y la calidad del recurso.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto:
                'Aplicar ambos cambios de inmediato porque toda retroalimentación recibida después de publicar debe incorporarse.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Mantener el recurso sin modificaciones porque la etapa de revisión termina en el momento de la publicación.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto:
                'Retirar completamente el contenido y volver a elaborarlo antes de comprobar la importancia de cada observación.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
          mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
        },
      ],
      mensaje_final_aprobado: '¡Excelente! Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
