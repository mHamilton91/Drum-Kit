document.addEventListener("keydown", function(e) {
	switch(e.keyCode) {
		case 65:
			let clap = document.getElementById("clap_audio");
			keyPlay(clap);
			animation("clap");
			break;
		case 83:
			let hihat = document.getElementById("hihat_audio");
			keyPlay(hihat);
			animation("hihat");
			break;
		case 68:
			let kick = document.getElementById("kick_audio");
			keyPlay(kick);
			animation("kick");
			break;
		case 70:
			let openhat = document.getElementById("openhat_audio");
			keyPlay(openhat);
			animation("openhat");
			break;
		case 71:
			let boom = document.getElementById("boom_audio");
			keyPlay(boom);
			animation("boom");
			break;
		case 72:
			let ride = document.getElementById("ride_audio");
			keyPlay(ride);
			animation("ride");
			break;
		case 74:
			let snare = document.getElementById("snare_audio");
			keyPlay(snare);
			animation("snare");
			break;
		case 75:
			let tom = document.getElementById("tom_audio");
			keyPlay(tom);
			animation("tom");
			break;
		case 76:
			let tink = document.getElementById("tink_audio");
			keyPlay(tink);
			animation("tink");
			break;
	}
});

function animation(inst) {
	let colorChange = document.getElementById(inst);
	colorChange.classList.add("playing");
};

function keyPlay(clip) { 
			clip.currentTime = 0;
			clip.play(); 
		};
		
function clickPlay(clip) {
	clip.currentTime = 0;
	document.getElementById(clip).play();
}

function removeTransition(e) {
	if(e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

const keys = document.querySelectorAll(".drum_button");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));