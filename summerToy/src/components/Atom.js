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