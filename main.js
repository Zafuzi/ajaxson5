const API_KEY = '43f7c66fd51f4f4a9b7e1a45e94fff99';
const BASE_URL = 'https://api.giphy.com/v1/gifs';

offset = 0;


document.querySelector("#load").addEventListener('click', function() {
    offset += 1;
    load();
    console.log("LOADED: " + offset);
});

// Our simplified "load" function accepts a URL and CALLBACK parameter.
load();

function load() {
    var url = BASE_URL + '/search?api_key=' + API_KEY + '&q=dance&limit=1&offset=' + offset + '&rating=R&lang=en';
    var myHeaders = new Headers();
    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };
    fetch(url, myInit)
        .then(response => {
            console.log(response);
            if (response.ok) return response.json();
        })
        .then(json => {
            console.log(json);
            document.querySelector("#gif").setAttribute('src', json.data[0].images.original.url);
        })
        .catch(err => {
            console.log(err);
        })

    offset += 1;
}

function getImgByID(id) {
    var url = BASE_URL + '/' + id + '?api_key=' + API_KEY;
    var myHeaders = new Headers();
    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };
    fetch(url, myInit)
        .then(response => {
            console.log(response);
            if (response.ok) return response.json();
        })
        .then(json => {
            console.log(json);
        })
        .catch(err => {
            console.log(err);
        })
}