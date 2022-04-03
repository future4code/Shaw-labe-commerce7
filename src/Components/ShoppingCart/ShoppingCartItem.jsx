import React from 'react';
import styled from 'styled-components';

const Paragrafo = styled.p`
     margin: 0;
`

export class ShoppingCartItem extends React.Component {
    render() {
        return (
            <div>
                <Paragrafo>{this.props.cartItem.quantidade}</Paragrafo>
                <Paragrafo>{this.props.cartItem.titulo}</Paragrafo>
                <button
                    onClick={() => this.props.removerProdutoCarrinho(this.props.cartItem.id)}
                >Remover
                </button>
            </div>
        )
    }
}