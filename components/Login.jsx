import {
    Box,
    Button,
    FormGroup,
    H5,
    Input,
    Label,
    MessageBox,
    Text,
} from '@adminjs/design-system'
import { styled } from '@adminjs/design-system/styled-components'

import React from 'react'

const Wrapper = styled(Box)`
    align-items: center;
    justify-content: center;
    flex-direction: column;
    height: 100%;
  `



export const Login = () => {
    const props = (window).__APP_STATE__
    const { action, errorMessage: message } = props

    return (
        <Wrapper flex variant="grey">
            <Box bg="white" height="440px" flex boxShadow="login" width={[1, 2 / 3, 'auto']}>
                <Box
                    as="form"
                    action={action}
                    method="POST"
                    p="x3"
                    flexGrow={1}
                    width={['100%', '100%', '480px']}
                >
                    <H5 marginBottom="xxl">
                        Sign Code
                    </H5>
                    {message && (
                        <MessageBox
                            my="lg"
                            variant="danger"
                        />
                    )}
                    <FormGroup>
                        <Label required>Почта</Label>
                        <Input name="email" placeholder="Почта" />
                    </FormGroup>
                    <FormGroup>
                        <Label required>Пароль</Label>
                        <Input
                            type="password"
                            name="password"
                            placeholder="Пароль"
                            autoComplete="new-password"
                        />
                    </FormGroup>
                    <Text mt="xl" textAlign="center">
                        <Button variant="contained">Авторизация</Button>
                    </Text>
                </Box>
            </Box>
        </Wrapper>
    )
}

export default Login;