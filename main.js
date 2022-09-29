//get the empty container of #person-container and store it in the variable personContainer
const personContainer = document.querySelector("#profile-container");

//creating function to make string have Title Case
function toFirstLetterUpperCase(string) {
    //this variable = takes (only) the character with the position of 0 (first letter) in the string & returns as Uppercase
    // and ADD the selection of the string that starts at 1 (second letter through end) 
    const capitalizedLetters = string.charAt(0).toUpperCase() + string.slice(1);
    // return the full element above (capitalized first letter + rest of string)
        return capitalizedLetters;
    }

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
        //call the function you created to capitalize each of the names ----->
    customerName.innerText = `${toFirstLetterUpperCase(customer.name.first)} ${toFirstLetterUpperCase(customer.name.last)}`;
    customerEmail.innerText = customer.email;
    customerAddressLineOne.innerText = `${customer.location.street.number} ${customer.location.street.name}`;
       //call the function nameToAbbrev for this nested object ---->
    customerAddressLineTwo.innerText = `${customer.location.city}, ${nameToAbbr(customer.location.state)} ${customer.location.postcode}`;
       //call the function moment for these nested objects -->
    customerDOB.innerText = `DOB: ${moment(customer.dob.date).format('MMMM Do, YYYY')}`;
    customerSince.innerText = `Customer Since: ${moment(customer.registered.date).format('MMMM Do, YYYY')}`;
    
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
//add the class of customerCard to customerDiv for CSS stuff
    customerDiv.classList.add("customerCard");
    customerPic.classList.add("customerPicture");
    customerEmail.classList.add("email");
    customerAddressLineOne.classList.add("address");
    customerAddressLineTwo.classList.add("address");
    customerDOB.classList.add("DOB", "dates");
    customerSince.classList.add("since", "dates");


    
    
  




}
