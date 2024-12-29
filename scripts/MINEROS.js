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


function MINEROS_load(){
//////////////////
const mineros=getMinerosM();
/////////////////
for(let y=0;y<6;y++){
for(let x=0;x<5;x++){
if(y===0){
if(x===1){cellEstrellasByNumber[y][x]=mineros.substring(0,1).toNumber;}
if(x===3){cellEstrellasByNumber[y][x]=mineros.substring(1,2).toNumber;}
}
if(y===1){
if(x===0){cellEstrellasByNumber[y][x]=mineros.substring(2,3).toNumber;}
if(x===4){cellEstrellasByNumber[y][x]=mineros.substring(3,4).toNumber;}
}
if(y===2){
if(x===0){cellEstrellasByNumber[y][x]=mineros.substring(4,5).toNumber;}
if(x===4){cellEstrellasByNumber[y][x]=mineros.substring(5,6).toNumber;}
}
if(y===3){
if(x===0){cellEstrellasByNumber[y][x]=mineros.substring(6,7).toNumber;}
if(x===4){cellEstrellasByNumber[y][x]=mineros.substring(7,8).toNumber;}
}
if(y===4){
if(x===0){cellEstrellasByNumber[y][x]=mineros.substring(8,9).toNumber;}
if(x===4){cellEstrellasByNumber[y][x]=mineros.substring(9,10).toNumber;}
}
if(y===5){
if(x===1){cellEstrellasByNumber[y][x]=mineros.substring(10,11).toNumber;}
if(x===3){cellEstrellasByNumber[y][x]=mineros.substring(11,12).toNumber;}
}
}
}
}



async function getMinerosM(){
const url=`${CONSTANTES_url_get_mineros()}?action=getMineros&char_id=${VARIABLES_get_chatId()}&password=${VARIABLES_get_password()}`;
let intentos=0;
let mineros;
while(true){
mineros=load_url_mineros(url);
if(mineros===null){
intentos++;
if(intentos===10){break}
}else{
break
}
}
return mineros;
}



async function load_url_mineros(url){
try {
const response=await fetch(url, {
method:'GET',headers: {'Accept': 'text/plain',},});
if (!response.ok) {
console.error(`HTTP error! Status : ${response.status}`);
return null;
}
return await response.text();
} catch (error) {
console.error('Error fetching :', error);
return null;
}
}



function MINEROS_upgrade(y,x,eth){

}