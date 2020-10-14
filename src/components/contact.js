import React from 'react';
import Container from '@material-ui/core/Container';
import AppleIcon from '@material-ui/icons/Apple';
import ShopIcon from '@material-ui/icons/Shop';
import Button from '@material-ui/core/Button'

function Contact(){
    return(
        <div id='contact' className='contact'>
        <Container maxWidth='md'>
        
        <h3> Find the True Love of Your Dog's Life Today. </h3>

        <div className='contact-btn'>
        <Button id='contact-btn-left' variant='contained' size='large' color='primary'><AppleIcon></AppleIcon>Download</Button>
        <Button id='contact-btn-right' variant='outlined' size='large'><ShopIcon></ShopIcon>Download</Button>
        </div>
        </Container>
        </div>
    )
}

export default Contact;