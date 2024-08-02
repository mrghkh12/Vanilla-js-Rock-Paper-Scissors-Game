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
        checkChoic(userSelect(imgSelectedSrc) , botSelect())
    })
})


function userSelect(imgSrc){
    userChoice.src = imgSrc

    return cutImgName(userChoice.src)
}

function botSelect(){
    let imgSrcList = ['./image/rock.png', './image/paper.png' , './image/scissors.png']

    let randomSelectIndex = Math.floor(Math.random() * 3)

    botChoice.src = imgSrcList[randomSelectIndex]

    return cutImgName(botChoice.src)
}

function checkChoic(user , bot){
    console.log(user , bot);
    

}


function cutImgName(imgSrc){
    let imgSrcArr = imgSrc.split('/')
    let imgName = imgSrcArr[imgSrcArr.length - 1].split('.')
    return imgName[0]
}