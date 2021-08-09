// Helpers (Utils)
const esPar = (numero) => {(numero % 2 ===0)};

console.group("Persons and his Salaries");
console.log(typeof(colombia))
console.log(colombia);
console.groupEnd();

const salariosCol = colombia.map((persona) => {
    return persona.salary;
});

console.group("Just Salaries");
console.log(typeof(salariosCol))
console.log(salariosCol);
console.groupEnd();

const salariosColSorted = salariosCol.sort((salaryA, SalaryB) => {
    return salaryA - SalaryB;
});
console.group("Organized Salaries");
console.log(typeof(salariosColSorted))
console.log(salariosColSorted);
console.groupEnd();


const calcularMediaAritmetica = (lista) => {
    const sumaLista = lista.reduce((valorAcumulado = 0, nuevoElemento) => {
        return valorAcumulado + nuevoElemento;
    });
    return sumaLista / lista.length;
}

// Calculadora de mediana
const medianaSalaries = (lista) => {
    const mitad = parseInt(lista.length / 2);
    if (esPar(lista.length)) {
        const personaMitad1 = lista[mitad - 1];
        const personaMitad2 = lista[mitad];

        const mediana = calcularMediaAritmetica([personaMitad1, personaMitad2]);
        return mediana;
    } else {
        const personaMitad = lista[mitad];
        return personaMitad;
    }
}

// Mediana del top 10 
const medianaSalariesTop10 = () => {
    const lista = salariosColSorted;
    const spliceStart = (lista.length * 90) / 100;
    const spliceCount = lista.length - spliceStart;
    medianaSalaries(lista.splice(spliceStart, spliceCount));
} 

console.group("Mediana de salarios");
console.log ({'Mediana general: ': medianaSalaries(salariosColSorted), 
              'Mediana top 10: ': medianaSalariesTop10(salariosColSorted)});

const printSalaries = document.getElementById("salariesColombia");
printSalaries.innerText = "Los salarios colombianos dentro de la base de datos son: " + "$" + salariosCol[0] + ", $" + salariosCol[1]  + ", $" + salariosCol[2]  + ", $" + salariosCol[3]  + ", $" + salariosCol[4]  + ", $" + salariosCol[5]  + ", $" + salariosCol[6]  + ", $" + salariosCol[7]  + ", $" + salariosCol[8]  + ", $" + salariosCol[9]  + ", $" + salariosCol[10]  + ", $" + salariosCol[11]  + ", $" + salariosCol[12]  + ", $" + salariosCol[13]  + ", $" + salariosCol[14]  + ", $" + salariosCol[15]  + ", $" + salariosCol[16]  + ", $" + salariosCol[17]  + ", $" + salariosCol[18]  + ", $" + salariosCol[19] + ".";

const medianaSalariesOfColombia = document.getElementById("medianaSalariesColombia");
medianaSalariesOfColombia.innerText = "La mediana de estos salarios es: $" + medianaSalaries(salariosColSorted) + ".";

const medianaSalariesTop10OfColombia = document.getElementById("medianaTop10SalariesColombia");
medianaSalariesTop10OfColombia.innerText = "La mediana del top 10 de los salarios es: $" + medianaSalariesTop10(salariosColSorted) + ".";