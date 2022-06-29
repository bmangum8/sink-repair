import { getRequests } from "./dataAccess.js"

/*
Requests.js
*-import getRequests
*-set const for requests= getRequests()

-create a function that builds a list of requests and creates its html representation
-it will take an request (requestObject) as a parameter
-will return the html of the description only for now

In the following code, you will need to define the function that will be passed to the map() method.
The function you write will convert each service request object into HTML representations. 
Since it is wrapped with a <ul> element, make each one an <li> element showing only the description 
of the request to start.

The function should define 1 parameter (value will be each object in the array)
The description of the service request should be interpolated inside the <li> HTML representation.
The function should return the HTML representation.
For example, if you write a function named convertRequestToListElement, 
then you would update the code below to the following...

requests.map(convertRequestToListElement).join("")
*/


const convertRequestToListElement = (requestObject) => {
    return `<li>
        The customer requested ${requestObject.description}.
</li>`
}


export const Requests = () => {
    const requests = getRequests()
    let html = "<ul>"
    const listItem = requests.map(convertRequestToListElement)
    html += listItem.join("")
    html += `</ul>`
    return html
}
