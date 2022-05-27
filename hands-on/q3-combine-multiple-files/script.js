//add event listener to button on click
document.querySelector("#load-btn").addEventListener("click", async function(){
    let getFile1 = axios.get("file1.txt");
    let getFile2 = axios.get("file2.txt");

    let File1 = await getFile1;
    let File2 = await getFile2;

    document.querySelector("#content").innerHTML = `${File1.data}\n\n${File2.data}`;
})