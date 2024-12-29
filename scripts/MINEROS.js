let cellEstrellasByNumber=[
[null,0,null,0,null],
[0,null,null,null,0],
[0,null,null,null,0],
[0,null,null,null,0],
[0,null,null,null,0],
[null,0,null,0,null]
];



function MINEROS_get(y,x){
return cellEstrellasByNumber[y][x];
}



async function MINEROS_load(){
//////////////////
const mineros=await MINEROS_getMinerosM();
/////////////////
for(let y=0;y<6;y++){
for(let x=0;x<5;x++){
if(y===0){
if(x===1){cellEstrellasByNumber[y][x]=Number(mineros.substring(4,5));}//ok
if(x===3){cellEstrellasByNumber[y][x]=Number(mineros.substring(5,6));}//ok
}
if(y===1){
if(x===0){cellEstrellasByNumber[y][x]=Number(mineros.substring(3,4));}//ok
if(x===4){cellEstrellasByNumber[y][x]=Number(mineros.substring(6,7));}
}
if(y===2){
if(x===0){cellEstrellasByNumber[y][x]=Number(mineros.substring(2,3));}//ok
if(x===4){cellEstrellasByNumber[y][x]=Number(mineros.substring(7,8));}
}
if(y===3){
if(x===0){cellEstrellasByNumber[y][x]=Number(mineros.substring(1,2));}//0k
if(x===4){cellEstrellasByNumber[y][x]=Number(mineros.substring(8,9));}
}
if(y===4){
if(x===0){cellEstrellasByNumber[y][x]=Number(mineros.substring(0,1));}//ok
if(x===4){cellEstrellasByNumber[y][x]=Number(mineros.substring(9,10));}
}
if(y===5){
if(x===1){cellEstrellasByNumber[y][x]=Number(mineros.substring(11,12));}
if(x===3){cellEstrellasByNumber[y][x]=Number(mineros.substring(10,11));}
}
}
}
await MINEROS_calcular_eth_por_hora();
}



function MINEROS_calcular_eth_por_hora(){
let eth_por_hora_TOTAL=0;
for(let y=0;y<6;y++){
for(let x=0;x<5;x++){
const cellPrice=CONSTANTES_cellPrecioByNumber()[y][x];
if(cellPrice===null){continue;}
const estrellas=cellEstrellasByNumber[y][x];
if(estrellas>0){
let price=cellPrice;
for(let i0=0;i0<estrellas;i0++){
if(i0===0){continue;}
price=parseFloat(price)*parseFloat(MINEROS_getFloat(2));
}
const ethPorHora=MINEROS_calcularETHPorHora(price,30);
eth_por_hora_TOTAL=eth_por_hora_TOTAL+ethPorHora;
}
}
}
VARIABLES_set_eth_por_hora(eth_por_hora_TOTAL);
}



function MINEROS_getFloat(number) {
// Convertir a número flotante
let num = parseFloat(number);
// Verificar si el valor es un número válido
if (!isNaN(num)) {
let fixedNumber = num.toFixed(8);  // Limitar a 8 decimales
console.log(fixedNumber); // "123.45600000"
return fixedNumber;  // Retorna el valor formateado
} else {
console.log("El valor no es un número válido.");
return null;  // Retorna null si no es un número válido
}
}



function MINEROS_calcularETHPorHora(ethInvertido, diasROI) {
// Calcular la cantidad de ETH necesaria por día para el ROI
let ethPorDia = ethInvertido / diasROI;
// Calcular la cantidad de ETH necesaria por hora
let ethPorHora = ethPorDia / 24;
// Retornar el resultado redondeado a 8 decimales
return ethPorHora.toFixed(8);
}



async function MINEROS_getMinerosM(){
const url=`${VARIABLES_get_url_cors()}${CONSTANTES_url_get_mineros()}?action=getMineros&char_id=${await VARIABLES_get_chatId()}&password=${await VARIABLES_get_password()}`;
let intentos=0;
let mineros;
while(true){
mineros=await MINEROS_load_url_mineros(url);
if(mineros===null){
intentos++;
if(intentos===10){break}
}else{
break
}
}
return mineros;
}



async function MINEROS_load_url_mineros(url){
try {
const response=await fetch(url, {
method:'GET',headers: {'Accept': 'text/plain',},});
if (!response.ok) {
alert(`HTTP error! Status : ${response.status}`);
return null;
}
return await response.text();
} catch (error) {
alert('Error fetching :'+ error);
return null;
}
}



function MINEROS_upgrade(y,x,eth){

}