console.log("--FASE1--")
console.log("")

var nombre = "Cristian Daniel";
console.log(nombre)

var apellido = "Villegas";
console.log(apellido)

var apellido2 = "Peña";
console.log(apellido2)

var dia = 11;
console.log(dia)

var mes = 12;
console.log(mes)

var any = 2019;
console.log(any)

console.log(apellido + " " + apellido2 + ", " + nombre)

console.log(dia + "/" + mes + "/" + any)

console.log("")

console.log("--FASE2--")
console.log("")

const año = 1948;
console.log(año)

const cada = 4;
console.log(cada)

const cumple = 2001;

var a = (cumple - año) / cada;
console.log(a)

console.log("")

console.log("--FASE3--")
console.log("")

for (var i = 1948; i <= 2001; i += 4) {
    console.log(i);
};

for (var i = 1948; i <= 2001; i++) {

    x = new Boolean(false);
    if (i == 2001) {
        x = false;
    } else {
        x = true;
        x = true;
    }
    console.log(i + " " + x)
};

console.log(" ")

for (var i = 1948; i <= 2001; i++) {
    // console.log(i + " ");

    x = new Boolean(false);
    if (i == 2001) {
        console.log("La variable es:" + i + " " + x);
    } else {
        x = true;
        console.log("La variable es: " + i + " " + x);
    }

};

console.log("")

console.log("--FASE4--")
console.log("")

var nombre = "Cristian Daniel " + "Villegas " + "Peña";     // He puesto los espacios ya dentro de cada apartado, si quieres se los puedo añadir como si fueran por separado.
console.log("El meu nom es: " + nombre)

var naci = 24 + "/" + 05 + "/" + 2001;
console.log("Vaig neixer el: " + naci)

console.log("El meu naixement no es de trespas")

// document.write("Equivalente a un SOUT en Java");
