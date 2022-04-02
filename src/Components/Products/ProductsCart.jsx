import React from "react";
import styled from "styled-components";

const ProductsMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
`;

const CardMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding: 1%;
  border-radius: 10px;
  text-align: center;
  margin: 1%;
  background-color: #1b1b1b;
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

const Card = styled.div`
  width: 20vw;
  height: 40vh;
  border: 1px solid black;

  img {
    width: 100%;
    height: 100%; //Pra cobrir a metade do card com a imagem
  }
`;

const Price = styled.div`
  color: #d9b566;
  font-weight: bold;
  padding: 1%;
`;

class ProductsCart extends React.Component {
  state = [{}];

  /*getFilteredAndOrderList = () => {
    return this.props.products
      .filter((product)=> product.price < this.props.maxValue)
      .filter((product)=> product.price > this.props.maxValue)
      .filter((product)=> product.name.includes(this.props.nameValue))
      //.sort((a,b)=> )
  }*/

  render() {
    /*const filteredAndOrderedList = this.getFilteredAndOrderList() */

    return (
      <ProductsMain>
        <CardMain>
          <Card>
            <img
              src={
                "https://dukenscoffee.com/wp-content/uploads/2018/09/roasted-beans1.jpg"
              }
            />{" "}
          </Card>
          <Titulo>Roasted Coffee Beans – 100% Arabica</Titulo>
          <Descricao>
            Arabica coffee beans are best in all aspects like flavour, aroma,
            crema etc Arabica coffee plants are more sensitive to temperature
            and handling.
          </Descricao>
          <Price>R$45,00</Price>
          <Botao onClick={this.irParaCarrinho}>Adicionar</Botao>
        </CardMain>

        <CardMain>
          <Card>
            {" "}
            <img
              src={
                "https://dukenscoffee.com/wp-content/uploads/2018/09/instatnt-300x300.png"
              }
            />{" "}
          </Card>
          <Titulo>Instant Coffee - 100% Premium</Titulo>
          <Descricao>
            Made from high quality coffee beans. Today everything must be easy
            and it must not take time instant Coffee.
          </Descricao>
          <Price>R$42,00</Price>
          <Botao onClick={this.irParaCarrinho}>Adicionar</Botao>
        </CardMain>

        <CardMain>
          <Card>
            <img
              src={
                "https://dukenscoffee.com/wp-content/uploads/2018/09/espresso1.jpg"
              }
            />{" "}
          </Card>
          <Titulo>Roasted Coffee Beans – Espresso</Titulo>
          <Descricao>
            It’s a concentrated coffee with fuller flavour , high crema , longer
            aftertaste when brewed. Espresso roast with an extra bold taste and
            mild chocolaty flavour.
          </Descricao>
          <Price>R$52,00</Price>
          <Botao onClick={this.irParaCarrinho}>Adicionar</Botao>
        </CardMain>

        <CardMain>
          <Card>
            <img
              src={
                "https://dukenscoffee.com/wp-content/uploads/2018/09/monsoon1.jpg"
              }
            />{" "}
          </Card>
          <Titulo>Roasted Coffee Beans- Monsoon Malabar</Titulo>
          <Descricao>
            Looking for a special cup of coffee – something different and
            unique? Monsoon coffees are Strong and robust.
          </Descricao>
          <Price>R$72,00</Price>
          <Botao onClick={this.irParaCarrinho}>Adicionar</Botao>
        </CardMain>
      </ProductsMain>
    );
  }
}
export default ProductsCart;
