function fetchDogs () {
 fetch("https://dog.ceo/api/breeds/image/random/4")
 .then(resp => resp.json())
 .then(json => addImages(json.message))
}

function addImages (urls) {
    const container = document.querySelector('#dogsImg')
    urls.forEach(url => {
        
        container.appendChild(addImage(url))
    });
}

function addImage(dog) {
    let img = document.createElement('img')
    img.src=dog
        return img
}

// End of fetch dogs - tested and working

const breedUrl = 'https://dog.ceo/api/breeds/list/all'

function fetchBreeds () {
    fetch(breedUrl)
    .then(resp => resp.json())
    .then(json => addBreeds(json.message))
}

function addBreeds (breeds) {
    const container = document.querySelector('#dog-breeds')
    Object.keys(breeds).forEach(breed => {
        container.appendChild(addBreed(breed))
    });
}

function addBreed (dog) {
    let breed = document.createElement('li')
    breed.innerHTML = dog
    breed.addEventListener('click', function(event){
        event.target.style.color = "red" 
    })
    return breed
}

fetchBreeds()
fetchDogs()