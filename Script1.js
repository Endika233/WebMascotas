// JavaScript source code
//let perro = {
//    nombre: "Milu",
//    ruido: "Guau",
//    saludar: function () {
//        return this.nombre + " dice " + this.ruido;
//    }
//};
//let gato = {
//    nombre="Salem",
//    ruido="Miau",
//    saludar: function () {
//        return this.nombre + " dice " + this.ruido;
//    }
//};


////Esto es lo mismo que lo anterior, como no te limita el tipo de objetos se puede usar el mismo constructor para distintos tipos
//function crearAnimal(nombre, ruido) {
//    return {
//        nombre: nombre,
//        ruido: ruido,
//        saludar: function () {
//            return this.nombre + " dice " + this.ruido;
//        }
//    }
//};
//let gato = crearAnimal("Salem", "Miau");//no hace falta llenar todos los datos, se quedaran undefined si no los introduces en el constructor
//let perro = crearAnimal("Milu", "Guau");
//console.log(gato.saludar());
//console.log(perro.saludar());

//class Animal {
//    constructor(nombre, ruido) {
//        this.nombre = nombre;
//        this.ruido = ruido;
//    }
//    saludar() {
//        return this.nombre + " dice " + this.ruido;
//    }
//}
////let perro = new Animal("Milu", "Guau");
////let gato = new Animal("Salem", "Miau");
////console.log(perro.saludar());
////console.log(gato.saludar());
////let animales = [perro, gato];//Tras crear los animales los metes en lista
//let animales = [new Animal("Milu", "Guau"), new Animal("Salem", "Miau")];//Aqui directamente creamos los objetos segun los metemos en la lista
////for (let i = 0; i < animales.length; i++) {
////    console.log(animales[i].saludar());
////}
////animales.forEach(function (x) {//Igualito que el for
////    console.log(x.saludar());
////})


//document.getElementById("lista_mascotas").innerHTML = "Cacafuti";//con este accedemos a la division html id="lista_mascotas" y le introducimos el valor

//let resultado = "";
//animales.forEach(function (x) {//la x la puedes llamar como quieras, es una variable que cambia cada "vuelta" que da el foreach, acuerdate de que el objeto que vas a usar dentro tiene ese nombre 
//    resultado += "<p>" + x.saludar() + "</p>";//voy cogiendo los .saludar y los voy sumando a la variable resultado
//});//++ suma uno a la variable, += suma su propia variable
//document.getElementById("lista_mascotas").innerHTML = resultado;

//function saludar() {
//    let nombre = document.getElementById("nombre").value;//Aquí es value porque no devuelve código html si no un string en este caso
//    alert(nombre);
//}


////Crear lista animales y mostrarla
//let animales = [];
//class Animal {
//    constructor(nombre, ruido) {
//        this.nombre = nombre;
//        this.ruido = ruido;
//    }
//    saludar() {
//       return this.nombre + " dice " + this.ruido;
//    }
//}
//function limpiar() {
//    document.getElementById("lista_mascotas").innerHTML = "";
//}
//function insertar() {
//    let nombre = document.getElementById("nombre").value;
//    let ruido = document.getElementById("ruido").value;
//    animales.push(new Animal(nombre, ruido));
//}
//function outPut() {
//    animales.forEach(function (animales) {
//        document.getElementById("lista_mascotas").innerHTML += "<p>"+animales.saludar()+"</p>";
//    });
//}

//Crear lista animales,mostrar nombres animales con un boton al lado que tras pulsar alert con su ruido
let animales = [];
let cont = 0;
class Animal {
    constructor(nombre,ruido){
        this.nombre = nombre;
        this.ruido = ruido;
}
}
function insertar() {
    let nombre = document.getElementById("nombre").value;
    let ruido = document.getElementById("ruido").value;
    animales.push(new Animal(nombre,ruido))
}
function limpiar() {
    document.getElementById("lista_mascotas").innerHTML = "";
    cont = 0;
}
function mostrarNombres() {
    limpiar();
    animales.forEach(function (animales) {
        document.getElementById("lista_mascotas").innerHTML += "<li>" + animales.nombre + "</li><input type='button' value='Mostrar ruido' onclick='mostrarRuido(" + cont + ")'/><input type='button' value='Borrar animal de la lista' onclick='borrarAnimal(" + cont +")'/>";
        cont++;
    });
}
function mostrarRuido(cont) {
    alert(animales[cont].ruido);
}
function borrarAnimal(cont) {
    animales.splice(cont, 1);
    mostrarNombres();
}

////Crear lista animales,mostrar nombres animales con un boton al lado que tras pulsar alert con su ruido
////Esta vez con objetos en vez de contadores
//let animales = [];
//class Animal {
//    constructor(nombre, ruido) {
//        this.nombre = nombre;
//        this.ruido = ruido;
//    }
//}
//function insertar() {
//    let nombre = document.getElementById("nombre").value;
//    let ruido = document.getElementById("ruido").value;
//    animales.push(new Animal(nombre, ruido))
//}
//function limpiar() {
//    document.getElementById("lista_mascotas").innerHTML = "";
//}
//function mostrarNombres() {
//    limpiar();
//    animales.forEach(function (animales) {
//        document.getElementById("lista_mascotas").innerHTML += "<li>" + animales.nombre + "</li><input type='button' value='Mostrar ruido' onclick='mostrarRuido(" + animales+ ")'/><input type='button' value='Borrar animal de la lista' onclick='borrarAnimal(" + animales + ")'/>";
//    });
//}
//function mostrarRuido(x) {////poner Animal x? puede ser que se lie por el nombre, visual dice que te va a coger el correcto pero al ejecutarlo en navegador lo hace diferente
//    animales.forEach(function (animal) {
//        if (animal === x) {
//            animales.splice(animal, 1);
//        }
//    })
//}
//function borrarAnimal(cont) {
//    animales.splice(cont, 1);
//    mostrarNombres();
//}