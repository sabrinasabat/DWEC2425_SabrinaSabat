/*
* Crea un programa que pida al usuario el valor del radio y muestre por pantalla:
* - El valor del radio. - ok
* - El valor del diámetro - ok
* - El valor del perímetro de la circunferencia - ok
* - El valor del área del círculo - ok
* - El valor del área de la esfera
* - El valor del volumen de la esfera
* - El valor de Pi debes obtenerlo del objeto Math, no introducirlo manualmente.
* - Debes escribir al lado si son cm, o cm2, o cm3
*
* Como datos de muestra, si metes 5, deberías obtener aproximadamente: 5 / 10 / 31,41 / 78,54 / 314,15 / 523,59*/
function circulo(){

    var n = window.prompt("Digite el valor del radio: ");

    var radio = n/(2*Math.PI);
    var diametro = radio*2;
    var perimetroCirc = 2*Math.PI*radio;
    var areaCirc = Math.PI*Math.pow(radio, 2);


    window.alert("El valor del radio: "+radio);
    window.alert("El valor del diametro: "+diametro);
    window.alert("El valor del perimetro de la circunferencia: "+perimetroCirc);
    window.alert("El valor de la área del círculo: "+areaCirc);

}
