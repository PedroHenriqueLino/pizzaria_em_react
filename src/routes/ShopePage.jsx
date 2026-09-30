import { IconArrowNarrowLeft } from '@tabler/icons-react';
import { IconShoppingCart } from '@tabler/icons-react';
import { IconPlus } from '@tabler/icons-react';
import { IconTrashX } from '@tabler/icons-react';

import { Link } from 'react-router-dom'

//Context
import { useContext } from 'react';
import { CartContext } from '../Context/CartContext';


//css
import './styles/ShopePage.css';

const ShopePage = () => {
    const { cart: products, result, removeCart } = useContext(CartContext)
    const { addToCart } = useContext(CartContext)

    const images = import.meta.glob(
        '../assets/Cardapio/*',
        {
            eager: true,
            query: '?url',
            import: 'default'
        }
    );
    return (
        <div>

            <div className="content-cart">
                <Link to={'/'}>
                    <button className='btn-back'>

                        < IconArrowNarrowLeft size={'40px'} />
                        <p>Voltar</p>

                    </button>
                </Link>
                <div className="nav-title">
                    <p>Seu Carrinho</p>
                    <IconShoppingCart
                        size={35}
                        color='#C62828'
                        stroke={1.5} />
                </div>

                <div className="menu-container">
                    <section className="menu-products">

                        <ul className="menu-products-list">
                            {products.map((produto) => {
                                const imagePath = `../assets/Cardapio/${produto.image}`;
                                const image = images[imagePath];

                                return (
                                    <li key={produto.id} className="menu-product">

                                        <img
                                            src={image}
                                            alt={produto.name}
                                        />

                                        <div>
                                            <h4>{produto.name}</h4>

                                            <p>{produto.description}</p>

                                            <strong>
                                                R$ {produto.price.toFixed(2).replace('.', ',')}
                                            </strong>
                                        </div>


                                        <div className="btn">
                                            <button
                                                id="menu-button-mobile" onClick={() => addToCart(produto)}  >
                                                <IconPlus stroke={1.5} color='white' />
                                            </button>
                                            <button
                                                id="menu-button-mobile" onClick={() => removeCart(produto.cartId)}  >
                                                <IconTrashX stroke={1.25} color='white' />
                                            </button>
                                        </div>
                                    </li>
                                );
                            })}
                        </ul>

                    </section>
                </div>

                <Link to={"https://github.com/PedroHenriqueLino?tab=repositories"}>
                    <div className="finish">
                        <h4>Total: R$: {result}</h4>

                        <button>COMPRAR</button>
                    </div>
                </Link>
            </div>
        </div>
    )
}

export default ShopePage