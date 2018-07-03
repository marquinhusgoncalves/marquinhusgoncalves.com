function showButton() {
  if (this.scrollY >= 50) {
    document.querySelector('#return-to-top').classList.add('visible');
  } else {
    document.querySelector('#return-to-top').classList.remove('visible');
  }
}

function scrollTo(element, to, duration) {
  if (duration <= 0) return;
  console.log(element, to, duration);
  const difference = to - element.scrollTop;
  const perTick = difference / duration * 10;

  setTimeout(function () {
    element.scrollTop = element.scrollTop + perTick;
    if (element.scrollTop === to) return;
    scrollTo(element, to, duration - 10);
  }, 10);
}

function runScroll() {
  scrollTo(document.body, 0, 600);
}
const scrollme = document.querySelector('#return-to-top');
scrollme.addEventListener('click', runScroll);

window.addEventListener('scroll', showButton);
