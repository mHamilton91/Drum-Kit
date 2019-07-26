document.addEventListener("keydown", function(event) {
	switch(event.keyCode) {
		case 65:
			let clap = document.getElementById("clap_audio");
			playAudio(clap);
			color("clap");
			break;
		case 83:
			let hihat = document.getElementById("hihat_audio");
			playAudio(hihat);
			color("hihat");
			break;
		case 68:
			let kick = document.getElementById("kick_audio");
			playAudio(kick);
			color("kick");
			break;
		case 70:
			let openhat = document.getElementById("openhat_audio");
			playAudio(openhat);
			color("openhat");
			break;
		case 71:
			let boom = document.getElementById("boom_audio");
			playAudio(boom);
			color("boom");
			break;
		case 72:
			let ride = document.getElementById("ride_audio");
			playAudio(ride);
			color("ride");
			break;
		case 74:
			let snare = document.getElementById("snare_audio");
			playAudio(snare);
			color("snare");
			break;
		case 75:
			let tom = document.getElementById("tom_audio");
			playAudio(tom);
			color("tom");
			break;
		case 76:
			let tink = document.getElementById("tink_audio");
			playAudio(tink);
			color("tink");
			break;
	}
});

function color(test) {
	let inst = document.getElementById(test);
	inst.classList.add("playing");
};

function playAudio(clip) { 
			clip.currentTime = 0;
			clip.play(); 
		};
		
function clickPlay(clip) {
	document.getElementById(clip).play();
}

function removeTransition(e) {
	if(e.propertyName !== 'transform') return;
	this.classList.remove('playing');
}

const keys = document.querySelectorAll(".drum_button");
keys.forEach(key => key.addEventListener('transitionend', removeTransition));