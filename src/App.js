import './App.css';
import Routing from './routing/Routing';
import {ProductsProvider} from './context/ProductsContext'

function App() {
  return (
    <div className="App">
      <ProductsProvider>
        <Routing />
      </ProductsProvider>
        
    </div>
  );
}

export default App;
