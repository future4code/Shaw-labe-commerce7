import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
display: flex;
flex-direction: column;   
border: 1px solid black;
height: 80vh;
padding: 0px 10px;
`

const InputContainer = styled.label`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin-bottom: 8px;
`

const Input = styled.input`
    &:hover {
        background-color: #f8f8ff;
    }
`

const Tittle = styled.h3`
    letter-spacing: 1px;
    font-family: 'Poppins', sans-serif;
`

const Bloco = styled.div`
    display: block;
`

class Filter extends React.Component {
    render() {
        return (
            <FilterContainer>
                <Tittle>Filtros</Tittle>
                <InputContainer>
                    Valor Mínimo:
                    <Input
                        type="number"
                        value={this.props.valorMinimo}
                        onChange={this.props.onChangeValorMinimo}
                    />

                </InputContainer>
                <InputContainer>
                    Valor Máximo:
                    <Input
                        type="number"
                        value={this.props.valorMaximo}
                        onChange={this.props.onChangeValorMaximo}
                    />

                </InputContainer>
                <InputContainer>
                    <Bloco>Pesquisar <i class="fa-solid fa-magnifying-glass"></i></Bloco>
                    <Input
                        type="text"
                        placeholder="Produtos..."
                        value={this.props.buscarPorNome}
                        onChange={this.props.onChangeBuscarPorNome}
                    />
                </InputContainer>

            </FilterContainer>
        )
    }
}

export default Filter;