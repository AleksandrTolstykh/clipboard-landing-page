import React from 'react';
import Button from '@material-ui/core/Button';
import styled from 'styled-components';

function CustomButton(props) {
  const StyledButton = styled(Button)`
    background-color: ${props.background};
    border-radius: 30px;
    color: ${props.color};
    font-family: 'Bai Jamjuree';
    font-size: 16px;
    font-weight: 600;
    text-transform: none;
    &:hover {
      background-color: ${props.background};
      color: ${props.colorHover};
      cursor: pointer;
      opacity: 0.5;
    }
  `;

  return (
    <StyledButton>
      {props.content}
    </StyledButton>
  );
}

export default CustomButton;
