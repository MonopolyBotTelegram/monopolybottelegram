function CREATOR_balance_cell() {
    const balance_cells = document.getElementsByClassName('balance-cell'); // Selecciona todos los elementos con la clase 'balance-cell'

    // Establecer la imagen de fondo
    balance_cells[0].style.backgroundImage = `url('${CONSTANTES_cellImg0()}')`;
    balance_cells[0].style.backgroundSize = '75% 50%'; // Ajusta el tamaño de la imagen al 75% de la celda
    balance_cells[0].style.backgroundPosition = 'center bottom'; // Centra la imagen en la parte inferior
    balance_cells[0].style.backgroundRepeat = 'no-repeat'; // Evita que la imagen se repita
    balance_cells[0].style.position = 'relative'; // Asegura que los elementos dentro de la celda estén posicionados en relación a la celda

    // Verificar si el texto ya existe
    let cellText = balance_cells[0].querySelector('span');
    if (!cellText) {
        // Si no existe, crear el texto
        cellText = document.createElement('span');
        cellText.textContent = '0.00000000 ETH';  // Establece el texto
        balance_cells[0].appendChild(cellText);
    }

    // Estilo para el texto
    cellText.style.position = 'absolute';  // Posiciona el texto de forma absoluta
    cellText.style.top = '65%';  // Desplaza el texto un poco más hacia abajo, ajusta el valor según lo necesites
    cellText.style.left = '50%';  // Centra el texto horizontalmente
    cellText.style.transform = 'translateX(-50%)';  // Ajusta para que el texto esté exactamente centrado horizontalmente
    cellText.style.fontSize = '16px';  // Tamaño de la fuente ajustable
    cellText.style.color = 'black';  // Color del texto negro
    cellText.style.fontWeight = 'bold';  // Hacer el texto más destacado
    cellText.style.textShadow = '2px 2px 4px rgba(255, 255, 255, 0.7)'; // Agregar sombra para mejorar la legibilidad

    // Evento al hacer clic
    balance_cells[0].onclick = function() {
        FUNCIONES_balance_cell();
    };
}





function CREATOR_mined_cell() {
    const mined_cells = document.getElementsByClassName('mined-cell'); // Selecciona todos los elementos con la clase 'mined-cell'

    // Establecer la imagen de fondo
    mined_cells[0].style.backgroundImage = `url('${CONSTANTES_cellImg1()}')`;
    mined_cells[0].style.backgroundSize = '75% 50%'; // Ajusta el tamaño de la imagen al 75% de la celda
    mined_cells[0].style.backgroundPosition = 'center'; // Centra la imagen dentro de la celda
    mined_cells[0].style.backgroundRepeat = 'no-repeat'; // Evita que la imagen se repita
    mined_cells[0].style.position = 'relative'; // Asegura que los elementos dentro de la celda estén posicionados en relación a la celda

    // Verificar si el texto ya existe
    let cellText = mined_cells[0].querySelector('span');
    if (!cellText) {
        // Si no existe, crear el texto
        cellText = document.createElement('span');
        cellText.textContent = '0.00000000 eth/h';  // Establece el texto (ajústalo según lo necesites)
        mined_cells[0].appendChild(cellText);
    }

    // Estilo para el texto
    cellText.style.position = 'absolute';  // Posiciona el texto de forma absoluta
    cellText.style.top = '40%';  // Coloca el texto un poco más arriba, dentro de la imagen (ajusta según lo necesites)
    cellText.style.left = '50%';  // Centra el texto horizontalmente
    cellText.style.transform = 'translateX(-50%)';  // Ajusta para que el texto esté exactamente centrado horizontalmente
    cellText.style.fontSize = '16px';  // Tamaño de la fuente ajustable
    cellText.style.color = 'black';  // Color del texto negro
    cellText.style.fontWeight = 'bold';  // Hacer el texto más destacado
    cellText.style.textShadow = '2px 2px 4px rgba(255, 255, 255, 0.7)'; // Agregar sombra para mejorar la legibilidad

    // Evento al hacer clic
    mined_cells[0].onclick = function() {
        FUNCIONES_mined_cell();
    };
}





function CREATOR_deposit_cell() {
    const deposit_cell = document.getElementsByClassName('deposit-cell'); // Selecciona todos los elementos con la clase 'deposit-cell'

    // Establecer la imagen de fondo
    deposit_cell[0].style.backgroundImage = `url('${CONSTANTES_cellImg2()}')`;
    deposit_cell[0].style.backgroundSize = '75% 50%'; // Ajusta el tamaño de la imagen al 75% de la celda
    deposit_cell[0].style.backgroundPosition = 'center'; // Centra la imagen dentro de la celda
    deposit_cell[0].style.backgroundRepeat = 'no-repeat'; // Evita que la imagen se repita
    deposit_cell[0].style.position = 'relative'; // Asegura que los elementos dentro de la celda estén posicionados en relación a la celda

    // Verificar si el texto ya existe
    let cellText = deposit_cell[0].querySelector('span');
    if (!cellText) {
        // Si no existe, crear el texto
        cellText = document.createElement('span');
        cellText.textContent = 'Deposit';  // Establece el texto (ajústalo según lo necesites)
        deposit_cell[0].appendChild(cellText);
    }

    // Estilo para el texto
    cellText.style.position = 'absolute';  // Posiciona el texto de forma absoluta
    cellText.style.top = '40%';  // Ajusta la posición vertical del texto dentro de la imagen
    cellText.style.left = '50%';  // Centra el texto horizontalmente
    cellText.style.transform = 'translateX(-50%)';  // Ajusta para que el texto esté exactamente centrado horizontalmente
    cellText.style.fontSize = '16px';  // Tamaño de la fuente ajustable
    cellText.style.color = 'black';  // Color del texto negro
    cellText.style.fontWeight = 'bold';  // Hacer el texto más destacado
    cellText.style.textShadow = '2px 2px 4px rgba(255, 255, 255, 0.7)'; // Agregar sombra para mejorar la legibilidad

    // Evento al hacer clic
    deposit_cell[0].onclick = function() {
        FUNCIONES_deposit_cell();
    };
}



function CREATOR_withdrawal_cell() {
    const withdrawal_cells = document.getElementsByClassName('withdrawal-cell'); // Selecciona todos los elementos con la clase 'withdrawal-cell'

    // Establecer la imagen de fondo
    withdrawal_cells[0].style.backgroundImage = `url('${CONSTANTES_cellImg3()}')`;
    withdrawal_cells[0].style.backgroundSize = '75% 50%'; // Ajusta el tamaño de la imagen al 75% de la celda
    withdrawal_cells[0].style.backgroundPosition = 'center top'; // Centra la imagen horizontalmente y la posiciona en la parte superior de la celda
    withdrawal_cells[0].style.backgroundRepeat = 'no-repeat'; // Evita que la imagen se repita
    withdrawal_cells[0].style.position = 'relative'; // Asegura que los elementos dentro de la celda estén posicionados en relación a la celda

    // Verificar si el texto ya existe
    let cellText = withdrawal_cells[0].querySelector('span');
    if (!cellText) {
        // Si no existe, crear el texto
        cellText = document.createElement('span');
        cellText.textContent = 'Withdrawal';  // Establece el texto (ajústalo según lo necesites)
        withdrawal_cells[0].appendChild(cellText);
    }

    // Estilo para el texto
    cellText.style.position = 'absolute';  // Posiciona el texto de forma absoluta
    cellText.style.top = '10%';  // Ajustamos para que el texto quede más cerca de la parte superior de la imagen
    cellText.style.left = '50%';  // Centra el texto horizontalmente
    cellText.style.transform = 'translateX(-50%)';  // Ajusta para centrar el texto horizontalmente
    cellText.style.fontSize = '16px';  // Tamaño de la fuente ajustable
    cellText.style.color = 'black';  // Color del texto negro
    cellText.style.fontWeight = 'bold';  // Hacer el texto más destacado
    cellText.style.textShadow = '2px 2px 4px rgba(255, 255, 255, 0.7)'; // Agregar sombra para mejorar la legibilidad

    // Evento al hacer clic
    withdrawal_cells[0].onclick = function() {
        FUNCIONES_withdrawal_cell();
    };
}

