//#region Región de Variables
const wowexpansiones = ["World of Warcraft", "World of Warcraft: The Burning Crusade", "World of Warcraft: Wrath of the Lich King", "World of Warcraft: Cataclysm", "World of Warcraft: Mists of Pandaria", "World of Warcraft: Warlords of Draenor", "World of Warcraft: Legion", "World of Warcraft: Battle for Azeroth", "World of Warcraft: Shadowlands", "World of Warcraft: Dragonflight Proximamente"];
let mostrarsuma = sumatoria();
let mostrarresta = resta();
let mostrarmulti = multiplicacion();
let mostrardivi = division();
//#endregion

//#region Región de funciones
function sumatoria() {
    var num1 = 10;
    var num2 = 9;
    return num1 + num2;
}

function resta() {
    var num1 = 10;
    var num2 = 9;
    return num1 - num2;
}

function multiplicacion() {
    var num1 = 10;
    var num2 = 9;
    return num1 * num2;
}

function division() {
    var num1 = 10;
    var num2 = 9;
    return num1 / num2;
}
//#endregion

//#region Región de ConsoleLog
console.log(mostrarsuma);
console.log(mostrarresta);
console.log(mostrarmulti);
console.log(mostrardivi);
for (let inicio of wowexpansiones) {
    console.log(inicio)
}
//#endregion