import {
  FooterSection,
  FooterLinkContainer,
  FooterContainer,
  FooterLinkLi,
} from "./FooterStyle";

const Footer = () => {
  return (
    <>
      <FooterSection>
        <FooterContainer>
          <FooterLinkContainer>
            <h1>Produkt</h1>
            <FooterLinkLi>Pobierz</FooterLinkLi>
            <FooterLinkLi>status</FooterLinkLi>
          </FooterLinkContainer>
          <FooterLinkContainer>
            <h1>Firma</h1>
            <FooterLinkLi>O nas</FooterLinkLi>
            <FooterLinkLi>Praca</FooterLinkLi>
          </FooterLinkContainer>
          <FooterLinkContainer>
            <h1>Zasoby</h1>
            <FooterLinkLi>Wsparcie</FooterLinkLi>
            <FooterLinkLi>Blog</FooterLinkLi>
            <FooterLinkLi>Kreatorzy</FooterLinkLi>
          </FooterLinkContainer>
        </FooterContainer>
      </FooterSection>
    </>
  );
};

export default Footer;
