document.getElementById('header-container').style.backgroundColor = 'DarkGreen';


document.querySelector('.emergency-tasks').style.backgroundColor = 'LightSalmon';

document.querySelector('.no-emergency-tasks').style.backgroundColor = 'LightBlue';

var titles = document.querySelectorAll('.emergency-tasks h3');
for (let index = 0; index < titles.length; index += 1) {
  titles[index].style.color = 'Red'
}

var titles = document.querySelectorAll('.no-emergency-tasks h3');
for (let index = 0; index < titles.length; index += 1) {
  titles[index].style.color = 'Blue'
}

document.getElementById('footer-container').style.backgroundColor = 'DarkOliveGreen';

document.getElementsByName('body').style.backgroundColor = 'Grey';


