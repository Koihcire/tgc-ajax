//CREATE ELEMENT METHOD
document.querySelector('#load-image-btn').addEventListener('click', async function(){
        //read from artwork.json for data
        let response = await axios.get('artwork.json');
        
        //create h1 child <h1 class="title"></h1>
        let h1Element = document.createElement('h1');
        h1Element.className = "title";
        h1Element.innerHTML = `${response.data.title}`;
        
        //create img child <img src="" alt="">
        let imgElement = document.createElement('img');
        imgElement.src = response.data.image_url;
        
        //put div into main div
        let divElement = document.querySelector('#main')

        //append h1+child under div
        divElement.appendChild(h1Element);
        divElement.appendChild(imgElement);
    })