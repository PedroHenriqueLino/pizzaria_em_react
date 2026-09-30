import './App.css'

//Routes
import { Outlet } from 'react-router-dom'

//components
import NavBar from './components/NavBar'
import Loading from './components/Loadding';

//Context
import { useContext } from 'react';
import { ProductContext } from './Context/ProductContext';

function App() {
  const { products } = useContext(ProductContext)

  return (
    <>
      {!products ?
        (<Loading />)
        :
        (<div className="container">
          <NavBar />

          <main>
            <Outlet />
          </main>
        </div>)
      }


    </>
  )
}

export default App
