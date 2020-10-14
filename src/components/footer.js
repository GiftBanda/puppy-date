import React from 'react';
import Container from '@material-ui/core/Container';
import IconButton from '@material-ui/core/IconButton';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import EmailIcon from '@material-ui/icons/Email';

function Footer(){
    return(
        <div className='footer'>
        <Container maxWidth='md'>

        <h3>Get In Touch</h3>
        <p>Call Us: <a href='tel:+260977560054'> +260 977 560 054</a> </p>
       

        <div >
        <IconButton>
        <a id='fb' href='https://web.facebook.com/ZedDeveloper'>
        <FacebookIcon fontSize='large' />
        </a>
        
        </IconButton>

        <IconButton>
        <a id='twitter' href='https://twitter.com/GiftBanda42'>
        <TwitterIcon fontSize='large' />
        </a>
        
        </IconButton>

        <IconButton>

        <a id='email' href='mailto:bandagift42@gmail.com'>
        <EmailIcon fontSize='large' />
        </a>
        
        </IconButton>

        </div>

        <p>Copyright © 2020 created with love by Gift Banda</p>
        </Container>
        </div>
    );
}

export default Footer;