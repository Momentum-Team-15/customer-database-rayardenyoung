//get the empty container of #person-container and store it in the variable personContainer
const personContainer = document.querySelector("#profile-container");

//loop through every customer of the customers Array
for (let customer of customers) {
//create the divs/img for each variable
    let customerDiv = document.createElement("div");
    let customerPic = document.createElement("img");
    let customerName = document.createElement("h2");
    let customerEmail = document.createElement("p");
    let customerAddress = document.createElement("p");
    let customerDOB = document.createElement("p");
    let customerSince = document.createElement("p");
//use the data from an object to populate these divs
//customerName's (etc) inner text will be the object's (customer) nested object (name)
    //call the nested objects by using . and separating objects nested within the same object
    customerPic.innerText = `${customer.picture.thumbnail}`;
    customerName.innerText = `${customer.name.first} ${customer.name.last}`;
    customerEmail.innerText = customer.email;
    customerAddress.innerText = `${customer.location.street.number} ${customer.location.street.name} ${customer.location.city} /* call the function nameToAbbrev for this nested object */ ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`;
    customerDOB.innerText = customer.dob.date;
    customerSince.innerText = customer.registered.date;
    
//move all of this data into the customerDiv
    customerDiv.appendChild(customerPic);
    customerDiv.appendChild(customerName);
    customerDiv.appendChild(customerEmail);
    customerDiv.appendChild(customerAddress);
    customerDiv.appendChild(customerDOB);
    customerDiv.appendChild(customerSince);
//move customerDiv into personContainer ??????????????????
    personContainer.appendChild(customerDiv);
//add the class of customer to customerDiv for CSS stuff
    customerDiv.classList.add("customer");



}
