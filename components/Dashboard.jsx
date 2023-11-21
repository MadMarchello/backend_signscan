import React from 'react'
import { Box, Button, H3, H5, Illustration, IllustrationProps, Text } from '@adminjs/design-system'
import { useTranslation } from 'admin.js'
import { styled } from '@adminjs/design-system/styled-components'

const DashboardBox = styled(Box)`
    padding-top: 2vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: #0d0075;
  `

const Dashboard = () => {
    return (
        <DashboardBox position="relative" overflow="hidden">
            <Text textAlign="center" color="white">
                <H3>Админка Sign Code</H3>
                <Text opacity={0.8}>
                    MVP админки SignCode для наполнения в ручном режиме таблицы со штрих-кодами
                </Text>
            </Text>
        </DashboardBox>
    )
}

export default Dashboard;