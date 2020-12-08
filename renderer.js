window.onload = function () {
    const video = document.querySelector('#video')
    const slider = document.querySelector('#slider')

    slider.addEventListener('input', _.throttle(function (event) {
        window.requestAnimationFrame(function () {
            video.currentTime = event.target.value
        })
    }, 50))
}