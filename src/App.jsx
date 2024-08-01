import "./App.css";
import Operaciones from "./components/Operaciones";
import Producto from "./components/Producto";
import  {Button}  from "react-bootstrap";


function App() {

  let mostrarOperaciones = false;
let total = 25000
  return (
    <>
  <h1>{total.toLocaleString()}</h1>
    { mostrarOperaciones === true? <Operaciones/> : <></>}

    <div className="contenedor">
      <Producto
        title="Harina"
        stock={0}
        desc="Un kilo de Harina refinada 000"
        price={1500}
        image="https://chefmart.com.mx/cdn/shop/products/harinaselecta_1000x.jpg?v=1649772116"
      />
      <Producto
        title="Leche"
        stock={10}
        desc="Un litro de leche ultrapasteurizada descremada"
        price={2000}
        image="https://upload.wikimedia.org/wikipedia/commons/0/0e/Milk_glass.jpg"
      />
      <Producto
        title="Azucar"
        desc="Un kilo de azucar refinada"
        price={500}
        stock={15}
        image="https://empresasiansa.cl/wp-content/uploads/2020/02/azucar.jpg"
      />

      <Producto
        desc="Bote de 50ml de esencia de vainilla"
        price={550}
        stock={2}
        image="https://mejorconsalud.as.com/wp-content/uploads/2020/11/esencia-vainilla-casero.jpg"
      />

    </div>
    <Button>Ver mas productos</Button>
    </>
  );
}

export default App;
