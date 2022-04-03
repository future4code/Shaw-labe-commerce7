import React from "react";
import styled from "styled-components";

const FilterContainer = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid black;
  height: 80vh;
  padding: 0px 10px;
`;

const InputContainer = styled.label`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const Input = styled.input`
  &:hover {
    background-color: #f8f8ff;
    color: black;
  }
  width: 120px;
  height: 28px;
  margin-top: 4px;
  color: white;
  background-color: #1b1b1b;
  text-transform: uppercase;
  cursor: pointer;
  font-weight: 400;
  font-size: 12px;
  border: 0;
  transition: all 0.3s;
  padding: 1px 6px;
  margin: 4%;
`;

const Tittle = styled.h3`
  letter-spacing: 1px;
  font-family: "Poppins", sans-serif;
`;

const Bloco = styled.div`
  display: block;
`;

class Filter extends React.Component {
  render() {
    return (
      <>
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
            <Bloco>
              Pesquisar <i class="fa-solid fa-magnifying-glass"></i>
            </Bloco>
            <Input
              type="text"
              placeholder="Produtos..."
              value={this.props.buscarPorNome}
              onChange={this.props.onChangeBuscarPorNome}
            />
          </InputContainer>
        </FilterContainer>
      </>
    );
  }
}

export default Filter;
