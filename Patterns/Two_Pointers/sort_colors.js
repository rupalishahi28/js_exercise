// Inp - [0, 2, 1, 2, 2, 1, 2, 0]
// Output - [0, 0, 1, 1, 2, 2, 2, 2]
// where 0(represent red), 1(represent white), 2(represent blue)

const sortColor = (colors) => {
    let red = 0;
    let white = 0;
    let blue = colors.length - 1;

    while(white <= blue) {
        if(colors[white] === 0) {
            if(colors[red] !== 0) {
                [colors[red], colors[white]] = [colors[white], colors[red]]
            }
            white++;
            red++;
        }
        else if(colors[white] === 1) {
            white++;
        }
        else{
            if(colors[blue] !== 2) {
                [colors[white], colors[blue]] = [colors[white], colors[blue]];
            }
            blue--;
        }
    }

    return colors;
}

/** TIME COMPLEXITY
 * The time complexity of the solution is O(n) since we are traversing array only once.
 */

/** SPACE COMPLEXITY
 * The space complexity of the solution is O(1) since no extra space is used.
 */