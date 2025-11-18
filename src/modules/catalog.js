const catalog = () => {
    const btnCatalog = document.querySelector('.catalog-button > button');
    const catalogModal = document.querySelector('.catalog');
    let isOpen = false;
    btnCatalog.addEventListener('click', () => {
        isOpen = !isOpen
        if (isOpen) {
            catalogModal.style.display = 'block'
        } else {
            catalogModal.style.display = ''
        }

    })
}

export default catalog;