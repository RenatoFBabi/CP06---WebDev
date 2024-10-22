import styled from "styled-components"

const Input = styled.input`
    order: 1px solid white;
    background: transparent;
    border: 1px solid white;
    padding: 20px 140px;
    border-radius: 50px;
    width: 200px;
    color: beige;
    font-size: 16px;
    margin-bottom: 30px;

    &::placeholder {
        color: blanchedalmond;
        font-size: 28px;
    }
`

export default Input