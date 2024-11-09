
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import CartWidget from './components/CartWidget'


function App() {

  return (
    <>
      <Navbar/>
      <CartWidget/>
      <ItemListContainer greetings="Bienvenido a tu próxima aventura!"/>
    </>
  )
}

export default App