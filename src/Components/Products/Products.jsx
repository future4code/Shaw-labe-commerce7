import React from 'react';
import styled from 'styled-components';
import { ProductCard } from "./ProductCard"

const ProductsContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
`
const ProductsHeader = styled.header`
  display: flex;
  justify-content: space-between;
  margin: 0px;
`

const ProductsGrid = styled.div`
 display: grid;
 grid-template-columns: repeat(3, 1fr);
 gap: 16px;
 padding: 16px;
 justify-content: space-between;
 text-align: center;
`

export class Products extends React.Component {
  state = {
    sort: "DECRESCENTE"
  }

  obterListaFiltradaEOrdenada = () => {
    return this.props.products
      .filter(product => product.preco <= this.props.valorMaximo)
      .filter(product => product.preco >= this.props.valorMinimo)
      .filter(product => product.titulo.toLowerCase().includes(this.props.buscarPorNome.toLowerCase()))
      .sort((a, b) => this.state.sort === "CRESCENTE" ? a.preco - b.preco : b.preco - a.preco)
  }

  onChangeSort = (event) => {
    this.setState({ sort: event.target.value })
  }

  render() {
    const obterListaFiltradaEOrdenada = this.obterListaFiltradaEOrdenada()
    return (
      <ProductsContainer>
        <ProductsHeader>
          <p>Quantidade de produtos: {this.props.products.length}</p>
          <label>
            Ordenação:
            <select value={this.state.sort} onChange={this.onChangeSort}>
              <option value={"CRESCENTE"}>Crescente</option>
              <option value={"DECRESCENTE"}>Decrescente</option>
            </select>
          </label>
        </ProductsHeader>
        <ProductsGrid>
          {obterListaFiltradaEOrdenada.map((product) => {
            return <ProductCard
              product={product}
              addProdutoCarrinho={this.props.addProdutoCarrinho}
            />
          })}
        </ProductsGrid>
      </ProductsContainer>
    )
  }
}