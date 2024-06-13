// Cambio de cantidad de articulos ingresado por usuario.
let minusBtn= document.querySelector ('.input__minus');
let plusBtn= document.querySelector ('.input__plus');
let userInput= document.querySelector ('.input__number')

let userInputNumber = 0;
plusBtn.addEventListener('click', ()=>{
    userInputNumber++;
    userInput.value = userInputNumber;
    console.log(userInputNumber)
});
minusBtn.addEventListener('click', ()=>{
    userInputNumber--;
    if(userInputNumber<= 0){
        userInputNumber = 0;
    }
    userInput.value = userInputNumber;
    console.log(userInputNumber)
});

// Agregar el total de productos al carrito con boton add to cart
const addToCartBtn = document.querySelector ('.details__button');
let cartNumber= document.querySelector ('.header__cart--number')
let lastValue = parseInt(cartNumber.innerText);

addToCartBtn.addEventListener('click', ()=>{

    lastValue = lastValue + userInputNumber;

    cartNumber.innerText = lastValue;
    cartNumber.style.display = 'block'
    drawProductoInModal();
});

// Mostrar/ocultar modal sobre el carrito + Detalle sobre el carrito
let cartModal= document.querySelector ('.cart-modal')
// let priceModal = document.querySelector('.cart-modal__price');
const productContainer = document.querySelector('.cart-modal__checkout-container');

function ShowHide(){
    var cartModal = document.getElementsByClassName("cart-modal")[0];
    if(cartModal.style.display == 'none'){
        cartModal.style.display = 'block';
    }
    else{
        cartModal.style.display = 'none';
    }
    if(lastValue === 0){
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
        
    }else{
        drawProductoInModal();
    }
}

// Borrar el contenido del carrito
function deleteProduct(){
    const deleteProductBtn = document.querySelector('.cart-modal__delete');


    deleteProductBtn.addEventListener('click', ()=>{
        productContainer.innerHTML = '<p class="cart-empty">Your cart is empty.</p>';
        lastValue = 0;
        cartNumber.innerText = lastValue;

    });
}
// Cambiar imagenes con flecha
    const imageContainer = document.querySelector('.gallery__image-container');
    const nextGalleryBtn = document.querySelector('.gallery__next');
    const previousGalleryBtn = document.querySelector('.gallery__previous');
    let imgIndex = 1;

    const imageUrls = [
        '../images/image-product-1.jpg',
        '../images/image-product-2.jpg',
        '../images/image-product-3.jpg',
        '../images/image-product-4.jpg'
    ]

    nextGalleryBtn.addEventListener('click', ()=>{
        changeNextImage(imageContainer);
    });
    previousGalleryBtn.addEventListener('click', ()=>{
        changePreviousImage(imageContainer);
    });

    // Mostrar modal de imagenes cuando se presiona en imagen principal
    const imageModal = document.querySelector('.modal-gallery__background')
    const closeModalBtn = document.querySelector('.modal-gallery__close')

    imageContainer.addEventListener('click', ()=>{
        imageModal.style.display = 'grid';   
    });

    closeModalBtn.addEventListener('click', ()=>{
        imageModal.style.display = 'none';
    });
    // Cambiar imagen principal desde los thumbnails
    let thumbnails = document.querySelectorAll('.gallery__thumbnail')
    thumbnaisl = [...thumbnails]

    thumbnails.forEach(thumbnail =>{
        thumbnail.addEventListener('click', event=>{
            console.log(event.target.id)
            imageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id}.jpg')`
        })
    });
    // Cambiar imagen principal en modal desde los thumbnails
    let modalthumbnails = document.querySelectorAll('.modal-gallery__thumbnail');
    const modalImageContainer = document.querySelector('.modal-gallery__image-container')

    modalthumbnaisl = [...modalthumbnails]

    modalthumbnails.forEach(modalthumbnail =>{
        modalthumbnail.addEventListener('click', event=>{
            console.log(event.target.id.slice(-1))
            modalImageContainer.style.backgroundImage = `url('../images/image-product-${event.target.id.slice(-1)}.jpg')`
        })
    });
    // Cambiar imagen principal en modal con flechas
    const nextModalBtn = document.querySelector('.modal-gallery__next');
    const previousModalBtn = document.querySelector('.modal-gallery__previous')

    nextModalBtn.addEventListener('click', ()=>{
        changeNextImage(modalImageContainer);
    });
    previousModalBtn.addEventListener('click', ()=>{
        changePreviousImage(modalImageContainer);
    });

    // Mostrar navbar en mobile
    const navBurgerBtn = document.querySelector('.header__menu')
    let modalNavbar = document.querySelector('.modal--navbar__background')
    const closeModalNavbarBtn = document.querySelector('.modal--navbar__close--icon')

    navBurgerBtn.addEventListener('click', ()=>{
        modalNavbar.style.display = 'flex';
    })
    closeModalNavbarBtn.addEventListener('click', ()=>{
        modalNavbar.style.display = 'none';
    });
    
    


    

// Funciones
function drawProductoInModal(){
    productContainer.innerHTML = `
    <div class="cart-modal__details-container">
        <img src="images/image-product-1-thumbnail.jpg" alt="thumbnail-1" class="cart-modal__image">
            <div>
                <p class="cart-modal__product">Autumn Limited Edition...</p>
                <p class="cart-modal__price">$125.00 x3 <span>$375.00</span></p>
            </div>
        <img src="images/icon-delete.svg" alt="delete" class="cart-modal__delete">
    </div>
    <button class="cart-modal__checkout">Checkout</button>`
    deleteProduct()
    let priceModal = document.querySelector('.cart-modal__price');
    priceModal.innerHTML = `$125.00 x${lastValue} <span>$${lastValue*125}.00</span>`
}
function changeNextImage(imgContainer){
    if (imgIndex === 4){
        imgIndex = 1;
    }else{
        imgIndex++;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
}
function changePreviousImage(imgContainer){
    if (imgIndex === 1){
        imgIndex = 4;
    }else{
        imgIndex--;
    }
    imgContainer.style.backgroundImage = `url('../images/image-product-${imgIndex}.jpg')`
}
