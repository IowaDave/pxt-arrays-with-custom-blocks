// place the following declaration 
// above the namespace in your custom.ts file

enum OnOff {
  ON,
  OFF
}
   
// place the following code inside 
// the namespace in your custom.ts file
    
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
