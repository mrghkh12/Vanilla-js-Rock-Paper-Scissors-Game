const $ = document

const gameContainer = $.querySelector('.container');
const userChoice = $.querySelector('.user-choice img');
const botChoice = $.querySelector('.bot-choice img');
const resultText = $.querySelector('.result');
const optionImage = $.querySelectorAll('.option-image .image');


optionImage.forEach(image => {
    image.classList.remove('active')

    image.addEventListener('click' , e => {
        optionImage.forEach(image => {
            image.classList.remove('active')
        })

        e.target.classList.add('active')

        let imgSelectedSrc = e.target.querySelector('img').src
        userSelect(imgSelectedSrc)
    })
})


function userSelect(imgSrc){
    userChoice.src = imgSrc
}