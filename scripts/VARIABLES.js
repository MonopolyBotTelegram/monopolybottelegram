let chatId=null;
let walletAddress=null;
let password=null;
let corsOK=false;

function VARIABLES_get_chatId(){return chatId;}
function VARIABLES_get_walletAddress(){return walletAddress;}
function VARIABLES_get_password(){return password;}

function VARIABLES_set_chatId(p){chatId=p;}
function VARIABLES_set_walletAddress(p){walletAddress=p;}
function VARIABLES_set_password(p){password=p;}


function VARIABLES_set_url_cors(p){corsOK=p;}
function VARIABLES_get_url_cors(){
if(corsOK){
return'https://cors-anywhere.herokuapp.com/';
}else{
return'';
}
}
