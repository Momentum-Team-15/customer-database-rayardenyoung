//get the empty container of #person-container and store it in the variable personContainer
const personContainer = document.querySelector("#profile-container");

//loop through every customer of the customers Array
for (let customer of customers) {
//create the divs/img for each variable
    let customerDiv = document.createElement("div");
    let customerPic = document.createElement("img");
    let customerName = document.createElement("h2");
    let customerEmail = document.createElement("p");
    let customerAddressLineOne = document.createElement("p");
    let customerAddressLineTwo = document.createElement("p");
    let customerDOB = document.createElement("p");
    let customerSince = document.createElement("p");
//use the data from an object to populate these divs
//customerName's (etc) inner text will be the object's (customer) nested object (name)
    //call the nested objects by using . and separating objects nested within the same object
    customerPic.src = `${customer.picture.large}`;
    customerName.innerText = `${customer.name.first} ${customer.name.last}`;
    customerEmail.innerText = customer.email;
    //call the function nameToAbbrev for this nested object
    customerAddressLineOne.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
    customerAddressLineTwo.innerText = `${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`;
    customerDOB.innerText = customer.dob.date;
    customerSince.innerText = customer.registered.date;
    
//move all of this data into the customerDiv
    customerDiv.appendChild(customerPic);
    customerDiv.appendChild(customerName);
    customerDiv.appendChild(customerEmail);
    customerDiv.appendChild(customerAddressLineOne);
    customerDiv.appendChild(customerAddressLineTwo);
    customerDiv.appendChild(customerDOB);
    customerDiv.appendChild(customerSince);
//move customerDiv into personContainer ??????????????????
    personContainer.appendChild(customerDiv);
//add the class of customer to customerDiv for CSS stuff
    customerDiv.classList.add("customer");



}
