import {USERINFO_UPDATE,MENU_UPDATE} from './const';

export function menu(data){
	return {
		type:MENU_UPDATE,
		data
	}
}

export function update(data){
	return {
		type:USERINFO_UPDATE,
		data
	}
}