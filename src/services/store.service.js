import { utilService } from "./util.service"

export const storeService = { 
    getStoreItems
}

const items = [
    { id: utilService.makeId(), name: 'Book1', price: 10.99, imgUrl: '../assets/imgs/brownCouch.avif' },
    { id: utilService.makeId(), name: 'Book2', price: 10.99, imgUrl: '../assets/imgs/grey-couch.avif' },
    { id: utilService.makeId(), name: 'Book3', price: 10.99, imgUrl: '../assets/imgs/light-blue-couch.avif' },
    { id: utilService.makeId(), name: 'Book4', price: 10.99, imgUrl: '../assets/imgs/white-couch.avif' },
]

function getStoreItems() { 
    return items
}