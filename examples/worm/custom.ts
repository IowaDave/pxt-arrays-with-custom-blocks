```javascript
/*
 * "Worm" custom block
 * David Sparks September 2019
 * 
 */
//% weight=100 color=#0fbc11 icon="\uf0c3"
namespace custom {
    /* New Worm function
     * Parameter: array object
     * Asserts: 
     *      array has four elements
     *      each element is an sub-array having 2 elements
     *      the elements of each sub-array are of type: number
     *      sub-array elements are n: 0 <= n <= 4
     * Returns:
     *      'undefined' if parameter array is malformed
     *      array: number[][] otherwise
     * Side-effects: none
     */
    /**
     * return a new 'worm' array
     */
    //% block
    export function newWorm(oldWorm: number[][]): any {
        // initialize local variables
        let whichOne = 0;
        let whichWay = 0;
        let count = 0;
        // declare new worm array
        let newWorm: number[][] = [
            [0, 0], [0, 0], [0, 0], [0, 0]
        ];
        // ERROR CHECK
        // check type of oldWorm
        // exit with error if not object
        if ((typeof oldWorm) !== "object") { return undefined };
        // check the count of elements of oldWorm
        for (let x of oldWorm) {
            count++;
        }
        if (count != 4) { return undefined };
        // check contents of oldWorm
        for (let i = 0; i < 4; i++) {
            if (
                (typeof oldWorm[i]) !== "object"
                || oldWorm[i].length !== 2
                || oldWorm[i][0] < 0
                || oldWorm[i][0] > 4
                || oldWorm[i][1] < 0
                || oldWorm[i][1] > 4
            ) { return undefined };
        }
        // initialize the worm-head element to zeros
        newWorm[0][0] = 0;
        newWorm[0][1] = 0;
        // populate 'tail' segments of new worm
        for (let i = 0; i < 3; i++) {
            newWorm[i + 1][0] = oldWorm[i][0];
            newWorm[i + 1][1] = oldWorm[i][1];
        }
        // determine new head-of-worm position
        do {
            newWorm[0][0] = oldWorm[0][0];
            newWorm[0][1] = oldWorm[0][1];
            whichOne = Math.randomRange(0, 1);
            whichWay = (Math.randomRange(0, 1) * 2) - 1;
            newWorm[0][whichOne] += whichWay;
            if (newWorm[0][whichOne] < 0) {
                newWorm[0][whichOne] += 2;
            }
            if (newWorm[0][whichOne] > 4) {
                newWorm[0][whichOne] -= 2;
            }
        } while (
            ((newWorm[0][0] == newWorm[1][0])
                && (newWorm[0][1] == newWorm[1][1]))
            ||
            ((newWorm[0][0] == newWorm[2][0])
                && (newWorm[0][1] == newWorm[2][1]))
            ||
            ((newWorm[0][0] == newWorm[3][0])
                && (newWorm[0][1] == newWorm[3][1]))
        );
        return newWorm;
    }
}
```
