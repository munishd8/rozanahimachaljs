function FooterMain() {
    return (
        <FooterMainStyle>

            {/* <div className='footer-border-wapper'>
        <Container>
          <div className="footer-border"></div>
        </Container>
      </div> */}
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