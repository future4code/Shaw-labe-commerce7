import React from "react";
import styled from "styled-components"

const ImgLogo = styled.img`
  height: 12vh;
  @media screen and (min-device-width: 320px) and (max-device-width: 480px) {
    height: 8vh;
  }
`;

class Home extends React.Component{
    render(){
        let valorContador = this.props.quantidadeProdutos;
        return(
        <div>
            <header>
                <ImgLogo src="/Img/Dev Coffee.png" />
                <h1>Dev Coffee</h1>
                <input
                    placeholder="Busca por nome"
                    value={this.props.query}
                    onChange={this.props.updateQuery}
                />
                <div>
                    <p>{valorContador}</p>
                    <button onClick={this.props.renderizaCarrinho}>
                        <h3>Carrinho</h3>
                    </button>
                </div>
            </header>
            <div>
                <div>
                    <input
                        type="number"
                        placeholder="Preço Minimo"
                        value={this.props.minPrice}
                        onChange={this.props.updateMinPrice}
                    />
                    <input
                        type="number"
                        placeholder="Preço Máximo"
                        value={this.props.MaxPrice}
                        onChange={this.props.updateMaxPrice}
                    />
                </div>
                <div>
                    <label for="sort">Ordenação:</label>
                    <select 
                        name="order"
                        value={this.props.order}
                        onChange={this.props.updateOrder}
                    />
                </div>
            </div>
        </div>

        )
    }

}export default Home;