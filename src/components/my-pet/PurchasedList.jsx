import styled from "styled-components";
import ProductType from "../ProductType"
import PropTypes from "prop-types";

const Page = styled.div`
  width: 470px;
  height: 125px;
  display: flex;
  flex-direction: row;
  border-top: 1px solid #eef1f4;
  border-bottom: 1px solid #eef1f4;
  margin-left: 20px;
  margin-right: 10px;
  padding-top: 10px;
  cursor: pointer;
`;

const Image = styled.img`
  width: 105px;
  height: 105px;
  border-radius: 10px;
`;

const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 10px 30px 12px;
  color: rgba(21, 21, 21, 0.3);
`;

const Title = styled.p`
  font-family: Nanum Gothic;
  font-size: 12px;
  font-weight: 400;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #151515;
`;

const Price = styled.p`
  font-family: Nanum Gothic;
  font-size: 14px;
  font-weight: 700;
  line-height: 22px;
  letter-spacing: -0.02em;
  text-align: left;
  color: #151515;
`;

const PurchasedList = ({ src, name, kind, price }) => {
  return (
    <Page>
      <Image src={src} alt="상품이미지" />
      <Detail>
        <Title> {name} </Title>
        <ProductType type={kind} style={{ marginLeft: 0, bottom: 0 }} />
        <Price> {`${price}원`} </Price>
      </Detail>
    </Page>
  );
};

PurchasedList.propTypes = {
  src: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  kind: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
};

export default PurchasedList;
