import { useShoppingCart } from "../context/shopping-cart-context"
import { SideBarHeader } from "./sidebar-header"
import { CartItem } from './cart-item'
import { utilService } from "../services/util.service"
import { storeService } from '../services/store.service'

type SideBarProps = {
    isOpen: boolean
}

export function SideBar({ isOpen } : SideBarProps) { 
    const { cartItems } = useShoppingCart()
    const items = storeService.getStoreItems()
    
    return (<div className={`side-bar ${isOpen ? 'open' : ''}`} >
        <SideBarHeader title={'Cart'}/>
        <div className="side-bar-content">
            {cartItems.map(item => (
                <CartItem key={item.id} {...item} />
            ))}
        </div>
        <div className="side-bar-footer">
            <h3>Total: {utilService.getFormatCurrence(cartItems.reduce((total, cartItem) => { 
                const item = items.find(i => i.id === cartItem.id)
                return total + (item?.price || 0 ) * cartItem.quantity
            }, 0))} </h3>
        </div>
    </div>)
}