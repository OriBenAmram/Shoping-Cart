import { utilService } from "./util.service"
import green from '../assets/imgs/green.jpg'
import blue from '../assets/imgs/blue.jpg'
import brown from '../assets/imgs/brown.jpg'
import brown2 from '../assets/imgs/brown2.jpg'

export const storeService = { 
    getStoreItems
}

const items = [
    { id: utilService.makeId(), name: 'Green dragon', price: 120.99, imgUrl: green },
    { id: utilService.makeId(), name: 'Browninous', price: 110.99, imgUrl: brown2 },
    { id: utilService.makeId(), name: 'Lether Fun', price: 95.99, imgUrl: brown },
    { id: utilService.makeId(), name: 'Ocean Touch', price: 134.99, imgUrl: blue },
]

function getStoreItems() { 
    return items
}