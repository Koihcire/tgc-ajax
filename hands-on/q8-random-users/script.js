let url = "https://randomuser.me/api/?results=10"

document.querySelector("#btnLoad").addEventListener("click", async function(){
    let response = await axios.get(url);
    let responseData = response.data.results;
    //console.log(responseData);
    for (let a in response.data.results){
        // console.log(response.data.results[a]);
        let user = response.data.results[a];

        //create div element
        let divElement = document.createElement("div");

        divElement.innerHTML = `
        <h3>Name : ${user["name"]["first"]} ${user["name"]["last"]}</h3>
        <h3>City: ${user["location"]["city"]}</h3>
        <img src="${user["picture"]["medium"]}" alt="">
        <hr>
        `;

        //append
        let content = document.querySelector("#content");
        content.appendChild(divElement);

        // console.log(user["name"]["first"], user["name"]["last"]);
        // console.log(user["location"]['city']);
        // console.log(user["picture"]['medium']);

    }

})