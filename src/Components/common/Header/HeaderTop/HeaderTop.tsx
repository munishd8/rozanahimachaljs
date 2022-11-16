import * as React from 'react';
import { Container } from 'react-bootstrap';
import { HeaderTopStyle } from './HeaderTopStyle';


export default function HeaderTop() {
    return (
        <HeaderTopStyle>
            <div className='header-top-wapper'>                
                <Container>
                    Top Bar
                </Container>
            </div>
        </HeaderTopStyle>

    );
}