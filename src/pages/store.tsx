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
            <h2>Store header</h2>
            <p>Here you can find many Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsa architecto laboriosam minima facilis eligendi!</p>
            <p>And! feel free to Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="store-content">
            <ItemList items={items}/>
        </div>
    </div>
}