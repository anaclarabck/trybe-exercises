function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

function createDezDays() {
  const dezDaysList = document.createElement('li');
  dezDaysList.innerHTML = [29, 30];

  for (let index = 1; index <=31; index += 1) {
    dezDaysList.push(index);
  }

  console.log(dezDaysList)


};

createDaysOfTheWeek();
createDezDays();