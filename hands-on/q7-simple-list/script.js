document.querySelector("#btnLoad").addEventListener("click", async function(){
    let response = await axios.get("https://anapioficeandfire.com/api/books/");
    let responseData = response.data;
    // console.log(responseData);

    //loop through array
    for (let a of responseData){
        //console.log(a);
        let content = document.querySelector("#content");
        let divElement = document.createElement("div");
        divElement.innerHTML = `
        Author : ${a["name"]}<br/>
        Number of Pages : ${a["numberOfPages"]}<br/>
        POV Characters:
        `;
        content.appendChild(divElement);
        //loop through povCharacters array
        for (let b in a.povCharacters){
            // console.log(a.povCharacters[b]);
            let response2 = await axios.get(a.povCharacters[b]);
            let response2Data = response2.data;
            // console.log(response2Data);
            let ulElement = document.createElement("ul");
            ulElement.innerHTML = `
            <li>${response2Data["name"]}</li>
            `;
            content.appendChild(ulElement);
        }
        //divider
        document.querySelector("#content").innerHTML += `<hr>`;

        // console.log(a["name"]);
        // console.log(a["numberOfPages"]);
    }
})