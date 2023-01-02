import React from 'react'
import { CoffeeContainer, MenuContainer } from "./styles";
import {ServiceData} from "../ServicesData"
import ServiceCard from './ServiceCard';

const Services = () => {
  return (
    <MenuContainer>
      <h4>Services</h4>

      <CoffeeContainer>
        {ServiceData.map((offer) => {
          return <ServiceCard offer={offer} />;
        })}
      </CoffeeContainer>
    </MenuContainer>
  )
}

export default Services