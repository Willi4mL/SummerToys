const validChar = 'abcdefghijklmnopqrstuvwxyzåäö1234567890, '
const validLetter = 'abcdefghijklmnopqrstuvwxyzåäö'

function validateName(valid) {
	for (let i = 0; i < valid.length; i++) {
		let character = valid.charAt(i).toLowerCase()

		if (!validChar.includes(character)) {
			return [false, 'Vänligen endast godkända tecken.']
		}
	}
	return [true, '']
}

function validUrl(addImg) {
	const whiteSpace = /\s/
	if (whiteSpace.test(addImg)) {
		return [false, "Godkänner ej mellanrum"]
	}
	if (addImg.substring(0, 8) != "https://") {
		return [false, "Vänligen börja med https://"]
	}
	return [true, ""]
}

function validUsername(validName) {
	const whiteSpace = /\s/
	if (whiteSpace.test(validName)) {
		return [false, "Godkänner ej mellanrum"]
	}
	for (let x = 0; x < validName.length; x++) {
		let character = validName.charAt(x).toLowerCase()

		if (!validLetter.includes(character)) {
			return [false, 'Vänligen endast bokstäver.']
		}
	}
	if(validName == 'admin') {
		return [true, '']
	}
	return [false, 'Fel lösenord']
}

export { validateName, validUrl, validUsername }