let myLeads = [];
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
let inputBtn = document.querySelector("#input-btn");

// Get stored leads from localStorage

let leadsFromLocalStorage = localStorage.getItem("myLeads");

if (leadsFromLocalStorage) {
  // Check if leadsFromLocalStorage is not null before rendering
  myLeads = JSON.parse(leadsFromLocalStorage);
  renderLeads();
}
console.log("Test" + " " + leadsFromLocalStorage);

// Eventlistener for saving leads

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";

  // Turn array into string before saving in localStorage

  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  renderLeads();
});

// Function for rendering leads

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
            <li><a target='_blank' href="${myLeads[i]}">${myLeads[i]}</a></li>`;
  }
  // Adding leads to extension as a list item

  ulEl.innerHTML = listItems;
}
