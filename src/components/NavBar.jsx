import { IconShoppingCart } from '@tabler/icons-react';

//Routes
import { Link } from 'react-router-dom';

//Context
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';

import './NavBar.css';
const NavBar = () => {
    const { cart } = useContext(CartContext)
    return (
        <div className='nav-container'>

            <Link to={'/'}>
                <div >
                    <h4>Pizzaria  dos <br /> <span>amigos</span></h4>
                </div>
            </Link>

            <Link to={'/carrinho'}>
                <div className="nav-icon">
                    <IconShoppingCart
                        size={35}
                        color='#C62828'
                        stroke={1.5} />
                    <span>{cart.length}</span>
                </div>
            </Link>

        </div>
    )
}

export default NavBar