//get the empty container of #person-container and store it in the variable personContainer
const personContainer = document.querySelector("#person-container");

//loop through every customer of the customers Array
for (let customer of customers) {
//create the divs for each variable
    let customerDiv = document.createElement("div");
    let customerName = document.createElement("h2");
    let customerEmail = document.createElement("p");
    let customerAddress = document.createElement("p");
    let customerDOB = document.createElement("p");
    let customerSince = document.createElement("p");
//use the data from an object to populate these divs
    customerName.innerText = customer.name;
    //customerName's inner text will be the object's (customer) object (name)
    customerEmail.innerText = customer.email;
    customerAddress.innerText = customer.location;
    customerDOB.innerText = customer.dob;
    customerSince.innerText = customer.registered;
    
//move all of this data into the customerDiv
    customerDiv.appendChild(customerName);
    customerDiv.appendChild(customerEmail);
    customerDiv.appendChild(customerAddress);
    customerDiv.appendChild(customerDOB);
    customerDiv.appendChild(customerSince);

    personContainer.appendChild(customerDiv);
    personDiv.classList.add("customer")



}