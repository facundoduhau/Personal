// (1)

const firstButton = document.getElementById('changeTextButton');
const firstText = document.getElementById('myParagraph');

firstButton.addEventListener('click', () => {
    firstText.textContent = "I'm new text, hello world"
});

// (2)

const highlightButton = document.getElementById("highlightFirstCity") 
const toBeHighlighted = document.getElementById("highlightText")

highlightButton.addEventListener('click', () => {
    toBeHighlighted.classList.add("highlight")    
})

// (3)

const orderName = document.getElementById("coffeeType");
const orderButton = document.getElementById("changeOrder");

orderButton.addEventListener('click', ()=> {
    orderName.textContent = "Espresso";
});

// (4)

const addItemButton = document.getElementById("addNewItem");
const myList = document.getElementById("shoppingList");

addItemButton.addEventListener("click", ()=>{
    const newListItem = document.createElement("li");
    newListItem.textContent = "Eggs";
    myList.appendChild(newListItem);
})

// (4)

const removeButton = document.getElementById("removeLastTask");
const removableList = document.getElementById("taskList");

removeButton.addEventListener("click", ()=>{
    removableList.lastElementChild.remove();
})