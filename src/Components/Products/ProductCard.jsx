import React from "react";
import styled from "styled-components";

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 40vh;
  width: 33vh;
  background-color: #1b1b1b;
  height: 50vh;
  border-radius: 16px;
  margin: 5px;
  
  font-weight: bold;
  img {
    width: 100%;
    height: 60%;
    border-radius: 16px 16px 0 0;
  }

  :hover {
    -webkit-transform: scale(1.1);
    -ms-transform: scale(1.1);
    transform: scale(1.1);
  }

  
`;

const AddToCartButton = styled.button`
  align-self: center;
  width: 200px;
  height: 40px;
  margin-top: 4px;
  background-color: #ebbc55;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 600;
  font-size: 12px;
  border: 0;
  transition: all 0.3s;
  padding: 1px 6px;
  margin: 4%;

  :focus{
    background-color: white;
  }
  
`;

const Titulo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  font-weight: bold;
  padding: 1%;
`;

const Price = styled.div`
  color: #d9b566;
  font-weight: bold;
  padding: 1%;
`;

/*
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


const Botao = styled.button`
  display: flex;
  flex-direction: column;
  align-items: center;
  border: none;
`;

const Card = styled.div`
  width: 20vw;
  height: 40vh;
  border: 1px solid black;

  img {
    width: 100%;
    height: 100%; //Pra cobrir a metade do card com a imagem
  }
`;*/


export class ProductCard extends React.Component {
  render() {
    const product = this.props.product;
    return (
      <CardContainer>
        <img src={product.imagem} />
        <Titulo>{product.titulo}</Titulo>
        <Price>R${product.preco},00</Price>
        <AddToCartButton
          onClick={() => this.props.addProdutoCarrinho(product.id)}
        >
          Adicionar ao carrinho
        </AddToCartButton>
      </CardContainer>
    );
  }
}
