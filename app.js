const circle = document.querySelector('.circle')
const cntrBtn = document.querySelector('.center-button')
const block1 = document.querySelector('.block1')
const block2 = document.querySelector('.block2')
const block3 = document.querySelector('.block3')
const block4 = document.querySelector('.block4')
const mainSize = document.querySelector('.main3')
const size = document.querySelector('.circle').offsetWidth
const main2 = document.querySelector('.main2')
const width = mainSize.clientWidth
const height = mainSize.clientHeight
const verStep = Math.floor((size * height) / (size + height))
const horStep = Math.floor((size * width) / (size + width))
/*-----------------------------------------------------------------*/
const blue = [
	'#AFEEEE',
	'#7FFFD4',
	'#40E0D0',
	'#00CED1',
	'#4682B4',
	'#87CEEB',
	'#00BFFF',
	'#1E90FF',
	'#7B68EE',
	'#4169E1',
	'#0000CD',
	'#0000FF',
	'#000080',
]

const red = [
	'#CD5C5C',
	'#F08080',
	'#FA8072',
	'#DC143C',
	'#FF0000',
	'#FF7F50',
	'#FF6347',
	'#FF4500',
]

const yellow = [
	'#FF8C00',
	'#FFA500',
	'#FFD700',
	'#FFFF00',
	'#FFFACD',
	'#F0E68C',
]

const green = [
	'#7FFF00',
	'#00FF00',
	'#00FA9A',
	'#00FF7F',
	'#ADFF2F',
	'#9ACD32',
	'#228B22',
]

/*-----------------------------------------------------------------*/
const rghtBtn = document.querySelector('.right-button')
function goRight() {
	const left = document.querySelector('.circle').offsetLeft

	if (width - left - size > horStep) {
		circle.style.left = `${left + horStep}px`
	} else {
		circle.style.left = `${width - size}px`
	}
}
rghtBtn.addEventListener('click', () => {
	goRight()
	circle.style.transform = `rotate(${getDeg('circle') + 30}deg)`
})
/*-----------------------------------------------------------------*/
const lftBtn = document.querySelector('.left-button')
function goLeft() {
	const left = document.querySelector('.circle').offsetLeft

	if (left >= horStep) {
		circle.style.left = `${left - horStep}px`
	} else {
		circle.style.left = '0px'
	}
}
lftBtn.addEventListener('click', () => {
	goLeft()
	circle.style.transform = `rotate(${getDeg('circle') - 30}deg)`
})
/*-----------------------------------------------------------------*/
const downBtn = document.querySelector('.down-button')
function goDown() {
	const _top = document.querySelector('.circle').offsetTop

	if (height - _top - size > verStep) {
		circle.style.top = `${_top + verStep}px`
	} else {
		circle.style.top = `${height - size}px`
	}
}
downBtn.addEventListener('click', () => {
	goDown()
})
/*-----------------------------------------------------------------*/
const upBtn = document.querySelector('.up-button')
function goUp() {
	const _top = document.querySelector('.circle').offsetTop

	if (_top >= verStep) {
		circle.style.top = `${_top - verStep}px`
	} else {
		circle.style.top = '0px'
	}
}
upBtn.addEventListener('click', () => {
	goUp()
})
/*-----------------------------------------------------------------*/
function doSmth() {
	const rows = document.querySelectorAll('.row')
	const main4 = document.querySelector('.main4')
	const flag = document.querySelector('.flag')
	const text = document.getElementById('text')

	flag.style.transform = 'translateY(0px)'
	text.style.transform = 'translateX(250%)'

	setTimeout(() => {
		text.setAttribute('hidden', 'true')
		text.style.transform = 'translateX(-250%)'
		setTimeout(() => {
			text.removeAttribute('hidden')
		}, 2500)
	}, 2500)

	rows.forEach((i) => {
		i.removeAttribute('hidden')
		i.style.zIndex = '500'
		main4.style.zIndex = '500'
		main4.style.backgroundColor = 'rgba(0,0,0, 0.8)'
		circle.setAttribute('hidden', 'true')
	})

	setTimeout(() => {
		flag.style.transform = 'translateY(600px)'

		rows.forEach((i) => {
			i.setAttribute('hidden', 'true')
			i.style.zIndex = '0'
			main4.style.zIndex = '0'
			main4.style.backgroundColor = 'rgba(0,0,0, 0)'
			circle.removeAttribute('hidden')
			upBtn.removeAttribute('hidden')
		})
	}, 5000)
}
cntrBtn.addEventListener('click', () => {
	doSmth()
})
/*-----------------------------------------------------------------*/
function getRandomColor(color) {
	const index = Math.floor(Math.random() * color.length)
	return color[index]
}
setInterval(() => {
	block1.style.backgroundColor = getRandomColor(blue)
	block2.style.backgroundColor = getRandomColor(yellow)
	block3.style.backgroundColor = getRandomColor(red)
	block4.style.backgroundColor = getRandomColor(green)
}, 3000)
/*-----------------------------------------------------------------*/
document.addEventListener('keydown', (event) => {
	if (event.key === 'ArrowUp') {
		goUp()
	} else if (event.key === 'ArrowDown') {
		goDown()
	} else if (event.key === 'ArrowLeft') {
		goLeft()
	} else if (event.key === 'ArrowRight') {
		goRight()
	}
})
/*-----------------------------------------------------------------*/
