import './nav-select.scss'

const NavSelect = (onDishes, onDrinks, onSauces, onPizzas) => {
    const navSelectElement = document.createElement('div')
    navSelectElement.className = 'nav-select'

    const navSelectContainer = document.createElement('div')
    navSelectContainer.className = 'nav-select__container'

    const navTitle = document.createElement('span')
    navTitle.className = 'nav-select__title'
    navTitle.innerText = 'Каталог'

    const navDishes = document.createElement('a')
    navDishes.addEventListener('click', onDishes)
    navDishes.className = 'nav-select__category'
    navDishes.innerText = 'Блюда'
    
    const navDrinks = document.createElement('a')
    navDrinks.className = 'nav-select__category'
    navDrinks.innerText = 'Напитки'
    navDrinks.addEventListener('click', onDrinks)
    
    const navSauces = document.createElement('a')
    navSauces.className = 'nav-select__category'
    navSauces.innerText = 'Соусы'
    navSauces.addEventListener('click', onSauces)
    
    
    const navPizzas = document.createElement('a')
    navPizzas.className = 'nav-select__category'
    navPizzas.innerText = 'Пицца'
    navPizzas.addEventListener('click', onPizzas)

    navSelectElement.appendChild(navSelectContainer)
    navSelectContainer.appendChild(navTitle)
    navSelectContainer.appendChild(navDishes)
    navSelectContainer.appendChild(navDrinks)
    navSelectContainer.appendChild(navSauces)
    navSelectContainer.appendChild(navPizzas)
    
    return navSelectElement
}

export default NavSelect