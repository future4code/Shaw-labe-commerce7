import React from "react";
import styled from "styled-components";
import { ShoppingCartItem } from "./ShoppingCartItem";

const ShoppingCartContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  height: 80vh;
  padding: 0px 10px;
`;

const Tittle = styled.h3`
  letter-spacing: 1px;
  font-family: "Poppins", sans-serif;
`;

const CartListContainer = styled.div`
  display: grid;
  gap: 8px;
`;

export class ShoppingCart extends React.Component {
  getTotalValue = () => {
    let totalValue = 0;

    for (let product of this.props.carrinho) {
      totalValue += product.preco * product.quantidade;
    }
    return totalValue;
  };

  render() {
    return (
      <ShoppingCartContainer>
        <Tittle>Carrinho</Tittle>
        <CartListContainer>
          {this.props.carrinho.map((product) => {
            return (
              <ShoppingCartItem
                cartItem={product}
                removerProdutoCarrinho={this.props.removerProdutoCarrinho}
              />
            );
          })}
        </CartListContainer>
        <p>Valor total: R${this.getTotalValue()},00</p>
      </ShoppingCartContainer>
    );
  }
}

