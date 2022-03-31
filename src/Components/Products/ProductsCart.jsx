import React from "react";
import styled from "styled-components";

class ProductsCart extends React.Component {
  render() {
    return (
      <>
        <div>
          <p>IMAGEM</p>
          <h2>Roasted Coffee Beans – 100% Arabica</h2>
          <h3>
            Arabica coffee beans are best in all aspects like flavour, aroma,
            crema etc Arabica coffee plants are more sensitive to temperature
            and handling.
            </h3>
          <h2>R$45,00</h2>
          <button onClick={this.irParaCarrinho}>Adicionar</button>
        </div>

        <div>
          <p>IMAGEM</p>
          <h2>Instant Coffee</h2>
          <h3>
            Made from high quality coffee beans. Today everything must be easy
            and it must not take time instant Coffee.
          </h3>
          <h2>R$42,00</h2>
          <button onClick={this.irParaCarrinho}>Adicionar</button>
        </div>
      </>
    );
  }
}
export default ProductsCart;
