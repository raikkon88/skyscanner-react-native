import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-naviation-stack'; 

import Login from '../views/Login';
import LoadingPage from '../views/LoadingPage';
import Profile from '../views/Profile';
import Results from '../views/Results';
import Home from '../views/Home';


// Hem instal·lat les rutes
const AppNavigator = createStackNavigator({
    'LoadingPage' : LoadingPage, 
    'Login': Login,
    'Home': Home,
    'Results': Results,
    'Profile': Profile,
});