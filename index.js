let myLeads = [];
const inputEl = document.querySelector("#input-el");
const ulEl = document.querySelector("#ul-el");
let inputBtn = document.querySelector("#input-btn");

inputBtn.addEventListener("click", function () {
  myLeads.push(inputEl.value);
  inputEl.value = "";
  renderLeads();
});

function renderLeads() {
  let listItems = "";
  for (let i = 0; i < myLeads.length; i++) {
    listItems += `
            <li><a href=${myLeads[i]}>${myLeads[i]}</a></li>`;
    console.log(listItems[i]);
  }

  ulEl.innerHTML = listItems;

  console.log(myLeads);
}
