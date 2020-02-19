import React, { useEffect } from 'react'
import { Spinner, Container, Content, Grid } from 'native-base'
import style from './style';
import {LOGIN} from '../../consts'

export default ({navigation}) => {

    useEffect(() => {
        navigation.navigate(LOGIN);
    });

    return(
        <Container>
            <Content contentContainerStyle={style.content}>
                <Grid style={style.grid}>
                    <Spinner color="grey"></Spinner>
                </Grid>
            </Content>
        </Container>  
    );    
}