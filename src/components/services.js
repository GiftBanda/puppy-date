import { Grid } from '@material-ui/core';
import Container  from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PetsIcon from '@material-ui/icons/Pets';
import React from 'react';

function Services() {
    return (
        <div id='service' className='services'>
        <Container maxWidth='md'>
        <Grid container spacing={3}>

        <Grid item xs={4}>
        
        <Card className='card'>
        <CardContent>
        
        <CheckCircleIcon fontSize='large' />
        <h3>Easy To Use</h3>
        <p>
        So easy to use, even your dog could do it.
        </p>
        </CardContent>
        </Card>

        </Grid>

        <Grid item xs={4}>

        <Card className='card'>
        <CardContent>
        <PetsIcon fontSize='large' />
        <h3>Elite Clientele</h3>
        <p>
        We have all the dogs, the very best dogs.
        </p>

        </CardContent>
        </Card>

        </Grid>

        <Grid item xs={4}>
        
        <Card className='card'>
        <CardContent>
        <FavoriteIcon fontSize='large' />
        <h3>Guarenteed to work</h3>
        <p>
        Find the love of your dogs life or your money back.
        </p>
        </CardContent>
        </Card>
        
        </Grid>

        </Grid>
        </Container>

        </div>
    );
}

export default Services;