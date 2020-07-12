import React, {Fragment} from 'react';
import Navegacion from "./Components/Navegacion/Navegacion";
import "./index.css"
import ReproductorView from "./views/ReproductorView/ReproductorView";
function App() {
  return (
    <Fragment>
      <Navegacion/>
      <ReproductorView/>
    </Fragment>
  );
}

export default App;