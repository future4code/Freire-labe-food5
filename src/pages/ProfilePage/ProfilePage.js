import React from "react";
import { useRequestData } from "../../services/requisicoes";
import { CardOrderHistory } from "../../components/CardOrderHistory/CardOrderHistory";
import {useNavigate} from 'react-router-dom'
import { goToEditAddressPage, goToEditProfilePage } from "../../router/coordinator";
import edit from '../../assets/img/edit.svg'
import {Container,
    Header,
    Conteudo,
    UserName,
    UserEmail,
    UserCpf,
    DivAddress,
    PEndereco,
    PEndereco1,
    P,
    Hr,
    ContainerOrder,
    P1,
    ButtonIMG,
    ButtonIMG1,
    // Footer,
    // ButtonFooter,
    GlobalStyle} from './styled'

import { BASE_URL } from "../../constants/urls";
// import HomePageIcon from '../../assets/img/homepage.svg'
// import shoppingCartIcon from '../../assets/img/shopping-cart.svg'
// import avatarIcon from '../../assets/img/avatarActive.svg'
import { Footer } from "../../components/Footer/Footer";

 const ProfilePage = () => {
    // let icon = avatarIcon
    const [profile, isloading] = useRequestData(`${BASE_URL}/profile`)
    const [orderHistory, loading] = useRequestData(`${BASE_URL}/orders/history`)
    const order = orderHistory.orders && orderHistory.orders.map((order) => {
            return <CardOrderHistory order = {order} key = {order.expiresAt}/>
    })
   
    const navigate = useNavigate()
    return(
        <Container>
            <GlobalStyle />
            <Header><p><strong> Meu Perfil</strong></p></Header>
            <Conteudo>
            {isloading && <P1>carregando...</P1>}
            {
            !isloading && profile.user && 
            <div>
                <UserName>{profile.user.name}</UserName>
                <UserEmail>{profile.user.email}</UserEmail>
                <UserCpf>{profile.user.cpf}</UserCpf>
                <ButtonIMG onClick={() => goToEditProfilePage(navigate)}><img src={edit} alt="" /></ButtonIMG>
            <DivAddress>
                <PEndereco>Endereço cadastrado:</PEndereco>
                <PEndereco1>{profile.user.address}</PEndereco1> 
                <ButtonIMG1 onClick={() => goToEditAddressPage(navigate)}><img src={edit} alt="" /></ButtonIMG1>
            </DivAddress>
            
            </div>
            }
            <P>Histórico de pedidos:</P>
            <Hr />
            {!loading && orderHistory.orders && orderHistory.orders.length > 0 ? <ContainerOrder>{order}</ContainerOrder>: <P1>você ainda não fez nenhum pedido :/</P1>
            }
            </Conteudo>
            <Footer/>
        </Container>
    )
}

export default ProfilePage