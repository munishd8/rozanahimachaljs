import React, { useState } from 'react';
import {
    Button,
    Container,
    Form,
    Nav,
    Navbar,
    NavDropdown,
    Offcanvas,
    Image,
} from 'react-bootstrap';
import { HeaderTopStyle } from './HeaderTopStyle';


export default function HeaderTop() {
    return (
        <HeaderTopStyle>
            <div className='header-top-wapper'>                
                <Container>
                    <div className='col-md-2'>
                        <div className='logo-wapper'>
                            <Navbar.Brand href="#" style={{ width: '100px' }}>
                                <Image
                                    src="https://rozanahimachal.com/uploads/logo/logo_630d1fc4eaa744-67986888-71324831.png"
                                    fluid
                                />
                            </Navbar.Brand>
                        </div>
                    </div>
                    <div className='col-md-10'>
                        <div className='add-section'>
                            
                        </div>
                    </div>

                </Container>
            </div>
        </HeaderTopStyle>

    );
}