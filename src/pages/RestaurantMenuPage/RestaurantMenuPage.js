import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import BackPageIcon from '../../assets/img/back-page_icon.svg'
import { goBackPage } from '../../router/coordinator'
import { GetRestaurantDetail } from '../../services/restaurants'
import { GlobalStyle, MainContainer, Header, HeaderIcon} from './styled'

const RestaurantMenuPage = () => {
    const navigate = useNavigate()
    const { id } = useParams()
    const [restaurant, setRestaurant] = useState({})

    useEffect(() => {
        GetRestaurantDetail(id, setRestaurant)
    }, [])
    return (
        <div>
            <GlobalStyle />
            <Header>
                <HeaderIcon src={BackPageIcon} alt='Ícone de seta virada para a esquerda' onClick={() => goBackPage(navigate)} />
                <p>Restaurante</p>
            </Header>
            <MainContainer>
                <section>
                    <img />
                    <p>nomerestaurante</p>
                    <span>categoria</span>
                    <div>
                        <span>tempo de entrega</span>
                        <span>frete</span>
                    </div>
                    <div>
                        Endereço
                    </div>
                </section>
            </MainContainer>
        </div>
    )
}

export default RestaurantMenuPage