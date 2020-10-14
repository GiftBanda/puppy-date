import React from 'react';
import Container from '@material-ui/core/Container';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import FavoriteIcon from '@material-ui/icons/Favorite';
import Button from '@material-ui/core/Button';
import { Grid } from '@material-ui/core';

function Pricing() {
    return(
        <div id='price' className='pricing'>
        <Container maxWidth='md'>
        <h3>
        A Plan for Every Dog's Needs
        </h3>
        

        <p>
        Simple and affordable price plans for your and your dog.
        </p>

        <Grid container spacing={3}>

        <Grid item xs={4}>
        
        <Card className='pricing-card'>
        <CardContent>
        
        <h3>Chihuahua</h3>
        <h4>
        Free
        </h4>
        <p>
        5 Matches Per Day
        </p>
        <p>
        10 Messages Per Day
        </p>
        <p>
        Unlimited App Usage
        </p>
        </CardContent>
        <CardActions>
        <Button id='btn' variant='outlined' color='primary' size='large'>Sign Up</Button>
        </CardActions>
        </Card>

        </Grid>

        <Grid item xs={4}>

        <Card className='pricing-card'>
        <CardContent>
        <h3>Labrador</h3>

        <h4> k250/ month</h4>

        <p>
        Unlimited Matches
        </p>
        <p>
        Unlimited Messages
        </p>
        <p>
        Unlimited App Usage
        </p>

        </CardContent>
        <CardActions>
        <Button id='btn' variant='contained' color='primary' size='large'>Sign Up</Button>
        </CardActions>
        </Card>

        </Grid>

        <Grid item xs={4}>
        
        <Card className='pricing-card'>
        <CardContent>
        
        <h3>Mastiff</h3>

        <h4> k350/ month</h4>

        <p>
        Priority Listing
        </p>
        <p>
        Unlimited Matches
        </p>
        <p>
        Unlimited Messages
        </p>
        <p>
        Unlimited App Usage
        </p>
        
        </CardContent>
        <CardActions>
        <Button id='btn' variant='contained' color='primary' size='large'>Sign Up</Button>
        </CardActions>
        </Card>
        
        </Grid>

        </Grid>
        </Container>
        </div>
    );
}

export default Pricing;