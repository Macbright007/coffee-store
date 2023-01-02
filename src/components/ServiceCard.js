import { CoffeeCardCont, CoffeeContents, CoffeeImgCont } from "./styles";

const ServiceCard = ({ offer }) => {
  return (
    <CoffeeCardCont key={offer.id}>
      <CoffeeImgCont>
        <img src={offer.img} alt="first" />
      </CoffeeImgCont>

      <CoffeeContents>
        <h2>{offer.service}</h2>
        <p className="pp">{offer.text}</p>
      </CoffeeContents>
    </CoffeeCardCont>
  );
};

export default ServiceCard;
