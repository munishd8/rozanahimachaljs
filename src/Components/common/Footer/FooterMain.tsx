import React from "react";
import { Container } from "react-bootstrap";
import FooterBottom from "./FooterBottom/FooterBottom";
import { FooterMainStyle } from "./FooterMainStyle";
import FooterTop from "./FooterTop/FooterTop";

function FooterMain() {
    return (
        <FooterMainStyle>
            <footer className='footer-main-wapper'>
                <Container>
                    <FooterTop />
                    <FooterBottom />
                </Container>
            </footer>
        </FooterMainStyle>
    );
}

export default FooterMain;