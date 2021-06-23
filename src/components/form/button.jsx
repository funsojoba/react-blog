import React from "react"
import styled from "styled-components"
// import StyledButton from "./button.styles"

const StyledButton = styled.button`
    padding:10px 15px;
    border:none;
    border-radius:5px;
    color:#fff;
    background-image: linear-gradient(120deg, #FF8F00 0%, #FFB900 100%);
    cursor:pointer;
    border-radius:35px;
`

const Button = ({handleClick, type, children})=>{
    return(
        <StyledButton 
            onClick={handleClick} 
            type={type}>{children}</StyledButton>
    )
}

export default Button