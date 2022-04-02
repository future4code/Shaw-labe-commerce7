import React from "react";
import styled from "styled-components";
import Home from "./Components/Home";
import Carrinho from "./Components/Carrinho";

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  padding: 16px;
  gap: 8px;
  background-color: #030303;
  color: white;
`;

const ProdutoImg = styled.img`
  width: 100%;
  height: 75%;
`;

class App extends React.Component {
  state = {
    produtos: [
      {
        id: 1,
        name: "Roasted Coffee Beans – 100% Arabica",
        price: 45.0,
        imagemURL: <ProdutoImg src="/Img/expresso.jpg" />,
        quantidade: 1,
      },
      {
        id: 2,
        name: "Instant Coffee - 100% Premium",
        price: 42.0,
        imagemURL: <ProdutoImg src="/Img/expresso.jpg" />,
        quantidade: 1,
      },
      {
        id: 3,
        name: "Roasted Coffee Beans – Espresso",
        price: 52.0,
        imagemURL: <ProdutoImg src="/Img/expresso.jpg" />,
        quantidade: 1,
      },
      {
        id: 4,
        name: "Roasted Coffee Beans- Monsoon Malabar",
        price: 72.0,
        imagemURL: <ProdutoImg src="/Img/expresso.jpg" />,
        quantidade: 1,
      },
    ],
    filtro: "",
    query: "",
    minPrice: "",
    maxPrice: "",
    order: 1,
    pagina: false,
    produtosNoCarrinho: [],
    adicionados: false,
    quantidadeProdutos: 0,
  };

  adicionaProduto = (produtoId) => {
    this.setState({
      adicionados: false,
      quantidadeProdutos: this.state.quantidadeProdutos + 1,
    });

    const prod = this.state.produtos.filter((p) => {
      return p.id === produtoId;
    });
    const novaProduto = prod[0];

    const novoProdutoIndex = this.state.produtosNoCarrinho.findIndex((p) => {
      return p.id === produtoId;
    });

    if (novoProdutoIndex === -1) {
      const novoProdutoAdicionado = [
        ...this.state.produtosNoCarrinho,
        novaProduto,
      ];
      console.log(novoProdutoAdicionado);
      this.setState({ produtosNoCarrinho: novoProdutoAdicionado });
    } else {
        const copiaCarrinho = [...this.state.produtosNoCarrinho]
        copiaCarrinho[novoProdutoIndex].quantidade++
        this.setState({ produtosNoCarrinho: copiaCarrinho });
    }
  };

  removerProduto = (id) => {
    const novosProdutosNoCarrinho = this.state.produtosNoCarrinho
      .map((produto) => {
        if (produto.id === id) {
          return {
            ...produto,
            quantidade: produto.quantidade - 1,
          };
        }
        return produto;
      })
      .filter((produto) => produto.quantidade > 0);

    this.setState({
      produtosNoCarrinho: novosProdutosNoCarrinho,
    });
  };

  renderizaCarrinho = () => {
    this.setState({ pagina: true });
  };

  renderizaPaginaFalse = () => {
    this.setState({ pagina: false });
  };

  updateQuery = (ev) => {
    this.setState({
      query: ev.target.value,
    });
  };

  updateMinPrice = (ev) => {
    this.setState({
      minPrice: ev.target.value,
    });
  };

  updateMaxPrice = (ev) => {
    this.setState({
      maxPrice: ev.target.value,
    });
  };

  updateOrder = (ev) => {
    this.setState({
      order: ev.target.value,
    });
  };

  render() {
    let componentCarrinho;

    if (this.state.adicionados) {
      componentCarrinho = this.adicionaProduto;
    }

    if (this.state.pagina) {
      return (
        <Carrinho
          produtos={this.state.produtosNoCarrinho}
          removerProduto={this.removerProduto}
          renderizaPaginaFalse={this.renderizaPaginaFalse}
        />
      );
    }

    const novoArrayDeProdutos = this.state.produtos
      .filter((prod) => {
        return prod.name
          .toLowerCase()
          .includes(this.state.query.toLocaleLowerCase());
      })
      .filter((prod) => {
        return this.state.minPrice === "" || prod.price >= this.state.minPrice;
      })
      .filter((prod) => {
        return this.state.maxPrice === "" || prod.price <= this.state.maxPrice;
      })
      .sort((cres, dec) => {
        return this.state.order * (cres.price - dec.price);
      })
      .map((produto) => {
        return (
          <div>
            {produto.imagemURL}
            <p>{produto.name}</p>
            <p>R${produto.price},00</p>
            <button onClick={() => this.adicionaProduto(produto.id)}>
              Adicionar ao carrinho
            </button>
          </div>
        );
      });

    return (
      <>
        <Home
          query={this.state.query}
          updateQuery={this.updateQuery}
          minPrice={this.state.minPrice}
          updateMaxPrice={this.updateMaxPrice}
          order={this.state.order}
          updateOrder={this.updateOrder}
          renderizaCarrinho={this.renderizaCarrinho}
          quantidadeProdutos={this.state.quantidadeProdutos}
        ></Home>
        <AppContainer>{novoArrayDeProdutos}</AppContainer>

        <footer>
          <h3>Avenida de Pruneridge, 19111 Cupertino, CA 95014</h3>
          <h3>By Lis, Raphael e Rodrigo</h3>
        </footer>
        
      </>
    );
  }
}export default App;
