// Services
import { storeService } from "../services/store.service"

// CMPS
import { ItemList } from '../cmps/item-list'

export function Store() {
    return <div className="store-page main-layout">
        <div className="store-header">
            <h2>Store header</h2>
            <p>Here you can find many Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis ipsa architecto laboriosam minima facilis eligendi!</p>
            <p>And! feel free to Lorem, ipsum dolor sit amet consectetur adipisicing.</p>
        </div>
        <div className="store-content">
            <ItemList />
        </div>
    </div>
}