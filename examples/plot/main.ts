let dot1: number[] = []
dot1 = [2, 2]
basic.forever(function () {
    custom.turnLED(dot1, OnOff.ON)
    basic.pause(500)
    custom.turnLED(dot1, OnOff.OFF)
    basic.pause(500)
})
