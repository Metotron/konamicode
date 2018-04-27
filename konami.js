function KonamiCode(callback) {
	const code = ['ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight', 'b', 'a']
	let stage = 0, done = code.length 

	window.addEventListener('keydown', function(e) {
		if (stage == done) return
		if (e.key == code[stage]) ++stage
		else stage = 0

		if (stage == done && callback !== undefined)
			callback.call()
	}, false);
}