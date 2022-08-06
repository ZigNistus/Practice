import './items-list.scss';
const ItemsList = (searchOnPress) => {
    const itemListDiv = document.createElement('div')
    itemListDiv.className = 'items-list'
    
    const itemListElement = document.createElement('div')
    itemListElement.className = 'items-list__element'
    itemListElement.id = 'items-list__element'

    const itemListBar = document.createElement('div')
    itemListBar.className = 'items-list__bar'
    
    const itemListInput = document.createElement('input')
    itemListInput.type = 'text'
    itemListInput.placeholder = 'Поиск по каталогу'
    itemListInput.className = 'items-list__input'
    itemListInput.id = 'items-list__input'
    itemListInput.addEventListener('keyup', searchOnPress)

    const itemListSelectTitle = document.createElement('span')
    itemListSelectTitle.className = 'items-list__select-title'
    itemListSelectTitle.innerText = 'Сортировать :'
    
    const itemListSelect = document.createElement('select')
    itemListSelect.className = 'items-list__select'
    itemListSelect.id = 'items-list__select'
    itemListSelect.addEventListener('click', searchOnPress)

    
    const optionFirst = document.createElement('option'); const optionSecond = document.createElement('option')
    optionFirst.innerText = 'сначала дорогие'
    optionSecond.innerText = 'сначала недорогие'
    
    itemListSelect.appendChild(optionFirst)
    itemListSelect.appendChild(optionSecond)
    
    itemListDiv.appendChild(itemListBar)
    
    itemListBar.appendChild(itemListInput)
    itemListBar.appendChild(itemListSelectTitle)
    itemListBar.appendChild(itemListSelect)

    itemListDiv.appendChild(itemListElement)

    return itemListDiv
}

export default ItemsList