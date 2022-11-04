import 'bootstrap/dist/css/bootstrap.min.css';
import React from "react";
import Lista from './Componentes/Lista/Lista';



/* 
Inicializar proyecto: npm start
Detener proyecto: Ctrl +C
*/

class App extends React.Component {
  render(){
    return(
      <div className= "container justify-content-center align-items-center">
        <Lista/>
      </div>
    );

  }

}

export default App;
