document.querySelector("#load-users-btn").addEventListener('click', async function () {
    let users = await axios.get("users.json");
    let eachUserDiv = document.querySelector("#all-users");
    eachUserDiv.innerHTML = "";
    for (let eachUser of users.data.users) {
        // create div element with class user<userid>
        let divElement = document.createElement("div");
        divElement.id = `user ${eachUser.userId}`;

        //create h1 element with first name and last name
        let h1Element = document.createElement("h1");
        h1Element.innerHTML = `${eachUser.firstName} ${eachUser.lastName}`;

        //create h1 element with phone number
        let h2Element = document.createElement("h2");
        h2Element.innerHTML = eachUser.phoneNumber;

        //create h3 element with email address
        let h3Element = document.createElement("h3");
        h3Element.innerHTML = eachUser.emailAddress;

        //append into all-users div
        eachUserDiv.appendChild(divElement);
        eachUserDiv.appendChild(h1Element);
        eachUserDiv.appendChild(h2Element);
        eachUserDiv.appendChild(h3Element);
    }
})


document.querySelector("#btnSearch").addEventListener('click', async function () {
    //get data from json
    let users = await axios.get("users.json");
    let searchInput = document.querySelector("#inputSearch");
    let userFound = null;
    //for each object in users object
    for (let eachUser of users.data.users) {
        //if username matches the search input
        if (eachUser.userId == searchInput.value) {
            //display match user id and name
            userFound = true;
            document.querySelector("#divSearchResults").innerHTML = `
            <h3>USER FOUND</h3>
            <h4>User ID: ${eachUser.userId}<h4>
            <h4>Name: ${eachUser.firstName} ${eachUser.lastName}</h4>
            `
        } 
    }
    if (!userFound){
        document.querySelector("#divSearchResults").innerHTML = `
            <h3>USER NOT FOUND</h3>
            `
    }
})