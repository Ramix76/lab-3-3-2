

// BECA

const age = 16;
const city = "Barcelona".toLowerCase();
const numerousFamily = false;
const isGenius = true;
const won = "Conseguiste la beca";
const lose = "No conseguiste la beca";

// if (age >= 18 && city === "barcelona") {
//     console.log(won);
//     document.body.innerHTML += `<p>${won}</p>`;
// } else if (age > 30 && numerousFamily == true) {
//     console.log(won);
//     document.body.innerHTML += `<p>${won}</p>`;
// } else if ((age > 12 && age > 18) && isGenius == true) {    
//     console.log(won);
//     document.body.innerHTML += `<p>${won}</p>`;
// } else {
//     console.log(lose);
//     document.body.innerHTML += `<p>${lose}</p>`;
// }

// if ((age >= 18 && city === "barcelona") || (age > 30 && numerousFamily == true) || ((age > 12 && age > 18) && isGenius == true)) {
//     console.log(won);
//     document.body.innerHTML += `<p>${won}</p>`;
// } else {
//     console.log(lose);
//     document.body.innerHTML += `<p>${lose}</p>`;
// }

const result = (
    (age >= 18 && city === "barcelona") ||
    (age > 30 && numerousFamily == true) ||
    ((age > 12 && age > 18) && isGenius == true)
) ? won : lose;
console.log(result);
document.body.innerHTML += `<p>${result}</p>`;



// COCHE NO ARRANCA

const   liveClose = false;
const   walking = true;
const   gasoline = false;
const   money = true;
const   battery = true;
const   noProblem = "Tomorrows problem";
const   buyGas = "Poner gasolina";
const   goSub = "Me voy en metro";
const   okGas = "Si que tiene gasolina";
const   noBat = "Recargar bateria";
const   mecanic = "Pasar por el mecanico";


if (liveClose && walking) {
    console.log(noProblem);
    document.body.innerHTML += `<p>${noProblem}</p>`;
} else {
    if (!gasoline) {
        if (money) {
            console.log(buyGas);
            document.body.innerHTML += `<p>${buyGas}</p>`;
        } else {
            console.log(buyGas);
            document.body.innerHTML += `<p>${goSub}</p>`;
        }
        
    } else {
        console.log(okGas);
        document.body.innerHTML += `<p>${okGas}</p>`;
        if (!battery) {
            console.log(noBat)
            document.body.innerHTML += `<p>${noBat}</p>`;
        } else {
            console.log(mecanic);
            document.body.innerHTML += `<p>${mecanic}</p>`;
        }      
    }
}