import './Cardapio.css';
import { IconPlus } from '@tabler/icons-react';
//Components
import Loading from './Loadding';
//Context
import { useContext, useState } from 'react';
import { ProductContext } from '../Context/ProductContext';
import { CartContext } from '../Context/CartContext';


//Imagens
import batata from '../assets/Cardapio/agua.png'


const Cardapio = () => {
    const { products } = useContext(ProductContext)
    const { addToCart, cart } = useContext(CartContext)


    const [search, setSearch] = useState("")

    const FilteredProducts = products.filter((produto) =>
        produto.name.toLowerCase().includes(normalizeText(search.toLowerCase()))
    )
    function normalizeText(text) {
        return text
            .normalize('NFD')
            .replace(/[\u0300-\u036f]/g, '')
            .toLowerCase();
    }


    //Sistema de pesquisa



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
            <div className="search-container">
                <input id='search'
                    type="text"
                    placeholder="Pesquisar produto..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />
            </div>

            <main className="cardapio">
                <section className="cardapio-header">
                    <h1>Nosso Cardápio</h1>

                    <p>
                        Escolha seu favorito e aproveite o melhor sabor da nossa pizzaria.
                    </p>
                </section>

                <div className="cardapio-container">
                    <section className='produtos'>

                        <ul className='products-container'>
                            {FilteredProducts.map((produto) => {
                                const imagePath = `../assets/Cardapio/${produto.image}`;
                                const image = images[imagePath];

                                return (
                                    <li key={produto.id} className="products" >

                                        <img
                                            src={image}
                                            alt={produto.name}
                                        />
                                        <div >
                                            <h4>{produto.name}</h4>

                                            <p>{produto.description}</p>

                                            <strong>
                                                R$ {produto.price.toFixed(2).replace('.', ',')}
                                            </strong>

                                        </div>
                                        <button id='version-tablet' onClick={() => addToCart(produto)}> Adicionar ao Carrinho</button>
                                        <button id='version-mobile' onClick={() => addToCart(produto)}><IconPlus stroke={1.5} /></button>
                                    </li>
                                );
                            })}
                        </ul>
                    </section>
                </div>

            </main >
        </div >
    )
}

export default Cardapio