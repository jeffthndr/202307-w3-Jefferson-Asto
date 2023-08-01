import { foo, header } from './templates.js';
console.log(foo);
const headerElement = document.querySelector('#header');
const slot1Elements = [
    ...document.querySelectorAll('slot'),
];
headerElement.outerHTML = header('Alejandro');
slot1Elements[0].textContent = foo;
slot1Elements[1].innerHTML = foo;
slot1Elements[2].outerHTML = foo;
