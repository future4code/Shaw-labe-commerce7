import React from "react";
import styled from "styled-components";
import Filters from "./Components/Filters/Filters";
import ProductsCart from "./Components/Products/ProductsCart";
import Products from "./Components/Products/Products";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import ShoppingCartIten from "./Components/ShoppingCart/ShoppingCartIten";
import Header from "./Components/Header/Header";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  padding: 16px;
  gap: 8px;
  background-color: #ffffff ;
  
`;

class App extends React.Component {
  state = {
    valorMinimo: 0,
    valorMaximo: 0,
    buscarPorNome: "",
  };

  onChangeValorMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value });
  };

  onChangeValorMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value });
  };

  onChangeBuscarPorNome = (event) => {
    this.setState({ buscarPorNome: event.target.value });
  };

  render() {
    return (
      
      <AppContainer>
       

        <Filters
          valorMinimo={this.state.valorMinimo}
          valorMaximo={this.state.valorMaximo}
          buscarPorNome={this.state.buscarPorNome}
          onChangeValorMinimo={this.onChangeValorMinimo}
          onChangeValorMaximo={this.onChangeValorMaximo}
          onChangeBuscarPorNome={this.onChangeBuscarPorNome}
        />

        <div>
          <Products
         /* products={products}
          valorMinimo={this.state.valorMinimo}
          valorMaximo={this.state.valorMaximo}
          buscarPorNome={this.state.buscarPorNome} */
          />
        </div>

        <div>
          <ShoppingCart/>
        </div>

      </AppContainer>
    );
  }
}

export default App;
