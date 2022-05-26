document.querySelector('#load-image-btn').addEventListener('click', function(){
    async function run(){
        let response = await axios.get('artwork.json');
        
        let divElement = document.createElement('div');

        let h1Element = document.createElement('h1');
        h1Element.className = "title";
        h1Element.innerHTML = `${response.data.title}`;
        
        let imgElement = document.createElement('img');
        imgElement.src = `${response.data.image_url}`;
        
        divElement.appendChild(h1Element);
        divElement.appendChild(imgElement);

        document.querySelector('#main').appendChild(divElement);
    }
    run();
})

