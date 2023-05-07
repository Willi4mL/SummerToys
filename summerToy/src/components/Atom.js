import { atom } from 'recoil'

export const loginState = atom({
	key: 'loginState',
	default: false
})

export const isLoggedInState = atom({
	key: 'isLoggedInState',
	default: true
})

export const isBarsState = atom({
	key: 'isBarState',
	default: true
})

export const productState = atom({
	key: 'productState',
	default: []
})

export const searchState = atom({
	key: 'searchState',
	default: []
})

export const addPorductFormState = atom({
	key: 'addProductState',
	default: false
})

export const findMatchState = atom({
	key: 'findMatchState',
	default:[]
})

export const productDetailState = atom({
	key: 'productDetailState',
	default: []
})
