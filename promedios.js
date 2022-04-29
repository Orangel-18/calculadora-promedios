function media() {

    const bruteList = document.getElementById("lista").value;

    const listaSplit = bruteList.split(",")
   
    const lista = listaSplit.map(Number);

    // let sumaLista = 0;

    // for (let i = 0; i < lista.length; i++) {
    //     sumaLista = sumaLista + lista[i];
    // }

    const sumaLista = lista.reduce(
        function (valorAcumulado = 0, nuevoElemento) {
            return valorAcumulado + nuevoElemento;
        }
    );

    const promedio = sumaLista / lista.length;

    result.innerText = `La media es ${promedio}`;
}

function mediana() {

    const bruteList = document.getElementById("lista").value;
    const lista = bruteList.split(",")

    const sortedList = lista.sort((a, b) => a - b); 

    if (sortedList.length %2 === 0) {
        const middleIndex = sortedList.length / 2;
        const secondMiddleIndex = middleIndex - 1;
        const values = [sortedList[middleIndex], sortedList[secondMiddleIndex]];
        let resultado = (values[0] + values[1]) / 2;

        console.log(resultado);
        
        result.innerText = `La mediana es ${resultado}`;
    } else {
        const middleValue = Math.floor(sortedList.length / 2);
        let resultado = sortedList[middleValue];
        
        result.innerText = `La mediana es ${resultado}`;
    }
}

function moda() {

    const bruteList = document.getElementById("lista").value;
    const lista = bruteList.split(",")

    const listaCount = {};

    lista.map(
        function (element) {
            if (listaCount[element]) {
                listaCount[element] += 1;
            } else {
                listaCount[element] = 1;
            }
        }
    );

    const listAray = Object.entries(listaCount).sort(
        function(elementA, elementB) {
            elementA[1] - elementB[1];
        }
    );

    const moda = listAray[listAray.length - 1];

    result.innerText = `La moda es ${moda}`;
}