let worm = [[2, 2], [2, 2], [2, 2], [2, 2]]
basic.forever(function () {
    if (custom.newWorm(worm) == undefined) {
        basic.showString("undefined")
    } else {
        for (let i = 0; i <= 4 - 1; i++) {
            led.plot(worm[i][0], worm[i][1])
        }
        basic.pause(100)
        led.unplot(worm[3][0], worm[3][1])
        worm = custom.newWorm(worm)
    }
})
