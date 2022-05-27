let url = "https://programming-quotes-api.herokuapp.com/quotes/random";

document.querySelector("#load").addEventListener("click", async function () {
    let response = await axios.get(url);
    let responseData = response.data;
    console.log(responseData);
    document.querySelector("#quotes").innerHTML = `
    <h3>"${responseData.en}"</h3><h4>${responseData.author}</h5>
    `
    //
})
