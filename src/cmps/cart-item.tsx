import { storeService } from "../services/store.service";
import { utilService } from "../services/util.service";
import { useShoppingCart } from "../context/shopping-cart-context";

type CartItemProps = {
    id: string;
    quantity: number;
}

export function CartItem({ id, quantity }: CartItemProps) {
    const { removeFromCart } = useShoppingCart()
    const items = storeService.getStoreItems()
    const item = items.find(currItem => currItem.id === id)
    if (!item) return null
    return <div className="cart-item">
        <img src={item.imgUrl} alt="couch image" />
        <div className="cart-item-content">
            <div className="cart-item-info">
                <div className="cart-item-seperate-details">
                    <h3>{item.name} {quantity > 1 && <span className="quantity-number">x{quantity}</span>} </h3>
                    <span>{utilService.getFormatCurrence(item.price)}</span>
                </div>
                <p className="cart-item-total-price">{utilService.getFormatCurrence(item.price * quantity)}</p>
            </div>
            <div className="cart-item-options">
                <button className="remove-btn" onClick={() => { 
                    removeFromCart(item.id)
                }}>Remove from cart</button>
            </div>
        </div>
    </div>
}