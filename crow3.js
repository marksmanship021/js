// - Є масив
let coursesAndDurationArray02 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.



for(let cours of coursesAndDurationArray02) {
    let block = document.createElement('div')
    block.innerText = `title: ${cours.title} | monthDuration: ${cours.monthDuration}`;
    document.body.appendChild(block)
}