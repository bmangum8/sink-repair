import { sendRequest } from "./dataAccess.js"

export const ServiceForm = () => {
    let html = `
        <div class="field">
            <label class="label" for="serviceDescription">Description</label>
            <input type="text" name="serviceDescription" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceAddress">Address</label>
            <input type="text" name="serviceAddress" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceBudget">Budget</label>
            <input type="number" name="serviceBudget" class="input" />
        </div>
        <div class="field">
            <label class="label" for="serviceDate">Date needed</label>
            <input type="date" name="serviceDate" class="input" />
        </div>

        <button class="button" id="submitRequest">Submit Request</button>
    `

    return html
}


//querySelector attaches JS to HTML element with id of "container"--which is the id in the <main> in index.html

const mainContainer = document.querySelector("#container")

//mainContainer is the whole document and now it has an event listener
mainContainer.addEventListener("click", clickEvent => {
    //if the the target.id of the thing clicked is "submitRequest", then continue with code
    //"submitRequest" is the id of <button> in this module
    if (clickEvent.target.id === "submitRequest") {
        // Get what the user typed into the form fields
        //I don't know what the .value is for the 4 lines of code below. In a drop down menu option, 
        //value starts at 0 and increases with number of options
        //Are we giving the inputs a value with .value?
        const userDescription = document.querySelector("input[name='serviceDescription']").value
        const userAddress = document.querySelector("input[name='serviceAddress']").value
        const userBudget = document.querySelector("input[name='serviceBudget']").value
        const userDate = document.querySelector("input[name='serviceDate']").value

        // Make an object out of the user input
        const dataToSendToAPI = {
            description: userDescription,
            address: userAddress,
            budget: userBudget,
            neededBy: userDate
        }

        // Send the data to the API for permanent storage
        //sendRequest is a function created in dataAccess.js
        sendRequest(dataToSendToAPI)
    }
})