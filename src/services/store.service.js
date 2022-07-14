import { utilService } from "./util.service"

export const storeService = { 
    getStoreItems
}

const items = [
    { id: utilService.makeId(), name: 'Book1', price: 10.99, imgUrl: '../assets/imgs' },
    { id: utilService.makeId(), name: 'Book2', price: 10.99, imgUrl: '../assets/imgs' },
    { id: utilService.makeId(), name: 'Book3', price: 10.99, imgUrl: '../assets/imgs' },
    { id: utilService.makeId(), name: 'Book4', price: 10.99, imgUrl: '../assets/imgs' },
]

function getStoreItems() { 
    return items
}