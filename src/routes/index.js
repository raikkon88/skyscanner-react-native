import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack'; 

import { 
    LOADING_PAGE,
    LOGIN,
    HOME,
    RESULTS,
    PROFILE,
 } from '../consts';
import Login from '../views/Login';
import LoadingPage from '../views/LoadingPage';
import Profile from '../views/Profile';
import Results from '../views/Results';
import Home from '../views/Home';


// Hem instal·lat les rutes
const AppNavigator = createStackNavigator({
    [LOADING_PAGE] : LoadingPage, 
    [LOGIN]: Login,
    [HOME]: Home,
    [RESULTS]: Results,
    [PROFILE]: Profile,
});

// Generem el navegador i al exportar-lo el posem com a varaible global.
export default createAppContainer(AppNavigator);