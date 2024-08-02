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
        botSelect()
    })
})


function userSelect(imgSrc){
    userChoice.src = imgSrc
}

function botSelect(){
    let imgSrcList = ['./image/rock.png', './image/paper.png' , './image/scissors.png']

    let randomSelectIndex = Math.floor(Math.random() * 3)

    botChoice.src = imgSrcList[randomSelectIndex]
}