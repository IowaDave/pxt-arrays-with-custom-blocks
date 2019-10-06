enum OnOff {
    ON,
    OFF
}

/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /**
     * Plot or unplot an led on the display
     */
    //% block
    export function turnLED(theDot: number[],
        onOrOff: OnOff): void {
        switch (onOrOff) {
            case OnOff.OFF:
                led.unplot(theDot[0], theDot[1]);
                break;
            case OnOff.ON:
                led.plot(theDot[0], theDot[1]);
                break;
            default: // do nothing
        }
    }
}
