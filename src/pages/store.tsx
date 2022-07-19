// Services
import { storeService } from "../services/store.service"

// CMPS
import { ItemList } from '../cmps/item-list'
import { useEffect, useState } from "react"

type item = {
    id: string;
    name: string;
    price: number;
    imgUrl: string
}

export function Store() {

    const [items, setItems] = useState<item[]>([])

    useEffect(() => { 
        const items2 = storeService.getStoreItems()
        setItems(items2)
    }, [])

    return <div className="store-page main-layout">
        <div className="store-header">
            <h1>Our couches in Kejuro!</h1>
            <p>Here you can find many Lorem ipsg elit. Quis ipsa architecto laboriosam minima facilis eligendi!</p>
            <p>Buy your favourite couch!</p>
        </div>
        <div className="store-content">
            <ItemList items={items}/>
        </div>
    </div>
}