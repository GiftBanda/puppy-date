import { Button } from '@material-ui/core';
import AppleIcon from '@material-ui/icons/Apple';
import ShopIcon from '@material-ui/icons/Shop';
import React from 'react';

function NavContent() {
    return (
        <div className='nav-content'>

        <div className='heading'>
        <div>
        <h3>
        Meet new friendly and interesting dogs nearby
        </h3>
        
        </div>
       
        <div>
        <Button id='left-btn' variant='contained' size='large' color='primary'><AppleIcon></AppleIcon>Download</Button>
        <Button id='right-btn' variant='outlined' size='large'><ShopIcon></ShopIcon>Download</Button>
        </div>
        </div>

        <img src='./images/iphone6.png' alt='puppy' />

        </div>
    )
}

export default NavContent;