import CartImg from '../../assets/img/cart.png'
import './header.scss'

const Header = (cartShow) => {
    const headerNav = document.createElement('nav')
    headerNav.className = 'header'

    const headerElement = document.createElement('div')
    headerElement.className = 'header__container'

    const headerTitle = document.createElement('span')
    headerTitle.className = 'header__title'
    headerTitle.innerText = 'ЛАВКА'

    const headerCartBtn = document.createElement('button')
    headerCartBtn.className = 'header__cartbtn'
    headerCartBtn.addEventListener('click', cartShow)

    const imgCart = document.createElement('img')
    imgCart.src = CartImg;
    imgCart.className = 'header__cartimg'

    headerNav.appendChild(headerElement)
    headerElement.appendChild(headerTitle)
    headerElement.appendChild(headerCartBtn)
    headerCartBtn.appendChild(imgCart)

    return headerNav
}

export default Header