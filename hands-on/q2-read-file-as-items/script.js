document.querySelector("#seeFruits").addEventListener("click", async function(){
    let items = await axios.get("items.txt");
    let fruits = items.data;
    console.dir(fruits);

    //convert fruits into array
    let fruitsArr = fruits.split(",");
    console.dir(fruitsArr)
    
    //create a ul element
    let ulElement = document.createElement("ul");
    
    //assign fruits div element and initialise empty
    let fruitsDiv = document.querySelector("#fruits");
    fruitsDiv.innerHTML = "";

    //loop thru array
    for (f of fruitsArr){
        //create new li element for each item in array in ul element
        let liElement = document.createElement("li");
        liElement.innerHTML = f;
        ulElement.appendChild(liElement)
    }
    
    //append fruits div
    fruitsDiv.appendChild(ulElement);
})