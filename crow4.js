let coursesAndDurationArray01 = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

for(let point of coursesAndDurationArray01) {
    let div = document.createElement('div')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')

    div.classList.add('item')
    h1.classList.add('heading')
    p.classList.add('description')

    h1.innerText = point.title
    p.innerText = point.monthDuration
    
    div.append(h1, p)
    document.body.appendChild(div)
}

