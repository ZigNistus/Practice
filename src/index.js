import Header from './body/header'
import MainCon from './body/main-con';

import NavSelect from './components/nav-select'

import ItemsList from './components/items-list'
import Item from './components/item';

import CartModal from './components/cart-modal';
import CartItem from './components/cart-modal/cart-item';

import './index.scss'
import 'normalize.css'


const generateItems = (mass) => {//Генерирует items на main
    mass.forEach((item) => {
        const onAdd = () => {
            item.count = 1;
            cart.push(item)
            sum += item.price;
        }

        const itemElement = Item(item.name, item.price, onAdd)
        document.getElementById('items-list__element').appendChild(itemElement)
    });
}

const generateCartItems = (mass) => {//Генерирует items в модальном окне
    mass.forEach((item) => {
        const ifExist = document.getElementById(`cart-item__${item.id}`)

        if (!ifExist) {
            const cartElement = CartItem(item.name, item.price, item.count, item.id);
            cartModalMain.appendChild(cartElement)
        } else {
            const sibling = document.getElementById(`cart-item__count__${item.id}`)
            sibling.innerText = Number(document.getElementById(`cart-item__count__${item.id}`).textContent) + 1
        }

    });
}

const cartShow = () => { //Показывает модальное окно
    cartModal.classList.add('active')
    const l = document.getElementById('cart-modal__total-sum')
    l.innerText = `${sum} руб.`
    generateCartItems(cart)
}

const sortMass = (mass) => { // Сортирует в соотвествии value select находящийся в items-list__bar
    if ((document.getElementById('items-list__select').value) == 'сначала недорогие')
        mass.sort((a, b) => {
            if (a.price > b.price) return 1;
            if (a.price < b.price) return -1;
            return 0
        })
    else {
        mass.sort((a, b) => {
            if (a.price > b.price) return -1;
            if (a.price < b.price) return 1;
            return 0
        })
    }
    return mass;
}

const searchOnPress = () => { //Генерирует item по ключу inputName
    let myNode = document.getElementById('items-list__element')
    const inputName = document.getElementById('items-list__input').value.toLowerCase();
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild)
    }

    cathUrl.then(resp => {
        let mass = resp.flat()
        mass = sortMass(mass)
        mass.forEach((item) => {
            const onAdd = () => {
                cart.push(item)
                item.count = 1;
                sum += item.price;
            }
            if (((item.name).includes(inputName, 0)) || inputName === '') {
                const itemElement = Item(item.name, item.price, onAdd)
                document.getElementById('items-list__element').appendChild(itemElement)
            }

        });
    })
}

const generateSelectItems = (i) => {
    let myNode = document.getElementById('items-list__element')
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild)
    }

    cathUrl.then(resp => {
        let mass = resp[i].flat()
        mass = sortMass(mass)
        mass.forEach((item) => {
            const onAdd = () => {
                cart.push(item)
                sum += item.price;
            }

            const itemElement = Item(item.name, item.price, onAdd)
            document.getElementById('items-list__element').appendChild(itemElement)
        })
    })

}

const clearInput = () => {
    const inputName = document.getElementById('items-list__input').value = ''
}

const onDishes = () => {
    clearInput()
    generateSelectItems(0)
}
const onDrinks = () => {
    clearInput()
    generateSelectItems(1)
}
const onSauces = () => {
    clearInput()
    generateSelectItems(2)
}
const onPizzas = () => {
    clearInput()
    generateSelectItems(3)
}

const header = Header(cartShow)
document.body.appendChild(header)

const mainContainer = MainCon()
document.body.appendChild(mainContainer)

const navSelect = NavSelect(onDishes, onDrinks, onSauces, onPizzas)
mainContainer.appendChild(navSelect)

let sum = 0

const cartModal = CartModal(sum)
document.body.appendChild(cartModal)
const cartModalMain = document.getElementById('cart-modal__main')

const itemsList = ItemsList(searchOnPress);
mainContainer.appendChild(itemsList)


let cart = []

const cathUrl = new Promise((resolve, reject) => {
    console.log('Catching data')
    setTimeout(() => {
        Promise.all(['dishes', 'drinks', 'sauces', 'pizzas'].map(id =>
            fetch(`http://localhost:3000/${id}`).then(resp => resp.json())))
            .then(resp => { generateItems(sortMass(resp.flat())); resolve(resp) })
        console.log('Data catched')
    }, 500)
})