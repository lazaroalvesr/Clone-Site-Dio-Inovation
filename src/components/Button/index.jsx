import React from 'react'

import { ButtonContainer } from './style';
const Button = ({ tittle, variant = "primary", onclick }) => {
    return (
        <ButtonContainer variant={variant} onclick={onclick}>
            {tittle}
        </ButtonContainer>
    )
}

export { Button }