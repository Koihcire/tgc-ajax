let url = "https://programming-quotes-api.herokuapp.com/quotes/random";

document.querySelector("#load").addEventListener("click", async function () {
    let a = await axios.get(url);
    
    document.querySelector("#quotes").innerHTML = a.data;
})
