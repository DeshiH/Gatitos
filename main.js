
class gato{
    nombre="";
    edad="0";
    raza="";
caracter="";

constructor(nombre, edad, raza, caracter){
    this.nombre =nombre;
    this.edad =edad;
    this.raza =raza;
    this.caracter =caracter;
}

//4. Definir los metodos que seran definidos como funciones o acciones

maullar(){
    console.log("Miau");
}
dormir(){
    console.log("Zzzzzzz");
}
ronronear(){
    console.log("Prrrrrrrr");
}

hacerOjitos(){
    console.log("ternurita");
}

Morir(){
    console.log("Se murio");
}
}


//5. Para empezar a crear o instanciar objetos (gatos), vamos a utilizar la palabra reservada new nombreClase

var Gardfield = new gato("Gardfield", 9, "Naranja", "Dormilon");
var Felix = new gato("Felix", 4, "Caricaturas", "Amistoso");
var Kitty = new gato("Kitty", 1, "kawaii", "tranquilo");
var Dulce = new gato("Caramelo", 6, "Azul", "Agresivo");
var Pepe = new gato("DonGato", 3, "Naranja", "Pensativo");


console.log(Gardfield);

Kitty.Morir();

Pepe.hacerOjitos();

Felix.dormir();
