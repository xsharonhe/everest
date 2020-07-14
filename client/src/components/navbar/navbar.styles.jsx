import styled, { css } from 'styled-components'
import { Link } from 'react-router-dom'
import { ReactComponent as Logo } from '../../assets/logo.svg'

const OptionContainerStyles = css`
    width: 80px;
    padding-top: 50px;
    margin: 0;
    cursor: pointer;
    font-weight: bold;
    color: #7E8F7A;

    @media(max-width: 700px) {
        width: 200px;
        margin: auto;
    }
`

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    padding-top: 0px;
    margin-bottom: 30px;

    @media(max-width: 700px) {
        display: flex;
        flex-direction: column;
        height: 180px;
        justify-content: baseline;
    }
`

export const LogoContainer = styled(Link)`
    height: 100%;
    width: 80px;
    padding: 10px;
    padding-left: 40px;

    @media(max-width: 700px) {
        text-align: center;
        align-items: stretch;
        padding-bottom: 0px;
    }
`

export const LogoImageContainer = styled(Logo)`
    height: 90px;
    width: 180px;

    @media(max-width: 700px) {
        display: flex;
        justify-content: center;
        height: 40px;
        width: 150px;
        text-align: center;
        padding-left: 40%;
    }
`

export const OptionsContainer = styled.div`
    width: 80px;
    padding-top: 50px;
    margin: 0;
    cursor: pointer;
    font-weight: bold;
    color: #7E8F7A;

    @media(max-width: 700px) {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        margin: auto;
        width: 500px;
        padding-top: 0px;
        padding-bottom: 20px;
        margin-bottom: 20px;
        margin-right: 30px;
        margin-left: 20px;
        padding-right: 30px;
    }
`

export const OptionsLink = styled(Link)`
    ${OptionContainerStyles}
`