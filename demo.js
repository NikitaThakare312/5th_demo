//traversing the dom
var itemList=document.querySelector('#items');
//parentnode
console.log(itemList.parentNode);
itemList.parentNode.style.backgroundColor='#f4f4f4';
console.log(itemList.parentNode.parentNode.parentNode);

//parent element
console.log(itemList.parentElement);
itemList.parentElement.style.backgroundColor='#f4f4f4';
console.log(itemList.parentElement.parentElement.parentElement);

//child node
console.log(itemList.childNodes);
console.log(itemList.children);
console.log(itemList.children[1]);
itemList.children[1].style.backgroundColor='yellow';

//firstChild
console.log(itemList.firstChild);
//firstElementChild
console.log(itemList.firstElementChild );
itemList.firstElementChild.textContent='hello 1';

//last child
console.log(itemList.lastChild);
//lastElementChild
console.log(itemList.lastElementChild);
itemList.lastElementChild.textContent='hello 4';

//nextSibling
console.log(itemList.nextSibling);
//nextElementSibling
console.log(itemList.nextElementSibling);

//previousSibling
console.log(itemList.previousSibling);
//previousElementSibling
console.log(itemList.previousElementSibling);
itemList.previousElementSibling.style.color='green';

//createElement
//create a div
var newDiv=document.createElement('div');
//add class
newDiv.className='hello';
//add id
newDiv.id='hello 1';
//add attr
newDiv.setAttribute('title','hello Div');
//create text node
var newDivText=document.createTextNode('hello world');

//add text to div
newDiv.appendChild(newDivText);

var container=document.querySelector('header .container');
var h1=document.querySelector('header h1');

console.log(newDiv);

newDiv.style.fontSize='30px';
container.insertBefore(newDiv,h1);