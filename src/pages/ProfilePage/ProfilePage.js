import React from "react";
import { EditProfilePage } from "../EditProfilePage/EditProfilePage";
import { useRequestData } from "../../services/requisicoes";
import {EditAddressPage} from '../EditAddressPage/EditAddressPage'
import { CardOrderHistory } from "../../components/CardOrderHistory/CardOrderHistory";
import edit from '../../assets/Images/edit.svg'
import styled from 'styled-components'

const Container = styled.div`
    display: grid;
    grid-template-rows: 64px 1fr;
`
const Header = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    -webkit-backdrop-filter: blur(10px);
    border-bottom: 1px solid lightgray;
  backdrop-filter: blur(10px);
  box-shadow: 0 0.5px 0 0 var(--black-25);
  background-color: #fff;
    p {
        
        height: 19px;
        font-size: 16px;
    }
`
const Conteudo = styled.div`
    display: flex;
    flex-direction: column;
`
const UserName = styled.p`
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
const UserEmail = styled.p`
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
const UserCpf = styled.p`
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
const DivAddress = styled.div`
    position: relative;
    height: 76px;
    margin: 16px 0;
    padding: 16px;
    background-color: #eeeeee;

`
const PEndereco = styled.p`
   
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
const PEndereco1 = styled.p`
    
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
const P = styled.p`
    height: 18px;
  margin: 16px 16px 8px;
  font-size: 16px;
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: -0.39px;
`
const Hr = styled.hr`
    width: 90%;
    background: black;
    height: 1px;
    border: none;
`
const ContainerOrder = styled.div`
    width: 80%;
    height: 102px;
    margin: 7px auto;
    padding: 16px;
    border-radius: 8px;
    border: solid 1px #b8b8b8;
`
const Img = styled.img`
    position: absolute;
    top: 50px;
    width: 24px;
    height: 24px;
    margin: 16px 16px 2px 320px;
    object-fit: contain;
`
const Img1 = styled.img`
    position: absolute;
    top: 10%;
    width: 24px;
  height: 24px;
  margin: 10px 0 10px 304px;
  object-fit: contain;
`

export const ProfilePage = () => {
    const [profile, isloading, error, getData] = useRequestData('https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/profile')
    const [orderHistory, loading] = useRequestData('https://us-central1-missao-newton.cloudfunctions.net/futureEatsB/orders/history')
    const order = orderHistory.orders && orderHistory.orders.map((order) => {
            return <CardOrderHistory order = {order} key = {order.expiresAt}/>
    })
    return(
        <Container>
            <Header><p>Meu Perfil</p></Header>
            <Conteudo>
            {isloading && <p>carregando...</p>}
            {
            !isloading && profile.user && 
            <div>
                <UserName>{profile.user.name}</UserName>
                <UserEmail>{profile.user.email}</UserEmail>
                <UserCpf>{profile.user.cpf}</UserCpf>
                <Img src={edit} alt="" />
            <DivAddress>
                <PEndereco>Endereço cadastrado:</PEndereco>
                <PEndereco1>{profile.user.address}</PEndereco1> 
                <Img1 src={edit} alt="" />
            </DivAddress>
            
            </div>
            }
            <P>Histórico de pedidos:</P>
            <Hr />
            {!loading && orderHistory.orders && orderHistory.orders.length > 0 ? <ContainerOrder>{order}</ContainerOrder>: <p>você ainda não fez nenhum pedido :/</p>
            }
            {/* <EditProfilePage getData = {getData}/>

            <EditAddressPage getData = {getData}/> */}
            </Conteudo>
        </Container>
    )
}