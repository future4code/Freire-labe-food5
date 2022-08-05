import styled, { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        font-family: 'Roboto', sans-serif;
    }
    
`

export const Container = styled.div`
    display: grid;
    grid-template-rows: 44px 1fr 49px;
`
export const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid lightgray;
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 black;
    background-color: #fff;
    p {
        
        height: 19px;
        font-size: 16px;
    }
`
export const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
`
export const UserName = styled.p`
    height: 18px;
    margin: 16px 16px 8px;
    font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
`
export const UserEmail = styled.p`
    height: 18px;
    margin: 8px 16px 16px;
    font-size: 16px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: -0.39px;
    color: black;
`
export const UserCpf = styled.p`
    height: 18px;
    margin: 16px 16px 8px;
    font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
`
export const DivAddress = styled.div`
    position: relative;
    margin: 16px 0;
    padding: 16px;
    background-color: #eeeeee;

`
export const PEndereco = styled.p`
   
  height: 18px;
  margin: 0 0 8px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: #b8b8b8;
`
export const PEndereco1 = styled.p`
    
  height: 18px;
  margin: 8px 0 0;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
  color: black;
`
export const P = styled.p`
    height: 18px;
  margin: 16px 16px 8px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`
export const Hr = styled.hr`
    width: 90%;
    background: black;
    height: 1px;
    border: none;
    margin: auto;
`
// export const ContainerOrder = styled.div`
//     width: 80%;
//     margin: 7px auto;
//     padding: 16px;
//     border-radius: 8px;
//     border: solid 1px #b8b8b8;
// `

export const P1 = styled.p`
   text-align: center; 
   font-size: 16px;
   letter-spacing: -0.39px;
`
export const ButtonIMG = styled.button`
    position: absolute;
    top: 65px;
    margin: 16px 16px 2px 320px;
    background-color: transparent;
    border: none;
`
export const ButtonIMG1 = styled.button`
    position: absolute;
    top: 20%;
    margin: 10px 0 10px 304px;
    background-color: transparent;
    border: none;
`

