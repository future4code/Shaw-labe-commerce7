import React from "react";
import styled from "styled-components";
import ProductsCart from "./ProductsCart";

const MainContainer = styled.div`
display: flex;
align-items: center;
justify-content: space-evenly;
`

const Ordenacao = styled.label`
display: flex;
align-items: flex-end;
`

class Products extends React.Component {
    render(){ 
      
      return (
      <>
            
          <MainContainer>
              <p>Quantidade de produtos: 6 </p>

              <Ordenacao>Ordenação:</Ordenacao>

              <select>
                <option value="Crescente" selected>Crescente</option>
                <option value="Decrescente">Decrescente</option>
              </select>

          </MainContainer>

          <ProductsCart/>

      </>
      );
    }
   
  }
  export default Products;