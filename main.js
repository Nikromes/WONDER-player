let rellax = new Rellax('.rellax');
AOS.init();

const contentSelectButtonsWrappers = document.querySelectorAll('.select-wrapper-wrapper')
const contentSelectButtons = document.querySelectorAll('.select-wrapper')

const playerAudio = document.querySelector('.player-body__audio')
const playerPlayButton = document.querySelector('.player-body__button')
const playerCurrentTime = document.querySelector('.timeline__time-left')
const playerAllTime = document.querySelector('.timeline__time-right')
const playerPrevButton = document.querySelector('.buttons-timeline__buttons-prev')
const playerNextButton = document.querySelector('.buttons-timeline__buttons-next')
// const playerAllLine = document.querySelector('.timeline__all-line')
const playerFilledLine = document.querySelector('.timeline__filled-line')
const playerFilledDot = document.querySelector('.timeline__filled-dot')
const playerPlayIcon = document.querySelector('.button__play')
const playerPauseIcon = document.querySelector('.button__pause')

const video = document.querySelector('.video-wrapper__video')
const videoWaitingBubbles = document.querySelector('.video__wait')
const audioWaitingBubbles = document.querySelector('.button__wait')

const videoWrapper = document.querySelector('.content-body__video-wrapper')
const title = document.querySelector('.player-text__title')
const text = document.querySelector('.player-text__text')
const selectButtonsData = {
    imagesLinks: [
        'https://lamcdn.net/wonderzine.com/post_image-image/DRiDO2-zPc-99o46U7q0Gg.jpg',
        'https://lamcdn.net/wonderzine.com/post_image-image/AVYn93spFvW3x9Ay1vmCDQ.jpg',
        'https://lamcdn.net/wonderzine.com/post_image-image/Dg01_BFvgSyt2-LNgCj1Fw.jpg',
        'https://lamcdn.net/wonderzine.com/post_image-image/YchUZ4iQ269GUb1LYCm21w.jpg',
        'https://lamcdn.net/wonderzine.com/post_image-image/u29pPUcckCWetcG-iwNeqA.jpg',
        'https://lamcdn.net/wonderzine.com/post_image-image/3yEOp_Hf8kYcdtcvDI_rxg.jpg'
    ],
    videoLinks: [
        'https://cdn.the-village.ru/the-village.ru/assets/esteelauder-1355/gaukhar_biege.mp4',
        'https://cdn.the-village.ru/the-village.ru/assets/esteelauder-1355/nata_grey.mp4',
        'https://cdn.the-village.ru/the-village.ru/assets/esteelauder-1355/gaukhar_pink.mp4',
        'https://cdn.the-village.ru/the-village.ru/assets/esteelauder-1355/gaukhar_green.mp4',
        'https://cdn.the-village.ru/the-village.ru/assets/esteelauder-1355/video_5.mp4',
        'https://cdn.the-village.ru/the-village.ru/assets/esteelauder-1355/video_6_1.mp4'
    ],
    audioLinks: [
        'https://cdn.the-village.ru/the-village.ru/assets/esteelauder-1355/audio_1.mp3',
        'https://cdn.the-village.ru/the-village.ru/assets/esteelauder-1355/audio_2.mp3',
        'https://cdn.the-village.ru/the-village.ru/assets/esteelauder-1355/tutorial_3.mp3',
        'https://cdn.the-village.ru/the-village.ru/assets/esteelauder-1355/audio_4.mp3',
        'https://cdn.the-village.ru/the-village.ru/assets/esteelauder-1355/tutorial_5.mp3',
        'https://cdn.the-village.ru/the-village.ru/assets/esteelauder-1355/audio_6.mp3'
    ],
    titles: [
        'Кому нужен крем для области вокруг глаз',
        'Какая она – кожа вокруг глаз',
        'Есть ли замена крему для области вокруг глаз',
        'Как работает крем для области вокруг глаз',
        'Как наносить крем для кожи вокруг глаз',
        'Как сделать массаж области вокруг глаз'
    ],
    texts: [
        'Ещё несколько лет назад косметологи рекомендовали обратить внимание на крем для кожи вокруг глаз тем, кому уже исполнилось 30. Но современным девушкам уход за этой областью может понадобиться раньше. Ведь мы практически не расстаёмся с гаджетами, смотрим сериалы, а с появлением ребёнка обретаем новый источник эмоций от умиления до тревоги. Вскоре обратная сторона активной мимики и активного образа жизни становится заметна. И это — первые морщины.',
        'Кожа вокруг глаз — особая история. Она самая тонкая и уязвимая на лице. Сосуды расположены близко к эпидермису, а значит, привет, тёмные круги. Запасы коллагена и эластина ниже, а уровень потери влаги — выше, поэтому кожа вокруг глаз быстрее теряет упругость. А каждый выпитый на ночь стакан жидкости утром рискует превратиться в мешки под глазами. Новый концентрат Advanced Night Repair Matrix Estée Lauder решает сразу несколько задач.',
        'Крем для кожи вокруг глаз — бьюти-продукт, о котором часто спорят. Многие считают, что его легко заменит крем для лица. Но ни один из них не уберёт мешки под глазами, не подтянет верхние веки и не сделает тёмные круги менее заметными. Более того, кремы для лица часто содержат отдушки, не проходят тестирование у офтальмологов и могут вызвать раздражение, покраснение или отёк. Вот почему маленькая область вокруг глаз достойна большого внимания.',
        'Вокруг глаз больше 20 мышц. Добавьте сюда примерно 15 тысяч морганий в сутки, от которых сокращается производство коллагена, недостаток которого делает морщинки более заметными. Всё это не означает, что нужно отказаться выражать эмоции и тем более моргать. Особенность концентрата для кожи вокруг глаз Advanced Night Repair Matrix Estée Lauder в новой запатентованной технологии Chronolux Power Signal. Она ускоряет производство новых клеток и выработку коллагена.',
        'Ещё одна причина для дискуссий — куда наносить крем для области вокруг глаз. Верный ответ — только по орбитальной косточке. Вы почувствуете её, проведя пальцем под бровями и нижними веками. Не наносите крем на сами веки: кожа здесь очень чувствительная, а близость к ресничному краю может стать причиной раздражения. Крем для кожи вокруг глаз можно и нужно использовать два раза в день — утром и вечером. Для одного применения достаточно трёх-пяти горошин.',
        'Помимо обновлённой формулы, у Advanced Night Repair Matrix Estée Lauder новый аппликатор из нержавеющей стали, охлаждающий кожу примерно на 2 градуса. На его создание специалистов бренда вдохновила криотерапия — воздействие холода на кожу. Ещё криоаппликатором можно делать массаж. Он улучшит проникновение активных компонентов, снимет отёчность и напряжение с век, придаст лицу отдохнувший вид. Это полезно тем, кто смеётся, хмурится, моргает. А значит, всем.'
    ]
}

let selectedPageIndex = 0
let selectedPageIndex_2 = selectedPageIndex
let dragingDot = false

const slider = document.querySelector('.slider');
noUiSlider.create(slider, {
    start: [0],
    connect: 'lower',
    range: {
        'min': 0,
        'max': 100
    }
});

selectButtonsHandler()

function selectButtonsHandler() {
    let activeButton = contentSelectButtons[0]
    for (let i = 0; i < contentSelectButtons.length; i++) {
        contentSelectButtonsWrappers[i].addEventListener('mouseover', () => {
            if (contentSelectButtons[i].classList.contains('select-wrapper--disabled')) {
                activeButton.classList.add('select-wrapper--hover')
                contentSelectButtons.forEach(button => {
                    button.classList.add('select-wrapper--disabled')
                })
                contentSelectButtons[i].classList.remove('select-wrapper--disabled')
            }
        })

        contentSelectButtonsWrappers[i].addEventListener('mouseout', () => {
            activeButton.classList.remove('select-wrapper--hover')
            contentSelectButtons.forEach(button => {
                button.classList.add('select-wrapper--disabled')
            })
            activeButton.classList.remove('select-wrapper--disabled')
        })

        contentSelectButtonsWrappers[i].addEventListener('click', () => {
            canPlay = false
            selectedPageIndex = i
            if (selectedPageIndex_2 !== i) {
                selectedPageIndex_2 = i
                contentSelectButtons.forEach(button => {
                    button.classList.add('select-wrapper--disabled')
                })
                contentSelectButtons[i].classList.remove('select-wrapper--disabled')
                activeButton.classList.remove('select-wrapper--hover')
                activeButton = contentSelectButtons[i]

                videoWaitingBubbles.style.display = 'flex'
                videoWrapper.style.backgroundImage = `url('${selectButtonsData.imagesLinks[i]}')`
                video.src = `${selectButtonsData.videoLinks[i]}`
                title.innerText = selectButtonsData.titles[i]
                text.innerText = selectButtonsData.texts[i]
                playerAudio.src = `${selectButtonsData.audioLinks[i]}`

                playerCurrentTime.innerText = '0:00'
                playerAllTime.innerText = '0:00'

                slider.noUiSlider.set(0);
                playerPlayIcon.style.display = 'none'
                playerPauseIcon.style.display = 'none'
                audioWaitingBubbles.style.display = 'flex'
            }
        })
    }
}

// New

playerPrevButton.addEventListener('click', () => {
    if (selectedPageIndex > 0) {
        selectedPageIndex--
    } else {
        selectedPageIndex = contentSelectButtonsWrappers.length - 1
    }
    contentSelectButtonsWrappers[selectedPageIndex].click()
})

playerNextButton.addEventListener('click', () => {
    if (selectedPageIndex < contentSelectButtonsWrappers.length - 1) {
        selectedPageIndex++
    } else {
        selectedPageIndex = 0
    }
    contentSelectButtonsWrappers[selectedPageIndex].click()
})

let canPlay = false
// let playIcon = false
playerPlayButton.addEventListener('click', () => {
    if (canPlay) {
        if (playerAudio.paused) {
            // playIcon = true
            playerPlayIcon.style.display = 'none'
            playerPauseIcon.style.display = 'block'
            playerAudio.play()
        } else {
            // playIcon = false
            playerPlayIcon.style.display = 'block'
            playerPauseIcon.style.display = 'none'
            playerAudio.pause()
        }
    }
})

playerAudio.addEventListener('timeupdate', updateProgress)
playerAudio.addEventListener('canplay', (e) => {
    canPlay = true
    audioWaitingBubbles.style.display = 'none'
    updateProgress(e)
    if (playerAudio.paused) {
        playerPlayIcon.style.display = 'block'
    }
})
playerAudio.addEventListener('ended', () => {
    playerPlayIcon.style.display = 'flex'
    playerPauseIcon.style.display = 'none'
})
video.addEventListener('canplay', () => {
    videoWaitingBubbles.style.display = 'none'
})


function updateProgress(e) {
    let {currentTime, duration} = e.target
    if (duration) {
        if (!dragingDot) {
            let progressPercent = (currentTime / duration) * 100
            slider.noUiSlider.set(progressPercent);
        }

        if (Math.round(duration) < 60) {
            duration = `0:${Math.round(duration)}`
        }
        if (Math.round(currentTime) < 10) {
            currentTime = `0:0${Math.round(currentTime)}`
        } else {
            currentTime = `0:${Math.round(currentTime)}`
        }
        playerCurrentTime.innerText = currentTime
        playerAllTime.innerText = duration
    }
}

function setProgress(e) {
    dragingDot = false
    if (canPlay) {
        let audioDuration = playerAudio.duration
        playerAudio.currentTime = (audioDuration / 100) * Number(slider.noUiSlider.get())
    }
}

slider.noUiSlider.on('start', () => {
    dragingDot = true
})
slider.noUiSlider.on('change', setProgress)