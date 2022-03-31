import React from "react";
import styled from "styled-components";
import ShoppingCartIten from "./ShoppingCartIten";

const CarrinhoContainer = styled.div`
display: flex;
flex-direction: column;   
border: 1px solid black;
height: 80vh;
padding: 0px 10px;
`

const Tittle = styled.h3`
    letter-spacing: 1px;
    font-family: 'Poppins', sans-serif;
`

class ShoppingCart extends React.Component {
  render() {
    return (
      <CarrinhoContainer>

        <Tittle> Carrinho </Tittle>

            <div>
                <ShoppingCartIten/>
            </div>

        <Tittle> Total: R$ 8999999,00 </Tittle>
      </CarrinhoContainer>
    );
  }
}export default ShoppingCart;
