import styled from 'styled-components'


const Button = styled.button`
background-color: ${props => props.inputColor || "palevioletred"};
color: white
`;

export default Button;