// place this code in the main.ts file
// of your project
let dot1: number[] = []
dot1 = [2, 2]
basic.forever(function () {
    custom.turnLED(dot1, OnOff.ON)
    basic.pause(1000)
    custom.turnLED(dot1, OnOff.OFF)
})
