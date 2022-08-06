import './cart-item.scss'

const CartItem = (name, price, count, id) => {
    const cartModalItem = document.createElement('div')
    cartModalItem.className = 'cart-item'
    cartModalItem.id = `cart-item__${id}`

    const cartName = document.createElement('span')
    cartName.className = 'cart-item__name'
    cartName.innerText = name

    const cartSumCount = document.createElement('div')
    cartSumCount.className = 'cart-item__sum-count'
    
    const cartPrice = document.createElement('span')
    cartPrice.className = 'cart-item__price'
    cartPrice.innerText = ` ${price} руб.  x `
    
    const cartCount = document.createElement('span')
    cartCount.className = 'cart-item__count'
    cartCount.id = `cart-item__count__${id}`

    cartCount.innerText = `${count}`

    cartModalItem.appendChild(cartName)
    cartModalItem.appendChild(cartSumCount)
    cartSumCount.appendChild(cartPrice)
    cartSumCount.appendChild(cartCount)

    return cartModalItem
}

export default CartItem