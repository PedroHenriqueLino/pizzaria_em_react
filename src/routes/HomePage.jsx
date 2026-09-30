//routes
import { Link } from "react-router-dom"


//Components
import Cardapio from "../components/Cardapio";

//css
import './styles/HomePage.css';

const HomePage = () => {
    return (
        <div>
            <section className="hero">
                <div className="hero-content">
                    <span>🍕 O verdadeiro sabor da Itália</span>

                    <h1>
                        Uma pizza feita para
                        <strong> conquistar você.</strong>
                    </h1>

                    <p>
                        Ingredientes selecionados, massa preparada com carinho
                        e aquele sabor irresistível que transforma qualquer momento
                        em uma experiência especial.
                    </p>
                    <Link to={'/carrinho'}>
                        <button>Comprar agora</button>
                    </Link>

                    <p>
                        Escolha seus sabores favoritos e aproveite uma pizza
                        preparada especialmente para você.
                    </p>


                </div>
            </section>

            <section className="Cardapio">
                <Cardapio />
            </section>
        </div>
    )
}

export default HomePage