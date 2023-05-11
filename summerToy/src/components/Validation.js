const validChar = 'abcdefghijklmnopqrstuvwxyzåäö1234567890, '

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

export { validateName, validUrl }