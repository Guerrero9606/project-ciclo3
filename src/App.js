import "./App.css";
<<<<<<< HEAD
import Rol from './Home/pages/Rol';


function App() {
  return (
      <Rol/>
=======
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Register from './Sales/pages/Register';
import Sales from './Sales/pages/Sales';
import Products from "./productsManagement/pages/gestionProductos.jsx"

function App() {
  return (
    <Router>
      <Switch>
        <Route path={['/sales', '/register', '/products']}>
            {/* Aqui va el componente de layout privado */}
              <Switch>

                {/* Forma 1 de hacer el enrotamiento con pagina x */}  
                <Route exact path="/sales"> 
                  <Sales />
                </Route>

                {/*ruta para acceder a la pagina de registro */}
                <Route exact path="/register" component={Register} />

                {/*  Forma 2 de hacer el enrutamiento con pagina x */}
                <Route exact path="/products" component={Products} />

              </Switch>
            {/* Aqui se cierra el componente de layout privado*/}
        </Route>

        <Route>
          {/* Aqui va el componente de layout publico */}
            <Switch>
              <Route>
                {/* Primera pantalla (antes de ingresar al sistema) */}
              </Route>

            </Switch>
          {/* Aqui se cierra el componente de layout publico*/}
        </Route>
        
      </Switch>

    </Router>

      
>>>>>>> f7314f5a536f4af2b423520c94af3f678fba9a09
  );
}

export default App;
