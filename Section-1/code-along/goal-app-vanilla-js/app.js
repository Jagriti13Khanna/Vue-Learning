const listItem = document.querySelector('ul');
const button = document.querySelector('button');
const input = document.querySelector('input');


button.addEventListener('click', function() {
    const inputValue = input.value;
    const newListItem = document.createElement('li');
    newListItem.textContent = inputValue;
    listItem.appendChild(newListItem);
});
