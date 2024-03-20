// - створити блок,
// - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

//document.createElement
//classList.add
//appendChild
//cloneNode

let block = document.createElement('div');

block.classList.add('wrap', 'collapse', 'alpha', 'beta')

block.style.backgroundColor = 'lightblue';
block.style.color = 'white';
block.style.fontSize = '20px';

document.body.appendChild(block); 

let clonedBlock = block.cloneNode(true);