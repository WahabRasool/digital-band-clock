const h = document.querySelector('.hour'),
      m = document.querySelector('.min'),
      s = document.querySelector('.sec');



function setDate() {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = ((seconds / 60) * 360) %360;
	s.style.setProperty('--turn', `${secondsDegrees}deg`);

	const mins = now.getMinutes();
	const minsDegrees = ((mins / 60) * 360 + (seconds / 60) * 6 ) % 360;
	m.style.setProperty('--turn', `${minsDegrees}deg`);

	let hour = now.getHours();
	const hourDegrees = ((hour / 12) * 360 + (mins / 60) * 30 ) % 360;
	h.style.setProperty('--turn', `${hourDegrees}deg`);
	
}

setInterval(setDate, 1000);

setDate();