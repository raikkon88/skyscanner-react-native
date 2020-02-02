// combineReducers permet separar els reducers en diferents funcions i enviar-los a l'store combinant-los. 
import { combineReducers } from 'redux';

export default combineReducers({
    SampleReducer: function () {
        return {};
    }
})