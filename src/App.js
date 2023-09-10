import Scoops from "./components/Scoops";
import Toppings from "./components/Toppings";
import Form from "./components/Form";


function App() {
  return (
    <div>

      {/* urunler */}
      <Scoops />
      
      {/* soslar */}
      <Toppings />

      {/* form */}
      <Form />

    </div>
  );
}

export default App;
