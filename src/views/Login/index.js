import React from 'react'
import { Image } from 'react-native'
// import { View, Text } from 'react-native'
import { Container, Content, Grid, Button, Text } from 'native-base'
import styles from './style'
import {HOME} from '../../consts'

const GOOGLE_IMAGE = require('../../../assets/google-icon.png');
export default function Login(props) {

    // Aquí s'ha de fer login però passem de tot

    return (
        <Container>
            <Content contentContainerStyle={styles.content}>
                <Grid style={styles.grid}>
                    <Text style={styles.title}>Benvingut</Text> 
                    <Text style={styles.subtitle}>Inicia Sessió per continuar</Text>
                    <Button light style={styles.googleButton} onPress={ () => { props.navigation.navigate(HOME) }}>
                        <Image style={styles.googleIcon} source={GOOGLE_IMAGE}/>
                        <Text>Google</Text>
                    </Button>
                </Grid>
            </Content>
        </Container>
    ); 
};