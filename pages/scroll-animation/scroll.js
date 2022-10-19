const boxes = document.querySelectorAll('.container__box');

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBottom) {
      box.classList.add('show');
      console.log(box.getBoundingClientRect());
    } else {
      box.classList.remove('show');
    }
  });
}
