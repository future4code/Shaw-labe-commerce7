import React from "react";
import styled from "styled-components";
import ProductsCart from "./ProductsCart";

class Products extends React.Component {
    render(){ 
      
      return (
      <>
            
          <div>
              <h2>Quantidade de produtos: </h2>

              <h2>Ordenação:</h2>

              <select>
                <label>Ordenação</label>
                <option value="Crescente" selected>Crescente</option>
                <option value="Decrescente">Decrescente</option>
              </select>

          </div>

          <ProductsCart/>

      </>
      );
    }
   
  }
  export default Products;