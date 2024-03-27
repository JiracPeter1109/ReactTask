import "./App.css";
import Header from "./components/Header";
import Carousel from "./components/Carousel";
import CartVeg from "./components/CartVeg";
import CartHealth from "./components/CartHealth";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <CartVeg />
      <CartHealth />
    </>
  );
}

export default App;
