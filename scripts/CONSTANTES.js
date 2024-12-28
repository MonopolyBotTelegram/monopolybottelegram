const cellImgByNumber = [
['imgs/celdas/CASUAL_0.png','imgs/celdas/VERDE_CLARO.png','imgs/celdas/TAX.png','imgs/celdas/VERDE_CLARO.png','imgs/celdas/JAIL.png'],
['imgs/celdas/NARANJA.png', null, null, null, 'imgs/celdas/VERDE_OSCURO.png'],
['imgs/celdas/NARANJA.png', null, null, null, 'imgs/celdas/VERDE_OSCURO.png'],
['imgs/celdas/AMARILLO.png', null, null, null, 'imgs/celdas/AZUL.png'],
['imgs/celdas/AMARILLO.png', null, null, null,'imgs/celdas/AZUL.png'],
['imgs/celdas/START.png','imgs/celdas/VIOLETA.png','imgs/celdas/BANK.png','imgs/celdas/VIOLETA.png','imgs/celdas/CASUAL_1.png']
];

const casillas=[
[6,7,8,9,10],
[5,null,null,null,11],
[4,null,null,null,12],
[3,null,null,null,13],
[2,null,null,null,14],
[1,18,17,16,15]
];

const cellPrecioByNumber=[
[null,'0.0015',null,'0.0018',null],
['0.0012',null,null,null,'0.0021'],
['0.0009',null,null,null,'0.0024'],
['0.0006',null,null,null,'0.0027'],
['0.0003',null,null,null,'0.003'],
[null,'0.01',null,'0.005',null]
];


const cellRaresaByNumber=[
[null,'Rare',null,'Rare',null],
['Uncommon',null,null,null,'Epic'],
['Uncommon',null,null,null,'Epic'],
['Common',null,null,null,'Legend'],
['Common',null,null,null,'Legend'],
[null,'Mythical',null,'Mythical',null]
];


const cellEstrellasByNumber=[
    [null,4,null,5,null],
    [3,null,null,null,5],
    [2,null,null,null,6],
    [1,null,null,null,0],
    [0,null,null,null,1],
    [null,3,null,2,null]
];

const cellNamesByNumber={1:'START',2:'Cafeteria',3:'Restaurant',4:'Self',5:'Gas',6:'?',7:'Beauty',8:'TAX',9:'Fitness',10:'JAIL',11:'Store',12:'Supermarket',13:'Cellular',14:'Internet',15:'?',16:'Factory',17:'BANK',18:'Plant'};
const cellImg0 = 'imgs/balance.png';
const cellImg1 = 'imgs/withdrawal.png';
const cellImg2 = 'imgs/deposit.png';
const cellImg3 = 'imgs/mined.png';


function CONSTANTES_cellImgByNumber(){return cellImgByNumber;}
function CONSTANTES_casillas(){return casillas;}
function CONSTANTES_cellPrecioByNumber(){return cellPrecioByNumber;}
function CONSTANTES_cellNamesByNumber(){return cellNamesByNumber;}
function CONSTANTES_cellRaresaByNumber(){return cellRaresaByNumber;}
function CONSTANTES_cellEstrellasByNumber(){return cellEstrellasByNumber;}
function CONSTANTES_cellImg0(){return cellImg0;}
function CONSTANTES_cellImg1(){return cellImg1;}
function CONSTANTES_cellImg2(){return cellImg2;}
function CONSTANTES_cellImg3(){return cellImg3;}
