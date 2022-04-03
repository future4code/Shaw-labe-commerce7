import React from "react";
import styled from "styled-components";
import Filter from "./Components/Filters/Filters";
import { Products } from "./Components/Products/Products";
import { ShoppingCart } from "./Components/ShoppingCart/ShoppingCart";

const Principal = styled.div`
  font-family: "Poppins", sans-serif;
`;

const ImgLogo = styled.img`
  height: 12vh;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 8vh;
  }
`;

const MainHeader = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  border-bottom: 3px solid #d9b566;
  background-color: #030303;
  color: #d9b566;
  align-items: center;
  padding: 12px 0px 20px 0px;
`;

const AppContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 4fr 1fr;
  padding: 16px;
  gap: 8px;
  background-color: #030303;
  color: white;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    background-color: #1b1b1b;
    height: 16vh;
  }
`;

const Footer = styled.div`
  display: flex;
  align-items: center;
  align-self: center;
  justify-content: center;
  border-top: 3px solid #d9b566;
  background-color: #1b1b1b;
  color: #d9b566;
`;

const Paragrafo = styled.p`
  margin: 0;
`;

const ImgLogo2 = styled.img`
  height: 20vh;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 8vh;
  }
`;

const products = [
  {
    id: 1,
    imagem:
      "https://dukenscoffee.com/wp-content/uploads/2018/09/roasted-beans1.jpg",
    titulo: "Grãos de café torrado Premium",
    preco: 45,
    quantidade: 1,
  },

  {
    id: 2,
    imagem:
      "https://dukenscoffee.com/wp-content/uploads/2018/09/instatnt-300x300.png",
    titulo: "Café instantâneo Premium",
    preco: 42,
    quantidade: 1,
  },

  {
    id: 3,
    imagem: "https://dukenscoffee.com/wp-content/uploads/2018/09/espresso1.jpg",
    titulo: "Café expresso",
    preco: 8,
    quantidade: 1,
  },

  {
    id: 4,
    imagem:
      "https://www.biggerbolderbaking.com/wp-content/uploads/2020/11/Homemade-Dunkin-Donuts-WS-Thumb-scaled.jpg",
    titulo: "Donuts",
    preco: 36,
    quantidade: 1,
  },

  {
    id: 5,
    imagem:
      "https://mundo.gimbastore.com.br/wp-content/uploads/2019/10/CAPSULAS-min.jpg",
    titulo: "Café em capsula",
    preco: 32,
    quantidade: 1,
  },

  {
    id: 6,
    imagem:
      "https://s2.glbimg.com/aa1SPtkBfJgE0sU5nfrvcPQUWeA=/0x0:750x500/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_1f540e0b94d8437dbbc39d567a1dee68/internal_photos/bs/2021/b/g/VnDbkfQRSi9R3gnBnBtw/cupcake-de-liquidiifcador-receita.jpg",
    titulo: "Cup Cake",
    preco: 25,
    quantidade: 1,
  },
];

class App extends React.Component {
  state = {
    valorMinimo: 0,
    valorMaximo: 100,
    buscarPorNome: "",
    carrinho: [],
  };
  onChangeValorMinimo = (event) => {
    this.setState({ valorMinimo: event.target.value });
  };

  onChangeValorMaximo = (event) => {
    this.setState({ valorMaximo: event.target.value });
  };

  onChangeBuscarPorNome = (event) => {
    this.setState({ buscarPorNome: event.target.value });
  };

  addProdutoCarrinho = (productId) => {
    console.log(productId);
    const carrinho = this.state.carrinho.find(
      (product) => productId === product.id
    );

    if (carrinho) {
      const novoProduto = this.state.carrinho.map((product) => {
        if (productId === product.id) {
          return {
            ...product,
            quantidade: product.quantidade + 1,
          };
        }
        return product;
      });
      this.setState({ carrinho: novoProduto });
    } else {
      const produtoAdicionado = products.find(
        (product) => productId === product.id
      );
      const novoProduto = [
        ...this.state.carrinho,
        { ...produtoAdicionado, quantidade: 1 },
      ];

      this.setState({ carrinho: novoProduto });
    }
  };

  removerProdutoCarrinho = (productId) => {
    const novoProdutoCarrinho = this.state.carrinho
      .map((product) => {
        if (product.id === productId) {
          return {
            ...product,
            quantidade: product.quantidade - 1,
          };
        }
        return product;
      })
      .filter((product) => product.quantidade > 0);
    this.setState({ carrinho: novoProdutoCarrinho });
  };

  
  render() {
    return (
      <Principal>
        <header>
          <MainHeader>
            <ImgLogo src="/Img/logo.png" />
          </MainHeader>
        </header>

        <AppContainer>
          <Filter
            valorMinimo={this.state.valorMinimo}
            valorMaximo={this.state.valorMaximo}
            buscarPorNome={this.state.buscarPorNome}
            onChangeValorMinimo={this.onChangeValorMinimo}
            onChangeValorMaximo={this.onChangeValorMaximo}
            onChangeBuscarPorNome={this.onChangeBuscarPorNome}
          />
          <Products
            products={products}
            valorMinimo={this.state.valorMinimo}
            valorMaximo={this.state.valorMaximo}
            buscarPorNome={this.state.buscarPorNome}
            addProdutoCarrinho={this.addProdutoCarrinho}
          />
          <ShoppingCart
            carrinho={this.state.carrinho}
            removerProdutoCarrinho={this.removerProdutoCarrinho}
          />
        </AppContainer>

        <footer>
          <Footer>
            <ImgLogo2 src="/Img/logo2.png" />
            <Paragrafo>
              Avenida de Pruneridge, 19111 Cupertino, CA 95014{" "}
            </Paragrafo>
            <Paragrafo>By Lis, Raphael e Rodrigo</Paragrafo>
          </Footer>
        </footer>
      </Principal>
    );
  }
}

export default App;
