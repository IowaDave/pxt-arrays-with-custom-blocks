<h1>Beyond The Blocks</h1>
<h3>Pass Arrays Into Custom Blocks<br>
Return Arrays From Custom Blocks</h3>

<h3>By David Sparks</h3>
<h4>Original post September 2019</h4>
<p>This article will show how to pass JavaScript array objects into custom functions that you create. </p>
<p>Also, it will show how to write functions that return array objects back to MakeCode.</p>
<p>The following link will load a fun example into a web browser: a MakeCode project that bounces a dot randomly around the micro:bit's LED display.  <a href="https://makecode.microbit.org/#pub:_9uE8MvKyW6cv">https://makecode.microbit.org/#pub:_9uE8MvKyW6cv</a></p>
<p>The project sends an array into a custom block and receives an array back from the block. The code for the custom block was created directly in the MakeCode editor. This article will show you how.</p>
<p>This is one of a series of articles about my own journey of discovery into writing custom blocks for MakeCode. I am not a very smart person so it took a long time for me to acquire a working knowledge. I share my story with you in hopes that your learning may go faster and easier for you.</p>
<h4>Background</h4>
<p>MakeCode is based on a powerful version of JavaScript called Static TypeScript (STS), which was <a href="https://www.microsoft.com/en-us/research/publication/static-typescript/">developed by MicroSoft</a>.</p>
<p>MakeCode also is a brilliant editor for writing code by simply dragging and connecting colorful graphical blocks. There is STS code behind every block, of code. </p>
<p>You can even view and edit the code. Try it!  Click the JavaScript tab in MakeCode to see the code, just as if you had typed it into a text editor. Click the Blocks tag to go back to the blocks.</p>
<p>Here is a link to some excellent examples provided by microbit.org, demonstrating the relationships between blocks and STS: <a href="https://makecode.microbit.org/courses/blocks-to-javascript">MakeCode Courses: Blocks To JavaScript</a>.</p>
<p>Do you see? As long as the blocks meet your needs, you can write code without typing code. How nice!</p>
<p>The block names are descriptive, which means the block names can actually help a beginner to remember what the blocks do. It is very user-friendly.</p>
<p>The designers of MakeCode created a standard set of blocks based on selected parts of STS. The standard blocks are enough to write many useful programs. </p>
<p>Sooner or later, however, you may wish that the MakeCode editor provided blocks for some part of the STS language that got left out of the standard blocks. Good news! The MakeCode editor gives you a way to create custom blocks that may accomplish almost anything you could do by writing STS code in a text editor.</p>
<p>I got interested in the topic of arrays and custom blocks after seeing a request someone posted asking the MakeCode designers to equip functions in the standard blocks to receive and return arrays.</p>
<p>It looked like a perfect job for a custom block.</p>
<p>How would someone write their own functions to do this, I wondered.</p>
<h4>Writing Custom Blocks</h4>
<p>Other articles in this series explain how to write custom blocks. Please refer to the articles listed below for details and illustrations of the method that works for me.  The Top Ten article also lists links to the references that I consult often, whenever a question pops into my mind.</p>
<ul>
<li><a href="https://iowadave.github.io/Custom-Blocks-Top-Ten-Tricks/">Top Ten Secret Tricks for Writing Custom Blocks</a></li>
<li><a href="https://iowadave.github.io/pxt-constants/">Add Custom Constant Blocks to Your MakeCode Project</a></li>
</ul>
<p>I made some assumptions about who might most likely read this article. I imagine that you:</p>
<ul>
<li>have some experience typing code in a text editor.</li>
<li>perhaps have even written and used functions in a programming language.</li>
<li>are willing and able to look things up and to engage in trial and error as part of your learning process.</li>
<li>wonder, as I did, how to pass an array into a function or to return an array from a function.</li>
</ul>
<p>Readers with some experience of writing code for functions may get the most out of this article. All readers are welcome, of course. At the very least, I hope to show that when you are ready, MakeCode can take you far "Beyond The Blocks".</p>
<h4>About Arrays and Functions</h4>
<p>JavaScript arrays and functions are topics too large to teach or explain in a short article like this. The W3 Schools web site offers good tutorials on both subjects:</p>
<ul>
<li><a href="https://www.w3schools.com/js/js_arrays.asp">JavaScript Arrays</a></li>
<li><a href="https://www.w3schools.com/js/js_functions.asp">JavaScript Functions</a></li>
</ul>
<p>Static TypeScript differs from JavaScript in how it handles arrays. I will describe a few practical differences that matter for dealing with simple arrays in MakeCode.</p>
<h4>STS Restricts Arrays To A Single Type</h4>
<p>STS allows arrays to hold only one type of value. The elements of an array of type: number can only be numbers; string-typed arrays can only contain strings, and so forth. A runtime error will result from trying to assign a different type of value.</p>
<p>The restriction is similar to the way BASIC, C, and other strongly-typed languages specify arrays.</p>
<p>The best practice is to define the array's type when you declare the array's name. For example, the following syntax declares a variable name, defines it to be an array of type: number[], and sets it equal to an empty array. The square brackets attached to the type specifier tell MakeCode that this variable will be an array, rather than a single value.</p>
<pre><code>let myNumArray: number[] = [];</code></pre>

<p>STS arrays work pretty much the same way that JavaScript arrays work, otherwise, at least for the purposes of this article. </p>
<h4>Return An Array From A Custom Block</h4>
<p>Custom blocks are written in code in a special part of a MakeCode project: the custom.ts file. The articles listed above detail and illustrate the method I have used to activate the custom.ts file. Here very briefly is how to proceed.</p>
<p>For this exercise, start with a new, blank MakeCode project. Then click the following links in the sequence listed below:</p>
<ol>
<li>the JavaScript tab, to put the editor into script mode</li>
<li>the Explorer button, located beneath the micro:bit siumulator</li>
<li>the plus sign ("+") that appears in the Explorer button</li>
<li>the "Go Ahead!" button that appears in the pop-up dialog box</li>
<li>the custom.ts file link listed under the Explorer</li>
</ol>
<p>The custom.ts file contents will display in the editor. Replace the contents with the following code:</p>
<h5>Exhibit 1<br>The STS code for a custom block that returns an array</h5>

<pre><code>/**
 * Custom blocks
 * Example of returning an array
 * from a custom block.
 */
//% weight=100 color=#0fbc11 icon="\uf0c3"
namespace custom {
    /**
     * return an array
     */
    //% block
    export function customArray(): number[] {
        let theArray: number[] = [1,2,3,4];
        return theArray;
    }
}</code></pre>

<p>The syntax for a custom.ts file is explained in detail in another article of this series: <a href="https://iowadave.github.io/pxt-reporter-blocks/">Create Functions That Return Values To MakeCode</a>.</p>
<p>Compile the custom block code by clicking the Blocks link in the editor.</p>
<p>Refresh the browser window to make the new block available. Figure 1 shows the Custom group and the block being used.</p>
<h5><img alt="Figure 1" src="https://raw.githubusercontent.com/IowaDave/pxt-arrays-with-custom-blocks/gh-pages/images/Figure%201.png">
<br>Figure 1<br>
Showing Custom group and the custom array block being used</h5>

<p>The code listed in Exhibit 2 can be pasted into the main JavaScript tab of the editor to create the blocks program shown in Figure 1. Click the Blocks tab to switch modes and see the blocks.</p>
<h5>Exhibit 2<br>The STS code that creates the blocks in Figure 1</h5>

<pre><code>// declare the main-blocks variables
let blocksArray: number[] = []
let count = 0
//
basic.forever(function () {
    // assign the array returned by the custom block
    // to the empty main-blocks array 
    blocksArray = custom.customArray()
    // count the number of elements in the array
    count = 0
    for (let x of blocksArray) {
        count += 1
    }
    // cycle through the elements
    for (let index = 0; index <= count - 1; index++) {
        basic.showNumber(blocksArray[index])
    }
    // repeat...
})</code></pre>

<p><em>Dear Experts: The technique I chose for counting the number of elements in the array is intended to be general-purpose in nature. True, an array of scalar values would have a .length property equal to the count of elements it contains. However, as you know, arrays-of-arrays do not have a .length property; yet, the number of elements may be counted as shown in Exhibit 2. I do not discuss arrays-of-arrays any farther in this article.</em></p>

<h4>Pass An Array Parameter Into A Custom Block</h4>
<p>A function can accept an array as a parameter. Simply declare the argument's type in the function's parameter list. For example:</p>
<pre><code>export function example(incomingArray: number[]) &middot;&middot;&middot;</code></pre>

<h5>Important! JavaScript arrays pass by reference, not by value.</h5>

<p>What does it mean? Changes you make inside the function that affect the array named by the parameter will affect the array outside the function, also.</p>
<p>Do you want to make changes to the values in the array and return the modified contents as a different array, while leaving the original, external array undisturbed? Then you must:</p>
<ol>
<li>copy the contents of the parameter into a new array. </li>
<li>make your changes upon the new array.</li>
<li>return the new array.</li>
</ol>
<p>Exhibit 3 lists a custom block that accepts a numeric array, multiplies each element by 2, and returns the changed array. Copy this code into the custom.ts file of your project, compile it by clicking the Blocks tab, and refresh the browser to make the block available.</p>
<h5>Exhibit 3<br>STS code for custom block to<br>receive, modify and return an array</h5>

<pre><code>/**
 * Custom blocks
 * Example of receiving an array parameter
 * making a local copy of its contents,
 * and returning the copy, with changes
 */
//% weight=100 color=#0fbc11 icon="\uf0c3"
namespace custom {
    /**
     * receive a numeric array and
     * return a new array with doubled values
     */
    //% block
    export function doubleArray(paramArray: number[]): number[] {
        // declare a local, empty array
        let newArray: number[] = [];
        // declare a counting variable
        let count = 0;
        // iterate the elements of paramArray
        // copy the element values into newArray
        // note: must copy the values
        // count the elements during the process, too
        for (let x of paramArray) {
            newArray[count] = paramArray[count];
            count++
        }
        // loop through the newArray, doubling the values
        for (let i = 0; i &lt; count; i++) {
            newArray[i] *= 2;
        }
        // return the newArray
        return newArray;
    }
}</code></pre>

<p><em>Dear Experts: Yes, we know there are different, super-cool JavaScript ways to encode the procedure in Exhibit 3. The approach taken here was designed to make the concept accessible to as wide an audience as possible without requiring very much specialized knowledge of the language.</em></p>

<p>Figure 2 displays the custom function being used. Exhibit 4 lists the JavaScript code that produces the blocks shown in Figure 2. You can paste this code into the main JavaScript window of the MakeCode editor, then click Blocks to view the blocks.</p>
<h5><img alt="Figure 2" src="https://raw.githubusercontent.com/IowaDave/pxt-arrays-with-custom-blocks/gh-pages/images/Figure%202.png">
<br>Figure 2<br>
Showing Custom group and the custom array block being used</h5>

<h5>Exhibit 4<br>STS (JavaScript) code that produces the blocks shown in Figure 2</h5>

<pre><code>// declare two empty arrays
let sendArray: number[] = []
let receiveArray: number[] = []
//
basic.forever(function () {
    // populate the sendArray and display it
    sendArray = [4, 3, 2, 1]
    basic.showString(" SEND:")
    for (let i = 0; i &lt; 4; i++) {
        basic.showNumber(sendArray[i])
    }
    // send the array to the custom block
    // which will double the values and
    // return a new array
    receiveArray = custom.doubleArray(sendArray)
    basic.showString(" RECEIVE:")
    for (let i = 0; i &lt; 4; i++) {
        basic.showNumber(receiveArray[i])
    }
    // redisplay the original sendArray
    basic.showString(" ORIGINAL:")
    for (let i = 0; i &lt; 4; i++) {
        basic.showNumber(sendArray[i])
    }
    // repeat
})</code></pre>

<p>JavaScript arrays are worthy of detailed study. In significant ways they are unlike arrays found in other languages. MakeCode provides a convenient playground for a patient, playful, exploratory approach to learning JavaScript arrays.</p>
<p>I imagine that almost any STS array can be passed into or returned from a custom block using the general-purpose techniques illustrated in this article. </p>
<p>If you have a specific application in mind for using an array with a micro:bit, I feel confident that you can get it to work. You are likely to learn a lot more about JavaScript, Static TypeScript, and MakeCode during the process. You will probably understand your application somewhat better, also, by the time you do get it working.</p>
<p>I cannot do justice to the very broad topic of arrays by purusing it any farther in a short article about custom blocks. Instead, let me conclude with a playful example of arrays in action.</p>
<p>Here is that link again, repeated from the top of the article. It will load the MakeCode editor with a project that moves a dot randomly on the micro:bit display. Each move changes the dot by one position up, down, or to the left or right. The custom block that makes it go uses arrays. It recieves, modifies, and returns an array. As you can see in Exhibit 5, a custom block can do quite a bit of processing before it returns a value.</p>
<p><a href= "https://makecode.microbit.org/#pub:_9uE8MvKyW6cv" ">https://makecode.microbit.org/#pub:_9uE8MvKyW6cv</a></p>
<p>The project simulates what is called Brownian motion, so named for a botanist named Robert Brown who, in 1827, published his observations of pollen grains moving randomly in a glass of water.</p>
<p>The heart of the simulation is the custom block listed in Exhibit 5 that I named "einstein" in honor of Albert Einstein, for his brilliant insight into Brownian motion in 1905 that ended scientific debate about the existence of atoms. Einstein saw more deeply into the phenomenon that anyone had ever done before.</p>
<p>The comments in Exhibit 5 are my attempt to explain how the function works. </p>
<p>There is a detail about the comments that may be worthy of note. Look closely at how the multi-line comments start.  Some begin with "/<em> ", that is, a single asterisk following the slant character. Others begin with "/</em>* ", two asterisks following the slant. This tiny difference matters to MakeCode, as follows:</p>
<ul>
<li>"/** " is a metacode token telling MakeCode to incorporate the comment into the custom block as help text.</li>
<li>"/* " denotes a regular JavaScript comment that will not be incorporated into the custom block.</li>
</ul>
<h5>Exhibit 5<br>The code for the "einstein" block goes into the custom.ts file</h5>

<pre><code>//% weight=100 color=#0fbc11 icon="\uf0c3"
namespace custom {
    /&#42;
     * Function einstein
     * Parameter: Numeric array
     * Asserts: 
     *  exactly 2 elements (.length == 2)
     *  elements are of type: number
     *  element values n: 0 <= n <= 4
     * Returns:
     *  undefined if parameter is malformed
     *  otherwise, returns a 2-element numeric array
     * Side-effects: none
     * Named for Albert Einstein, whose theory
     * explaining random motion of particles 
     * in liquids resolved scientific debate
     * about the existence of atoms. 
     */
    /&#42;*
     * receive, modify and return a
     * two-element numeric array
     * of LED location coordinates
     */
    /&#42; function type is 'any' to allow error reporting */
    //% block="einstein|%dot"
    export function einstein(dot: number[]): any {
        // declare and initialize variables
        // preliminary motion parameters
        let whichWay = (Math.randomRange(0, 1) * 2) - 1;
        let whichOne = Math.randomRange(0, 1);
        // new array to be modified and returned
        let newArray: number[] = [];
        // ERROR CHECKING
        // return 'undefined' if dot does not contain
        // exactly 2 elements of type: number
        // having values between 0 and 4
        if (
            (dot.length !== 2)
            || ((typeof dot[0]) !== "number")
            || ((typeof dot[1]) !== "number")
            || (dot[0] < 0)
            || (dot[0] > 4)
            || (dot[1] < 0)
            || (dot[1] > 4)
        )
        // Report receiving malformed dot coordinates
        // and exit the function
        { return undefined; }
        // The received coordinates pass all tests.
        // Copy the coordinates into newArray.
        newArray[0] = dot[0];
        newArray[1] = dot[1];
        // apply the motion parameters
        newArray[whichOne] += whichWay;
        // bounce off the wall if necessary
        if (newArray[whichOne] > 4) {
            newArray[whichOne] -= 2;
        }
        if (newArray[whichOne] < 0) {
            newArray[whichOne] += 2;
        }
        return newArray;
    }
    /&#42; Custom Comment Block 
     * Parameter: string
     * Asserts: none
     * Returns: nothing
     * Side-effects: none
     */
    /&#42;*
     * allow user to display a code comment
     * in the parameter field, otherwise
     * do nothing
     */
    //% block
    export function comment(theComment: string): void {
        // do nothing
    }
}</code></pre>

<p>The code listed above actually provides two custom blocks: the einstein block and a custom "comment" block. Compile the custom block by clicking the Blocks tab. Then refresh the browser to make the two blocks available. </p>
<p>To test and demonstrate the performance of the custom block, we need some code blocks. You can create blocks by first entering code into the JavaScript window of the editor. Copy the code from Exhibit 6 into the main JavaScript window. </p>
<h5>Exhibit 6<br>The STS code for the main JavaScript window</h5>

<pre><code>// declare empty array to receive from custom block
let receiveDot: number[] = []
custom.comment("Initialize array with coordinates of starting dot position.")
// Note that assigning numbers establishes 
// the array as type: number
let sendDot = [2, 2]
custom.comment("Display the starting dot.")
// plot the sender array before sending
// to custom block
led.plot(sendDot[0], sendDot[1])
custom.comment("Setup complete. Proceed into the forever loop.")
basic.forever(function () {
    custom.comment("Begin by checking for bad coordinates")
    // error check - not really needed in this case but
    // always worth considering
    if (custom.einstein(sendDot) == undefined) {
        custom.comment("Something is wrong with the dot coordinates. Show error and exit.")
        // einstein says the sendArray was malformed
        // print an error message
        basic.showString("undefined")
    } else {
        custom.comment("Let the illuminated dot show briefly")
        basic.pause(150)
        custom.comment("Dot coordinates pass tests. Obtain new modified coordinates.")
        // einstein is going to return an array so go get it
        receiveDot = custom.einstein(sendDot)
        custom.comment("Display the dot at the new coordinates")
        led.plot(receiveDot[0], receiveDot[1])
        custom.comment("Turn off dot at the previous coordinates.")
        // move the dot to its new position
        led.unplot(sendDot[0], sendDot[1])
        custom.comment("Replace previous dot coordinates with new dot coordinates")
        // copy the received coordinates into the sender
        sendDot = receiveDot
    }
    custom.comment("Repeat.")
})
</code></pre>

<p>Click Blocks to see the blocks it creates, if you wish. The custom "comment" blocks are intended to document what the program is doing at each step. </p>
<p>There will be one gray block, also, representing the special JavaScript value "undefined". Gray blocks result from JavaScript code that does not have a dedicated block to represent it. Gray blocks function just fine, and they can even be duplicated and used elsewhere in Blocks code. To create a gray block you must first type the code for it on the JavaScript side of the editor.</p>
<p>Have fun thinking of ways to use arrays with custom blocks in your next project!</p>
