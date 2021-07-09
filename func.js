function getDeg(id_element) {
	const element = document.getElementById(id_element)
	const style = window.getComputedStyle(element, null)
	const valueStyle = style.getPropertyValue('transform')
	if (valueStyle === 'none') return 0

	let split1 = valueStyle.split('(')[1]
	let split2 = split1.split(')')[0]
	let split3 = split2.split(',')

	let cos = split3[0]
	let sin = split3[1]

	let bDeg = Math.round(Math.asin(sin) * (180 / Math.PI))

	if (cos >= 0 && sin >= 0) {
		deg = bDeg
	} else if ((cos <= 0 && sin >= 0) || (cos <= 0 && sin <= 0)) {
		deg = 180 - bDeg
	} else if (cos >= 0 && sin <= 0) {
		deg = 360 + bDeg
	}

	return deg
}
