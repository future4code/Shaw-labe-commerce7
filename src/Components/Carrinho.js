import React from "react";
import styled from "styled-components";

const ImgLogo = styled.img`
  height: 12vh;
`;

const Voltar = styled.button`
  width: 10vw;
  height: 6vh;
  background-color: black;
  color: white;
  border-radius: 20px;
  border: none;
  font-size: 15px;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 6vh;
    width: 15vw;
    font-size: 8px;
    border-radius: 10px;
  }
`;

class Carrinho extends React.Component {
  pegarValorTotal = () => {
    let valorTotal = 0;

    for (let produtos of this.props.produtos) {
      valorTotal += produtos.price * produtos.quantidade;
    }

    return valorTotal;
  };

  render() {
    return (
      <>
        <header>
          <ImgLogo src="/Img/Dev Coffee.png" />
          <h2>CARRINHO</h2>

          <div>
            <Voltar onClick={this.props.renderizaPaginaFalse}>
              Continuar comprando
            </Voltar>
          </div>
        </header>

        <main>
          {this.props.produtos.map((produto) => {
            return (
              <div>
                {produto.imagemURL}
                <p>{produto.name}</p>
                <p>R${produto.price},00</p>
                <p>{produto.quantidade}</p>
                <button onClick={() => this.props.removerProduto(produto.id)}>
                  Remover
                </button>
              </div>
            );
          })}
          <div>
            <p>
              <strong>Valor total: R${this.pegarValorTotal()},00</strong>
            </p>
          </div>
        </main>
        <footer>
          <h3>Avenida de Pruneridge, 19111 Cupertino, CA 95014</h3>
          <h3>By Lis, Raphael e Rodrigo</h3>
        </footer>
      </>
    );
  }
}export default Carrinho;
