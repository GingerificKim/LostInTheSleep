
function videoControls(selector, vid) {
	if (document.querySelector(selector) && document.querySelector(vid)) {
		let v = document.querySelector(vid)
		let s = document.querySelector(selector)
		s.addEventListener('click', function() {
			if (v.classList.contains('playing')) {
				v.pause()
				v.classList.remove('playing')
			} else {
				v.play()
				v.classList.add('playing')
			}
		})
	}
}

videoControls('.video', '.video')
videoControls('.play-icon', '.video')