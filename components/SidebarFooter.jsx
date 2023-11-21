import React from 'react';
import { Box } from '@adminjs/design-system'
import { styled } from '@adminjs/design-system/styled-components'

const Logo = styled(Box)`
    padding: 2vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    opacity: 0.5;
    text-align: right;

  `
const SidebarFooter = () => {
    return (
        <Logo>
            by MadMarchello 
        </Logo>
    )
}

export default SidebarFooter;