import './cart-modal.scss'

const CartModal = () => {
    const cartModalContainer = document.createElement('div')
    cartModalContainer.className = 'cart-modal'

    const top = document.createElement('div')
    top.className = 'cart-modal__top'
    
    const cartModalBody = document.createElement('div')
    cartModalBody.className = 'cart-modal__body'
   
    
    const cartModalMain = document.createElement('div')
    cartModalMain.id = 'cart-modal__main'
    
    const cartModalCloseBtn = document.createElement('div')
    cartModalCloseBtn.className = 'cart-modal__close-btn'
    cartModalCloseBtn.innerText = '✕'
    
    const close = () => {
        cartModalContainer.classList.remove('active')
        let myNode = document.getElementById('cart-modal__main')
        setTimeout(() => {
            while (myNode.firstChild)
            {
                myNode.removeChild(myNode.firstChild)
            }
        }, 300)
        
    }
    cartModalCloseBtn.addEventListener('click', close)

    
    const cartModalTitle = document.createElement('span')
    cartModalTitle.className = 'cart-modal__title'
    cartModalTitle.innerText = 'Мой заказ'

    const border = document.createElement('hr')
    border.className = 'cart-modal__border'

    const cartModalTotal = document.createElement('div')
    cartModalTotal.className = 'cart-modal__total'

    const cartModalTotalText = document.createElement('span')
    cartModalTotalText.className = 'cart-modal__total-text'
    cartModalTotalText.innerText = 'Итого'
    
    const cartModalTotalSum = document.createElement('span')
    cartModalTotalSum.id = 'cart-modal__total-sum'
    cartModalTotalSum.innerText = `0 руб.`
    
    const cartModalOrder = document.createElement('button')
    cartModalOrder.className = 'cart-modal__order'
    cartModalOrder.innerText = 'Заказать'
    
    const endOrder = () => {
        const endPromise = new Promise((resolve, reject) => {
            let myNode = document.getElementById('cart-modal__main')
            setTimeout(() => {
                console.log('Sending data to server')
                console.log('Data succeful arrived')
                resolve(myNode)
            }, 500)
        }).then(
            setTimeout((myNode) => {
                cartModalContainer.classList.remove('active')
            }, 300)
        ).then((myNode) => {
            setTimeout(() => {
                while(myNode.firstChild)
            {
                myNode.removeChild(myNode.firstChild)
            }
            }, 300)
            
        }   
        )
    }
    
    cartModalOrder.addEventListener('click', endOrder)
    
    
    cartModalContainer.appendChild(cartModalBody)
    
    cartModalBody.appendChild(top)
    top.appendChild(cartModalTitle)
    top.appendChild(cartModalCloseBtn)
    
    cartModalBody.appendChild(cartModalMain)
    cartModalBody.appendChild(border)

    cartModalBody.appendChild(cartModalTotal)
    cartModalTotal.appendChild(cartModalTotalText)
    cartModalTotal.appendChild(cartModalTotalSum)
    
    cartModalBody.appendChild(cartModalOrder)
    
    return cartModalContainer
}

export default CartModal
