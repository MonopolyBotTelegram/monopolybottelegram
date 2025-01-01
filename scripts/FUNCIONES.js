function FUNCIONES_mostrarModal0(cellNumber,cellRaresa,cellPrecio, cell, baseImg, nestedImg,cellFilaIndex,cellColIndex) {
    const cellEstrellas=MINEROS_get(cellFilaIndex,cellColIndex);

    console.log("FUNCIONES_mostrarModal0 " + cellFilaIndex + ':' + cellColIndex);

    const modal = document.getElementById('cellModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalTable = document.getElementById('modalTable');
    const footerBtn = document.getElementById('footerBtn');
    const closeModalBtn = document.querySelector('.close-button');
    const cellModalEstrellas = document.getElementById('cellModalEstrellas');

    // Establecer el título del modal
    modalTitle.textContent = cellRaresa;

    // Mostrar el modal
    modal.style.display = 'flex';

    // Establecer la imagen de fondo del modal
    modal.style.backgroundImage = `url('${baseImg}')`;
    modal.style.backgroundSize = 'cover';
    modal.style.backgroundPosition = 'center';

    // Crear la tabla dentro del modal
    modalTable.innerHTML = '';

    for (let i = 0; i < 7; i++) {
        const row = document.createElement('tr');
        for (let j = 0; j < 3; j++) {
            const cell = document.createElement('td');
            if (j === 0) {
                if (i === 0) {
                    // No se está añadiendo imagen aquí, pero puedes personalizarlo si es necesario.
                } else {
                    const text = document.createElement('span');
                    text.textContent = i;
                    text.style.color = '#000000';
                    text.style.fontStyle = 'bold';
                    cell.appendChild(text);
                }
            } else {
                const text = document.createElement('span');
                text.style.color = '#000000';
                text.style.fontStyle = 'bold';
                if (j === 1 && i === 0) {
                    text.textContent = 'Price ETH';
                } else if (j === 2 && i === 0) {
                    text.textContent = 'Mined eth/h';
                } else {
                    const price = getPrice(j, i, cellPrecio);
                    text.textContent = j === 1 ? price : getMined(j, i, price);
                }
                cell.appendChild(text);
            }
            row.appendChild(cell);
        }
        modalTable.appendChild(row);
    }

    // Agregar estrellas al contenedor
    cellModalEstrellas.innerHTML = '';
    for (let i = 0; i < cellEstrellas; i++) {
        const img = document.createElement('img');
        img.src = nestedImg;
        img.style.width = '20px';
        img.style.height = '20px';
        img.style.borderRadius = '50%';
        img.style.backgroundPosition = 'center';
        cellModalEstrellas.appendChild(img);
    }
    cellModalEstrellas.style.display = 'flex';
    cellModalEstrellas.style.justifyContent = 'center';
    cellModalEstrellas.style.alignItems = 'center';
    cellModalEstrellas.style.marginTop = '10px';

    // Eliminar cualquier controlador de eventos anterior y asignar nuevos
    footerBtn.replaceWith(footerBtn.cloneNode(true));
    const newFooterBtn = document.getElementById('footerBtn');
    newFooterBtn.addEventListener('click', async () => {
        modal.style.display = 'none';
        await openSecondModal(cellFilaIndex, cellColIndex);
    });

    // Cerrar el modal al hacer clic en el botón de cerrar (X)
    closeModalBtn.replaceWith(closeModalBtn.cloneNode(true));
    const newCloseModalBtn = document.querySelector('.close-button');
    newCloseModalBtn.addEventListener('click', () => {
        modal.style.display = 'none';
    });

    async function openSecondModal(cellFilaIndex, cellColIndex) {
        const loadingModal_upgrade = document.getElementById('loadingModal_upgrade');
        const screenBlocker_upgrade = document.getElementById('screenBlocker_upgrade');

        // Mostrar el modal de carga y bloquear la pantalla
        loadingModal_upgrade.style.display = 'flex';
        screenBlocker_upgrade.style.display = 'block';
        screenBlocker_upgrade.style.pointerEvents = 'all';

        const minero = await CONSTANTES_cellMineroByNumber()[parseInt(cellFilaIndex)][parseInt(cellColIndex)];
        console.log("openSecondModal(cellFilaIndex=" + cellFilaIndex + ", cellColIndex=" + cellColIndex + ") " + minero);

       const upgrade_ok= await MINEROS_updateMinerosAlerta('1', minero+cellEstrellas);
        // Ocultar el modal de carga y desbloquear la pantalla
        loadingModal_upgrade.style.display = 'none';
        screenBlocker_upgrade.style.display = 'none';
        screenBlocker_upgrade.style.pointerEvents = 'none';

        if(upgrade_ok){

            await MINEROS_set(cellFilaIndex, cellColIndex);
            await FUNCIONES_setHorizontalOverlays(cell, baseImg, nestedImg,cellFilaIndex,cellColIndex);
            // Actualizar el contenedor de estrellas
            const cellModalEstrellas = document.getElementById('cellModalEstrellas');
            await FUNCIONES_actualizarEstrellas(cellModalEstrellas, nestedImg, cellEstrellas+1);
        }

        alert('Upgrade completed');
    }


    async function FUNCIONES_actualizarEstrellas(cellModalEstrellas, nestedImg, cellEstrellas) {
        // Limpiar el contenido actual del contenedor
        cellModalEstrellas.innerHTML = '';

        // Generar nuevas estrellas
        for (let i = 0; i < cellEstrellas; i++) {
            const img = document.createElement('img');
            img.src = nestedImg; // Ruta de la imagen de la estrella
            img.style.width = '20px'; // Ajustar tamaño
            img.style.height = '20px';
            img.style.borderRadius = '50%';
            img.style.backgroundPosition = 'center';
            cellModalEstrellas.appendChild(img);
        }

        // Asegurar el diseño del contenedor
        cellModalEstrellas.style.display = 'flex';
        cellModalEstrellas.style.justifyContent = 'center';
        cellModalEstrellas.style.alignItems = 'center';
        cellModalEstrellas.style.marginTop = '10px';
    }

}





function FUNCIONES_mostrarModal1(text) {
const modal = document.getElementById('cellModal');
const modalText = document.getElementById('modalText');
modalText.textContent = text;
modal.style.display = 'block';
}


async function FUNCIONES_balance_cell(){await FUNCIONES_mostrarModal1('balance');}
async function FUNCIONES_mined_cell(){await FUNCIONES_mostrarModal1('mined');}
async function FUNCIONES_withdrawal_cell(){await FUNCIONES_mostrarModal1('withdrawal');}


async function FUNCIONES_setHorizontalOverlays(cell, baseImg, overlayImg,cellFilaIndex,cellColIndex) {

        const numOverlays=MINEROS_get(cellFilaIndex,cellColIndex);

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
const f0 =  getFloat(priceAnterior);
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
        //console.log(fixedNumber); // "123.45600000"
        return fixedNumber;  // Retorna el valor formateado
    } else {
        //console.log("El valor no es un número válido.");
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
