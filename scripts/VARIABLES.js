let chatId;
let walletAddress;
let password;

function VARIABLES_get_chatId(){return chatId;}
function VARIABLES_get_walletAddress(){return walletAddress;}
function VARIABLES_get_password(){return password;}

async function VARIABLES_set_chatId(p){chatId=p;}
async function VARIABLES_set_walletAddress(p){walletAddress=p;}
async function VARIABLES_set_password(p){password=p;}
