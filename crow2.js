// - Є масив:
// ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

const staff = ['Main','Products','About us','Contacts'];

let ul = document.createElement('ul')

for(let example of staff) {
    let li = document.createElement('li')
    li.textContent = example
    ul.appendChild(li)
}
document.body.appendChild(ul);