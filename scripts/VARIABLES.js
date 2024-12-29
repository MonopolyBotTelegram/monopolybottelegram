let chatId=null;
let walletAddress=null;
let password=null;
let corsOK=false;

async function VARIABLES_get_chatId(){return chatId;}
async function VARIABLES_get_walletAddress(){return walletAddress;}
async function VARIABLES_get_password(){return password;}

async function VARIABLES_set_chatId(p){chatId=p;}
async function VARIABLES_set_walletAddress(p){walletAddress=p;}
async function VARIABLES_set_password(p){password=p;}


async function VARIABLES_set_url_cors(p){corsOK=p;}
async function VARIABLES_get_url_cors(){
if(corsOK){
return'https://cors-anywhere.herokuapp.com/';
}else{
return'';
}
}
