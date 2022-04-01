import React from "react";
import styled from "styled-components";


const MainHeader = styled.div`
display: flex;
align-items: center;
align-self: center;
width: 100%;
justify-content: center;
border-bottom: 3px solid #d9b566;
background-color: #030303;
color: #d9b566;

`

class Header extends React.Component {
  render() {
    return (
      <>
        <MainHeader>

       <h2> Café Gourmet Dev</h2>

        
        </MainHeader>
      </>
      
        
    );
  }
}export default Header;




