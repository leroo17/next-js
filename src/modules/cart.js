const cart = () => {
    // console.log(document);
    const cardBtn = document.getElementById('cart');
    const cartModal = document.querySelector('.cart');
    const cartCloseBtn = document.querySelector('.cart-close');

    const cartClose = () => {
        cartModal.style.display = 'none';
    }
    const cartOpen = () => {
        cartModal.style.display = 'flex';
    }

    cardBtn.addEventListener('click', cartOpen);

    // cardBtn.onclick = function() {
    //     cartOpen();
    // };

    cartCloseBtn.onclick = cartClose;
};

export default cart;