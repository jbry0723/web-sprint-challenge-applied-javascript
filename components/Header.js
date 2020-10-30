// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

function Header() {
const headerDiv=document.createElement('div')
const dateSpan=document.createElement('span')
const headerH1=document.createElement('h1')
const tempSpan=document.createElement('span')

headerDiv.appendChild(dateSpan)
headerDiv.appendChild(headerH1)
headerDiv.appendChild(tempSpan)

headerDiv.classList.add('header')
dateSpan.classList.add('date')
tempSpan.classList.add('temp')

dateSpan.textContent="March 28, 2020"
headerH1.textContent="Lambda Times"
tempSpan.textContent="90°"

let headerContainer=document.querySelector(".header-container")
headerContainer.appendChild(headerDiv)
}



Header()

