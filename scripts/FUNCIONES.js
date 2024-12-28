function FUNCIONES_mostrarModal0(cellNumber, baseImg, nestedImg, cellEstrellas, cellRaresa,cellPrecio) {

    const modal = document.getElementById('cellModal');
    const modalTitle = document.getElementById('modalTitle'); // Título del modal
    const modalTable = document.getElementById('modalTable'); // Tabla dentro del modal
    const footerBtn = document.getElementById('footerBtn'); // Botón en el pie
    const closeModalBtn = document.querySelector('.close-button'); // Botón de cerrar (X)

    // Establecer el título del modal
    modalTitle.textContent = cellRaresa;

    // Mostrar el modal al cambiar la propiedad display a 'flex'
    modal.style.display = 'flex';

    // Establecer la imagen de fondo del modal
    modal.style.backgroundImage = `url('${baseImg}')`;
    modal.style.backgroundSize = 'cover'; // Aseguramos que la imagen cubra todo el modal
    modal.style.backgroundPosition = 'center'; // Centrar la imagen

    // Crear la tabla dentro del modal
    modalTable.innerHTML = ''; // Limpiar cualquier contenido previo de la tabla

    // Crear las filas de la tabla
    for (let i = 0; i < 7; i++) {
        const row = document.createElement('tr'); // Crear una fila
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('td'); // Crear una celda

            // Si estamos en la primera columna, agregar una imagen
            if (j === 0) {
                if(i===0){
                const img = document.createElement('img');
                img.src = nestedImg; // Cambia por la fuente de la imagen
                img.style.width = '20px'; // Ajusta el tamaño de la imagen
                img.style.height = '20px';
                 img.style.borderRadius = '50%'; // Hacer que la imagen sea circular
                  img.style.backgroundPosition = 'center'; // Centrar la imagen
                cell.appendChild(img);
                }else{
                    const text = document.createElement('span');
                    text.textContent =i;
                    text.style.color='#000000';
                    text.style.fontStyle='bold';
                    cell.appendChild(text);
                }
            } else {
                const text = document.createElement('span');
                text.style.color='#000000';text.style.fontStyle='bold';
if(j===1&&i==0){text.textContent = 'Price ETH';}else{
if(j===2&&i==0){text.textContent = 'Mined eth/h';}else{
    const price= getPrice(j, i, cellPrecio);
if(j==1) {
    text.textContent = price ; // Aquí puedes agregar texto dinámico si lo necesitas
}else {

    text.textContent = getMined(j, i, price); // Aquí puedes agregar texto dinámico si lo necesitas
}
}
}
                cell.appendChild(text);
            }
            row.appendChild(cell);
        }
        modalTable.appendChild(row); // Agregar la fila a la tabla
    }

    // Cerrar el modal al hacer clic en el botón de cerrar (X)
    closeModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    // Cerrar el primer modal al hacer clic en el botón de pie
    footerBtn.addEventListener('click', () => {
        modal.style.display = 'none';
        // Abrir el segundo modal cuando se hace clic en el botón "Upgrade"
        openSecondModal();
    });




    // Función para abrir el segundo modal
    function openSecondModal() {
        const secondModal = document.getElementById('secondModal');
        secondModal.style.display = 'flex'; // Mostrar el segundo modal

        // Cerrar el segundo modal al hacer clic en el botón de cerrar (X)
        const secondCloseBtn = secondModal.querySelector('.close-button');
        secondCloseBtn.addEventListener('click', () => {
            secondModal.style.display = 'none';
        });

        // Cerrar el segundo modal al hacer clic en el botón de pie
        const secondFooterBtn = document.getElementById('secondFooterBtn');
        secondFooterBtn.addEventListener('click', () => {
            secondModal.style.display = 'none';
        });
    }




}




function FUNCIONES_mostrarModal1(text) {
const modal = document.getElementById('cellModal');
const modalText = document.getElementById('modalText');
modalText.textContent = text;
modal.style.display = 'block';
}


function FUNCIONES_balance_cell(){FUNCIONES_mostrarModal1('balance');}
function FUNCIONES_mined_cell(){FUNCIONES_mostrarModal1('mined');}
function FUNCIONES_withdrawal_cell(){FUNCIONES_mostrarModal1('withdrawal');}


function FUNCIONES_setHorizontalOverlays(cell, baseImg, overlayImg, numOverlays) {
        // Mantener la imagen base intacta
        cell.style.backgroundImage = `url('${baseImg}')`;
        cell.style.backgroundSize = '100% 100%'; // Base cubre todo el contenedor
        cell.style.backgroundPosition = 'center'; // Centrada
        cell.style.backgroundRepeat = 'no-repeat'; // Sin repetir la imagen base

        // Asegurar que el contenedor es relativo
        cell.style.position = 'relative';

        // Eliminar imágenes superpuestas previas (sin afectar el texto existente)
        const existingOverlays = cell.querySelectorAll('.overlay');
        existingOverlays.forEach((overlay) => overlay.remove());

        // Tamaño de cada imagen superpuesta
        const overlaySize = 20; // Tamaño de cada imagen en porcentaje

        // Calcular las filas y columnas en función del número de superposiciones
        const rows = Math.ceil(numOverlays / 3); // El número de filas necesario
        const cols = Math.min(numOverlays, 3);  // Maximo de 3 columnas por fila

        // Calcular el ancho y alto total para centrar las imágenes (sin separación)
        const totalWidth = overlaySize * cols; // Ancho total de las imágenes
        const totalHeight = overlaySize * rows; // Alto total para más de 3 imágenes (2 filas si es necesario)

        // Calcular el desplazamiento para centrar las imágenes en el contenedor
        const offsetX = (100 - totalWidth) / 2 + 10; // Desplazar aún más a la derecha
        const offsetY = (100 - totalHeight) / 2 + 8; // Desplazar hacia abajo

        // Crear las imágenes superpuestas
        for (let i = 0; i < numOverlays; i++) {
            const overlay = document.createElement('div');
            overlay.classList.add('overlay');
            overlay.style.width = `${overlaySize}%`; // Ajustamos el tamaño de las imágenes
            overlay.style.height = `${overlaySize}%`; // Ajustamos el tamaño de las imágenes
            overlay.style.backgroundImage = `url('${overlayImg}')`;
            overlay.style.backgroundSize = 'cover'; // La imagen superpuesta llena su círculo
            overlay.style.backgroundPosition = 'center';
            overlay.style.backgroundRepeat = 'no-repeat';
            overlay.style.borderRadius = '50%'; // Hacer que la imagen sea circular
            overlay.style.position = 'absolute';

            // Determinar la fila y columna de la imagen
            const row = Math.floor(i / 3); // Determina la fila
            const col = i % 3; // Determina la columna

            // Ajustar la posición de las imágenes cuando sean 4
            if (numOverlays === 4 && i === 3) {
                // Colocamos la cuarta imagen en la fila inferior, entre la primera y la segunda
                overlay.style.left = `calc(${offsetX + (overlaySize * 0.5)}%)`; // Posición media entre la 1 y 2
                overlay.style.top = `calc(${offsetY + overlaySize}%)`; // En la fila inferior
            }
            // Ajustar la posición de las imágenes cuando sean 5
            else if (numOverlays === 5 && i === 3) {
                // Colocamos la cuarta imagen en la fila inferior, entre la primera y la segunda
                overlay.style.left = `calc(${offsetX + (overlaySize * 0.5)}%)`; // Posición media entre la 1 y 2
                overlay.style.top = `calc(${offsetY + overlaySize}%)`; // En la fila inferior
            }
            else if (numOverlays === 5 && i === 4) {
                // Colocamos la quinta imagen justo al lado de la cuarta
                overlay.style.left = `calc(${offsetX + (overlaySize * 1.5)}%)`; // Al lado de la cuarta
                overlay.style.top = `calc(${offsetY + overlaySize}%)`; // En la fila inferior
            }
            else {
                // Para las imágenes restantes (normalmente las primeras tres)
                overlay.style.left = `calc(${offsetX + (overlaySize * col)}%)`; // Centrado horizontalmente
                overlay.style.top = `calc(${offsetY + (overlaySize * row)}%)`; // Centrado verticalmente
            }

            overlay.style.transform = 'translate(-50%, -50%)'; // Ajustar para centrar exactamente

            // Agregar la superposición al contenedor
            cell.appendChild(overlay);
        }
    }



let tablaPrice=[
[0,0],
[0,0],
[0,0],
[0,0],
[0,0],
[0,0],
[0,0],
];


function getPrice(j, i, cellPrecio) {
if(i===1){
tablaPrice[j-1][i-1]=cellPrecio;
return cellPrecio;
}
const priceAnterior=tablaPrice[j-1][i-2];
const f0 = getFloat(priceAnterior);
//TODO el precio se multiplica por 2 en cada upgrade
    let resultado = parseFloat(f0) * parseFloat(getFloat(2));
    tablaPrice[j-1][i-1]=resultado;
    return resultado;  // Retorna el valor formateado
}


function getMined(j, i, price) {
    return calcularETHPorHora(price,30);
}



function getFloat(number) {
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



function calcularETHPorHora(ethInvertido, diasROI) {
    // Calcular la cantidad de ETH necesaria por día para el ROI
    let ethPorDia = ethInvertido / diasROI;

    // Calcular la cantidad de ETH necesaria por hora
    let ethPorHora = ethPorDia / 24;

    // Retornar el resultado redondeado a 8 decimales
    return ethPorHora.toFixed(8);
}
