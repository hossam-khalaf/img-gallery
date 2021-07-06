const gallery = document.querySelector('#gallery')
const popup = document.querySelector('#popup')
const selectedImage = document.querySelector('#selectedImage')

const imageIndexes = [1, 2, 3, 4, 5, 6, 7, 8]
const selectedIndex = null

imageIndexes.forEach((i) => {
	const image = document.createElement('img')
	image.src = `/images/${i}.jpg`
	image.alt = `image number${i}`
	image.classList.add('galleryimg')

	image.addEventListener('click', () => {})

	gallery.appendChild(image)
})
