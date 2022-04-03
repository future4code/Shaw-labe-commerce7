import React from "react";
import styled from "styled-components";
import Filters from "./Components/Filters/Filters";
import ProductsCart from "./Components/Products/ProductsCart";
import Products from "./Components/Products/Products";
import ShoppingCart from "./Components/ShoppingCart/ShoppingCart";
import ShoppingCartIten from "./Components/ShoppingCart/ShoppingCartIten";
import Header from "./Components/Header/Header";
import Carrinho from "./Components/Carrinho";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  padding: 16px;
  gap: 8px;
  background-color: #030303;
  color: white;
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  width: 100%;
  justify-content: center;
  border-bottom: 3px solid #d9b566;
  background-color: #1b1b1b;
  color: #d9b566;
  padding-top: 10px;
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
      <>
        <header>
          <Header />
        </header>

        <main>
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
              <ShoppingCart />
            </div>
          </AppContainer>
        </main>

        <footer>
          <Footer>Avenida de Pruneridge, 19111 Cupertino, CA 95014
                  By Lis, Raphael e Rodrigo
          </Footer>
        </footer>

      </>
    );
  }
}export default App;
