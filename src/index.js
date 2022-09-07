console.log('%c HI', 'color: firebrick')




// Challange 1 - Using forEach

fetch('https://dog.ceo/api/breeds/image/random/4')
.then(resp=>resp.json())
.then(data=>{
    const dataDotMessageArray = data.message
    console.log(dataDotMessageArray)


function addImages(dataDotMessageArray){
    const img1 = document.createElement('img');
    img1.src=dataDotMessageArray
    console.log(img1)
    const divImage = document.querySelector('#dog-image-container');
    console.log(divImage)
    divImage.appendChild(img1)}



    dataDotMessageArray.forEach(addImages)
    console.log(data)
    console.log(data.message)

})


// Challange 2 - Iterate over object using for in loop

fetch('https://dog.ceo/api/breeds/list/all')
.then(resp=>resp.json())
.then(data=>{
    const challange2Array = data.message
    console.log(challange2Array)
    
    for(const item in challange2Array){
        const addBreedLiElement = document.createElement('li');
        const getUl = document.querySelector('#dog-breeds');
        addBreedLiElement.innerText = item
        getUl.appendChild(addBreedLiElement)
        // Challange 3
        getUl.addEventListener('click', (e)=>{
            e.preventDefault();
            e.target.style.color = '#32F4EB'
        })
    }

    const dogBreedKeys= Object.keys(challange2Array)
    const breedsA = dogBreedKeys.filter(item=>item.substring(0,1)==='a')
    console.log(breedsA)
    const optionA = document.querySelector('#breed-dropdown :nth-child(1)')
    console.log(optionA)
    //const newliOption = document.createElement('li')
    //newliOption.innerText=breedsA
    //optionA.appendChild(newliOption)


    //const select = document.querySelector('#breed-dropdown');
    //const athroughd = document.
    //console.log(select)

})

/***************** IGNORE FOR NOW const challange2Array = data.message
    console.log(challange2Array)

    function addDogBreeds(challange2Array){

        const addBreedLiElement = document.createElement('li');
        const getUl = document.querySelector('#dog-breeds');
        addBreedLiElement.innerText = challange2Array
        getUl.appendChild(addBreedLiElement)

    }

    challange2Array.forEach(addDogBreeds)
    
    
    console.log(challange2Array)****************/


    // Challange 4

    









