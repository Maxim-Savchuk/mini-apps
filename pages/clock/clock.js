const refs = {
  hr: document.getElementById('hr'),
  mn: document.getElementById('mn'),
  sc: document.getElementById('sc'),
  hours: document.getElementById('hours'),
  minutes: document.getElementById('minutes'),
  seconds: document.getElementById('seconds'),
  ampm: document.getElementById('ampm'),
};

setInterval(() => {
  clock();
  digitalClock();
});

function clock() {
  const date = new Date();
  const hh = date.getHours() * 30;
  const mm = date.getMinutes() * 6;
  const ss = date.getSeconds() * 6;

  refs.hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
  refs.mn.style.transform = `rotateZ(${mm}deg)`;
  refs.sc.style.transform = `rotateZ(${ss}deg)`;
}

// Digital clock
function digitalClock() {
  let h = new Date().getHours();
  let m = new Date().getMinutes();
  let s = new Date().getSeconds();

  const am = h >= 12 ? 'PM' : 'AM';

  //Convert 24 to 12 hours clock
  if (h > 12) {
    h = h - 12;
  }

  // Add zero before single digit number
  h = h < 10 ? '0' + h : h;
  m = m < 10 ? '0' + m : m;
  s = s < 10 ? '0' + s : s;

  refs.hours.innerHTML = h;
  refs.minutes.innerHTML = m;
  refs.seconds.innerHTML = s;
  refs.ampm.innerHTML = am;
}
