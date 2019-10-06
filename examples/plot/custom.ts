/*
 * Custom block code
 */
// Declare this enum outside the custom namespace.
// Doing so makes it available to regular blocks.
// It will be used by the custom block inside the namespace.
enum OnOff {
    ON,
    OFF
}

// The following code establishes the custom namespace.
// The custom block is defined inside the namespace.
/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace custom {
    /*
     * Function turnLED
     * Parameters:
     *    array of 2 numbers,
     *    selection from an enumerated list
     * Asserts:
     *    array has exactly 2 elements of type number
     * Returns: nothing
     * Side effects: turns a pixel on or off
     */ 
    // The following comment encodes the help-text for the block
    /**
     * Plot or unplot an led on the display
     */
    //% block
    export function turnLED(theDot: number[],
        onOrOff: OnOff): void {
        // assert that theDot is a two-number array
        if (
            theDot.length !== 2
            || typeof theDot[0] !== "number"   
        ) {
            // indicate error and exit
            basic.showString("?");
            return;
        }
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
