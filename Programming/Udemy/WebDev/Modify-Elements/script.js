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

const eventButton = document.getElementById("clickMeButton");

// (5)

eventButton.addEventListener("mouseover", ()=>{
    alert("You're hovering me!")
})

// (6)

const eventList = document.getElementById("teaList");

eventList.addEventListener("click", function(event){
    if(event.target.matches(".teaItem")){
        alert(`You selected ${event.target.textContent}`)
    }
})

// (7)

const myForm = document.getElementById("feedbackForm")
const toBeChangedText = document.getElementById("example-8")

myForm.addEventListener("submit", ()=>{
    console.log("Submitted!");
    toBeChangedText.textContent = "Submitted my friend"
})

// (8)

const domText = document.getElementById("domStatus")

document.addEventListener("DOMContentLoaded", ()=>{
    domText.textContent = "DOM has loaded succesfuly"
})

// (9)

const toggleButton = document.getElementById("toggleHighlight")
const toggleText = document.getElementById("descriptionText")

toggleButton.addEventListener("click", ()=>{
    if (toggleText.classList.contains("highlight")){
        toggleText.classList.remove("highlight")
    }
    else{
        toggleText.classList.add("highlight")
    }
})