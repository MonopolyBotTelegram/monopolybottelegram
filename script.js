document.addEventListener("DOMContentLoaded", async () => {

await initialize();

async function initialize(){
// Obtener la dirección de la wallet desde la URL
const params=new URLSearchParams(window.location.search);
chatId=params.get("chat_id");
walletAddress=params.get("wallet_address");
password=params.get("password");
///////////////////////////////
alert('chatId : '+chatId+'|walletAddress : '+walletAddress+'|password : '+password);
///////////////////////////////
}


const boardContainer = document.getElementById("board-container");

let boolean0=false;
let boolean1=false;
let boolean2=false;
let boolean3=false;


CONSTANTES_casillas().forEach((fila, filaIndex) => {
fila.forEach((casilla, colIndex) => {
const cell = document.createElement("div");
cell.classList.add("cell");

// Unir las 3 casillas internas de la primera fila interna
if (filaIndex === 1 && colIndex === 1) { // Casilla central
boolean0=true;
} else if (filaIndex === 1 && (colIndex === 2 || colIndex === 3)) {
// Ocultar las casillas 2 y 3 para que solo exista la unida
return;
}

// Unir las 3 casillas internas de la primera fila interna
if (filaIndex === 2 && colIndex === 1) { // Casilla central
boolean1=true;
} else if (filaIndex === 2 && (colIndex === 2 || colIndex === 3)) {
// Ocultar las casillas 2 y 3 para que solo exista la unida
return;
}


// Unir las 3 casillas internas de la primera fila interna
if (filaIndex === 3 && colIndex === 1) { // Casilla central
boolean2=true;
} else if (filaIndex === 3 && (colIndex === 2 || colIndex === 3)) {
// Ocultar las casillas 2 y 3 para que solo exista la unida
return;
}


// Unir las 3 casillas internas de la primera fila interna
if (filaIndex === 4 && colIndex === 1) { // Casilla central
boolean3=true;
} else if (filaIndex === 4 && (colIndex === 2 || colIndex === 3)) {
// Ocultar las casillas 2 y 3 para que solo exista la unida
return;
}


if (casilla !== null) {
const precio = CONSTANTES_cellPrecioByNumber()[filaIndex][colIndex];
const img = CONSTANTES_cellImgByNumber()[filaIndex][colIndex];
const raresa = CONSTANTES_cellRaresaByNumber()[filaIndex][colIndex];
const estrellas=CONSTANTES_cellEstrellasByNumber()[filaIndex][colIndex];
cell.textContent = casilla + '|' + precio + '|' + img+'|'+raresa+'|'+estrellas;
}

if(boolean0){
boolean0=false;
cell.classList.add("balance-cell");
}

if(boolean1){
boolean1=false;
cell.classList.add("mined-cell");
}

if(boolean2){
boolean2=false;
cell.classList.add("deposit-cell");
}

if(boolean3){
boolean3=false;
cell.classList.add("withdrawal-cell");
}

boardContainer.appendChild(cell);
});
});


// Selecciona todas las celdas
const cells = document.querySelectorAll('.cell');

// Nombres que deben ser excluidos
const excludedNames = ['?', 'JAIL', 'TAX', 'BANK', 'START'];

// Iteramos sobre todas las celdas para agregar los nombres y los eventos
cells.forEach(cell => {

const cellData=cell.textContent.trim().split('|');
const cellID=cellData[0];
const cellPrecio=cellData[1];
const cellImg=cellData[2];
const cellRaresa=cellData[3];
const cellEstrellas=Number(cellData[4]);
// Obtenemos el número visible dentro de la celda
const cellNumber = parseInt(cellID);

// Verificamos si hay un color definido para ese número
cell.style.backgroundImage = `url('${cellImg}')`;
cell.style.backgroundSize = '95% 95%'; // Ajusta el tamaño de la imagen al 75% de la celda
cell.style.backgroundPosition = 'center'; // Centra la imagen horizontalmente y aplica un desplazamiento del 30% desde arriba
cell.style.backgroundRepeat = 'no-repeat'; // Evita que la imagen se repita


// Verificamos si hay un nombre definido para ese número
if (CONSTANTES_cellNamesByNumber()[cellNumber]) {
const cellName = CONSTANTES_cellNamesByNumber()[cellNumber];
// Si el nombre no está en la lista de excluidos, lo agregamos a la celda
if (!excludedNames.includes(cellName)) {
const nameElement = document.createElement('div');
nameElement.textContent = cellRaresa;
nameElement.style.marginBottom = '5px';
nameElement.style.textAlign = 'center';
nameElement.style.fontSize = '12px';  // Tamaño de la fuente ajustable
nameElement.style.color = 'black';  // Color del texto negro
nameElement.style.fontWeight = 'bold';  // Hacer el texto más destacado

cell.textContent=cellPrecio;
// Insertamos el nombre al principio de la celda
cell.prepend(nameElement);

    const baseImg = cellImg; // URL de la imagen de fondo principal
    const nestedImg ='imgs/estrella.png'; // URL de la imagen que estará dentro
    FUNCIONES_setHorizontalOverlays(cell, baseImg, nestedImg,cellEstrellas);

    // Agregamos el evento de clic para mostrar el modal
    cell.addEventListener('click', () => {
        FUNCIONES_mostrarModal0(cellNumber,baseImg,nestedImg,cellEstrellas,cellRaresa,cellPrecio);
    });

}else{
const nameElement = document.createElement('div');
nameElement.textContent = '';
cell.textContent='';
 // Insertamos el nombre al principio de la celda
cell.prepend(nameElement);
}


}

});

CREATOR_balance_cell();
CREATOR_mined_cell();
CREATOR_deposit_cell();
CREATOR_withdrawal_cell();

});





