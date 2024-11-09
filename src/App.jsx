
import NavbarBoot from './components/NavbarBoot'
import Navbar from './components/Navbar'
import ItemListContainer from './components/ItemListContainer'
import CartWidget from './components/CartWidget'


function App() {

  return (
    <>
      <Navbar/>
      <NavbarBoot/>
      <CartWidget/>
      <ItemListContainer greetings="HOla!"/>
    </>
  )
}

export default App