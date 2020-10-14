import React from 'react';
import Container  from '@material-ui/core/Container';

function Testimonial() {
    return (
        <div className='testimonial'>
        <Container maxWidth='md'>
        <div >
        <h3>
        Testimonial
        </h3>
        </div>
        <div>
        <p>
        I no longer have to sniff other dogs for love. I've found the hottest Corgi on puppydate. Wooofff!
        </p>
        </div>

        <div className='review'>
        <img src='./images/dog-img.jpg' />
        <p>Scooby, Lusaka.</p>
        </div>
        </Container>
        
        </div>
    );
}

export default Testimonial;