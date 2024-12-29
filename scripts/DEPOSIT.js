function DEPOSIT_m() {
    const modal = document.getElementById('cellModal_deposit');
    const modalTable = document.getElementById('modalTable_deposit');
    const modalTitle = document.getElementById('modalTitle_deposit'); // Título del modal
    const closeModalBtn = document.getElementById('close_deposit-button');

    if (closeModalBtn) {
        closeModalBtn.addEventListener('click', () => {
            modal.style.display = 'none'; // Cerrar el modal
        });
    } else {
        console.error('El botón de cerrar no se encontró en el DOM');
    }

    // Establecer el título del modal
    modalTitle.textContent = 'Deposit';

    // Mostrar el modal al cambiar la propiedad display a 'flex'
    modal.style.display = 'flex';

    // Establecer la imagen de fondo del modal
    modal.style.backgroundColor = '#228B22';
    modal.style.backgroundSize = 'cover'; // Aseguramos que la imagen cubra todo el modal
    modal.style.backgroundPosition = 'center'; // Centrar la imagen

    // Limpiar el contenido anterior del modalTable
    modalTable.innerHTML = ''; // Elimina todo el contenido dentro de modalTable

    // Crear el campo para la dirección de ETH
    const addressContainer = document.createElement('div');
    addressContainer.classList.add('address-container');

    const addressText = document.createElement('span');
    addressText.textContent = VARIABLES_get_walletAddress(); // Mostrar la dirección de ETH
    addressContainer.appendChild(addressText);

    // Crear el botón de copiar
    const copyButton = document.createElement('button');
    copyButton.textContent = 'Copy Address';
    copyButton.classList.add('copy-button');
    addressContainer.appendChild(copyButton);

    // Crear el contenedor de la nota importante
    const noteContainer = document.createElement('div');
    noteContainer.classList.add('note-container'); // Agregar clase para estilo

    const nota = 'Important note: The deposit only allows ETH on the BASE network.';
    const noteText = document.createElement('span');
    noteText.textContent = nota; // Mostrar la nota importante

    noteContainer.appendChild(noteText);

    // Agregar el contenedor de la nota importante al modal (antes de la dirección)
    modalTable.appendChild(noteContainer);

    // Agregar el contenedor de la dirección y el botón al modal (debajo de la nota)
    modalTable.appendChild(addressContainer);

    // Agregar funcionalidad de copiar al botón
    copyButton.addEventListener('click', () => {
        // Copiar la dirección al portapapeles
        navigator.clipboard.writeText(VARIABLES_get_walletAddress()).then(() => {
            // Al copiar, cambiar el texto del botón y agregar estilo para marcar que se copió
            copyButton.textContent = 'Address Copied!';
            copyButton.classList.add('copied');

            // Restaurar el texto después de 2 segundos
            setTimeout(() => {
                copyButton.textContent = 'Copy Address';
                copyButton.classList.remove('copied');
            }, 2000);
        }).catch(err => {
            console.error('Error copying text: ', err);
        });
    });
}
