import React from 'react'

import { CardContainer, CardImagem, DescricaoContainer, RestaurantName, RestaurantNumbers } from './styled'

const CardRestaurant = (props) => {
    return (
        <CardContainer onClick={props.onClick}>
            <CardImagem src={props.logoUrl} alt='logo do restaurante' />
            <DescricaoContainer>
                <RestaurantName>{props.name}</RestaurantName>
                <RestaurantNumbers>
                    <span>{`${props.deliveryTime} - ${props.deliveryTime + 10} min`}</span>
                    <span>{`Frete R$ ${props.shipping.toFixed(2)}`}</span>
                </RestaurantNumbers>
            </DescricaoContainer>
        </CardContainer>
    )
} 

export default CardRestaurant