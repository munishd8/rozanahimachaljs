import * as React from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import { Container } from '@mui/system';
import { HeaderTopStyle } from './HeaderTopStyle';


export default function HeaderTop() {
    return (
        <HeaderTopStyle>
            <div className='header-top-wapper'>                
                <Container fixed>
                    Top Bar
                </Container>
            </div>
        </HeaderTopStyle>

    );
}