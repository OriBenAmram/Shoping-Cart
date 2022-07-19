
import { useState } from 'react';
import { useShoppingCart } from '../context/shopping-cart-context';

// Services
import { utilService } from '../services/util.service'

type ItemPreviewProps = {
    item: {
        id: string;
        name: string;
        price: number;
        imgUrl: string;
    }
}

export function ItemPreview({ item }: ItemPreviewProps) {
    const { getItemQuantity, increaseCartQuantity, decreaseCartQuantity, removeFromCart } = useShoppingCart()
    const quantity = getItemQuantity(item.id)

    return (
        <div className="item-preview">

            <div className="item-image">
                <img src={item.imgUrl} alt="couch-image" />
                <span className="img-fade"></span>
                <div className="img-fade-bottom">
                    <div className="top-cover-fade"></div>
                    <div className="bottom-cover-fade"></div>
                </div>
                {!quantity && <button className="primary-btn" onClick={() => {
                    increaseCartQuantity(item.id)
                }}>Add to cart</button>}
                {!!quantity && <button className="remove-btn" onClick={() => {
                    removeFromCart(item.id)
                }}>Remove from cart</button>}
                {!!quantity && <div className="cart-options">
                    <button onClick={() => {
                        decreaseCartQuantity(item.id)
                    }}>-</button>
                    <span>{quantity} in cart</span>
                    <button onClick={() => {
                        increaseCartQuantity(item.id)
                    }}>+</button>
                </div>}
            </div>
            <div className="item-info">
                <span className="item-name">{item.name}</span>
                <span className="item-price">{utilService.getFormatCurrence(item.price)}</span>
            </div>
        </div>
    )
}