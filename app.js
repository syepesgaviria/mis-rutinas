(function(){
'use strict';
/* idioma: declarado en <html>; se repite aquí por si el empaquetado de Claude reemplaza esa etiqueta */
if (!document.documentElement.getAttribute('lang')) document.documentElement.setAttribute('lang', 'es');
var LIB = [{"id":"banca","n":"Press de banca con barra","t":"fuerza","g":"Pecho","s":["Hombro","Tríceps"],"e":"Barra","p":["Acuéstate en el banco con los pies firmes en el piso y saca la barra con los brazos estirados, agarre un poco más ancho que los hombros.","Baja la barra controlada hasta rozar la mitad del pecho.","Empuja hasta estirar los brazos sin despegar la espalda ni los glúteos del banco."]},{"id":"bancamanc","n":"Press de banca con mancuernas","t":"fuerza","g":"Pecho","s":["Hombro","Tríceps"],"e":"Mancuernas","p":["Acuéstate en el banco con una mancuerna en cada mano a la altura del pecho.","Empuja hacia arriba hasta estirar los brazos, acercando las mancuernas sin chocarlas.","Baja despacio hasta que los codos queden un poco por debajo del banco."]},{"id":"inclinado","n":"Press inclinado con mancuernas","t":"fuerza","g":"Pecho","s":["Hombro","Tríceps"],"e":"Mancuernas","p":["Ajusta el banco entre 30 y 45 grados y siéntate con una mancuerna en cada mano a la altura de los hombros.","Empuja hacia arriba hasta estirar los brazos sobre la parte alta del pecho.","Baja controlado hasta sentir el estiramiento en el pecho."]},{"id":"inclinadobarra","n":"Press inclinado con barra","t":"fuerza","g":"Pecho","s":["Hombro","Tríceps"],"e":"Barra","p":["Acuéstate en el banco inclinado y saca la barra con los brazos estirados.","Baja la barra hasta la parte alta del pecho, con los codos un poco hacia abajo.","Empuja hasta estirar los brazos sin rebotar la barra en el pecho."]},{"id":"aperturas","n":"Aperturas en polea","t":"fuerza","g":"Pecho","s":["Hombro"],"e":"Polea","p":["Párate en el centro de las poleas altas con un agarre en cada mano y un pie adelante.","Con los codos un poco doblados, junta las manos frente al pecho haciendo un arco.","Regresa despacio hasta sentir el estiramiento del pecho."]},{"id":"aperturasmanc","n":"Aperturas con mancuernas","t":"fuerza","g":"Pecho","s":[],"e":"Mancuernas","p":["Acuéstate en el banco con las mancuernas arriba del pecho y los codos un poco doblados.","Abre los brazos en arco hasta que las manos queden a la altura del pecho.","Cierra el arco hasta volver arriba, sin cambiar el ángulo de los codos."]},{"id":"fondos","n":"Fondos en paralelas","t":"fuerza","g":"Pecho","s":["Hombro","Tríceps"],"e":"Peso corporal","p":["Sujétate en las paralelas con los brazos estirados y el torso un poco inclinado hacia adelante.","Baja doblando los codos hasta que los hombros queden a la altura de los codos.","Empuja hasta estirar los brazos de nuevo."]},{"id":"flexiones","n":"Flexiones de pecho","t":"fuerza","g":"Pecho","s":["Hombro","Tríceps","Core"],"e":"Peso corporal","p":["Apoya las manos en el piso un poco más abiertas que los hombros, con el cuerpo recto de cabeza a talones.","Baja el pecho hasta casi tocar el piso, con los codos a unos 45 grados del cuerpo.","Empuja hasta estirar los brazos sin dejar caer la cadera."]},{"id":"pecdeck","n":"Pec deck","t":"fuerza","g":"Pecho","s":[],"e":"Máquina","p":["Siéntate con la espalda pegada al respaldo y los brazos en las almohadillas o agarres.","Junta los brazos al frente apretando el pecho.","Abre despacio hasta sentir el estiramiento, sin pasar la línea de los hombros."]},{"id":"pullover","n":"Pullover con mancuerna","t":"fuerza","g":"Pecho","s":["Espalda","Tríceps"],"e":"Mancuernas","p":["Acuéstate en el banco sosteniendo una mancuerna con ambas manos sobre el pecho.","Lleva la mancuerna hacia atrás de la cabeza en arco, con los codos un poco doblados.","Regresa por el mismo arco hasta quedar sobre el pecho."]},{"id":"dominadas","n":"Dominadas","t":"fuerza","g":"Espalda","s":["Bíceps"],"e":"Peso corporal","p":["Cuélgate de la barra con las palmas hacia adelante, un poco más ancho que los hombros.","Sube llevando el pecho hacia la barra hasta que la barbilla la pase.","Baja controlado hasta casi estirar los brazos."]},{"id":"remo","n":"Remo con barra","t":"fuerza","g":"Espalda","s":["Bíceps","Hombro"],"e":"Barra","p":["De pie con la barra, dobla un poco las rodillas e inclina el torso hacia adelante con la espalda recta.","Lleva la barra hacia el abdomen juntando los omóplatos.","Baja la barra controlada hasta estirar los brazos."]},{"id":"remoinclmanc","n":"Remo inclinado con mancuernas","t":"fuerza","g":"Espalda","s":["Bíceps","Hombro"],"e":"Mancuernas","p":["De pie con una mancuerna en cada mano, dobla un poco las rodillas e inclina el torso hacia adelante con la espalda recta.","Sube las mancuernas hacia la cintura llevando los codos atrás y juntando los omóplatos.","Baja controlado hasta estirar los brazos, sin redondear la espalda."]},{"id":"remomanc","n":"Remo con mancuerna a una mano","t":"fuerza","g":"Espalda","s":["Bíceps"],"e":"Mancuernas","p":["Apoya una rodilla y una mano en el banco, con la espalda paralela al piso.","Sube la mancuerna hacia la cadera llevando el codo hacia atrás.","Baja despacio hasta estirar el brazo y cambia de lado al terminar la serie."]},{"id":"renegade","n":"Remo renegado","t":"fuerza","g":"Espalda","s":["Core","Bíceps"],"e":"Mancuernas","p":["Ponte en plancha alta con las manos sobre dos mancuernas y los pies un poco más abiertos que la cadera.","Sube una mancuerna hacia la cadera sin girar el cuerpo, con el abdomen y los glúteos apretados.","Bájala controlado y alterna con el otro brazo. Cuenta las repeticiones por lado."]},{"id":"jalon","n":"Jalón al pecho","t":"fuerza","g":"Espalda","s":["Bíceps"],"e":"Polea","p":["Siéntate con los muslos bajo los soportes y agarra la barra más ancho que los hombros.","Lleva la barra hacia la parte alta del pecho, sacando el pecho y bajando los hombros.","Sube la barra despacio hasta estirar los brazos."]},{"id":"jaloncuerda","n":"Jalón con cuerda","t":"fuerza","g":"Espalda","s":["Bíceps"],"e":"Polea","p":["Pon la cuerda en la polea alta y siéntate en el piso de frente a la máquina, con las piernas estiradas hacia ella y los talones apoyados. Agarra la cuerda con las palmas enfrentadas y el torso inclinado un poco hacia adelante.","Jala la cuerda hacia la parte alta del pecho llevando los codos abajo y atrás, pegados a los costados; saca el pecho, junta los omóplatos y deja que el torso se incline apenas hacia atrás.","Vuelve despacio hasta estirar los brazos hacia la polea sin soltar la tensión en la espalda ni encorvarte."]},{"id":"remopolea","n":"Remo sentado en polea","t":"fuerza","g":"Espalda","s":["Bíceps"],"e":"Polea","p":["Siéntate con los pies apoyados y las rodillas un poco dobladas, agarrando el maneral.","Lleva el maneral hacia el abdomen con la espalda recta y los omóplatos juntos.","Regresa despacio estirando los brazos sin encorvar la espalda."]},{"id":"pesomuerto","n":"Peso muerto","t":"fuerza","g":"Espalda","s":["Isquios","Glúteo","Cuádriceps"],"e":"Barra","p":["Párate con la barra sobre la mitad del pie y agárrala con los brazos por fuera de las piernas.","Con la espalda recta, empuja el piso con las piernas y sube la barra pegada al cuerpo hasta quedar de pie.","Baja la barra controlada, primero llevando la cadera atrás y luego doblando las rodillas."]},{"id":"hiperext","n":"Hiperextensiones","t":"fuerza","g":"Espalda","s":["Glúteo","Isquios"],"e":"Máquina","p":["Acomódate en el banco con la cadera sobre el apoyo y los pies trabados.","Baja el torso doblando la cadera, con la espalda recta.","Sube hasta que el cuerpo quede en línea recta, sin pasarte hacia atrás."]},{"id":"militar","n":"Press militar con barra","t":"fuerza","g":"Hombro","s":["Tríceps"],"e":"Barra","p":["De pie, sostén la barra a la altura de los hombros con un agarre un poco más ancho que ellos.","Empuja la barra sobre la cabeza hasta estirar los brazos, apretando abdomen y glúteos.","Baja la barra controlada hasta la altura de la barbilla."]},{"id":"pressmanc","n":"Press de hombro con mancuernas","t":"fuerza","g":"Hombro","s":["Tríceps"],"e":"Mancuernas","p":["Siéntate con la espalda apoyada y una mancuerna en cada mano a la altura de los hombros.","Empuja hacia arriba hasta estirar los brazos sobre la cabeza.","Baja despacio hasta la altura de las orejas."]},{"id":"arnold","n":"Press Arnold","t":"fuerza","g":"Hombro","s":["Tríceps"],"e":"Mancuernas","p":["Siéntate con las mancuernas frente a los hombros y las palmas mirando hacia ti.","Empuja hacia arriba mientras giras las palmas hacia el frente.","Baja deshaciendo el giro hasta la posición inicial."]},{"id":"laterales","n":"Elevaciones laterales","t":"fuerza","g":"Hombro","s":[],"e":"Mancuernas","p":["De pie, con una mancuerna en cada mano a los lados del cuerpo y los codos un poco doblados.","Sube los brazos hacia los lados hasta la altura de los hombros.","Baja despacio sin balancear el cuerpo."]},{"id":"frontales","n":"Elevaciones frontales","t":"fuerza","g":"Hombro","s":[],"e":"Mancuernas","p":["De pie, con las mancuernas frente a los muslos.","Sube los brazos al frente hasta la altura de los hombros.","Baja controlado y repite."]},{"id":"facepull","n":"Face pull","t":"fuerza","g":"Hombro","s":["Espalda"],"e":"Polea","p":["Pon la polea a la altura de la cara con una cuerda y agárrala con las palmas hacia adentro.","Jala la cuerda hacia la cara separando las manos y llevando los codos atrás y arriba.","Regresa despacio hasta estirar los brazos."]},{"id":"pajaros","n":"Pájaros con mancuernas","t":"fuerza","g":"Hombro","s":["Espalda"],"e":"Mancuernas","p":["Acuéstate boca abajo en un banco inclinado con una mancuerna en cada mano y los brazos colgando.","Abre los brazos hacia los lados con los codos un poco doblados, juntando los omóplatos.","Baja despacio sin impulso."]},{"id":"curlbarra","n":"Curl con barra","t":"fuerza","g":"Bíceps","s":[],"e":"Barra","p":["De pie, sostén la barra con las palmas hacia adelante y los codos pegados al cuerpo.","Sube la barra doblando los codos hasta la altura de los hombros.","Baja despacio hasta estirar los brazos, sin balancear el torso."]},{"id":"curlmanc","n":"Curl con mancuernas","t":"fuerza","g":"Bíceps","s":[],"e":"Mancuernas","p":["De pie, con una mancuerna en cada mano y los brazos estirados a los lados.","Sube las mancuernas girando las palmas hacia arriba, con los codos quietos.","Baja controlado hasta estirar los brazos."]},{"id":"martillo","n":"Curl martillo","t":"fuerza","g":"Bíceps","s":[],"e":"Mancuernas","p":["De pie, con las mancuernas a los lados y las palmas mirando hacia el cuerpo.","Sube las mancuernas sin girar las muñecas, con los codos pegados.","Baja despacio hasta estirar los brazos."]},{"id":"predicador","n":"Curl predicador","t":"fuerza","g":"Bíceps","s":[],"e":"Barra","p":["Siéntate en el banco predicador con la parte de atrás de los brazos apoyada en el cojín.","Sube la barra doblando los codos hasta la altura de los hombros.","Baja despacio casi hasta estirar los brazos."]},{"id":"curlpolea","n":"Curl en polea","t":"fuerza","g":"Bíceps","s":[],"e":"Polea","p":["Párate frente a la polea baja con la barra agarrada con las palmas hacia arriba.","Sube la barra doblando los codos, sin moverlos de los costados.","Baja despacio hasta estirar los brazos."]},{"id":"extpolea","n":"Extensión de tríceps en polea","t":"fuerza","g":"Tríceps","s":[],"e":"Polea","p":["Párate frente a la polea alta con la barra agarrada y los codos pegados al cuerpo.","Empuja la barra hacia abajo hasta estirar los brazos.","Sube despacio hasta que los antebrazos queden paralelos al piso."]},{"id":"extcuerda","n":"Extensión de tríceps con cuerda","t":"fuerza","g":"Tríceps","s":[],"e":"Polea","p":["Agarra la cuerda de la polea alta con los codos pegados al cuerpo.","Empuja hacia abajo y separa las puntas de la cuerda al final.","Sube despacio sin despegar los codos."]},{"id":"patadatri","n":"Patada de tríceps en polea","t":"fuerza","g":"Tríceps","s":[],"e":"Polea","p":["Pon la cuerda en la polea a la altura del pecho, agárrala con las dos manos e inclina el torso hacia adelante con la espalda recta.","Pega los codos al cuerpo y estira los brazos hacia atrás hasta dejarlos rectos, abriendo un poco la cuerda al final.","Regresa despacio doblando solo los codos, sin mover los hombros."]},{"id":"frances","n":"Press francés","t":"fuerza","g":"Tríceps","s":[],"e":"Barra EZ","p":["Acuéstate en el banco con la barra EZ arriba del pecho y los brazos estirados.","Dobla solo los codos para bajar la barra hacia la frente.","Estira los brazos de nuevo sin mover los codos."]},{"id":"extnuca","n":"Extensión sobre la cabeza con mancuerna","t":"fuerza","g":"Tríceps","s":[],"e":"Mancuernas","p":["De pie, sostén una mancuerna con ambas manos sobre la cabeza y los brazos estirados.","Baja la mancuerna detrás de la cabeza doblando los codos.","Estira los brazos de nuevo con los codos apuntando hacia arriba."]},{"id":"fondosbanco","n":"Fondos en banco","t":"fuerza","g":"Tríceps","s":["Pecho","Hombro"],"e":"Peso corporal","p":["Apoya las manos en el borde de un banco detrás de ti y estira las piernas al frente.","Baja el cuerpo doblando los codos hasta unos 90 grados.","Empuja hasta estirar los brazos."]},{"id":"bancacerrado","n":"Press de banca agarre cerrado","t":"fuerza","g":"Tríceps","s":["Pecho","Hombro"],"e":"Barra","p":["Acuéstate en el banco y agarra la barra con las manos al ancho de los hombros.","Baja la barra hacia la parte baja del pecho con los codos pegados al cuerpo.","Empuja hasta estirar los brazos."]},{"id":"sentadilla","n":"Sentadilla con barra","t":"fuerza","g":"Cuádriceps","s":["Glúteo","Isquios"],"e":"Barra","p":["Pon la barra sobre la parte alta de la espalda y párate con los pies al ancho de los hombros.","Baja llevando la cadera atrás y abajo hasta que los muslos queden paralelos al piso o un poco más.","Sube empujando el piso con todo el pie y el pecho arriba."]},{"id":"frontal","n":"Sentadilla frontal","t":"fuerza","g":"Cuádriceps","s":["Glúteo"],"e":"Barra","p":["Apoya la barra sobre la parte delantera de los hombros con los codos altos.","Baja con el torso lo más vertical posible hasta pasar la línea paralela.","Sube manteniendo los codos arriba."]},{"id":"goblet","n":"Sentadilla goblet","t":"fuerza","g":"Cuádriceps","s":["Glúteo"],"e":"Kettlebell","p":["Sostén una kettlebell o una mancuerna pegada al pecho con ambas manos.","Baja en sentadilla con los codos entre las rodillas y la espalda recta.","Sube empujando con los talones."]},{"id":"prensa","n":"Prensa","t":"fuerza","g":"Cuádriceps","s":["Glúteo","Isquios"],"e":"Máquina","p":["Siéntate en la prensa con los pies en la plataforma al ancho de los hombros.","Suelta los seguros y baja la plataforma doblando las rodillas hasta unos 90 grados.","Empuja hasta casi estirar las piernas, sin bloquear las rodillas."]},{"id":"hack","n":"Sentadilla hack","t":"fuerza","g":"Cuádriceps","s":["Glúteo"],"e":"Máquina","p":["Apoya la espalda y los hombros en la máquina, con los pies al ancho de los hombros.","Suelta los seguros y baja hasta que las rodillas queden a unos 90 grados.","Empuja hasta casi estirar las piernas."]},{"id":"zancadas","n":"Zancadas","t":"fuerza","g":"Cuádriceps","s":["Glúteo","Isquios"],"e":"Mancuernas","p":["De pie, con una mancuerna en cada mano a los lados.","Da un paso largo al frente y baja hasta que la rodilla de atrás casi toque el piso.","Empuja con la pierna de adelante para volver y alterna."]},{"id":"zancadaatras","n":"Zancada hacia atrás","t":"fuerza","g":"Cuádriceps","s":["Glúteo","Isquios"],"e":"Mancuernas","p":["De pie, con una mancuerna en cada mano a los lados del cuerpo.","Da un paso largo hacia atrás y baja hasta que la rodilla de atrás casi toque el piso, con el torso erguido.","Empuja con el talón de la pierna de adelante para volver a la posición inicial y alterna de pierna."]},{"id":"dividida","n":"Sentadilla dividida","t":"fuerza","g":"Cuádriceps","s":["Glúteo"],"e":"Mancuernas","p":["Párate con un pie adelante y otro atrás, una mancuerna en cada mano.","Baja en línea recta hasta que la rodilla de atrás casi toque el piso.","Sube empujando con la pierna de adelante. Termina la serie y cambia de lado."]},{"id":"extcuad","n":"Extensión de cuádriceps","t":"fuerza","g":"Cuádriceps","s":[],"e":"Máquina","p":["Siéntate en la máquina con los tobillos detrás del rodillo.","Estira las piernas hasta que queden rectas, apretando los cuádriceps.","Baja despacio sin dejar caer el peso."]},{"id":"pmr","n":"Peso muerto rumano","t":"fuerza","g":"Isquios","s":["Glúteo"],"e":"Barra","p":["De pie con la barra en las manos y las rodillas un poco dobladas.","Lleva la cadera atrás y baja la barra pegada a las piernas hasta sentir el estiramiento detrás del muslo.","Sube empujando la cadera al frente, con la espalda recta todo el tiempo."]},{"id":"pmr1","n":"Peso muerto rumano a una pierna","t":"fuerza","g":"Isquios","s":["Glúteo"],"e":"Mancuernas","p":["De pie sobre una pierna, con una mancuerna en la mano del lado contrario y la rodilla de apoyo un poco doblada.","Lleva la cadera atrás e inclina el torso mientras la otra pierna sube estirada hacia atrás, hasta que el torso quede casi paralelo al piso.","Sube apretando el glúteo de la pierna de apoyo, sin girar la cadera. Termina la serie y cambia de pierna."]},{"id":"femoral","n":"Curl femoral acostado","t":"fuerza","g":"Isquios","s":[],"e":"Máquina","p":["Acuéstate boca abajo en la máquina con los tobillos bajo el rodillo.","Dobla las rodillas llevando los talones hacia los glúteos.","Baja despacio sin despegar la cadera del banco."]},{"id":"femoralsent","n":"Curl femoral sentado","t":"fuerza","g":"Isquios","s":[],"e":"Máquina","p":["Siéntate con los tobillos sobre el rodillo y el soporte ajustado sobre los muslos.","Dobla las rodillas llevando el rodillo hacia abajo y atrás.","Regresa despacio."]},{"id":"buenosdias","n":"Buenos días","t":"fuerza","g":"Isquios","s":["Glúteo","Espalda"],"e":"Barra","p":["Pon la barra sobre la parte alta de la espalda, con los pies al ancho de la cadera y las rodillas un poco dobladas.","Inclina el torso llevando la cadera atrás, con la espalda recta, hasta casi quedar paralelo al piso.","Sube empujando la cadera al frente."]},{"id":"bulgara","n":"Sentadilla búlgara","t":"fuerza","g":"Glúteo","s":["Cuádriceps","Isquios"],"e":"Mancuernas","p":["Párate de espaldas a la banca, a unos dos pasos, y apoya el empeine del pie de atrás sobre ella. Sostén una sola mancuerna en una mano, con el brazo estirado al costado.","Con el torso un poco inclinado hacia adelante, baja hasta que el muslo de adelante quede paralelo al piso.","Sube empujando con el talón de adelante. Termina la serie y cambia de pierna: las repeticiones se cuentan por pierna y los kilos son los de esa mancuerna."]},{"id":"hipthrust","n":"Hip thrust","t":"fuerza","g":"Glúteo","s":["Isquios"],"e":"Barra","p":["Apoya la parte alta de la espalda en un banco con la barra sobre la cadera.","Empuja con los talones y sube la cadera hasta que el torso quede paralelo al piso.","Aprieta los glúteos arriba y baja controlado."]},{"id":"puente","n":"Puente de glúteo con barra","t":"fuerza","g":"Glúteo","s":["Isquios"],"e":"Barra","p":["Acuéstate en el piso con las rodillas dobladas y la barra sobre la cadera.","Sube la cadera empujando con los talones hasta alinear rodillas, cadera y hombros.","Baja despacio sin apoyar del todo los glúteos."]},{"id":"patada","n":"Patada de glúteo en polea","t":"fuerza","g":"Glúteo","s":["Isquios"],"e":"Polea","p":["Engancha la tobillera a la polea baja y sujétate de la máquina.","Lleva la pierna hacia atrás con la rodilla casi estirada, apretando el glúteo.","Regresa despacio y cambia de pierna al terminar la serie."]},{"id":"abductora","n":"Abducción en máquina","t":"fuerza","g":"Glúteo","s":[],"e":"Máquina","p":["Siéntate en la máquina con las almohadillas por fuera de las rodillas.","Abre las piernas hacia afuera empujando las almohadillas.","Cierra despacio sin dejar que las pesas choquen."]},{"id":"pantorrilla","n":"Pantorrilla de pie","t":"fuerza","g":"Pantorrilla","s":[],"e":"Máquina","p":["Ponte bajo las almohadillas con las puntas de los pies en el borde de la plataforma.","Sube en puntas de pie lo más alto que puedas.","Baja despacio hasta que los talones queden por debajo de la plataforma."]},{"id":"pantorrillasent","n":"Pantorrilla sentado","t":"fuerza","g":"Pantorrilla","s":[],"e":"Máquina","p":["Siéntate con las rodillas bajo la almohadilla y las puntas de los pies en la plataforma.","Sube los talones lo más alto que puedas.","Baja despacio hasta sentir el estiramiento."]},{"id":"plancha","n":"Plancha","t":"fuerza","g":"Core","s":["Hombro"],"e":"Peso corporal","p":["Apoya los antebrazos en el piso con los codos bajo los hombros.","Estira las piernas y sostén el cuerpo recto de cabeza a talones.","Mantén la posición el tiempo indicado, apretando abdomen y glúteos."]},{"id":"planchalat","n":"Plancha lateral","t":"fuerza","g":"Core","s":["Hombro"],"e":"Peso corporal","p":["Acuéstate de lado apoyado en un antebrazo, con el codo bajo el hombro.","Sube la cadera hasta que el cuerpo quede recto.","Mantén la posición y cambia de lado."]},{"id":"elevpiernas","n":"Elevaciones de piernas","t":"fuerza","g":"Core","s":[],"e":"Peso corporal","p":["Acuéstate boca arriba en un banco y sujétate del borde detrás de la cabeza.","Sube las piernas estiradas hasta que queden verticales.","Bájalas despacio sin tocar el banco."]},{"id":"elevcolgado","n":"Elevaciones de piernas colgado","t":"fuerza","g":"Core","s":[],"e":"Peso corporal","p":["Cuélgate de una barra con los brazos estirados.","Sube las piernas al frente hasta la altura de la cadera o más, sin balancearte.","Bájalas despacio."]},{"id":"crunch","n":"Abdominales crunch","t":"fuerza","g":"Core","s":[],"e":"Peso corporal","p":["Acuéstate boca arriba con las rodillas dobladas y las manos junto a la cabeza.","Despega los hombros del piso contrayendo el abdomen.","Baja despacio sin jalar el cuello."]},{"id":"crunchpolea","n":"Crunch en polea","t":"fuerza","g":"Core","s":[],"e":"Polea","p":["Arrodíllate frente a la polea alta sosteniendo la cuerda junto a la cabeza.","Flexiona el tronco llevando los codos hacia los muslos.","Regresa despacio sin mover la cadera."]},{"id":"rueda","n":"Rueda abdominal","t":"fuerza","g":"Core","s":["Hombro"],"e":"Rueda","p":["Arrodíllate en el piso sosteniendo la rueda frente a ti.","Rueda hacia adelante estirando el cuerpo lo más que puedas sin arquear la espalda.","Regresa usando el abdomen."]},{"id":"russian","n":"Giro ruso","t":"fuerza","g":"Core","s":[],"e":"Peso corporal","p":["Siéntate con las rodillas dobladas y el torso inclinado hacia atrás.","Gira el torso de un lado al otro llevando las manos o un peso hacia cada lado.","Mantén el abdomen apretado durante todo el movimiento."]},{"id":"pullthrough","n":"Pull-through en polea","t":"fuerza","g":"Glúteo","s":["Isquios"],"e":"Polea","p":["Pon la cuerda en la polea baja y párate de espaldas a la máquina, con la cuerda entre las piernas y los pies un poco más abiertos que la cadera.","Da dos pasos al frente y lleva la cadera atrás con la espalda recta, dejando que la cuerda pase entre las piernas.","Sube empujando la cadera al frente y aprieta los glúteos arriba, sin jalar con los brazos."]},{"id":"pmrmanc","n":"Peso muerto rumano con mancuernas","t":"fuerza","g":"Isquios","s":["Glúteo"],"e":"Mancuernas","p":["De pie con una mancuerna en cada mano frente a los muslos y las rodillas un poco dobladas.","Lleva la cadera atrás y baja las mancuernas pegadas a las piernas hasta sentir el estiramiento detrás del muslo.","Sube empujando la cadera al frente, con la espalda recta todo el tiempo."]},{"id":"stepup","n":"Subida al banco con mancuernas","t":"fuerza","g":"Cuádriceps","s":["Glúteo"],"e":"Mancuernas","p":["Párate frente a un banco o cajón con una mancuerna en cada mano.","Apoya un pie completo en el banco y sube empujando con ese talón hasta quedar de pie arriba.","Baja controlado con la misma pierna. Termina la serie y cambia de pierna."]},{"id":"puente1p","n":"Puente de glúteo a una pierna","t":"fuerza","g":"Glúteo","s":["Isquios"],"e":"Peso corporal","p":["Acuéstate boca arriba con una rodilla doblada y el pie en el piso, y la otra pierna estirada hacia arriba.","Sube la cadera empujando con el talón de apoyo hasta alinear rodilla, cadera y hombros.","Baja despacio sin apoyar del todo. Termina la serie y cambia de pierna."]},{"id":"remoinvertido","n":"Remo invertido","t":"fuerza","g":"Espalda","s":["Bíceps"],"e":"Peso corporal","p":["Pon la barra en el rack a la altura de la cintura y cuélgate debajo, con los talones en el piso y el cuerpo recto.","Jala el pecho hacia la barra juntando los omóplatos.","Baja controlado hasta estirar los brazos. Entre más horizontal quede el cuerpo, más difícil."]},{"id":"flexdeclinadas","n":"Flexiones con pies elevados","t":"fuerza","g":"Pecho","s":["Hombro","Tríceps"],"e":"Peso corporal","p":["Apoya los pies en un banco o cajón y las manos en el piso, un poco más abiertas que los hombros.","Baja el pecho hasta casi tocar el piso, con el cuerpo recto de cabeza a talones.","Empuja hasta estirar los brazos sin dejar caer la cadera."]},{"id":"curlcuerda","n":"Curl martillo con cuerda en polea","t":"fuerza","g":"Bíceps","s":[],"e":"Polea","p":["Pon la cuerda en la polea baja y agárrala con las palmas enfrentadas.","Sube la cuerda doblando los codos, sin moverlos de los costados.","Baja despacio hasta estirar los brazos."]},{"id":"deadbug","n":"Dead bug","t":"fuerza","g":"Core","s":[],"e":"Peso corporal","p":["Acuéstate boca arriba con los brazos estirados hacia el techo y las rodillas dobladas a 90 grados sobre la cadera.","Baja al tiempo un brazo hacia atrás y la pierna contraria hasta casi tocar el piso, con la espalda baja pegada al piso.","Regresa y alterna de lado. Cuenta las repeticiones por lado."]},{"id":"trote","n":"Trote","t":"cardio","g":"Cardio","s":[],"e":"Exterior","p":["Calienta caminando unos minutos.","Trota a un ritmo en el que puedas hablar en frases cortas.","Termina caminando para bajar las pulsaciones."]},{"id":"correr","n":"Correr en caminadora","t":"cardio","g":"Cardio","s":[],"e":"Máquina","p":["Empieza caminando y sube la velocidad poco a poco.","Corre con pasos cortos y el cuerpo erguido, sin agarrarte de la máquina.","Baja la velocidad al final para enfriar."]},{"id":"caminadora","n":"Caminadora inclinada","t":"cardio","g":"Cardio","s":[],"e":"Máquina","p":["Sube la inclinación de la caminadora, por ejemplo entre 8 y 12 %.","Camina a paso firme sin agarrarte de los pasamanos.","Ajusta velocidad e inclinación para mantener la zona que buscas."]},{"id":"bici","n":"Bicicleta estática","t":"cardio","g":"Cardio","s":[],"e":"Máquina","p":["Ajusta el sillín para que la rodilla quede apenas doblada con el pedal abajo.","Pedalea a un ritmo constante con la resistencia que pida la sesión.","Baja la resistencia al final para enfriar."]},{"id":"eliptica","n":"Elíptica","t":"cardio","g":"Cardio","s":[],"e":"Máquina","p":["Súbete con los pies completos en los pedales y agarra los manubrios.","Mueve piernas y brazos a un ritmo constante, con el cuerpo erguido.","Ajusta la resistencia según la intensidad que buscas."]},{"id":"remoergo","n":"Remo ergómetro","t":"cardio","g":"Cardio","s":[],"e":"Máquina","p":["Siéntate y asegura los pies, con las rodillas dobladas y los brazos estirados.","Empuja primero con las piernas, luego inclina el torso atrás y termina jalando con los brazos.","Regresa en orden inverso: brazos, torso y piernas."]},{"id":"escaladora","n":"Escaladora","t":"cardio","g":"Cardio","s":[],"e":"Máquina","p":["Súbete y elige la velocidad o el nivel.","Sube los escalones apoyando todo el pie, con el cuerpo erguido.","Evita cargar el peso en los pasamanos."]},{"id":"lazo","n":"Saltar lazo","t":"cardio","g":"Cardio","s":[],"e":"Lazo","p":["Sostén el lazo con los codos cerca del cuerpo.","Gira el lazo con las muñecas y salta bajito en las puntas de los pies.","Mantén un ritmo que puedas sostener o haz intervalos."]}];
var LIBMAP = dict(); LIB.forEach(function(e){ LIBMAP[e.id] = e; });
/* alternativas recomendadas: mismo movimiento o mismo músculo, con una línea de para qué sirve cada una */
var ALT = {"banca":[{"id":"bancamanc","w":"Con mancuernas: más recorrido y cada brazo por su lado"},{"id":"inclinadobarra","w":"Más énfasis en la parte alta del pecho"},{"id":"fondos","w":"Sin banco: con el torso inclinado carga el pecho"},{"id":"flexiones","w":"Si no hay banco libre"}],"bancamanc":[{"id":"banca","w":"Con barra, permite más peso"},{"id":"inclinado","w":"Más énfasis en la parte alta del pecho"},{"id":"flexiones","w":"Sin equipo"}],"inclinado":[{"id":"inclinadobarra","w":"Lo mismo con barra, permite más peso"},{"id":"flexdeclinadas","w":"Sin equipo, también carga la parte alta"},{"id":"bancamanc","w":"Si el banco no se inclina"}],"inclinadobarra":[{"id":"inclinado","w":"Con mancuernas, más recorrido"},{"id":"banca","w":"Si el banco no se inclina"},{"id":"flexdeclinadas","w":"Sin equipo, también carga la parte alta"}],"aperturas":[{"id":"aperturasmanc","w":"Con mancuernas, si la polea está ocupada"},{"id":"pecdeck","w":"Si hay máquina"},{"id":"bancamanc","w":"Si quieres más carga"}],"aperturasmanc":[{"id":"aperturas","w":"En polea, tensión en todo el recorrido"},{"id":"pecdeck","w":"Si hay máquina"},{"id":"bancamanc","w":"Si quieres más carga"}],"fondos":[{"id":"flexiones","w":"Si llueve o no hay paralelas"},{"id":"flexdeclinadas","w":"Más difícil que la flexión normal"},{"id":"bancacerrado","w":"Con barra, trabaja pecho y tríceps"}],"flexiones":[{"id":"flexdeclinadas","w":"Más difícil, carga la parte alta"},{"id":"fondos","w":"Más carga para pecho y tríceps"},{"id":"bancamanc","w":"Con peso, para seguir progresando"}],"pecdeck":[{"id":"aperturasmanc","w":"Sin máquina"},{"id":"aperturas","w":"En polea"}],"pullover":[{"id":"aperturasmanc","w":"Más pecho"},{"id":"jaloncuerda","w":"Más espalda"}],"dominadas":[{"id":"jaloncuerda","w":"En polea, puedes ajustar el peso"},{"id":"remoinvertido","w":"Más fácil, con tu peso"},{"id":"jalon","w":"Si hay barra para la polea"}],"remo":[{"id":"remoinclmanc","w":"Con mancuernas, cada brazo por su lado"},{"id":"remomanc","w":"Apoyado en el banco, menos carga en la espalda baja"},{"id":"remoinvertido","w":"Sin peso, con tu cuerpo"}],"remoinclmanc":[{"id":"remo","w":"Con barra, permite más peso"},{"id":"remomanc","w":"Apoyado en el banco, menos carga en la espalda baja"},{"id":"remoinvertido","w":"Sin peso, con tu cuerpo"}],"remomanc":[{"id":"remoinclmanc","w":"Los dos brazos a la vez"},{"id":"remoinvertido","w":"Sin peso, con tu cuerpo"},{"id":"remopolea","w":"Si hay polea con maneral"}],"renegade":[{"id":"remomanc","w":"Más peso, sin el trabajo de core"},{"id":"remoinvertido","w":"Con tu peso"}],"jalon":[{"id":"jaloncuerda","w":"Con la cuerda, si no hay barra"},{"id":"dominadas","w":"Con tu peso"}],"jaloncuerda":[{"id":"dominadas","w":"Con tu peso, más exigente"},{"id":"jalon","w":"Con barra, si la hay"},{"id":"remoinvertido","w":"Si la polea está ocupada"}],"remopolea":[{"id":"remomanc","w":"Sin polea"},{"id":"remoinclmanc","w":"Sin polea, los dos brazos"},{"id":"remoinvertido","w":"Con tu peso"}],"pesomuerto":[{"id":"pmr","w":"Menos carga en la espalda baja, más isquios"},{"id":"hipthrust","w":"Glúteo sin carga en la espalda"},{"id":"pmrmanc","w":"Con mancuernas"}],"hiperext":[{"id":"buenosdias","w":"Con barra, sin máquina"},{"id":"pullthrough","w":"En polea, suave para la espalda baja"},{"id":"pmrmanc","w":"Con mancuernas"}],"militar":[{"id":"pressmanc","w":"Con mancuernas, sentado y con apoyo"},{"id":"arnold","w":"Más recorrido para el hombro"}],"pressmanc":[{"id":"militar","w":"Con barra, permite más peso"},{"id":"arnold","w":"Con giro, más recorrido"}],"arnold":[{"id":"pressmanc","w":"Sin giro, más fácil de cargar"},{"id":"militar","w":"Con barra, permite más peso"}],"laterales":[{"id":"arnold","w":"Press con giro, con más peso"},{"id":"pajaros","w":"Para la parte de atrás del hombro"}],"frontales":[{"id":"pressmanc","w":"Press, más carga para el hombro"},{"id":"laterales","w":"Para la parte lateral del hombro"}],"facepull":[{"id":"pajaros","w":"Sin polea, mismo músculo"},{"id":"remoinclmanc","w":"Con los codos abiertos carga la parte de atrás del hombro"}],"pajaros":[{"id":"facepull","w":"En polea con la cuerda"},{"id":"remoinclmanc","w":"Con los codos abiertos carga la parte de atrás del hombro"}],"curlbarra":[{"id":"curlmanc","w":"Cada brazo por su lado"},{"id":"martillo","w":"Agarre neutro, más antebrazo"},{"id":"curlcuerda","w":"En polea con la cuerda"}],"curlmanc":[{"id":"curlbarra","w":"Con barra, permite más peso"},{"id":"martillo","w":"Agarre neutro, más antebrazo"},{"id":"curlcuerda","w":"En polea con la cuerda"}],"martillo":[{"id":"curlcuerda","w":"Mismo agarre, tensión en todo el recorrido"},{"id":"curlmanc","w":"Con giro de muñeca"}],"predicador":[{"id":"curlbarra","w":"Sin banco predicador"},{"id":"curlmanc","w":"Con mancuernas"}],"curlpolea":[{"id":"curlcuerda","w":"Con la cuerda, si no hay barra"},{"id":"curlmanc","w":"Sin polea"}],"curlcuerda":[{"id":"martillo","w":"Con mancuernas, sin polea"},{"id":"curlmanc","w":"Con giro de muñeca"}],"extpolea":[{"id":"extcuerda","w":"Con la cuerda, si no hay barra"},{"id":"patadatri","w":"En polea, con el torso inclinado"},{"id":"extnuca","w":"Sin polea"}],"extcuerda":[{"id":"patadatri","w":"En la misma polea, a otra altura"},{"id":"extnuca","w":"Sin polea, con mancuerna"},{"id":"frances","w":"Con barra, acostado"}],"patadatri":[{"id":"extcuerda","w":"En la polea alta"},{"id":"extnuca","w":"Sin polea, con mancuerna"},{"id":"fondosbanco","w":"Sin equipo"}],"frances":[{"id":"extnuca","w":"Con mancuerna, de pie"},{"id":"extcuerda","w":"En polea"},{"id":"bancacerrado","w":"Más peso, también trabaja pecho"}],"extnuca":[{"id":"frances","w":"Con barra, acostado"},{"id":"extcuerda","w":"En polea"}],"fondosbanco":[{"id":"fondos","w":"Más difícil, en paralelas"},{"id":"extnuca","w":"Con mancuerna"}],"bancacerrado":[{"id":"fondos","w":"Con tu peso"},{"id":"frances","w":"Aislado, con barra"}],"sentadilla":[{"id":"frontal","w":"Torso más erguido, más cuádriceps"},{"id":"goblet","w":"Con mancuerna, si el rack está ocupado"},{"id":"bulgara","w":"Una pierna, poca carga en la espalda"}],"frontal":[{"id":"sentadilla","w":"Permite más peso"},{"id":"goblet","w":"Con mancuerna, si el rack está ocupado"}],"goblet":[{"id":"sentadilla","w":"Con barra, más peso"},{"id":"frontal","w":"Con barra, mismo énfasis"},{"id":"stepup","w":"Una pierna a la vez"}],"prensa":[{"id":"sentadilla","w":"Sin máquina"},{"id":"goblet","w":"Sin máquina, con mancuerna"},{"id":"bulgara","w":"Sin máquina, una pierna"}],"hack":[{"id":"frontal","w":"Sin máquina, mismo énfasis en cuádriceps"},{"id":"goblet","w":"Sin máquina, con mancuerna"}],"zancadas":[{"id":"zancadaatras","w":"Más suave para las rodillas"},{"id":"dividida","w":"Sin dar pasos, más estable"},{"id":"stepup","w":"Subiendo al banco"}],"zancadaatras":[{"id":"zancadas","w":"Hacia adelante, más cuádriceps"},{"id":"dividida","w":"Sin dar pasos, más estable"},{"id":"stepup","w":"Subiendo al banco"}],"dividida":[{"id":"bulgara","w":"Más difícil, con el pie de atrás en el banco"},{"id":"zancadaatras","w":"Con paso hacia atrás"},{"id":"stepup","w":"Subiendo al banco"}],"extcuad":[{"id":"goblet","w":"Sin máquina, mucho cuádriceps"},{"id":"stepup","w":"Sin máquina, una pierna"},{"id":"frontal","w":"Sin máquina, con barra"}],"stepup":[{"id":"bulgara","w":"Más difícil, más glúteo"},{"id":"zancadas","w":"Alternando piernas"}],"pmr":[{"id":"pmrmanc","w":"Con mancuernas, si la barra está ocupada"},{"id":"pmr1","w":"Una pierna, más equilibrio"},{"id":"buenosdias","w":"Con la barra en la espalda"}],"pmr1":[{"id":"pmrmanc","w":"Con las dos piernas, más estable"},{"id":"pmr","w":"Con barra, más peso"}],"pmrmanc":[{"id":"pmr","w":"Con barra, permite más peso"},{"id":"pmr1","w":"Una pierna, más equilibrio"},{"id":"buenosdias","w":"Con la barra en la espalda"}],"femoral":[{"id":"pmrmanc","w":"Sin máquina"},{"id":"pmr","w":"Sin máquina, con barra"}],"femoralsent":[{"id":"pmrmanc","w":"Sin máquina"},{"id":"pmr","w":"Sin máquina, con barra"}],"buenosdias":[{"id":"pullthrough","w":"Más suave para la espalda baja"},{"id":"pmrmanc","w":"Con mancuernas, sin barra en la espalda"},{"id":"pmr1","w":"Una pierna, poca carga en la espalda"}],"bulgara":[{"id":"dividida","w":"Más estable, los dos pies en el piso"},{"id":"zancadaatras","w":"Con paso hacia atrás"},{"id":"stepup","w":"Subiendo al banco"}],"hipthrust":[{"id":"puente","w":"En el piso, sin banco"},{"id":"puente1p","w":"Sin peso, una pierna"},{"id":"pullthrough","w":"En polea, de pie"}],"puente":[{"id":"hipthrust","w":"Más recorrido con el banco"},{"id":"puente1p","w":"Sin peso, una pierna"}],"patada":[{"id":"pullthrough","w":"En polea, de pie"},{"id":"puente1p","w":"Sin polea"}],"abductora":[{"id":"puente1p","w":"Sin máquina, también trabaja el costado del glúteo"}],"pullthrough":[{"id":"hipthrust","w":"Con barra, más carga"},{"id":"buenosdias","w":"Con barra en la espalda"},{"id":"pmrmanc","w":"Con mancuernas"}],"puente1p":[{"id":"puente","w":"Con barra, las dos piernas"},{"id":"hipthrust","w":"Con barra y banco, más carga"}],"pantorrilla":[{"id":"c_pantorrilla1p","w":"Sin máquina, con mancuerna en un escalón"},{"id":"pantorrillasent","w":"Sentado"}],"pantorrillasent":[{"id":"c_pantorrilla1p","w":"Sin máquina, con mancuerna en un escalón"},{"id":"pantorrilla","w":"De pie"}],"c_pantorrilla1p":[{"id":"pantorrilla","w":"Si hay máquina"},{"id":"pantorrillasent","w":"Sentado, si hay máquina"}],"plancha":[{"id":"deadbug","w":"Acostado, cuida la espalda baja"},{"id":"rueda","w":"Más difícil"},{"id":"planchalat","w":"Para los costados"}],"planchalat":[{"id":"plancha","w":"De frente"},{"id":"russian","w":"Costados, con giro"}],"elevpiernas":[{"id":"elevcolgado","w":"Más difícil, colgado de la barra"},{"id":"deadbug","w":"Más fácil"},{"id":"crunch","w":"Parte alta del abdomen"}],"elevcolgado":[{"id":"elevpiernas","w":"Más fácil, en el banco"},{"id":"rueda","w":"Abdomen completo"},{"id":"crunchpolea","w":"Con peso"}],"crunch":[{"id":"crunchpolea","w":"Con peso, para seguir progresando"},{"id":"deadbug","w":"Cuida la espalda baja"}],"crunchpolea":[{"id":"crunch","w":"Sin polea"},{"id":"rueda","w":"Sin polea, más difícil"},{"id":"elevcolgado","w":"Colgado de la barra"}],"rueda":[{"id":"plancha","w":"Más fácil, misma idea"},{"id":"deadbug","w":"Cuida la espalda baja"},{"id":"elevcolgado","w":"Colgado de la barra"}],"russian":[{"id":"planchalat","w":"Costados, sin giro"},{"id":"deadbug","w":"De frente"}],"deadbug":[{"id":"plancha","w":"Más difícil"},{"id":"elevpiernas","w":"Más difícil, en el banco"}],"remoinvertido":[{"id":"remomanc","w":"Con peso, apoyado en el banco"},{"id":"dominadas","w":"Más difícil"}],"flexdeclinadas":[{"id":"flexiones","w":"Más fácil"},{"id":"inclinado","w":"Con peso"}],"correr":[{"id":"caminadora","w":"Menos impacto para las rodillas"},{"id":"bici","w":"Sin impacto"},{"id":"eliptica","w":"Sin impacto, trabaja también los brazos"}],"trote":[{"id":"correr","w":"Bajo techo, en la caminadora"},{"id":"bici","w":"Sin impacto"}],"caminadora":[{"id":"correr","w":"Más intenso"},{"id":"bici","w":"Sin impacto"}],"bici":[{"id":"eliptica","w":"También trabaja los brazos"},{"id":"caminadora","w":"De pie, poco impacto"}],"eliptica":[{"id":"bici","w":"Sentado"},{"id":"caminadora","w":"Poco impacto"}]};
var MAIN = {sentadilla:1, banca:1, pmr:1, remo:1, pressmanc:1};
function altsOf(id){ return (own(ALT, id) ? ALT[id] : []).filter(function(a){ var e = exById(a.id); return !e.missing && !e.deleted; }); }
var GROUPS = ['Pecho','Espalda','Hombro','Bíceps','Tríceps','Cuádriceps','Isquios','Glúteo','Pantorrilla','Core'];
var EQUIPOS = ['Barra','Barra EZ','Mancuernas','Kettlebell','Máquina','Polea','Peso corporal','Banda elástica','Rueda','Lazo','Exterior','Otro'];
/* T04 (DEC-02): modalidad de carga de un propio de fuerza. Es independiente del equipo y fija desde que se crea: cambiarla
   reinterpretaría los registros anteriores. Un propio sin modalidad (creado antes) conserva la lectura por equipo de siempre */
var CARGAS = ['una', 'dos', 'barra', 'polea', 'corporal', 'otra'];
var CARGA_TXT = { una: 'Una mancuerna', dos: 'Dos mancuernas', barra: 'Barra', polea: 'Polea', corporal: 'Peso corporal', otra: 'Otra' };
var CARGA_FRASE = { una: 'una mancuerna', dos: 'dos mancuernas, peso total', barra: 'barra, peso total', polea: 'peso de la polea', corporal: 'peso corporal + carga añadida', otra: '' };
/* ejercicios del catálogo que se hacen a un lado: las reps se anotan por pierna o por brazo, sin duplicar kilos */
var UNI = { bulgara: 'pierna', zancadas: 'pierna', zancadaatras: 'pierna', dividida: 'pierna', stepup: 'pierna', pmr1: 'pierna', puente1p: 'pierna', remomanc: 'brazo' };
var ZONAS = ['Zona 1','Zona 2','Zona 3','Zona 4','Zona 5','Intervalos','Suave','Moderado','Fuerte'];
var DAYS = ['Lunes','Martes','Miércoles','Jueves','Viernes','Sábado','Domingo'];
var DSHORT = ['LUN','MAR','MIÉ','JUE','VIE','SÁB','DOM'];
var MONTHS = ['ene','feb','mar','abr','may','jun','jul','ago','sep','oct','nov','dic'];
var MONTHS_LONG = ['Enero','Febrero','Marzo','Abril','Mayo','Junio','Julio','Agosto','Septiembre','Octubre','Noviembre','Diciembre'];
var FIELDS = ['sets','reps','kg','rest','min','km','zona','note','g','hk','hr','sug'];
/* límites de entrada: un solo criterio para escribir, guardar, calcular y mostrar */
var MAX_SETS = 20, MAX_REPS = 999, MAX_KG = 1000;
/* gramáticas: claves de ítem como las genera uid(); documentos según la ruta de db; fotos como ids de assets */
var KEY_RE = /^[A-Za-z0-9_-]{1,64}$/, DOC_ID_RE = /^[A-Za-z0-9_.~:@+-]{1,200}$/, ASSET_RE = /^[A-Za-z0-9_-]{1,128}$/;
var TABS = [{id:'semana',label:'Semana',icon:'cal'},{id:'tipos',label:'Días tipo',icon:'layers'},{id:'ejercicios',label:'Ejercicios',icon:'dumbbell'},{id:'progreso',label:'Progreso',icon:'trend'}];
var RM = window.matchMedia && matchMedia('(prefers-reduced-motion: reduce)').matches;
var DESK = window.matchMedia ? matchMedia('(min-width: 1024px)') : {matches:false};

var I = {
  left:'<path d="m15 18-6-6 6-6"/>', right:'<path d="m9 18 6-6-6-6"/>',
  cal:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M3 10h18M8 3v4M16 3v4"/>',
  layers:'<path d="M12 3 3 8l9 5 9-5-9-5Z"/><path d="m3 13 9 5 9-5"/>',
  dumbbell:'<path d="M6.5 7v10M17.5 7v10M3.5 9.5v5M20.5 9.5v5M6.5 12h11"/>',
  hist:'<path d="M3 12a9 9 0 1 0 3-6.7L3 8"/><path d="M3 3v5h5"/><path d="M12 7v5l3 2"/>',
  plus:'<path d="M12 5v14M5 12h14"/>',
  grip:'<circle cx="9" cy="6" r="1"/><circle cx="15" cy="6" r="1"/><circle cx="9" cy="12" r="1"/><circle cx="15" cy="12" r="1"/><circle cx="9" cy="18" r="1"/><circle cx="15" cy="18" r="1"/>',
  trash:'<path d="M4 7h16M10 11v6M14 11v6M6 7l1 13h10l1-13M9 7V4h6v3"/>',
  pencil:'<path d="M4 20h4L19 9l-4-4L4 16v4Z"/>',
  search:'<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/>',
  copy:'<rect x="8" y="8" width="12" height="12" rx="2"/><path d="M16 8V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2"/>',
  save:'<path d="M6 3h12v18l-6-4-6 4V3Z"/>',
  expand:'<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>',
  image:'<rect x="3" y="4" width="18" height="16" rx="2"/><circle cx="9" cy="10" r="2"/><path d="m21 17-5-5-9 8"/>',
  trend:'<path d="m3 17 6-6 4 4 8-8"/><path d="M14 7h7v7"/>',
  disc:'<circle cx="12" cy="12" r="9"/><circle cx="12" cy="12" r="2.5"/>',
  swap:'<path d="M4 8h13l-3.5-3.5M20 16H7l3.5 3.5"/>',
  cycle:'<path d="M21 12a9 9 0 1 1-3-6.7"/><path d="M21 3v5h-5"/>',
  timer:'<circle cx="12" cy="13" r="8"/><path d="M12 9v4l2.5 2"/><path d="M9 2h6"/>',
  check:'<path d="m5 12 5 5L20 7"/>',
  x:'<path d="M6 6l12 12M18 6 6 18"/>',
  up:'<path d="m6 15 6-6 6 6"/>',
  down:'<path d="m6 9 6 6 6-6"/>',
  scale:'<rect x="3" y="3" width="18" height="18" rx="4"/><path d="M8 9a4 4 0 0 1 8 0"/><path d="m12 9 1.5-2"/>'
};
function ic(n, s, w){ s = s || 20; w = w || 1.8; return '<svg width="'+s+'" height="'+s+'" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="'+w+'" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+I[n]+'</svg>'; }
function esc(s){ return String(s == null ? '' : s).replace(/[&<>"']/g, function(c){ return {'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]; }); }
function uid(){ return Date.now().toString(36) + Math.random().toString(36).slice(2, 7); }
function num(s){ var n = parseFloat(String(s == null ? '' : s).replace(',', '.')); return isFinite(n) ? n : 0; }
function int(s){ var n = parseInt(String(s == null ? '' : s), 10); return isFinite(n) ? n : 0; }
function fmtNum(n){ return Number.isInteger(n) ? String(n) : n.toFixed(1).replace('.', ','); }
function norm(s){ return String(s || '').toLowerCase().normalize('NFD').replace(/[̀-ͯ]/g, ''); }
function clone(o){ return JSON.parse(JSON.stringify(o)); }
/* mapas sin prototipo: un id como "constructor" o "__proto__" no puede apuntar a otra cosa */
function dict(){ return Object.create(null); }
function own(o, k){ return o != null && Object.prototype.hasOwnProperty.call(o, k); }
function isObj(o){ return !!o && typeof o === 'object' && !Array.isArray(o); }
function isStrList(a){ return Array.isArray(a) && a.every(function(x){ return typeof x === 'string'; }); }
function strList(a){ return Array.isArray(a) ? a.filter(function(x){ return typeof x === 'string'; }) : []; }
function short(s){ s = String(s); return s.length > 60 ? s.slice(0, 60) + '…' : s; }
function hash36(s){ s = String(s); var h = 2166136261; for (var i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(36); }
function cssEsc(s){ s = String(s); return window.CSS && CSS.escape ? CSS.escape(s) : s.replace(/[^A-Za-z0-9_-]/g, '\\$&'); }
/* claves de ítem en ids del DOM: una clave fuera de la gramática nunca entra tal cual */
function domId(k){ k = String(k); return KEY_RE.test(k) ? k : 'x' + hash36(k); }
function fid(k, p){ return 'f-' + domId(k) + '-' + p; }
function docIdOk(id){ return typeof id === 'string' && DOC_ID_RE.test(id) && id !== '.' && id !== '..'; }

/* fechas */
function pad(n){ return String(n).padStart(2, '0'); }
function iso(d){ return d.getFullYear() + '-' + pad(d.getMonth() + 1) + '-' + pad(d.getDate()); }
function parseIso(s){ var p = s.split('-').map(Number); return new Date(p[0], p[1] - 1, p[2]); }
function addDays(d, n){ var x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); x.setDate(x.getDate() + n); return x; }
function monday(d){ var x = new Date(d.getFullYear(), d.getMonth(), d.getDate()); x.setDate(x.getDate() - ((x.getDay() + 6) % 7)); return x; }
/* T04 (L-04): hoy y la semana actual se calculan en America/Bogota. Las fechas guardadas son días civiles (AAAA-MM-DD) y
   no se desplazan; los instantes de auditoría siguen en UTC (toISOString). Sin datos de zona se usa el desfase fijo de
   Bogotá, que no tiene horario de verano */
var BOG_FMT = null;
try { BOG_FMT = new Intl.DateTimeFormat('en-CA', { timeZone: 'America/Bogota', year: 'numeric', month: '2-digit', day: '2-digit' }); } catch (e) { BOG_FMT = null; }
function todayIso(){
  var now = new Date();
  if (BOG_FMT) { try { var p = {}; BOG_FMT.formatToParts(now).forEach(function(x){ p[x.type] = x.value; }); if (/^\d{4}$/.test(p.year) && /^\d{2}$/.test(p.month) && /^\d{2}$/.test(p.day)) return p.year + '-' + p.month + '-' + p.day; } catch (e) {} }
  var b = new Date(now.getTime() - 5 * 3600000); return b.getUTCFullYear() + '-' + pad(b.getUTCMonth() + 1) + '-' + pad(b.getUTCDate());
}
function curMonday(){ return iso(monday(parseIso(todayIso()))); }
function shiftWeek(ws, n){ return iso(addDays(parseIso(ws), 7 * n)); }
function defaultWeek(){ return curMonday(); }
function dayDate(ws, i){ return addDays(parseIso(ws), i); }
function weekLabel(ws){ var a = parseIso(ws), b = addDays(a, 6); return a.getMonth() === b.getMonth() ? a.getDate() + ' al ' + b.getDate() + ' ' + MONTHS[b.getMonth()] : a.getDate() + ' ' + MONTHS[a.getMonth()] + ' al ' + b.getDate() + ' ' + MONTHS[b.getMonth()]; }
function isoWeek(d){ var t = new Date(Date.UTC(d.getFullYear(), d.getMonth(), d.getDate())); var dn = (t.getUTCDay() + 6) % 7; t.setUTCDate(t.getUTCDate() - dn + 3); var fy = new Date(Date.UTC(t.getUTCFullYear(), 0, 4)); return { w: 1 + Math.round(((t - fy) / 864e5 - 3 + ((fy.getUTCDay() + 6) % 7)) / 7), y: t.getUTCFullYear() }; }
function relLabel(ws){ var c = curMonday(); if (ws === c) return 'Esta semana'; if (ws === shiftWeek(c, 1)) return 'Próxima semana'; if (ws === shiftWeek(c, -1)) return 'Semana pasada'; return ''; }
function isToday(ws, i){ return iso(dayDate(ws, i)) === todayIso(); }

/* estado */
var S = {
  tab: 'semana', ws: defaultWeek(), stack: [],
  weeks: dict(), tipos: dict(), custom: dict(), pesos: dict(), medidas: dict(), perfilDocs: dict(), cicloDocs: dict(),
  db: null, assets: undefined, dbState: 'loading', loaded: {d: false, w: false, t: false, c: false, p: false, m: false, f: false, g: false, k: false},
  libQ: '', libT: 'fuerza', libG: 'Todos', sel: [],
  noteOpen: dict(), confirm: null, toast: null, form: null, formErr: '', tname: '',
  drafts: dict(), aislados: dict(), aislOpen: false,
  cola: dict(), subs: dict(), subDead: dict(), colaRotos: dict(), storeOk: null, everSaved: false, prepErr: false,
  /* T03: días como documentos. ddocs/dmeta: vista remota y metadatos (rev, base, lin) por fecha; legacy: semanas del
     formato anterior, de solo lectura; rango: intervalo suscrito; defin: lectura definitiva recibida; heredados,
     desplazadas y mios: pendientes semanales antiguos, versiones desplazadas y últimas versiones propias confirmadas */
  ddocs: dict(), dmeta: dict(), legacy: dict(), legacyMode: null, rango: null, defin: { d: false, w: false }, proto: { where: null, get: null, acquire: null },
  heredados: dict(), desplazadas: dict(), mios: dict(), migDocs: dict(), mig: null, migPlan: null, migRun: null, migLog: [], legacyRaw: dict(), archivo: null, migRevertida: null, cid: uid(),
  save: 'idle', detMode: 'mov', scroll: {}, pending: false,
  pform: null, mform: null, fform: null, pesoMore: 0, chart: null, fzMore: 0
};

/* ejercicios */
function exById(id){
  if (own(LIBMAP, id)) return LIBMAP[id];
  var c = own(S.custom, id) ? S.custom[id] : null;
  if (c) return { id: id, n: typeof c.n === 'string' && c.n ? c.n : 'Sin nombre', t: c.t === 'cardio' ? 'cardio' : 'fuerza', g: c.t === 'cardio' ? 'Cardio' : (typeof c.g === 'string' && c.g ? c.g : 'Core'), s: strList(c.s), e: typeof c.e === 'string' && c.e ? c.e : 'Otro', p: strList(c.p), img: typeof c.img === 'string' && ASSET_RE.test(c.img) ? c.img : null, carga: c.t !== 'cardio' && CARGAS.indexOf(c.carga) >= 0 ? c.carga : null, custom: true, deleted: c.deleted === true, ro: !!c._ro };
  return { id: id, n: 'Ejercicio no disponible', t: 'fuerza', g: '', s: [], e: '', p: [], custom: true, missing: true };
}
/* los propios con datos que la app no reconoce quedan aislados: se ven donde se usan, pero no se ofrecen para elegir */
function customList(){ return Object.keys(S.custom).filter(function(id){ return !S.custom[id].deleted && !S.custom[id]._ro; }).map(exById); }
/* T06: ejercicios del catálogo cuya imagen es una ilustración esquemática local, no una fotografía */
var ILUS = { jaloncuerda: 1, bulgara: 1 };
function thumbSrc(ex){ return ex.custom ? (ex.img ? fotoUrl(ex.img) || null : null) : 'img/' + ex.id + '.jpg'; }
function thumbHtml(ex){ var s = thumbSrc(ex); return s ? '<img src="' + esc(s) + '" alt="" loading="lazy" decoding="async">' : '<span class="ph">' + ic('dumbbell', 22) + '</span>'; }
function exMeta(ex){ return [ex.t === 'cardio' ? 'Cardio' : ex.g, ex.e, cargaFrase(ex)].filter(Boolean).join(' · ') + (ex.custom && !ex.missing ? ' · Tuyo' : ''); }
/* modalidad efectiva: la elegida en un propio; en el catálogo, una o dos mancuernas según su lista. null = lectura por equipo */
function cargaDe(ex){ if (!ex || ex.t === 'cardio') return null; if (ex.custom) return ex.carga || null; if (ex.e === 'Mancuernas') return PAR[ex.id] ? 'dos' : 'una'; return null; }
function cargaFrase(ex){ var m = cargaDe(ex), p = []; if (m && CARGA_FRASE[m]) p.push(CARGA_FRASE[m]); if (ex && own(UNI, ex.id)) p.push('reps por ' + UNI[ex.id]); return p.join(', '); }
function esCorporal(ex){ var m = cargaDe(ex); return m === 'corporal' || (!m && ex.e === 'Peso corporal'); }
function repsLabel(ex){ return own(UNI, ex.id) ? 'Reps/' + UNI[ex.id] : 'Reps'; }
/* carga planeada en texto: dos mancuernas se anotan una sola vez como total; peso corporal muestra solo lo añadido */
function kgPlanTxt(ex, kg){ var m = cargaDe(ex); if (esCorporal(ex)) return kg && num(kg) > 0 ? 'corporal + ' + kg + ' kg' : 'corporal'; if (!kg) return ''; return kg + ' kg' + (m === 'una' ? ', una mancuerna' : m === 'dos' ? ' entre las dos' : ''); }
function kgCorto(ex){ var l = kgLabel(ex); return l === 'Kg mancuerna' ? 'Kg manc.' : l; }
function kgSuf(ex){ var m = cargaDe(ex); return m === 'dos' ? ' en total' : m === 'una' ? ' en la mancuerna' : ''; }

/* semanas */
function emptyDay(){ return { name: '', rest: false, tipo: null, items: [] }; }
function emptyWeek(ws){ return { start: ws, days: [0,1,2,3,4,5,6].map(emptyDay) }; }
function hasContent(w){ return !!w && w.days.some(function(d){ return d.rest || d.items.length; }); }
function isCardio(it){ return exById(it.ex).t === 'cardio'; }
function dayStats(d){
  var st = { sets: 0, min: 0, groups: [], f: 0, c: 0 };
  d.items.forEach(function(it){ var ex = exById(it.ex); if (ex.t === 'cardio') { st.c++; st.min += num(it.min); } else { st.f++; st.sets += setsN(it); if (ex.g && st.groups.indexOf(ex.g) < 0) st.groups.push(ex.g); } });
  return st;
}
function weekStats(w){
  var by = dict(); GROUPS.forEach(function(g){ by[g] = 0; });
  var r = { by: by, sets: 0, min: 0, fuerzaDays: 0, cardioDays: 0, restDays: 0, cardio: [] };
  w.days.forEach(function(d, i){
    if (d.rest || !d.items.length) { r.restDays++; return; }
    var f = 0, c = 0;
    d.items.forEach(function(it){ var ex = exById(it.ex); if (ex.t === 'cardio') { c++; r.min += num(it.min); r.cardio.push({ ex: ex, it: it, i: i }); } else { f++; var s = setsN(it); r.sets += s; if (by[ex.g] != null) by[ex.g] += s; } });
    if (f) r.fuerzaDays++; else if (c) r.cardioDays++;
  });
  return r;
}
function lowerList(gs){ return gs.map(function(g, j){ return j ? g.toLowerCase() : g; }).join(', '); }
function dayName(d, s){ if (d.name) return d.name; if (s.f) return s.groups.slice(0, 2).join(' y '); if (s.c) return 'Cardio'; return 'Sin nombre'; }
function cardioDesc(d){ var cs = d.items.filter(isCardio); if (!cs.length) return ''; var it = cs[0], ex = exById(it.ex); var p = [ex.n, fmtNum(num(it.min)) + ' min']; if (it.km) p.push(it.km + ' km'); if (cs.length > 1) p.push('+' + (cs.length - 1) + ' más'); return p.join(' · '); }
function dayMeta(d, s){ if (s.f) { var p = [lowerList(s.groups), s.sets + ' series'], v = dayVol(d); if (v) p.push('total ' + fmtVol(v) + ' kg'); if (s.min) p.push(fmtNum(s.min) + ' min cardio'); return p.join(' · '); } if (s.c) return cardioDesc(d); return ''; }
function itemDetail(it, ex){
  if (ex.t === 'cardio') return [(it.min || '?') + ' min', it.km ? it.km + ' km' : '', it.zona || ''].filter(Boolean).join(' · ');
  var kt = kgPlanTxt(ex, it.kg);
  return (it.sets || '?') + ' × ' + (it.reps || '?') + (own(UNI, ex.id) ? ' por ' + UNI[ex.id] : '') + (kt ? ' · ' + kt : '');
}
function ordered(items){ return items.filter(function(it){ return !isCardio(it); }).concat(items.filter(isCardio)); }
function weekMeta(w){ var st = weekStats(w); var p = [st.fuerzaDays + (st.fuerzaDays === 1 ? ' día' : ' días') + ' de fuerza', st.sets + ' series']; if (st.min) p.push(fmtNum(st.min) + ' min cardio'); return p.join(' · '); }
function prevContentWeek(ws){ var list = Object.keys(S.weeks).filter(function(k){ return k < ws && hasContent(S.weeks[k]); }).sort(); return list.length ? list[list.length - 1] : null; }
function tiposList(){ return Object.keys(S.tipos).map(function(id){ return S.tipos[id]; }).sort(function(a, b){ return (a.name || '').localeCompare(b.name || '', 'es'); }); }
/* una copia es un plan nuevo: no arrastra registros ni los campos desconocidos del original */
function cloneItems(items){ return items.map(function(it){ var o = clone(it); o.k = uid(); delete o._k0; delete o.hk; delete o.hr; delete o._x; return o; }); }

/* contexto del editor */
function top(){ return S.stack[S.stack.length - 1]; }
function curCtx(){
  var t = top(); if (!t) return null;
  if (t.v === 'dia') return { kind: 'day', ws: t.ws, i: t.i };
  if (t.v === 'tipo') return { kind: 'tipo', id: t.id };
  return t.ctx || null;
}
function getCont(ctx){
  if (!ctx) return null;
  if (ctx.kind === 'day') { if (dayLocked(fechaDe(ctx.ws, ctx.i))) return null; if (!S.weeks[ctx.ws]) { S.weeks[ctx.ws] = emptyWeek(ctx.ws); S.weeks[ctx.ws]._local = true; } return S.weeks[ctx.ws].days[ctx.i]; }
  return S.tipos[ctx.id] || null;
}
function ctxLabel(ctx){
  if (!ctx) return '';
  if (ctx.kind === 'day') return DAYS[ctx.i].toLowerCase() + ' ' + dayDate(ctx.ws, ctx.i).getDate();
  var t = S.tipos[ctx.id]; return t && t.name ? t.name : 'día tipo';
}
function backLabel(ctx){ if (!ctx) return 'Atrás'; if (ctx.kind === 'day') return DAYS[ctx.i] + ' ' + dayDate(ctx.ws, ctx.i).getDate(); var t = S.tipos[ctx.id]; return t && t.name ? t.name : 'Día tipo'; }

/* guardado: cola duradera por documento. Cada cambio válido se serializa y se escribe en localStorage antes del debounce
   (rutinas:cola:<clave>); viaja una sola operación por documento, las ediciones posteriores se coalescen en la versión más
   reciente y la entrada se retira únicamente cuando el servicio confirma esa misma versión. Lo que no se puede enviar
   (sin conexión, sin acceso, demasiado grande, documento apartado, rechazado) queda pendiente y recuperable: se muestra,
   se reintenta a mano y se puede exportar. «Guardado» solo aparece sin cola ni operaciones en vuelo */
var dirty = {}, timers = {}, ver = {}, inflight = {};
var COLA_PREFIX = 'rutinas:cola:', ILEG_PREFIX = 'rutinas:ilegible:', DESP_PREFIX = 'rutinas:desplazada:', MIO_PREFIX = 'rutinas:mio:', MAX_DOC_BYTES = 262144, MAX_DOC_DEPTH = 32;
/* d: un documento por fecha (dias/AAAA-MM-DD, esquema 1). w: semanas del formato anterior, fuente inmutable de solo
   lectura hasta migrar. g: estado de la migración (migracion/dias-1) */
var COLS = { d: 'dias', w: 'semanas', t: 'diasTipo', p: 'pesos', m: 'medidas', f: 'perfil', c: 'ejercicios', g: 'migracion', k: 'ciclo' };
var MIG_ID = 'dias-1', RANGO_SEMANAS = 52, RANGO_ADELANTE = 4, MAX_MIOS = 400, MAX_LIN = 8;
var WHY = { sinconexion: 'sin conexión', sinacceso: 'sin acceso al guardado en la nube: quedan como borrador en este dispositivo', transitorio: 'el servicio no respondió', presion: 'el servicio pidió bajar el ritmo', cuota: 'se llenó el espacio de guardado (cuota)', tamano: 'un cambio supera el tamaño máximo por documento', apartado: 'el documento guardado no se reconoce y se conserva', rechazado: 'el servicio rechazó el formato del cambio', preparar: 'no se pudo preparar el envío', desconocido: 'error no reconocido del servicio', conflicto: 'otro dispositivo guardó una versión distinta del mismo día; decide cuál conservar en «Ver pendientes»', ocupado: 'otro dispositivo está guardando ese día; se reintenta en un momento', sinlectura: 'esperando la lectura definitiva del servicio', legado: 'pendiente del formato anterior: se concilia a mano en «Ver pendientes»', creacion: 'sin garantía de creación segura: este runtime no ofrece arriendo del documento, y crear sin él podría pisar un día creado por otro dispositivo; el cambio se conserva como borrador', proteccion: 'guardado en la nube, pero el navegador no permitió guardar la protección local de esta versión; el borrador se conserva aquí hasta poder guardarla' };
function keyPath(key){ return COLS[key.charAt(0)] + '/' + key.slice(2); }
function stateMap(kind){ return { d: S.ddocs, w: S.legacy, t: S.tipos, p: S.pesos, m: S.medidas, f: S.perfilDocs, c: S.custom, g: S.migDocs, k: S.cicloDocs }[kind]; }
function isLocked(path){ var b = S.aislados[path]; return !!(b && b.lock); }
function weekLocked(ws){ return isLocked('semanas/' + ws); }
/* fechas y claves de día */
function wsOf(fecha){ return iso(monday(parseIso(fecha))); }
function fechaDe(ws, i){ return iso(dayDate(ws, i)); }
function dkey(ws, i){ return 'd:' + fechaDe(ws, i); }
function liveDay(fecha){ var w = S.weeks[wsOf(fecha)]; return w ? w.days[wd(fecha)] : null; }
function hasDayContent(d){ return !!d && !!(d.rest || (d.items && d.items.length) || d.name || d.tipo); }
function diaLabel(fecha){ var d = parseIso(fecha); return DAYS[wd(fecha)].toLowerCase() + ' ' + d.getDate() + ' de ' + MONTHS_LONG[d.getMonth()].toLowerCase(); }
/* un día del formato anterior con contenido se muestra pero no se edita hasta migrar: así ninguna edición crea un
   documento que haga sombra a datos que solo viven en la semana antigua. Un documento diario aislado tampoco se edita */
function legacyDayRO(fecha){ var L = S.legacy[wsOf(fecha)]; if (!L || S.ddocs[fecha] || dirty['d:' + fecha]) return false; return hasDayContent(L.days[wd(fecha)]); }
function dayLocked(fecha){ return isLocked('dias/' + fecha) || legacyDayRO(fecha) || (!S.ddocs[fecha] && !dirty['d:' + fecha] && weekLocked(wsOf(fecha))); }
function dayLockMsg(fecha){ if (isLocked('dias/' + fecha)) return 'Este día tiene datos guardados que la app no reconoce. Se conservan sin cambios y no se pueden editar desde aquí; el detalle está en el aviso de arriba.'; if (legacyDayRO(fecha)) return 'Este día está guardado en el formato anterior (la semana completa). Se muestra tal cual y se podrá editar cuando se migre a días independientes.'; return 'Esta semana tiene datos guardados que la app no reconoce. Se conservan sin cambios y no se pueden editar desde aquí; el detalle está en el aviso de arriba.'; }
function weekBlocked(ws){ for (var i = 0; i < 7; i++) if (dayLocked(fechaDe(ws, i))) return true; return false; }
function inRango(fecha){ return S.proto.where === false || !S.rango || (fecha >= S.rango.from && fecha <= S.rango.to); }
function inRangoWeek(ws){ return inRango(ws) && inRango(fechaDe(ws, 6)); }
/* registros realizados (DEC-07): fuerza con series anotadas, y cardio con minutos o distancia en un día de hoy o
   anterior (DEC-05). El esquema no distingue plan de realización en cardio, así que la guarda es conservadora: protege
   sin marcar nada como hecho; un cardio pasado sin minutos ni distancia sigue siendo plan editable, y vaciar sus
   minutos y distancia a mano lo deja editable. Nada de esto se borra ni se reemplaza desde la interfaz */
function cardioDone(it, past){ return !!past && isCardio(it) && (num(it.min) > 0 || num(it.km) > 0); }
function itemKept(it, past){ return hasLog(it) || cardioDone(it, past); }
function dayPast(ws, i){ return iso(dayDate(ws, i)) <= todayIso(); }
function ctxPast(ctx){ return !!ctx && ctx.kind === 'day' && dayPast(ctx.ws, ctx.i); }
function dayKept(ctx){ var d = getCont(ctx); if (!d || !Array.isArray(d.items)) return false; var past = ctxPast(ctx); return d.items.some(function(it){ return itemKept(it, past); }); }
function weekKept(ws){ var w = S.weeks[ws]; return !!w && w.days.some(function(d, i){ var past = dayPast(ws, i); return d.items.some(function(it){ return itemKept(it, past); }); }); }
function markDirty(ctx){ if (!ctx) return; if (ctx.kind === 'day') markKey(dkey(ctx.ws, ctx.i)); else { if (S.tipos[ctx.id]) S.tipos[ctx.id].ejemplo = false; markKey('t:' + ctx.id); } }
/* varios días de una semana: cada uno con contenido, con documento previo o sucio sale como su propia entrada */
function markWeekDays(ws){ var w = S.weeks[ws]; if (!w) return; for (var i = 0; i < 7; i++) { var f = fechaDe(ws, i); if (hasDayContent(w.days[i]) || S.ddocs[f] || dirty['d:' + f] || (i === 0 && w.blank)) markKey('d:' + f); } }
/* almacenamiento duradero del borrador: localStorage del origen. Si el navegador no lo permite, la cola vive solo en
   memoria y se avisa; el envío funciona igual, pero no sobrevive a cerrar la página. Que el runtime real lo permita es
   un gate de publicación (P-005), no una suposición */
function storeOk(){ if (S.storeOk == null) S.storeOk = lsOk(); return S.storeOk; }
/* un borrador local ilegible se conserva tal cual hasta que se descarte a mano: nunca se sobrescribe ni se borra solo.
   Si ocupa la clave de la cola y llega un cambio válido del mismo documento, primero se copia byte a byte a su propio
   lugar (rutinas:ilegible:clave#n), se relee y se compara; solo entonces la clave recibe la entrada válida. Si esa copia
   falla de verdad, la entrada válida queda sin borrador duradero y se avisa; el original no se toca */
function rotoAt(slot){ var ids = Object.keys(S.colaRotos); for (var i = 0; i < ids.length; i++) if (S.colaRotos[ids[i]].slot === slot) return ids[i]; return null; }
function apartar(r){
  var raw = r.raw == null ? '' : String(r.raw), slot = null;
  try {
    for (var n = 1; n <= 99 && !slot; n++) { var s = ILEG_PREFIX + r.key + '#' + n; if (localStorage.getItem(s) === null) slot = s; }
    if (!slot) return false;
    localStorage.setItem(slot, raw);
    if (localStorage.getItem(slot) !== raw) { try { localStorage.removeItem(slot); } catch (y) {} return false; }
  } catch (x) { return false; }
  r.slot = slot; return true;
}
function colaPut(key, e){
  if (!storeOk()) return false;
  var base = COLA_PREFIX + key, id = rotoAt(base), r = id === null ? null : S.colaRotos[id];
  if (r && !apartar(r)) return false;
  try { localStorage.setItem(base, JSON.stringify({ v: e.v, op: e.op, body: e.body, at: e.at, base: e.base === undefined ? null : e.base, mine: e.mine || [], alt: e.alt ? { rev: e.alt.rev, body: e.alt.body, at: e.alt.at } : undefined })); return true; }
  catch (x) {
    /* la clave no cambió: se retira la copia recién apartada para no duplicar el original, que sigue en su sitio */
    if (r) { try { localStorage.removeItem(r.slot); if (localStorage.getItem(r.slot) === null) r.slot = base; } catch (y) {} }
    S.storeOk = false; return false;
  }
}
function colaDrop(key){ var base = COLA_PREFIX + key, f = key.slice(2); if (rotoAt(base) !== null) return; if (key.charAt(0) === 'd' && S.mios[f] && S.mios[f].slot === base) return; try { localStorage.removeItem(base); } catch (x) {} }
/* lectura entrada por entrada: un texto roto no impide leer las demás. Las copias apartadas (rutinas:ilegible:) se leen
   tal cual, sin interpretarlas ni enviarlas */
function colaLoad(){
  var ok = [], bad = [], ileg = [], desp = [], mios = [], keys = [];
  try { for (var i = 0; i < localStorage.length; i++) { var k = localStorage.key(i); if (k && (k.indexOf(COLA_PREFIX) === 0 || k.indexOf(ILEG_PREFIX) === 0 || k.indexOf(DESP_PREFIX) === 0 || k.indexOf(MIO_PREFIX) === 0)) keys.push(k); } } catch (x) { return { ok: ok, bad: bad, ileg: ileg, desp: desp, mios: mios }; }
  keys.forEach(function(k){
    var raw = null, e = null, why = '';
    try { raw = localStorage.getItem(k); } catch (x) { return; }
    if (k.indexOf(ILEG_PREFIX) === 0) { if (raw != null) ileg.push({ key: k.slice(ILEG_PREFIX.length).replace(/#\d+$/, ''), raw: raw, slot: k }); return; }
    if (k.indexOf(DESP_PREFIX) === 0) { if (raw != null) desp.push({ raw: raw, slot: k }); return; }
    if (k.indexOf(MIO_PREFIX) === 0) { if (raw != null) mios.push({ fecha: k.slice(MIO_PREFIX.length), raw: raw, slot: k }); return; }
    try { e = JSON.parse(raw); } catch (x) { why = 'el texto guardado no es JSON legible'; }
    if (!why && !isObj(e)) why = 'la entrada no tiene el formato esperado';
    var key = k.slice(COLA_PREFIX.length);
    if (why) bad.push({ key: key, raw: raw, why: [why] }); else ok.push({ key: key, e: e, raw: raw });
  });
  return { ok: ok, bad: bad, ileg: ileg, desp: desp, mios: mios };
}
/* una entrada local solo se restaura si su clave, versión, operación y cuerpo pasan la misma validación que un documento
   remoto; un borrado solo se admite para días tipo (DEC-07). Las variantes válidas (sin «op», sin «at») se aceptan */
function colaProblems(key, e){
  var kind = key.charAt(0), id = key.slice(2), why = [];
  if (!COLS[kind]) why.push('la clave no corresponde a una colección conocida');
  else if (!docIdOk(id)) why.push('el identificador del documento no es válido');
  if (!(typeof e.v === 'number' && isFinite(e.v) && e.v >= 1 && Math.floor(e.v) === e.v)) why.push('la versión no es un número válido');
  var op = e.op === undefined ? 'set' : e.op;
  if (op !== 'set' && op !== 'delete') why.push('la operación «' + short(op) + '» no se reconoce');
  else if (op === 'delete' && kind !== 't') why.push('la operación de borrado no está permitida para esta colección (DEC-07)');
  if (op === 'set') {
    if (!isObj(e.body)) why.push('el cuerpo no es un documento');
    else if (COLS[kind] && docIdOk(id)) { var chk = checkDoc(kind + ':', id, e.body); if (chk && (chk.lock || kind !== 'f')) why = why.concat(chk.why); }
  }
  if (kind === 'g') why.push('el estado de migración no se edita desde la cola');
  if (e.at !== undefined && typeof e.at !== 'string') why.push('el instante no es texto');
  return why;
}
function utf8Bytes(s){ if (window.TextEncoder) return new TextEncoder().encode(s).length; var n = 0; for (var i = 0; i < s.length; i++) { var c = s.charCodeAt(i); if (c < 0x80) n += 1; else if (c < 0x800) n += 2; else if (c >= 0xD800 && c <= 0xDBFF) { n += 4; i++; } else n += 3; } return n; }
function docDepth(o){ if (!o || typeof o !== 'object') return 0; var m = 0; Object.keys(o).forEach(function(k){ var d = docDepth(o[k]); if (d > m) m = d; }); return 1 + m; }
function pendCount(){ return Object.keys(S.cola).length; }
/* la clave original de un ítem se conserva al guardar, aunque en memoria se use otra válida (ver normItems) */
/* campos desconocidos (P-013): lo que la app no interpreta viaja como dato en _x, se vuelve a escribir tal cual y nunca
   se interpola como HTML. Tres nombres se omiten siempre porque alteran objetos en JavaScript: __proto__, constructor
   y prototype. Un campo conocido inválido sigue aislado por T01; editar un campo conocido no toca los desconocidos */
var UNSAFE = dict(); ['__proto__', 'constructor', 'prototype'].forEach(function(k){ UNSAFE[k] = true; });
function knownSet(list){ var s = dict(); list.forEach(function(k){ s[k] = true; }); return s; }
var ITEM_KNOWN = knownSet(['k', 'ex', '_k0', '_x'].concat(FIELDS)), DAY_KNOWN = knownSet(['esquema', 'fecha', 'name', 'rest', 'tipo', 'items', 'blank', 'descarga', 'calent', 'estir', 'calentOk', 'estirOk', 'rev', 'base', 'lin', 'origen', 'updatedAt', '_x', '_origen']), TIPO_KNOWN = knownSet(['id', 'name', 'items', 'ejemplo', 'calent', 'estir', 'updatedAt', '_x', '_local']), CUSTOM_KNOWN = knownSet(['n', 't', 'g', 's', 'e', 'p', 'img', 'carga', 'deleted', 'createdAt', 'updatedAt', '_x', '_ro', '_local']);
function extrasOf(o, known){ var x = null; if (!isObj(o)) return null; Object.keys(o).forEach(function(k){ if (known[k] || UNSAFE[k] || o[k] === undefined) return; if (!x) x = dict(); x[k] = clone(o[k]); }); return x; }
function putExtras(body, x){ if (x) Object.keys(x).forEach(function(k){ if (!UNSAFE[k] && !own(body, k)) body[k] = clone(x[k]); }); return body; }
function serItems(items){ return items.map(function(it){ var o = { k: String(it._k0 != null ? it._k0 : it.k), ex: String(it.ex) }; FIELDS.forEach(function(f){ if (it[f] != null && it[f] !== '') o[f] = String(it[f]); }); return putExtras(o, it._x); }); }
/* propios: el cuerpo se valida antes de enviarlo; un dato mal formado en memoria no llega a db */
function serCustom(c, now){
  if (typeof c.n !== 'string' || !isStrList(c.s) || !isStrList(c.p) || (c.img != null && !(typeof c.img === 'string' && ASSET_RE.test(c.img)))) throw new Error('ejercicio con datos no válidos');
  var body = { n: c.n, t: c.t === 'cardio' ? 'cardio' : 'fuerza', g: String(c.g || ''), s: c.s.slice(), e: String(c.e || ''), p: c.p.slice(), img: c.img || null, deleted: c.deleted === true, createdAt: typeof c.createdAt === 'string' && c.createdAt ? c.createdAt : now, updatedAt: now };
  if (body.t !== 'cardio' && CARGAS.indexOf(c.carga) >= 0) body.carga = c.carga;
  return putExtras(body, c._x);
}
/* la operación se construye con el estado en memoria en el momento de la entrada; no toca db. El único borrado que
   queda es el de un día tipo (plantilla, con confirmación); registros y semanas nunca se eliminan */
function buildOp(key, now){
  var kind = key.charAt(0), id = key.slice(2);
  if (kind === 'w') throw new Error('la semana ya no se guarda como un solo documento');
  /* día: esquema explícito. rev identifica esta escritura; base y lin (predecesor y cadena corta) se fijan al enviar,
     cuando se conoce la versión que el servicio tiene; origen se conserva si el día vino de una migración */
  if (kind === 'd') { var dd = liveDay(id); if (!dd) throw new Error('día ausente'); var wsb = S.weeks[wsOf(id)]; var body = { esquema: 1, fecha: id, name: String(dd.name || ''), rest: !!dd.rest, tipo: dd.tipo || null, items: serItems(dd.items) }; if (wd(id) === 0 && wsb && wsb.blank) body.blank = true; if (dd.descarga === true) body.descarga = true; serBloques(body, dd, true); if (isObj(dd._origen)) body.origen = clone(dd._origen); body.updatedAt = now; return { op: 'set', body: putExtras(body, dd._x) }; }
  if (kind === 't') { var t = S.tipos[id]; return t ? { op: 'set', body: putExtras(serBloques({ name: String(t.name || ''), items: serItems(t.items), ejemplo: !!t.ejemplo, updatedAt: now }, t, false), t._x) } : { op: 'delete', body: null }; }
  if (kind === 'p') { var pe = S.pesos[id]; if (!pe) throw new Error('pesaje ausente'); return { op: 'set', body: { fecha: id, kg: pe.kg, updatedAt: now } }; }
  if (kind === 'm') { var me = S.medidas[id]; if (!me) throw new Error('medidas ausentes'); return { op: 'set', body: { fecha: id, cuello: me.cuello, pecho: me.pecho, cintura: me.cintura, cadera: me.cadera, updatedAt: now } }; }
  if (kind === 'k') { var ck = S.cicloDocs[id]; if (!ck) throw new Error('ciclo ausente'); var nk = window.Ciclo.normalizar(ck); var bk = { orden: nk.orden, dias: nk.dias, equipo: window.Progresion.normalizarEquipo(nk.equipo), updatedAt: now }; bk.descargaCada = nk.descargaCada; bk.factorDescarga = nk.factorDescarga; if (nk.bloque !== undefined) bk.bloque = nk.bloque; if (Array.isArray(nk.correcciones)) bk.correcciones = nk.correcciones.slice(-20); return { op: 'set', body: bk }; }
  if (kind === 'f') { var pf = S.perfilDocs[id]; if (!pf) throw new Error('perfil ausente'); return { op: 'set', body: { estatura: pf.estatura, nacimiento: pf.nacimiento || pf._nac0 || '', sexo: pf.sexo === 'M' ? 'M' : 'H', updatedAt: now } }; }
  var c = S.custom[id]; if (!c) throw new Error('ejercicio ausente'); return { op: 'set', body: serCustom(c, now) };
}
function overLimit(e){ return e.op === 'set' && (e.bytes > MAX_DOC_BYTES || e.depth > MAX_DOC_DEPTH); }
/* un día se contabiliza con una reserva fija para lo que se completa al enviar (base real y cadena de hasta 8 revisiones);
   así el límite se decide en la entrada y el cuerpo enviado nunca lo supera (la cadena se recorta si hiciera falta) */
var DIA_RESERVA = 320;
function diaBytes(body){ return utf8Bytes(JSON.stringify(body || {})) + DIA_RESERVA; }
function sizeMsg(e){ return 'Este cambio ocupa ' + Math.round(e.bytes / 1024) + ' KB y el guardado admite hasta 256 KB por documento' + (e.depth > MAX_DOC_DEPTH ? ' y 32 niveles' : '') + '. Acorta la nota más larga; mientras tanto queda pendiente aquí y no se envía.'; }
/* entrada válida → versión nueva, cuerpo serializado y guardado duradero inmediato; el envío espera el debounce */
/* revisión de longitud fija (20): el tamaño contabilizado de un día no depende del azar */
function newRev(){ return (Date.now().toString(36) + Math.random().toString(36).slice(2) + Math.random().toString(36).slice(2) + '00000000000000000000').slice(0, 20); }
function baseOf(fecha){ var m = S.dmeta[fecha]; return m && m.rev ? m.rev : null; }
function markKey(key){
  var kind = key.charAt(0);
  if (kind === 'w') { showToast('La semana ya no se guarda como un solo documento: cada día se guarda por separado.'); return; }
  var op;
  try { op = buildOp(key, new Date().toISOString()); }
  catch (x) { S.prepErr = true; showToast('No se pudo preparar el guardado de este cambio. Sigue en pantalla; revisa los datos y vuelve a intentarlo.'); refreshSave(); renderPend(); return; }
  S.prepErr = false;
  ver[key] = (ver[key] || 0) + 1;
  /* la base de la serie es la versión remota conocida al empezar a editar; las versiones que esta serie ya envió
     quedan en mine. Con eso se distingue una escritura propia de una ajena antes de enviar y al recibir snapshots */
  var e = S.cola[key] || (S.cola[key] = { key: key, attempts: 0, warned: false, base: kind === 'd' ? baseOf(key.slice(2)) : null, mine: [] });
  e.v = ver[key]; e.op = op.op; e.body = op.body; e.at = new Date().toISOString(); e.status = 'pendiente'; e.why = ''; e.attempts = 0;
  if (kind === 'd') { e.rev = newRev(); e.body.rev = e.rev; e.body.base = e.base; }
  e.bytes = kind === 'd' ? diaBytes(e.body) : utf8Bytes(JSON.stringify(e.body || {})); e.depth = docDepth(e.body || {});
  if (overLimit(e)) { e.status = 'retenido'; e.why = 'tamano'; }
  dirty[key] = true;
  e.durable = colaPut(key, e);
  clearTimeout(timers[key]); timers[key] = setTimeout(function(){ delete timers[key]; flush(key); }, 500);
  if (e.why === 'tamano') warnOnce(e, sizeMsg(e));
  refreshSave(); renderPend();
}
function warnOnce(e, msg){ if (!e.warned) { e.warned = true; showToast(msg); } }
function hold(e, why){ e.status = 'retenido'; e.why = why; refreshSave(); renderPend(); }
function canAutoKick(k){ var e = S.cola[k]; return !!e && !timers[k] && !inflight[k] && (e.status === 'pendiente' || (e.status === 'retenido' && (e.why === 'sinconexion' || e.why === 'sinacceso' || e.why === 'apartado' || e.why === 'sinlectura'))); }
/* reenvío automático solo de lo que no falló: al conectar, al llegar un snapshot, al volver la conexión */
function kickQueue(){ Object.keys(S.cola).forEach(function(k){ if (canAutoKick(k)) flush(k); }); refreshSave(); renderPend(); }
/* ocultar o cerrar la página anticipa el envío; la recuperación no depende de que la promesa sobreviva */
function flushNow(){ Object.keys(timers).forEach(function(k){ clearTimeout(timers[k]); delete timers[k]; flush(k); }); }
/* acción explícita: vuelve a intentar todo lo pendiente, salvo lo que supera el tamaño */
function retryAll(){
  Object.keys(S.cola).forEach(function(k){ var e = S.cola[k]; if (overLimit(e)) return; clearTimeout(timers[k]); delete timers[k]; e.attempts = 0; e.status = 'pendiente'; e.why = ''; e.warned = false; });
  if (!S.db) { showToast('Sin acceso al guardado en la nube. Recarga la página para reconectar; los cambios pendientes se conservan en este dispositivo.'); refreshSave(); renderPend(); return; }
  kickQueue();
}
/* un documento aislado nunca se sobrescribe. Una edición sobre la copia de solo lectura de un propio no es legítima: se
   descarta y se repone la copia. Un cambio legítimo cuyo documento se volvió ilegible se retiene sin enviarlo */
function refuseLocked(key){
  var kind = key.charAt(0), id = key.slice(2), b = S.aislados[keyPath(key)], m = stateMap(kind), e = S.cola[key];
  clearTimeout(timers[key]); delete timers[key];
  if (b.show && kind === 'c' && m[id] && m[id]._ro) {
    if (e) { delete S.cola[key]; colaDrop(key); } delete dirty[key];
    m[id] = sanitizeCustom(clone(b.raw), true);
    showToast('No se guardó ' + aislLabel(b) + ': tiene datos que la app no reconoce y se conserva sin cambios.');
    refreshSave(); renderPend(); requestRender(); return;
  }
  if (e) { hold(e, 'apartado'); warnOnce(e, 'No se envió el cambio de ' + aislLabel(b) + ': el documento guardado no se reconoce y se conserva. El cambio queda pendiente aquí.'); }
  else if (m[id] && !dirty[key]) { delete m[id]; requestRender(); }
}
function flush(key){
  var e = S.cola[key]; clearTimeout(timers[key]); delete timers[key];
  if (isLocked(keyPath(key))) { refuseLocked(key); return; }
  if (!e || inflight[key]) return;
  /* los límites y la operación permitida se comprueban en cada envío, también al salir una versión posterior tras
     confirmar o rechazar la anterior; una respuesta vieja nunca libera una restricción del cuerpo vigente */
  if (overLimit(e)) { hold(e, 'tamano'); return; }
  if (key.charAt(0) === 'w') { hold(e, 'legado'); return; }
  /* un conflicto solo sale de la retención por decisión explícita (conf-mia, que lo deja pendiente antes de llamar) */
  if (e.status === 'retenido' && (e.why === 'conflicto' || e.why === 'proteccion')) return;
  if (e.op === 'delete' && key.charAt(0) !== 't') { e.status = 'error'; e.why = 'rechazado'; refreshSave(); renderPend(); return; }
  if (!S.db) { if (S.dbState === 'off') hold(e, 'sinacceso'); return; }
  if (!S.loaded[key.charAt(0)]) return;
  if (navigator.onLine === false) { hold(e, 'sinconexion'); return; }
  if (key.charAt(0) === 'd') { flushDia(key, e); return; }
  var v = e.v, p;
  /* construir la referencia puede lanzar (ruta no válida): es un error de guardado, no una excepción suelta */
  try { var ref = S.db.doc(keyPath(key)); p = Promise.resolve(e.op === 'delete' ? ref.delete() : ref.set(e.body)); }
  catch (x) { e.status = 'error'; e.why = 'preparar'; warnOnce(e, 'No se pudo preparar el guardado de este cambio. Sigue en pantalla; revisa los datos y vuelve a intentarlo.'); refreshSave(); renderPend(); return; }
  inflight[key] = v; e.status = 'enviando'; e.why = ''; e.warned = false; refreshSave(); renderPend();
  p.then(function(){ confirmOp(key, v); }, function(err){ failOp(key, v, err); });
}
/* escritura de un día (DEC-01 B): el servicio decide con «la última escritura gana»; la app no ordena por relojes ni
   contadores. Antes de enviar, si el runtime lo permite, toma un arriendo corto del documento (acquire: serializa a
   quienes también lo usan; no es un bloqueo de editor), lee la versión vigente (get) y la compara con la base de la
   serie: si el servicio tiene una versión que esta serie no conoce, el cambio queda retenido como conflicto, con la
   otra versión a la vista, y es el usuario quien decide. Sin get ni lectura definitiva no se crea ni se escribe a
   ciegas. La revisión propia, su predecesor y una cadena corta viajan en el cuerpo para que el otro dispositivo pueda
   reconocer un desplazamiento aunque el servicio agrupe snapshots */
function revOf(data){ if (!isObj(data)) return null; return typeof data.rev === 'string' && data.rev ? data.rev : 'h' + hash36(JSON.stringify(data)); }
function linOf(data){ return isObj(data) && Array.isArray(data.lin) ? data.lin.filter(function(x){ return typeof x === 'string'; }).slice(0, MAX_LIN) : []; }
function sameLineage(e, remoteRev){ if (remoteRev === null) return e.base === null; return remoteRev === e.base || remoteRev === e.rev || (e.mine || []).indexOf(remoteRev) >= 0; }
/* ¿la revisión que llegó desciende de alguna de las nuestras? (base o cadena corta) */
function desciendeDe(meta, revs){ return revs.some(function(r){ return !!r && (meta.base === r || meta.lin.indexOf(r) >= 0); }); }
function busyWait(r){ var ms = 1500; if (r && r.expiresAt) { var t = Date.parse(r.expiresAt) - Date.now(); if (isFinite(t)) ms = t; } return Math.max(400, Math.min(6000, ms)) + 100; }
/* arriendo del documento (cooperativo, con vencimiento): se toma antes de leer, se renueva mientras duren la lectura y
   el envío y se comprueba justo antes de escribir; si se perdió o venció, no se escribe y la entrada vuelve a empezar.
   El tiempo se mide con el reloj monótono del navegador, no con la fecha */
var LEASE_MS = 8000, LEASE_RENOVAR = 3500, LEASE_MARGEN = 800;
function flushDia(key, e){
  var fecha = key.slice(2), v = e.v, body = e.body, sentRev = body.rev, ref;
  try { ref = S.db.doc(keyPath(key)); } catch (x) { e.status = 'error'; e.why = 'preparar'; warnOnce(e, 'No se pudo preparar el guardado de este cambio. Sigue en pantalla; revisa los datos y vuelve a intentarlo.'); refreshSave(); renderPend(); return; }
  var canGet = typeof ref.get === 'function', canAcq = typeof ref.acquire === 'function';
  S.proto.get = canGet; S.proto.acquire = canAcq;
  if (!canGet && !S.defin.d) { hold(e, 'sinlectura'); return; }
  /* crear un día exige arriendo del documento: sin él, el contrato no permite comprobar y escribir sin que otro
     dispositivo pueda crear el mismo día en medio. La creación queda retenida y explicada; el borrador se conserva */
  if (e.base === null && !canAcq) { hold(e, 'creacion'); warnOnce(e, 'Este runtime no ofrece arriendo del documento: crear el ' + diaLabel(fecha) + ' podría pisar un día creado por otro dispositivo. El cambio se conserva como borrador en «Ver pendientes».'); return; }
  inflight[key] = v; e.status = 'enviando'; e.why = ''; e.warned = false; refreshSave(); renderPend();
  var lease = { until: 0, lost: false, timer: null };
  function leaseOk(){ return !canAcq || (!lease.lost && performance.now() < lease.until - LEASE_MARGEN); }
  function leaseStop(){ if (lease.timer) { clearInterval(lease.timer); lease.timer = null; } }
  function leaseRenew(){ Promise.resolve().then(function(){ return ref.acquire({ holder: S.cid, ttlMs: LEASE_MS }); }).then(function(r){ if (r && r.acquired === false) lease.lost = true; else lease.until = performance.now() + LEASE_MS; }, function(){ lease.lost = true; }); }
  function reintentar(){ leaseStop(); delete inflight[key]; e.status = 'pendiente'; e.why = ''; clearTimeout(timers[key]); timers[key] = setTimeout(function(){ delete timers[key]; flush(key); }, 1200); refreshSave(); renderPend(); }
  var step = canAcq ? Promise.resolve().then(function(){ return ref.acquire({ holder: S.cid, ttlMs: LEASE_MS }); }) : Promise.resolve({ acquired: true });
  step.then(function(r){
    if (inflight[key] !== v) return null;
    if (r && r.acquired === false) { delete inflight[key]; e.status = 'retenido'; e.why = 'ocupado'; clearTimeout(timers[key]); timers[key] = setTimeout(function(){ delete timers[key]; flush(key); }, busyWait(r)); refreshSave(); renderPend(); return null; }
    if (canAcq) { lease.until = performance.now() + LEASE_MS; lease.timer = setInterval(leaseRenew, LEASE_RENOVAR); }
    return canGet ? Promise.resolve().then(function(){ return ref.get(); }).then(function(snap){ return { snap: snap }; }) : { snap: null };
  }).then(function(st){
    if (!st) return;
    if (inflight[key] !== v) { leaseStop(); return; }
    var remote = null, remoteRev = null;
    if (st.snap) {
      /* la lectura puntual se valida como cualquier documento recibido: sin metadatos definitivos no demuestra ausencia
         ni vigencia y no decide; con cuerpo nulo o ilegible, el documento existe y se aísla intacto; nada se escribe encima */
      if (!st.snap.metadata || st.snap.metadata.fromCache !== false) { leaseStop(); delete inflight[key]; hold(e, 'sinlectura'); return; }
      if (st.snap.exists !== false) {
        remote = st.snap.data();
        var chk = checkDoc('d:', fecha, remote);
        if (chk) { S.aislados['dias/' + fecha] = aislEntry('dias', fecha, chk, remote); leaseStop(); delete inflight[key]; refuseLocked(key); requestRender(); return; }
        remoteRev = revOf(remote);
      }
    }
    else { var m = S.dmeta[fecha]; remoteRev = m && m.rev ? m.rev : null; remote = S.ddocs[fecha] ? S.ddocs[fecha] : null; }
    /* el servicio ya tiene exactamente esta versión (aceptada antes de recibir la confirmación): no se reenvía */
    if (remoteRev !== null && remoteRev === sentRev) { leaseStop(); confirmOp(key, v, sentRev, remote); return; }
    if (!sameLineage(e, remoteRev)) { leaseStop(); delete inflight[key]; conflicto(e, fecha, remote, remoteRev); return; }
    body.base = remoteRev; body.lin = (remoteRev ? [remoteRev] : []).concat(linOf(remote)).slice(0, MAX_LIN);
    while (body.lin.length && utf8Bytes(JSON.stringify(body)) > MAX_DOC_BYTES) body.lin.pop();
    if (utf8Bytes(JSON.stringify(body)) > MAX_DOC_BYTES) { leaseStop(); delete inflight[key]; hold(e, 'tamano'); warnOnce(e, sizeMsg(e)); return; }
    if (!leaseOk()) { reintentar(); return; }
    e.mine.push(sentRev); colaPut(key, e);
    return Promise.resolve().then(function(){ return ref.set(body); }).then(function(){ leaseStop(); confirmOp(key, v, sentRev, body); });
  }).catch(function(err){ leaseStop(); failOp(key, v, err); });
}
/* conflicto detectado antes de enviar: la entrada se retiene con la otra versión a la vista; sobrevive a recargar */
function conflicto(e, fecha, remote, remoteRev){
  clearTimeout(timers[e.key]); delete timers[e.key];
  e.status = 'retenido'; e.why = 'conflicto'; e.alt = { rev: remoteRev, body: isObj(remote) ? clone(remote) : null, at: new Date().toISOString() };
  e.durable = colaPut(e.key, e);
  warnOnce(e, 'Otro dispositivo guardó una versión distinta del ' + diaLabel(fecha) + '. Tu cambio queda pendiente: decide en «Ver pendientes» cuál conservar.');
  refreshSave(); renderPend(); requestRender();
}
/* una respuesta solo cuenta para la versión que viajó; la entrada se retira si no hubo ediciones mientras tanto */
function confirmOp(key, v, sentRev, sentBody){
  if (inflight[key] !== v) return;
  delete inflight[key];
  var e = S.cola[key]; if (!e) return;
  var prot = 'mio';
  if (key.charAt(0) === 'd' && sentRev) {
    var fecha = key.slice(2), cur = S.dmeta[fecha];
    /* aceptación no es vigencia: lo observado del servicio manda. Si ya llegó una sucesora de lo enviado, la vista
       conserva esa ganadora; si llegó una revisión ajena que no desciende de lo enviado, esa es la vigente y lo enviado
       fue aceptado y desplazado: se copia como desplazada y la vista no vuelve atrás */
    var superada = !!(cur && cur.rev !== sentRev && desciendeDe(cur, [sentRev]));
    var desplazada = !!(cur && !superada && cur.rev !== sentRev && cur.rev !== (sentBody.base === undefined ? null : sentBody.base) && (e.mine || []).indexOf(cur.rev) < 0);
    if (!superada && !desplazada) { S.dmeta[fecha] = { src: 'dia', rev: sentRev, base: sentBody.base === undefined ? null : sentBody.base, lin: linOf(sentBody), blank: sentBody.blank === true, mig: null }; S.ddocs[fecha] = liveDay(fecha) || normDay(clone(sentBody), fecha); }
    if (desplazada) prot = keepDesplazada(fecha, sentBody, sentRev, sentBody.base === undefined ? null : sentBody.base, 'desplazada', { rev: cur.rev, base: cur.base }) ? 'mio' : false;
    else prot = recordMio(fecha, sentRev, sentBody, superada ? [cur.rev] : [], key);
    if ((superada || desplazada) && e.v === v) { retirarEntrada(key, e, prot); rebuildWeeks(); refreshSave(); renderPend(); requestRender(); return; }
  }
  if (e.v === v) retirarEntrada(key, e, prot);
  else { e.status = 'pendiente'; e.attempts = 0; flush(key); }
  refreshSave(); renderPend();
}
/* una entrada confirmada se retira solo si su protección duradera quedó comprobada en otro lugar ('mio'); si quedó en
   la propia clave de la cola ('cola') no se borra esa clave; si no se pudo guardar en ningún lugar, la entrada se queda
   retenida, sin reenviar, hasta poder protegerla */
function retirarEntrada(key, e, prot){
  /* si en la clave de la cola no hay ninguna copia duradera (navegador sin almacenamiento), no existe protección que
     conservar y la entrada se retira como siempre; si la hay, se conserva hasta poder proteger la versión */
  if (!prot) { var hay = false; try { hay = localStorage.getItem(COLA_PREFIX + key) !== null; } catch (x) {} if (!hay) prot = 'mio'; }
  if (prot) { delete S.cola[key]; delete dirty[key]; if (prot === 'mio') colaDrop(key); S.everSaved = true; return; }
  delete dirty[key]; e.status = 'retenido'; e.why = 'proteccion'; S.everSaved = true;
  warnOnce(e, 'El cambio quedó guardado en la nube, pero el navegador no permitió guardar su protección local; el borrador se conserva en este dispositivo hasta poder guardarla.');
}
/* fallos según el contrato: un solo reintento para lo transitorio; sin reintentos para capacidad, rechazo o acceso */
function failOp(key, v, err){
  if (inflight[key] !== v) return;
  delete inflight[key];
  var e = S.cola[key]; if (!e) return;
  var code = err && typeof err.code === 'string' ? err.code : 'unavailable';
  if (code === 'revoked' || code === 'not_granted' || code === 'capability_disabled' || code === 'capability_removed') { goOff('sinacceso'); return; }
  if (code === 'quota_exceeded') { hold(e, 'cuota'); warnOnce(e, 'Se llenó el espacio de guardado (cuota). El cambio queda pendiente en este dispositivo y puedes exportarlo; no hace falta borrar semanas.'); return; }
  if (code === 'invalid_argument' || code === 'transform_error') { e.status = 'error'; e.why = 'rechazado'; warnOnce(e, 'El servicio rechazó este cambio por su formato. Queda pendiente aquí para revisarlo o exportarlo; no se reintenta solo.'); refreshSave(); renderPend(); return; }
  var slow = code === 'resource_exhausted';
  if (e.attempts < 1) { e.attempts++; e.status = 'reintento'; e.why = slow ? 'presion' : 'transitorio'; refreshSave(); renderPend(); timers[key] = setTimeout(function(){ delete timers[key]; flush(key); }, slow ? 3000 + Math.random() * 2000 : 700 + Math.random() * 600); return; }
  e.status = 'error'; e.why = slow ? 'presion' : code === 'unavailable' ? 'transitorio' : 'desconocido';
  warnOnce(e, slow ? 'El servicio pidió bajar el ritmo. El cambio queda pendiente; usa «Reintentar» en un momento.' : 'No se pudo guardar el último cambio. Revisa tu conexión y usa «Reintentar»; el cambio sigue pendiente aquí.');
  refreshSave(); renderPend();
}
/* acceso retirado o capacidad terminal: se detienen los envíos, se conserva todo como borrador y se informa; 0 reintentos */
function goOff(why){
  S.dbState = 'off'; S.db = null;
  Object.keys(timers).forEach(function(k){ clearTimeout(timers[k]); delete timers[k]; });
  Object.keys(S.cola).forEach(function(k){ var e = S.cola[k]; if (!overLimit(e)) { e.status = 'retenido'; e.why = why; } });
  refreshSave(); renderPend(); requestRender();
}
/* cada borrador ilegible se registra con el lugar exacto donde está su texto; su identificador es la clave del documento
   y solo lleva sufijo si hay más de un texto apartado para la misma clave */
function rotoId(key){ var id = key, n = 1; while (S.colaRotos[id]) id = key + '#' + (++n); return id; }
function rotoWhy(key, raw){
  var e; try { e = JSON.parse(raw); } catch (x) { return ['el texto guardado no es JSON legible']; }
  if (!isObj(e)) return ['la entrada no tiene el formato esperado'];
  var why = colaProblems(key, e); return why.length ? why : ['se apartó en este dispositivo y no se reenvía sola'];
}
/* al abrir: lo que quedó pendiente vuelve a memoria como estado vigente (el primer snapshot no lo pisa) y se reenvía
   cuando su colección esté cargada y no esté apartada */
function restoreCola(){
  var loaded = colaLoad();
  loaded.bad.forEach(function(b){ S.colaRotos[rotoId(b.key)] = { key: b.key, raw: b.raw, why: b.why, slot: COLA_PREFIX + b.key }; });
  loaded.ok.forEach(function(x){
    var key = x.key, raw = x.e, kind = key.charAt(0), id = key.slice(2);
    if (kind === 'd' && raw.aceptada === true && typeof raw.rev === 'string' && isObj(raw.body) && isoOk(id)) { S.mios[id] = { rev: raw.rev, base: typeof raw.base === 'string' ? raw.base : null, body: raw.body, at: typeof raw.at === 'string' ? raw.at : '', chain: Array.isArray(raw.chain) ? raw.chain.filter(function(s){ return typeof s === 'string'; }) : [], slot: COLA_PREFIX + key }; return; }
    var why = colaProblems(key, raw);
    if (why.length) { S.colaRotos[rotoId(key)] = { key: key, raw: x.raw, why: why, slot: COLA_PREFIX + key }; return; }
    /* pendiente semanal del formato anterior: se conserva íntegro y se concilia a mano; nunca se envía ni se reparte */
    if (kind === 'w') { S.heredados[key] = { key: key, raw: x.raw, e: raw, slot: COLA_PREFIX + key, at: typeof raw.at === 'string' ? raw.at : '' }; return; }
    var e = { key: key, v: raw.v, op: raw.op === 'delete' ? 'delete' : 'set', body: raw.op === 'delete' ? null : raw.body, at: typeof raw.at === 'string' ? raw.at : '', attempts: 0, warned: false, status: 'pendiente', why: '', durable: true, base: typeof raw.base === 'string' ? raw.base : null, mine: Array.isArray(raw.mine) ? raw.mine.filter(function(s){ return typeof s === 'string'; }) : [] };
    e.bytes = utf8Bytes(JSON.stringify(e.body || {})); e.depth = docDepth(e.body || {});
    if (overLimit(e)) { e.status = 'retenido'; e.why = 'tamano'; }
    if (kind === 'd') {
      e.rev = typeof e.body.rev === 'string' && e.body.rev ? e.body.rev : newRev(); e.body.rev = e.rev; e.body.base = e.base;
      e.bytes = diaBytes(e.body); if (overLimit(e)) { e.status = 'retenido'; e.why = 'tamano'; }
      if (isObj(raw.alt)) { e.alt = { rev: typeof raw.alt.rev === 'string' ? raw.alt.rev : null, body: isObj(raw.alt.body) ? raw.alt.body : null, at: typeof raw.alt.at === 'string' ? raw.alt.at : '' }; e.status = 'retenido'; e.why = 'conflicto'; }
      var wsd = wsOf(id), wk = S.weeks[wsd] || (S.weeks[wsd] = emptyWeek(wsd)); wk.days[wd(id)] = normDay(clone(e.body), id); if (wd(id) === 0 && e.body.blank === true) wk.blank = true;
    } else {
      var m = stateMap(kind);
      if (e.op === 'delete') delete m[id];
      else { var v = kind === 'f' ? normPerfil(clone(e.body)) : kind === 'c' ? sanitizeCustom(clone(e.body), false) : normFor(kind)(clone(e.body), id); if (v) m[id] = v; }
    }
    S.cola[key] = e; dirty[key] = true; ver[key] = Math.max(ver[key] || 0, e.v);
  });
  /* versiones desplazadas (copias íntegras, nunca enviadas) y últimas versiones propias confirmadas */
  loaded.desp.forEach(function(d){ var o = null; try { o = JSON.parse(d.raw); } catch (x) {} if (isObj(o) && typeof o.fecha === 'string' && isObj(o.body)) S.desplazadas[rotoId(o.fecha)] = { fecha: o.fecha, body: o.body, rev: typeof o.rev === 'string' ? o.rev : null, base: typeof o.base === 'string' ? o.base : null, motivo: typeof o.motivo === 'string' ? o.motivo : 'desplazada', otra: isObj(o.otra) ? o.otra : null, at: typeof o.at === 'string' ? o.at : '', slot: d.slot, durable: true }; else S.colaRotos[rotoId('desplazada')] = { key: 'desplazada', raw: d.raw, why: ['la copia desplazada no es legible'], slot: d.slot }; });
  loaded.mios.forEach(function(m){ var o = null; try { o = JSON.parse(m.raw); } catch (x) {} if (isObj(o) && typeof o.rev === 'string' && isObj(o.body)) S.mios[m.fecha] = { rev: o.rev, base: typeof o.base === 'string' ? o.base : null, body: o.body, at: typeof o.at === 'string' ? o.at : '', chain: Array.isArray(o.chain) ? o.chain.filter(function(s){ return typeof s === 'string'; }) : [], slot: m.slot }; });
  /* copias apartadas: el texto se conserva tal cual y la causa se vuelve a calcular con la misma validación */
  loaded.ileg.forEach(function(b){ S.colaRotos[rotoId(b.key)] = { key: b.key, raw: b.raw, why: rotoWhy(b.key, b.raw), slot: b.slot }; });
  refreshSave();
}
/* el estado de guardado se deriva de la cola: «Guardado» solo sin cola ni envíos en vuelo */
function refreshSave(){
  var keys = Object.keys(S.cola), s;
  if (S.dbState === 'off') s = 'off';
  else if (S.prepErr) s = 'error';
  else if (!keys.length) s = S.everSaved ? 'saved' : 'idle';
  else if (keys.some(function(k){ var e = S.cola[k]; return e.status === 'retenido' || e.status === 'error'; })) s = 'error';
  else s = 'saving';
  setSave(s);
}
function saveText(){
  var n = pendCount();
  if (S.save === 'off') return n ? 'Sin guardado en la nube · ' + n + (n === 1 ? ' cambio como borrador' : ' cambios como borrador') : 'Sin guardado en la nube';
  if (S.save === 'error') return n ? n + (n === 1 ? ' cambio pendiente de guardar' : ' cambios pendientes de guardar') : 'No se pudo guardar';
  if (S.save === 'saving') return 'Guardando…';
  if (S.save === 'saved') return 'Guardado';
  return 'Los cambios se guardan solos';
}
function setSave(s){ S.save = s; var els = document.querySelectorAll('[data-live="save"]'); for (var i = 0; i < els.length; i++) els[i].textContent = saveText(); }

/* base de datos */
function normItem(it){ var o = { k: it.k == null ? '' : String(it.k), ex: String(it.ex) }; FIELDS.forEach(function(f){ if (it[f] != null) o[f] = String(it[f]); }); var x = extrasOf(it, ITEM_KNOWN); if (x) o._x = x; return o; }
/* claves de ítem: una ausente, fuera de la gramática o repetida en el mismo día se reemplaza en memoria por una
   determinista (igual en cada snapshot); la original queda en _k0 y se vuelve a escribir tal cual (serItems) */
function normItems(arr){
  var seen = dict();
  return (Array.isArray(arr) ? arr : []).filter(function(x){ return isObj(x) && x.ex != null && x.ex !== ''; }).map(function(x, i){
    var o = normItem(x);
    if (!KEY_RE.test(o.k) || seen[o.k]) {
      var k0 = o.k, b = 'r' + i + '-' + hash36(k0), k = b, n = 1;
      while (seen[k]) k = b + '-' + n++;
      if (k0) o._k0 = k0;
      o.k = k;
    }
    seen[o.k] = true;
    return o;
  });
}
function normWeek(o, id){
  o = isObj(o) ? o : {};
  var days = Array.isArray(o.days) ? o.days : [];
  return { start: id, blank: !!o.blank, days: [0,1,2,3,4,5,6].map(function(i){ var d = isObj(days[i]) ? days[i] : {}; return { name: String(d.name || ''), rest: !!d.rest, tipo: d.tipo ? String(d.tipo) : null, items: normItems(d.items) }; }) };
}
/* día independiente: el documento se lee como un día de la semana antigua; rev/base/lin/blank/origen van a dmeta */
function normDay(o, id){ o = isObj(o) ? o : {}; var d = { name: String(o.name || ''), rest: !!o.rest, tipo: o.tipo ? String(o.tipo) : null, items: normItems(o.items) }; if (o.descarga === true) d.descarga = true; normBloques(d, o, true); var x = extrasOf(o, DAY_KNOWN); if (x) d._x = x; if (isObj(o.origen)) d._origen = clone(o.origen); return d; }
function metaDia(o){ return { src: 'dia', rev: revOf(o), base: typeof o.base === 'string' ? o.base : null, lin: linOf(o), blank: o.blank === true, mig: isObj(o.origen) && typeof o.origen.migracion === 'string' ? o.origen.migracion : null }; }
function normTipo(o, id){ o = isObj(o) ? o : {}; var t = { id: id, name: String(o.name || ''), items: normItems(o.items), ejemplo: !!o.ejemplo }; normBloques(t, o, false); var x = extrasOf(o, TIPO_KNOWN); if (x) t._x = x; return t; }
/* CALENTAMIENTO Y ESTIRAMIENTO: listas cortas de { n: nombre, t: dosis } en el día tipo y en el día; el día lleva además
   la marca de hecho de cada bloque. Son campos nuevos: los documentos viejos siguen leyéndose igual */
var BLOQUES = ['calent', 'estir'], BLOQUE_NOMBRE = { calent: 'Calentamiento', estir: 'Estiramiento' }, BLOQUE_OK = { calent: 'calentOk', estir: 'estirOk' };
var BLOQUE_DEF = {
  calent: {
    pierna: [['Caminadora suave', '5 min'], ['Círculos de cadera', '10/lado'], ['Balanceo de pierna al frente', '10/pierna'], ['Balanceo de pierna lateral', '10/pierna'], ['Sentadilla sin peso, lenta', '10'], ['Zancadas caminando', '8'], ['Puente de glúteo', '10'], ['Aproximación: barra sola, luego mitad del peso', '1 serie c/u']],
    torso: [['Caminadora suave', '5 min'], ['Círculos de brazos adelante y atrás', '10 y 10'], ['Rotaciones de torso', '10'], ['Face pull suave o band pull-apart', '15'], ['Flexiones', '10'], ['Dislocaciones de hombro con banda o toalla', '10'], ['Aproximación: primer ejercicio a mitad de peso', '1 serie']]
  },
  estir: {
    pierna: [['Cuádriceps de pie, talón al glúteo', '30 s/lado'], ['Isquiotibiales, pierna sobre un banco', '30 s/lado'], ['Flexores de cadera, rodilla al piso y cadera adelante', '30 s/lado'], ['Glúteo, figura 4', '30 s/lado'], ['Pantorrilla contra la pared', '30 s/lado']],
    torso: [['Pectoral en el marco de una puerta', '30 s/lado'], ['Dorsal colgado o apoyado en el rack', '30 s'], ['Tríceps por encima de la cabeza', '30 s/lado'], ['Hombro, brazo cruzado', '30 s/lado'], ['Antebrazos', '20 s/lado'], ['Postura de niño', '30 s']]
  }
};
function bloqueDef(s, q){ return (BLOQUE_DEF[s][q] || []).map(function(x){ return { n: x[0], t: x[1] }; }); }
function normBloque(a){ if (!Array.isArray(a)) return []; return a.filter(isObj).map(function(x){ return { n: String(x.n == null ? '' : x.n).slice(0, 120), t: String(x.t == null ? '' : x.t).slice(0, 60) }; }).filter(function(x){ return x.n || x.t; }).slice(0, 30); }
function normBloques(d, o, esDia){ BLOQUES.forEach(function(s){ var l = normBloque(o[s]); if (l.length) d[s] = l; if (esDia && o[BLOQUE_OK[s]] === true) d[BLOQUE_OK[s]] = true; }); }
function serBloques(body, d, esDia){ BLOQUES.forEach(function(s){ var l = normBloque(d[s]); if (l.length) body[s] = l; if (esDia && d[BLOQUE_OK[s]] === true) body[BLOQUE_OK[s]] = true; }); return body; }
function bloqueProblems(o, why, esDia){ BLOQUES.forEach(function(s){ if (o[s] !== undefined && !Array.isArray(o[s])) why.push('el ' + BLOQUE_NOMBRE[s].toLowerCase() + ' no es una lista'); if (esDia && o[BLOQUE_OK[s]] !== undefined && typeof o[BLOQUE_OK[s]] !== 'boolean') why.push('la marca de ' + BLOQUE_NOMBRE[s].toLowerCase() + ' hecho no es sí o no'); }); }
function copiarBloques(dst, src){ BLOQUES.forEach(function(s){ if (src && src[s] && src[s].length) dst[s] = clone(src[s]); else delete dst[s]; delete dst[BLOQUE_OK[s]]; }); return dst; }
/* qué sugerencia ofrecer: pierna o torso según el nombre o los grupos musculares del contenido */
function bloqueTipoSugerido(c){
  var n = norm(c.name || ''); if (/pierna|gluteo|glúteo|lower|leg/.test(n)) return 'pierna'; if (/torso|empuje|tiron|tirón|pecho|espalda|upper|push|pull/.test(n)) return 'torso';
  var pierna = 0, torso = 0; (c.items || []).forEach(function(it){ if (isCardio(it)) return; var g = exById(it.ex).g; if (['Cuádriceps', 'Isquios', 'Glúteo', 'Pantorrilla'].indexOf(g) >= 0) pierna++; else if (g && g !== 'Core') torso++; });
  return pierna >= torso ? 'pierna' : 'torso';
}

/* propios: textos, listas de textos e id de foto válidos; _ro marca la copia de solo lectura de un documento aislado */
function sanitizeCustom(o, ro){
  o = isObj(o) ? o : {};
  var c = { n: typeof o.n === 'string' ? o.n : '', t: o.t === 'cardio' ? 'cardio' : 'fuerza', g: typeof o.g === 'string' ? o.g : '', s: strList(o.s), e: typeof o.e === 'string' ? o.e : '', p: strList(o.p), img: typeof o.img === 'string' && ASSET_RE.test(o.img) ? o.img : null, deleted: o.deleted === true };
  if (typeof o.createdAt === 'string' && o.createdAt) c.createdAt = o.createdAt;
  if (CARGAS.indexOf(o.carga) >= 0) c.carga = o.carga;
  var x = extrasOf(o, CUSTOM_KNOWN); if (x) c._x = x;
  if (ro) c._ro = true;
  return c;
}
/* aislamiento: lo que la normalización perdería, movería de día o no sabe leer no se oculta en silencio.
   Se aparta, se explica (vAislados) y no se sobrescribe; el original queda tal cual en db.
   Esquema de lectura: la app es el único escritor legítimo. Lo que siempre escribe debe venir con su tipo; el formato se
   comprueba antes de cualquier valor por defecto. Solo toma valor por defecto un escalar opcional ausente (nombre,
   descanso, marca en blanco, ejemplo, campos de ítem, campos de propio, sexo). Los contenedores son obligatorios: cuerpo
   del documento, lista de 7 días, cada día, lista de ítems. null solo se acepta donde la app lo escribe (día tipo de un
   día, foto de un propio). Un número donde se espera texto se lee como texto, sin pérdida. Lo demás aísla el documento */
function textOk(v){ return typeof v === 'string' || typeof v === 'number'; }
function itemProblems(items, where, why){
  if (!Array.isArray(items)) { why.push(where + (items == null ? ': falta la lista de ejercicios' : ': la lista de ejercicios no tiene el formato esperado')); return; }
  items.forEach(function(x, j){
    if (!isObj(x) || !textOk(x.ex) || x.ex === '') { why.push(where + ': el ejercicio ' + (j + 1) + ' no tiene un identificador válido'); return; }
    if (['k'].concat(FIELDS).some(function(f){ return x[f] !== undefined && !textOk(x[f]); })) why.push(where + ': el ejercicio ' + (j + 1) + ' tiene campos con formato no reconocido');
  });
}
function dayProblems(o, id){
  if (!isObj(o)) return ['el documento no tiene el formato esperado'];
  var why = [];
  if (o.fecha !== undefined && o.fecha !== id) why.push('la fecha del documento (' + short(o.fecha) + ') no coincide con su identificador');
  if (o.esquema !== undefined && typeof o.esquema !== 'number') why.push('la versión de esquema no es un número');
  if (o.name !== undefined && !textOk(o.name)) why.push('el nombre no es texto');
  if (o.rest !== undefined && typeof o.rest !== 'boolean') why.push('la marca de descanso no es sí o no');
  if (o.tipo !== undefined && o.tipo !== null && !textOk(o.tipo)) why.push('el día tipo no es un identificador');
  if (o.blank !== undefined && typeof o.blank !== 'boolean') why.push('la marca de semana en blanco no es sí o no');
  if (o.descarga !== undefined && typeof o.descarga !== 'boolean') why.push('la marca de descarga no es sí o no');
  bloqueProblems(o, why, true);
  if (o.rev !== undefined && !(typeof o.rev === 'string' && o.rev)) why.push('la revisión no es texto');
  if (o.base !== undefined && o.base !== null && typeof o.base !== 'string') why.push('la revisión base no es texto');
  if (o.lin !== undefined && !Array.isArray(o.lin)) why.push('la cadena de revisiones no es una lista');
  if (o.origen !== undefined && !isObj(o.origen)) why.push('el origen no tiene el formato esperado');
  itemProblems(o.items, 'ejercicios', why);
  return why;
}
function weekProblems(o){
  if (!isObj(o)) return ['el documento no tiene el formato esperado'];
  if (!Array.isArray(o.days)) return [o.days == null ? 'no tiene la lista de días' : 'los días no tienen el formato esperado'];
  var why = [];
  if (o.days.length !== 7) why.push('tiene ' + o.days.length + ' días y se esperan 7');
  if (o.blank !== undefined && typeof o.blank !== 'boolean') why.push('la marca de semana en blanco no es sí o no');
  o.days.slice(0, 7).forEach(function(d, i){
    if (!isObj(d)) { why.push(DAYS[i] + (d == null ? ': falta el día' : ': formato no reconocido')); return; }
    if (d.name !== undefined && !textOk(d.name)) why.push(DAYS[i] + ': el nombre no es texto');
    if (d.rest !== undefined && typeof d.rest !== 'boolean') why.push(DAYS[i] + ': la marca de descanso no es sí o no');
    if (d.tipo !== undefined && d.tipo !== null && !textOk(d.tipo)) why.push(DAYS[i] + ': el día tipo no es un identificador');
    itemProblems(d.items, DAYS[i], why);
  });
  return why;
}
function tipoProblems(o){
  if (!isObj(o)) return ['el documento no tiene el formato esperado'];
  var why = [];
  if (o.name !== undefined && !textOk(o.name)) why.push('el nombre no es texto');
  if (o.ejemplo !== undefined && typeof o.ejemplo !== 'boolean') why.push('la marca de ejemplo no es sí o no');
  bloqueProblems(o, why, false);
  itemProblems(o.items, 'ejercicios', why);
  return why;
}
function customProblems(o){
  if (!isObj(o)) return ['el documento no tiene el formato esperado'];
  var why = [];
  if (o.n !== undefined && typeof o.n !== 'string') why.push('el nombre no es texto');
  if (o.t !== undefined && o.t !== 'fuerza' && o.t !== 'cardio') why.push('el tipo «' + short(o.t) + '» no se reconoce');
  if (o.g !== undefined && typeof o.g !== 'string') why.push('el músculo principal no es texto');
  if (o.e !== undefined && typeof o.e !== 'string') why.push('el equipo no es texto');
  if (o.s !== undefined && !isStrList(o.s)) why.push('los músculos secundarios no son una lista de textos');
  if (o.p !== undefined && !isStrList(o.p)) why.push('los pasos no son una lista de textos');
  if (o.img != null && !(typeof o.img === 'string' && ASSET_RE.test(o.img))) why.push('la foto tiene un identificador no válido');
  if (o.deleted !== undefined && typeof o.deleted !== 'boolean') why.push('la marca de borrado no es sí o no');
  if (o.createdAt !== undefined && typeof o.createdAt !== 'string') why.push('la fecha de creación no es texto');
  if (o.carga !== undefined && CARGAS.indexOf(o.carga) < 0) why.push('la modalidad de carga «' + short(String(o.carga)) + '» no se reconoce');
  return why;
}
function perfilProblems(o){
  if (!isObj(o)) return ['el documento no tiene el formato esperado'];
  var why = [], n = o.nacimiento, e = typeof o.estatura === 'number' ? o.estatura : pnum(o.estatura);
  if (n !== undefined && n !== '' && !(typeof n === 'string' && isoOk(n))) why.push('la fecha de nacimiento «' + short(n) + '» no existe');
  if (o.estatura !== undefined && !(e > 0)) why.push('la estatura «' + short(o.estatura) + '» no es un número válido');
  if (o.sexo !== undefined && o.sexo !== 'H' && o.sexo !== 'M') why.push('el sexo «' + short(o.sexo) + '» no se reconoce');
  return why;
}
/* null si el documento es válido. Si no: por qué, lock (nunca se escribe) y show (se muestra una copia saneada en v).
   Un cuerpo que no es objeto (null incluido) es un documento que existe y no se puede leer: nunca equivale a ausencia */
function checkDoc(key, id, data){
  var k = key.charAt(0), why;
  if ((k === 'd' || k === 'w' || k === 'p' || k === 'm') && !isoOk(id)) return { why: ['la fecha ' + short(id) + ' no existe'], lock: true };
  if (k === 'w' && wd(id) !== 0) return { why: ['la semana empieza en ' + DAYS[wd(id)].toLowerCase() + ', no en lunes'], lock: true };
  if (!docIdOk(id)) return { why: ['el identificador no es válido'], lock: true };
  if (!isObj(data)) return { why: [data == null ? 'el documento existe pero no tiene cuerpo' : 'el documento no tiene el formato esperado'], lock: k !== 'p' && k !== 'm' };
  if (k === 'd') { why = dayProblems(data, id); return why.length ? { why: why, lock: true } : null; }
  if (k === 'g' || k === 'k') return null;
  if (k === 'w') { why = weekProblems(data); return why.length ? { why: why, lock: true } : null; }
  if (k === 't') { why = tipoProblems(data); return why.length ? { why: why, lock: true, name: typeof data.name === 'string' ? data.name : '' } : null; }
  if (k === 'c') { why = customProblems(data); return why.length ? { why: why, lock: true, show: true, name: typeof data.n === 'string' ? data.n : '', v: sanitizeCustom(clone(data), true) } : null; }
  if (k === 'p') return normPeso(clone(data), id) ? null : { why: ['el peso guardado no es un número válido'], lock: false };
  if (k === 'm') return normMed(clone(data), id) ? null : { why: ['no tiene ninguna medida válida'], lock: false };
  why = perfilProblems(data);
  return why.length ? { why: why, lock: false, show: true, v: normPerfil(clone(data)) } : null;
}
function aislEntry(col, id, chk, data){ return { col: col, id: id, why: chk.why, lock: !!chk.lock, show: !!chk.show, name: chk.name || '', raw: data }; }
function applySnap(snap, key, target, normFn){
  var col = COLS[key.charAt(0)], seen = dict(), present = dict();
  snap.docs.forEach(function(doc){
    /* ausente o eliminado es solo lo que el contrato marca con exists: false; sale del estado y de los aislados */
    if (doc.exists === false) return;
    var id = String(doc.id), path = col + '/' + id, data = doc.data();
    present[id] = true;
    var chk = checkDoc(key, id, data);
    /* el aislamiento se registra aunque haya un cambio pendiente: la cola lo retiene en vez de pisar el documento */
    if (chk && !chk.show) { S.aislados[path] = aislEntry(col, id, chk, data); return; }
    seen[id] = true;
    if (chk) S.aislados[path] = aislEntry(col, id, chk, data); else delete S.aislados[path];
    if (dirty[key + id]) return;
    if (!isObj(data)) return;
    var v = chk ? chk.v : normFn(clone(data), id); if (v) target[id] = v; else delete target[id];
  });
  Object.keys(target).forEach(function(id){ if (!seen[id] && !dirty[key + id] && !target[id]._local) delete target[id]; });
  Object.keys(S.aislados).forEach(function(p){ var b = S.aislados[p]; if (b.col === col && !present[b.id]) delete S.aislados[p]; });
}
/* definitiva solo si el contrato lo declara: sin metadatos no se demuestra procedencia ni ausencia */
function definitive(snap){ return !!(snap && snap.metadata && snap.metadata.fromCache === false); }
/* snapshot de días: cada documento se valida y se aísla como cualquier otro; dentro del intervalo suscrito, lo que no
   llegó ya no existe (o no es visible) y sale del estado si no está sucio. Un día sucio conserva su versión local, y
   solo se anota la revisión remota para detectar conflictos. Nunca se escribe desde aquí */
function applyDias(snap){
  var seen = dict(), present = dict(), isDef = definitive(snap);
  snap.docs.forEach(function(doc){
    if (doc.exists === false) return;
    var id = String(doc.id), path = 'dias/' + id, data = doc.data();
    present[id] = true;
    var chk = checkDoc('d:', id, data);
    if (chk) { S.aislados[path] = aislEntry('dias', id, chk, data); return; }
    delete S.aislados[path];
    if (migInerte(id, data)) { delete S.ddocs[id]; if (!dirty['d:' + id]) delete S.dmeta[id]; return; }
    seen[id] = true;
    var meta = metaDia(data), prev = S.dmeta[id];
    S.ddocs[id] = normDay(clone(data), id); S.dmeta[id] = meta;
    observeRev(id, meta, data, prev);
  });
  Object.keys(S.ddocs).forEach(function(id){ if (!seen[id] && inRango(id) && !present[id]) { delete S.ddocs[id]; if (!dirty['d:' + id]) delete S.dmeta[id]; } });
  Object.keys(S.aislados).forEach(function(p){ var b = S.aislados[p]; if (b.col === 'dias' && !present[b.id] && inRango(b.id)) delete S.aislados[p]; });
  if (isDef) S.defin.d = true;
  rebuildWeeks();
  /* solo con lectura definitiva; autoTried evita repetirlo y las guardas de autoFill impiden crear sobre algo existente */
  if (isDef) { cargarArchivo(); maybeAutoFill(); }
}
/* historial anterior al intervalo suscrito: una lectura única al tener la primera lectura definitiva, validada como
   cualquier documento recibido. Sin consultas, la colección completa ya está suscrita; sin lectura de colección, el
   historial anterior queda declarado como no disponible: nunca se muestra un historial parcial como completo */
function cargarArchivo(){
  if (S.archivo || !S.db || !S.rango) return;
  if (S.proto.where === false) { S.archivo = { estado: 'completo', docs: 0, hasta: null }; return; }
  var col = S.db.collection('dias');
  if (typeof col.where !== 'function' || typeof col.get !== 'function') { S.archivo = { estado: 'no-disponible', docs: 0, hasta: S.rango.from }; requestRender(); return; }
  S.archivo = { estado: 'cargando', docs: 0, hasta: S.rango.from };
  Promise.resolve().then(function(){ return col.where('fecha', '<', S.rango.from).get(); }).then(function(snap){
    if (snap.metadata && snap.metadata.fromCache === true) throw { code: 'cache' };
    var n = 0;
    snap.docs.forEach(function(doc){
      if (doc.exists === false) return;
      var id = String(doc.id), data = doc.data(), chk = checkDoc('d:', id, data);
      if (chk) { S.aislados['dias/' + id] = aislEntry('dias', id, chk, data); return; }
      if (migInerte(id, data) || dirty['d:' + id] || inRango(id)) return;
      S.ddocs[id] = normDay(clone(data), id); S.dmeta[id] = metaDia(data); n++;
    });
    S.archivo = { estado: 'completo', docs: n, hasta: S.rango.from }; rebuildWeeks(); requestRender();
  }).catch(function(err){ S.archivo = { estado: 'error', docs: 0, hasta: S.rango.from, code: err && err.code ? err.code : 'unavailable' }; requestRender(); });
}
function archivoNota(){
  var a = S.archivo; if (!a || !a.hasta) return '';
  if (a.estado === 'completo') return '<p class="hint small">Historial anterior al ' + esc(dShort(a.hasta)) + ': ' + a.docs + (a.docs === 1 ? ' día cargado' : ' días cargados') + '.</p>';
  if (a.estado === 'cargando') return '<p class="hint small" role="status">Cargando el historial anterior al ' + esc(dShort(a.hasta)) + '…</p>';
  return '<div class="banner pend" role="status"><span>Historial incompleto: lo anterior al ' + esc(dShort(a.hasta)) + ' no se pudo cargar en este runtime' + (a.code ? ' (' + esc(a.code) + ')' : '') + '. Los cálculos de «última vez» y progreso no lo incluyen.</span></div>';
}
/* al llegar otra revisión de un día: si hay una edición propia pendiente hecha sobre otra base, queda retenida como
   conflicto (o, si ya viaja, la versión ajena se conserva como desplazada); si la última versión propia confirmada no
   es antecesora de la que llegó (ni por base ni por la cadena corta), fue desplazada y se conserva como copia */
function observeRev(id, meta, data, prev){
  var key = 'd:' + id, e = S.cola[key], rev = meta.rev, mio = S.mios[id];
  if (prev && prev.rev === rev) return;
  if (e && (rev === e.rev || (e.mine || []).indexOf(rev) >= 0)) return;
  if (e) {
    var nuestras = [e.rev].concat(e.mine || []);
    if (desciendeDe(meta, nuestras)) {
      /* el servicio aceptó lo nuestro y otro ya construyó encima: nuestra escritura rige como antecesora, no como vigente */
      if (inflight[key] === e.v) { delete inflight[key]; clearTimeout(timers[key]); delete timers[key]; retirarEntrada(key, e, recordMio(id, e.rev, e.body, [rev], key)); }
      else { e.base = rev; e.mine = []; e.body.base = rev; colaPut(key, e); }
      refreshSave(); renderPend();
    } else if (e.status !== 'retenido' && !sameLineage(e, rev)) {
      /* ya viaja: quién rige se decide al confirmar, con lo observado; antes de enviar: conflicto para elegir */
      if (!inflight[key]) conflicto(e, id, data, rev);
    }
  }
  /* la última versión propia confirmada sigue protegida mientras exista: una sucesora la reconoce (y se anota en su
     cadena); una revisión que no descienda de ella ni de sus sucesoras conocidas la desplazó y se copia */
  if (mio && mio.rev !== rev) {
    var cadena = [mio.rev].concat(mio.chain || []);
    if (desciendeDe(meta, cadena)) { if ((mio.chain || []).indexOf(rev) < 0) { mio.chain = (mio.chain || []).concat([rev]).slice(-MAX_CHAIN); mioPersist(id, mio); } }
    else if (!(e && (e.mine || []).indexOf(mio.rev) >= 0)) { if (keepDesplazada(id, mio.body, mio.rev, mio.base, 'desplazada', { rev: rev, base: meta.base })) forgetMio(id); }
  }
}
function slotLibre(prefix, key){ for (var n = 1; n <= 99; n++) { var s = prefix + key + '#' + n; if (localStorage.getItem(s) === null) return s; } return null; }
/* copia íntegra de una versión que perdió frente a otra (o que la nuestra reemplazó): comprobada al escribir, visible,
   copiable, restaurable como edición nueva y descartable a mano. Nunca se envía sola */
function keepDesplazada(fecha, body, rev, base, motivo, otra){
  if (!isObj(body)) return false;
  var dupK = Object.keys(S.desplazadas).filter(function(k){ var d = S.desplazadas[k]; return d.fecha === fecha && d.rev === rev && d.motivo === motivo; })[0];
  if (dupK && S.desplazadas[dupK].durable === true) return true;
  /* un intento anterior pudo quedar solo en memoria: se reutiliza esa entrada y se vuelve a intentar la copia */
  var o = dupK ? S.desplazadas[dupK] : { fecha: fecha, body: clone(body), rev: rev, base: base === undefined ? null : base, motivo: motivo, otra: otra || null, at: new Date().toISOString() }, slot = null, txt = JSON.stringify({ fecha: o.fecha, body: o.body, rev: o.rev, base: o.base, motivo: o.motivo, otra: o.otra, at: o.at });
  if (storeOk()) { try { slot = slotLibre(DESP_PREFIX, fecha); if (slot) { localStorage.setItem(slot, txt); if (localStorage.getItem(slot) !== txt) slot = null; } } catch (x) { slot = null; } }
  o.slot = slot; o.durable = !!slot;
  if (dupK) { refreshSave(); renderPend(); requestRender(); return o.durable; }
  S.desplazadas[rotoId(fecha)] = o;
  showToast((motivo === 'reemplazada' ? 'Tu guardado del ' + diaLabel(fecha) + ' reemplazó una versión hecha en otro dispositivo; esa versión quedó copiada en «Ver pendientes»' : 'Otro dispositivo reemplazó tu versión del ' + diaLabel(fecha) + '; tu versión quedó copiada en «Ver pendientes»') + (o.durable ? '.' : ', pero el navegador no permitió guardar la copia: solo está en memoria.'));
  refreshSave(); renderPend(); requestRender();
  return o.durable;
}
/* última versión propia confirmada por fecha, con sus sucesoras reconocidas: permite reconocer un desplazamiento
   tras recargar aunque antes llegaran sucesoras. Cota: se retiran primero las más antiguas ya reconocidas por una
   sucesora; una versión que ningún otro cambio reconoció no se retira sola (su número está acotado por los días
   editados en este dispositivo). El estado de la cota se muestra en «Ver pendientes» */
var MAX_CHAIN = 16;
function mioTexto(o, aceptada){ var p = { rev: o.rev, base: o.base, body: o.body, at: o.at, chain: o.chain || [] }; if (aceptada) p.aceptada = true; return JSON.stringify(p); }
function mioPersist(fecha, o){ if (!storeOk()) return false; var slot = o.slot || (MIO_PREFIX + fecha), txt = mioTexto(o, slot.indexOf(COLA_PREFIX) === 0); try { localStorage.setItem(slot, txt); return localStorage.getItem(slot) === txt; } catch (x) { return false; } }
/* devuelve dónde quedó comprobada la protección: 'mio' (su lugar), 'cola' (la clave de la cola, marcada como aceptada:
   nunca se reenvía) o false (en ningún lugar: la entrada no se retira). Cota conocida: 400 fechas, retirando primero las
   más antiguas ya reconocidas por una sucesora (límite aplazado, P-019) */
function recordMio(fecha, rev, body, chain, key){
  var o = { rev: rev, base: body && body.base !== undefined ? body.base : null, body: clone(body), at: new Date().toISOString(), chain: (chain || []).slice(0, MAX_CHAIN), slot: MIO_PREFIX + fecha };
  S.mios[fecha] = o;
  var donde = false;
  if (mioPersist(fecha, o)) donde = 'mio';
  else if (key) { o.slot = COLA_PREFIX + key; if (mioPersist(fecha, o)) donde = 'cola'; else o.slot = MIO_PREFIX + fecha; }
  if (donde === 'cola') showToast('El navegador no permitió guardar la protección de este guardado en su lugar; se conservó dentro del borrador.');
  if (donde) { var ks = Object.keys(S.mios); if (ks.length > MAX_MIOS) ks.filter(function(k){ return (S.mios[k].chain || []).length; }).sort(function(a, b){ return (S.mios[a].at || '') < (S.mios[b].at || '') ? -1 : 1; }).slice(0, ks.length - MAX_MIOS).forEach(forgetMio); }
  return donde;
}
function forgetMio(fecha){ var m = S.mios[fecha]; if (!m) return; delete S.mios[fecha]; try { localStorage.removeItem(m.slot || (MIO_PREFIX + fecha)); } catch (x) {} }
/* la semana en memoria se reconstruye a partir de los días: documentos diarios primero, semana antigua para las fechas
   sin documento (solo lectura), y la versión local de lo que se está editando. Una fuente por fecha, sin doble cómputo */
function rebuildWeeks(){
  var next = dict();
  function wk(ws){ return next[ws] || (next[ws] = { start: ws, blank: false, days: [null, null, null, null, null, null, null] }); }
  Object.keys(S.ddocs).forEach(function(f){ var w = wk(wsOf(f)), i = wd(f); w.days[i] = S.ddocs[f]; if (i === 0 && S.dmeta[f] && S.dmeta[f].blank) w.blank = true; });
  Object.keys(S.legacy).forEach(function(ws){ var L = S.legacy[ws], w = wk(ws), anyDoc = w.days.some(Boolean); for (var i = 0; i < 7; i++) if (!w.days[i]) w.days[i] = L.days[i]; if (!anyDoc) w.blank = !!L.blank; });
  Object.keys(dirty).forEach(function(k){ if (k.charAt(0) !== 'd') return; var f = k.slice(2), cur = liveDay(f); if (cur) { var w = wk(wsOf(f)); w.days[wd(f)] = cur; if (wd(f) === 0 && S.weeks[wsOf(f)] && S.weeks[wsOf(f)].blank) w.blank = true; } });
  Object.keys(S.weeks).forEach(function(ws){ if (!next[ws] && S.weeks[ws]._local) next[ws] = S.weeks[ws]; });
  Object.keys(next).forEach(function(ws){ var w = next[ws]; for (var i = 0; i < 7; i++) if (!w.days[i]) w.days[i] = emptyDay(); });
  S.weeks = next;
}
function requestRender(){ if (isEditing()) S.pending = true; else render(); }
function isEditing(){ var a = document.activeElement; if (!a || !document.getElementById('app').contains(a)) return false; if (a.tagName === 'TEXTAREA' || a.tagName === 'SELECT') return true; return a.tagName === 'INPUT' && ['checkbox','radio','file'].indexOf(a.type) < 0; }
function checkLoaded(){ if (S.loaded.d && S.loaded.t && S.loaded.c && (S.legacyMode === false || S.loaded.w) && S.dbState === 'loading') { S.dbState = 'ok'; maybeAutoFill(); } }
/* una suscripción terminada se reconecta aparte de los reenvíos: revoked apaga el guardado; lo demás ofrece «Reconectar» */
function snapErr(col, e){
  var code = e && typeof e.code === 'string' ? e.code : 'unavailable';
  if (code === 'revoked' || code === 'not_granted' || code === 'capability_disabled' || code === 'capability_removed') { goOff('sinacceso'); return; }
  /* sin estado de migración legible, la app asume el modo de transición y lee también las semanas antiguas */
  if (col === 'migracion' && S.legacyMode == null && S.db) { S.legacyMode = true; try { subscribeCol(S.db, 'w'); } catch (x) { S.subDead.semanas = 'unavailable'; } }
  S.subDead[col] = code; refreshSave(); renderPend(); requestRender();
}
function reconnect(){
  if (!S.db) { showToast('Sin acceso al guardado en la nube. Recarga la página para reconectar.'); return; }
  Object.keys(S.subDead).forEach(function(col){ var kind = Object.keys(COLS).filter(function(k){ return COLS[k] === col; })[0]; if (kind) { try { subscribeCol(S.db, kind); } catch (x) { S.subDead[col] = 'unavailable'; } } });
  refreshSave(); renderPend(); requestRender();
}
/* respaldo local en el navegador: apagado en el código publicable. Para probar sin Claude, `python 4-app/servir.py`
   entrega esta página con LOCAL_OK = true solo en memoria; este archivo no se edita para eso */
var LOCAL_OK = false;
function lsOk(){ try { localStorage.setItem('rutinas:t', '1'); localStorage.removeItem('rutinas:t'); return true; } catch (e) { return false; } }
function localDb(){
  var subs = {};
  function load(c){ try { return JSON.parse(localStorage.getItem('rutinas:' + c) || '{}') || {}; } catch (e) { return {}; } }
  function save(c, o){ try { localStorage.setItem('rutinas:' + c, JSON.stringify(o)); return true; } catch (e) { return false; } }
  function snap(c){ var o = load(c); return { docs: Object.keys(o).map(function(id){ return { id: id, exists: true, data: function(){ return o[id]; }, metadata: { fromCache: false, hasPendingWrites: false } }; }), metadata: { fromCache: false, hasPendingWrites: false } }; }
  function emit(c){ (subs[c] || []).forEach(function(f){ f(snap(c)); }); }
  return {
    collection: function(c){ return { onSnapshot: function(f){ (subs[c] = subs[c] || []).push(f); setTimeout(function(){ f(snap(c)); }, 0); return function(){}; } }; },
    doc: function(path){
      var p = path.split('/'), c = p[0], id = p[1];
      return {
        set: function(v){ var o = load(c); o[id] = v; if (!save(c, o)) return Promise.reject({ code: 'quota_exceeded' }); emit(c); return Promise.resolve(); },
        get: function(){ var o = load(c), v = own(o, id) ? o[id] : undefined; return Promise.resolve({ id: id, exists: v !== undefined, data: function(){ return v; }, metadata: { fromCache: false, hasPendingWrites: false } }); },
        delete: function(){ var o = load(c); delete o[id]; if (!save(c, o)) return Promise.reject({ code: 'quota_exceeded' }); emit(c); return Promise.resolve(); }
      };
    }
  };
}
function noDb(){ if (LOCAL_OK && lsOk()) { S.local = true; startDb(localDb()); } else goOff('sinacceso'); }
/* arranque: el almacenamiento local de runtime.js (IndexedDB en este dispositivo) reemplaza al runtime de artefactos de
   Claude; si no está disponible, el modo local en localStorage sigue siendo el último recurso */
function initDb(){
  restoreCola();
  var rt = window.RutinasRuntime;
  if (!rt || typeof rt.abrir !== 'function') { S.assets = null; noDb(); return; }
  rt.abrir().then(function(r){ S.assets = r.assets || null; startDb(r.db); if (top() && top().v === 'crear') render(); }, function(){ S.assets = null; noDb(); });
}
function fotoUrl(id){ var rt = window.RutinasRuntime; return rt && typeof rt.fotoUrl === 'function' ? rt.fotoUrl(id) : ''; }
function normLegacy(o, id){ S.legacyRaw[id] = clone(o); return normWeek(o, id); }
function normFor(kind){ return { d: normDay, w: normLegacy, t: normTipo, p: normPeso, m: normMed, f: normPerfil, c: function(o){ return sanitizeCustom(o, false); }, g: function(o){ return clone(o); }, k: function(o){ return window.Ciclo.normalizar(o); } }[kind]; }
/* intervalo suscrito de días: un año hacia atrás y un mes hacia delante desde la semana visible y la actual; crece
   al navegar y no se acorta en la sesión. Si el runtime no ofrece consultas, se suscribe la colección completa */
function rangoPara(ws){
  var cm = curMonday(), lo = ws < cm ? ws : cm, hi = ws > cm ? ws : cm;
  var r = { from: shiftWeek(lo, -RANGO_SEMANAS), to: fechaDe(shiftWeek(hi, RANGO_ADELANTE), 6) };
  if (S.rango) { if (S.rango.from < r.from) r.from = S.rango.from; if (S.rango.to > r.to) r.to = S.rango.to; }
  return r;
}
function diasQuery(db){ var col = db.collection('dias'), can = typeof col.where === 'function'; S.proto.where = can; if (!can) return col; return col.where('fecha', '>=', S.rango.from).where('fecha', '<=', S.rango.to); }
function ensureRango(ws){ var r = rangoPara(ws); if (S.rango && r.from === S.rango.from && r.to === S.rango.to) return; S.rango = r; if (S.db && S.proto.where !== false) { S.defin.d = false; if (S.archivo && S.archivo.estado !== 'completo') S.archivo = null; try { subscribeCol(S.db, 'd'); } catch (x) { S.subDead.dias = 'unavailable'; } } }
/* una suscripción por colección, guardada para poder cerrarla y abrir otra al reconectar o al cambiar el intervalo */
function subscribeCol(db, kind){
  var col = COLS[kind];
  if (S.subs[col]) { try { S.subs[col](); } catch (x) {} }
  delete S.subDead[col];
  var src = kind === 'd' ? diasQuery(db) : db.collection(col);
  S.subs[col] = src.onSnapshot(function(snap){
    if (kind === 'd') applyDias(snap);
    else {
      applySnap(snap, kind + ':', stateMap(kind), normFor(kind));
      if (kind === 'w') { Object.keys(S.legacyRaw).forEach(function(ws){ if (!S.legacy[ws]) delete S.legacyRaw[ws]; }); if (definitive(snap)) S.defin.w = true; rebuildWeeks(); if (S.defin.w) maybeAutoFill(); }
      if (kind === 'g') onMig(db);
    }
    S.loaded[kind] = true; checkLoaded(); kickQueue(); requestRender();
  }, function(e){ snapErr(col, e); });
}
/* el estado de migración decide el modo: mientras no esté completa, las semanas antiguas se leen como fuente de solo
   lectura (transición). Completa, no se suscriben: la migración las consulta a demanda */
/* copias inactivas de una migración revertida: salen del estado remoto en memoria sin tocar la base */
function onMigEstado(){
  var rev = S.mig && S.mig.estado === 'revertida' && typeof S.mig.id === 'string' ? S.mig.id : null;
  if (rev === S.migRevertida) return;
  S.migRevertida = rev;
  Object.keys(S.dmeta).forEach(function(id){ var m = S.dmeta[id]; if (m && m.src === 'dia' && m.mig === rev && m.rev === 'm:' + rev + ':' + id) { delete S.ddocs[id]; delete S.dmeta[id]; } });
  rebuildWeeks();
}
function onMig(db){
  S.mig = S.migDocs[MIG_ID] ? S.migDocs[MIG_ID] : null;
  onMigEstado();
  if (S.legacyMode == null) { S.legacyMode = !(S.mig && S.mig.estado === 'completa'); if (S.legacyMode) { try { subscribeCol(db, 'w'); } catch (x) { S.subDead.semanas = 'unavailable'; } } else S.loaded.w = true; }
}
function startDb(db){
  S.db = db; S.rango = rangoPara(S.ws);
  /* capacidades del runtime, detectadas sin tocar la red: construir una referencia es puro */
  try { var probe = db.doc('dias/1970-01-05'); S.proto.get = typeof probe.get === 'function'; S.proto.acquire = typeof probe.acquire === 'function'; } catch (e) { S.proto.get = false; S.proto.acquire = false; }
  try { ['d', 't', 'c', 'p', 'm', 'f', 'g', 'k'].forEach(function(kind){ subscribeCol(db, kind); }); }
  catch (e) { S.db = null; S.dbState = 'off'; render(); return; }
  kickQueue();
}

/* avisos */
function aislLabel(b){
  var nm = b.name ? '«' + short(b.name) + '»' : short(b.id);
  return { dias: 'el día ' + short(b.id), semanas: 'la semana del ' + short(b.id), diasTipo: 'el día tipo ' + nm, ejercicios: 'el ejercicio ' + nm, pesos: 'el pesaje del ' + short(b.id), medidas: 'las medidas del ' + short(b.id), perfil: 'el perfil', migracion: 'el estado de migración' }[b.col] || short(b.id);
}
/* datos guardados que la app no reconoce: se explican en vez de desaparecer; el original no se toca */
function vAislados(){
  var list = Object.keys(S.aislados).sort().map(function(p){ return S.aislados[p]; }), rotos = Object.keys(S.colaRotos).sort().map(function(k){ return S.colaRotos[k]; }), n = list.length + rotos.length;
  if (!n) return '';
  return '<details class="isol"' + (S.aislOpen ? ' open' : '') + '><summary>' + (n === 1 ? '1 dato guardado necesita revisión' : n + ' datos guardados necesitan revisión') + '</summary>' +
    '<p>La app no reconoce su formato. Se conservan sin cambios para poder recuperarlos.</p><ul>' + list.map(function(b){
      var eff = b.lock ? (b.show ? 'Se muestra, pero no se puede editar ni borrar.' : 'No se muestra ni se modifica.') : (b.show ? 'Se muestra con valores por defecto y se conserva hasta que guardes el perfil con los valores correctos.' : 'No se muestra; si registras ese día, lo reemplazas.');
      return '<li><b>' + esc(cap(aislLabel(b))) + '</b>: ' + esc(b.why.join('; ')) + '. ' + eff + '</li>';
    }).join('') + rotos.map(function(b){
      return '<li><b>Borrador local ilegible (' + esc(colaLabel(b.key)) + ')</b>: ' + esc(b.why.join('; ')) + '. Se conserva en este dispositivo sin enviarse ni mostrarse como dato; cópialo o descártalo desde «Ver pendientes».</li>';
    }).join('') + '</ul></details>';
}
function offBanner(){ return S.dbState === 'off' ? '<p class="banner" role="status">' + (storeOk() ? 'Sin acceso al guardado en la nube. Lo que cambies queda como borrador en este dispositivo hasta reconectar.' : 'Sin acceso al guardado en la nube y sin almacenamiento en este navegador: lo que cambies se pierde al cerrar la página.') + '</p>' : ''; }
/* cambios pendientes y suscripciones caídas: aviso persistente con acciones, actualizado en el sitio sin perder el foco */
function pendProblem(){ return Object.keys(S.cola).map(function(k){ return S.cola[k]; }).filter(function(e){ return e.status === 'retenido' || e.status === 'error' || e.status === 'reintento'; }); }
function vPendientes(){
  var bad = pendProblem(), dead = Object.keys(S.subDead), n = pendCount(), out = '';
  var nd = Object.keys(S.cola).filter(function(k){ return S.cola[k].durable === false; }).length;
  if (nd) out += '<p class="banner" role="status">' + (nd === n ? 'Este navegador no permite guardar borradores' : 'Este navegador no permite guardar borradores de ' + nd + ' de los ' + n + ' cambios pendientes') + ': si cierras antes de ver «Guardado», se pierde' + (nd === 1 ? ' ese cambio' : 'n esos cambios') + '.</p>';
  if (bad.length) {
    var whys = []; bad.forEach(function(e){ var w = WHY[e.why] || (e.status === 'reintento' ? 'reintentando' : ''); if (w && whys.indexOf(w) < 0) whys.push(w); });
    out += '<div class="banner pend" role="status"><span>' + (n === 1 ? '1 cambio pendiente de guardar' : n + ' cambios pendientes de guardar') + (whys.length ? ': ' + esc(whys.join('; ')) : '') + '.</span><span class="row2"><button type="button" class="btn btn-sm" data-a="cola-retry">Reintentar</button><button type="button" class="btn btn-sm" data-a="cola-ver">Ver pendientes</button></span></div>';
  }
  if (dead.length) out += '<div class="banner pend" role="status"><span>Se perdió la conexión con ' + esc(dead.join(', ')) + '; los datos pueden estar desactualizados.</span><span class="row2"><button type="button" class="btn btn-sm" data-a="cola-reconectar">Reconectar</button></span></div>';
  if (S.archivo && (S.archivo.estado === 'error' || S.archivo.estado === 'no-disponible')) out += archivoNota();
  var nconf = Object.keys(S.cola).filter(function(k){ return S.cola[k].why === 'conflicto'; }).length, ndesp = Object.keys(S.desplazadas).length, nher = Object.keys(S.heredados).length;
  if (nconf) out += '<div class="banner pend" role="status"><span>' + (nconf === 1 ? '1 cambio en conflicto: otro dispositivo guardó una versión distinta del mismo día. Decide cuál conservar.' : nconf + ' cambios en conflicto con otro dispositivo. Decide cuál conservar en cada día.') + '</span><span class="row2"><button type="button" class="btn btn-sm" data-a="cola-ver">Ver pendientes</button></span></div>';
  if (ndesp) out += '<div class="banner pend" role="status"><span>' + (ndesp === 1 ? '1 versión de un día fue reemplazada desde otro dispositivo; se conserva como copia' : ndesp + ' versiones de días fueron reemplazadas desde otro dispositivo; se conservan como copia') + '.</span><span class="row2"><button type="button" class="btn btn-sm" data-a="cola-ver">Ver pendientes</button></span></div>';
  if (nher) out += '<div class="banner pend" role="status"><span>' + (nher === 1 ? '1 pendiente del formato anterior espera conciliación; no se envía solo' : nher + ' pendientes del formato anterior esperan conciliación; no se envían solos') + '.</span><span class="row2"><button type="button" class="btn btn-sm" data-a="cola-ver">Ver pendientes</button></span></div>';
  var rotos = Object.keys(S.colaRotos);
  if (rotos.length) out += '<div class="banner pend" role="status"><span>' + (rotos.length === 1 ? '1 borrador local ilegible se conserva sin enviarse' : rotos.length + ' borradores locales ilegibles se conservan sin enviarse') + '.</span><span class="row2"><button type="button" class="btn btn-sm" data-a="cola-ver">Ver pendientes</button></span></div>';
  return out;
}
function pendSlot(){ return '<div data-live="pend">' + vPendientes() + '</div>'; }
function renderPend(){ var html = vPendientes(); var els = document.querySelectorAll('[data-live="pend"]'); for (var i = 0; i < els.length; i++) if (els[i].innerHTML !== html) els[i].innerHTML = html; }
function colaLabel(k){ var kind = k.charAt(0), id = k.slice(2); if (!COLS[kind]) return 'Entrada ' + short(k); if (kind === 'd') return 'Plan del ' + diaLabel(id); if (kind === 'w') return 'Semana del ' + id; if (kind === 't') { var t = S.tipos[id]; return 'Día tipo ' + (t && t.name ? '«' + short(t.name) + '»' : short(id)); } if (kind === 'p') return 'Pesaje del ' + id; if (kind === 'm') return 'Medidas del ' + id; if (kind === 'f') return 'Perfil'; var c = S.custom[id]; return 'Ejercicio ' + (c && c.n ? '«' + short(c.n) + '»' : short(id)); }
function colaStatus(e){ var st = { pendiente: 'pendiente de envío', enviando: 'enviando', reintento: 'reintentando', retenido: 'retenido', error: 'con error' }[e.status] || e.status, w = WHY[e.why]; return st + (w ? ' · ' + w : '') + ' · ' + Math.round(e.bytes / 1024 * 10) / 10 + ' KB · ' + (e.op === 'delete' ? 'eliminación' : 'cambio') + ' v' + e.v; }
/* exportación de pendientes: lo que no se ha podido guardar se puede llevar a otro lugar sin perderlo */
function colaExport(){ return JSON.stringify({ exportado: new Date().toISOString(), formato: 'rutinas-pendientes-1', pendientes: Object.keys(S.cola).sort().map(function(k){ var e = S.cola[k]; return { ruta: keyPath(k), version: e.v, operacion: e.op, estado: e.status, motivo: e.why, bytes: e.bytes, desde: e.at, cuerpo: e.body }; }), ilegibles: Object.keys(S.colaRotos).sort().map(function(k){ var r = S.colaRotos[k]; return { clave: k, documento: r.key, lugar: r.slot, motivo: r.why, texto: r.raw }; }), conflictos: Object.keys(S.cola).filter(function(k){ return S.cola[k].why === 'conflicto'; }).map(function(k){ var e = S.cola[k]; return { ruta: keyPath(k), mia: { revision: e.rev, base: e.base, cuerpo: e.body }, otra: e.alt ? { revision: e.alt.rev, cuerpo: e.alt.body } : null }; }), desplazadas: Object.keys(S.desplazadas).sort().map(function(k){ var d = S.desplazadas[k]; return { clave: k, fecha: d.fecha, motivo: d.motivo, revision: d.rev, base: d.base, otra: d.otra, desde: d.at, lugar: d.slot, cuerpo: d.body }; }), heredados: Object.keys(S.heredados).sort().map(function(k){ var h = S.heredados[k]; return { clave: k, lugar: h.slot, texto: h.raw }; }) }, null, 2); }
function colaDownload(){ try { var blob = new Blob([colaExport()], { type: 'application/json' }), url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = 'pendientes-' + todayIso() + '.json'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function(){ URL.revokeObjectURL(url); }, 1000); } catch (x) { showToast('No se pudo descargar; copia el texto de la lista.'); } }
function vCola(){
  var keys = Object.keys(S.cola).sort(), rk = Object.keys(S.colaRotos).sort(), b = '<p class="hint small">Cambios que el guardado todavía no confirmó. Se conservan en este dispositivo hasta que se confirmen; puedes reintentarlos o exportarlos para no perderlos.</p>';
  if (!keys.length) b += '<p class="hint">No hay cambios pendientes.</p>';
  else b += '<div class="reclist">' + keys.map(function(k){ var e = S.cola[k]; return '<div class="recrow static"><span class="fzt"><b>' + esc(colaLabel(k)) + '</b><small>' + esc(colaStatus(e)) + '</small></span></div>' + (e.why === 'conflicto' ? vConflicto(k, e) : ''); }).join('') + '</div>' +
    '<div class="row2"><button type="button" class="btn btn-primary" data-a="cola-retry">Reintentar todos</button><button type="button" class="btn" data-a="cola-descargar">Descargar pendientes</button></div>';
  b += '<div class="field"><label for="cola-json">Copia de los pendientes (JSON)</label><textarea id="cola-json" class="inp" readonly>' + esc(colaExport()) + '</textarea></div>';
  var nm = Object.keys(S.mios).length; if (nm) b += '<p class="hint small">Versiones propias protegidas contra desplazamiento: ' + nm + ' de ' + MAX_MIOS + ' (se retiran primero las más antiguas ya reconocidas por otro cambio).</p>';
  b += vDesplazadas() + vHeredados();
  /* borradores locales que no se pudieron leer: íntegros, copiables; descartar solo borra esa copia local, a mano, y se
     confirma releyendo antes de darla por retirada */
  if (rk.length) b += '<div class="sechead"><h2>Borradores locales ilegibles</h2></div><p class="hint small">No se envían ni se muestran como datos, y no impiden guardar cambios nuevos. Copia el texto si lo necesitas; descartarlo solo borra esta copia local.</p>' + rk.map(function(k){ var r = S.colaRotos[k], id = 'roto-' + domId(k); return '<div class="field"><label for="' + esc(id) + '">' + esc(colaLabel(r.key)) + ' · ' + esc(r.why.join('; ')) + '</label><textarea id="' + esc(id) + '" class="inp" readonly>' + esc(r.raw == null ? '' : String(r.raw)) + '</textarea><div class="row2"><button type="button" class="btn btn-sm" data-a="cola-descartar" data-k="' + esc(k) + '">Descartar este borrador ilegible</button></div></div>'; }).join('');
  return '<section class="view">' + topbar('Atrás', 'Cambios pendientes') + '<div class="vbody">' + pendSlot() + b + '</div></section>';
}
/* diferencias legibles entre dos versiones de un día: nombre, descanso, día tipo y ejercicios por clave */
function dayKeyOf(d){ return JSON.stringify({ name: String(d.name || ''), rest: !!d.rest, tipo: d.tipo || null, items: serItems(d.items || []) }); }
function diffDia(a, b){
  var out = [];
  if (String(a.name || '') !== String(b.name || '')) out.push('nombre: «' + short(a.name || 'sin nombre') + '» frente a «' + short(b.name || 'sin nombre') + '»');
  if (!!a.rest !== !!b.rest) out.push(a.rest ? 'descanso frente a día con plan' : 'día con plan frente a descanso');
  if ((a.tipo || null) !== (b.tipo || null)) out.push('día tipo distinto');
  var ak = dict(), bk = dict(); (a.items || []).forEach(function(it){ ak[String(it.k)] = it; }); (b.items || []).forEach(function(it){ bk[String(it.k)] = it; });
  Object.keys(ak).forEach(function(k){ if (!bk[k]) out.push('solo en la primera: ' + exById(ak[k].ex).n); else if (JSON.stringify(serItems([ak[k]])) !== JSON.stringify(serItems([bk[k]]))) out.push('distinto: ' + exById(ak[k].ex).n); });
  Object.keys(bk).forEach(function(k){ if (!ak[k]) out.push('solo en la segunda: ' + exById(bk[k].ex).n); });
  return out.length ? out : ['sin diferencias visibles'];
}
function vConflicto(k, e){
  var f = k.slice(2), mia = normDay(clone(e.body), f), otra = e.alt && e.alt.body ? normDay(clone(e.alt.body), f) : null;
  var diff = otra ? diffDia(mia, otra) : ['el documento ya no existe en el servicio'];
  return '<div class="confirm"><p>' + esc(cap(diaLabel(f))) + ': otro dispositivo guardó una versión distinta' + (e.alt && e.alt.at ? ' (vista ' + esc(dShort(e.alt.at.slice(0, 10))) + ')' : '') + '. Tu versión no se ha enviado. Diferencias: ' + esc(diff.join('; ')) + '.</p>' +
    '<div class="row2"><button type="button" class="btn btn-primary" data-a="conf-mia" data-k="' + esc(k) + '">Guardar mi versión</button><button type="button" class="btn" data-a="conf-otra" data-k="' + esc(k) + '">Quedarme con la otra</button></div><p class="hint small">La versión que no se conserve queda copiada aquí mismo, en «Versiones desplazadas», para recuperarla después.</p></div>';
}
var MOTIVO = { desplazada: 'tu versión fue reemplazada desde otro dispositivo', reemplazada: 'versión de otro dispositivo que tu guardado reemplazó', descartada: 'tu versión, descartada al resolver un conflicto' };
function vDesplazadas(){
  var ks = Object.keys(S.desplazadas).sort(); if (!ks.length) return '';
  return '<div class="sechead"><h2>Versiones desplazadas</h2></div><p class="hint small">Copias íntegras de versiones de un día que perdieron frente a otra. No se envían solas: «Usar esta versión» la vuelve a poner como edición nueva, con las reglas de siempre; descartar solo borra esta copia local.</p>' + ks.map(function(k){
    var d = S.desplazadas[k], id = 'desp-' + domId(k), cur = liveDay(d.fecha), diff = cur ? diffDia(normDay(clone(d.body), d.fecha), cur) : [];
    return '<div class="field"><label for="' + esc(id) + '">' + esc(cap(diaLabel(d.fecha))) + ' · ' + esc(MOTIVO[d.motivo] || d.motivo) + (d.at ? ' · ' + esc(dShort(d.at.slice(0, 10))) : '') + (d.durable === false ? ' · sin copia duradera en este navegador' : '') + '</label>' + (diff.length ? '<p class="hint small">Frente a la versión actual: ' + esc(diff.join('; ')) + '.</p>' : '') + '<textarea id="' + esc(id) + '" class="inp" readonly>' + esc(JSON.stringify(d.body, null, 1)) + '</textarea><div class="row2"><button type="button" class="btn btn-sm" data-a="desp-usar" data-k="' + esc(k) + '"' + (dayLocked(d.fecha) ? ' disabled' : '') + '>Usar esta versión</button><button type="button" class="btn btn-sm" data-a="desp-descartar" data-k="' + esc(k) + '">Descartar esta copia</button></div></div>';
  }).join('');
}
/* pendientes del formato anterior: una semana entera que no se envía; se compara día por día con lo guardado y cada
   día se aplica a mano como edición nueva. Si no se puede decidir, el texto íntegro queda copiable */
function herEstado(he, i){
  var ws = he.key.slice(2), f = fechaDe(ws, i), days = he.e && he.e.body && Array.isArray(he.e.body.days) ? he.e.body.days : [], src = isObj(days[i]) ? normDay(days[i], f) : null;
  if (!src) return { estado: 'ilegible', src: null };
  if (he.aplicados && he.aplicados[i]) return { estado: 'aplicado', src: src };
  var cur = liveDay(f);
  if (!cur || (!hasDayContent(cur) && !S.ddocs[f])) return { estado: hasDayContent(src) ? 'sin versión guardada' : 'vacío en ambos', src: src };
  return { estado: dayKeyOf(src) === dayKeyOf(cur) ? 'igual' : 'distinto', src: src };
}
function vHeredados(){
  var ks = Object.keys(S.heredados).sort(); if (!ks.length) return '';
  return '<div class="sechead"><h2>Pendientes del formato anterior</h2></div><p class="hint small">Semanas enteras que quedaron pendientes antes de pasar a días independientes. No se envían solas ni reparten días viejos sobre ediciones nuevas: compara cada día y aplica a mano el que quieras conservar. Descartar solo borra esta copia local.</p>' + ks.map(function(k){
    var he = S.heredados[k], ws = k.slice(2), id = 'her-' + domId(k);
    var rows = [0, 1, 2, 3, 4, 5, 6].map(function(i){ var st = herEstado(he, i), f = fechaDe(ws, i); return '<li>' + esc(DAYS[i]) + ' ' + parseIso(f).getDate() + ': ' + esc(st.estado) + (st.src && (st.estado === 'distinto' || st.estado === 'sin versión guardada') ? ' <button type="button" class="linkbtn sm" data-a="her-aplicar" data-k="' + esc(k) + '" data-i="' + i + '"' + (dayLocked(f) ? ' disabled' : '') + '>Aplicar como edición nueva</button>' : '') + '</li>'; }).join('');
    return '<div class="field"><label for="' + esc(id) + '">' + esc(colaLabel(k)) + (he.at ? ' · ' + esc(dShort(he.at.slice(0, 10))) : '') + '</label><ul class="hint small">' + rows + '</ul><textarea id="' + esc(id) + '" class="inp" readonly>' + esc(he.raw) + '</textarea><div class="row2"><button type="button" class="btn btn-sm" data-a="her-descartar" data-k="' + esc(k) + '">Descartar este pendiente antiguo</button></div></div>';
  }).join('');
}
/* borrado local comprobado: solo se da por hecho si al releer la copia ya no está */
function quitarSlot(slot){ var gone = false; try { localStorage.removeItem(slot); gone = localStorage.getItem(slot) === null; } catch (x) { gone = false; } return gone; }
/* MIGRACIÓN a días independientes. Procedimiento (4-app/2026-10-08-publicacion-y-respaldo.md): clientes antiguos
   detenidos, copia previa comprobada, ensayo, ejecución, verificación y, si hace falta, reversión. Aquí solo se
   construye y se prueba con datos sintéticos; la ejecución real la hace Claude en claude.ai con acta.
   Reglas: cada día con contenido de una semana antigua válida pasa tal cual (sin convertir tipos ni claves ni series) a
   dias/<fecha> con esquema, rev determinista «m:<id>:<fecha>», base nula y origen; un destino que ya existe no se pisa
   (igual: omitido; distinto o propio: conflicto listado); una semana apartada (ilegible) no se convierte en vacía ni
   impide verificar las demás; el estado vive en migracion/dias-1 y permite reanudar sin duplicar; «completa» solo
   después de verificar cada destino; la reversión borra únicamente copias creadas por esta migración y no editadas
   después (rev intacta): si alguna cambió, se detiene con la lista. Las semanas antiguas nunca se modifican ni borran */
function migRef(){ return S.db.doc('migracion/' + MIG_ID); }
function migLogLine(t){ S.migLog.push(new Date().toISOString().slice(11, 19) + ' ' + t); if (S.migLog.length > 400) S.migLog.shift(); }
function diaRaw(ws, i, d){ var body = clone(d); body.esquema = 1; body.fecha = fechaDe(ws, i); return body; }
/* el contenido migrado se compara campo a campo con la fuente: todo lo que no añade la migración debe ser idéntico */
var MIG_ADDED = knownSet(['esquema', 'fecha', 'rev', 'base', 'lin', 'origen', 'updatedAt']);
function sinMigra(o){ var r = {}; Object.keys(o || {}).forEach(function(k){ if (!MIG_ADDED[k]) r[k] = o[k]; }); return r; }
function mismoContenido(src, dst){ return JSON.stringify(sinMigra(src)) === JSON.stringify(sinMigra(dst)); }
/* plan: semanas antiguas válidas (crudas), días con contenido y marca de blanco; las apartadas se enumeran aparte */
function migPlanBuild(legacyRaw){
  var plan = { semanas: [], dias: [], apartadas: [], bytes: 0, maxBytes: 0, maxDepth: 0, extrasSemana: [] }, sinCont = 0;
  Object.keys(S.aislados).forEach(function(p){ var b = S.aislados[p]; if (b.col === 'semanas') plan.apartadas.push({ ws: b.id, why: b.why }); });
  Object.keys(legacyRaw).sort().forEach(function(ws){
    var raw = legacyRaw[ws]; if (!isObj(raw) || !Array.isArray(raw.days)) return;
    var sem = { ws: ws, dias: 0, blank: raw.blank === true };
    var wx = extrasOf(raw, knownSet(['start', 'blank', 'days', 'updatedAt'])); if (wx) plan.extrasSemana.push({ ws: ws, campos: Object.keys(wx) });
    raw.days.slice(0, 7).forEach(function(d, i){
      if (!isObj(d)) return;
      var cont = !!(d.rest || (Array.isArray(d.items) && d.items.length) || d.name || d.tipo);
      if (!cont && !(i === 0 && sem.blank)) { sinCont++; return; }
      var body = diaRaw(ws, i, d); if (i === 0 && sem.blank) body.blank = true;
      var txt = JSON.stringify(body), bytes = utf8Bytes(txt), depth = docDepth(body);
      plan.bytes += bytes; if (bytes > plan.maxBytes) plan.maxBytes = bytes; if (depth > plan.maxDepth) plan.maxDepth = depth;
      plan.dias.push({ fecha: body.fecha, ws: ws, i: i, body: body, bytes: bytes, destino: 'sin comprobar' }); sem.dias++;
    });
    plan.semanas.push(sem);
  });
  plan.sinContenido = sinCont;
  plan.huella = hash36(JSON.stringify(plan.dias.map(function(x){ return [x.fecha, hash36(JSON.stringify(x.body))]; })));
  return plan;
}
/* lectura de destinos: colección completa en una lectura si el runtime lo permite; si no, documento a documento */
function migLeerDestinos(plan){
  var col = S.db.collection('dias');
  if (typeof col.get === 'function') return Promise.resolve().then(function(){ return col.get(); }).then(function(snap){ var m = dict(); snap.docs.forEach(function(doc){ if (doc.exists !== false) m[String(doc.id)] = doc.data(); }); return m; });
  var m = dict(), seq = Promise.resolve();
  plan.dias.forEach(function(x){ seq = seq.then(function(){ return S.db.doc('dias/' + x.fecha).get(); }).then(function(s){ if (s.exists !== false) m[x.fecha] = s.data(); }); });
  return seq.then(function(){ return m; });
}
function migClasificar(plan, dest, id){
  var revId = S.mig && S.mig.estado === 'revertida' ? S.mig.id : null;
  plan.dias.forEach(function(x){ var d = dest[x.fecha]; if (!d || esInactiva(x.fecha, d, revId)) x.destino = d ? 'inactiva' : 'ausente'; else if (mismoContenido(x.body, d)) x.destino = isObj(d.origen) && d.origen.migracion ? 'igual' : 'igual-propio'; else x.destino = isObj(d.origen) && d.origen.migracion ? 'distinto' : 'propio'; x.rev = d ? revOf(d) : null; x.mig = d && isObj(d.origen) ? d.origen.migracion || null : null; });
  plan.resumen = { ausentes: plan.dias.filter(function(x){ return x.destino === 'ausente' || x.destino === 'inactiva'; }).length, iguales: plan.dias.filter(function(x){ return x.destino === 'igual' || x.destino === 'igual-propio'; }).length, distintos: plan.dias.filter(function(x){ return x.destino === 'distinto' || x.destino === 'propio'; }).length };
}
function migLegacyRaw(){
  if (S.legacyMode) return Promise.resolve(S.legacyRaw);
  var col = S.db.collection('semanas');
  if (typeof col.get !== 'function') return Promise.reject({ code: 'capability_removed', message: 'sin lectura de la colección antigua' });
  return Promise.resolve().then(function(){ return col.get(); }).then(function(snap){ var m = dict(); snap.docs.forEach(function(doc){ if (doc.exists === false) return; var id = String(doc.id), data = doc.data(), chk = checkDoc('w:', id, data); if (chk) S.aislados['semanas/' + id] = aislEntry('semanas', id, chk, data); else m[id] = clone(data); }); return m; });
}
function migBusy(){ return !!(S.migRun && S.migRun.activo); }
function migEstado(){ return S.mig && typeof S.mig.estado === 'string' ? S.mig.estado : null; }
function migEnsayo(){
  if (!S.db || migBusy()) return;
  S.migRun = { modo: 'ensayo', activo: true, paso: 'leyendo semanas antiguas' }; requestRender();
  var plan;
  migLegacyRaw().then(function(raw){ plan = migPlanBuild(raw); S.migRun.paso = 'comprobando destinos'; requestRender(); return migLeerDestinos(plan); }).then(function(dest){
    migClasificar(plan, dest, null); plan.ensayadoEn = new Date().toISOString(); S.migPlan = plan;
    migLogLine('ensayo: ' + plan.semanas.length + ' semanas, ' + plan.dias.length + ' días, ' + plan.resumen.ausentes + ' ausentes, ' + plan.resumen.iguales + ' iguales, ' + plan.resumen.distintos + ' distintos, ' + plan.apartadas.length + ' apartadas; huella ' + plan.huella);
    S.migRun = null; requestRender();
  }).catch(function(err){ migLogLine('ensayo fallido: ' + (err && err.code ? err.code : String(err && err.message || err))); S.migRun = null; requestRender(); });
}
function migWriteState(st){ return Promise.resolve().then(function(){ return migRef().set(st); }); }
function migSerie(items, fn){ var p = Promise.resolve(); items.forEach(function(x){ p = p.then(function(){ return fn(x); }); }); return p; }
function migEjecutar(reanudar){
  if (!S.db || migBusy()) return;
  var plan = S.migPlan, copia = (document.getElementById('mig-copia') || {}).value || '', clientes = !!(document.getElementById('mig-clientes') || {}).checked;
  var prev = S.mig && isObj(S.mig) ? S.mig : null;
  if (!plan) { showToast('Primero haz el ensayo.'); return; }
  if (!S.proto.get) { showToast('Este runtime no ofrece lectura puntual (get): no se puede comprobar cada destino antes de escribir. Migración bloqueada; indica la versión mínima.'); return; }
  if (!reanudar && (!copia.trim() || !clientes)) { showToast('Anota la copia previa comprobada y confirma que los clientes antiguos están detenidos.'); return; }
  var id = reanudar && prev && prev.id ? prev.id : 'mig-' + uid(), revertidaId = prev && prev.estado === 'revertida' ? prev.id : null;
  if (reanudar && prev && prev.plan && prev.plan.huella !== plan.huella) { showToast('El plan cambió desde la ejecución anterior (' + prev.plan.huella + ' → ' + plan.huella + '). Repite el ensayo y revisa antes de reanudar.'); return; }
  var st = { esquema: 1, id: id, estado: 'en-curso', inicio: prev && reanudar && prev.inicio ? prev.inicio : new Date().toISOString(), fin: null, copiaPrevia: reanudar && prev && prev.copiaPrevia ? prev.copiaPrevia : copia.trim(), clientesDetenidos: true, plan: { semanas: plan.semanas.length, dias: plan.dias.length, bytes: plan.bytes, maxBytes: plan.maxBytes, maxDepth: plan.maxDepth, huella: plan.huella, apartadas: plan.apartadas.map(function(a){ return a.ws; }) }, hechas: reanudar && prev && Array.isArray(prev.hechas) ? prev.hechas.slice() : [], creados: reanudar && prev ? prev.creados || 0 : 0, omitidos: 0, conflictos: [], verificados: 0, errores: [], at: new Date().toISOString() };
  S.migRun = { modo: reanudar ? 'reanudar' : 'ejecutar', activo: true, paso: 'arrancando', hechos: 0, total: plan.dias.length }; requestRender();
  var ref = migRef(), lease = typeof ref.acquire === 'function' ? Promise.resolve().then(function(){ return ref.acquire({ holder: S.cid, ttlMs: 600000 }); }) : Promise.resolve({ acquired: true });
  lease.then(function(r){
    if (r && r.acquired === false) throw { code: 'ocupado', message: 'otra sesión tiene la migración en curso hasta ' + (r.expiresAt || '…') };
    return migWriteState(st);
  }).then(function(){
    var semanas = plan.semanas.filter(function(s){ return st.hechas.indexOf(s.ws) < 0; });
    return migSerie(semanas, function(sem){
      var dias = plan.dias.filter(function(x){ return x.ws === sem.ws; });
      return migSerie(dias, function(x){
        S.migRun.paso = 'día ' + x.fecha; S.migRun.hechos++; renderPend();
        var dref = S.db.doc('dias/' + x.fecha);
        return Promise.resolve().then(function(){ return dref.get(); }).then(function(s){
          if (s.exists !== false) { var d = s.data(); if (esInactiva(x.fecha, d, revertidaId) && revertidaId !== id) { migLogLine('copia inactiva de ' + revertidaId + ' en ' + x.fecha + ': se escribe encima'); } else { if (mismoContenido(x.body, d)) { st.omitidos++; return; } st.conflictos.push(x.fecha); migLogLine('destino inesperado: ' + x.fecha + ' ya existe con otro contenido; la migración se detiene y conserva la evidencia'); throw { code: 'destino-inesperado', message: x.fecha }; } }
          var body = clone(x.body); body.rev = 'm:' + id + ':' + x.fecha; body.base = null; body.lin = []; body.origen = { semana: x.ws, indice: x.i, migracion: id }; body.updatedAt = new Date().toISOString();
          return Promise.resolve().then(function(){ return dref.set(body); }).then(function(){ st.creados++; });
        });
      }).then(function(){ st.hechas.push(sem.ws); st.at = new Date().toISOString(); return migWriteState(st); });
    });
  }).then(function(){
    S.migRun.paso = 'verificando'; renderPend();
    return migSerie(plan.dias, function(x){ return Promise.resolve().then(function(){ return S.db.doc('dias/' + x.fecha).get(); }).then(function(s){ if (s.exists !== false && (mismoContenido(x.body, s.data()) || st.conflictos.indexOf(x.fecha) >= 0)) st.verificados++; else if (st.conflictos.indexOf(x.fecha) < 0) st.errores.push({ fecha: x.fecha, code: s.exists === false ? 'ausente tras escribir' : 'contenido distinto tras escribir' }); }); });
  }).then(function(){
    st.estado = st.errores.length ? 'incompleta' : 'completa'; st.fin = new Date().toISOString(); st.at = st.fin;
    migLogLine((st.estado === 'completa' ? 'completa' : 'incompleta') + ': ' + st.creados + ' creados, ' + st.omitidos + ' omitidos (ya iguales), ' + st.conflictos.length + ' conflictos, ' + st.verificados + ' verificados de ' + plan.dias.length + ', ' + st.errores.length + ' errores');
    return migWriteState(st);
  }).catch(function(err){
    var code = err && err.code ? err.code : 'unavailable';
    st.estado = code === 'destino-inesperado' ? 'detenida' : 'incompleta'; st.errores.push({ paso: S.migRun && S.migRun.paso, code: code, message: err && err.message ? String(err.message) : '' }); st.at = new Date().toISOString();
    migLogLine((st.estado === 'detenida' ? 'detenida' : 'interrumpida') + ' en «' + (S.migRun && S.migRun.paso) + '»: ' + code + (st.estado === 'detenida' ? '. Nada se sustituyó; revisa el destino con el respaldo antes de reanudar' : '. Reanudable: lo hecho queda registrado y no se repite'));
    return migWriteState(st).catch(function(){ migLogLine('no se pudo guardar el estado tras la interrupción; el estado local se conserva en el acta'); });
  }).then(function(){ S.mig = st; onMigEstado(); S.migRun = null; requestRender(); });
}
/* reversión sin borrado: el contrato no permite borrar un documento sin riesgo de pisar una edición aceptada entre la
   comprobación y el borrado, así que no se borra nada. Las copias creadas por esta migración y no editadas quedan
   inactivas (la app las ignora y las semanas antiguas vuelven a regir); un día editado después sigue vigente. Una
   migración posterior puede escribir encima de una copia inactiva idéntica */
function esInactiva(id, data, migId){ return !!(migId && isObj(data) && isObj(data.origen) && data.origen.migracion === migId && data.rev === 'm:' + migId + ':' + id); }
function migInerte(id, data){ return esInactiva(id, data, S.migRevertida); }
/* la reversión automática no se ofrece en el MVP (límite aplazado, P-019): la recuperación es manual desde el respaldo,
   con todos los dispositivos cerrados y copia del estado fallido antes de restaurar. Esta ruta solo informa; no toca la base */
function migRevertir(){
  migLogLine('reversión automática no disponible: recuperación manual desde el respaldo según el protocolo (todos los dispositivos cerrados; copia del estado fallido antes de restaurar). Nada se modificó');
  S.migAvisoRev = true;
  showToast('Reversión automática no disponible: la recuperación se hace a mano desde el respaldo, con todos los dispositivos cerrados, siguiendo el protocolo. Nada se modificó.');
  requestRender();
}
function migActa(){
  var plan = S.migPlan;
  return JSON.stringify({ exportado: new Date().toISOString(), formato: 'rutinas-migracion-1', estado: S.mig, protocolo: S.proto, modoTransicion: S.legacyMode, plan: plan ? { ensayadoEn: plan.ensayadoEn, huella: plan.huella, semanas: plan.semanas, dias: plan.dias.map(function(x){ return { fecha: x.fecha, bytes: x.bytes, destino: x.destino, rev: x.rev || null }; }), resumen: plan.resumen, sinContenido: plan.sinContenido, bytes: plan.bytes, maxBytes: plan.maxBytes, maxDepth: plan.maxDepth, apartadas: plan.apartadas, extrasSemana: plan.extrasSemana } : null, limitesReferencia: { bytesPorDocumento: MAX_DOC_BYTES, niveles: MAX_DOC_DEPTH, documentosPorBase: 25000, nota: 'límites del contrato 0.2.75, referencia de simulación; los efectivos se comprueban en el entorno real (P-005)' }, registro: S.migLog }, null, 2);
}
function vMigracion(){
  var est = migEstado(), run = S.migRun, plan = S.migPlan, b = '';
  b += '<p class="hint small">Pasa cada semana antigua a un documento por día, en una ventana de mantenimiento: todos los dispositivos cerrados, copia previa comprobada, ensayo, ejecución, comparación de cada destino con su origen y reapertura solo después de verificar. La exclusividad la asegura y comprueba quien opera, no la app. Las semanas antiguas no se modifican ni se borran; un destino inesperado detiene la operación y conserva la evidencia. Si algo falla, la recuperación es manual desde el respaldo (ver protocolo); la reversión automática no se ofrece en esta versión. Este ensayo local no es una ejecución real aprobada.</p>';
  b += '<div class="card"><p><b>Estado:</b> ' + esc(est || 'sin migración registrada') + (S.mig && S.mig.id ? ' · ' + esc(S.mig.id) : '') + (S.mig && S.mig.fin ? ' · fin ' + esc(S.mig.fin) : '') + '</p>' +
    (S.mig && S.mig.reversion && S.mig.reversion.modo === 'sin borrado' ? '<p class="hint small"><b>Reversión sin borrado:</b> ' + esc((S.mig.reversion.inactivas || []).length) + ' copias inactivas (la app las ignora y las semanas antiguas vuelven a regir) y ' + esc((S.mig.reversion.editados || []).length) + ' días editados después, que siguen vigentes. No es seguro borrar en este contrato: una edición aceptada entre comprobar y borrar se perdería; por eso no se borra ningún documento.</p>' : '') +
    (S.mig ? '<p class="hint small">Creados ' + esc(S.mig.creados || 0) + ' · omitidos ' + esc(S.mig.omitidos || 0) + ' · conflictos ' + esc((S.mig.conflictos || []).length) + ' · verificados ' + esc(S.mig.verificados || 0) + (S.mig.plan ? ' de ' + esc(S.mig.plan.dias) : '') + ' · errores ' + esc((S.mig.errores || []).length) + (S.mig.copiaPrevia ? ' · copia previa: ' + esc(short(S.mig.copiaPrevia)) : '') + (S.mig.reversion ? ' · reversión ' + esc(S.mig.reversion.estado) : '') + '</p>' : '') +
    '<p class="hint small">Modo: ' + (S.legacyMode ? 'transición (semanas antiguas visibles de solo lectura)' : 'días independientes (semanas antiguas solo a demanda)') + ' · runtime: consultas ' + esc(String(S.proto.where)) + ', lectura puntual ' + esc(String(S.proto.get)) + ', arriendo ' + esc(String(S.proto.acquire)) + '</p></div>';
  if (run) b += '<div class="banner" role="status">' + esc(run.modo) + ': ' + esc(run.paso) + (run.total ? ' (' + run.hechos + ' de ' + run.total + ')' : '') + '</div>';
  if (S.migAvisoRev) b += '<div class="banner pend" role="status"><span>Reversión automática no disponible en esta versión: no es seguro borrar ni sustituir documentos sin garantía del contrato. Recuperación manual desde el respaldo, con todos los dispositivos cerrados y copia del estado fallido antes de restaurar (protocolo). Nada se modificó.</span></div>';
  if (plan) {
    b += '<div class="sechead"><h2>Plan ensayado</h2></div><p class="hint small">' + plan.semanas.length + ' semanas válidas, ' + plan.dias.length + ' días con contenido (' + plan.sinContenido + ' vacíos no se crean), ' + Math.round(plan.bytes / 1024) + ' KB en total, máximo ' + Math.round(plan.maxBytes / 1024 * 10) / 10 + ' KB y ' + plan.maxDepth + ' niveles por documento' + (plan.maxBytes > MAX_DOC_BYTES ? ' · <b>hay documentos que superan 256 KiB</b>' : '') + '. Destinos: ' + plan.resumen.ausentes + ' ausentes, ' + plan.resumen.iguales + ' ya iguales, ' + plan.resumen.distintos + ' distintos (no se pisan). Apartadas: ' + plan.apartadas.length + '. Huella ' + esc(plan.huella) + '.</p>';
    b += '<div class="reclist">' + plan.semanas.map(function(s){ var ds = plan.dias.filter(function(x){ return x.ws === s.ws; }); return '<div class="recrow static"><span class="fzt"><b>' + esc(weekLabel(s.ws)) + '</b><small>' + ds.length + ' días · ' + ds.map(function(x){ return DSHORT[x.i] + ':' + x.destino; }).join(' ') + (s.blank ? ' · en blanco' : '') + '</small></span></div>'; }).join('') + plan.apartadas.map(function(a){ return '<div class="recrow static"><span class="fzt"><b>' + esc(weekLabel(a.ws)) + ' · apartada</b><small>' + esc(a.why.join('; ')) + '. Se conserva tal cual y no se migra.</small></span></div>'; }).join('') + '</div>';
  }
  var puede = !run && S.db && S.dbState === 'ok';
  b += '<div class="field"><label for="mig-copia">Copia previa comprobada (archivo o manifiesto)</label><input id="mig-copia" class="inp" value="' + esc(S.mig && S.mig.copiaPrevia || '') + '" autocomplete="off"></div>' +
    '<label class="check"><input type="checkbox" id="mig-clientes"' + (S.mig && S.mig.clientesDetenidos ? ' checked' : '') + '>Todos los dispositivos están cerrados (versión anterior y nueva) y nadie usará la app hasta terminar y verificar</label>' +
    '<div class="row2"><button type="button" class="btn" data-a="mig-ensayo"' + (puede ? '' : ' disabled') + '>Ensayar (sin escribir)</button>' +
    '<button type="button" class="btn btn-primary" data-a="mig-ejecutar"' + (puede && plan && est !== 'completa' && est !== 'en-curso' ? '' : ' disabled') + '>' + (est === 'incompleta' || est === 'detenida' ? 'Reanudar' : 'Ejecutar') + '</button>' +
    '<button type="button" class="btn" data-a="mig-revertir">Reversión: procedimiento manual</button></div>';
  b += '<div class="field"><label for="mig-acta">Acta (JSON, copiable)</label><textarea id="mig-acta" class="inp" readonly>' + esc(migActa()) + '</textarea></div><div class="row2"><button type="button" class="btn" data-a="mig-descargar">Descargar acta</button></div>';
  return '<section class="view">' + topbar('Atrás', 'Migración a días independientes') + '<div class="vbody">' + pendSlot() + b + '</div></section>';
}
function migDownload(){ try { var blob = new Blob([migActa()], { type: 'application/json' }), url = URL.createObjectURL(blob), a = document.createElement('a'); a.href = url; a.download = 'migracion-' + todayIso() + '.json'; document.body.appendChild(a); a.click(); a.remove(); setTimeout(function(){ URL.revokeObjectURL(url); }, 1000); } catch (x) { showToast('No se pudo descargar; copia el texto del acta.'); } }
function showToast(msg, undo, etiqueta, fijo){
  var id = uid(); S.toast = { msg: msg, undo: undo || null, id: id, etiqueta: etiqueta || 'Deshacer' };
  renderToast();
  if (!fijo) setTimeout(function(){ if (S.toast && S.toast.id === id) { S.toast = null; renderToast(); } }, undo ? 6000 : 4500);
}
function vToast(){ if (!S.toast) return ''; return '<div class="toast" role="status"><span>' + esc(S.toast.msg) + '</span>' + (S.toast.undo ? '<button type="button" data-a="undo">' + esc(S.toast.etiqueta) + '</button>' : '') + '</div>'; }
function renderToast(){ var o = document.querySelector('.toast'); if (o) o.remove(); if (S.toast) (document.querySelector('.drawer') || document.getElementById('app')).insertAdjacentHTML('beforeend', vToast()); }

/* vistas: navegación */
function vBottomnav(){ return '<nav class="bottomnav" aria-label="Secciones"><div class="inner">' + TABS.map(function(t){ return '<button type="button" class="tabbtn" data-a="tab" data-t="' + t.id + '"' + (S.tab === t.id ? ' aria-current="page"' : '') + '>' + ic(t.icon, 22) + '<span>' + t.label + '</span></button>'; }).join('') + '</div></nav>'; }
function vTopnav(){ return '<header class="topnav"><span class="brand">Mis rutinas</span><nav class="tabs" aria-label="Secciones">' + TABS.map(function(t){ return '<button type="button" data-a="tab" data-t="' + t.id + '"' + (S.tab === t.id ? ' aria-current="page"' : '') + '>' + t.label + '</button>'; }).join('') + '</nav><span class="savestate" data-live="save" aria-live="polite">' + saveText() + '</span></header>'; }
function topbar(back, title){ return '<header class="topbar"><button type="button" class="back" data-a="back">' + ic('left', 20, 2) + '<span>' + esc(back) + '</span></button><h1 tabindex="-1" data-focus>' + esc(title) + '</h1><span></span></header>'; }
/* lo hecho en la semana: días con algo anotado (los mismos que muestran "Hecho"), series con repeticiones anotadas,
   volumen (kg × reps) y el cardio de esos días, porque el cardio no tiene registro propio */
function doneStats(w){
  var by = {}; GROUPS.forEach(function(g){ by[g] = 0; });
  var r = { by: by, sets: 0, vol: 0, min: 0, days: 0, hecho: {} };
  w.days.forEach(function(d, i){
    if (d.rest || !d.items.some(hasLog)) return;
    r.days++; r.hecho[i] = true;
    d.items.forEach(function(it){ var ex = exById(it.ex); if (ex.t === 'cardio') { r.min += num(it.min); return; } var n = logSets(it).length; r.sets += n; r.vol += itemVol(it); if (by[ex.g] != null) by[ex.g] += n; });
  });
  return r;
}
function statHtml(v, l, of){ return '<div class="stat"><b>' + v + (of != null ? '<span class="of">/' + of + '</span>' : '') + '</b><small>' + l + '</small></div>'; }

/* SEMANA */
function vSemana(){
  var ws = S.ws, w = S.weeks[ws], desk = DESK.matches, wk = isoWeek(parseIso(ws)), rel = relLabel(ws);
  var st = w ? weekStats(w) : null, dn = w ? doneStats(w) : null;
  var h = '<div class="weekhead">' + (desk ? '' : '<div class="whtop"><span class="eyebrow">Mis rutinas</span><button type="button" class="linkbtn histbtn" data-a="open-hist">' + ic('hist', 18) + 'Historial</button></div>') + '<div class="weeknav">' +
    '<button type="button" class="sqbtn" data-a="wk-prev" aria-label="Semana anterior">' + ic('left', 20, 2) + '</button>' +
    '<div class="weektitle"><h1>' + weekLabel(ws) + '</h1><span class="weeksub">Semana ' + wk.w + ' · ' + wk.y + (rel ? ' <span class="pill accent">' + rel + '</span>' : '') + (esDescarga(w) ? ' <span class="pill">Descarga</span>' : '') +
    (ws !== curMonday() && rel !== 'Próxima semana' ? ' <button type="button" class="linkbtn sm" data-a="wk-today">Ir a esta semana</button>' : '') + '</span></div>' +
    '<button type="button" class="sqbtn" data-a="wk-next" aria-label="Semana siguiente">' + ic('right', 20, 2) + '</button></div>' +
    (desk && w ? '<div class="deskstats">' + statHtml(dn.days, 'días de fuerza', st.fuerzaDays) + statHtml(dn.sets, 'series', st.sets) + statHtml(fmtNum(dn.min), 'min de cardio', fmtNum(st.min)) + '</div>' : '') +
    (desk ? '<button type="button" class="btn deskhist" data-a="open-hist">' + ic('hist', 18) + 'Historial</button>' : '') +
    '</div>' + vAvisoPeso() + (S.local ? '<p class="localnote">Tus datos se guardan solo en este navegador.</p>' : '') + vAvisoRespaldo() + vAvisoDescarga() + vAislados() + offBanner() + pendSlot() + migBanner(ws);
  if (!w) {
    /* sin lectura definitiva de este intervalo no se ofrece crear: una ausencia de caché no es una ausencia */
    var waiting = S.dbState === 'loading' || (S.dbState === 'ok' && (!inRangoWeek(ws) || !S.defin.d || S.legacyMode == null || (S.legacyMode && !S.defin.w)));
    if (waiting) return h + '<div class="card loading" role="status">Cargando tu plan…</div>';
    if (weekLocked(ws)) return h + '<div class="card"><p class="hint">Esta semana tiene datos guardados que la app no reconoce. Se conservan sin cambios y no se pueden editar desde aquí; el detalle está en el aviso de arriba.</p></div>';
    return h + vEmptyWeek();
  }
  if (desk) return h + '<div class="weekrows">' + w.days.map(function(d, i){ return vRow(d, i); }).join('') + '</div>' + vDeskSummary(st, dn) + weekFoot();
  /* la franja cuenta lo hecho sobre lo planeado: 13/74 series */
  return h + '<div class="strip">' + statHtml(dn.days, 'días', st.fuerzaDays) + statHtml(dn.sets, 'series', st.sets) + statHtml(fmtNum(dn.min), 'min cardio', fmtNum(st.min)) +
    '<button type="button" class="linkbtn" data-a="open-resumen">Resumen' + ic('right', 16, 2) + '</button></div>' +
    '<div class="daylist">' + w.days.map(function(d, i){ return vDayCard(d, i); }).join('') + '</div>' + weekFoot();
}
function vDayCard(d, i){
  var date = dayDate(S.ws, i), s = dayStats(d), today = isToday(S.ws, i) ? ' <span class="pill accent">Hoy</span>' : '';
  var numHtml = '<span class="dnum"><small>' + DSHORT[i] + '</small><b>' + date.getDate() + '</b></span>';
  if (d.rest) return '<button type="button" class="daycard muted" data-a="open-dia" data-i="' + i + '">' + numHtml + '<span class="dmain"><span class="dname"><span class="nm">Descanso</span>' + today + '</span></span><span class="chev">' + ic('right', 18, 2) + '</span></button>';
  if (!d.items.length) return '<button type="button" class="daycard muted" data-a="open-dia" data-i="' + i + '">' + numHtml + '<span class="dmain"><span class="dname"><span class="nm">' + esc(d.name || 'Sin plan') + '</span>' + today + '</span></span><span class="dcta">Planear</span></button>';
  var cardioOnly = !s.f && s.c;
  return '<button type="button" class="daycard" data-a="open-dia" data-i="' + i + '">' + numHtml + '<span class="dmain"><span class="dname"><span class="nm">' + esc(dayName(d, s)) + '</span>' + (cardioOnly ? '<span class="pill">CARDIO</span>' : '') + (d.descarga ? '<span class="pill">Descarga</span>' : '') + (sugCount(d) && !d.items.some(hasLog) ? '<span class="pill accent">' + sugCount(d) + (sugCount(d) === 1 ? ' sube' : ' suben') + '</span>' : '') + (d.items.some(hasLog) ? '<span class="pill good">Hecho</span>' : '') + today + '</span><span class="dmeta">' + esc(dayMeta(d, s)) + '</span></span><span class="chev">' + ic('right', 18, 2) + '</span></button>';
}
function vCol(d, i){
  var date = dayDate(S.ws, i), s = dayStats(d), today = isToday(S.ws, i);
  var title = d.rest ? 'Descanso' : (d.items.length ? dayName(d, s) : (d.name || 'Sin plan'));
  var head = '<button type="button" class="colhead" data-a="open-dia" data-i="' + i + '"><small>' + DSHORT[i] + ' ' + date.getDate() + (today ? ' · <span class="today">HOY</span>' : '') + '</small><b>' + esc(title) + '</b></button>';
  if (d.rest || !d.items.length) return '<div class="col muted">' + head + '<button type="button" class="btn btn-sm colcta" data-a="open-dia" data-i="' + i + '">' + (d.rest ? 'Editar día' : 'Planear día') + '</button></div>';
  var labs = groupLabels(d.items.filter(function(x){ return !isCardio(x); }));
  var items = ordered(d.items).map(function(it){ var ex = exById(it.ex); var src = thumbSrc(ex); var det = ex.t !== 'cardio' && hasLog(it) ? doneText(it) : itemDetail(it, ex); return '<li class="ci' + (ex.t === 'cardio' ? ' cardio' : '') + '">' + (src ? '<img src="' + esc(src) + '" alt="" loading="lazy">' : '<span class="ph">' + ic('dumbbell', 16) + '</span>') + '<span class="ct"><b>' + (labs[it.k] ? '<span class="glab">' + esc(labs[it.k]) + '</span>' : '') + esc(ex.n) + '</b><small>' + esc(det) + '</small></span></li>'; }).join('');
  var foot = [s.sets ? s.sets + ' series' : '', s.min ? fmtNum(s.min) + ' min' : ''].filter(Boolean).join(' · ');
  return '<div class="col">' + head + '<ul class="cilist">' + items + '</ul><div class="colfoot"><span>' + foot + '</span><button type="button" class="btn btn-sm" data-a="open-dia" data-i="' + i + '" aria-label="Editar ' + DAYS[i].toLowerCase() + '">Editar</button></div></div>';
}
function vRow(d, i){
  var date = dayDate(S.ws, i), s = dayStats(d), today = isToday(S.ws, i);
  var title = d.rest ? 'Descanso' : (d.items.length ? dayName(d, s) : (d.name || 'Sin plan'));
  var dv = dayVol(d), meta = [s.sets ? s.sets + ' series' : '', dv ? 'total ' + fmtVol(dv) + ' kg' : '', s.min ? fmtNum(s.min) + ' min cardio' : ''].filter(Boolean).join(' · ');
  var head = '<button type="button" class="rhead" data-a="open-dia" data-i="' + i + '"><small>' + DSHORT[i] + ' ' + date.getDate() + (today ? ' · <span class="today">HOY</span>' : '') + '</small><b>' + esc(title) + '</b>' +
    (meta ? '<span class="rmeta">' + meta + '</span>' : '') + (d.items.some(hasLog) ? '<span class="pill good">Hecho</span>' : '') + '</button>';
  if (d.rest || !d.items.length) return '<div class="drow muted' + (today ? ' today' : '') + '">' + head + '<span class="rempty">' + (d.rest ? 'Día de descanso' : 'Todavía sin ejercicios') + '</span><button type="button" class="btn btn-sm" data-a="open-dia" data-i="' + i + '">' + (d.rest ? 'Editar día' : 'Planear día') + '</button></div>';
  var labs = groupLabels(d.items.filter(function(x){ return !isCardio(x); }));
  var items = ordered(d.items).map(function(it){
    var ex = exById(it.ex), src = thumbSrc(ex), card = ex.t === 'cardio';
    var det = !card && hasLog(it) ? doneText(it) : itemDetail(it, ex);
    return '<li class="rci' + (card ? ' cardio' : '') + (labs[it.k] ? ' ing' : '') + '">' + (src ? '<img src="' + esc(src) + '" alt="" loading="lazy">' : '<span class="ph">' + ic('dumbbell', 16) + '</span>') +
      '<span class="ct"><b>' + (labs[it.k] ? '<span class="glab">' + esc(labs[it.k]) + '</span>' : '') + esc(ex.n) + '</b><small>' + esc(det) + '</small></span></li>';
  }).join('');
  return '<div class="drow' + (today ? ' today' : '') + '">' + head + '<ul class="rlist">' + items + '</ul><button type="button" class="btn btn-sm" data-a="open-dia" data-i="' + i + '" aria-label="Editar ' + DAYS[i].toLowerCase() + '">Editar</button></div>';
}
function vEmptyWeek(){
  var prev = prevContentWeek(S.ws), nT = tiposList().length, cc = cicloCfg(), nC = cc.orden.length;
  var primary = nC >= 2 ? 'ciclo' : prev ? 'copy' : (nT ? 'tipos' : 'blank');
  function opt(key, a, icon, title, sub, disabled){ return '<button type="button" class="option' + (primary === key ? ' primary' : '') + '" data-a="' + a + '"' + (disabled ? ' disabled' : '') + '>' + ic(icon, 22) + '<span class="ot"><b>' + title + '</b><small>' + esc(sub) + '</small></span></button>'; }
  return '<div class="card emptyweek"><div><h2>Esta semana todavía no tiene plan</h2><p>Elige cómo empezar. Después ajustas cada día.</p></div>' +
    (nC >= 2 ? opt('ciclo', 'new-ciclo', 'cycle', 'Usar el ciclo', cicloResumen(S.ws), false) : '') +
    opt('copy', 'new-copy', 'copy', 'Copiar semana anterior', prev ? weekLabel(prev) + ' · ' + weekMeta(S.weeks[prev]) : 'Todavía no hay semanas guardadas', !prev) +
    opt('tipos', 'new-tipos', 'layers', 'Armar con días tipo', nT ? 'Asignas una plantilla a cada día' : 'Primero crea un día tipo', !nT) +
    opt('blank', 'new-blank', 'plus', 'Empezar en blanco', 'Siete días vacíos para llenar', false) +
    '</div><div class="ghostdays" aria-hidden="true">' + [0,1,2,3,4,5,6].map(function(i){ return '<div class="ghostday"><b>' + DSHORT[i] + ' ' + dayDate(S.ws, i).getDate() + '</b>Sin plan</div>'; }).join('') + '</div>';
}
/* aviso de formato anterior: semanas sin migrar (solo lectura) y acceso a la migración */
function legacyPendientes(){ return Object.keys(S.legacy).filter(function(ws){ var L = S.legacy[ws]; return L.days.some(function(d, i){ return hasDayContent(d) && !S.ddocs[fechaDe(ws, i)]; }); }); }
function migBanner(ws){
  if (S.dbState !== 'ok') return '';
  var pend = legacyPendientes(), here = pend.indexOf(ws) >= 0, est = S.mig && S.mig.estado;
  if (!pend.length && !(est && est !== 'completa')) return '';
  var t = here ? 'Esta semana está guardada en el formato anterior (la semana completa): se muestra tal cual y se podrá editar cuando se migre a días independientes.' : (pend.length === 1 ? '1 semana sigue en el formato anterior.' : pend.length + ' semanas siguen en el formato anterior.');
  if (est && est !== 'completa') t += ' Migración: ' + esc(est) + '.';
  return '<div class="banner pend" role="status"><span>' + t + '</span><span class="row2"><button type="button" class="btn btn-sm" data-a="open-mig">Migración</button></span></div>';
}
function weekFoot(){
  if (weekBlocked(S.ws)) return '';
  var reorg = cicloCfg().orden.length >= 2 ? '<button type="button" class="linkbtn" data-a="open-reorg">' + ic('cycle', 18) + 'Reorganizar la semana</button>' : '';
  if (weekKept(S.ws)) return reorg ? '<div class="weekfoot">' + reorg + '</div>' : '';
  if (S.confirm === 'clearweek') return '<div class="confirm" style="margin-top:14px"><p>Se borra todo el plan de ' + weekLabel(S.ws) + '. No se puede deshacer.</p><div class="row2"><button type="button" class="btn btn-danger-solid" data-a="clearweek-ok">Borrar plan</button><button type="button" class="btn" data-a="cancel">Cancelar</button></div></div>';
  return '<div class="weekfoot">' + reorg + '<button type="button" class="linkbtn danger" data-a="clearweek">Borrar plan de esta semana</button></div>';
}
/* series por grupo: lo hecho en el color de acento sobre lo planeado en tono claro, las dos a la misma escala */
function barsHtml(dn, st, two){
  var max = 1; GROUPS.forEach(function(g){ max = Math.max(max, st.by[g], dn.by[g]); });
  return '<div class="bars' + (two ? ' two' : '') + '">' + GROUPS.map(function(g){
    var v = dn.by[g], p = st.by[g];
    return '<div class="bar' + (v || p ? '' : ' zero') + '" title="' + g + ': ' + v + ' de ' + p + ' series"><span>' + g + '</span><span class="track">' +
      (p ? '<span class="planbar" style="width:' + Math.round(p / max * 100) + '%"></span>' : '') +
      (v ? '<span class="fillbar" style="width:' + Math.round(v / max * 100) + '%"></span>' : '') +
      '</span><b>' + v + '<small>/' + p + '</small></b></div>';
  }).join('') + '</div>';
}
function cardioHtml(dn, st){
  var rows = st.cardio.map(function(c){
    var ok = !!dn.hecho[c.i];
    return '<div class="cardiorow' + (ok ? '' : ' pend') + '"><span class="cl"><span class="cn">' + esc(c.ex.n) + (ok ? '<span class="pill good">Hecho</span>' : '') + '</span><small>' + esc([DAYS[c.i], c.it.km ? c.it.km + ' km' : '', c.it.zona || ''].filter(Boolean).join(' · ')) + '</small></span><b>' + fmtNum(num(c.it.min)) + ' min</b></div>';
  }).join('');
  return '<div class="panelhead"><h2>Cardio</h2><b>' + fmtNum(dn.min) + ' de ' + fmtNum(st.min) + ' min</b></div>' +
    (rows ? rows + '<p class="subnote">El cardio cuenta como hecho en los días con series anotadas.</p>' : '<p class="subnote">Sin cardio esta semana.</p>');
}
function prevLine(){ var pw = S.weeks[shiftWeek(S.ws, -1)]; if (!pw || !hasContent(pw)) return ''; var pd = doneStats(pw); return '<p class="subnote">Semana anterior: ' + pd.sets + ' series hechas · ' + fmtVol(pd.vol) + ' kg · ' + fmtNum(pd.min) + ' min de cardio.</p>'; }
function vDeskSummary(st, dn){
  return '<div class="desksum"><section class="panel span2"><div class="panelhead"><h2>Series por grupo muscular</h2><span>Hechas / plan, por el músculo principal de cada ejercicio</span></div>' + barsHtml(dn, st, true) + '</section><section class="panel">' + cardioHtml(dn, st) + prevLine() + '</section></div>';
}

/* RESUMEN (celular): lo hecho en la semana, con el plan como referencia */
function vResumen(){
  var w = S.weeks[S.ws], st = w ? weekStats(w) : null, dn = w ? doneStats(w) : null, pw = S.weeks[shiftWeek(S.ws, -1)], pd = pw && hasContent(pw) ? doneStats(pw) : null, wk = isoWeek(parseIso(S.ws));
  function kpi(l, v, sub){ return '<div class="kpi"><span>' + l + '</span><b>' + v + '</b><small>' + sub + '</small></div>'; }
  var body = '<div><span class="eyebrow">Semana ' + wk.w + '</span><h2 class="bigtitle">' + weekLabel(S.ws) + '</h2></div>';
  if (!st) body += '<p class="hint">Esta semana todavía no tiene plan.</p>';
  else body += '<div class="kpis">' +
      kpi('Días entrenados', dn.days, 'de ' + st.fuerzaDays + (st.fuerzaDays === 1 ? ' planeado' : ' planeados')) +
      kpi('Series hechas', dn.sets, 'de ' + st.sets + ' planeadas') +
      kpi('Volumen', fmtVol(dn.vol) + '&nbsp;kg', pd ? 'Semana anterior: ' + fmtVol(pd.vol) + '&nbsp;kg' : 'Sin semana anterior') +
      kpi('Cardio', fmtNum(dn.min) + ' min', 'de ' + fmtNum(st.min) + ' planeados') + '</div>' +
    '<section class="panel"><div class="panelhead"><h2>Series por grupo muscular</h2><span>hechas / plan</span></div>' + barsHtml(dn, st, false) + '<p class="subnote">Cuenta las series anotadas del músculo principal de cada ejercicio.</p></section>' +
    '<section class="panel">' + cardioHtml(dn, st) + '</section>';
  return '<section class="view">' + topbar('Semana', 'Resumen') + '<div class="vbody">' + body + '</div></section>';
}

/* EDITOR de día y de día tipo */
/* entrada no válida: su texto queda en S.drafts (por contexto, ítem y casilla) y se marca en rojo; el estado conserva
   el último valor válido, que es lo único que se calcula y se envía */
function ctxKey(ctx){ return !ctx ? '' : ctx.kind === 'day' ? 'w:' + ctx.ws + ':' + ctx.i : 't:' + ctx.id; }
function draftsOf(ctx, k, make){ var ck = ctxKey(ctx), a = S.drafts[ck] || (make ? (S.drafts[ck] = dict()) : null); return a ? (a[k] || (make ? (a[k] = dict()) : null)) : null; }
function draftGet(ctx, k, fk){ var d = draftsOf(ctx, k, false); return d && d[fk] || null; }
/* un cambio hecho por la app (usar la carga sugerida, cambiar de ejercicio) reemplaza lo que estaba a medio escribir */
function clearDrafts(ctx, k, fk){ var d = draftsOf(ctx, k, false); if (d) Object.keys(d).forEach(function(x){ if (!fk || x === fk) delete d[x]; }); }
function errId(it){ return 'e-' + domId(it.k); }
function invAttr(bad, it){ return bad ? ' aria-invalid="true" aria-describedby="' + esc(errId(it)) + '"' : ''; }
function fieldLabel(it, f, i){ var ex = exById(it.ex); if (f === 'hr') return 'Serie ' + (i + 1) + ', ' + (isTime(it.reps) ? 'segundos' : 'reps'); if (f === 'hk') return 'Serie ' + (i + 1) + ', ' + kgLabel(ex).toLowerCase(); return f === 'sets' ? 'Series' : kgLabel(ex); }
function noteField(el, ctx, it, f, i, res){
  var fk = f + (i == null ? '' : '|' + i), d = draftsOf(ctx, it.k, !res.ok);
  if (res.ok) { if (d) delete d[fk]; }
  else d[fk] = { t: el.value, msg: res.msg, pend: !!res.pend, label: fieldLabel(it, f, i), ord: f === 'sets' ? -2 : f === 'kg' ? -1 : i * 2 + (f === 'hr' ? 1 : 0) };
  paintField(el, ctx, it, fk);
}
function paintField(el, ctx, it, fk){
  var d = draftGet(ctx, it.k, fk);
  if (d && !d.pend) { el.setAttribute('aria-invalid', 'true'); el.setAttribute('aria-describedby', errId(it)); } else { el.removeAttribute('aria-invalid'); el.removeAttribute('aria-describedby'); }
  var box = document.getElementById(errId(it)); if (box) box.textContent = cardErrs(ctx, it, box.dataset.log === '1').join('\n');
}
/* un decimal a medio escribir («42,») no se marca mientras se teclea; al salir de la casilla sí */
function settleField(el, ctx, it, fk){ var d = draftGet(ctx, it.k, fk); if (d && d.pend) { d.pend = false; paintField(el, ctx, it, fk); } }
/* al salir del editor se avisa si quedaron valores sin guardar por no ser válidos; siguen marcados al volver */
function warnDrafts(ctx){
  var a = S.drafts[ctxKey(ctx)], c = ctx.kind === 'day' ? (S.weeks[ctx.ws] && S.weeks[ctx.ws].days[ctx.i]) : S.tipos[ctx.id], n = 0;
  if (!a || !c) return;
  c.items.forEach(function(it){ var d = a[it.k]; if (d) n += Object.keys(d).length; });
  if (n) showToast(n === 1 ? 'Un valor no se guardó porque no es válido; quedó marcado en rojo para corregirlo.' : n + ' valores no se guardaron porque no son válidos; quedaron marcados en rojo para corregirlos.');
}
function legacyBad(it, f, i){ var p = (f === 'hk' ? kgRaw(it) : String(it.hr || '').split(','))[i], v = String(p == null ? '' : p).trim(); return v && (f === 'hk' ? kgPart(v) == null : !isFinite(parseInt(v, 10))) ? v : ''; }
function cardErrs(ctx, it, withLog){
  var d = draftsOf(ctx, it.k, false), out = [];
  if (d) Object.keys(d).map(function(fk){ return d[fk]; }).filter(function(x){ return !x.pend; }).sort(function(a, b){ return a.ord - b.ord; }).forEach(function(x){ out.push(x.label + ': ' + x.msg); });
  if (setsOver(it) && !(d && d.sets)) out.push('Series: el valor guardado «' + short(String(it.sets).trim()) + '» supera el máximo de ' + MAX_SETS + '; se cuentan ' + MAX_SETS + '.');
  if (withLog) for (var i = 0, n = logN(it), time = isTime(it.reps); i < n; i++) ['hk', 'hr'].forEach(function(f){
    var v = f === 'hk' && time ? '' : legacyBad(it, f, i);
    if (v && !(d && d[f + '|' + i])) out.push(fieldLabel(it, f, i) + ': el valor guardado «' + short(v) + '» no es un número válido; ' + (f === 'hk' ? 'mientras tanto cuenta el peso de la serie anterior.' : 'esa serie no entra en los totales.'));
  });
  return out;
}
function fld(it, p, label, mode, ph, ctx){
  var id = fid(it.k, p), d = p === 'sets' || p === 'kg' ? draftGet(ctx, it.k, p) : null, bad = (d && !d.pend) || (p === 'sets' && setsOver(it));
  return '<div class="fld"><label for="' + esc(id) + '">' + label + '</label><input id="' + esc(id) + '" class="inp num" data-f="item" data-k="' + esc(it.k) + '" data-p="' + p + '" value="' + esc(d ? d.t : (it[p] || '')) + '" inputmode="' + mode + '" autocomplete="off"' + (ph ? ' placeholder="' + ph + '"' : '') + invAttr(bad, it) + '></div>';
}
function zonaSel(it){ var id = fid(it.k, 'zona'); var opts = '<option value="">Elegir</option>' + ZONAS.map(function(z){ return '<option' + (it.zona === z ? ' selected' : '') + '>' + z + '</option>'; }).join(''); if (it.zona && ZONAS.indexOf(it.zona) < 0) opts += '<option selected>' + esc(it.zona) + '</option>'; return '<div class="fld"><label for="' + esc(id) + '">Intensidad</label><select id="' + esc(id) + '" class="inp num" data-f="item" data-k="' + esc(it.k) + '" data-p="zona">' + opts + '</select></div>'; }
function vExCard(it, o){
  o = o || {};
  var ex = exById(it.ex), cardio = ex.t === 'cardio', noteOpen = S.noteOpen[it.k] || it.note, ctx = o.ctx || null;
  var fields = cardio
    ? '<div class="fields f3">' + fld(it, 'min', 'Minutos', 'numeric', '', ctx) + fld(it, 'km', 'Distancia km', 'decimal', 'Opcional', ctx) + zonaSel(it) + '</div>'
    : '<div class="fields ' + (o.grouped ? 'f4' : 'f5') + '">' + fld(it, 'sets', 'Series', 'numeric', '', ctx) + fld(it, 'reps', 'Reps', 'text', '', ctx) + fld(it, 'kg', kgCorto(ex), 'decimal', '', ctx) + (o.grouped ? '' : fld(it, 'rest', 'Descanso', 'text', '1:30', ctx)) + grpSel(it) + '</div>';
  return '<div class="excard' + (o.grouped ? ' ing' : '') + '" data-k="' + esc(it.k) + '"><div class="exhead">' +
    '<button type="button" class="grip" data-grip="' + esc(it.k) + '" aria-label="Mover ' + esc(ex.n) + ' (flechas arriba y abajo)">' + ic('grip', 18, 2.4) + '</button>' +
    '<button type="button" class="thumb" data-a="open-det" data-id="' + esc(ex.id) + '" aria-label="Ver cómo se hace ' + esc(ex.n) + '">' + thumbHtml(ex) + '</button>' +
    '<div class="exname"><b>' + (o.lab ? '<span class="glab">' + esc(o.lab) + '</span>' : '') + esc(ex.n) + '</b><small>' + esc(exMeta(ex)) + '</small></div>' +
    '<button type="button" class="iconbtn" data-a="swap-open" data-k="' + esc(it.k) + '" aria-label="Cambiar ' + esc(ex.n) + ' por otro ejercicio">' + ic('swap', 18) + '</button>' +
    '<button type="button" class="iconbtn" data-a="item-note" data-k="' + esc(it.k) + '" aria-label="' + (noteOpen ? 'Nota' : 'Agregar nota') + '" aria-pressed="' + (noteOpen ? 'true' : 'false') + '">' + ic('pencil', 18) + '</button>' +
    '<button type="button" class="iconbtn" data-a="item-del" data-k="' + esc(it.k) + '" aria-label="Quitar ' + esc(ex.n) + '">' + ic('trash', 18) + '</button></div>' +
    fields + (cardio ? '' : vDiscos(it, ex)) + vSug(it, ex) +
    (noteOpen ? '<div class="note">' + ic('pencil', 16) + '<input id="' + esc(fid(it.k, 'note')) + '" aria-label="Nota de ' + esc(ex.n) + '" data-f="item" data-k="' + esc(it.k) + '" data-p="note" value="' + esc(it.note || '') + '" placeholder="Nota, por ejemplo: pausa de 1 s abajo" autocomplete="off"></div>' : '') +
    (cardio ? '' : o.logDate ? vLog(it, ex, o.logDate, ctx) : o.planDate ? vPlanHint(it, ex, o.planDate) : '') +
    (cardio ? '' : '<p class="err fielderr" id="' + esc(errId(it)) + '" data-log="' + (o.logDate ? '1' : '') + '" aria-live="polite">' + esc(cardErrs(ctx, it, !!o.logDate).join('\n')) + '</p>') +
    '</div>';
}
/* bloque de calentamiento o estiramiento: lista editable; en el día, además la marca de hecho */
function vBloque(c, s, ctx, isDay, logDate){
  var l = c[s] || [], ok = isDay && c[BLOQUE_OK[s]] === true, b = '<div class="sechead"><h2>' + BLOQUE_NOMBRE[s] + '</h2>';
  if (isDay && l.length) b += '<label class="okchk"><input type="checkbox" data-f="bloqueok" data-s="' + s + '"' + (ok ? ' checked' : '') + '>Hecho</label>';
  else b += '<span>' + (l.length ? l.length + (l.length === 1 ? ' paso' : ' pasos') : '') + '</span>';
  b += '</div><div class="bloque' + (ok ? ' ok' : '') + '" data-sec="' + s + '">';
  var editar = !isDay || S.bloqueEdit === s || !l.length;
  if (!editar) {
    /* en el día se lee como lista; editar es un toque aparte, para que en el gimnasio se lea de un vistazo */
    b += '<ol class="bsteps">' + l.map(function(x){ return '<li><span>' + esc(x.n) + '</span>' + (x.t ? '<b>' + esc(x.t) + '</b>' : '') + '</li>'; }).join('') + '</ol>' +
      '<button type="button" class="linkbtn" data-a="bloque-edit" data-s="' + s + '">' + ic('pencil', 16, 2) + 'Editar</button></div>';
    return b;
  }
  l.forEach(function(x, i){
    b += '<div class="brow"><input class="inp" data-f="bloque" data-s="' + s + '" data-i="' + i + '" data-p="n" value="' + esc(x.n) + '" placeholder="Ejercicio" autocomplete="off" aria-label="Paso ' + (i + 1) + '"><input class="inp num" data-f="bloque" data-s="' + s + '" data-i="' + i + '" data-p="t" value="' + esc(x.t) + '" placeholder="10 reps" autocomplete="off" aria-label="Cantidad del paso ' + (i + 1) + '"><button type="button" class="iconbtn" data-a="bloque-del" data-s="' + s + '" data-i="' + i + '" aria-label="Quitar paso">' + ic('x', 16, 2) + '</button></div>';
  });
  if (!l.length) {
    var q = bloqueTipoSugerido(c);
    b += '<p class="hint small">' + (s === 'calent' ? 'Antes de la fuerza: movimiento, no estiramiento quieto. 5 minutos.' : 'Al final, con el músculo caliente: 20 a 30 segundos por posición, sin rebotar.') + '</p>' +
      '<div class="row2"><button type="button" class="btn" data-a="bloque-def" data-s="' + s + '" data-q="' + q + '">Poner el de ' + q + '</button><button type="button" class="linkbtn" data-a="bloque-def" data-s="' + s + '" data-q="' + (q === 'pierna' ? 'torso' : 'pierna') + '">o el de ' + (q === 'pierna' ? 'torso' : 'pierna') + '</button></div>';
  }
  b += '<button type="button" class="linkbtn" data-a="bloque-add" data-s="' + s + '">' + ic('plus', 16, 2) + 'Agregar paso</button></div>';
  return b;
}
function vSug(it, ex){
  var g = sugDe(it); if (!g) return '';
  return '<div class="sugbar"><span>' + ic('trend', 16) + 'Sube de ' + esc(fmtKg(g.de)) + ' a ' + esc(fmtKg(g.a)) + ' kg' + esc(kgSuf(ex)) + ': llegaste al tope la última vez.' + (discosTexto(ex, g.a) ? ' Discos: ' + esc(discosTexto(ex, g.a)) + '.' : '') + '</span><button type="button" class="linkbtn sm" data-a="sug-undo" data-k="' + esc(it.k) + '">Dejar en ' + esc(fmtKg(g.de)) + '</button></div>';
}
function totalsText(c){ var s = dayStats(c); var p = []; if (s.f) p.push(s.sets + ' series'); if (s.c) p.push(fmtNum(s.min) + ' min cardio'); return p.length ? p.join(' · ') : 'Sin ejercicios'; }
function fMeta(c){ var s = dayStats(c), v = dayVol(c); return s.f + (s.f === 1 ? ' ejercicio' : ' ejercicios') + ' · ' + s.sets + ' series' + (v ? ' · total ' + fmtVol(v) + ' kg' : ''); }
function cMeta(c){ var s = dayStats(c); return s.c + (s.c === 1 ? ' actividad' : ' actividades') + ' · ' + fmtNum(s.min) + ' min'; }
function updateLive(){
  var c = getCont(curCtx()); if (!c) return;
  var map = { total: totalsText(c), fmeta: fMeta(c), cmeta: cMeta(c) };
  Object.keys(map).forEach(function(k){ var el = document.querySelector('[data-live="' + k + '"]'); if (el) el.textContent = map[k]; });
}
function vEditor(ctx){
  var c = getCont(ctx);
  if (!c) return '<section class="view">' + topbar('Atrás', 'No disponible') + '<div class="vbody"><p class="hint">' + (ctx.kind === 'day' ? dayLockMsg(fechaDe(ctx.ws, ctx.i)) : 'Este día tipo ya no existe.') + '</p></div></section>';
  var isDay = ctx.kind === 'day';
  var title = isDay ? DAYS[ctx.i] + ' ' + dayDate(ctx.ws, ctx.i).getDate() + ' ' + MONTHS[dayDate(ctx.ws, ctx.i).getMonth()] : 'Día tipo';
  var f = c.items.filter(function(it){ return !isCardio(it); }), cd = c.items.filter(isCardio);
  var logDate = isDay && iso(dayDate(ctx.ws, ctx.i)) <= todayIso() ? iso(dayDate(ctx.ws, ctx.i)) : null;
  var planDate = isDay && !logDate ? iso(dayDate(ctx.ws, ctx.i)) : null;
  var b = pendSlot() + '<div class="field"><label for="f-name">' + (isDay ? 'Nombre del día' : 'Nombre del día tipo') + '</label><input id="f-name" class="inp inp-name" data-f="name" value="' + esc(c.name) + '" placeholder="Ej. Empuje A" autocomplete="off"></div>';
  if (isDay) {
    b += '<div class="two"><button type="button" class="btn" data-a="cargar"' + (dayKept(ctx) ? ' disabled' : '') + '>' + ic('layers', 18) + 'Cargar día tipo</button><button type="button" class="btn" data-a="guardar-tipo"' + (c.items.length ? '' : ' disabled') + '>' + ic('save', 18) + 'Guardar como día tipo</button></div>';
    if (S.confirm === 'guardarTipo') b += '<div class="inline"><div class="field"><label for="f-tname">Nombre del día tipo</label><input id="f-tname" class="inp" data-f="tname" value="' + esc(S.tname) + '" autocomplete="off"></div><p class="hint" style="font-size:13px">Si ya existe un día tipo con ese nombre, se actualiza con estos ejercicios.</p><div class="row2"><button type="button" class="btn btn-primary" data-a="guardar-tipo-ok">Guardar</button><button type="button" class="btn" data-a="cancel">Cancelar</button></div></div>';
    if ((c.items.length || c.rest || c.name) && !dayKept(ctx)) {
      if (S.confirm === 'move') {
        var wk = S.weeks[ctx.ws];
        b += '<div class="inline"><p class="hint" style="font-size:13px">¿A qué día lo pasas? Si ese día ya tiene plan, los dos se intercambian.</p><div class="movegrid">' +
          [0,1,2,3,4,5,6].filter(function(j){ return j !== ctx.i; }).map(function(j){
            var dj = wk.days[j], lab = dj.rest ? 'Descanso' : (dj.items.length ? dayName(dj, dayStats(dj)) : 'Sin plan');
            return '<button type="button" class="option movebtn" data-a="move-to" data-i="' + j + '"><span class="ot"><b>' + DAYS[j] + ' ' + dayDate(ctx.ws, j).getDate() + (isToday(ctx.ws, j) ? ' · hoy' : '') + '</b><small>' + esc(lab) + '</small></span></button>';
          }).join('') + '</div><div class="row2"><button type="button" class="btn" data-a="cancel">Cancelar</button></div></div>';
      } else {
        b += '<button type="button" class="btn full" data-a="move-open">' + ic('cal', 18) + 'Mover a otro día</button>';
      }
    }
    b += '<label class="check"><input type="checkbox" id="f-rest" data-f="rest"' + (c.rest ? ' checked' : '') + '>Marcar como día de descanso</label>';
  }
  if (isDay && c.rest) {
    b += '<div class="restnote">Día de descanso. Quita la marca para planear ejercicios.</div>';
  } else {
    b += vBloque(c, 'calent', ctx, isDay, logDate);
    if (f.length) b += '<div class="sechead"><h2>Fuerza</h2><span data-live="fmeta">' + fMeta(c) + '</span></div><div class="exlist" data-sec="fuerza">' + strengthBlocks(f, logDate, planDate, ctx) + '</div>';
    if (cd.length) b += '<div class="sechead"><h2>Cardio</h2><span data-live="cmeta">' + cMeta(c) + '</span></div><div class="exlist" data-sec="cardio">' + cd.map(function(it){ return vExCard(it, { ctx: ctx }); }).join('') + '</div>';
    if (!c.items.length) b += '<p class="hint">Todavía no hay ejercicios. Agrégalos desde la biblioteca' + (isDay ? ' o carga un día tipo.' : '.') + '</p>';
    b += '<button type="button" class="addbtn" data-a="open-lib">' + ic('plus', 20, 2) + 'Agregar ejercicio</button>';
    b += vBloque(c, 'estir', ctx, isDay, logDate);
  }
  if (isDay && (c.items.length || c.name || c.rest) && !dayKept(ctx)) {
    b += S.confirm === 'dayclear' ? '<div class="confirm"><p>Se quitan todos los ejercicios de este día.</p><div class="row2"><button type="button" class="btn btn-danger-solid" data-a="day-clear-ok">Vaciar día</button><button type="button" class="btn" data-a="cancel">Cancelar</button></div></div>' : '<div class="editfoot"><button type="button" class="linkbtn danger" data-a="day-clear">Vaciar día</button></div>';
  }
  if (!isDay) {
    b += S.confirm === 'tipodel' ? '<div class="confirm"><p>Se borra este día tipo. Los días que ya lo usan no cambian.</p><div class="row2"><button type="button" class="btn btn-danger-solid" data-a="tipo-del-ok">Borrar día tipo</button><button type="button" class="btn" data-a="cancel">Cancelar</button></div></div>' : '<div class="editfoot"><button type="button" class="linkbtn danger" data-a="tipo-del">Borrar día tipo</button></div>';
  }
  var foot = '<footer class="vfoot"><div class="footinfo"><b data-live="total">' + totalsText(c) + '</b><small data-live="save">' + saveText() + '</small></div><button type="button" class="btn btn-primary" data-a="back">Listo</button></footer>';
  return '<section class="view">' + topbar(isDay ? 'Semana' : 'Días tipo', title) + '<div class="vbody">' + b + '</div>' + foot + '</section>';
}

/* BIBLIOTECA */
function libItems(){
  var q = norm(S.libQ);
  var arr = LIB.concat(customList()).filter(function(e){ return e.t === S.libT; });
  if (S.libT === 'fuerza' && S.libG !== 'Todos') arr = arr.filter(function(e){ return e.g === S.libG; });
  if (q) arr = arr.filter(function(e){ return norm(e.n).indexOf(q) >= 0 || norm(e.g).indexOf(q) >= 0 || norm(e.e).indexOf(q) >= 0; });
  if (S.libT === 'fuerza') arr = arr.map(function(e, i){ return [e, i]; }).sort(function(a, b){ return (GROUPS.indexOf(a[0].g) - GROUPS.indexOf(b[0].g)) || (a[1] - b[1]); }).map(function(x){ return x[0]; });
  return arr;
}
function libControls(){
  return '<div class="search">' + ic('search', 18, 2) + '<input id="lib-q" type="search" data-f="libq" value="' + esc(S.libQ) + '" placeholder="Buscar ejercicio" aria-label="Buscar ejercicio" autocomplete="off"></div>' +
    '<div class="seg" role="group" aria-label="Tipo de ejercicio"><button type="button" data-a="lib-t" data-t="fuerza" aria-pressed="' + (S.libT === 'fuerza') + '">Fuerza</button><button type="button" data-a="lib-t" data-t="cardio" aria-pressed="' + (S.libT === 'cardio') + '">Cardio</button></div>' +
    (S.libT === 'fuerza' ? '<div class="chips" role="group" aria-label="Grupo muscular">' + ['Todos'].concat(GROUPS).map(function(g){ return '<button type="button" class="chip" data-a="lib-g" data-g="' + g + '" aria-pressed="' + (S.libG === g) + '">' + g + '</button>'; }).join('') + '</div>' : '');
}
function libListHtml(sel){
  var arr = libItems();
  if (!arr.length) return '<div class="emptylist"><p>No hay ejercicios con ese filtro.</p><button type="button" class="btn" data-a="open-crear">' + ic('plus', 18, 2) + 'Crear ejercicio</button></div>';
  var grouped = S.libT === 'fuerza' && S.libG === 'Todos' && !S.libQ, last = null, out = '';
  arr.forEach(function(e){
    if (grouped && e.g !== last) { out += '<h2 class="libgroup">' + esc(e.g) + '</h2>'; last = e.g; }
    if (sel === 'swap') { if (e.id !== S.swapEx) out += swapRow(e, ''); return; }
    if (sel) {
      var on = S.sel.indexOf(e.id) >= 0;
      out += '<label class="row' + (on ? ' on' : '') + '" data-row="' + esc(e.id) + '"><button type="button" class="thumb" data-a="open-det" data-id="' + esc(e.id) + '" aria-label="Ver cómo se hace ' + esc(e.n) + '">' + thumbHtml(e) + '<span class="zoom">' + ic('expand', 11, 3) + '</span></button><span class="rmain"><b>' + esc(e.n) + '</b><small>' + esc(exMeta(e)) + '</small></span><input type="checkbox" data-f="libsel" data-id="' + esc(e.id) + '"' + (on ? ' checked' : '') + ' aria-label="Seleccionar ' + esc(e.n) + '"></label>';
    } else {
      out += '<button type="button" class="row" data-a="open-det" data-id="' + esc(e.id) + '"><span class="thumb">' + thumbHtml(e) + '</span><span class="rmain"><b>' + esc(e.n) + '</b><small>' + esc(exMeta(e)) + '</small></span><span class="chev">' + ic('right', 18, 2) + '</span></button>';
    }
  });
  return out;
}
function updateLibList(){ var el = document.getElementById('liblist'), tv = top() && top().v; if (el) el.innerHTML = libListHtml(tv === 'swap' ? 'swap' : tv === 'lib'); }
function addLabel(n){ return n ? 'Agregar ' + (n === 1 ? '1 ejercicio' : n + ' ejercicios') : 'Selecciona ejercicios'; }
function vLibSelect(t){
  var n = S.sel.length;
  return '<section class="view">' + topbar(backLabel(t.ctx), 'Agregar ejercicio') + '<div class="vbody"><div class="libctl">' + libControls() + '</div><div id="liblist" class="liblist">' + libListHtml(true) + '</div></div>' +
    '<footer class="vfoot"><button type="button" class="btn" data-a="open-crear">' + ic('plus', 18, 2) + 'Crear</button><button type="button" class="btn btn-primary wide" data-a="lib-add" data-live="libadd"' + (n ? '' : ' disabled') + '>' + addLabel(n) + '</button></footer></section>';
}
function vLibTab(){
  var total = LIB.length + customList().length;
  return '<div class="pagehead"><div><h1>Ejercicios</h1><p>' + total + ' ejercicios. Toca uno para ver cómo se hace.</p></div><button type="button" class="btn btn-primary" data-a="open-crear">' + ic('plus', 18, 2) + 'Crear</button></div>' + vAislados() + pendSlot() +
    '<div class="libctl">' + libControls() + '</div><div id="liblist" class="liblist" style="margin-top:12px">' + libListHtml(false) + '</div>';
}

/* CAMBIAR EJERCICIO */
function swapRow(e, why){
  return '<div class="row swaprow"><button type="button" class="thumb" data-a="open-det" data-id="' + esc(e.id) + '" aria-label="Ver cómo se hace ' + esc(e.n) + '">' + thumbHtml(e) + '<span class="zoom">' + ic('expand', 11, 3) + '</span></button>' +
    '<button type="button" class="swapmain" data-a="swap-pick" data-id="' + esc(e.id) + '"><span class="rmain"><b>' + esc(e.n) + '</b><small>' + esc(why || exMeta(e)) + '</small></span><span class="dcta">Usar</span></button></div>';
}
function swapTarget(t){ var c = getCont(t.ctx), it = c && c.items.find(function(x){ return x.k === t.k; }); return { c: c, it: it }; }
function vSwap(t){
  var st = swapTarget(t), it = st.it;
  if (!it) return '<section class="view">' + topbar(backLabel(t.ctx), 'Cambiar ejercicio') + '<div class="vbody"><p class="hint">Este ejercicio ya no está en el día.</p></div></section>';
  var ex = exById(it.ex), alts = altsOf(ex.id);
  var b = '<div class="swapcur"><span class="thumb">' + thumbHtml(ex) + '</span><span class="rmain"><span class="eyebrow">Vas a cambiar</span><b>' + esc(ex.n) + '</b><small>' + esc(exMeta(ex)) + '</small></span></div>';
  if (MAIN[ex.id]) b += '<p class="swapnote">Es uno de tus ejercicios principales. Si lo cambias seguido, pierdes la referencia para medir si estás progresando.</p>';
  if (alts.length) b += '<div class="sechead"><h2>Recomendadas</h2></div><div class="liblist">' + alts.map(function(a){ return swapRow(exById(a.id), a.w); }).join('') + '</div>';
  b += '<div class="sechead"><h2>Toda la biblioteca</h2></div><div class="libctl">' + libControls() + '</div><div id="liblist" class="liblist">' + libListHtml('swap') + '</div>';
  var foot = '';
  if (S.swapPick) {
    var nx = exById(S.swapPick), day = t.ctx.kind === 'day' ? st.c : null, tp = day && day.tipo && S.tipos[day.tipo];
    var inTipo = tp && tp.items.some(function(x){ return x.ex === it.ex; });
    foot = '<footer class="vfoot swapfoot"><p>Cambiar <b>' + esc(ex.n) + '</b> por <b>' + esc(nx.n) + '</b>.' + (hasLog(it) ? ' Lo que anotaste de ' + esc(ex.n) + ' en este día se borra.' : '') + '</p><div class="row2">' +
      (inTipo ? '<button type="button" class="btn" data-a="swap-do" data-all="0">Solo este día</button><button type="button" class="btn btn-primary" data-a="swap-do" data-all="1">También en ' + esc(tp.name) + '</button>'
              : '<button type="button" class="btn btn-primary" data-a="swap-do" data-all="0">Cambiar</button>') +
      '<button type="button" class="btn" data-a="swap-cancel">Cancelar</button></div></footer>';
  }
  return '<section class="view">' + topbar(backLabel(t.ctx), 'Cambiar ejercicio') + '<div class="vbody">' + b + '</div>' + foot + '</section>';
}
function swapItem(it, newId){ var old = clone(it); it.ex = newId; delete it.hk; delete it.hr; delete it.note; it.kg = ''; lastKg([it]); return old; }
function swapPick(newId){
  var t = top(); if (!t || t.v !== 'swap') return;
  var st = swapTarget(t); if (!st.it || newId === st.it.ex) return;
  var day = t.ctx.kind === 'day' ? st.c : null, tp = day && day.tipo && S.tipos[day.tipo];
  var ask = hasLog(st.it) || (tp && tp.items.some(function(x){ return x.ex === st.it.ex; }));
  if (ask) { S.swapPick = newId; render(); var f = document.querySelector('.swapfoot .btn-primary'); if (f) f.focus({ preventScroll: true }); return; }
  doSwap(t.ctx, t.k, newId, false);
}
function doSwap(ctx, k, newId, alsoTipo){
  var c = getCont(ctx), it = c && c.items.find(function(x){ return x.k === k; }); if (!it) return;
  var oldEx = it.ex, oldItem = swapItem(it, newId), tid = null, tOld = null;
  clearDrafts(ctx, k);
  markDirty(ctx);
  if (alsoTipo && ctx.kind === 'day' && c.tipo && S.tipos[c.tipo]) {
    var ti = S.tipos[c.tipo].items.find(function(x){ return x.ex === oldEx; });
    if (ti) { tid = c.tipo; tOld = { k: ti.k, item: swapItem(ti, newId) }; markDirty({ kind: 'tipo', id: tid }); }
  }
  S.swapPick = null; pop();
  showToast('Cambiaste ' + exById(oldEx).n + ' por ' + exById(newId).n + (tid ? ', también en ' + S.tipos[tid].name : ''), function(){
    var cc = getCont(ctx), i = cc ? cc.items.findIndex(function(x){ return x.k === k; }) : -1;
    if (i >= 0) { cc.items[i] = oldItem; markDirty(ctx); }
    if (tid && S.tipos[tid]) { var ts = S.tipos[tid], j = ts.items.findIndex(function(x){ return x.k === tOld.k; }); if (j >= 0) { ts.items[j] = tOld.item; markDirty({ kind: 'tipo', id: tid }); } }
  });
}

/* DETALLE */
function vDet(t){
  var ex = exById(t.id), ctx = t.ctx, media;
  if (!ex.custom) {
    var fr = S.detMode === 'ini' ? 0 : 1;
    media = '<div class="media"><img id="det-img" src="img/' + ex.id + '_' + fr + '.jpg" alt="' + esc((ILUS[ex.id] ? 'Ilustración de ' : '') + ex.n) + ', posición ' + (fr ? 'final' : 'de inicio') + '"><span class="badge" id="det-badge">' + (fr ? 'Final' : 'Inicio') + '</span></div>' +
      '<div class="seg s3" role="group" aria-label="Foto del ejercicio"><button type="button" data-a="det-mode" data-m="mov" aria-pressed="' + (S.detMode === 'mov') + '">Movimiento</button><button type="button" data-a="det-mode" data-m="ini" aria-pressed="' + (S.detMode === 'ini') + '">Inicio</button><button type="button" data-a="det-mode" data-m="fin" aria-pressed="' + (S.detMode === 'fin') + '">Final</button></div>';
  } else {
    media = ex.img ? '<div class="media"><img src="' + esc(fotoUrl(ex.img)) + '" alt="' + esc(ex.n) + '"></div>' : '<div class="media empty">' + ic('image', 40, 1.5) + '<span>Sin foto</span></div>';
  }
  var rows = '<div class="dl"><div class="dlr"><span>' + (ex.t === 'cardio' ? 'Tipo' : 'Principal') + '</span><span class="tags"><span class="tag accent">' + esc(ex.t === 'cardio' ? 'Cardio' : ex.g) + '</span></span></div>' +
    (ex.s.length ? '<div class="dlr"><span>Secundarios</span><span class="tags">' + ex.s.map(function(s){ return '<span class="tag">' + esc(s) + '</span>'; }).join('') + '</span></div>' : '') +
    (ex.e ? '<div class="dlr"><span>Equipo</span><span class="tags"><span class="tag">' + esc(ex.e) + '</span></span></div>' : '') +
    (cargaFrase(ex) ? '<div class="dlr"><span>Carga</span><span class="tags"><span class="tag">' + esc(cargaFrase(ex)) + '</span></span></div>' : '') + '</div>';
  var steps = ex.p.length ? '<div class="howto"><h3 class="h3cap">Cómo se hace</h3><ol class="steps">' + ex.p.map(function(p){ return '<li>' + esc(p) + '</li>'; }).join('') + '</ol></div>' : '';
  var credit = ex.custom ? '' : ex.id === 'patadatri' ? '<p class="credit">Imagen generada con IA.</p>' : ILUS[ex.id] ? '<p class="credit">Ilustración esquemática, no es una fotografía.</p>' : '<p class="credit">Fotos: Free Exercise DB, dominio público.</p>';
  var foot = '';
  if (ctx) {
    var inSel = S.sel.indexOf(ex.id) >= 0, others = S.sel.filter(function(x){ return x !== ex.id; }).length;
    foot = '<footer class="vfoot">' + (others || inSel ? '<button type="button" class="btn btn-primary wide" data-a="det-sel">' + (inSel ? 'Quitar de la selección' : 'Agregar a la selección') + '</button>' : '<button type="button" class="btn btn-primary wide" data-a="det-add">Agregar a ' + esc(ctxLabel(ctx)) + '</button>') + '</footer>';
  } else if (t.swap) {
    foot = '<footer class="vfoot"><button type="button" class="btn btn-primary wide" data-a="det-swap">Usar este ejercicio</button></footer>';
  } else if (ex.custom && !ex.missing) {
    foot = ex.ro ? '<footer class="vfoot"><p class="hint small">Este ejercicio tiene datos que la app no reconoce. Se conserva sin cambios; no se puede editar ni borrar desde aquí.</p></footer>' : '<footer class="vfoot">' + (S.confirm === 'exdel' ? '<span class="footinfo"><b>¿Borrar este ejercicio?</b><small>Sale de la biblioteca. Los días que lo usan lo conservan.</small></span><button type="button" class="btn btn-danger-solid" data-a="ex-del-ok">Borrar</button><button type="button" class="btn" data-a="cancel">No</button>' : '<button type="button" class="btn wide" data-a="ex-edit" data-id="' + esc(ex.id) + '">' + ic('pencil', 18) + 'Editar</button><button type="button" class="btn btn-danger" data-a="ex-del">' + ic('trash', 18) + 'Borrar</button>') + '</footer>';
  }
  var alts = altsOf(ex.id);
  var vars = alts.length ? '<div class="howto"><h3 class="h3cap">Variaciones</h3><div class="liblist">' + alts.map(function(a){ var e = exById(a.id); return '<button type="button" class="row" data-a="open-det" data-id="' + esc(e.id) + '"><span class="thumb">' + thumbHtml(e) + '</span><span class="rmain"><b>' + esc(e.n) + '</b><small>' + esc(a.w) + '</small></span><span class="chev">' + ic('right', 18, 2) + '</span></button>'; }).join('') + '</div></div>' : '';
  return '<section class="view">' + topbar('Atrás', 'Ejercicio') + '<div class="vbody">' + media + '<h2 class="exh">' + esc(ex.n) + '</h2>' + rows + vProg(ex) + steps + vars + credit + '</div>' + foot + '</section>';
}

/* DÍAS TIPO */
function tipoMeta(t, s){ if (!s.f && s.c) return cardioDesc(t); var p = [t.items.length + (t.items.length === 1 ? ' ejercicio' : ' ejercicios')]; if (s.sets) p.push(s.sets + ' series'); if (s.min) p.push(fmtNum(s.min) + ' min cardio'); return p.join(' · '); }
function relPhrase(ws){ var r = relLabel(ws); if (r === 'Esta semana') return 'esta semana'; if (r === 'Próxima semana') return 'la próxima semana'; if (r === 'Semana pasada') return 'la semana pasada'; return 'la semana del ' + weekLabel(ws); }
function cap(s){ return s.charAt(0).toUpperCase() + s.slice(1); }
function vTipos(){
  var list = tiposList(), w = S.weeks[S.ws], rp = relPhrase(S.ws);
  var h = '<div class="pagehead"><div><h1>Días tipo</h1><p>Plantillas para armar la semana más rápido</p></div><button type="button" class="btn btn-primary" data-a="tipo-new">' + ic('plus', 18, 2) + 'Nuevo</button></div>' + vAislados() + pendSlot();
  if (S.dbState === 'loading' && !list.length) return h + '<div class="card loading" role="status">Cargando…</div>';
  if (!list.length) return h + '<div class="card"><p class="hint">Todavía no tienes días tipo. Crea uno aquí o, desde un día de la semana, toca "Guardar como día tipo".</p></div>';
  return h + cicloCard() + '<div class="stack">' + list.map(function(t){
    var s = dayStats(t), used = w ? DAYS.filter(function(_, i){ return w.days[i].tipo === t.id; }).map(function(x){ return x.toLowerCase(); }) : [];
    return '<button type="button" class="tipocard" data-a="open-tipo" data-id="' + esc(t.id) + '"><span class="tiporow"><span class="tname"><b>' + esc(t.name || 'Sin nombre') + '</b>' + (!s.f && s.c ? '<span class="pill">CARDIO</span>' : '') + (t.ejemplo ? '<span class="pill">Ejemplo</span>' : '') + '</span><small>' + (used.length ? esc(cap(rp)) + ': ' + used.join(', ') : 'Sin usar ' + esc(rp)) + '</small></span><span class="tmeta">' + esc(tipoMeta(t, s)) + '</span>' + (s.groups.length ? '<span class="tags">' + s.groups.map(function(g){ return '<span class="tag sm">' + esc(g) + '</span>'; }).join('') + '</span>' : '') + '</button>';
  }).join('') + '</div>';
}
function vCargar(t){
  var list = tiposList(), d = getCont({ kind: 'day', ws: t.ws, i: t.i });
  var b = '<p class="hint">' + (d.items.length ? 'El día tipo reemplaza lo que tiene el ' + DAYS[t.i].toLowerCase() + '.' : 'Elige la plantilla para este día.') + '</p>';
  if (!list.length) b += '<div class="card"><p class="hint">Todavía no tienes días tipo.</p></div><button type="button" class="btn" data-a="goto-tipos">Ir a Días tipo</button>';
  else b += '<div class="optlist">' + list.map(function(x){ var s = dayStats(x); return '<button type="button" class="option" data-a="cargar-pick" data-id="' + esc(x.id) + '">' + ic('layers', 22) + '<span class="ot"><b>' + esc(x.name || 'Sin nombre') + '</b><small>' + esc(tipoMeta(x, s)) + '</small></span></button>'; }).join('') + '</div>';
  return '<section class="view">' + topbar(DAYS[t.i] + ' ' + dayDate(t.ws, t.i).getDate(), 'Cargar día tipo') + '<div class="vbody">' + b + '</div></section>';
}
function vAsignar(t){
  var i = t.step, list = tiposList(), d = getCont({ kind: 'day', ws: t.ws, i: i });
  var cur = d.rest ? '__rest' : (d.tipo || (d.items.length ? '__keep' : ''));
  var b = '<div><span class="eyebrow">Día ' + (i + 1) + ' de 7</span><h2 class="bigtitle">¿Qué haces el ' + DAYS[i].toLowerCase() + ' ' + dayDate(t.ws, i).getDate() + '?</h2></div><div class="optlist">' +
    list.map(function(x){ var s = dayStats(x); return '<button type="button" class="option' + (cur === x.id ? ' primary' : '') + '" data-a="asignar-pick" data-id="' + esc(x.id) + '">' + ic('layers', 22) + '<span class="ot"><b>' + esc(x.name || 'Sin nombre') + '</b><small>' + esc(tipoMeta(x, s)) + '</small></span></button>'; }).join('') +
    '<button type="button" class="option' + (cur === '__rest' ? ' primary' : '') + '" data-a="asignar-pick" data-id="__rest">' + ic('cal', 22) + '<span class="ot"><b>Descanso</b><small>Sin entrenamiento</small></span></button>' +
    '<button type="button" class="option" data-a="asignar-pick" data-id="__skip">' + ic('right', 22) + '<span class="ot"><b>' + (cur ? 'Dejar como está' : 'Dejar vacío por ahora') + '</b><small>Lo planeas después</small></span></button></div>';
  var foot = '<footer class="vfoot">' + (i > 0 ? '<button type="button" class="btn" data-a="asignar-prev">' + ic('left', 18, 2) + 'Anterior</button>' : '') + '<button type="button" class="btn wide" data-a="back">Terminar</button></footer>';
  return '<section class="view">' + topbar('Semana', 'Armar con días tipo') + '<div class="vbody">' + b + '</div>' + foot + '</section>';
}

/* HISTORIAL */
function vHist(){
  var wss = Object.keys(S.weeks).filter(function(k){ return hasContent(S.weeks[k]); }).sort().reverse();
  var bar = topbar('Semana', 'Historial');
  function wrap(x){ return '<section class="view">' + bar + '<div class="vbody">' + x + '</div></section>'; }
  if (S.dbState === 'loading' && !wss.length) return wrap('<div class="card loading" role="status">Cargando…</div>');
  if (!wss.length) return wrap(archivoNota() + '<p class="hint">Aquí aparecen tus semanas cuando planees la primera.</p>');
  var h = archivoNota() + '<p class="hint small">Cada semana queda guardada. Toca una para verla o cópiala en <b>' + weekLabel(S.ws) + '</b>, la semana que estás planeando.</p>';
  var out = '', lastM = '';
  wss.forEach(function(ws){
    var d = parseIso(ws), m = MONTHS_LONG[d.getMonth()] + ' ' + d.getFullYear();
    if (m !== lastM) { out += '<h2 class="monthhead">' + m + '</h2>'; lastM = m; }
    var rel = relLabel(ws), st = weekStats(S.weeks[ws]);
    out += '<div class="histcard' + (ws === S.ws ? ' current' : '') + '"><div class="histtop"><button type="button" class="histmain" data-a="wk-go" data-ws="' + ws + '"><span class="htitle">' + weekLabel(ws) + (rel ? '<span class="pill accent">' + rel + '</span>' : '') + '</span><small>' + st.fuerzaDays + ' días · ' + st.sets + ' series · ' + fmtNum(st.min) + ' min cardio</small></button>' +
      (ws !== S.ws ? '<button type="button" class="btn btn-sm" data-a="hist-copy" data-ws="' + ws + '">' + ic('copy', 16) + 'Copiar a ' + weekLabel(S.ws) + '</button>' : '') + '</div>' +
      (S.confirm === 'hist:' + ws ? '<div class="confirm"><p>' + weekLabel(S.ws) + ' ya tiene plan. Si copias, se reemplaza.</p><div class="row2"><button type="button" class="btn btn-danger-solid" data-a="hist-copy-ok" data-ws="' + ws + '">Reemplazar</button><button type="button" class="btn" data-a="cancel">Cancelar</button></div></div>' : '') + '</div>';
  });
  return wrap(h + '<div class="stack">' + out + '</div>');
}

/* CREAR EJERCICIO */
function vCrear(){
  var f = S.form; if (!f) return '<section class="view">' + topbar('Atrás', 'Ejercicio') + '</section>';
  var edit = !!f.id, legado = edit && f.t === 'fuerza' && !f.carga, lockAttr = edit ? ' disabled aria-disabled="true"' : '';
  var b = pendSlot() + '<div class="field"><label for="c-n">Nombre</label><input id="c-n" class="inp inp-name" data-f="form" data-p="n" value="' + esc(f.n) + '" placeholder="Ej. Press en máquina Smith" autocomplete="off">' + (S.formErr ? '<p class="err" role="alert">' + esc(S.formErr) + '</p>' : '') + '</div>' +
    '<div class="field"><span class="lbl" id="c-t-l">Tipo</span><div class="seg" role="group" aria-labelledby="c-t-l"><button type="button" data-a="form-t" data-t="fuerza" aria-pressed="' + (f.t === 'fuerza') + '"' + lockAttr + '>Fuerza</button><button type="button" data-a="form-t" data-t="cardio" aria-pressed="' + (f.t === 'cardio') + '"' + lockAttr + '>Cardio</button></div></div>';
  if (f.t === 'fuerza') {
    b += '<div class="field"><label for="c-g">Músculo principal</label><select id="c-g" class="inp" data-f="form" data-p="g">' + GROUPS.map(function(g){ return '<option' + (f.g === g ? ' selected' : '') + '>' + g + '</option>'; }).join('') + '</select></div>' +
      '<div class="field"><span class="lbl" id="c-s-l">Músculos secundarios</span><div class="chips wrap" role="group" aria-labelledby="c-s-l">' + GROUPS.filter(function(g){ return g !== f.g; }).map(function(g){ return '<button type="button" class="chip" data-a="form-sec" data-g="' + g + '" aria-pressed="' + (f.s.indexOf(g) >= 0) + '">' + g + '</button>'; }).join('') + '</div></div>';
  }
  if (f.t === 'fuerza') b += '<div class="field"><span class="lbl" id="c-c-l">Cómo anotas la carga</span><div class="chips wrap" role="group" aria-labelledby="c-c-l">' + CARGAS.map(function(c){ return '<button type="button" class="chip" data-a="form-carga" data-c="' + c + '" aria-pressed="' + (f.carga === c) + '"' + lockAttr + '>' + CARGA_TXT[c] + '</button>'; }).join('') + '</div>' +
    '<p class="hint small">' + (legado ? 'Sin indicar: este ejercicio se creó antes de esta opción y sus registros se leen como siempre, según el equipo.' : cargaAyuda(f.carga)) + '</p></div>';
  if (edit) b += '<div class="card"><p class="hint small">El tipo' + (f.t === 'fuerza' ? ', la forma de anotar la carga' + (legado ? ' y el equipo' : '') : '') + ' no se cambian en un ejercicio ya creado: así lo que ya anotaste conserva su significado. Nombre, músculos, foto y pasos sí se pueden editar.</p><button type="button" class="btn btn-sm" data-a="ex-variant">Crear otro ejercicio a partir de este</button></div>';
  b += '<div class="field"><label for="c-e">Equipo</label><select id="c-e" class="inp" data-f="form" data-p="e"' + (legado ? ' disabled' : '') + '>' + EQUIPOS.map(function(e){ return '<option' + (f.e === e ? ' selected' : '') + '>' + e + '</option>'; }).join('') + '</select></div>';
  if (S.assets) {
    b += '<div class="field"><span class="lbl">Foto</span><div style="display:flex;gap:12px;align-items:center"><span class="thumb" style="width:72px;height:72px">' + (f.img ? '<img src="' + esc(fotoUrl(f.img)) + '" alt="">' : '<span class="ph">' + ic('image', 24) + '</span>') + '</span><div style="display:flex;flex-direction:column;gap:4px;align-items:flex-start"><label class="btn" for="c-photo">' + (f.uploading ? 'Subiendo…' : (f.img ? 'Cambiar foto' : 'Subir foto')) + '</label><input id="c-photo" class="sr" type="file" accept="image/*" data-f="photo"' + (f.uploading ? ' disabled' : '') + '>' + (f.img ? '<button type="button" class="linkbtn sm" data-a="form-nophoto">Quitar foto</button>' : '') + '</div></div></div>';
  } else if (S.assets === null) {
    b += '<p class="hint" style="font-size:13px">' + (S.local ? 'Aquí no se pueden subir fotos propias.' : 'Las fotos solo se pueden subir con permiso de edición sobre esta página.') + '</p>';
  }
  b += '<div class="field"><label for="c-p">Cómo se hace</label><textarea id="c-p" class="inp" data-f="form" data-p="p" placeholder="Un paso por línea">' + esc(f.p) + '</textarea></div>';
  return '<section class="view">' + topbar('Atrás', edit ? 'Editar ejercicio' : 'Nuevo ejercicio') + '<div class="vbody">' + b + '</div><footer class="vfoot"><button type="button" class="btn btn-primary wide" data-a="crear-save"' + (f.uploading ? ' disabled' : '') + '>' + (edit ? 'Guardar cambios' : 'Crear ejercicio') + '</button></footer></section>';
}

function cargaAyuda(c){ return c === 'una' ? 'Anota el peso de la mancuerna: una de 15 kg son 15 kg.' : c === 'dos' ? 'Anota el total de las dos, una sola vez: dos de 10 kg son 20 kg.' : c === 'barra' ? 'Anota el total con la barra y los discos.' : c === 'polea' ? 'Anota el peso de la pila de la polea.' : c === 'corporal' ? 'Anota solo el peso que agregas; sin peso extra deja 0 o vacío.' : c === 'otra' ? 'Anota el peso que marca la máquina o el implemento.' : 'Elige cómo anotas la carga.'; }
/* valor inicial de la carga en un ejercicio nuevo, según el equipo elegido; nunca se aplica a uno ya creado */
function cargaPorEquipo(e){ return e === 'Mancuernas' ? 'una' : e === 'Barra' || e === 'Barra EZ' ? 'barra' : e === 'Polea' ? 'polea' : e === 'Peso corporal' ? 'corporal' : 'otra'; }
/* PROGRESO: datos */
var DAB = ['Lun','Mar','Mié','Jue','Vie','Sáb','Dom'];
var WEIGH = [0, 2, 4];
function wd(s){ return (parseIso(s).getDay() + 6) % 7; }
function dShort(s){ var d = parseIso(s); return d.getDate() + ' ' + MONTHS[d.getMonth()]; }
function dChip(s){ return DAB[wd(s)] + ' ' + parseIso(s).getDate(); }
function dRow(s){ return DAB[wd(s)] + ' ' + dShort(s); }
function dLong(s){ return DAYS[wd(s)].toLowerCase() + ' ' + dShort(s); }
function f1(n){ return (Math.round(n * 10) / 10).toFixed(1).replace('.', ','); }
function f2(n){ return (Math.round(n * 100) / 100).toFixed(2).replace('.', ','); }
function fcm(n){ return fmtNum(Math.round(n * 10) / 10); }
function pnum(s){ var t = String(s == null ? '' : s).trim().replace(',', '.'); if (!/^\d+(\.\d+)?$/.test(t)) return null; var n = parseFloat(t); return isFinite(n) ? n : null; }
function clamp(v, a, b){ return Math.max(a, Math.min(b, v)); }
/* fecha civil real AAAA-MM-DD: mes 1 a 12, día dentro del mes y 29 de febrero solo en bisiesto. Date no la corrige:
   «2026-02-31» no se convierte en el 3 de marzo */
function isoOk(s){
  if (typeof s !== 'string' || !/^\d{4}-\d{2}-\d{2}$/.test(s)) return false;
  var y = +s.slice(0, 4), m = +s.slice(5, 7), d = +s.slice(8, 10), leap = (y % 4 === 0 && y % 100 !== 0) || y % 400 === 0;
  return y >= 1000 && m >= 1 && m <= 12 && d >= 1 && d <= [31, leap ? 29 : 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][m - 1];
}
function normPeso(o, id){ var kg = typeof o.kg === 'number' ? o.kg : pnum(o.kg); return kg > 0 ? { fecha: id, kg: kg } : null; }
function normMed(o, id){
  function g(k){ var v = typeof o[k] === 'number' ? o[k] : pnum(o[k]); return v > 0 ? v : null; }
  var m = { fecha: id, cuello: g('cuello'), pecho: g('pecho'), cintura: g('cintura'), cadera: g('cadera') };
  return m.cuello || m.pecho || m.cintura || m.cadera ? m : null;
}
/* una fecha de nacimiento que no existe se conserva en _nac0 y se vuelve a guardar igual hasta que se escriba una real */
function normPerfil(o){ var e = typeof o.estatura === 'number' ? o.estatura : pnum(o.estatura), n = o.nacimiento; return { estatura: e > 0 ? e : null, nacimiento: isoOk(n) ? n : '', sexo: o.sexo === 'M' ? 'M' : 'H', _nac0: typeof n === 'string' && n && !isoOk(n) ? n : '' }; }
function perfil(){ var p = S.perfilDocs.principal; return p && p.estatura ? p : null; }
function edad(nac){
  if (!isoOk(nac)) return null;
  var b = parseIso(nac), t = parseIso(todayIso()), a = t.getFullYear() - b.getFullYear();
  if (t.getMonth() < b.getMonth() || (t.getMonth() === b.getMonth() && t.getDate() < b.getDate())) a--;
  return a >= 0 && a < 120 ? a : null;
}
function pesoList(){ return Object.keys(S.pesos).sort().map(function(k){ return S.pesos[k]; }); }
function pesoWeeks(){ var g = {}; pesoList().forEach(function(p){ var m = iso(monday(parseIso(p.fecha))); (g[m] = g[m] || []).push(p); }); return g; }
function avg(list){ return list.reduce(function(s, p){ return s + p.kg; }, 0) / list.length; }
function kgList(list){ return list.map(function(p){ return DAB[wd(p.fecha)] + ' ' + f1(p.kg); }).join(' · '); }
function pesoResumen(){
  var g = pesoWeeks(), cm = curMonday(), past = Object.keys(g).filter(function(m){ return m < cm; }).sort();
  function wk(m){ return m ? { ws: m, list: g[m], avg: avg(g[m]) } : null; }
  return { g: g, cur: g[cm] || [], last: wk(past[past.length - 1]), prev: wk(past[past.length - 2]) };
}
function refPeso(){ var r = pesoResumen(); if (r.last) return r.last.avg; if (r.cur.length) return avg(r.cur); return null; }
function pesoCerca(d){
  var g = pesoWeeks(), m = iso(monday(parseIso(d)));
  if (g[m]) return { kg: avg(g[m]), prom: g[m].length > 1 };
  var best = null, bd = 11, t = parseIso(d).getTime();
  pesoList().forEach(function(p){ var dd = Math.abs(parseIso(p.fecha).getTime() - t) / 864e5; if (dd < bd) { bd = dd; best = p.kg; } });
  return best == null ? null : { kg: best, prom: false };
}
/* % de grasa, método de la Marina de EE. UU. (medidas en cm) */
function navyBf(sexo, est, cuello, cintura, cadera){
  if (!est || !cuello || !cintura) return null;
  var v;
  if (sexo === 'M') {
    if (!cadera || cintura + cadera - cuello <= 0) return null;
    v = 495 / (1.29579 - 0.35004 * Math.log10(cintura + cadera - cuello) + 0.22100 * Math.log10(est)) - 450;
  } else {
    if (cintura - cuello <= 0) return null;
    v = 495 / (1.0324 - 0.19077 * Math.log10(cintura - cuello) + 0.15456 * Math.log10(est)) - 450;
  }
  return isFinite(v) && v > 2 && v < 70 ? v : null;
}
function medList(){ return Object.keys(S.medidas).sort().map(function(k){ return S.medidas[k]; }); }
function compDe(m){
  var p = perfil(); if (!p || !m) return null;
  var bf = navyBf(p.sexo, p.estatura, m.cuello, m.cintura, m.cadera); if (bf == null) return null;
  var w = pesoCerca(m.fecha), kg = w ? w.kg : null;
  return { fecha: m.fecha, bf: bf, w: w, fat: kg != null ? kg * bf / 100 : null, lean: kg != null ? kg - kg * bf / 100 : null };
}
function arrow(v, unit, goodDown){
  var a = Math.abs(v);
  if (a < 0.05) return '<span class="dneu">=<span class="sr"> sin cambio</span></span>';
  var down = v < 0, good = goodDown == null ? false : (goodDown ? down : !down);
  return '<span class="' + (good ? 'dgood' : 'dneu') + '"><span aria-hidden="true">' + (down ? '▼' : '▲') + '</span><span class="sr">' + (down ? 'bajó' : 'subió') + '</span> ' + (unit === 'cm' ? fcm(a) : f1(a)) + (unit && unit !== 'cm' ? ' ' + unit : '') + '</span>';
}

/* PROGRESO: gráfica de peso */
function chartW(){
  var vw = document.documentElement.clientWidth || window.innerWidth || 390;
  if (DESK.matches) return Math.max(300, Math.round((Math.min(vw, 1100) - 64 - 16) / 2) - 30);
  return Math.max(240, Math.min(vw, 560) - 32 - 30);
}
function pesoChart(){
  var g = pesoWeeks(), cm = curMonday(), ks = Object.keys(g).sort();
  if (!ks.length) return '';
  var from = shiftWeek(cm, -11); if (ks[0] > from) from = ks[0];
  var weeks = []; for (var x = from; x <= cm; x = shiftWeek(x, 1)) weeks.push(x);
  var N = weeks.length, W = chartW(), H = 150, L = 30, R = 8, T = 10, B = 26, pw = W - L - R, ph = H - T - B;
  var vals = []; weeks.forEach(function(ws){ (g[ws] || []).forEach(function(p){ vals.push(p.kg); }); });
  if (!vals.length) return '';
  var mn = Math.min.apply(null, vals), mx = Math.max.apply(null, vals), rg = mx - mn;
  var step = rg > 14 ? 5 : rg > 6 ? 2 : 1;
  var lo = Math.floor((mn - 0.3) / step) * step, hi = Math.ceil((mx + 0.3) / step) * step;
  while ((hi - lo) / step < 2) { lo -= step; if ((hi - lo) / step < 2) hi += step; }
  function yv(v){ return T + (hi - v) / (hi - lo) * ph; }
  function r1(v){ return Math.round(v * 10) / 10; }
  var s = '';
  for (var v = lo; v <= hi + 1e-9; v += step) s += '<line class="ch-grid" x1="' + L + '" x2="' + (W - R) + '" y1="' + r1(yv(v)) + '" y2="' + r1(yv(v)) + '"/><text class="ch-lbl" x="0" y="' + r1(yv(v) + 4) + '">' + v + '</text>';
  s += '<line class="ch-x" x1="0" x2="0" y1="' + T + '" y2="' + (T + ph) + '" style="visibility:hidden"/>';
  var wk = [], line = [];
  weeks.forEach(function(ws, i){
    var list = g[ws]; if (!list) return;
    list.forEach(function(p){ s += '<circle class="ch-dot" cx="' + r1(L + (i + (wd(p.fecha) + 0.5) / 7) / N * pw) + '" cy="' + r1(yv(p.kg)) + '" r="4"/>'; });
    var a = avg(list), cx = r1(L + (i + 0.5) / N * pw), cy = r1(yv(a));
    wk.push({ ws: ws, list: list, avg: a, x: cx, y: cy, cur: ws === cm });
    if (ws !== cm) line.push([cx, cy]);
  });
  if (line.length > 1) s += '<polyline class="ch-line" points="' + line.map(function(p){ return p.join(','); }).join(' ') + '"/>';
  line.forEach(function(p, k){ s += '<circle class="ch-pt" cx="' + p[0] + '" cy="' + p[1] + '" r="' + (k === line.length - 1 ? 5 : 4) + '"/>'; });
  var maxL = Math.max(1, Math.floor(pw / 64)), stepL = Math.max(1, Math.ceil(N / maxL));
  for (var i = N - 1; i >= 0; i -= stepL) s += '<text class="ch-lbl" x="' + r1(L + (i + 0.5) / N * pw) + '" y="' + (H - 6) + '" text-anchor="middle">' + dShort(weeks[i]) + '</text>';
  var comp = wk.filter(function(w){ return !w.cur; }), aria;
  if (!comp.length) aria = 'Pesajes de esta semana';
  else if (comp.length === 1) aria = 'Promedio semanal de peso: ' + f1(comp[0].avg) + ' kg la semana del ' + dShort(comp[0].ws);
  else aria = 'Promedio semanal de peso: de ' + f1(comp[0].avg) + ' kg la semana del ' + dShort(comp[0].ws) + ' a ' + f1(comp[comp.length - 1].avg) + ' kg la semana del ' + dShort(comp[comp.length - 1].ws);
  S.chart = { W: W, weeks: wk, sel: null };
  return '<div class="wchart" tabindex="0" role="group" aria-label="' + esc(aria + '. Usa las flechas para recorrer las semanas.') + '"><svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '" aria-hidden="true">' + s + '</svg><div class="chtip" role="status" hidden></div></div>' +
    '<div class="chleg" aria-hidden="true"><span><span class="kline"></span>Promedio semanal</span><span><span class="kdot"></span>Cada pesaje</span></div>';
}
function chartNearest(cx){
  var c = S.chart, svg = document.querySelector('.wchart svg'); if (!c || !svg || !c.weeks.length) return -1;
  var r = svg.getBoundingClientRect(); if (!r.width) return -1;
  var x = (cx - r.left) * c.W / r.width, best = -1, bd = 1e9;
  c.weeks.forEach(function(w, k){ var dd = Math.abs(w.x - x); if (dd < bd) { bd = dd; best = k; } });
  return best;
}
function chartShow(k){
  var c = S.chart, box = document.querySelector('.wchart'); if (!c || !box || k < 0 || !c.weeks[k]) return;
  var tip = box.querySelector('.chtip'); if (c.sel === k && !tip.hidden) return;
  c.sel = k;
  var w = c.weeks[k], sc = box.querySelector('svg').getBoundingClientRect().width / c.W || 1;
  var ln = box.querySelector('.ch-x'); ln.setAttribute('x1', w.x); ln.setAttribute('x2', w.x); ln.style.visibility = 'visible';
  tip.textContent = '';
  [['b', f1(w.avg) + ' kg'], ['span', w.cur ? 'Esta semana, promedio parcial' : 'Promedio, ' + weekLabel(w.ws)], ['span', kgList(w.list)]].forEach(function(p){ var n = document.createElement(p[0]); n.textContent = p[1]; tip.appendChild(n); });
  tip.hidden = false;
  var tw = tip.offsetWidth, th = tip.offsetHeight, bw = box.clientWidth;
  var left = clamp(w.x * sc - tw / 2, 0, Math.max(0, bw - tw)), topY = w.y * sc - th - 12;
  if (topY < 0) topY = w.y * sc + 14;
  tip.style.left = left + 'px'; tip.style.top = topY + 'px';
}
function chartHide(){
  if (S.chart) S.chart.sel = null;
  var box = document.querySelector('.wchart'); if (!box) return;
  var ln = box.querySelector('.ch-x'), tip = box.querySelector('.chtip');
  if (ln) ln.style.visibility = 'hidden'; if (tip) tip.hidden = true;
}
function chartKey(key){
  var c = S.chart; if (!c || !c.weeks.length) return;
  var n = c.weeks.length, k = c.sel == null ? n - 1 : c.sel;
  if (key === 'ArrowLeft') k = Math.max(0, k - 1); else if (key === 'ArrowRight') k = Math.min(n - 1, k + 1); else if (key === 'Home') k = 0; else k = n - 1;
  chartShow(k);
}

/* PROGRESO: pestaña */
function vAvisoPeso(){
  if (!S.loaded.p) return '';
  var t = todayIso(), w = wd(t);
  if (WEIGH.indexOf(w) < 0 || S.pesos[t]) return '';
  return '<div class="aviso">' + ic('scale', 28, 1.8) + '<span class="avt"><b>Hoy es ' + DAYS[w].toLowerCase() + ': registra tu peso</b><small>En ayunas, antes de desayunar.</small></span><button type="button" class="btn btn-primary" data-a="open-peso" data-d="' + t + '">Registrar</button></div>';
}
function weekChips(ws, mode, sel){
  var g = pesoWeeks(), list = g[ws] || [], t = todayIso(), days = WEIGH.slice();
  list.forEach(function(p){ var i = wd(p.fecha); if (days.indexOf(i) < 0) days.push(i); });
  if (sel && iso(monday(parseIso(sel))) === ws && days.indexOf(wd(sel)) < 0) days.push(wd(sel));
  days.sort();
  return days.map(function(i){
    var d = iso(addDays(parseIso(ws), i)), p = S.pesos[d], lab = '<small>' + dChip(d) + '</small>';
    var a = mode === 'pick' ? 'peso-pick' : 'open-peso', on = mode === 'pick' && d === sel ? ' sel' : '';
    var cur = on ? ' aria-current="date"' : '';
    if (d > t) return '<span class="wchip wait">' + lab + '<span>Pendiente</span></span>';
    if (p) return '<button type="button" class="wchip on' + on + '" data-a="' + a + '" data-d="' + d + '"' + cur + ' aria-label="' + esc(DAYS[i] + ' ' + parseIso(d).getDate() + ': ' + f1(p.kg) + ' kg') + '">' + lab + '<b>' + f1(p.kg) + '</b></button>';
    if (d === t) return '<button type="button" class="wchip due' + on + '" data-a="' + a + '" data-d="' + d + '"' + cur + '>' + lab + '<b>Hoy</b></button>';
    return '<button type="button" class="wchip miss' + on + '" data-a="' + a + '" data-d="' + d + '"' + cur + '>' + lab + '<span>Sin dato</span></button>';
  }).join('');
}
function cardPeso(){
  var r = pesoResumen(), cm = curMonday(), b = '<section class="pcard">';
  if (r.last) {
    var badge = '';
    if (r.prev) {
      var dv = r.last.avg - r.prev.avg, vs = r.prev.ws === shiftWeek(r.last.ws, -1) ? 'semana anterior' : 'semana del ' + dShort(r.prev.ws);
      badge = Math.abs(dv) < 0.05 ? '<span class="dbadge">Igual que la ' + vs + '</span>' : '<span class="dbadge' + (dv < 0 ? ' good' : '') + '"><span aria-hidden="true">' + (dv < 0 ? '▼' : '▲') + '</span><span class="sr">' + (dv < 0 ? 'Bajó' : 'Subió') + '</span> ' + f1(Math.abs(dv)) + ' kg vs ' + vs + '</span>';
    }
    b += '<div class="pchead"><h2>Peso · promedio de la semana</h2><span>' + weekLabel(r.last.ws) + '</span></div><div class="hero"><span class="herov">' + f1(r.last.avg) + ' kg</span>' + badge + '</div><p class="subnote">' + kgList(r.last.list) + '</p>';
  } else if (r.cur.length) {
    b += '<div class="pchead"><h2>Peso · esta semana</h2><span>' + weekLabel(cm) + '</span></div><div class="hero"><span class="herov">' + f1(avg(r.cur)) + ' kg</span><span class="dbadge">Promedio parcial</span></div><p class="subnote">El promedio semanal completo aparece cuando cierres tu primera semana de pesajes.</p>';
  } else {
    b += '<div class="pchead"><h2>Peso</h2></div><p class="hint">Todavía no hay pesajes. Pésate lunes, miércoles y viernes en ayunas; aquí verás el promedio de cada semana y cómo cambia.</p>';
  }
  b += '<div class="subsec"><h3 class="h3cap">Esta semana</h3><div class="chipsrow">' + weekChips(cm, 'open') + '</div>' + (r.last && r.cur.length ? '<p class="subnote">Promedio parcial: ' + f1(avg(r.cur)) + ' kg</p>' : '') + '</div>';
  b += pesoChart();
  b += '<button type="button" class="btn btn-primary btnbig" data-a="open-peso">' + ic('plus', 18, 2) + 'Registrar peso</button>';
  var l = pesoList().reverse();
  if (l.length) {
    var n = S.pesoMore || 5;
    b += '<div class="reclist"><h3 class="h3cap">Últimos pesajes</h3>' + l.slice(0, n).map(function(p){ return '<button type="button" class="recrow" data-a="open-peso" data-d="' + p.fecha + '"><span>' + dRow(p.fecha) + '</span><b>' + f1(p.kg) + ' kg</b><span class="chev">' + ic('right', 16, 2) + '</span></button>'; }).join('') +
      (l.length > n ? '<button type="button" class="linkbtn sm" data-a="peso-more">Ver más</button>' : '') + '</div>';
  }
  return b + '</section>';
}
function cardComp(){
  var p = perfil(), mujer = p && p.sexo === 'M', ms = medList().map(compDe).filter(Boolean), cur = ms[ms.length - 1], prv = ms[ms.length - 2];
  var b = '<section class="pcard"><div class="pchead"><h2>Composición estimada</h2>' + (cur ? '<span>Medida del ' + dShort(cur.fecha) + '</span>' : '') + '</div>';
  if (!p) return b + '<p class="hint">Completa tu perfil (estatura y sexo) para estimar tu % de grasa.</p><button type="button" class="btn" data-a="open-perfil">Completar perfil</button></section>';
  if (!cur) return b + '<p class="hint">Registra cuello' + (mujer ? ', cintura y cadera' : ' y cintura') + ' para estimar tu % de grasa, los kilos de grasa y la masa magra.</p></section>';
  function tri(l, v, dl){ return '<div class="tri"><span>' + l + '</span><b>' + v + '</b><small>' + (dl || '&nbsp;') + '</small></div>'; }
  var hasKg = cur.fat != null, pk = !!prv && prv.fat != null && hasKg;
  b += '<div class="trio">' + tri('% grasa', f1(cur.bf) + ' %', prv ? arrow(cur.bf - prv.bf, 'pts', true) : '') +
    tri('Grasa', hasKg ? f1(cur.fat) + ' kg' : '<span class="na">Sin dato</span>', pk ? arrow(cur.fat - prv.fat, 'kg', true) : '') +
    tri('Masa magra', hasKg ? f1(cur.lean) + ' kg' : '<span class="na">Sin dato</span>', pk ? arrow(cur.lean - prv.lean, 'kg', false) : '') + '</div>';
  b += '<p class="subnote">' + (prv ? 'Cambios desde el ' + dShort(prv.fecha) + '. ' : '') + (hasKg ? '' : 'Registra tu peso de esa semana para ver los kilos. ') + 'Método de la Marina de EE. UU. con cuello, cintura' + (mujer ? ', cadera' : '') + ' y estatura. Margen de 3 a 4 puntos: fíjate en la tendencia.</p>';
  return b + '</section>';
}
function cardInd(){
  var p = perfil(); if (!p) return '';
  var cs = medList().filter(function(m){ return m.cintura; }), c = cs[cs.length - 1], w = refPeso(), v = c ? c.cintura / p.estatura : null;
  var b = '<section class="pcard"><div class="pchead"><h2>Indicadores</h2></div>';
  b += '<div class="ind"><div class="indh"><span>Cintura / estatura</span><b>' + (v ? f2(v) : '<span class="na">Sin dato</span>') + '</b></div>' +
    (v ? '<div class="meter" role="img" aria-label="' + esc(f2(v) + ' en una escala de 0,35 a 0,70; referencia 0,50') + '"><span class="mfill" style="width:42.86%"></span><span class="mtick" style="left:42.86%"></span><span class="mdot" style="left:' + clamp((v - 0.35) / 0.35 * 100, 0, 100).toFixed(1) + '%"></span></div>' : '') +
    '<p class="subnote">Referencia: menos de 0,50. A tu estatura, cintura menor a ' + fcm(p.estatura / 2) + ' cm.' + (v ? '' : ' Registra la cintura para calcularla.') + '</p></div>';
  var bmi = w ? w / Math.pow(p.estatura / 100, 2) : null;
  b += '<div class="ind"><div class="indh"><span>IMC</span><b>' + (bmi ? f1(bmi) : '<span class="na">Sin dato</span>') + '</b></div>' +
    (bmi ? '<div class="bmiscale" role="img" aria-label="' + esc('IMC ' + f1(bmi) + '. Rangos: menos de 18,5; de 18,5 a 25; de 25 a 30; más de 30') + '"><span></span><span class="on"></span><span></span><span></span><span class="mdot" style="left:' + clamp((bmi - 15) / 20 * 100, 0, 100).toFixed(1) + '%"></span></div><div class="bmilbl" aria-hidden="true"><span style="left:17.5%">18,5</span><span style="left:50%">25</span><span style="left:75%">30</span></div>' : '') +
    '<p class="subnote">' + (bmi ? 'Con ' + f1(w) + ' kg. ' : 'Registra tu peso para calcularlo. ') + 'No distingue músculo de grasa. Úsalo junto con la cintura.</p></div>';
  return b + '</section>';
}
function cardMed(){
  var ms = medList(), p = perfil(), last = ms[ms.length - 1], prv = ms[ms.length - 2], t = todayIso();
  var b = '<section class="pcard"><div class="pchead"><h2>Medidas en cm</h2>';
  if (last) { var nx = iso(addDays(parseIso(last.fecha), 14)); b += '<span>' + (nx <= t ? 'Ya toca medir' : 'Próxima: ' + dShort(nx)) + '</span>'; }
  b += '</div>';
  if (!last) b += '<p class="hint">Mide ' + (p && p.sexo === 'M' ? 'cuello, pecho, cintura y cadera' : 'cuello, pecho y cintura') + ' cada 2 a 4 semanas, el mismo día que te pesas.</p>';
  else {
    var rows = [['cuello', 'Cuello'], ['pecho', 'Pecho'], ['cintura', 'Cintura']];
    if ((p && p.sexo === 'M') || ms.some(function(m){ return m.cadera; })) rows.push(['cadera', 'Cadera']);
    var th = function(m){ return '<th scope="col"><button type="button" data-a="open-medidas" data-d="' + m.fecha + '" aria-label="Editar medidas del ' + dShort(m.fecha) + '">' + dShort(m.fecha) + '</button></th>'; };
    b += '<table class="mtab"><thead><tr><th scope="col"><span class="sr">Medida</span></th>' + (prv ? th(prv) : '') + th(last) + (prv ? '<th scope="col">Cambio</th>' : '') + '</tr></thead><tbody>' +
      rows.map(function(r){
        var a = prv ? prv[r[0]] : null, z = last[r[0]];
        return '<tr><td>' + r[1] + '</td>' + (prv ? '<td>' + (a ? fcm(a) : '-') + '</td>' : '') + '<td class="cur">' + (z ? fcm(z) : '-') + '</td>' + (prv ? '<td>' + (a && z ? arrow(z - a, 'cm', r[0] === 'cintura' ? true : null) : '') + '</td>' : '') + '</tr>';
      }).join('') + '</tbody></table>';
  }
  b += '<button type="button" class="btn" data-a="open-medidas">Registrar medidas</button>';
  return b + '</section>';
}
function perfilRow(){
  var p = perfil(), e = p ? edad(p.nacimiento) : null;
  var txt = p ? [fcm(p.estatura) + ' cm', e != null ? e + ' años' : '', p.sexo === 'M' ? 'Mujer' : 'Hombre'].filter(Boolean).join(' · ') : 'Completa estatura, fecha de nacimiento y sexo';
  return '<button type="button" class="profrow" data-a="open-perfil"><span class="pt"><span class="eyebrow">Perfil</span><span>' + txt + '</span></span><span class="dcta">' + (p ? 'Editar' : 'Completar') + '</span></button>';
}
/* DATOS Y RESPALDO: todo vive en este dispositivo; el respaldo es un archivo JSON con colecciones y fotos */
function rtRespaldo(){ var rt = window.RutinasRuntime; return rt && rt.respaldo ? rt.respaldo : null; }
function respInfo(){ var r = rtRespaldo(); try { return r ? r.info() : null; } catch (e) { return null; } }
function fechaCorta(iso){ var d = !iso ? null : /^\d{4}-\d{2}-\d{2}$/.test(String(iso)) ? parseIso(iso) : new Date(iso); if (!d || isNaN(d.getTime())) return ''; return d.getDate() + ' ' + MONTHS[d.getMonth()] + ' ' + d.getFullYear(); }
function vAvisoRespaldo(){
  var i = respInfo(); if (!i || !i.recomendar || S.dbState !== 'ok') return '';
  var t = i.ultimo ? 'Hay cambios desde el último respaldo (' + esc(fechaCorta(i.ultimo)) + ').' : 'Aún no has guardado ningún respaldo de tus datos.';
  return '<div class="banner pend" role="status"><span>' + t + ' Si borras la app, los datos se pierden.</span><span class="row2"><button type="button" class="btn btn-sm" data-a="open-datos">Guardar respaldo</button></span></div>';
}
function datosRow(){
  var i = respInfo(), txt = !i ? 'No disponible en este navegador' : i.ultimo ? 'Último respaldo: ' + fechaCorta(i.ultimo) + (i.cambios ? ' · hay cambios sin respaldar' : ' · al día') : 'Sin respaldo todavía';
  return '<button type="button" class="profrow" data-a="open-datos"><span class="pt"><span class="eyebrow">Datos y respaldo</span><span>' + esc(txt) + '</span></span><span class="dcta">Abrir</span></button>';
}
function openDatos(){ S.dform = { insp: null, err: '', ocupado: false }; push({ v: 'datos', from: S.tab === 'semana' ? 'Semana' : 'Progreso' }); }
function respaldoCrear(){
  var r = rtRespaldo(), f = S.dform; if (!r || !f || f.ocupado) return;
  f.ocupado = true; f.err = ''; render();
  r.crear().then(function(out){ return r.entregar(out.blob, out.nombre); }).then(function(res){
    if (res === 'cancelado') { showToast('Respaldo cancelado.'); return; }
    return r.hecho().then(function(){ showToast(res === 'compartido' ? 'Respaldo compartido. Guárdalo en Archivos o iCloud.' : 'Respaldo descargado.'); });
  }).catch(function(e){ f.err = 'No se pudo crear el respaldo' + (e && e.message ? ': ' + e.message : '') + '.'; }).then(function(){ f.ocupado = false; if (top() && top().v === 'datos') render(); });
}
function respaldoElegir(file){
  var r = rtRespaldo(), f = S.dform; if (!r || !f || !file) return;
  f.err = ''; f.insp = null; S.confirm = null; f.ocupado = true; render();
  r.inspeccionar(file).then(function(insp){ f.insp = insp; f.nombre = file.name; S.confirm = 'restaurar'; }, function(e){ f.err = e && e.message ? cap(e.message) + '.' : 'No se pudo leer el archivo.'; }).then(function(){ f.ocupado = false; if (top() && top().v === 'datos') render(); });
}
function respaldoRestaurar(){
  var r = rtRespaldo(), f = S.dform; if (!r || !f || !f.insp || f.ocupado) return;
  f.ocupado = true; render();
  r.restaurar(f.insp).then(function(){ showToast('Datos restaurados. La app se vuelve a abrir.'); setTimeout(function(){ location.reload(); }, 600); }, function(e){ f.ocupado = false; S.confirm = null; f.err = 'No se pudo restaurar' + (e && e.message ? ': ' + e.message : '') + '.'; render(); });
}
function resumenDatos(n){
  if (!n) return '';
  var sem = {}; Object.keys(S.ddocs || {}).forEach(function(fecha){ sem[wsOf(fecha)] = 1; }); Object.keys(S.legacy || {}).forEach(function(ws){ sem[ws] = 1; });
  var partes = [(n.dias + n.semanas) ? Object.keys(sem).length + ' semanas con plan' : 'sin semanas', n.diasTipo + ' días tipo', n.ejercicios + ' ejercicios propios', n.pesos + ' pesajes', n.medidas + ' medidas', n.fotos + ' fotos'];
  return partes.join(' · ');
}
function vDatos(t){
  var f = S.dform || {}, i = respInfo(), r = rtRespaldo(), b = pendSlot();
  b += '<p class="hint small">Tus datos viven solo en este teléfono. No hay cuenta ni nube: si borras la app o cambias de teléfono, lo único que los recupera es un archivo de respaldo guardado en Archivos o iCloud.</p>';
  if (!r || !i) b += '<div class="card"><p>El almacenamiento local no está disponible en este navegador.</p></div>';
  else {
    b += '<div class="metacard"><span class="eyebrow">Guardado en este dispositivo</span><span style="font-size:14px;line-height:1.4">' + esc(resumenDatos(i.conteo)) + '</span><small>' + (i.ultimo ? 'Último respaldo: ' + esc(fechaCorta(i.ultimo)) + (i.cambios ? '. Hay cambios desde entonces.' : '. Sin cambios desde entonces.') : 'Todavía no has guardado un respaldo.') + '</small></div>';
    b += '<div class="card"><p><b>Guardar respaldo</b></p><p class="hint small" style="margin-top:4px">Crea un archivo con todo (semanas, días tipo, ejercicios, pesos, medidas, perfil y fotos) y abre la hoja de compartir para guardarlo en Archivos o iCloud. Hazlo cada dos semanas o después de cambios importantes.</p><div class="row2" style="margin-top:10px"><button type="button" class="btn btn-primary" data-a="resp-crear"' + (f.ocupado ? ' disabled' : '') + '>' + (f.ocupado ? 'Preparando…' : 'Guardar respaldo') + '</button></div></div>';
    b += '<div class="card"><p><b>Restaurar desde un archivo</b></p><p class="hint small" style="margin-top:4px">Reemplaza todo lo guardado en este dispositivo por el contenido de un respaldo. Úsalo en un teléfono nuevo o para volver a un estado anterior.</p><div class="row2" style="margin-top:10px"><label class="btn" style="cursor:pointer">Elegir archivo<input type="file" accept="application/json,.json" data-f="resp-file" class="sr"' + (f.ocupado ? ' disabled' : '') + '></label></div>' +
      (f.err ? '<p class="err" role="alert" style="margin-top:8px">' + esc(f.err) + '</p>' : '') +
      (S.confirm === 'restaurar' && f.insp ? '<div class="confirm" style="margin-top:12px"><p><b>' + esc(f.nombre || 'Respaldo') + '</b>' + (f.insp.exportado ? ' · guardado el ' + esc(fechaCorta(f.insp.exportado)) : '') + '</p><p>Contiene ' + esc(f.insp.resumen.dias + f.insp.resumen.semanas) + ' días o semanas, ' + esc(f.insp.resumen.diasTipo) + ' días tipo, ' + esc(f.insp.resumen.ejercicios) + ' ejercicios propios, ' + esc(f.insp.resumen.pesos) + ' pesajes, ' + esc(f.insp.resumen.medidas) + ' medidas y ' + esc(f.insp.resumen.fotos) + ' fotos.</p><p>Se reemplaza todo lo que hay ahora en este dispositivo. No se puede deshacer.</p><div class="row2"><button type="button" class="btn btn-danger-solid" data-a="resp-restaurar-ok"' + (f.ocupado ? ' disabled' : '') + '>Restaurar</button><button type="button" class="btn" data-a="resp-cancel">Cancelar</button></div></div>' : '') + '</div>';
    if (S.legacy && Object.keys(S.legacy).length) b += '<div class="card"><p><b>Formato anterior</b></p><p class="hint small" style="margin-top:4px">Hay semanas guardadas en el formato anterior (una semana por documento).</p><div class="row2" style="margin-top:10px"><button type="button" class="btn btn-sm" data-a="open-mig">Migración</button></div></div>';
    b += '<p class="hint small">Versión de la app: ' + esc(window.RutinasRuntime.version) + '</p>';
  }
  return '<section class="view">' + topbar(t.from || 'Progreso', 'Datos y respaldo') + '<div class="vbody">' + b + '</div></section>';
}
/* CICLO DE DÍAS TIPO CON ROTACIÓN (lógica pura en ciclo.js) */
var CICLO_NOMBRES = ['pierna a', 'torso b', 'pierna b', 'torso a'];
function normNombre(s){ return String(s || '').trim().toLowerCase().replace(/\s+/g, ' '); }
/* configuración vigente: el documento guardado o, si no hay, un orden deducido de los nombres de los días tipo */
function cicloCfg(){
  var doc = S.cicloDocs.principal, c;
  if (doc) { c = window.Ciclo.normalizar(doc); c.orden = c.orden.filter(function(id){ return !!S.tipos[id]; }); }
  else { var porNombre = {}; tiposList().forEach(function(t){ var k = normNombre(t.name); if (!porNombre[k]) porNombre[k] = t.id; }); c = window.Ciclo.normalizar({ orden: CICLO_NOMBRES.map(function(k){ return porNombre[k]; }).filter(Boolean) }); }
  c.equipo = window.Progresion.normalizarEquipo(c.equipo);
  return c;
}
function cicloEditar(fn){ var c = cicloCfg(); fn(c); S.cicloDocs.principal = c; markKey('k:principal'); render(); }
function tipoNombre(id){ var t = S.tipos[id]; return t ? (t.name || 'Sin nombre') : 'Día tipo eliminado'; }
function diaHecho(d){ return !!d && !d.rest && d.items.some(hasLog); }
/* historial de días con su día tipo y si se hicieron, solo de semanas anteriores a la indicada */
function cicloHistorial(antesDe){
  var out = [];
  Object.keys(S.weeks).forEach(function(ws){ if (ws >= antesDe) return; S.weeks[ws].days.forEach(function(d, i){ if (d.tipo || diaHecho(d)) out.push({ fecha: fechaDe(ws, i), tipo: d.tipo || null, hecho: diaHecho(d) }); }); });
  return out;
}
function cicloPartida(ws){ return window.Ciclo.partida(cicloCfg().orden, cicloHistorial(ws)); }
function cicloResumen(ws){
  var c = cicloCfg(), p = cicloPartida(ws);
  if (!c.orden.length) return 'Define el orden en Días tipo';
  var arranca = tipoNombre(c.orden[p.idx]);
  return p.desde ? 'Sigue en ' + arranca + ' (último hecho: ' + tipoNombre(p.desde.tipo) + ', ' + fechaDiaCorta(p.desde.fecha) + ')' : 'Empieza en ' + arranca;
}
function fechaDiaCorta(f){ var d = parseIso(f); return DSHORT[wd(f)].toLowerCase() + ' ' + d.getDate() + ' ' + MONTHS[d.getMonth()]; }
function cicloElegible(ws, i){ var d = S.weeks[ws] && S.weeks[ws].days[i]; return !(d && diaHecho(d)) && !(dayPast(ws, i) && !isToday(ws, i)); }
/* días para N sesiones: los por defecto; al reorganizar, N cuenta los ya hechos y solo se eligen días de hoy en adelante */
function cicloDiasPara(ws, modo, n){
  var c = cicloCfg(), base = window.Ciclo.diasPara(c, n);
  if (modo !== 'reorg') return base;
  var w = S.weeks[ws], hechos = w ? w.days.filter(diaHecho).length : 0, faltan = Math.max(0, n - hechos);
  var sel = base.filter(function(i){ return cicloElegible(ws, i); }).slice(0, faltan);
  for (var i = 0; i < 7 && sel.length < faltan; i++) if (sel.indexOf(i) < 0 && cicloElegible(ws, i)) sel.push(i);
  return sel.sort(function(a, b){ return a - b; });
}
/* DESCARGA: semanas seguidas de progresión y recomendación */
function sesionesDe(w){ return w ? w.days.filter(diaHecho).length : 0; }
function esDescarga(w){ return !!w && w.days.some(function(d){ return d.descarga === true; }); }
/* semanas que cuentan para la racha antes de la semana objetivo: las terminadas, y la que está en curso solo si ya tiene
   las sesiones mínimas (si no, todavía no se sabe) */
function semanasParaDescarga(objetivo){
  var cur = curMonday(), out = [];
  Object.keys(S.weeks).forEach(function(ws){
    if (ws >= objetivo) return;
    var w = S.weeks[ws], n = sesionesDe(w), dsc = esDescarga(w);
    if (ws === cur && n < 3 && !dsc) return;
    out.push({ ws: ws, sesiones: n, descarga: dsc });
  });
  return out;
}
function descargaInfo(objetivo){ var c = cicloCfg(); return window.Ciclo.descargaRecomendada(semanasParaDescarga(objetivo), c.descargaCada, 3); }
function vAvisoDescarga(){
  if (S.dbState !== 'ok' || cicloCfg().orden.length < 2) return '';
  var cur = curMonday(), next = shiftWeek(cur, 1);
  if (S.ws !== cur && S.ws !== next) return '';
  if (esDescarga(S.weeks[cur]) || esDescarga(S.weeks[next]) || S.descargaIgnorada === next) return '';
  var info = descargaInfo(next); if (!info.recomendar) return '';
  var fd = Math.round(cicloCfg().factorDescarga * 100);
  return '<div class="banner pend" role="status"><span>Llevas ' + info.racha + ' semanas seguidas de progresión. Toca una semana de descarga: mismas sesiones, series al ' + fd + '% y pesos sin subir.</span><span class="row2"><button type="button" class="btn btn-sm" data-a="descarga-armar">Armar la próxima en descarga</button><button type="button" class="linkbtn sm" data-a="descarga-despues">Después</button></span></div>';
}
function openCiclo(modo, ws, descarga){
  var c = cicloCfg(); if (c.orden.length < 2) { showToast('El ciclo necesita al menos dos días tipo. Defínelo en Días tipo.'); return; }
  ws = ws || S.ws;
  if (weekBlocked(ws)) { showToast('Esta semana tiene datos que la app no reconoce; no se puede reorganizar.'); return; }
  var n = S.cicloN || 4, dias = cicloDiasPara(ws, modo, n);
  push({ v: 'ciclo', ws: ws, modo: modo, n: n, dias: dias, from: 'Semana', descarga: descarga === undefined ? descargaInfo(ws).recomendar && !esDescarga(S.weeks[ws]) : !!descarga });
}
/* vista previa: qué recibe cada día según el modo */
function cicloPlan(t){
  var c = cicloCfg(), p = cicloPartida(t.ws);
  if (t.modo !== 'reorg') return window.Ciclo.armar(c.orden, p.idx, t.dias);
  var w = S.weeks[t.ws] || emptyWeek(t.ws);
  var dias = w.days.map(function(d, i){ return { i: i, tipo: d.tipo || null, hecho: diaHecho(d), pasado: dayPast(t.ws, i) && !isToday(t.ws, i), contenido: hasDayContent(d) && !d.rest }; });
  return window.Ciclo.reorganizar(c.orden, p.idx, dias, t.dias);
}
function vCiclo(t){
  var c = cicloCfg(), plan = cicloPlan(t), hechos = t.modo === 'reorg' && S.weeks[t.ws] ? S.weeks[t.ws].days.filter(diaHecho).length : 0, nSel = t.dias.length + hechos, p = cicloPartida(t.modo === 'reorg' ? shiftWeek(t.ws, 1) : t.ws);
  var b = '<div><span class="eyebrow">' + esc(weekLabel(t.ws)) + '</span><h2 class="bigtitle">' + (t.modo === 'reorg' ? '¿Cuántos días caben esta semana?' : '¿Cuántos días entrenas esta semana?') + '</h2></div>';
  b += '<div class="seg s4" role="group" aria-label="Sesiones">' + [2, 3, 4, 5].map(function(n){ return '<button type="button" data-a="ciclo-n" data-n="' + n + '" aria-pressed="' + (nSel === n) + '">' + n + ' días</button>'; }).join('') + '</div>';
  b += '<p class="hint small">' + esc(p.desde ? 'El ciclo sigue en ' + tipoNombre(c.orden[p.idx]) + ': el último día hecho fue ' + tipoNombre(p.desde.tipo) + ' el ' + fechaDiaCorta(p.desde.fecha) + '.' : 'El ciclo empieza en ' + tipoNombre(c.orden[0]) + '.') + ' Toca un día para quitarlo o agregarlo.</p>';
  b += '<div class="daylist">' + plan.dias.map(function(x){
    var i = x.i, d = S.weeks[t.ws] && S.weeks[t.ws].days[i], eleg = t.modo !== 'reorg' || cicloElegible(t.ws, i), hecho = d && diaHecho(d);
    var sel = t.dias.indexOf(i) >= 0, numHtml = '<span class="dnum"><small>' + DSHORT[i] + '</small><b>' + dayDate(t.ws, i).getDate() + '</b></span>', txt, pill = '';
    if (x.accion === 'mantener' && hecho) { txt = tipoNombre(x.tipo); pill = '<span class="pill good">Hecho</span>'; }
    else if (x.accion === 'tipo' || x.accion === 'mantener') { txt = tipoNombre(x.tipo); if (plan.reemplazados && plan.reemplazados.indexOf(i) >= 0) pill = '<span class="pill">Reemplaza el plan</span>'; }
    else { txt = 'Descanso'; if (plan.reemplazados && plan.reemplazados.indexOf(i) >= 0) pill = '<span class="pill">Quita el plan</span>'; }
    return '<button type="button" class="daycard' + (x.accion === 'descanso' ? ' muted' : '') + '" data-a="ciclo-dia" data-i="' + i + '" aria-pressed="' + sel + '"' + (eleg ? '' : ' disabled') + '>' + numHtml + '<span class="dmain"><span class="dname"><span class="nm">' + esc(txt) + '</span>' + pill + '</span></span>' + (eleg ? '<span class="chev">' + ic(sel ? 'check' : 'plus', 18, 2) + '</span>' : '') + '</button>';
  }).join('') + '</div>';
  var fd = Math.round(c.factorDescarga * 100), di = descargaInfo(t.ws);
  b += '<label class="check" style="margin-top:4px;align-items:flex-start"><input type="checkbox" data-a="ciclo-descarga"' + (t.descarga ? ' checked' : '') + '><span><b>Semana de descarga</b><br><small class="hint">Mismas sesiones, series al ' + fd + '% y pesos sin subir. ' + (di.recomendar ? 'Toca: llevas ' + di.racha + ' semanas seguidas.' : 'Racha actual: ' + di.racha + ' de ' + c.descargaCada + ' semanas.') + '</small></span></label>';
  var aviso = plan.reemplazados && plan.reemplazados.length ? '<p class="hint small">Se reemplaza el plan de ' + plan.reemplazados.map(function(i){ return DAYS[i].toLowerCase(); }).join(', ') + '. Los días con series anotadas no se tocan.</p>' : '';
  var foot = '<div class="vfoot"><div class="footinfo"><b>' + nSel + (nSel === 1 ? ' sesión' : ' sesiones') + (hechos ? ' (' + hechos + (hechos === 1 ? ' hecha)' : ' hechas)') : '') + '</b><small>' + esc(c.orden.map(tipoNombre).join(' → ')) + '</small></div><button type="button" class="btn btn-primary" data-a="ciclo-ok"' + (t.dias.length ? '' : ' disabled') + '>' + (t.modo === 'reorg' ? 'Reorganizar' : 'Armar semana') + '</button></div>';
  return '<section class="view">' + topbar(t.from || 'Semana', viewTitle(t)) + '<div class="vbody">' + b + aviso + '</div>' + foot + '</section>';
}
function aplicarPlanCiclo(ws, plan, modo, descarga){
  if (weekBlocked(ws)) return false;
  if (!S.weeks[ws]) { S.weeks[ws] = emptyWeek(ws); S.weeks[ws]._local = true; }
  var factor = cicloCfg().factorDescarga;
  plan.dias.forEach(function(x){
    var ctx = { kind: 'day', ws: ws, i: x.i }, day = getCont(ctx); if (!day) return;
    /* en descarga, los días planeados sin hacer también se rearman para aplicarles la reducción */
    if (x.accion === 'mantener' && !(descarga && x.tipo && !diaHecho(day))) return;
    if (x.accion === 'tipo' || x.accion === 'mantener') {
      loadTipo(ctx, x.tipo);
      if (descarga) { day.descarga = true; day.items.forEach(function(it){ if (isCardio(it)) return; var sg = window.Progresion.leerSug(it.sug); if (sg) it.kg = fmtKg(sg.de); delete it.sug; var n = setsN(it); if (n) it.sets = String(window.Ciclo.seriesDescarga(n, factor)); }); }
      else delete day.descarga;
      markDirty(ctx);
      return;
    }
    if (hasDayContent(day) && !day.rest) { day.rest = true; day.items = []; day.tipo = null; day.name = ''; markDirty(ctx); }
    else if (!day.rest && modo !== 'reorg') { day.rest = true; markDirty(ctx); }
  });
  return true;
}
function aplicarCiclo(t){
  if (!aplicarPlanCiclo(t.ws, cicloPlan(t), t.modo, !!t.descarga)) return;
  S.cicloN = t.dias.length; S.ws = t.ws;
  pop();
  showToast(t.descarga ? 'Semana de descarga armada: series reducidas y pesos sin subir.' : t.modo === 'reorg' ? 'Semana reorganizada con el ciclo.' : 'Semana armada con el ciclo. Ajusta cada día si hace falta.');
}
/* semana nueva automática: mismos días de la semana que la anterior, con el ciclo siguiendo donde quedó */
function autoFillCiclo(src, ws){
  var c = cicloCfg(); if (c.orden.length < 2) return false;
  var dias = S.weeks[src].days.map(function(d, i){ return !d.rest && d.items.some(function(it){ return !isCardio(it); }) ? i : -1; }).filter(function(i){ return i >= 0; });
  if (!dias.length) return false;
  var p = cicloPartida(ws), plan = window.Ciclo.armar(c.orden, p.idx, dias);
  if (!aplicarPlanCiclo(ws, plan, 'armar')) return false;
  showToast('Semana armada con el ciclo: sigue en ' + tipoNombre(c.orden[p.idx]) + '. Toca Reorganizar si cambia el número de días.', function(){ clearWeekLocal(ws); });
  return true;
}
function cicloCard(){
  var c = cicloCfg();
  var txt = c.orden.length ? c.orden.map(tipoNombre).join(' → ') : 'Sin definir: elige el orden de tus días tipo';
  return '<button type="button" class="profrow" data-a="open-ciclocfg"><span class="pt"><span class="eyebrow">Ciclo</span><span>' + esc(txt) + '</span></span><span class="dcta">Editar</span></button>';
}
/* CORRECCIÓN DE CARGAS: cuando un peso estaba mal medido (la barra pesa 15 y no 20), se aplica la diferencia a todo lo
   que usa ese equipo: pesos planeados, series anotadas y propuestas, en días tipo y en todas las semanas */
var CORR_MODOS = { barra: ['barra'], barraez: ['barraez'], mancuernas: ['dos', 'una'], polea: ['polea'] };
var CORR_NOMBRES = { barra: 'Barra', barraez: 'Barra EZ', mancuernas: 'Mancuernas', polea: 'Polea' };
function corrAplica(it, modo){ if (isCardio(it)) return false; var m = modalidadDe(exById(it.ex)); return (CORR_MODOS[modo] || []).indexOf(m) >= 0; }
/* cambio a aplicar a un ítem: suma fija (delta) o ajuste a los discos reales */
function corrFn(modo, delta){
  var eq = cicloCfg().equipo;
  if (delta === 'discos') return function(it){ return window.Progresion.ajustarADiscos(it, eq, modalidadDe(exById(it.ex)), fmtKg); };
  return function(it){ return window.Progresion.corregirItem(it, delta, fmtKg); };
}
/* cuenta qué cambiaría sin tocar nada (trabaja sobre copias) */
function corrResumen(modo, delta){
  var r = { tipos: 0, exTipos: 0, dias: 0, exDias: 0, series: 0, valores: 0 }, f = corrFn(modo, delta);
  var prueba = function(it){
    var c = JSON.parse(JSON.stringify(it)), n = f(c); if (!n) return false;
    r.valores += n; var a = String(it.hk || '').split('|'), b = String(c.hk || '').split('|');
    a.forEach(function(v, i){ if (String(v) !== String(b[i])) r.series++; });
    return true;
  };
  Object.keys(S.tipos).forEach(function(id){ var n = S.tipos[id].items.filter(function(it){ return corrAplica(it, modo) && prueba(it); }).length; if (n) { r.tipos++; r.exTipos += n; } });
  Object.keys(S.weeks).forEach(function(ws){ if (weekBlocked(ws)) return; S.weeks[ws].days.forEach(function(d){ var n = d.items.filter(function(it){ return corrAplica(it, modo) && prueba(it); }).length; if (n) { r.dias++; r.exDias += n; } }); });
  return r;
}
function corrAplicar(modo, delta){
  var n = 0, r = corrResumen(modo, delta), f = corrFn(modo, delta);
  Object.keys(S.tipos).forEach(function(id){ var t = S.tipos[id], c = 0; t.items.forEach(function(it){ if (corrAplica(it, modo)) c += f(it); }); if (c) { n += c; markKey('t:' + id); } });
  Object.keys(S.weeks).forEach(function(ws){ if (weekBlocked(ws)) return; S.weeks[ws].days.forEach(function(d, i){ var c = 0; d.items.forEach(function(it){ if (corrAplica(it, modo)) c += f(it); }); if (c) { n += c; markDirty({ kind: 'day', ws: ws, i: i }); } }); });
  var cfg = cicloCfg(); cfg.correcciones = (cfg.correcciones || []).concat([{ fecha: iso(new Date()), modo: modo, delta: delta, dias: r.dias, tipos: r.tipos, valores: n }]);
  S.cicloDocs.principal = cfg; markKey('k:principal');
  return n;
}
function corrTitulo(modo, delta){ return CORR_NOMBRES[modo] + (delta === 'discos' ? ', ajuste a los discos reales' : ', ' + (delta > 0 ? '+' : '') + fmtKg(delta) + ' kg'); }
function vCorreccion(c){
  var f = S.corr || { modo: 'barra', delta: (c.correcciones || []).length ? '' : '-5' }, b = '<div class="sechead"><h2>Corrección de cargas</h2></div>';
  b += '<p class="hint small">Si un peso estaba mal medido (la barra pesa 15 kg y no 20), aplica la diferencia de una vez a todo lo que usa ese equipo: pesos planeados, series anotadas y propuestas, en los días tipo y en todas las semanas. No se puede deshacer: guarda un respaldo antes.</p>';
  b += '<div class="card" style="display:flex;flex-direction:column;gap:12px"><div class="field"><label for="corr-modo">Equipo</label><select id="corr-modo" class="inp" data-f="corr" data-p="modo">' + Object.keys(CORR_NOMBRES).map(function(k){ return '<option value="' + k + '"' + (f.modo === k ? ' selected' : '') + '>' + CORR_NOMBRES[k] + '</option>'; }).join('') + '</select></div>' +
    '<div class="field"><label for="corr-delta">Diferencia en kg (negativa para restar)</label><input id="corr-delta" class="inp" data-f="corr" data-p="delta" value="' + esc(f.delta) + '" inputmode="text" autocomplete="off" placeholder="-5"></div>';
  if (S.confirm === 'corregir' && f.resumen) {
    var r = f.resumen, d = f.discos ? 'discos' : num(f.delta);
    b += '<div class="confirm"><p><b>' + esc(corrTitulo(f.modo, d)) + '</b></p><p>Cambia ' + r.exTipos + (r.exTipos === 1 ? ' ejercicio' : ' ejercicios') + ' en ' + r.tipos + (r.tipos === 1 ? ' día tipo' : ' días tipo') + ', y ' + r.exDias + (r.exDias === 1 ? ' ejercicio' : ' ejercicios') + ' en ' + r.dias + (r.dias === 1 ? ' día' : ' días') + ' con ' + r.series + ' series anotadas con peso propio.</p><p>No se puede deshacer.</p><div class="row2"><button type="button" class="btn btn-danger-solid" data-a="corr-aplicar">Aplicar</button><button type="button" class="btn" data-a="corr-cancel">Cancelar</button></div></div>';
  } else b += '<div class="row2"><button type="button" class="btn" data-a="corr-revisar">Revisar qué cambiaría</button></div>';
  if (S.confirm !== 'corregir' || !f.discos) b += '<hr class="sep"><p class="hint small">Si anotaste pesos redondos que no se arman con tus discos (50 cuando lo real es 48,6), esto lleva cada peso de barra o barra EZ a la carga real más cercana, con el equipo de arriba.</p><div class="row2"><button type="button" class="btn" data-a="corr-discos">Ajustar a los discos reales</button></div>';
  var hist = (c.correcciones || []).slice(-5).reverse();
  if (hist.length) b += '<p class="hint small">Aplicadas: ' + esc(hist.map(function(h){ return fechaCorta(h.fecha) + ' ' + (CORR_NOMBRES[h.modo] || h.modo) + ' ' + (h.delta === 'discos' ? 'ajuste a discos' : (h.delta > 0 ? '+' : '') + fmtKg(h.delta) + ' kg') + ' (' + h.valores + ' valores)'; }).join(' · ')) + '</p>';
  return b + '</div>';
}
function vCicloCfg(){
  var c = cicloCfg(), fuera = tiposList().filter(function(t){ return c.orden.indexOf(t.id) < 0; });
  var b = '<p class="hint small">El ciclo es el orden en que se encadenan tus días tipo. No se reinicia cada semana: la semana nueva sigue donde quedó el último día que hiciste, así lo que se cae nunca se salta.</p>';
  b += '<div class="sechead"><h2>Orden</h2><span>' + c.orden.length + (c.orden.length === 1 ? ' día tipo' : ' días tipo') + '</span></div>';
  b += c.orden.length ? '<div class="exlist">' + c.orden.map(function(id, i){
    return '<div class="excard"><div class="exhead"><span class="gtag">' + (i + 1) + '</span><span class="exname"><b>' + esc(tipoNombre(id)) + '</b></span>' +
      '<button type="button" class="iconbtn" data-a="cc-mover" data-i="' + i + '" data-dir="-1" aria-label="Subir"' + (i === 0 ? ' disabled' : '') + '>' + ic('up', 18, 2) + '</button>' +
      '<button type="button" class="iconbtn" data-a="cc-mover" data-i="' + i + '" data-dir="1" aria-label="Bajar"' + (i === c.orden.length - 1 ? ' disabled' : '') + '>' + ic('down', 18, 2) + '</button>' +
      '<button type="button" class="iconbtn" data-a="cc-quitar" data-i="' + i + '" aria-label="Quitar del ciclo">' + ic('x', 18, 2) + '</button></div></div>';
  }).join('') + '</div>' : '<div class="card"><p class="hint">Todavía no hay días tipo en el ciclo.</p></div>';
  if (fuera.length) b += '<div class="sechead"><h2>Agregar al ciclo</h2></div><div class="optlist">' + fuera.map(function(t){ return '<button type="button" class="option" data-a="cc-agregar" data-id="' + esc(t.id) + '">' + ic('plus', 22) + '<span class="ot"><b>' + esc(t.name || 'Sin nombre') + '</b><small>' + esc(tipoMeta(t, dayStats(t))) + '</small></span></button>'; }).join('') + '</div>';
  b += '<div class="sechead"><h2>Días por defecto</h2><span>Se pueden cambiar en cada semana</span></div><div class="card" style="display:flex;flex-direction:column;gap:12px">' + [2, 3, 4, 5].map(function(n){
    var sel = c.dias[n];
    return '<div class="field"><span class="lbl">' + n + ' sesiones</span><div class="chips wrap" role="group">' + DSHORT.map(function(ds, i){ return '<button type="button" class="chip" data-a="cc-dia" data-n="' + n + '" data-i="' + i + '" aria-pressed="' + (sel.indexOf(i) >= 0) + '">' + ds + '</button>'; }).join('') + '</div>' + (sel.length !== n ? '<p class="err">Marca ' + n + ' días (hay ' + sel.length + ').</p>' : '') + '</div>';
  }).join('') + '</div>';
  var e = c.equipo;
  function campo(p, lbl, val, modo, ph){ return '<div class="field"><label for="eq-' + p + '">' + lbl + '</label><input id="eq-' + p + '" class="inp" data-f="equipo" data-p="' + p + '" value="' + esc(val) + '" inputmode="' + (modo || 'decimal') + '" placeholder="' + esc(ph || '') + '" autocomplete="off"></div>'; }
  b += '<div class="sechead"><h2>Equipo y progresión</h2></div><p class="hint small">Cuando en la última sesión llegas al tope del rango en todas las series, el día nuevo trae la siguiente carga que se puede armar con este equipo.</p>' +
    '<div class="card" style="display:flex;flex-direction:column;gap:12px">' +
    campo('barra', 'Barra (kg)', fmtKg(e.barra)) + campo('barraEz', 'Barra EZ (kg)', fmtKg(e.barraEz)) +
    campo('discos', 'Discos disponibles (kg, uno de cada par)', e.discos.map(fmtKg).join(', '), 'text', '5, 6.8, 10, 15.9') +
    '<p class="hint small" data-live="cargas">Cargas posibles con barra: ' + esc(window.Progresion.cargasBarra(e.barra, e.discos).map(fmtKg).join(', ')) + ' kg.</p>' +
    campo('pasoMancuerna', 'Paso entre mancuernas (kg)', fmtKg(e.pasoMancuerna)) + campo('mancuernaMax', 'Mancuerna más pesada (kg)', fmtKg(e.mancuernaMax)) + campo('pasoPolea', 'Paso de la polea (kg)', fmtKg(e.pasoPolea)) + '</div>';
  b += vCorreccion(c);
  var di = descargaInfo(shiftWeek(curMonday(), 1));
  b += '<div class="sechead"><h2>Descarga</h2><span>Racha: ' + di.racha + (di.racha === 1 ? ' semana' : ' semanas') + '</span></div><p class="hint small">Cada tantas semanas seguidas con 3 o más sesiones, la app propone una semana ligera: mismas sesiones, menos series y pesos sin subir. Una semana floja o una descarga reinician la cuenta.</p>' +
    '<div class="card" style="display:flex;flex-direction:column;gap:12px">' + campo('descargaCada', 'Cada cuántas semanas', String(c.descargaCada), 'numeric') + campo('factorDescarga', 'Series en descarga (% de las planeadas)', String(Math.round(c.factorDescarga * 100)), 'numeric') + '</div>';
  return '<section class="view">' + topbar('Días tipo', 'Ciclo') + '<div class="vbody">' + b + '</div></section>';
}
function vProgreso(){
  var h = '<div class="pagehead"><div><h1>Progreso</h1><p>Peso lunes, miércoles y viernes. Medidas cada 2 a 4 semanas.</p></div></div>';
  if (S.local) h += '<p class="localnote">Tus datos se guardan solo en este navegador.</p>';
  h += vAvisoRespaldo() + vAislados() + offBanner() + pendSlot();
  if (S.dbState === 'loading' || !(S.loaded.p && S.loaded.m && S.loaded.f)) return h + '<div class="card loading" role="status">Cargando…</div>';
  return h + '<div class="proggrid"><div class="pcol">' + cardPeso() + cardFuerza() + '</div><div class="pcol">' + cardComp() + cardInd() + cardMed() + perfilRow() + datosRow() + '</div></div>';
}

/* PROGRESO: registrar peso */
function openPeso(d){
  var p = S.pesos[d];
  S.pform = { d: d, kg: p ? f1(p.kg) : '', err: '' };
  push({ v: 'peso', from: S.stack.length ? null : (S.tab === 'semana' ? 'Semana' : 'Progreso') });
  if (!p) { var el = document.getElementById('p-kg'); if (el) el.focus({ preventScroll: true }); }
}
function pickPeso(d, focus){
  if (!S.pform || !isoOk(d)) return;
  var p = S.pesos[d], had = S.pesos[S.pform.d];
  S.pform.d = d; S.pform.kg = p ? f1(p.kg) : (had ? '' : S.pform.kg); S.pform.err = '';
  render(focus ? { focus: focus } : { focus: '#p-kg' });
}
function vPeso(t){
  var f = S.pform; if (!f) return '';
  var ex = S.pesos[f.d], ws = iso(monday(parseIso(f.d))), g = pesoWeeks(), pw = shiftWeek(ws, -1);
  var b = pendSlot() + '<div class="field"><label for="p-d">Fecha</label><input id="p-d" type="date" class="inp" data-f="pdate" value="' + esc(f.d) + '" max="' + todayIso() + '"></div>' +
    (S.aislados['pesos/' + f.d] ? '<p class="hint small">Hay un pesaje guardado para este día que la app no reconoce. Si guardas, lo reemplazas.</p>' : '') +
    '<div class="bigin"><label for="p-kg">Peso<span class="sr"> en kilos</span></label><div class="bigrow"><input id="p-kg" class="inp big" data-f="pkg" value="' + esc(f.kg) + '" inputmode="decimal" autocomplete="off" placeholder="0,0"' + (f.err ? ' aria-invalid="true" aria-describedby="p-err"' : '') + '><span aria-hidden="true">kg</span></div>' +
    (f.err ? '<p class="err" id="p-err" role="alert">' + esc(f.err) + '</p>' : '') +
    '<p class="hint small">En ayunas, después de ir al baño y con poca ropa. Siempre en la misma báscula.</p></div>' +
    '<div class="subsec"><h2 class="h3cap">' + (ws === curMonday() ? 'Esta semana' : 'Semana del ' + weekLabel(ws)) + '</h2><div class="chipsrow">' + weekChips(ws, 'pick', f.d) + '</div>' +
    (g[pw] ? '<p class="subnote">Semana anterior: promedio ' + f1(avg(g[pw])) + ' kg (' + g[pw].map(function(p){ return f1(p.kg); }).join(' · ') + ').</p>' : '') + '</div>' +
    (ex ? '<p class="hint small">Los pesajes registrados se conservan: puedes corregir el valor, no borrarlo.</p>' : '');
  var foot = '<footer class="vfoot"><button type="button" class="btn btn-primary wide" data-a="peso-save">' + (ex ? 'Guardar cambios' : 'Guardar peso') + '</button></footer>';
  return '<section class="view">' + topbar(t.from || 'Progreso', 'Registrar peso') + '<div class="vbody">' + b + '</div>' + foot + '</section>';
}
function savePeso(){
  var f = S.pform; if (!f) return;
  var kg = pnum(f.kg);
  if (!isoOk(f.d) || f.d > todayIso()) { f.err = 'Elige una fecha de hoy o anterior.'; render({ focus: '#p-d' }); return; }
  if (kg == null || kg < 25 || kg > 350) { f.err = 'Escribe tu peso en kilos, por ejemplo 73,4.'; render({ focus: '#p-kg', select: true }); return; }
  kg = Math.round(kg * 10) / 10;
  var d = f.d;
  S.pesos[d] = { fecha: d, kg: kg }; markKey('p:' + d);
  S.pform = null; pop();
  showToast('Anotaste ' + f1(kg) + ' kg del ' + dLong(d) + '; se guarda solo.');
}

/* PROGRESO: registrar medidas */
function loadMform(d){
  var m = S.medidas[d], o = S.mform, keep = !!o && !S.medidas[o.d];
  function v(k){ return m ? (m[k] ? fcm(m[k]) : '') : (keep ? o[k] || '' : ''); }
  S.mform = { d: d, cuello: v('cuello'), pecho: v('pecho'), cintura: v('cintura'), cadera: v('cadera'), err: '', errK: '' };
}
function openMedidas(d){ S.mform = null; loadMform(d); push({ v: 'medidas' }); }
function mPreview(){
  var f = S.mform, p = perfil(); if (!f) return '';
  if (!p) return '<h2 class="h3cap">Con estas medidas</h2><p>Completa tu perfil (estatura y sexo) para ver el cálculo.</p>';
  var cu = pnum(f.cuello), ci = pnum(f.cintura), ca = pnum(f.cadera);
  var bf = navyBf(p.sexo, p.estatura, cu, ci, ca), r = ci ? ci / p.estatura : null, w = pesoCerca(f.d);
  var s = '<h2 class="h3cap">Con estas medidas</h2><div class="pk"><div><span>% grasa estimado</span><b>' + (bf != null ? f1(bf) + ' %' : '<span class="na">Sin dato</span>') + '</b></div><div><span>Cintura / estatura</span><b>' + (r ? f2(r) : '<span class="na">Sin dato</span>') + '</b></div></div>';
  if (bf != null && w) s += '<p>Con tu peso ' + (w.prom ? 'promedio ' : '') + 'de ' + f1(w.kg) + ' kg: ' + f1(w.kg * bf / 100) + ' kg de grasa y ' + f1(w.kg - w.kg * bf / 100) + ' kg de masa magra.</p>';
  else if (bf == null) s += '<p>Escribe cuello y cintura' + (p.sexo === 'M' ? ' y cadera' : '') + ' para calcular el % de grasa.</p>';
  return s;
}
function vMedidas(){
  var f = S.mform; if (!f) return '';
  var p = perfil(), mujer = p && p.sexo === 'M', ex = S.medidas[f.d];
  var before = medList().filter(function(m){ return m.fecha < f.d; }), lastPrev = before[before.length - 1];
  function row(k, l, hint){
    var id = 'm-' + k;
    return '<div class="mrow"><div class="mrl"><label for="' + id + '">' + l + '</label><small id="' + id + '-h">' + hint + '</small></div><div class="mri"><input id="' + id + '" class="inp mnum" data-f="mval" data-p="' + k + '" value="' + esc(f[k]) + '" inputmode="decimal" autocomplete="off" aria-describedby="' + id + '-h"' + (f.errK === k ? ' aria-invalid="true"' : '') + '><span aria-hidden="true">cm</span></div></div>';
  }
  var b = pendSlot() + '<p class="hint small">Cada 2 a 4 semanas, el mismo día que te pesas. Cinta horizontal, pegada a la piel sin apretar.' + (lastPrev ? ' Medición anterior: ' + dShort(lastPrev.fecha) + '.' : '') + '</p>' +
    '<div class="field"><label for="m-d">Fecha</label><input id="m-d" type="date" class="inp" data-f="mdate" value="' + esc(f.d) + '" max="' + todayIso() + '"></div>' +
    (S.aislados['medidas/' + f.d] ? '<p class="hint small">Hay medidas guardadas para este día que la app no reconoce. Si guardas, las reemplazas.</p>' : '') +
    '<div class="mcard">' +
      row('cuello', 'Cuello', mujer ? 'Justo debajo de la laringe.' : 'Justo debajo de la manzana de Adán.') +
      row('pecho', 'Pecho', 'A la altura de los pezones, brazos relajados. No entra en la fórmula; sirve para ver el torso.') +
      row('cintura', 'Cintura', mujer ? 'En la parte más angosta del abdomen, relajado, después de soltar el aire.' : 'A la altura del ombligo, relajado, después de soltar el aire.') +
      (mujer ? row('cadera', 'Cadera', 'En la parte más ancha de los glúteos, con los pies juntos.') : '') +
    '</div>' +
    (f.err ? '<p class="err" role="alert">' + esc(f.err) + '</p>' : '') +
    '<div class="preview" data-live="mprev">' + mPreview() + '</div>' +
    (ex ? '<p class="hint small">Las medidas registradas se conservan: puedes corregir los valores, no borrarlos.</p>' : '');
  var foot = '<footer class="vfoot"><button type="button" class="btn btn-primary wide" data-a="med-save">' + (ex ? 'Guardar cambios' : 'Guardar medidas') + '</button></footer>';
  return '<section class="view">' + topbar('Progreso', 'Medidas') + '<div class="vbody">' + b + '</div>' + foot + '</section>';
}
function saveMedidas(){
  var f = S.mform; if (!f) return;
  var p = perfil(), mujer = !!p && p.sexo === 'M';
  var v = { cuello: pnum(f.cuello), pecho: pnum(f.pecho), cintura: pnum(f.cintura), cadera: pnum(f.cadera) };
  function bad(k, l, a, z, req){
    var raw = String(f[k] || '').trim();
    if (!raw && !req) { v[k] = null; return false; }
    if (v[k] == null || v[k] < a || v[k] > z) { f.err = 'Revisa ' + l + ': escribe un número entre ' + a + ' y ' + z + ' cm.'; f.errK = k; render({ focus: '#m-' + k, select: true }); return true; }
    return false;
  }
  if (!isoOk(f.d) || f.d > todayIso()) { f.err = 'Elige una fecha de hoy o anterior.'; f.errK = ''; render({ focus: '#m-d' }); return; }
  if (bad('cuello', 'el cuello', 20, 70, true) || bad('pecho', 'el pecho', 50, 200, false) || bad('cintura', 'la cintura', 40, 200, true) || bad('cadera', 'la cadera', 50, 200, mujer)) return;
  var d = f.d;
  S.medidas[d] = { fecha: d, cuello: v.cuello, pecho: v.pecho, cintura: v.cintura, cadera: v.cadera }; markKey('m:' + d);
  S.mform = null; pop();
  showToast('Anotaste las medidas del ' + dShort(d) + '; se guardan solas.');
}

/* PROGRESO: perfil */
function openPerfil(){
  var p = S.perfilDocs.principal || {};
  S.fform = { estatura: p.estatura ? fcm(p.estatura) : '', nacimiento: p.nacimiento || '', sexo: p.sexo === 'M' ? 'M' : 'H', err: '', errK: '' };
  push({ v: 'perfil' });
}
function perfilMeta(){ var e = pnum(S.fform && S.fform.estatura); return e && e >= 100 && e <= 250 ? 'Menos de ' + fcm(e / 2) + ' cm' : 'Escribe tu estatura'; }
function updPerfilLive(){
  var m = document.querySelector('[data-live="meta"]'), a = document.querySelector('[data-live="edad"]');
  if (m) m.textContent = perfilMeta();
  if (a) { var e = edad(S.fform.nacimiento); a.textContent = e != null ? e + ' años' : ''; }
}
function vPerfil(){
  var f = S.fform; if (!f) return '';
  var e = edad(f.nacimiento);
  var p0 = S.perfilDocs.principal;
  var b = pendSlot() + '<p class="hint small">Se usa para calcular el IMC, la relación cintura / estatura y el % de grasa.</p>' +
    (p0 && p0._nac0 ? '<p class="hint small">La fecha de nacimiento guardada («' + esc(short(p0._nac0)) + '») no existe. Se conserva sin cambios hasta que escribas la correcta.</p>' : '') +
    '<div class="field"><label for="f-est">Estatura</label><div class="inrow"><input id="f-est" class="inp est" data-f="fval" data-p="estatura" value="' + esc(f.estatura) + '" inputmode="decimal" autocomplete="off"' + (f.errK === 'estatura' ? ' aria-invalid="true"' : '') + '><span>cm</span></div></div>' +
    '<div class="field"><label for="f-nac">Fecha de nacimiento</label><div class="inrow"><input id="f-nac" type="date" class="inp" data-f="fval" data-p="nacimiento" value="' + esc(f.nacimiento) + '" max="' + todayIso() + '"' + (f.errK === 'nacimiento' ? ' aria-invalid="true"' : '') + '><span data-live="edad">' + (e != null ? e + ' años' : '') + '</span></div></div>' +
    '<div class="field"><span class="lbl" id="f-sx">Sexo</span><div class="seg" role="group" aria-labelledby="f-sx"><button type="button" data-a="perfil-sexo" data-s="H" aria-pressed="' + (f.sexo !== 'M') + '">Hombre</button><button type="button" data-a="perfil-sexo" data-s="M" aria-pressed="' + (f.sexo === 'M') + '">Mujer</button></div><p class="subnote">La fórmula del % de grasa cambia: en mujeres también usa la cadera.</p></div>' +
    (f.err ? '<p class="err" role="alert">' + esc(f.err) + '</p>' : '') +
    '<div class="metacard"><span class="eyebrow">Meta de cintura</span><b data-live="meta">' + perfilMeta() + '</b><small>Es la mitad de tu estatura. Se recalcula si la cambias.</small></div>';
  return '<section class="view">' + topbar('Progreso', 'Perfil') + '<div class="vbody">' + b + '</div><footer class="vfoot"><button type="button" class="btn btn-primary wide" data-a="perfil-save">Guardar</button></footer></section>';
}
function savePerfil(){
  var f = S.fform; if (!f) return;
  var e = pnum(f.estatura);
  if (e == null || e < 100 || e > 250) { f.err = 'Escribe tu estatura en centímetros, por ejemplo 170.'; f.errK = 'estatura'; render({ focus: '#f-est', select: true }); return; }
  if (f.nacimiento && edad(f.nacimiento) == null) { f.err = 'Revisa la fecha de nacimiento.'; f.errK = 'nacimiento'; render({ focus: '#f-nac' }); return; }
  var old = S.perfilDocs.principal;
  S.perfilDocs.principal = { estatura: Math.round(e * 10) / 10, nacimiento: f.nacimiento || '', sexo: f.sexo === 'M' ? 'M' : 'H', _nac0: f.nacimiento ? '' : (old && old._nac0) || '' };
  markKey('f:principal');
  S.fform = null; pop();
  showToast('Anotaste tu perfil; se guarda solo.');
}

/* GRUPOS, REGISTRO Y PROGRESIÓN */
var GLET = ['A','B','C','D','E','F'];
/* ejercicios con dos mancuernas: se anota el peso total (las dos sumadas) */
/* T04 (DEC-02): la búlgara se hace con una sola mancuerna en una mano; sus kilos anotados son la carga real y no se duplican */
var PAR = {pmrmanc:1,stepup:1,bancamanc:1,inclinado:1,aperturasmanc:1,remoinclmanc:1,renegade:1,pressmanc:1,arnold:1,laterales:1,frontales:1,pajaros:1,curlmanc:1,martillo:1,zancadas:1,zancadaatras:1,dividida:1};
function isPar(ex){ return cargaDe(ex) === 'dos'; }
function kgLabel(ex){ var m = cargaDe(ex); if (m === 'una') return 'Kg mancuerna'; if (m === 'dos' || m === 'barra') return 'Kg total'; if (m === 'corporal') return 'Kg extra'; if (m === 'polea' || m === 'otra') return 'Peso kg'; var e = ex.e; if (e === 'Barra' || e === 'Barra EZ') return 'Kg total'; if (e === 'Peso corporal') return 'Kg extra'; return 'Peso kg'; }
function kgUnit(ex){ return ' kg'; }
function fmtKg(n){ return fmtNum(Math.round(n * 10) / 10); }
function repsArr(s){ return String(s || '').split(',').map(function(x){ var n = parseInt(x, 10); return isFinite(n) ? n : null; }); }
function topReps(s){ var m = String(s || '').match(/\d+/g); return m ? Math.max.apply(null, m.map(Number)) : 0; }
function isTime(s){ return /\d\s*s\b|seg/i.test(String(s || '')); }
function kgPart(v){ v = String(v == null ? '' : v).trim(); if (!v) return null; var n = parseFloat(v.replace(',', '.')); return isFinite(n) && n >= 0 ? n : null; }
function kgRaw(it){ return String(it.hk || '').split('|'); }
/* peso real de cada serie: si la casilla está vacía cuenta el de la serie anterior (la primera usa el peso planeado) */
function kgSets(it, n){ n = Math.min(n, MAX_SETS); var raw = kgRaw(it), out = [], prev = kgPart(it.kg); for (var i = 0; i < n; i++) { var v = kgPart(raw[i]); if (v == null) v = prev; out.push(v); prev = v; } return out; }
/* entrada numérica: se valida el texto completo; nunca se quitan caracteres para convertirlo en otro número.
   Reps: entero de 0 a MAX_REPS. Kg: decimal de 0 a MAX_KG con una sola coma o punto. Vacío borra la casilla */
function vReps(t){
  t = String(t == null ? '' : t).trim();
  if (!t) return { ok: true, v: '' };
  if (!/^\d+$/.test(t)) return { ok: false, msg: 'escribe solo un número entero, sin comas, puntos ni signos (por ejemplo 12).' };
  var n = parseInt(t, 10);
  return n > MAX_REPS ? { ok: false, msg: 'el máximo por serie es ' + MAX_REPS + '.' } : { ok: true, v: String(n) };
}
function vKg(t){
  t = String(t == null ? '' : t).trim();
  if (!t) return { ok: true, v: '' };
  if (/^\d+[.,]$/.test(t)) return { ok: false, pend: true, msg: 'completa el decimal, por ejemplo 42,5.' };
  if (!/^\d+(?:[.,]\d+)?$/.test(t)) return { ok: false, msg: 'escribe el peso con números y a lo sumo una coma o un punto decimal, sin signos (por ejemplo 42,5).' };
  return parseFloat(t.replace(',', '.')) > MAX_KG ? { ok: false, msg: 'el máximo es ' + fmtVol(MAX_KG) + ' kg.' } : { ok: true, v: t };
}
function vSets(t){
  t = String(t == null ? '' : t).trim();
  if (!t) return { ok: true, v: '' };
  var n = /^\d+$/.test(t) ? parseInt(t, 10) : NaN;
  return n >= 1 && n <= MAX_SETS ? { ok: true, v: String(n) } : { ok: false, msg: 'escribe un número entero de series entre 1 y ' + MAX_SETS + '.' };
}
function setKg(it, i, v){ var r = vKg(v); if (!r.ok || !(i >= 0 && i < MAX_SETS)) return false; var parts = kgRaw(it); while (parts.length <= i) parts.push(''); parts[i] = r.v; it.hk = parts.join('|').replace(/\|+$/, ''); return true; }
/* series: el mismo límite para escribir, contar, registrar y mostrar. Un valor heredado se lee como antes (entero
   inicial), acotado a MAX_SETS; si lo supera se avisa y no se recorta lo guardado */
function setsN(it){ var n = int(it.sets); return n > 0 ? Math.min(n, MAX_SETS) : 0; }
function setsOver(it){ return int(it.sets) > MAX_SETS; }
function logN(it){ return clamp(Math.max(setsN(it) || 3, repsArr(it.hr).length), 1, MAX_SETS); }
function logSets(it){ var rs = repsArr(it.hr), n = Math.min(Math.max(rs.length, setsN(it)), MAX_SETS), ks = kgSets(it, n), out = []; for (var i = 0; i < n; i++) if (rs[i] != null) { var o = { kg: ks[i] || 0, reps: rs[i] }; if (ks[i] == null) o.sinKg = true; out.push(o); } return out; }
/* series guardadas después del límite: se muestran tal cual, sin editarlas ni sumarlas */
function logExtra(it){
  var rs = String(it.hr || '').split(','), ks = kgRaw(it), xr = rs.slice(MAX_SETS).join(','), xk = ks.slice(MAX_SETS).join('|');
  if (!xr.replace(/,/g, '') && !xk.replace(/\|/g, '')) return '';
  return 'Hay series guardadas después de la ' + MAX_SETS + ', el máximo: ' + [xr.replace(/,/g, '') ? 'reps «' + xr + '»' : '', xk.replace(/\|/g, '') ? 'kg «' + xk + '»' : ''].filter(Boolean).join(' y ') + '. Se conservan sin cambios y no entran en los totales.';
}
function setsVol(ss){ return ss.reduce(function(a, x){ return a + x.kg * x.reps; }, 0); }
function sumReps(ss){ return ss.reduce(function(a, x){ return a + x.reps; }, 0); }
function itemVol(it){ return isTime(it.reps) ? 0 : setsVol(logSets(it)); }
function dayVol(d){ return d.items.reduce(function(a, it){ return a + (isCardio(it) ? 0 : itemVol(it)); }, 0); }
function fmtVol(n){ return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }
function hasLog(it){ return /\d/.test(it.hr || '') || kgRaw(it).some(function(p){ return kgPart(p) > 0; }); }
/* 15 kg × 18 · 17,5 kg × 12, 10 */
function setsText(ss, time){
  if (!ss.length) return '';
  if (time) return ss.map(function(x){ return x.reps; }).join(', ') + ' s';
  /* T04 (L-06): sin ningún dato de peso solo se muestran las reps; un 0 anotado se muestra como 0 kg, no como ausencia */
  if (ss.every(function(x){ return x.sinKg; })) return ss.map(function(x){ return x.reps; }).join(', ') + ' reps';
  var g = [];
  ss.forEach(function(x){ var key = x.sinKg ? null : x.kg, l = g[g.length - 1]; if (l && l.key === key) l.r.push(x.reps); else g.push({ key: key, r: [x.reps] }); });
  return g.map(function(x){ return (x.key == null ? 'sin peso anotado' : fmtKg(x.key) + ' kg') + ' × ' + x.r.join(', '); }).join(' · ');
}
function volText(it){
  var ss = logSets(it); if (!ss.length) return '';
  if (isTime(it.reps)) return sumReps(ss) + ' s en total';
  var v = setsVol(ss); return v ? 'Total ' + fmtVol(v) + ' kg' : sumReps(ss) + ' reps';
}
function doneText(it){ var ss = logSets(it), t = isTime(it.reps), v = t ? 0 : setsVol(ss); return 'Hecho: ' + ss.map(function(x){ return x.reps; }).join(', ') + (t && ss.length ? ' s' : '') + (v ? ' · total ' + fmtVol(v) + ' kg' : ''); }
function groupLabels(items){ var cnt = dict(), m = dict(); items.forEach(function(it){ if (it.g) { cnt[it.g] = (cnt[it.g] || 0) + 1; m[it.k] = it.g + cnt[it.g]; } }); return m; }
function grpName(n){ return n === 2 ? 'Superserie' : n === 3 ? 'Triserie' : n > 3 ? 'Circuito' : 'Grupo'; }
/* grupo: solo las letras de GLET; un valor heredado distinto se muestra como opción marcada y se conserva hasta elegir otra */
function grpSel(it){
  var id = fid(it.k, 'g'), g = it.g == null ? '' : String(it.g), known = !g || GLET.indexOf(g) >= 0;
  return '<div class="fld"><label for="' + esc(id) + '">Grupo</label><select id="' + esc(id) + '" class="inp num" data-f="grp" data-k="' + esc(it.k) + '"' + (known ? '' : ' aria-invalid="true"') + '><option value=""' + (g ? '' : ' selected') + '>Solo</option>' +
    GLET.map(function(l){ return '<option' + (g === l ? ' selected' : '') + '>' + l + '</option>'; }).join('') + (known ? '' : '<option value="' + esc(g) + '" selected>' + esc(short(g)) + ' (no válido)</option>') + '</select></div>';
}
function grpHead(run, g, n0, conCrono){
  var n = run.length, rondas = Math.max.apply(null, run.map(function(x){ return setsN(x); })) || 0, ge = esc(g);
  var rest = (run.filter(function(x){ return x.rest; }).pop() || {}).rest || '', id = 'gr-' + n0, rsec = window.Cronometro ? window.Cronometro.parse(rest) : null;
  var sub = n > 1 ? (rondas ? rondas + ' rondas. ' : '') + 'Una serie de cada ejercicio seguidas y luego descansas.' : 'Asigna otro ejercicio a la letra ' + ge + ' para alternarlos.';
  return '<div class="grphead"><span class="gtag" aria-hidden="true">' + ge + '</span><span class="gtt"><b>' + grpName(n) + ' ' + ge + '</b><small>' + sub + '</small></span>' +
    '<div class="fld grest"><label for="' + id + '">Descanso</label><input id="' + id + '" class="inp num" data-f="grest" data-g="' + ge + '" data-k0="' + esc(run[0].k) + '" value="' + esc(rest) + '" autocomplete="off" placeholder="1:30"></div>' +
    (rsec && conCrono ? '<button type="button" class="restbtn gstart" data-a="timer-start" data-s="' + rsec + '" data-l="' + esc(grpName(n) + ' ' + g) + '" aria-label="Iniciar descanso de ' + esc(window.Cronometro.fmt(rsec)) + '">' + ic('timer', 16, 2) + 'Iniciar</button>' : '') + '</div>';
}
function strengthBlocks(items, logDate, planDate, ctx){
  var labs = groupLabels(items), out = '', i = 0, n0 = 0;
  while (i < items.length) {
    var g = items[i].g;
    if (!g) { out += vExCard(items[i], { logDate: logDate, planDate: planDate, ctx: ctx }); i++; continue; }
    var j = i; while (j < items.length && items[j].g === g) j++;
    var run = items.slice(i, j);
    out += grpHead(run, g, n0++, !!logDate);
    run.forEach(function(it){ out += vExCard(it, { lab: labs[it.k], grouped: true, logDate: logDate, planDate: planDate, ctx: ctx }); });
    i = j;
  }
  return out;
}
function setGroup(ctx, k, g){
  var c = getCont(ctx); if (!c) return;
  var it = c.items.find(function(x){ return x.k === k; }); if (!it) return;
  g = g == null ? '' : String(g);
  if (g && GLET.indexOf(g) < 0) return;
  it.g = g;
  if (g) {
    var str = c.items.filter(function(x){ return !isCardio(x); });
    var others = str.filter(function(x){ return x !== it && x.g === g; });
    if (others.length) {
      var lastO = others[others.length - 1], arr = str.filter(function(x){ return x !== it; });
      arr.splice(arr.indexOf(lastO) + 1, 0, it);
      applyOrder(c, false, arr);
      if (lastO.rest) it.rest = lastO.rest;
    }
  }
  markDirty(ctx);
}
function exLogs(id){
  var out = [];
  Object.keys(S.weeks).forEach(function(ws){
    S.weeks[ws].days.forEach(function(d, i){
      d.items.forEach(function(it){
        if (it.ex !== id || !hasLog(it)) return;
        var ss = logSets(it), time = isTime(it.reps), kgs = ss.map(function(x){ return x.kg; }), known = ss.filter(function(x){ return !x.sinKg; }).map(function(x){ return x.kg; });
        if (!ss.length) { var k0 = kgSets(it, 1)[0]; if (k0) kgs = [k0]; if (k0 != null) known = [k0]; }
        /* kgOk: la carga más alta realmente conocida (escrita o planeada); null si la sesión no tiene ningún dato de peso */
        out.push({ date: iso(dayDate(ws, i)), sets: ss, kg: kgs.length ? Math.max.apply(null, kgs) : 0, kgOk: known.length ? Math.max.apply(null, known) : null, reps: ss.map(function(x){ return x.reps; }), vol: time ? 0 : setsVol(ss), n: setsN(it), top: topReps(it.reps), time: time, k: it.k });
      });
    });
  });
  return out.sort(function(a, b){ return a.date < b.date ? -1 : a.date > b.date ? 1 : 0; });
}
/* T04 (L-06): última carga válida, también 0; una sesión sin dato de peso no inventa un cero */
function lastKgOf(id){ var l = exLogs(id); for (var i = l.length - 1; i >= 0; i--) if (l[i].kgOk != null) return l[i].kgOk; return null; }
function lastLog(id, before){ var l = exLogs(id).filter(function(x){ return x.date < before; }); return l[l.length - 1] || null; }
/* incrementos de siempre, aplicados a la modalidad efectiva; sin modalidad, por equipo como antes */
/* modalidad de carga del ejercicio: la del propio (carga) o la deducida del equipo del catálogo */
function modalidadDe(ex){
  var m = cargaDe(ex); if (m) return m;
  var e = ex && ex.e;
  if (e === 'Barra') return 'barra'; if (e === 'Barra EZ') return 'barraez'; if (e === 'Mancuernas') return PAR[ex.id] ? 'dos' : 'una';
  if (e === 'Polea' || e === 'Máquina') return 'polea'; if (e === 'Kettlebell') return 'kettlebell'; if (e === 'Peso corporal') return 'corporal';
  return null;
}
/* siguiente carga según el equipo real (discos de la barra, paso de las mancuernas, paso de la polea) */
function nextKg(ex, kg){ return window.Progresion.siguiente(modalidadDe(ex), kg, cicloCfg().equipo); }
/* discos por lado para una carga con barra: "15,9 + 6,8" (y la carga real si no es exacta). Vacío si no aplica */
function discosTexto(ex, kg){
  var m = modalidadDe(ex); if (m !== 'barra' && m !== 'barraez') return '';
  var d = window.Progresion.discosPara(kg, cicloCfg().equipo, m); if (!d) return '';
  if (!d.porLado.length) return d.exacto ? 'la barra sola' : 'la barra sola (' + fmtKg(d.total) + ' kg)';
  var lado = d.porLado.map(fmtKg).join(' + ');
  return (d.porLado.length === 1 ? 'un disco de ' : '') + lado + ' por lado' + (d.exacto ? '' : ' (da ' + fmtKg(d.total) + ' kg)');
}
function vDiscos(it, ex){ var k = num(it.kg); if (!(k > 0)) return ''; var t = discosTexto(ex, k); return t ? '<p class="plates">' + ic('disc', 14) + 'Discos: ' + esc(t) + '</p>' : ''; }
function logHint(it, ex, date){
  var L = lastLog(it.ex, date);
  if (!L) return hasLog(it) ? '' : '<span>Anota el peso y las repeticiones de cada serie. Si el peso no cambia, deja la casilla vacía y cuenta el de la serie anterior.</span>';
  var s = '<span>Última vez (' + dShort(L.date) + '): ' + esc(L.sets.length ? setsText(L.sets, L.time) + (L.vol ? ' · total ' + fmtVol(L.vol) + ' kg' : '') : (L.kg ? fmtKg(L.kg) + kgUnit(ex) + ' · ' : '') + 'sin repeticiones anotadas') + '</span>';
  var top = topReps(it.reps) || L.top;
  if (!top || !L.reps.length) return s;
  /* T04 (L-01): subir solo si todas las series planeadas (las de esa sesión y las de hoy) están anotadas, con la misma
     carga, y todas llegan al tope. No se suponen calentamientos: una serie más liviana es parte del registro.
     La evaluación vive en progresion.js y es la misma que usa la propuesta automática al crear el día */
  var ev = window.Progresion.evaluar(L, top, setsN(it));
  if (ev.estado === 'sin') return s;
  if (L.time) return s + (ev.estado === 'sube' ? '<span class="up">Llegaste a ' + top + ' s en todas: súbele la dificultad.</span>' : '');
  var need = ev.need, w0 = ev.w0;
  if (ev.estado === 'incompleto') return s + '<span>Anotaste ' + ev.hechas + ' de ' + need + ' series: mantén la carga hasta completarlas todas y llegar a ' + top + ' en cada una.</span>';
  if (ev.estado === 'distintos') return s + '<span>Las series tuvieron pesos distintos: mantén la carga hasta hacer las ' + need + ' con el mismo peso y llegar a ' + top + ' en todas.</span>';
  if (ev.estado === 'mantener') return s + '<span>' + (w0 > 0 ? 'Mantén ' + fmtKg(w0) + kgUnit(ex) + kgSuf(ex) : 'Mantén la carga') + ' hasta llegar a ' + top + ' en todas las series.</span>';
  var nx = w0 > 0 ? nextKg(ex, w0) : null, en = ' en todas', m = cargaDe(ex);
  if (nx) return s + '<span class="up">Llegaste a ' + top + en + ': sube a ' + fmtKg(nx) + kgUnit(ex) + kgSuf(ex) + (discosTexto(ex, nx) ? ' (' + esc(discosTexto(ex, nx)) + ')' : '') + '.</span>' + (num(it.kg) !== nx ? '<button type="button" class="linkbtn sm" data-a="use-kg" data-k="' + esc(it.k) + '" data-v="' + nx + '">Usar ' + fmtKg(nx) + ' kg</button>' : '');
  if (modalidadDe(ex) === 'dos' || modalidadDe(ex) === 'una') return s + '<span class="up">Llegaste a ' + top + en + ' con la mancuerna más pesada: pasa a una variante más difícil o suma repeticiones.</span>';
  if (m === 'polea' || (!m && (ex.e === 'Polea' || ex.e === 'Máquina'))) return s + '<span class="up">Llegaste a ' + top + en + ': sube una placa.</span>';
  if (esCorporal(ex)) return s + '<span class="up">Llegaste a ' + top + en + ': agrega peso o pasa a una variante más difícil.</span>';
  return s + '<span class="up">Llegaste a ' + top + en + ': sube un poco el peso.</span>';
}
/* día futuro: solo la última vez y la sugerencia de peso, sin casillas para anotar */
function vPlanHint(it, ex, date){ if (!lastLog(it.ex, date)) return ''; return '<div class="logbox"><p class="loghint">' + logHint(it, ex, date) + '</p></div>'; }
function hid(k, i, s){ return 'h-' + domId(k) + '-' + i + '-' + s; }
/* descanso que aplica al terminar una serie de este ejercicio: el del grupo si está en superserie, si no el propio */
function descansoEfectivo(it, ctx){
  if (it.g) { var c = getCont(ctx), run = c ? c.items.filter(function(x){ return x.g === it.g && !isCardio(x); }) : []; var r = (run.filter(function(x){ return x.rest; }).pop() || {}).rest; if (r) return r; }
  return it.rest || '';
}
/* una casilla muestra lo que se está escribiendo si no es válido; si no, lo guardado (también un valor heredado que no se
   puede leer, marcado, en lugar de esconderlo) */
function vLog(it, ex, date, ctx){
  var n = logN(it), rs = repsArr(it.hr), rr = String(it.hr || '').split(','), time = isTime(it.reps), raw = kgRaw(it), ks = kgSets(it, n), k = esc(it.k), kl = kgLabel(ex), extra = logExtra(it);
  var rs0 = descansoEfectivo(it, ctx), rsec = window.Cronometro ? window.Cronometro.parse(rs0) : null;
  var b = '<div class="logbox"><div class="loghead"><span class="loglbl">Lo que hiciste</span><span class="logvol" data-vol="' + k + '">' + volText(it) + '</span>' +
    (rsec ? '<button type="button" class="restbtn" data-a="timer-start" data-s="' + rsec + '" data-l="' + esc(ex.n) + '" aria-label="Iniciar descanso de ' + esc(window.Cronometro.fmt(rsec)) + '">' + ic('timer', 15, 2) + window.Cronometro.fmt(rsec) + '</button>' : '') + '</div>' +
    '<div class="logtbl' + (time ? ' t1' : '') + '"><span class="lth" aria-hidden="true">Serie</span>' + (time ? '' : '<span class="lth" aria-hidden="true">' + kl + '</span>') + '<span class="lth" aria-hidden="true">' + (time ? 'Segundos' : repsLabel(ex)) + '</span>';
  for (var i = 0; i < n; i++) {
    b += '<span class="lsn" aria-hidden="true">' + (i + 1) + '</span>';
    if (!time) { var dk = draftGet(ctx, it.k, 'hk|' + i), kv = dk ? dk.t : String(raw[i] == null ? '' : raw[i]).trim(); b += '<input id="' + esc(hid(it.k, i, 'kg')) + '" class="inp num" data-f="hk" data-k="' + k + '" data-i="' + i + '" value="' + esc(kv) + '" placeholder="' + (ks[i] != null ? fmtKg(ks[i]) : '') + '" inputmode="decimal" autocomplete="off" aria-label="Serie ' + (i + 1) + ', ' + kl.toLowerCase() + '"' + invAttr((dk && !dk.pend) || (!dk && legacyBad(it, 'hk', i)), it) + '>'; }
    var dr = draftGet(ctx, it.k, 'hr|' + i), rv = dr ? dr.t : rs[i] != null ? String(rs[i]) : String(rr[i] == null ? '' : rr[i]).trim();
    b += '<input id="' + esc(hid(it.k, i, 'r')) + '" class="inp num" data-f="hr" data-k="' + k + '" data-i="' + i + '" value="' + esc(rv) + '" inputmode="numeric" autocomplete="off" aria-label="Serie ' + (i + 1) + ', ' + (time ? 'segundos' : 'repeticiones') + '"' + invAttr(dr ? !dr.pend : !!legacyBad(it, 'hr', i), it) + '>';
  }
  return b + '</div>' + (extra ? '<p class="hint small">' + esc(extra) + '</p>' : '') + '<p class="loghint">' + logHint(it, ex, date) + '</p></div>';
}
/* nodos por dataset: una clave con comillas o corchetes nunca se arma dentro de un selector */
function byData(sel, key, val){ return Array.prototype.filter.call(document.querySelectorAll(sel), function(el){ return el.dataset[key] === val; }); }
function updateLog(it){
  var n = logN(it), ks = kgSets(it, n), raw = kgRaw(it);
  byData('[data-f="hk"]', 'k', it.k).forEach(function(inp){
    var i = +inp.dataset.i; inp.placeholder = ks[i] != null ? fmtKg(ks[i]) : '';
    if (inp !== document.activeElement && !inp.value && kgPart(raw[i]) != null) inp.value = String(raw[i]).trim();
  });
  byData('[data-vol]', 'vol', it.k).forEach(function(v){ v.textContent = volText(it); });
}
function setRep(it, i, v){
  var r = vReps(v); if (!r.ok || !(i >= 0 && i < MAX_SETS)) return false;
  var parts = String(it.hr || '').split(',');
  while (parts.length <= i) parts.push('');
  parts[i] = r.v;
  it.hr = parts.join(',').replace(/,+$/, '');
  return true;
}
function chLbl(v){ return v >= 1000 ? fmtVol(v) : fmtKg(v); }
/* T05 (L-07, DEC-06): el eje x es proporcional a la fecha civil (AAAA-MM-DD), sin hora ni zona del dispositivo. Varias
   muestras del mismo día comparten x. Con el foco en la gráfica, las flechas leen fecha y valor de cada punto */
function diaNum(s){ var p = String(s).split('-').map(Number); return Date.UTC(p[0], p[1] - 1, p[2]) / 864e5; }
function fechaLarga(s){ return dShort(s) + ' ' + String(s).slice(0, 4); }
function miniChart(pts, unit, ttl){
  pts = pts.map(function(p, i){ return { d: p.d, v: p.v, i: i }; }).sort(function(a, b){ return a.d < b.d ? -1 : a.d > b.d ? 1 : a.i - b.i; });
  var vw = document.documentElement.clientWidth || 390;
  var W = Math.max(240, (DESK.matches ? Math.min(480, vw) : Math.min(vw, 560)) - 32), H = 130, L = pts.some(function(p){ return p.v >= 1000; }) ? 42 : 34, R = 12, T = 10, B = 24, pw = W - L - R, ph = H - T - B, N = pts.length;
  var vs = pts.map(function(p){ return p.v; }), mn = Math.min.apply(null, vs), mx = Math.max.apply(null, vs), rg = mx - mn;
  var raw0 = rg / 3 || 1, p10 = Math.pow(10, Math.floor(Math.log10(raw0))), m10 = raw0 / p10, step = Math.max(1, (m10 <= 1 ? 1 : m10 <= 2 ? 2 : m10 <= 5 ? 5 : 10) * p10);
  var lo = Math.floor((mn - 0.3 * step) / step) * step, hi = Math.ceil((mx + 0.3 * step) / step) * step;
  while ((hi - lo) / step < 2) { lo -= step; if ((hi - lo) / step < 2) hi += step; }
  function yv(v){ return Math.round((T + (hi - v) / (hi - lo) * ph) * 10) / 10; }
  var d0 = diaNum(pts[0].d), span = diaNum(pts[N - 1].d) - d0, otroAnio = pts[0].d.slice(0, 4) !== pts[N - 1].d.slice(0, 4);
  function xv(i){ return Math.round((span > 0 ? L + (diaNum(pts[i].d) - d0) / span * pw : L + pw / 2) * 10) / 10; }
  function eti(d){ return otroAnio ? fechaLarga(d) : dShort(d); }
  var s = '';
  for (var v = lo; v <= hi + 1e-9; v += step) s += '<line class="ch-grid" x1="' + L + '" x2="' + (W - R) + '" y1="' + yv(v) + '" y2="' + yv(v) + '"/><text class="ch-lbl" x="0" y="' + (yv(v) + 4) + '">' + chLbl(v) + '</text>';
  if (N > 1) s += '<polyline class="ch-line" points="' + pts.map(function(p, i){ return xv(i) + ',' + yv(p.v); }).join(' ') + '"/>';
  pts.forEach(function(p, i){ var rd = fechaLarga(p.d) + ': ' + chLbl(p.v) + unit; s += '<circle class="ch-pt" cx="' + xv(i) + '" cy="' + yv(p.v) + '" r="' + (i === N - 1 ? 5 : 4) + '" data-r="' + esc(rd) + '"><title>' + esc(rd) + '</title></circle>'; });
  var unDia = span === 0;
  s += '<text class="ch-lbl" x="' + xv(0) + '" y="' + (H - 6) + '" text-anchor="' + (N === 1 || unDia ? 'middle' : 'start') + '">' + eti(pts[0].d) + '</text>';
  if (N > 1 && !unDia) s += '<text class="ch-lbl" x="' + xv(N - 1) + '" y="' + (H - 6) + '" text-anchor="end">' + eti(pts[N - 1].d) + '</text>';
  return '<div class="mchart"><svg viewBox="0 0 ' + W + ' ' + H + '" width="' + W + '" height="' + H + '" role="img" tabindex="0" aria-label="' + esc(ttl + '. ' + N + (N === 1 ? ' punto' : ' puntos') + '; con las flechas lees la fecha y el valor de cada uno.') + '">' + s + '</svg><p class="ch-read" aria-live="polite"></p></div>';
}
function vProg(ex){
  var l = exLogs(ex.id); if (!l.length) return '';
  var hasVol = l.filter(function(x){ return x.vol > 0; }).length >= 2, m = S.progM === 'vol' && hasVol ? 'vol' : 'kg';
  var pts = l.filter(function(x){ return m === 'vol' ? x.vol > 0 : x.kg > 0; }).map(function(x){ return { d: x.date, v: m === 'vol' ? x.vol : x.kg }; });
  var unit = m === 'vol' ? ' kg' : kgUnit(ex), lab = m === 'vol' ? 'Total levantado en ' : 'Peso máximo en ';
  var b = '<div class="howto"><h3 class="h3cap">Tu progreso</h3>';
  if (hasVol) b += '<div class="seg" role="group" aria-label="Qué mostrar en la gráfica"><button type="button" data-a="prog-m" data-m="kg" aria-pressed="' + (m === 'kg') + '">Peso máximo</button><button type="button" data-a="prog-m" data-m="vol" aria-pressed="' + (m === 'vol') + '">Total levantado</button></div>';
  if (pts.length >= 2) b += miniChart(pts, unit, lab + ex.n + ': de ' + chLbl(pts[0].v) + ' kg el ' + dShort(pts[0].d) + ' a ' + chLbl(pts[pts.length - 1].v) + ' kg el ' + dShort(pts[pts.length - 1].d));
  if (hasVol && m === 'vol') b += '<p class="subnote">Total levantado: peso por repeticiones de cada serie, sumado.' + (cargaDe(ex) === 'dos' ? ' Cuenta las dos mancuernas.' : '') + '</p>';
  b += '<div class="reclist"><div class="rechead" aria-hidden="true"><span>Sesión</span><span>Mejor serie</span></div>' + l.slice().reverse().slice(0, 8).map(function(x){
    var best = bestSet(x);
    return '<div class="recrow static"><span class="fzt"><b>' + dRow(x.date) + '</b><small>' + esc(setsText(x.sets, x.time) || (x.kg ? fmtKg(x.kg) + kgUnit(ex) : '')) + '</small></span>' +
      '<span class="fzch">' + (best ? '<b><span class="sr">Mejor serie: </span>' + esc(best) + '</b>' : '') + (x.vol ? '<small>total ' + fmtVol(x.vol) + ' kg</small>' : '') + '</span></div>';
  }).join('') + '</div></div>';
  return b;
}
/* mejor serie de una sesión: la de más peso y, si empatan, la de más repeticiones */
function bestSet(x){
  if (!x.sets.length) return x.kg ? fmtKg(x.kg) + ' kg' : '';
  if (x.time) return Math.max.apply(null, x.sets.map(function(s){ return s.reps; })) + ' s';
  var b = x.sets.reduce(function(a, s){ return !a || s.kg > a.kg || (s.kg === a.kg && s.reps > a.reps) ? s : a; }, null);
  return b.kg ? fmtKg(b.kg) + ' kg × ' + b.reps : b.reps + ' reps';
}
function logSum(L, ex){
  var p = [dShort(L.date)];
  if (L.time) p.push(setsText(L.sets, true));
  else if (L.vol) { p.push('máx ' + fmtKg(L.kg) + kgUnit(ex)); p.push('total ' + fmtVol(L.vol) + ' kg'); }
  else if (L.sets.length) p.push(setsText(L.sets, false));
  else if (L.kg) p.push(fmtKg(L.kg) + kgUnit(ex));
  return p.join(' · ');
}
function cardFuerza(){
  var ids = {};
  Object.keys(S.weeks).forEach(function(ws){ S.weeks[ws].days.forEach(function(d){ d.items.forEach(function(it){ if (hasLog(it) && !isCardio(it)) ids[it.ex] = true; }); }); });
  var rows = Object.keys(ids).map(function(id){ var l = exLogs(id); return { ex: exById(id), l: l, last: l[l.length - 1] }; })
    .sort(function(a, b){ return a.last.date < b.last.date ? 1 : a.last.date > b.last.date ? -1 : a.ex.n.localeCompare(b.ex.n, 'es'); });
  var b = '<section class="pcard"><div class="pchead"><h2>Fuerza por ejercicio</h2>' + (rows.length ? '<span>' + rows.length + (rows.length === 1 ? ' ejercicio' : ' ejercicios') + '</span>' : '') + '</div>';
  if (!rows.length) return b + '<p class="hint">Cuando anotes en cada día el peso que usaste y las repeticiones de cada serie, aquí vas a ver cómo progresa cada ejercicio.</p></section>';
  var n = S.fzMore || 6;
  b += '<div class="reclist">' + rows.slice(0, n).map(function(r){
    var L = r.last, f = r.l[0], ch = r.l.length > 1 && L.kg && f.kg ? arrow(L.kg - f.kg, 'kg', false) : '';
    return '<button type="button" class="recrow fzrow" data-a="open-det" data-id="' + esc(r.ex.id) + '"><span class="fzt"><b>' + esc(r.ex.n) + '</b><small>' + esc(logSum(L, r.ex)) + '</small></span>' +
      (ch ? '<span class="fzch">' + ch + '<small>desde ' + dShort(f.date) + '</small></span>' : '') + '<span class="chev">' + ic('right', 16, 2) + '</span></button>';
  }).join('') + (rows.length > n ? '<button type="button" class="linkbtn sm" data-a="fz-more">Ver más</button>' : '') + '</div>';
  return b + '</section>';
}

/* render */
function vTab(){ if (S.tab === 'tipos') return vTipos(); if (S.tab === 'ejercicios') return vLibTab(); if (S.tab === 'progreso') return vProgreso(); return vSemana(); }
function vView(t){
  switch (t.v) {
    case 'dia': return vEditor({ kind: 'day', ws: t.ws, i: t.i });
    case 'tipo': return vEditor({ kind: 'tipo', id: t.id });
    case 'lib': return vLibSelect(t);
    case 'det': return vDet(t);
    case 'swap': return vSwap(t);
    case 'resumen': return vResumen();
    case 'cargar': return vCargar(t);
    case 'asignar': return vAsignar(t);
    case 'crear': return vCrear(t);
    case 'hist': return vHist();
    case 'peso': return vPeso(t);
    case 'medidas': return vMedidas(t);
    case 'perfil': return vPerfil(t);
    case 'cola': return vCola();
    case 'migracion': return vMigracion(t);
    case 'datos': return vDatos(t);
    case 'ciclo': return vCiclo(t);
    case 'ciclocfg': return vCicloCfg(t);
  }
  return '';
}
function viewTitle(t){ return { dia: 'Editar día', tipo: 'Editar día tipo', lib: 'Agregar ejercicio', det: 'Ejercicio', resumen: 'Resumen', cargar: 'Cargar día tipo', asignar: 'Armar con días tipo', crear: 'Ejercicio', swap: 'Cambiar ejercicio', hist: 'Historial', peso: 'Registrar peso', medidas: 'Medidas', perfil: 'Perfil', migracion: 'Migración a días independientes', cola: 'Cambios pendientes', datos: 'Datos y respaldo', ciclo: t.modo === 'reorg' ? 'Reorganizar la semana' : 'Armar con el ciclo', ciclocfg: 'Ciclo' }[t.v] || ''; }
var detTimer = null;
function render(opts){
  opts = opts || {};
  if (window.Cronometro) setTimeout(window.Cronometro.colocar, 0);
  S.pending = false; S.chart = null;
  var app = document.getElementById('app');
  var dr = document.querySelector('.drawer'), dTop = dr ? dr.scrollTop : 0, wy = window.scrollY;
  /* T05 (U-02): un redibujo que no es navegación conserva el foco donde estaba (por ejemplo, al confirmarse un guardado) */
  var ae = document.activeElement, prevSel = !opts.nav && !opts.focus && ae && ae !== document.body && app.contains(ae) ? trigSel(ae) : null;
  var t = top(), desk = DESK.matches, h = '';
  if (desk) {
    h += vTopnav() + '<main class="shell' + (S.tab === 'semana' ? '' : S.tab === 'progreso' ? ' mid' : ' narrow') + '" tabindex="-1">' + vTab() + '</main>';
    if (t) h += '<div class="backdrop" data-a="back"></div><aside class="drawer" role="dialog" aria-modal="true" tabindex="-1" aria-label="' + esc(viewTitle(t)) + '">' + vView(t) + vToast() + '</aside>';
  } else {
    h += t ? '<div class="page">' + vView(t) + '</div>' : '<main class="shell" tabindex="-1">' + vTab() + '</main>' + vBottomnav();
  }
  if (!(desk && t)) h += vToast();
  app.innerHTML = h;
  document.body.classList.toggle('lock', desk && !!t);
  /* T05 (U-02): con el diálogo abierto, el fondo no recibe foco ni clics (el telón sí cierra) */
  if (desk && t) Array.prototype.forEach.call(app.querySelectorAll('.topnav, main.shell'), function(x){ x.setAttribute('inert', ''); x.setAttribute('aria-hidden', 'true'); });
  var pc = document.querySelector('.chips:not(.wrap) .chip[aria-pressed="true"]'); if (pc) pc.parentNode.scrollLeft = Math.max(0, pc.offsetLeft - pc.parentNode.offsetLeft - 16);
  var d2 = document.querySelector('.drawer');
  if (opts.nav) {
    window.scrollTo(0, opts.y || 0);
    if (d2) d2.scrollTop = 0;
    var fEl = t ? document.querySelector('[data-focus]') : null;
    if (fEl) fEl.focus({ preventScroll: true });
  } else {
    if (d2) d2.scrollTop = dTop;
    if (Math.abs(window.scrollY - wy) > 1) window.scrollTo(0, wy);
  }
  if (opts.focus) { var el = null; try { el = document.querySelector(opts.focus); } catch (e) {} if (el) { el.focus({ preventScroll: true }); if (el.select && opts.select) el.select(); } }
  else if (prevSel && (!document.activeElement || document.activeElement === document.body)) { var pe = null; try { pe = document.querySelector(prevSel); } catch (e) {} if (usable(pe)) pe.focus({ preventScroll: true }); }
  startDetTimer();
}
function startDetTimer(){
  clearInterval(detTimer); detTimer = null;
  var t = top(); if (!t || t.v !== 'det' || S.detMode !== 'mov') return;
  var ex = exById(t.id); if (ex.custom) return;
  var fr = 1; [0, 1].forEach(function(k){ var im = new Image(); im.src = 'img/' + ex.id + '_' + k + '.jpg'; });
  detTimer = setInterval(function(){
    var img = document.getElementById('det-img'), badge = document.getElementById('det-badge');
    if (!img) { clearInterval(detTimer); return; }
    fr = 1 - fr; img.src = 'img/' + ex.id + '_' + fr + '.jpg'; img.alt = (ILUS[ex.id] ? 'Ilustración de ' : '') + ex.n + ', posición ' + (fr ? 'final' : 'de inicio'); if (badge) badge.textContent = fr ? 'Final' : 'Inicio';
  }, 1200);
}
/* T05 (U-02): cada nivel recuerda qué lo abrió; al cerrar, el foco vuelve ahí. Si ese control ya no existe, va al título
   de la vista que queda o al contenido principal, nunca se pierde */
var navTrig = null, RET = [];
function trigSel(el){
  if (!el || el === document.body || !el.getAttribute) return null;
  if (el.id) return '#' + cssEsc(el.id);
  var a = el.getAttribute('data-a'); if (!a) { var g = el.getAttribute('data-grip'); return g ? '[data-grip="' + cssEsc(g) + '"]' : null; }
  return el.tagName.toLowerCase() + '[data-a="' + cssEsc(a) + '"]' + ['i', 'id', 'ws', 'k', 'd', 't', 'g', 'c'].map(function(n){ var v = el.getAttribute('data-' + n); return v == null ? '' : '[data-' + n + '="' + cssEsc(v) + '"]'; }).join('');
}
function usable(el){ return !!el && !el.closest('[inert]') && el.getClientRects().length > 0 && !el.disabled; }
function volverFoco(sel){
  var el = null; if (sel) { try { el = document.querySelector(sel); } catch (e) { el = null; } }
  if (!usable(el)) el = document.querySelector('.drawer [data-focus]') || document.querySelector('.page [data-focus]') || document.querySelector('main.shell');
  if (el) el.focus({ preventScroll: true });
}
function focusables(root){ return Array.prototype.filter.call(root.querySelectorAll('a[href], button, input, select, textarea, [tabindex]:not([tabindex="-1"])'), function(x){ return x.type !== 'hidden' && x.getAttribute('tabindex') !== '-1' && usable(x); }); }
function push(v){ RET[S.stack.length] = trigSel(navTrig || document.activeElement); navTrig = null; S.scroll[S.stack.length] = window.scrollY; S.stack.push(v); S.confirm = null; render({ nav: true }); }
function pop(n){
  n = n || 1;
  for (var k = 0; k < n; k++) {
    var t = S.stack.pop();
    if (t && (t.v === 'dia' || t.v === 'tipo')) warnDrafts(t.v === 'dia' ? { kind: 'day', ws: t.ws, i: t.i } : { kind: 'tipo', id: t.id });
    /* un día tipo nuevo que se deja vacío se descarta sin enviar nada; uno ya guardado y vaciado se elimina (plantilla) */
    if (t && t.v === 'tipo') { var tp = S.tipos[t.id]; if (tp && !tp.name && !tp.items.length) { var never = tp._local && !S.cola['t:' + t.id]; delete S.tipos[t.id]; if (!never) markKey('t:' + t.id); } }
    /* salir del formulario invalida su subida pendiente: una respuesta tardía no se aplica a otro formulario */
    if (t && t.v === 'crear') { if (S.form) { S.form.upOp = 0; S.form.uploading = false; } S.form = null; }
  }
  S.confirm = null; S.swapPick = null;
  var sel = RET[S.stack.length]; RET.length = S.stack.length;
  render({ nav: true, y: S.scroll[S.stack.length] || 0 });
  volverFoco(sel);
}

/* acciones sobre datos */
function newItem(exId){
  var ex = exById(exId), base = ex.t === 'cardio' ? { min: '20', km: '', zona: 'Zona 2' } : { sets: '3', reps: '8-12', kg: '', rest: '1:30' };
  var last = null, wss = Object.keys(S.weeks).sort().reverse();
  outer: for (var a = 0; a < wss.length; a++) { var days = S.weeks[wss[a]].days; for (var b = 0; b < 7; b++) { for (var c = 0; c < days[b].items.length; c++) { if (days[b].items[c].ex === exId) { last = days[b].items[c]; break outer; } } } }
  if (!last) Object.keys(S.tipos).some(function(id){ return S.tipos[id].items.some(function(it){ if (it.ex === exId) { last = it; return true; } return false; }); });
  var o = { k: uid(), ex: exId };
  Object.keys(base).forEach(function(f){ o[f] = last && last[f] != null && last[f] !== '' ? last[f] : base[f]; });
  if (ex.t !== 'cardio') { var lk = lastKgOf(exId); if (lk != null) o.kg = fmtKg(lk); }
  delete o.hk; delete o.hr;
  return o;
}
function addItems(ctx, ids){ var c = getCont(ctx); if (!c) return; ids.forEach(function(id){ c.items.push(newItem(id)); }); c.rest = false; markDirty(ctx); }
function removeItem(ctx, k){
  var c = getCont(ctx); if (!c) return;
  var idx = c.items.findIndex(function(x){ return x.k === k; }); if (idx < 0) return;
  var it = c.items.splice(idx, 1)[0]; markDirty(ctx); render();
  showToast('Quitaste ' + exById(it.ex).n, function(){ var cc = getCont(ctx); if (!cc) return; cc.items.splice(Math.min(idx, cc.items.length), 0, it); markDirty(ctx); });
}
/* T05 (U-01): el orden de fuerza se mueve por unidades. Una unidad es un grupo contiguo (misma letra) o un ejercicio
   solo. Dentro de su grupo un ejercicio cambia de lugar con su vecino; al llegar al borde se mueve el grupo entero, así
   que mover nunca divide A en A/B/A. Mover no cambia la letra: salir de un grupo es elegir «Solo». Un grupo heredado
   ya dividido se respeta tal como está (cada tramo es su propia unidad); no se reescribe para arreglarlo */
function unidades(str){ var out = [], cur = null; str.forEach(function(it){ if (it.g && cur && cur.g === it.g) cur.items.push(it); else { cur = { g: it.g || '', items: [it] }; out.push(cur); } }); return out; }
function plano(us){ return us.reduce(function(a, u){ return a.concat(u.items); }, []); }
function moveItem(ctx, k, dir){
  var c = getCont(ctx); if (!c) return false;
  var it = c.items.find(function(x){ return x.k === k; }); if (!it) return false;
  var type = isCardio(it), same = c.items.filter(function(x){ return isCardio(x) === type; });
  if (type) { var pos = same.indexOf(it), np = pos + dir; if (np < 0 || np >= same.length) return false; same.splice(pos, 1); same.splice(np, 0, it); applyOrder(c, type, same); markDirty(ctx); return true; }
  var us = unidades(same), ui = us.findIndex(function(u){ return u.items.indexOf(it) >= 0; }), u = us[ui], p = u.items.indexOf(it), q = p + dir;
  if (q >= 0 && q < u.items.length) { u.items.splice(p, 1); u.items.splice(q, 0, it); }
  else { var nu = ui + dir; if (nu < 0 || nu >= us.length) return false; us.splice(ui, 1); us.splice(nu, 0, u); }
  applyOrder(c, false, plano(us)); markDirty(ctx); return true;
}
/* arrastre: el orden que dejó el arrastre se ajusta a unidades. Si el grupo del ejercicio arrastrado sigue junto, vale su
   nuevo orden interno; si quedó separado, se mueve el grupo entero. Una unidad nunca queda dentro de otra: si se suelta
   entre dos miembros de un grupo, pasa después de ese grupo */
function ordenArrastre(c, k, ks){
  var str = c.items.filter(function(x){ return !isCardio(x); }), byK = dict(); str.forEach(function(x){ byK[x.k] = x; });
  var nueva = ks.map(function(kk){ return own(byK, kk) ? byK[kk] : null; }).filter(Boolean), it = own(byK, k) ? byK[k] : null;
  if (!it || nueva.length !== str.length) return null;
  var us = unidades(str), mu = us.find(function(u){ return u.items.indexOf(it) >= 0; }), dentro = function(x){ return mu.items.indexOf(x) >= 0; };
  var marcas = nueva.map(dentro), a = marcas.indexOf(true), b = marcas.lastIndexOf(true);
  var bloque = b - a + 1 === mu.items.length ? nueva.slice(a, b + 1) : mu.items.slice();
  var resto = us.filter(function(u){ return u !== mu; }), j = nueva.indexOf(it), sig = null;
  for (var i = j + 1; i < nueva.length; i++) if (!dentro(nueva[i])) { sig = nueva[i]; break; }
  var at = resto.length; if (sig) { var ui = resto.findIndex(function(u){ return u.items.indexOf(sig) >= 0; }); at = resto[ui].items[0] === sig ? ui : ui + 1; }
  resto.splice(at, 0, { g: mu.g, items: bloque });
  return plano(resto);
}
function applyOrder(c, type, sameOrdered){ var q = sameOrdered.slice(); c.items = c.items.map(function(x){ return isCardio(x) === type ? q.shift() : x; }); }
/* copiar una semana escribe cada día como su propio documento; un destino con algún día bloqueado no se toca */
function copyWeek(src, dst){ var s = S.weeks[src]; if (!s || weekBlocked(dst)) return; var w = S.weeks[dst] || (S.weeks[dst] = emptyWeek(dst)); w._local = true; w.blank = false; s.days.forEach(function(d, i){ w.days[i] = copiarBloques({ name: d.name, rest: d.rest, tipo: d.tipo || null, items: cloneItems(d.items) }, d); }); markWeekDays(dst); }
function loadTipo(ctx, id){ var t = S.tipos[id], d = getCont(ctx); if (!t || !d) return; d.name = t.name; d.items = lastKg(cloneItems(t.items), ctx.kind === 'day' ? fechaDe(ctx.ws, ctx.i) : null); d.tipo = id; d.rest = false; copiarBloques(d, t); markDirty(ctx); }
/* trae el peso más alto que anotaste la última vez en cada ejercicio */
/* peso de partida de un día nuevo: el último usado y, si en la última sesión se llegó al tope del rango en todas las
   series con el mismo peso, la siguiente carga del equipo, marcada en sug ("de>a") para poder deshacerla */
function lastKg(items, date){
  items.forEach(function(it){
    if (isCardio(it)) return;
    delete it.sug;
    var ex = exById(it.ex), lk = lastKgOf(it.ex);
    if (lk != null) it.kg = fmtKg(lk);
    var L = date ? lastLog(it.ex, date) : null; if (!L || L.time) return;
    var ev = window.Progresion.evaluar(L, topReps(it.reps) || L.top, setsN(it));
    if (ev.estado !== 'sube' || !(ev.w0 > 0)) return;
    var nx = nextKg(ex, ev.w0); if (!nx) return;
    it.kg = fmtKg(nx); it.sug = window.Progresion.escribirSug(ev.w0, nx);
  });
  return items;
}
function sugDe(it){ var g = window.Progresion.leerSug(it.sug); return g && Math.abs(num(it.kg) - g.a) < 0.05 ? g : null; }
function sugCount(d){ return d && d.items ? d.items.filter(sugDe).length : 0; }
/* semana nueva: misma distribución que la anterior, con la versión actual de cada día tipo */
function copyFromTipos(src, dst){
  var s = S.weeks[src]; if (!s || weekBlocked(dst)) return;
  var w = S.weeks[dst] || (S.weeks[dst] = emptyWeek(dst)); w._local = true; w.blank = false;
  s.days.forEach(function(d, i){
    var t = d.tipo && S.tipos[d.tipo];
    w.days[i] = t ? copiarBloques({ name: t.name, rest: false, tipo: d.tipo, items: lastKg(cloneItems(t.items), fechaDe(dst, i)) }, t) : copiarBloques({ name: d.name, rest: d.rest, tipo: null, items: lastKg(cloneItems(d.items), fechaDe(dst, i)) }, d);
  });
  markWeekDays(dst);
}
/* autollenado de la semana actual o la siguiente: solo con lectura definitiva de días y semanas antiguas, dentro del
   intervalo suscrito, sin ningún documento ni edición pendiente en sus siete fechas y sin marca de semana en blanco.
   Nunca desde render ni desde un snapshot de caché: se dispara al terminar la carga definitiva o al navegar */
var autoTried = {};
function autoFill(ws){
  if (S.dbState !== 'ok' || autoTried[ws]) return;
  if (!S.defin.d || S.legacyMode == null || (S.legacyMode && !S.defin.w) || !inRangoWeek(ws)) return;
  if (!S.proto.get || !S.proto.acquire) return;
  var cm = curMonday(); if (ws < cm || ws > shiftWeek(cm, 1) || weekBlocked(ws)) return;
  var w = S.weeks[ws]; if (hasContent(w) || (w && w.blank)) return;
  for (var i = 0; i < 7; i++) { var f = fechaDe(ws, i); if (S.ddocs[f] || dirty['d:' + f] || S.aislados['dias/' + f]) return; }
  var src = prevContentWeek(ws); if (!src) return;
  autoTried[ws] = true;
  if (autoFillCiclo(src, ws)) return;
  copyFromTipos(src, ws);
  showToast('Semana armada como la del ' + weekLabel(src) + ', con tus días tipo', function(){ clearWeekLocal(ws); });
}
function maybeAutoFill(){ if (!S.stack.length && S.tab === 'semana') autoFill(S.ws); }
/* vaciar una semana escribe vacío cada día que tenía contenido o documento y marca la semana en blanco (lunes) */
function clearWeekLocal(ws){ var w = S.weeks[ws]; if (!w) return; for (var i = 0; i < 7; i++) w.days[i] = emptyDay(); w.blank = true; w._local = true; markWeekDays(ws); }
function saveAsTipo(ctx, name){
  var d = getCont(ctx); name = (name || '').trim() || d.name || 'Día tipo';
  var existing = tiposList().find(function(t){ return norm(t.name) === norm(name); });
  var id = existing ? existing.id : 't_' + uid();
  S.tipos[id] = copiarBloques({ id: id, name: name, items: cloneItems(d.items), ejemplo: false }, d);
  markKey('t:' + id); d.tipo = id; if (!d.name) d.name = name; markDirty(ctx);
  return existing ? 'Día tipo ' + name + ' actualizado; se guarda solo.' : name + ' quedó como día tipo; se guarda solo.';
}
function shrink(file){
  return new Promise(function(resolve){
    if (!window.createImageBitmap) return resolve(file);
    createImageBitmap(file).then(function(bmp){
      var max = 900, sc = Math.min(1, max / Math.max(bmp.width, bmp.height));
      var cv = document.createElement('canvas'); cv.width = Math.round(bmp.width * sc); cv.height = Math.round(bmp.height * sc);
      cv.getContext('2d').drawImage(bmp, 0, 0, cv.width, cv.height);
      cv.toBlob(function(b){ resolve(b || file); }, 'image/jpeg', 0.82);
    }, function(){ resolve(file); });
  });
}
/* cada subida recuerda su formulario y su número de operación: la respuesta solo se aplica si ese formulario sigue
   abierto y no hubo otra subida ni «Quitar foto» después. Salir, cambiar de formulario o quitar la foto la invalidan */
var upSeq = 0;
function uploadPhoto(file){
  var form = S.form;
  if (!file || !form) return;
  if (!S.assets) { showToast('No se pueden subir fotos desde esta vista.'); return; }
  if (!/^image\//.test(file.type)) { showToast('Elige una imagen en JPG, PNG o WebP.'); return; }
  var op = ++upSeq, assets = S.assets;
  form.upOp = op; form.uploading = true; render();
  function current(){ return S.form === form && form.upOp === op; }
  shrink(file).then(function(blob){
    var type = ['image/jpeg','image/png','image/webp','image/gif'].indexOf(blob.type) >= 0 ? blob.type : 'image/jpeg';
    return assets.upload(blob, { type: type });
  }).then(function(r){
    if (!current()) return;
    var id = r && typeof r.id === 'string' ? r.id : '';
    if (ASSET_RE.test(id)) form.img = id; else showToast('No se pudo subir la foto. Intenta de nuevo.');
  }, function(err){
    if (!current()) return;
    var c = err && err.code;
    showToast(c === 'too_large' ? 'La foto pesa demasiado. Prueba con una más liviana.' : c === 'unsupported_type' ? 'Ese formato no se puede subir. Usa JPG o PNG.' : c === 'quota_or_state' ? 'Se llenó el espacio para fotos.' : 'No se pudo subir la foto. Intenta de nuevo.');
  }).then(function(){
    if (form.upOp !== op) return;
    form.uploading = false;
    var t = top(); if (S.form === form && t && t.v === 'crear') render();
  });
}
function saveCustom(){
  var f = S.form; if (!f) return;
  var n = (f.n || '').trim();
  if (f.id && own(S.custom, f.id) && S.custom[f.id]._ro) { S.formErr = 'Este ejercicio tiene datos que la app no reconoce; se conserva sin cambios y no se puede editar.'; render(); return; }
  if (!n) { S.formErr = 'Escribe un nombre para el ejercicio.'; render({ focus: '#c-n' }); return; }
  var id = f.id || ('c_' + uid()), prev = S.custom[id] || {}, edit = !!f.id && own(S.custom, f.id);
  /* T04 (D-08): al editar se conservan tipo y carga (y el equipo de un propio sin carga, que decide su lectura); los
     campos que la app no conoce se vuelven a escribir */
  var t = edit ? (prev.t === 'cardio' ? 'cardio' : 'fuerza') : (f.t === 'cardio' ? 'cardio' : 'fuerza');
  var carga = t === 'cardio' ? null : edit ? (CARGAS.indexOf(prev.carga) >= 0 ? prev.carga : null) : (CARGAS.indexOf(f.carga) >= 0 ? f.carga : cargaPorEquipo(f.e));
  var e = edit && t === 'fuerza' && !carga ? prev.e : f.e;
  S.custom[id] = { n: n, t: t, g: t === 'cardio' ? 'Cardio' : f.g, s: t === 'cardio' ? [] : f.s.filter(function(g){ return g !== f.g; }), e: e, p: String(f.p || '').split('\n').map(function(s){ return s.trim(); }).filter(Boolean), img: f.img || null, deleted: false, createdAt: prev.createdAt || new Date().toISOString() };
  if (carga) S.custom[id].carga = carga;
  if (edit && prev._x) S.custom[id]._x = clone(prev._x);
  markKey('c:' + id);
  var fromLib = S.stack.length > 1 && S.stack[S.stack.length - 2].v === 'lib';
  S.form = null; S.formErr = '';
  if (!f.id) { S.libT = f.t; S.libG = 'Todos'; S.libQ = ''; if (fromLib && S.sel.indexOf(id) < 0) S.sel.push(id); }
  pop();
  showToast(f.id ? 'Cambios anotados; se guardan solos.' : 'Creaste ' + n + (fromLib ? '. Ya quedó seleccionado.' : ''));
}

/* eventos */
document.addEventListener('click', function(e){
  var el = e.target.closest('[data-a]'); if (!el || !document.getElementById('app').contains(el)) return;
  if (el.disabled) return;
  var a = el.dataset.a, d = el.dataset, t = top(), ctx = curCtx();
  navTrig = el; setTimeout(function(){ navTrig = null; }, 0);
  if (el.closest('label.row') && a === 'open-det') e.preventDefault();
  /* una semana aislada no se rellena ni se reemplaza desde la interfaz */
  if (['new-copy', 'new-tipos', 'new-blank', 'hist-copy', 'hist-copy-ok', 'clearweek-ok'].indexOf(a) >= 0 && weekBlocked(S.ws)) { showToast(weekLocked(S.ws) ? 'Esta semana tiene datos que la app no reconoce; se conserva sin cambios.' : 'Esta semana tiene días guardados en el formato anterior o sin reconocer; se conserva sin cambios hasta migrarla.'); return; }
  switch (a) {
    case 'tab': S.tab = d.t; S.stack = []; S.confirm = null; S.libQ = ''; maybeAutoFill(); render({ nav: true }); break;
    case 'wk-prev': S.ws = shiftWeek(S.ws, -1); S.confirm = null; ensureRango(S.ws); maybeAutoFill(); render(); break;
    case 'wk-next': S.ws = shiftWeek(S.ws, 1); S.confirm = null; ensureRango(S.ws); maybeAutoFill(); render(); break;
    case 'wk-today': S.ws = curMonday(); S.confirm = null; ensureRango(S.ws); maybeAutoFill(); render(); break;
    case 'wk-go': S.ws = d.ws; S.tab = 'semana'; S.stack = []; S.confirm = null; ensureRango(S.ws); maybeAutoFill(); render({ nav: true }); break;
    case 'open-dia': push({ v: 'dia', ws: S.ws, i: +d.i }); break;
    case 'open-resumen': push({ v: 'resumen' }); break;
    case 'back': pop(); break;
    case 'cancel': S.confirm = null; render(); break;
    case 'new-copy': var src = prevContentWeek(S.ws); if (src) { copyWeek(src, S.ws); render(); showToast('Copiaste la semana del ' + weekLabel(src)); } break;
    case 'new-tipos': if (weekBlocked(S.ws)) break; if (!S.weeks[S.ws]) { S.weeks[S.ws] = emptyWeek(S.ws); S.weeks[S.ws]._local = true; } push({ v: 'asignar', ws: S.ws, step: 0 }); break;
    /* semana en blanco a propósito: un solo documento, el del lunes, con la marca; los demás días no se crean */
    case 'new-blank': if (weekBlocked(S.ws)) break; var nb = S.weeks[S.ws] || (S.weeks[S.ws] = emptyWeek(S.ws)); nb._local = true; nb.blank = true; markKey(dkey(S.ws, 0)); render(); break;
    case 'asignar-pick':
      var dc = { kind: 'day', ws: t.ws, i: t.step }, day = getCont(dc);
      if (d.id !== '__skip' && dayKept(dc)) showToast(DAYS[t.step] + ' tiene entrenamientos registrados; se conserva tal cual.');
      else if (d.id === '__rest') { day.rest = true; day.items = []; day.tipo = null; day.name = ''; markDirty(dc); }
      else if (d.id !== '__skip') loadTipo(dc, d.id);
      if (t.step < 6) { t.step++; render({ nav: true }); } else { pop(); showToast('Semana armada. Ajusta cada día si hace falta.'); }
      break;
    case 'asignar-prev': if (t.step > 0) { t.step--; render({ nav: true }); } break;
    case 'cargar': if (dayKept(ctx)) { showToast('Este día tiene entrenamientos registrados; se conserva. Agrega ejercicios en lugar de cargar un día tipo.'); break; } push({ v: 'cargar', ws: t.ws, i: t.i }); break;
    case 'cargar-pick': var cctx = { kind: 'day', ws: t.ws, i: t.i }; if (dayKept(cctx)) { pop(); showToast('Este día tiene entrenamientos registrados; se conserva.'); break; } loadTipo(cctx, d.id); pop(); showToast('Cargaste ' + (S.tipos[d.id] ? S.tipos[d.id].name : 'el día tipo')); break;
    case 'goto-tipos': S.tab = 'tipos'; S.stack = []; render({ nav: true }); break;
    case 'guardar-tipo': S.confirm = 'guardarTipo'; S.tname = (getCont(ctx) || {}).name || ''; render({ focus: '#f-tname', select: true }); break;
    case 'guardar-tipo-ok': var msg = saveAsTipo(ctx, S.tname); S.confirm = null; render(); showToast(msg); break;
    case 'item-note': S.noteOpen[d.k] = true; render({ focus: '#' + cssEsc(fid(d.k, 'note')) }); break;
    case 'item-del': var rc = getCont(ctx), ri = rc && rc.items.find(function(x){ return x.k === d.k; }); if (ri && itemKept(ri, ctxPast(ctx))) { showToast('Este ejercicio tiene registros (series anotadas o cardio realizado); se conserva.'); break; } removeItem(ctx, d.k); break;
    case 'undo': var u = S.toast && S.toast.undo; S.toast = null; if (u) u(); render(); break;
    case 'open-lib': S.sel = []; S.libQ = ''; push({ v: 'lib', ctx: ctx }); break;
    case 'lib-t': S.libT = d.t; if (d.t === 'cardio') S.libG = 'Todos'; render(); break;
    case 'lib-g': S.libG = d.g; render(); break;
    case 'lib-add': var n = S.sel.length; if (n) { addItems(t.ctx, S.sel); S.sel = []; pop(); showToast('Agregaste ' + (n === 1 ? '1 ejercicio' : n + ' ejercicios')); } break;
    case 'open-det': S.detMode = RM ? 'fin' : 'mov'; push({ v: 'det', id: d.id, ctx: t && t.v === 'lib' ? t.ctx : null, swap: !!(t && t.v === 'swap') }); break;
    case 'swap-open':
      var swc = getCont(ctx), swi = swc && swc.items.find(function(x){ return x.k === d.k; }); if (!swi) break;
      if (itemKept(swi, ctxPast(ctx))) { showToast('Este ejercicio tiene registros (series anotadas o cardio realizado); se conserva. Agrega otro ejercicio en lugar de cambiarlo.'); break; }
      var swx = exById(swi.ex); S.swapEx = swi.ex; S.swapPick = null; S.libQ = '';
      S.libT = swx.t === 'cardio' ? 'cardio' : 'fuerza'; S.libG = swx.t !== 'cardio' && GROUPS.indexOf(swx.g) >= 0 ? swx.g : 'Todos';
      push({ v: 'swap', ctx: ctx, k: d.k }); break;
    case 'swap-pick': swapPick(d.id); break;
    case 'swap-do': if (t && t.v === 'swap' && S.swapPick) doSwap(t.ctx, t.k, S.swapPick, d.all === '1'); break;
    case 'swap-cancel': S.swapPick = null; render(); break;
    case 'det-swap': var dsid = t.id; pop(); swapPick(dsid); break;
    case 'det-mode': S.detMode = d.m; render(); break;
    case 'det-add': addItems(t.ctx, [t.id]); S.sel = []; var nm = exById(t.id).n; pop(2); showToast('Agregaste ' + nm); break;
    case 'det-sel': var ix = S.sel.indexOf(t.id); if (ix >= 0) S.sel.splice(ix, 1); else S.sel.push(t.id); pop(); break;
    case 'open-crear': S.form = { n: '', t: S.libT || 'fuerza', g: S.libG !== 'Todos' ? S.libG : 'Pecho', s: [], e: 'Máquina', p: '', img: null, carga: cargaPorEquipo('Máquina'), cargaAuto: true }; S.formErr = ''; push({ v: 'crear' }); break;
    case 'form-t': if (S.form && !S.form.id) { S.form.t = d.t; render(); } break;
    case 'form-carga': if (S.form && !S.form.id && CARGAS.indexOf(d.c) >= 0) { S.form.carga = d.c; S.form.cargaAuto = false; render(); } break;
    case 'ex-variant': if (S.form && S.form.id) { var vf = S.form; S.form = { n: vf.n + ' (variante)', t: vf.t, g: vf.g, s: vf.s.slice(), e: vf.e, p: vf.p, img: null, carga: vf.t === 'fuerza' ? (vf.carga || cargaPorEquipo(vf.e)) : null, cargaAuto: false }; S.formErr = ''; render({ focus: '#c-n', select: true }); } break;
    case 'form-sec': var si = S.form.s.indexOf(d.g); if (si >= 0) S.form.s.splice(si, 1); else S.form.s.push(d.g); render(); break;
    case 'form-nophoto': if (S.form) { S.form.img = null; S.form.upOp = 0; S.form.uploading = false; } render(); break;
    case 'crear-save': saveCustom(); break;
    case 'ex-edit': var ex = exById(d.id); if (!ex.custom || ex.missing || ex.ro) break; S.form = { id: ex.id, n: ex.n, t: ex.t, g: ex.t === 'cardio' ? 'Pecho' : ex.g, s: ex.s.slice(), e: ex.e, p: ex.p.join('\n'), img: ex.img, carga: ex.carga }; S.formErr = ''; push({ v: 'crear' }); break;
    case 'ex-del': S.confirm = 'exdel'; render(); break;
    case 'ex-del-ok': if (own(S.custom, t.id) && S.custom[t.id]._ro) { S.confirm = null; render(); showToast('Este ejercicio tiene datos que la app no reconoce; se conserva sin cambios.'); break; } if (S.custom[t.id]) { S.custom[t.id].deleted = true; markKey('c:' + t.id); } pop(); showToast('Quitaste el ejercicio de la biblioteca; los días que lo usan lo conservan.'); break;
    case 'tipo-new': var tid = 't_' + uid(); S.tipos[tid] = { id: tid, name: '', items: [], ejemplo: false, _local: true }; push({ v: 'tipo', id: tid }); break;
    case 'open-tipo': push({ v: 'tipo', id: d.id }); break;
    case 'tipo-del': S.confirm = 'tipodel'; render(); break;
    case 'tipo-del-ok': var tname = (S.tipos[t.id] || {}).name; delete S.tipos[t.id]; markKey('t:' + t.id); S.stack.pop(); S.confirm = null; render({ nav: true }); showToast('Quitaste ' + (tname || 'el día tipo') + ' de tus días tipo.'); break;
    case 'day-clear': if (dayKept(ctx)) { showToast('Este día tiene entrenamientos registrados; se conserva.'); break; } S.confirm = 'dayclear'; render(); break;
    case 'bloque-edit': S.bloqueEdit = el.dataset.s; render(); break;
    case 'bloque-add': { var ba = getCont(ctx); if (!ba) break; var bs = el.dataset.s; ba[bs] = (ba[bs] || []).concat([{ n: '', t: '' }]); markDirty(ctx); render(); var bi = document.querySelector('[data-f="bloque"][data-s="' + bs + '"][data-i="' + (ba[bs].length - 1) + '"][data-p="n"]'); if (bi) bi.focus(); break; }
    case 'bloque-del': { var bd = getCont(ctx); if (!bd) break; var bds = el.dataset.s; bd[bds] = (bd[bds] || []).filter(function(x, i){ return i !== +el.dataset.i; }); if (!bd[bds].length) { delete bd[bds]; delete bd[BLOQUE_OK[bds]]; } markDirty(ctx); render(); break; }
    case 'bloque-def': { var bf = getCont(ctx); if (!bf) break; bf[el.dataset.s] = bloqueDef(el.dataset.s, el.dataset.q); markDirty(ctx); render(); break; }
    case 'day-clear-ok': var dd = getCont(ctx); if (!dd || dayKept(ctx)) { S.confirm = null; render(); break; } dd.items = []; dd.name = ''; dd.rest = false; dd.tipo = null; copiarBloques(dd, null); markDirty(ctx); S.confirm = null; render(); break;
    case 'hist-copy': if (weekKept(S.ws)) { showToast('Esta semana tiene entrenamientos registrados; se conserva. Copia sobre una semana sin registros.'); break; } if (S.weeks[S.ws] && hasContent(S.weeks[S.ws])) { S.confirm = 'hist:' + d.ws; render(); } else { copyWeek(d.ws, S.ws); S.tab = 'semana'; S.stack = []; S.confirm = null; render({ nav: true }); showToast('Copiaste ' + weekLabel(d.ws) + ' en ' + weekLabel(S.ws)); } break;
    case 'hist-copy-ok': if (weekKept(S.ws)) { S.confirm = null; render(); showToast('Esta semana tiene entrenamientos registrados; se conserva.'); break; } copyWeek(d.ws, S.ws); S.tab = 'semana'; S.stack = []; S.confirm = null; render({ nav: true }); showToast('Copiaste ' + weekLabel(d.ws) + ' en ' + weekLabel(S.ws)); break;
    case 'open-hist': push({ v: 'hist' }); break;
    case 'open-peso': openPeso(d.d || todayIso()); break;
    case 'peso-pick': pickPeso(d.d, null); break;
    case 'peso-save': savePeso(); break;
    case 'peso-more': S.pesoMore = (S.pesoMore || 5) + 20; render(); break;
    case 'open-medidas': openMedidas(d.d || todayIso()); break;
    case 'med-save': saveMedidas(); break;
    case 'open-perfil': openPerfil(); break;
    case 'open-datos': openDatos(); break;
    case 'new-ciclo': openCiclo('armar'); break;
    case 'open-reorg': openCiclo('reorg'); break;
    case 'ciclo-n': t.dias = cicloDiasPara(t.ws, t.modo, +d.n); render(); break;
    case 'ciclo-dia': var cdi = +d.i, cpos = t.dias.indexOf(cdi); if (cpos >= 0) t.dias.splice(cpos, 1); else t.dias.push(cdi); t.dias.sort(function(a, b){ return a - b; }); render(); break;
    case 'ciclo-ok': aplicarCiclo(t); break;
    case 'ciclo-descarga': t.descarga = !!el.checked; render(); break;
    case 'corr-revisar': S.corr = S.corr || { modo: 'barra', delta: (cicloCfg().correcciones || []).length ? '' : '-5' }; if (!num(S.corr.delta)) { showToast('Escribe la diferencia en kg, por ejemplo -5.'); break; } S.corr.discos = false; S.corr.resumen = corrResumen(S.corr.modo, num(S.corr.delta)); S.confirm = 'corregir'; render(); break;
    case 'corr-discos': S.corr = S.corr || { modo: 'barra', delta: (cicloCfg().correcciones || []).length ? '' : '-5' }; if (S.corr.modo !== 'barra' && S.corr.modo !== 'barraez') S.corr.modo = 'barra'; S.corr.discos = true; S.corr.resumen = corrResumen(S.corr.modo, 'discos'); if (!S.corr.resumen.valores) { showToast('Todos los pesos de ' + CORR_NOMBRES[S.corr.modo].toLowerCase() + ' ya coinciden con los discos.'); S.corr.discos = false; break; } S.confirm = 'corregir'; render(); break;
    case 'corr-cancel': S.confirm = null; if (S.corr) { S.corr.resumen = null; S.corr.discos = false; } render(); break;
    case 'corr-aplicar': if (S.corr && S.confirm === 'corregir') { var cn = corrAplicar(S.corr.modo, S.corr.discos ? 'discos' : num(S.corr.delta)); S.confirm = null; S.corr = null; showToast('Corrección aplicada: ' + cn + ' valores ajustados.'); render(); } break;
    case 'descarga-armar': var dws = shiftWeek(curMonday(), 1); openCiclo(S.weeks[dws] && hasContent(S.weeks[dws]) ? 'reorg' : 'armar', dws, true); break;
    case 'descarga-despues': S.descargaIgnorada = shiftWeek(curMonday(), 1); render(); break;
    case 'open-ciclocfg': push({ v: 'ciclocfg' }); break;
    case 'cc-mover': cicloEditar(function(c){ c.orden = window.Ciclo.mover(c.orden, +d.i, +d.dir); }); break;
    case 'cc-quitar': cicloEditar(function(c){ c.orden.splice(+d.i, 1); }); break;
    case 'cc-agregar': cicloEditar(function(c){ if (c.orden.indexOf(d.id) < 0) c.orden.push(d.id); }); break;
    case 'cc-dia': cicloEditar(function(c){ var n = +d.n, i = +d.i, arr = c.dias[n].slice(), q = arr.indexOf(i); if (q >= 0) { if (arr.length > 1) arr.splice(q, 1); } else arr.push(i); arr.sort(function(a, b){ return a - b; }); c.dias[n] = arr; if (arr.length !== n) c.dias[n] = arr; }); break;
    case 'resp-crear': respaldoCrear(); break;
    case 'resp-restaurar-ok': respaldoRestaurar(); break;
    case 'resp-cancel': S.confirm = null; if (S.dform) { S.dform.insp = null; S.dform.err = ''; } render(); break;
    case 'perfil-sexo': if (S.fform) { S.fform.sexo = d.s === 'M' ? 'M' : 'H'; render(); } break;
    case 'perfil-save': savePerfil(); break;
    case 'sug-undo': var sc = getCont(ctx), si = sc && sc.items.find(function(x){ return x.k === d.k; }), sg = si && window.Progresion.leerSug(si.sug); if (sg) { si.kg = fmtKg(sg.de); delete si.sug; clearDrafts(ctx, si.k, 'kg'); markDirty(ctx); render(); } break;
    case 'timer-start': if (window.Cronometro) window.Cronometro.iniciar(+d.s, d.l); break;
    case 'use-kg': var uc = getCont(ctx), ui = uc && uc.items.find(function(x){ return x.k === d.k; }); if (ui) { ui.kg = fmtKg(+d.v); clearDrafts(ctx, ui.k, 'kg'); markDirty(ctx); render(); } break;
    case 'fz-more': S.fzMore = (S.fzMore || 6) + 20; render(); break;
    case 'prog-m': S.progM = d.m === 'kg' ? 'kg' : 'vol'; render(); break;
    case 'move-open': S.confirm = 'move'; render(); break;
    case 'move-to':
      var mws = t.ws, msrc = t.i, mdst = +d.i, mw = S.weeks[mws];
      /* un día con registros se conserva en su fecha: no se mueve ni se intercambia, ni como origen ni como destino */
      if (mw && mdst !== msrc && (dayKept({ kind: 'day', ws: mws, i: msrc }) || dayKept({ kind: 'day', ws: mws, i: mdst }))) { S.confirm = null; render(); showToast('Un día con entrenamientos registrados se conserva en su fecha; no se mueve ni se intercambia.'); break; }
      if (mw && mdst !== msrc && (dayLocked(fechaDe(mws, msrc)) || dayLocked(fechaDe(mws, mdst)))) { S.confirm = null; render(); showToast('Ese día no se puede editar ahora; no se mueve ni se intercambia.'); break; }
      if (mw && mdst !== msrc) {
        var ma = mw.days[msrc], mb = mw.days[mdst];
        mw.days[msrc] = mb; mw.days[mdst] = ma; markKey(dkey(mws, msrc)); markKey(dkey(mws, mdst));
        var mnm = ma.rest ? 'el descanso' : (ma.name || dayName(ma, dayStats(ma)));
        var mswap = mb.items.length || mb.rest;
        pop();
        showToast((mswap ? 'Intercambiaste ' : 'Moviste ') + mnm + (mswap ? ' con el ' : ' al ') + DAYS[mdst].toLowerCase() + ' ' + dayDate(mws, mdst).getDate(), function(){ var w2 = S.weeks[mws]; if (!w2 || dayLocked(fechaDe(mws, msrc)) || dayLocked(fechaDe(mws, mdst))) return; var x = w2.days[msrc]; w2.days[msrc] = w2.days[mdst]; w2.days[mdst] = x; markKey(dkey(mws, msrc)); markKey(dkey(mws, mdst)); });
      }
      break;
    case 'clearweek': if (weekKept(S.ws)) { showToast('Esta semana tiene entrenamientos registrados; se conserva.'); break; } S.confirm = 'clearweek'; render(); break;
    case 'clearweek-ok': if (weekKept(S.ws) || weekBlocked(S.ws)) { S.confirm = null; render(); break; } clearWeekLocal(S.ws); S.confirm = null; render(); showToast('Vaciaste el plan de ' + weekLabel(S.ws)); break;
    case 'cola-retry': retryAll(); break;
    case 'cola-ver': push({ v: 'cola' }); break;
    case 'cola-reconectar': reconnect(); break;
    case 'cola-descargar': colaDownload(); break;
    case 'open-mig': push({ v: 'migracion' }); break;
    case 'mig-ensayo': migEnsayo(); break;
    case 'mig-ejecutar': migEjecutar(migEstado() === 'incompleta'); break;
    case 'mig-revertir': migRevertir(); break;
    case 'mig-descargar': migDownload(); break;
    /* conflicto del mismo día (DEC-01 B): el usuario decide; la versión que no se conserva queda copiada */
    case 'conf-mia': {
      var ce = S.cola[d.k]; if (!ce || ce.why !== 'conflicto') break;
      var cf = d.k.slice(2);
      /* la otra versión se copia y se comprueba antes de reemplazarla; si no se puede, no se envía nada */
      if (ce.alt && ce.alt.body && !keepDesplazada(cf, ce.alt.body, ce.alt.rev, isObj(ce.alt.body) && typeof ce.alt.body.base === 'string' ? ce.alt.body.base : null, 'reemplazada', { rev: ce.rev, base: ce.base })) { showToast('No se pudo guardar la copia de la otra versión en este navegador; tu cambio sigue pendiente y nada se reemplazó.'); break; }
      ce.base = ce.alt ? ce.alt.rev : null; ce.body.base = ce.base; delete ce.alt; ce.status = 'pendiente'; ce.why = ''; ce.attempts = 0; ce.warned = false; ce.durable = colaPut(d.k, ce);
      flush(d.k); render(); showToast('Tu versión del ' + diaLabel(cf) + ' se envía y reemplaza la otra, que queda copiada en «Versiones desplazadas».'); break;
    }
    case 'conf-otra': {
      var co = S.cola[d.k]; if (!co || co.why !== 'conflicto') break;
      var cof = d.k.slice(2);
      /* la versión propia se copia y se comprueba antes de retirar el borrador duradero; si falla, se conserva el borrador */
      if (!keepDesplazada(cof, co.body, co.rev, co.base, 'descartada', co.alt ? { rev: co.alt.rev } : null)) { showToast('No se pudo guardar la copia de tu versión en este navegador; tu borrador sigue pendiente y no se descartó.'); break; }
      clearTimeout(timers[d.k]); delete timers[d.k]; delete S.cola[d.k]; delete dirty[d.k]; colaDrop(d.k);
      if (co.alt && co.alt.body) { S.ddocs[cof] = normDay(clone(co.alt.body), cof); S.dmeta[cof] = metaDia(co.alt.body); } else { delete S.ddocs[cof]; delete S.dmeta[cof]; }
      rebuildWeeks(); refreshSave(); renderPend(); render(); showToast('Se conserva la versión del otro dispositivo; la tuya queda copiada en «Versiones desplazadas».'); break;
    }
    case 'desp-usar': {
      var dp = S.desplazadas[d.k]; if (!dp) break;
      var df = dp.fecha; if (dayLocked(df)) { showToast('Ese día no se puede editar ahora.'); break; }
      var dws = wsOf(df), dw = S.weeks[dws] || (S.weeks[dws] = emptyWeek(dws)); dw._local = true; dw.days[wd(df)] = normDay(clone(dp.body), df);
      markKey('d:' + df); render(); showToast('La copia vuelve como edición nueva del ' + diaLabel(df) + ' y se envía con las reglas de siempre.'); break;
    }
    case 'desp-descartar': {
      var dd2 = S.desplazadas[d.k]; if (!dd2) break;
      if (dd2.slot && !quitarSlot(dd2.slot)) { showToast('No se pudo descartar: el navegador no permitió borrar esta copia. Sigue aquí, íntegra y copiable.'); break; }
      delete S.desplazadas[d.k]; render(); showToast('Copia descartada de este dispositivo.'); break;
    }
    case 'her-aplicar': {
      var he = S.heredados[d.k]; if (!he) break;
      var hi = +d.i, hws = d.k.slice(2), hf = fechaDe(hws, hi), hst = herEstado(he, hi);
      if (!hst.src || dayLocked(hf)) { showToast('Ese día no se puede aplicar ahora.'); break; }
      var hw = S.weeks[hws] || (S.weeks[hws] = emptyWeek(hws)); hw._local = true; hw.days[hi] = hst.src;
      he.aplicados = he.aplicados || {}; he.aplicados[hi] = true;
      markKey('d:' + hf); render(); showToast('El ' + diaLabel(hf) + ' del pendiente antiguo vuelve como edición nueva.'); break;
    }
    case 'her-descartar': {
      var hd = S.heredados[d.k]; if (!hd) break;
      if (!quitarSlot(hd.slot)) { showToast('No se pudo descartar: el navegador no permitió borrar esta copia. Sigue aquí, íntegra y copiable.'); break; }
      delete S.heredados[d.k]; render(); showToast('Pendiente antiguo descartado de este dispositivo.'); break;
    }
    case 'cola-descartar': {
      /* el descarte se da por hecho solo si al releer la copia ya no está; si el navegador lo rechaza, el texto sigue
         apartado, visible y copiable, y se informa el fallo. No toca la db ni la entrada válida del mismo documento */
      var ro = S.colaRotos[d.k]; if (!ro) break;
      var gone = false;
      try { localStorage.removeItem(ro.slot); gone = localStorage.getItem(ro.slot) === null; } catch (x) { gone = false; }
      if (!gone) { showToast('No se pudo descartar: el navegador no permitió borrar esta copia. El texto sigue aquí, íntegro y copiable.'); break; }
      delete S.colaRotos[d.k];
      var le = S.cola[ro.key]; if (le && le.durable === false) le.durable = colaPut(ro.key, le);
      render(); showToast('Borrador ilegible descartado de este dispositivo.'); break;
    }
  }
});
document.addEventListener('input', function(e){
  var el = e.target, f = el.dataset && el.dataset.f; if (!f) return;
  if (f === 'name') { var c = getCont(curCtx()); if (c) { c.name = el.value; markDirty(curCtx()); } }
  else if (f === 'bloque') { var bc = getCont(curCtx()); if (bc && bc[el.dataset.s] && bc[el.dataset.s][+el.dataset.i]) { bc[el.dataset.s][+el.dataset.i][el.dataset.p] = el.value; markDirty(curCtx()); } }
  else if (f === 'item') {
    var ictx = curCtx(), cc = getCont(ictx); if (!cc) return;
    var it = cc.items.find(function(x){ return x.k === el.dataset.k; }); if (!it) return;
    var ip = el.dataset.p;
    /* series y kg planeados: solo un texto completo y válido cambia el estado; si no, se marca y se conserva lo anterior */
    if (ip === 'sets' || ip === 'kg') {
      var ires = (ip === 'sets' ? vSets : vKg)(el.value);
      noteField(el, ictx, it, ip, null, ires);
      if (!ires.ok || it[ip] === ires.v) return;
      it[ip] = ires.v;
      if (ip === 'kg' && it.sug) { delete it.sug; var sb = el.closest('.excard') && el.closest('.excard').querySelector('.sugbar'); if (sb) sb.hidden = true; }
    } else it[ip] = el.value;
    markDirty(ictx); updateLive();
  }
  else if (f === 'libq') { S.libQ = el.value; updateLibList(); }
  else if (f === 'form') { if (!S.form) return; S.form[el.dataset.p] = el.value; if (el.dataset.p === 'e' && !S.form.id && S.form.cargaAuto !== false) { S.form.carga = cargaPorEquipo(el.value); render(); } else if (el.dataset.p === 'g' && S.form.t === 'fuerza') render(); }
  else if (f === 'tname') { S.tname = el.value; }
  else if (f === 'grest') { var gc = getCont(curCtx()); if (gc) { var gs = gc.items.filter(function(x){ return !isCardio(x); }), g0 = gs.findIndex(function(x){ return x.k === el.dataset.k0; }); if (g0 >= 0) { for (var gi = g0; gi < gs.length && gs[gi].g === gs[g0].g; gi++) gs[gi].rest = el.value; } else gs.forEach(function(x){ if (x.g === el.dataset.g) x.rest = el.value; }); markDirty(curCtx()); } }
  else if (f === 'hk' || f === 'hr') {
    var hctx = curCtx(), hc = getCont(hctx); if (!hc) return; var hit = hc.items.find(function(x){ return x.k === el.dataset.k; }); if (!hit) return;
    var hi = +el.dataset.i, hres = (f === 'hk' ? vKg : vReps)(el.value);
    noteField(el, hctx, hit, f, hi, hres);
    if (!hres.ok) return;
    if (f === 'hk') { if (!setKg(hit, hi, hres.v)) return; }
    else { if (!setRep(hit, hi, hres.v)) return; var k0 = kgPart(hit.kg); if (kgPart(kgRaw(hit)[0]) == null && k0 != null) setKg(hit, 0, vKg(hit.kg).ok ? hit.kg : String(k0)); }
    markDirty(hctx); updateLog(hit); updateLive();
  }
  else if (f === 'pkg') { if (S.pform) S.pform.kg = el.value; }
  else if (f === 'mval') { if (S.mform) { S.mform[el.dataset.p] = el.value; var pv = document.querySelector('[data-live="mprev"]'); if (pv) pv.innerHTML = mPreview(); } }
  else if (f === 'fval') { if (S.fform) { S.fform[el.dataset.p] = el.value; updPerfilLive(); } }
});
document.addEventListener('change', function(e){
  var el = e.target, f = el.dataset && el.dataset.f; if (!f) return;
  if (f === 'hk' || f === 'hr' || (f === 'item' && (el.dataset.p === 'kg' || el.dataset.p === 'sets'))) {
    var nctx = curCtx(), nc = getCont(nctx), nit = nc && nc.items.find(function(x){ return x.k === el.dataset.k; });
    if (nit) settleField(el, nctx, nit, f === 'item' ? el.dataset.p : f + '|' + el.dataset.i);
  }
  if (f === 'bloqueok') { var okc = getCont(curCtx()); if (okc) { if (el.checked) okc[BLOQUE_OK[el.dataset.s]] = true; else delete okc[BLOQUE_OK[el.dataset.s]]; markDirty(curCtx()); var okb = el.closest('.sechead') && el.closest('.sechead').nextElementSibling; if (okb) okb.classList.toggle('ok', el.checked); } }
  else if (f === 'rest') { var ctx = curCtx(), c = getCont(ctx); if (c) { c.rest = el.checked; markDirty(ctx); render(); } }
  else if (f === 'item' && el.dataset.p === 'sets') {
    var sc = getCont(curCtx()), sit = sc && sc.items.find(function(x){ return x.k === el.dataset.k; });
    if (sit && byData('[data-vol]', 'vol', sit.k).length && byData('[data-f="hr"]', 'k', sit.k).length !== logN(sit)) {
      setTimeout(function(){ var ae = document.activeElement, sel = ae && ae.id ? '#' + cssEsc(ae.id) : null; render(sel ? { focus: sel } : {}); }, 0);
    }
  }
  else if (f === 'libsel') {
    var id = el.dataset.id, ix = S.sel.indexOf(id);
    if (el.checked && ix < 0) S.sel.push(id); if (!el.checked && ix >= 0) S.sel.splice(ix, 1);
    var row = el.closest('.row'); if (row) row.classList.toggle('on', el.checked);
    var btn = document.querySelector('[data-live="libadd"]'); if (btn) { btn.textContent = addLabel(S.sel.length); btn.disabled = !S.sel.length; }
  }
  else if (f === 'photo') { uploadPhoto(el.files && el.files[0]); el.value = ''; }
  else if (f === 'resp-file') { respaldoElegir(el.files && el.files[0]); el.value = ''; }
  else if (f === 'corr') { S.corr = S.corr || { modo: 'barra', delta: (cicloCfg().correcciones || []).length ? '' : '-5' }; S.corr[el.dataset.p] = el.value; S.corr.resumen = null; S.corr.discos = false; if (S.confirm === 'corregir') { S.confirm = null; render(); } }
  else if (f === 'equipo') {
    var ep = el.dataset.p, ev = el.value;
    /* sin volver a dibujar la pantalla (el campo sigue con el foco): se guarda y se actualiza solo el texto de cargas */
    var ec = cicloCfg(), eq = ec.equipo || {};
    if (ep === 'descargaCada' || ep === 'factorDescarga') { var dv = parseFloat(ev.replace(',', '.')); if (ep === 'descargaCada') ec.descargaCada = dv; else ec.factorDescarga = dv / 100; ec = window.Ciclo.normalizar(ec); ec.equipo = window.Progresion.normalizarEquipo(ec.equipo); S.cicloDocs.principal = ec; markKey('k:principal'); return; }
    if (ep === 'discos') eq.discos = ev.split(/[,;\s]+/).map(function(x){ return parseFloat(x.replace(',', '.')); }).filter(function(x){ return isFinite(x) && x > 0; }); else eq[ep] = parseFloat(ev.replace(',', '.'));
    ec.equipo = window.Progresion.normalizarEquipo(eq); S.cicloDocs.principal = ec; markKey('k:principal');
    var lc = document.querySelector('[data-live="cargas"]'); if (lc) lc.textContent = 'Cargas posibles con barra: ' + window.Progresion.cargasBarra(ec.equipo.barra, ec.equipo.discos).map(fmtKg).join(', ') + ' kg.';
  }
  else if (f === 'pdate') { if (S.pform && isoOk(el.value)) pickPeso(el.value, '#p-d'); }
  else if (f === 'grp') { setGroup(curCtx(), el.dataset.k, el.value); render({ focus: '#' + cssEsc(fid(el.dataset.k, 'g')) }); }
  else if (f === 'mdate') { if (S.mform && isoOk(el.value)) { loadMform(el.value); render({ focus: '#m-d' }); } }
});
document.addEventListener('keydown', function(e){
  /* T05 (U-02): Escape cierra como «Atrás» también desde una casilla: lo escrito ya está en el borrador. En los
     formularios que se descartan al salir (nuevo ejercicio, peso, medidas, perfil), el primer Escape solo deja la
     casilla y el segundo cierra. Una confirmación abierta se cancela antes de cerrar */
  if (e.key === 'Escape' && S.stack.length) {
    if (e.target.tagName === 'SELECT' && e.defaultPrevented) return;
    e.preventDefault();
    var tv = top(), campo = /^(INPUT|TEXTAREA|SELECT)$/.test(e.target.tagName);
    if (campo && tv && ['crear', 'peso', 'medidas', 'perfil'].indexOf(tv.v) >= 0) { var h1 = document.querySelector('.drawer [data-focus], .page [data-focus]'); if (h1) h1.focus({ preventScroll: true }); else e.target.blur(); return; }
    if (S.confirm) { S.confirm = null; render(); var fx = document.querySelector('.drawer [data-focus], .page [data-focus]'); if (fx) fx.focus({ preventScroll: true }); return; }
    pop(); return;
  }
  /* foco contenido en el diálogo de escritorio: Tab y Shift+Tab dan la vuelta dentro */
  if (e.key === 'Tab' && DESK.matches && S.stack.length) {
    var dr = document.querySelector('.drawer');
    if (dr) { var fs = focusables(dr), ai = fs.indexOf(document.activeElement); if (!fs.length) { e.preventDefault(); dr.focus(); return; } if (e.shiftKey && ai <= 0) { e.preventDefault(); fs[fs.length - 1].focus(); return; } if (!e.shiftKey && (ai < 0 || ai === fs.length - 1)) { e.preventDefault(); fs[0].focus(); return; } }
  }
  var g = e.target.closest && e.target.closest('[data-grip]');
  if (g && (e.key === 'ArrowUp' || e.key === 'ArrowDown')) { e.preventDefault(); var k = g.dataset.grip; if (moveItem(curCtx(), k, e.key === 'ArrowUp' ? -1 : 1)) render({ focus: '[data-grip="' + cssEsc(k) + '"]' }); }
  if (e.key === 'Enter' && e.target.id === 'p-kg') { e.preventDefault(); savePeso(); return; }
  if (e.target.classList && e.target.classList.contains('wchart') && ['ArrowLeft','ArrowRight','Home','End'].indexOf(e.key) >= 0) { e.preventDefault(); chartKey(e.key); return; }
  if (e.target.closest && e.target.closest('.mchart svg') && ['ArrowLeft','ArrowRight','Home','End'].indexOf(e.key) >= 0) { e.preventDefault(); miniLeer(e.target.closest('.mchart svg'), e.key); return; }
  if (e.key === 'Enter' && e.target.id === 'f-tname') { e.preventDefault(); var b = document.querySelector('[data-a="guardar-tipo-ok"]'); if (b) b.click(); }
});
document.addEventListener('focusout', function(){ setTimeout(function(){ if (S.pending && !isEditing()) render(); }, 60); });
document.addEventListener('toggle', function(e){ var t = e.target; if (t.classList && t.classList.contains('isol')) S.aislOpen = t.open; }, true);

/* arrastrar para ordenar */
var drag = null;
document.addEventListener('pointerdown', function(e){
  var g = e.target.closest && e.target.closest('[data-grip]'); if (!g || (e.pointerType === 'mouse' && e.button !== 0)) return;
  var card = g.closest('.excard'); if (!card) return;
  e.preventDefault();
  drag = { card: card, list: card.parentElement, k: g.dataset.grip, ctx: curCtx(), moved: false };
  card.classList.add('dragging');
  try { g.setPointerCapture(e.pointerId); } catch (err) {}
});
document.addEventListener('pointermove', function(e){
  if (!drag) return;
  var y = e.clientY, before = null, cards = Array.prototype.filter.call(drag.list.querySelectorAll('.excard'), function(c){ return c !== drag.card; });
  for (var i = 0; i < cards.length; i++) { var r = cards[i].getBoundingClientRect(); if (y < r.top + r.height / 2) { before = cards[i]; break; } }
  if (drag.card.nextElementSibling !== before) { drag.list.insertBefore(drag.card, before); drag.moved = true; }
  var sc = document.querySelector('.drawer') || null, vh = window.innerHeight;
  if (y < 80) (sc || window).scrollBy(0, -12); else if (y > vh - 80) (sc || window).scrollBy(0, 12);
});
function endDrag(){
  if (!drag) return;
  var dg = drag; drag = null; dg.card.classList.remove('dragging');
  if (!dg.moved) return;
  var c = getCont(dg.ctx); if (!c) return;
  var ks = Array.prototype.map.call(dg.list.querySelectorAll('.excard'), function(x){ return x.dataset.k; });
  var items = ks.map(function(k){ return c.items.find(function(x){ return x.k === k; }); }).filter(Boolean);
  if (!items.length) return;
  var tipo = isCardio(items[0]), orden = tipo ? items : ordenArrastre(c, dg.k, ks);
  if (!orden) { render(); return; }
  applyOrder(c, tipo, orden); markDirty(dg.ctx); render();
}
document.addEventListener('pointerup', endDrag);
document.addEventListener('pointercancel', endDrag);

/* gráfica de peso: lectura al pasar el mouse, tocar o usar el teclado */
document.addEventListener('pointermove', function(e){
  if (drag || !S.chart) return;
  var box = e.target.closest && e.target.closest('.wchart');
  if (box) chartShow(chartNearest(e.clientX));
  else if (S.chart.sel != null && e.pointerType === 'mouse' && document.activeElement !== document.querySelector('.wchart')) chartHide();
});
document.addEventListener('pointerdown', function(e){
  if (!S.chart) return;
  var box = e.target.closest && e.target.closest('.wchart');
  if (box) chartShow(chartNearest(e.clientX)); else if (S.chart.sel != null) chartHide();
});
document.addEventListener('focusin', function(e){ if (e.target.classList && e.target.classList.contains('wchart') && S.chart && S.chart.sel == null) chartShow(S.chart.weeks.length - 1); });
document.addEventListener('focusin', function(e){ var sv = e.target.closest && e.target.closest('.mchart svg'); if (sv && sv.dataset.sel == null) miniLeer(sv, 'End'); });
/* lectura de la gráfica de fuerza con teclado: marca el punto y escribe fecha y valor debajo */
function miniLeer(sv, key){
  var cs = sv.querySelectorAll('.ch-pt'), n = cs.length; if (!n) return;
  var i = sv.dataset.sel == null ? n - 1 : +sv.dataset.sel;
  i = key === 'Home' ? 0 : key === 'End' ? n - 1 : key === 'ArrowLeft' ? Math.max(0, i - 1) : key === 'ArrowRight' ? Math.min(n - 1, i + 1) : i;
  sv.dataset.sel = i; Array.prototype.forEach.call(cs, function(c, j){ c.classList.toggle('sel', j === i); });
  var out = sv.parentNode.querySelector('.ch-read'); if (out) out.textContent = 'Punto ' + (i + 1) + ' de ' + n + ': ' + cs[i].getAttribute('data-r');
}
document.addEventListener('focusout', function(e){ if (e.target.classList && e.target.classList.contains('wchart')) chartHide(); });
var rszT = null, rszW = document.documentElement.clientWidth;
window.addEventListener('resize', function(){ clearTimeout(rszT); rszT = setTimeout(function(){ var w = document.documentElement.clientWidth; if (w === rszW) return; rszW = w; if (S.tab === 'progreso') requestRender(); }, 150); });

if (DESK.addEventListener) DESK.addEventListener('change', function(){ render(); }); else if (DESK.addListener) DESK.addListener(function(){ render(); });
/* ocultar o cerrar la página anticipa el envío de lo pendiente; volver a tener conexión lo reanuda */
document.addEventListener('visibilitychange', function(){ if (document.visibilityState === 'hidden') flushNow(); });
window.addEventListener('pagehide', flushNow);
window.addEventListener('online', kickQueue);

/* service worker: la app completa queda en caché para funcionar sin conexión; una versión nueva se aplica al volver a abrir */
function registrarSw(){
  if (!('serviceWorker' in navigator) || location.protocol === 'file:') return;
  var habiaControl = !!navigator.serviceWorker.controller, recargando = false;
  /* cuando el service worker nuevo toma el control, la app ofrece recargar; si no hay nada sin guardar, recarga sola */
  navigator.serviceWorker.addEventListener('controllerchange', function(){
    if (!habiaControl || recargando) return;
    recargando = true;
    if (!Object.keys(dirty).length && !Object.keys(S.cola).length && !S.stack.length) { location.reload(); return; }
    showToast('Versión nueva lista.', function(){ location.reload(); }, 'Actualizar', true);
  });
  navigator.serviceWorker.register('sw.js').then(function(reg){
    /* buscar actualizaciones cada vez que la app vuelve al frente, no solo al abrirla */
    document.addEventListener('visibilitychange', function(){ if (document.visibilityState === 'visible') reg.update().catch(function(){}); });
  }).catch(function(){});
}

render();
initDb();
registrarSw();
})();
