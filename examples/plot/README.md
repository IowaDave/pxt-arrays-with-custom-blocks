# Plot A Dot With An Array
### Turn a pixel in the micro:bit's display "on" or "off" using a custom block.

The position of a pixel in the micro:bit's display can be described by a two-number array, like this: [x,y], 
where x and y are numbers between 0 and 4.

The array can be passed into a custom block as a single parameter. The custom block in this example has a second parameter, a drop-down menu to select between turning the dot on and turning it off. 

The code in this example illustrates using an array with the following steps:
* Create an array for a pixel in the center of the display, that is, at position [2,2].
* Pass the array into a custom block for activation.

The following link will bring this example into your browser with the project already fully loaded: [https://makecode.microbit.org/#pub:_UDrhi19YHTwF](https://makecode.microbit.org/#pub:_UDrhi19YHTwF)

If you prefer to create the example project manually, consider the following steps.
1. Start a new, blank project in the MakeCode editor.
2. Add the custom.ts file to the project:
    1. Click the JavaScript tab to put the editor into script mode.
    1. Click the Explorer button that appears under the micro:bit simulator.
    1. Click the plus sign ("+") that appears next to the word, "Explorer".
    1. Click the "Go Ahead" button in the dialog box that appears.
3. Copy the contents of custom.ts into the custom.ts file, replacing the default contents of that file.
4. Click the Blocks tab to compile the custom block and return to Blocks mode.
5. Refresh the browser window to activate the custom block.
6. Click the "JavaScript" tab to return to script mode.
7. Copy the contents of main.ts into the main JavaScript window of the MakeCode editor.
8. Click the "Blocks" tab to return to blocks mode.

The custom block will appear in the Custom group that has been added to your project.
