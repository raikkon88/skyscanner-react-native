import React, {useState, useEffect} from 'react'
// El provider és el pont entre react i redux
import { Provider } from 'react-redux';
import Store from './redux/store';
import Routes from './routes'
import * as Font from 'expo-font'
import { Spinner, Container, Content, Grid } from 'native-base';

const store = Store();
const ROBOTO = require('../node_modules/native-base/Fonts/Roboto.ttf');
const ROBOTO_MEDIUM = require('../node_modules/native-base/Fonts/Roboto_medium.ttf');
export default () => {

    const [fontsLoaded, setFontsLoaded] = useState(false);

    useEffect(() => {
        if( !fontsLoaded ){
            loadFonts();
        }
    }, [fontsLoaded])

    const loadFonts = async () => {
        await Font.loadAsync({
            'Roboto': ROBOTO,
            'Roboto_medium': ROBOTO_MEDIUM
        })
        setFontsLoaded(true);
    }

    if(!fontsLoaded){
        return <Spinner color="red"></Spinner>
    }

    return (
        <Provider store={store}>
            <Routes/>
        </Provider>
    )
}

