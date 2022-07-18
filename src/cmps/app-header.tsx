import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// Icons
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineShoppingCart } from 'react-icons/ai';
import { useShoppingCart } from '../context/shopping-cart-context';

export function AppHeader() {
    const [isMenuOpen, setMenuState] = useState(false)
    const { openCart, closeCart, cartQuantity } = useShoppingCart()
    const toggleMenu = () => {
        setMenuState(!isMenuOpen)
    }

    const onClickCart = () => {
        console.log('cart is clicked')
    }

    return (
        <header className="app-header">

            <div className={`screen-overlay ${(isMenuOpen) ? 'open' : ''}`} onClick={() => {
                toggleMenu()
            }}></div>

            <div className="header-content main-layout">
                <NavLink className='logo' to={'/'}>Logo</NavLink>
                <nav className="nav-container">
                    <ul className={`nav-links clean-list ${(isMenuOpen) ? 'open' : ''}`}>
                        <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/'}> <li>Home</li></NavLink>
                        <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/store'}> <li>Store</li></NavLink>
                        <NavLink className={(navData) => navData.isActive ? 'active' : ''} to={'/about'}> <li>About</li></NavLink>
                        <button title='cart' className="cart-btn" onClick={() => {
                            openCart()
                        }}>
                            <AiOutlineShoppingCart className="cart-icon" />
                            <div className="items-counter-container">{cartQuantity}</div>
                        </button>
                    </ul>
                </nav>
                <button className="hamburger-btn" onClick={() => {
                    toggleMenu()
                }}>
                    <GiHamburgerMenu className="hamburger-icon" />
                </button>

            </div>
        </header>
    )
}