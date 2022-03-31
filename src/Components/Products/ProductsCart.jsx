import React from "react";
import styled from "styled-components";

const ProductsMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  letter-spacing: 1px;
  font-family: 'Poppins', sans-serif;
  
`;

const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1%;
  border: 1px solid black;
  text-align: center;
  
`;

const Descricao = styled.div`
  display: flex;
  align-items: center;
  font-size: 0.8em;
  padding: 1%;
`;
const Titulo = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.2em;
  font-weight: bold;
  padding: 1%;
`;

const Botao = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

class ProductsCart extends React.Component {
  render() {
    return (
      <ProductsMain>
        <CardMain>
          <p>IMAGEM</p>
          <Titulo>Roasted Coffee Beans – 100% Arabica</Titulo>
          <Descricao>
            Arabica coffee beans are best in all aspects like flavour, aroma,
            crema etc Arabica coffee plants are more sensitive to temperature
            and handling.
          </Descricao>
          <h4>R$45,00</h4>
          <Botao onClick={this.irParaCarrinho}>Adicionar</Botao>
        </CardMain>

        <CardMain>
          <p>IMAGEM</p>
          <Titulo>Instant Coffee</Titulo>
          <Descricao>
            Made from high quality coffee beans. Today everything must be easy
            and it must not take time instant Coffee.
          </Descricao>
          <h4>R$42,00</h4>
          <Botao onClick={this.irParaCarrinho}>Adicionar</Botao>
        </CardMain>

        <CardMain>
          <p>IMAGEM</p>
          <Titulo>Roasted Coffee Beans – Espresso</Titulo>
          <Descricao>
            It’s a concentrated coffee with fuller flavour , high crema , longer
            aftertaste when brewed. Espresso roast with an extra bold taste and
            mild chocolaty flavour.
          </Descricao>
          <h4>R$52,00</h4>
          <Botao onClick={this.irParaCarrinho}>Adicionar</Botao>
        </CardMain>
      </ProductsMain>
    );
  }
}
export default ProductsCart;
