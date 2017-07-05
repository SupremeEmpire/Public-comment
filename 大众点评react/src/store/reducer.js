import { combineReducers } from 'redux'
import {USERINFO_UPDATE,MENU_UPDATE} from './const';

function app(state={},action){
	switch(action.type) {
		case MENU_UPDATE:
				return action.data;
		default:
			return state;
	}
}

function userinfo(state={},action){
	switch(action.type) {
		case USERINFO_UPDATE:
				return action.data;
		default:
			return state;
	}
}

export default combineReducers({
	userinfo,
	app
})