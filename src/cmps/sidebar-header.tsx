import { MdClose } from 'react-icons/md';
import { useShoppingCart } from '../context/shopping-cart-context';

export function SideBarHeader({title} : any) { 
    const { closeCart } = useShoppingCart()

    const toggleSideMenu = () => { 
        closeCart()
    }

    return (<div className="side-bar-header">
        <button className="close-btn"><MdClose className='primary-menu-close-btn' onClick={() => {
                toggleSideMenu()
            }}/></button>
        <h2>{title}</h2>
    </div>)
}