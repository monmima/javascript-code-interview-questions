console.log("Database loaded...");

const DATABASE = [
    {
        question:
            `
                Node.js: How do you load the module for writing/reading files?
            `,
        answer:
`var fs = require("fs");`
    },
    {
        question:
            `
                Node.js: Read a file and store its content in a variable.
            `,
        answer:
`// blocking way
var data = fs.readFileSync("file.txt", "utf8");`
    },
    {
        question:
            `
                Node.js: How do you write a file?
            `,
        answer:
`fs.writeFileSync("name.txt", "File content.");`
    },
    {
        question:
            `
                JS: How do you add something to the beginning of an array?

                <hr>

                var arr = [1, 2, 3, 4];
            `,
        answer:
`// ES5
arr.unshift("start");

// ES6
// Spread operator

arr = ["start", ...arr];`
    },
    {
        question:
            `
                JS: How do you add something to the end of an array?

                <hr>

                var arr = [1, 2, 3, 4];
            `,
        answer:
`// ES5
arr.push("end");

// ES6
// Spread operator

arr = [...arr, "end"];
`
    },
    ///
    {
        question:
            `
                JS: Create a function that returns a reversed string using JS methods.
                <hr>
<pre>function reverseLetters(str) {
    ...
}

console.log(reverseLetters("hello"));</pre>;
            `,
        answer:
`function reverseLetters(str) {
    let arr = str.split("");
    arr = arr.reverse();
    return arr.join("");
}

or

function reverseLetters(str) {
    return str.split("").reverse().join("");
}

console.log(reverseLetters("hello"));`
    },
    ///
    {
        question:
            `
                JS: What is the output?

                <hr>

<pre>if (27) {
    console.log(true);
} else {
    console.log(false);
}</pre>
            `,
        answer:
`// true
All numbers other than zero are "truthy".
They evaluate to "true"`
    },
    ///
    {
        question:
            `
                JS: Create a simple Class.
            `,
        answer:
`class Test {
    constructor(string) {
        this.string = string;
    }
}`
    },
    ///
    {
        question:
            `
                JS: Add a simple method to the class.
                <hr>
<pre>class Test {
    constructor(string) {
        this.string = string;
    }
}</pre>
            `,
        answer:
`<pre>class Test {
    constructor(string) {
        this.string = string;
    }

    returnString() {
        return this.string;
    }
}</pre>`
    },
    ///
    {
        question:
            `
                JS: Create an instance of this class.
                <hr>
<pre>
class Test {
    constructor(string) {
        this.string = string;
    }

    printString() {
        console.log(this.string);
    }
}
</pre>
            `,
        answer:
`let inst = new Test("myString");`
    },
    ///
    {
        question:
            `
                JS: Create a call to the method.
                <hr>
<pre>
class Test {
    constructor(string) {
        this.string = string;
    }

    printString() {
        console.log(this.string);
    }
}

let inst = new Test("myString");
</pre>
            `,
        answer:
`inst.printString();`
    },

    {
        question:
            `
                JS: Store a random <strong>integer from 1 to 10</strong> in the variable.
                <hr>
<pre>
let myVar;
</pre>
            `,
        answer:
`myVar = Math.floor((Math.random() * 10) + 1);`
    },

    {
        question:
            `
                JS: Keep only two decimals to the number.
                <hr>
<pre>
var num = 10.3416;
</pre>
            `,
        answer:
`var newNum = num.toFixed(2);`
    },

    {
        question:
            `
                JS: Draw a CSS circle.
                <hr>
<pre>.circle {
    ...
</pre>}
            `,
        answer:
`.circle {
    background-color: black;
    border-radius: 50%;
    height: 25px;
    width: 25px;
}`
    },
    
    {
        question:
            `
                JS: Create a simple keyframes spin animation.
            `,
        answer:
`@keyframes spin {
    0% {transform: rotate(0deg)}
    100% {transform: rotate(100deg)}
}`
    },

    {
        question:
            `
                JS: Add the animation to the "test" class.
                <hr>
<pre>@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
}

.test {
    /* your rule here */
    background-color: lightgreen;
    height: 10px;
    width: 100px;
}</pre>
            `,
        answer:
`.test {
    animation: spin 3s infinite;
    background-color: lightgreen;
    height: 10px;
    width: 100px;
}`
    },

    {
        question:
            `
                JS: What is the output?
                <hr>
<pre>if (true) {
    var varVar = 1;
    let letVar = 2;
}

console.log(varVar);
console.log(letVar);</pre>
            `,
        answer:
`1
Uncaught ReferenceError: letVar is not defined`
    },
    ///
    {
        question:
            `
                JS: How can you listen to every keypress?
            `,
        answer:
`document.addEventListener("keydown", function(e) {
    console.log(e.key);
});`
    },
    ///
    {
        question:
            `
                JS: Declare two variables (x and y) on one line.
            `,
        answer:
`let x = 50, y = 6;

This may seem shorter, but is also less readable.`

    },
    ///
    {
        question:
            `
                JS: Shorten the operator.
                <hr>
<pre>var x = x + 5;</pre>
            `,
        answer:
`var x += 5;`
    },
    ///
    {
        question:
            `
                JS: Shorten the operator.
                <hr>
<pre>var x = x * 5;</pre>
            `,
        answer:
`var x = 5;
x *= 5;`
    },
    ///
    {
        question:
            `
                JS: What is the output?
                <hr>
<pre>function test () {
    console.log("string");
}

console.log(test);</pre>
            `,
        answer:
`function test()`
    },
    ///
    {
        question:
            `
                JS: Correct the error.
                <hr>
<pre>&lt;button onClick="alert('Alert!')"&gt;Click me.&lt;/button&gt;</pre>
            `,
        answer:
`&lt;button **onclick**="alert('Alert!')"&gt;Click me.&lt;/button&gt;`
    },
    ///
    {
        question:
            `
                JS: Shorten the function call.
                <hr>
<pre>console.log("testa");</pre>
            `,
        answer:
`const log = console.log;
log("testa");`
    },
    ///
    {
        question:
            `
                Git: What is the result of typing this?
                <hr>
<pre>git config -l</pre>
            `,
        answer:
`user.email=user@email.com
user.name=username`
    },
    ///
    {
        question:
            `
                JS: Remove the last item from the array.
                <hr>
<pre>const john = ["john", "smith"];</pre>
            `,
        answer:
`john.pop();`
    },
    ///
    {
        question:
            `
                JS: What is the output?
                <hr>
<pre>**const** arr = [1, 2, 3];
arr.pop(3);
console.log(arr);</pre>
            `,
        answer:
`Array [ 1, 2 ]`
    },
    ///
    {
        question:
            `
            JS: What is the output?
            <hr>
<pre>var re = new RegExp("words?");
var res = re.test("These are my words.");
console.log(res);</pre>
            `,
        answer:
`true`
    },
    ///
    {
        question:
            `
            JS: How do you give a shadow to a <code>div</code>?
            <hr>
<pre>div {
    ...
}</pre>
            `,
        answer:
`div {
    box-shadow: 5px 5px;
}

or

div {
    box-shadow: 5px 5px 5px;
}`
    },
    ///
    {
        question:
            `
            JS: What is the difference?
            <hr>
            <pre>1. box-shadow: 5px 5px 5px;</pre>
            <pre>2. box-shadow: 5px 5px 5px inset;</pre>
            `,
        answer:
`1. Outer shadow.
2. Inner shadow.`
    },
    ///
    {
        question:
            `
            JS: Turn this into a <strong>one-line</strong> arrow function.
            <hr>
<pre>function func(a) {
    return a + 100;
}

console.log((func(100)));</pre>
            `,
        answer:
`const func = a => a + 100;

or

const func = (a) => a + 100;`
    },
    ///
    {
        question:
            `
            JS: Simplify this code.
            <hr>
<pre>var multiply = (x, y) => { return x * y};</pre>
            `,
        answer:
`var multiply = (x, y) => x * y;`
    },
    ///
    {
        question:
            `
            JS: What is the output?
            <hr>
<pre>console.log(test());

const test = () => {
    return "test";
}</pre>
            `,
        answer:
`Uncaught ReferenceError: can't access lexical declaration 'test' before initialization`
    },
    ///
    {
        question:
            `
            JS: What is the output?
            <hr>
<pre>console.log(test());

function test() {
    return "test";
}</pre>
            `,
        answer:
`test`
    },
    ///
    {
        question:
            `
            JS: What is the output?
            <hr>
<pre>function test() {
    console.log(this);
}

let test2 = () => {
    console.log(this);
}

console.log(test());
console.log(test2);</pre>`,
        answer:
`The scope is not the same.

Window
function test2()`
    },
    ///
    {
        question:
            `
            JS: Store the following regexp in a variable.
            <hr>
<pre>/blues?/gi</pre>`,
        answer:
`var re = /blues?/gi;

or

var re = new RegExp(/blues?/, "gi");

or

var re = new RegExp("blues?", "gi")`
    },
    ///
    {
        question:
            `
            Git: What do you type to solve version conflicts?
            `,
        answer:
`ESCAPE + ":wq"`
    },
    ///
    {
        question:
            `
            HTML: What attribute do you use to set tabulation priorities?
            `,
        answer:
`tab="2"`
    },
    ///
    {
        question:
            `
            HTML: What is the shortcut for this with Emmet?
            <hr>
<pre>&lt;figure&gt;
    &lt;img src="" alt=""&gt;
    &lt;figcaption&gt;&lt;/figcaption&gt;
&lt;/figure&gt;</pre>
            `,
        answer:
`figure>img+figcaption`
    },
    ///
    {
        question:
            `
            JS: How do you add a property to this constructor?
            <hr>
<pre>class Person {
    constructor (name) {
        this.name = name
    }
}</pre>
            `,
        answer:
`Person.prototype.age = 20;`
    },
    ///
    {
        question:
            `
            JS: How do you give a default parameter of <code>1</code> to <code>b</code>?
            <hr>
<pre>function multiply(a, b) {
    return a * b;
}</pre>
            `,
        answer:
`function multiply(a, b = 1) {
    return a * b;
}`
    },
    ///
    {
        question:
            `
            JS: What is the output?
            <hr>
<pre>function multiply(a, b = 1) {
    return a * b;
}

console.log(multiply(100));
console.log(multiply(100, 2));
</pre>
            `,
        answer:
`100
200`
    },
    ///
    {
        question:
            `
            JS: What is the output?
            <hr>
<pre>console.log(typeof "test");</pre>
            `,
        answer:
`string`
    },
    ///
    {
        question:
            `
            JS: What is the output?
            <hr>
<pre>console.log(typeof [1, 2, 3]);</pre>
            `,
        answer:
`object`
    },
    ///
    {
        question:
            `
            JS: Convert a variable named <code>num</code> to a string.
            <hr>
<pre>let num = 100;</pre>
            `,
        answer:
`num = num.toString();

or

num = String(num);`
    },
    ///
    {
        question:
            `
            JS: What is the output?
            <hr>
<pre>console.log(typeof null);</pre>
            `,
        answer:
`object
This is a bug in ES6.`
    },
    ///
    {
        question:
            `
            SASS: Create a variable containing the color <code>#333</code>.
            `,
        answer:
`$color: #333;`
    },
    ///
    {
        question:
            `
            JS: How do you stop the submission of a form when the submit button is clicked?
            `,
        answer:
`event.preventDefault()`
    },
    ///
    {
        question:
            `
            HTML: Add the four missing attributes to the <code>form</code> element.
            <hr>
            <pre>&lt;form ... &gt;<pre>
            `,
        answer:
`&lt;form action="javascript:;" method="get" name="form-peinture" id="form-peinture"&gt;`
    },
    ///
    {
        question:
            `
            HTML/CSS: What are the two ways of loading fonts?
            `,
        answer:
`@font-face (local)
&lt;link&gt; tag (remote)`
    },
    ///
    {
        question:
            `
            CSS: What is best?
            <hr>
<pre>div {
    position: relative;
    left: -30px;
}

or 

div {
    margin-left: -30px;
}</pre>
            `,
        answer:
`The second option.`
    },
    ///
    {
        question:
            `
            JS: What is the output?
            <hr>
<pre>const area = undefined * 5;
console.log(area);</pre>
            `,
        answer:
`NaN`
    },
    ///
    {
        question:
            `
            JS: What is the output?
            <hr>
<pre>let area = (5)
console.log(area);</pre>
            `,
        answer:
`5`
    },
    ///
    {
        question:
            `
            JS: What is the output?
            <hr>
<pre>console.log(100 / 0);</pre>
            `,
        answer:
`Infinity`
    },
    ///
    {
        question:
            `
            JS: What is the output?
            <hr>
<pre>console.log(5 / []);</pre>
            `,
        answer:
`Infinity`
    },
    ///
    {
        question:
            `JS: How do you find the type of an array?`,
        answer:
`Array.isArray(arr);`
    },
    ///
    {
        question:
            `JS: What is the output?
            <hr>
<pre>function print() {
    console.log("Hello world");
}

console.log(typeof print);</pre>`,
        answer:
`function`
    },
    ///
    {
        question:
            `CSS: Create a CSS rule to put the div content upside down.
            <hr>
<pre>div {
    /* your css rule */
}</pre>`,
        answer:
`div {
    transform: scaleY(-1);
}`
    },
    ///
    {
        question:
            `CSS: Create a CSS rule to add a clover <strong>before the a div tag</strong>.`,
        answer:
`div:before {
    content: "&#92;2618 ";
}`
    },
    ///
    {
        question:
            `JS: Find the value of the first element greater than 10.
            <hr>
<pre>const arr = [5, 12, 8, 130, 44];

const answer = ...;</pre>
            `,
        answer:
`const answer = arr.find(i => i > 10);
console.log(answer);`
    },
    ///
    {
        question:
            `Accessibility: Tell screen readers that the content should be treated as an application.
            <hr>
<pre>&lt;div&gt;...&lt;/div&gt;</pre>
            `,
        answer:
`&lt;div role="application"&gt;...&lt;/div&gt;`
    },
    ///
    {
        question:
            `JS: Create a <strong>one-line</strong> function that swaps a first name and a last name.
            <hr>
<pre>function swapName(str) {
    ...
}

console.log(swapName("John Doe"));</pre>
            `,
        answer:
`function swapName(str) {
    let newStr = str.split(" ");
    newStr = newStr.reverse();
    newStr = newStr.join(" ");

    return newStr;
}

or

function swapName(str) {
    return str.split(" ").reverse().join(" ");
}

console.log(swapName("John Doe"));`
    },
    ///
    {
        question:
            `jQuery: Write a line that hides all <code>p</code> tags in a page.`,
        answer:
`$("p").hide();`
    },
    ///
    {
        question:
            `JS: Create a function to swap words using indices.
            <hr>
<pre>function swapName(str) {
    ...
}

console.log(swapName("John Doe"));</pre>`,
        answer:
`function swapName(str) {
    const arr = str.split(" ");

    return arr[1] + " " + arr[0];
}

console.log(swapName("John Doe"));`
    },
    ///
    {
        question:
            `CSS: Create a rule making images responsive.
            <hr>
<pre>img.responsive {
    ...
}</pre>`,
        answer:
`img.responsive {
    height: auto;
    max-width: 500px; /* max size of the image */
    width: 100%;
}`
    },
    ///
    {
        question:
            `JS: What function do you use to round a number to the nearest integer?`,
        answer:
`Math.round()`
    },
    ///
    {
        question:
            `CSS: How do you remove default styles to an <code>input</code> field?
            <hr>
<pre>input {
    ...
}</pre>`,
        answer:
`input {
    appearance: none;
}`
    },
    ///
    {
        question:
            `CSS: What is the selector for the first <code>div</code> in a page?`,
        answer:
`div:first-child {
    ...
}`
    },
    ///
    {
        question:
            `JS algorithm: Create a function that uses a loop to filter out odd numbers.
            <hr>
<pre>function removeOdds(arr) {
    ...
}

console.log(removeOdds([1, 2, 3, 4, 5]));</pre>`,
        answer:
`function removeOdds(arr) {
    const evenArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 === 0) {
            evenArr.push(arr[i]);
        }
    }

    return evenArr;
}`
    },
    ///
    {
        question:
            `JS algorithm: Create a function using the <strong>filter</strong> method to filter out odd numbers in an array.
            <hr>
<pre>function removeOdds(arr) {
    ...
}

console.log(removeOdds([1, 2, 3, 4, 5]));</pre>`,
        answer:
`function removeOdds(arr) {
    return arr.filter(function(i) {
        return i % 2 === 0;
    });
}`
    },
    ///
    {
        question:
            `JS algorithm: Create a function that multiplies a string by a number with a <strong>for loop</strong>.
            <hr>
<pre>function repeatString(str, num) {
    ...
}</pre>`,
        answer:
`function repeatString(str, num) {
    let res = "";

    if (num > 0) {
        for (let i = 0; i < num; i++) {
            res += str;
        }
    }

    return res;
}`
    },
    ///
    {
        question:
            `JS algorithm: Create a function that multiplies a string by a number with a <strong>string method</strong>.
            <hr>
<pre>function repeatString(str, num) {
    ...
}</pre>`,
        answer:
`function repeatString(str, num) {
    let res = "";

    return res = str.repeat(num);
}`
    },
    ///
    {
        question:
            `JS: What <strong>two</strong> keywords do you use to import a file in ES5 and ES6?`,
        answer:
`ES5
require

ES6
import`
    },
    ///
    {
        question:
            `JS: Declare a variable that evaluates to true or false using a <strong>ternary operator</strong> and the constant <code>age</code>.
            <hr>
            const age = 18;`,
        answer:
`const isAdult = age >= 18 ? true : false;`
    },
    ///
    {
        question:
            `HTML: What are the two mandatory attributes to use with an <code>a</code> tag?`,
        answer:
`title
href`
    },
    ///
    {
        question:
            `CSS: You probably know the "love f... hate" mnemonic device. Now give the full names of the selectors based on this.`,
        answer:
`a:link
a:visited
a:focus
a:hover
a:active`
    },
    ///
    {
        question:
            `CSS: Give a blue background to the second paragraph of an HTML page.`,
        answer:
`p:nth-child(2) {
    background-color: blue;
}`
    },
    ///
    {
        question:
            `CSS: Create two rules to hide two different <code>divs</code> in different manners.
            <hr>
<pre>.div-1 {
    ...
}
.div-2 {
    ...
}</pre>`,
        answer:
`.div-1 {
    display: none;
}
.div-2 {
    visibility: hidden;
}`
    },
    ///
    {
        question:
            `HTML: What tag do you use around a sample output from a computer program?`,
        answer:
`&lt;samp&gt;`
    },
    ///
    {
        question:
            `JS algorithm: Create a function that repeats a string <code>num</code> times with a <strong>while loop</strong>.
            <hr>
<pre>function rep(str, num) {
    ...
}

console.log(rep("string", 3));</pre>`,
        answer:
`function rep(str, num) {
    let newStr = "";
    let i = 0;

    if (num <= 0) {
        return newStr;
    }

    while (i < num) {
        newStr += str;
        i++;
    }

    return newStr;
}

console.log(rep("string", 3));`
    },
    ///
    {
        question:
            `JS algorithm: Create a function that finds the longest word in a string. Use regexps and <code>.replace()</code>.
            <hr>
<pre>function findLongest(str) {
    ...
}

console.log(findLongest("Where in the airport?"));</pre>`,
        answer:
`function findLongest(str) {
    let cleanString = str.replace(/\W/g, " ");

    let inMemory = "";

    let arr = cleanString.split(" ");

    for (let i = 0; i < arr.length; i++) {
        if (arr[i].length > inMemory.length) {
            inMemory = arr[i];
        }
    }

    return inMemory.length;
}`
    },
    ///
    {
        question:
            `HTML: How do you disable tracking when you open a page through a new tab?`,
        answer:
`&lt;a href="www.site.com" target="_blank" rel="noopener noreferrer" title=""&gt;`
    },
    ///
    {
        question:
            `JS: Erase one item starting from index 0 in the array.
            <hr>
            const arr = ["cat", "dog", "horse", "camel"];`,
        answer:
`arr.splice(0, 1);`
    },
    ///
    {
        question:
            `JS Algorithm: Find the longest word in a string using a "for of" loop.`,
        answer:
`function longestWordLength(str) {
    let inMemory = "";
    let cleanString = str.replace(/\W/g, " ");
    const arr = cleanString.split(" ");

    for (let i of arr) {
        if (inMemory.length < i.length) {
            inMemory = i;
        }
    }

    return inMemory.length;
}`
    },
    ///
    {
        question:
            `JS: Besides <code>typeof</code>, what else can you use to find out if a value is of type <code>number</code>?
            <hr>
            <pre>const x = 5;<pre>`,
        answer:
`Number.isInteger(x);`
    },
    ///
    {
        question:
            `JS Algorithm: Create a function that removes all strings from an array with a <strong>for loop</strong>.`,
        answer:
`function removeStrings(arr) {
    const newArr = [];

    for (let i = 0; i < arr.length; i++) {
        if (typeof arr[i] === "number") {
            newArr.push(arr[i]);
        }
    }

    return newArr;
};`
    },
    ///
    {
        question:
            `JS: Create and use a simple <strong>for each</strong> loop on this array.
            <hr>
            <pre>const arr = ['a', 'b', 'c'];</pre>`,
        answer:
`arr.forEach(i => console.log(i));

or 

arr.forEach(element =>  {
    console.log(element);
});

The for each loop is used specifically on arrays.`
    },
    ///
    {
        question:
            `CSS: What is the selector for an <code>li</code> tag which has a class?`,
        answer:
`...
    color: red;
}`
    },
    ///
    {
        question:
            `CSS: What is the selector for an <strong>password input</strong> tag?`,
        answer:
`input[type="password"] {
    background-color: red;
}

or 

input[type=password] {
    background-color: red;
}`
    },
    ///
    {
        question:
            `HTML: What do you call <code>href</code> or <code>title</code> in a <code>a</code> tag?`,
        answer:
`An attribute.`
    },
    ///
    {
        question:
            `Wordpress: What is the difference between a Wordpress page and article?`,
        answer:
`The article is dynamic.
The page is static.`
    },
    ///
    {
        question:
            `JS: Create a simple event listener that fires when a page loads.
            <hr>
<pre>...
    console.log("Page ready!");
...</pre>`,
        answer:
`window.addEventListener("load", function() {
    console.log("Page ready!");
});`
    },
    ///
    {
        question:
            `CSS: Create a rule for having a CSS image taking its full size within a div.
            <hr>
<pre>div {
    ...
}</pre>`,
        answer:
`<pre>div {
    background-size: 100% 100%;
}</pre>`
    },
    ///
    {
        question:
            `Terminal: How do you erase a folder with the name "test"?`,
        answer:
            `rm -r test/`
    },
    ///
    {
        question:
            `Terminal: How do you create a file with the name "test.txt"?`,
        answer:
            `touch test.txt`
    },
    ///
    {
        question:
            `Terminal: How do you erase a file with the name "test.txt"?`,
        answer:
            `remove test.txt`
    },
    ///
    {
        question:
            `Terminal: How do move a folder with the name "test" to the folder "test2"?`,
        answer:
            `mv test/ test2/`
    },
    ///
    {
        question:
            `JS Algorithm: Create a function that removes all strings from an array with the <strong>filter method</strong>.
            <hr>
<pre>function removeStrings(arr) {
    ...
}

console.log(removeStrings(["word", 34, "another", 78, "one"]));</pre>`,
        answer:
`<pre>function removeStrings(arr) {
    return arr.filter(function (i) {
        return typeof i === "number";
    })
}

or

function removeStrings(arr) {
    return arr.filter(function (i) {
        return Number.isInteger(i);
    })
}

console.log(removeStrings(["word", 34, "another", 78, "one"]));</pre>`
    },
    ///
    {
        question:
            `JS Algorithm: Create a function that restores the alphabetical order in a string..
            <hr>
<pre>function restoreAlpha(str) {
    ...
}

console.log(restoreAlpha("testa"));</pre>`,
        answer:
`<pre>function restoreAlpha(str) {
    // 1. turn string into array
    let arr = str.split("");

    // 2. sort array
    arr.sort();

    // 3. join array and spit out result
    return arr.join("");
}

or

function restoreAlpha(str) {
    return str.split("").sort().join("");
}

console.log(restoreAlpha("testa"));</pre>`
    },
    ///
    {
        question:
            `JS algorithm: Create a function that sorts letters in a string using the <strong>spread operator</strong>.
            <hr>
<pre>function sortLetters(str) {
    ...
}

console.log(sortLetters("hello"));</pre>`,
        answer:
`function sortLetters(str) {
    let arr = [...str];
    arr = arr.sort();
    return arr.join("");
}

or

function sortLetters(str) {
    return [...str].sort().join("");
}</pre>`
    },
    ///
    {
        question:
            `JS: How do you open a new window with JS (and not by just clicking a link).`,
        answer:
`window.open();`
    },
    ///
    {
        question:
            `JS algorithm: Create a one-line function that reverses a string with the spread operator.
            <hr>
<pre>function revString(str) {
    ...
}

console.log(revString("hello"));<pre>`,
        answer:
`function revString(str) {
    return [...str].reverse().join("");
}`
    },
    ///
    {
        question:
            `// JS algorithm: Create a function that reverses a string with the <strong>for loop</strong>, starting at the <strong>end of the array</strong>.
            <hr>
<pre>function revString(str) {
    ...
}

console.log(revString("hello"));<pre>`,
        answer:
`function revString(str) {
    let revStr = "";

    for (let i = str.length - 1; i >= 0; i--) {
        revStr += str[i];
    }

    return revStr;
}`
    },
    ///
    {
        question:
            `JS algorithm: Create a function that reverses a string with the <strong>for of</strong> loop, adding new letters to the <strong>beginning</strong> of the string.
            <hr>
<pre>function revString(str) {
    ...
}

console.log(revString("hello"));<pre>`,
        answer:
`function revString(str) {
    let newStr = "";
    for (let i of str) {
        newStr = i + newStr;
    }
    return newStr;
}`
    },
    ///
    {
        question:
            `JS algorithm: What command to you type in the CLI to create a new React project?`,
        answer:
`npx create-react-app folder-name`
    },
    ///
    {
        question:
            `HTML: What do you change to the following to select the select input field by default?
            <hr>
<pre>&lt;input type="text"&gt;
&lt;input type="text"&gt;</pre>`,
        answer:
`&lt;input type="text"&gt;
&lt;input type="text" autofocus&gt;`
    },
    ///
    {
        question:
            `JS: How do you find out more about keys that were pressed?`,
        answer:
`document.addEventListener("keypress", function(event) {
    console.log(event);
});`
    },
    ///
    {
        question:
            `JS: What is an impure function?`,
        answer:
`A function where external variables are not passed in as arguments.
This may cause side effects.`
    },
    ///
    {
        question:
            `HTML: How do you target an ID on another HTML page?`,
        answer:
`&lt;a href="test2.html#chap6" title="Link to another page"&gt;test&lt;/a&gt;`
    },
    ///
    {
        question:
            `JS Algorithm: Create a function that tells you if a word is a palindrome. Make sure to compare lower-case words.`,
        answer:
`function isPalindrome(str) {
    let before = str.toLowerCase();
    let after = str.split("").reverse().join("");
    after = after.toLowerCase();
    console.log(after);


    if (before === after) {
        return true;
    }

    return false;
}

console.log(isPalindrome("Laval"));
console.log(isPalindrome("word"));`
    },
    ///
    {
        question:
            `JS Algorithm: Give an example of an invalid variable name.`,
        answer:
`let 1stName = "John";

A variable name cannot start with a number.`
    },
    ///
    {
        question:
            `JS Algorithm: Create a function that returns the median value (absolute value sum minimization). Use the ternary operator.
            <hr>
<pre>
function absoluteValueSumMinimization(num) {
    ...
}

console.log(absoluteValueSumMinimization([2, 4, 7]));
console.log(absoluteValueSumMinimization([2, 4, 7, 8]));
console.log(absoluteValueSumMinimization([1, 2, 4, 7, 8]));</pre>`,
        answer:
`function absoluteValueSumMinimization(num) {
    const isEven = num.length % 2 === 0;

    return isEven ? num[num.length / 2 - 1] : num[Math.floor(num.length / 2)];
}`
    },
    ///
    {
        question:
            `JS Algorithm: Create a function that adds all items in an array and returns the total. Use a forEach loop.
            <hr>
<pre>function addAllArray(arr) {
    ...
}

console.log(addAllArray([2, 4, 7]));
console.log(addAllArray([2, 4, 7, 8]));
console.log(addAllArray([1, 2, 4, 7, 8]));</pre>`,
        answer:
`function addAllArray(arr) {
    let total = 0;

    arr.forEach(element => {
        total += element;
    });

    return total;
}`
    },
    ///
    {
        question:
            `JS: Create a line of code that turns text for an <code>h3</code> tag with the class <code>.zone-message</code> to red.
            <hr>
<pre></pre>`,
        answer:
`document.querySelector("h3, .zone-message").style.color = "red";`
    },
    ///
    {
        question:
            `JS: Given a rectangular matrix of characters, add a border of asterisks to it.
            <hr>
<pre>function addBorder(arr) {
    ...
}

console.log(addBorder(["aaa", "bbb", "ccc"]));</pre>`,
        answer:
`function addBorder(arr) {
    // 1. copying the array
    let newArr = [];

    // 2. creating the top and bottom walls
    const lengthTopAndBottom = arr[0].length + 2;
    const wall = "*".repeat(lengthTopAndBottom);

    // 3. looping through the old arr and adding asterisks on each side
    for (let i = 0; i < arr.length; i++) {
        newArr[i] = "*" + arr[i] + "*";
    }

    // 4. adding the wall to the new array
    newArr = [wall, ...newArr, wall];

    return newArr;
}

console.log(addBorder(["aaa", "bbb", "ccc"]));`
    },
    ///
    {
        question:
            `JS Algorithm: Create a function that turns a two-digit number to the sum of the two digits. For instance, "29" should return "11".
            <hr>
<pre>function addTwoDigits(num) {
    ...
}

console.log(addTwoDigits(29));</pre>`,
        answer:
`function addTwoDigits(num) {
    const arr = num.toString().split("");

    return parseInt(arr[0]) + parseInt(arr[1]);
}

console.log(addTwoDigits(29));`
    },
    ///
    {
        question:
            `JS: Write a barebone switch statement.
            <hr>
<pre>let myVar = "banana";</pre>`,
        answer:
`switch(myVar) {
    case "banana":
        console.log("This is a banana.");
        break;
    default:
        console.log("This is not a banana.");
}`
    },
    ///
    {
        question:
            `JS Algorithm: Create a function that returns the pair of adjacent elements with the highest product. The result should be 21.
            <hr>
<pre>function adjacentElementsProduct(inputArr) {
    ...
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));</pre>`,
        answer:
`function adjacentElementsProduct(inputArr) {
    let largestProduct = inputArr[0] * inputArr[1];

    for (let i = 1; i < inputArr.length - 1; i++) {
        const product = inputArr[i] * inputArr[i + 1];
        
        largestProduct = largestProduct < product ? product : largestProduct;
    }

    return largestProduct;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));`
    },
    ///
    {
        question:
            `JS Algorithm: Find the longest strings in an array of strings and return all strings matching this length. Use <strong>forEach</strong> loops.
            <hr>
<pre>function findAllLongestStrings(arr) {
    ...
}

console.log(findAllLongestStrings(["aaa", "bba", "aa", "cc", "dde"]));</pre>`,
        answer:
`function findAllLongestStrings(arr) {
    let topLength = 0;
    let newArr = [];

    arr.forEach(i => {
        topLength = topLength > i.length ? topLength : i.length;
    });

    arr.forEach(i => {
        if (topLength === i.length) {
            newArr.push(i);
        }
    });

    return newArr;
}

console.log(findAllLongestStrings(["aaa", "bba", "aa", "cc", "dde"]));`
    },
    ///
    {
        question:
            `JS Algorithm: Create a function that tells you if a sequence of numbers is increasing from left to right. One mistake can be tolerated in the sequence.
            <hr>
<pre>function evalAlmostIncreasing(arr) {
    ...
}

console.log(evalAlmostIncreasing([1, 3, 2]));
console.log(evalAlmostIncreasing([1, 3, 1, 1]));</pre>`,
        answer:
`function evalAlmostIncreasing(arr) {
    let countMistakes = 0;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] <= arr[i - 1]) {
            countMistakes++;
        }
    }

    // as long as there is one mistake or less, returns true
    return countMistakes <= 1;
}

console.log(evalAlmostIncreasing([1, 3, 2]));
console.log(evalAlmostIncreasing([1, 3, 1, 1]));`
    },
    ///
    {
        question:
            `JS Algorithm: Create a function that shifts to one to the right the the letters in a word. For instance, the output for "test" should be "uftu".
            <hr>
<pre>function alphabeticalShift(str) {
    ...
}

console.log(evalAlmostIncreasing([1, 3, 2]));
console.log(evalAlmostIncreasing([1, 3, 1, 1]));</pre>`,
        answer:
`function alphabeticalShift(str) {
    const alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    let arr = str.split("");
    let newString = "";
    let iCurrLetter = 0;

    for (let i = 0; i < arr.length; i++) {
        iCurrLetter = alphabet.indexOf(arr[i]);

        if (alphabet[iCurrLetter + 1] == undefined) {
            newString += "a";
        } else {
            newString += alphabet[iCurrLetter + 1];
        }

    }

    return newString;
}

console.log(alphabeticalShift("test"));
console.log(alphabeticalShift("crazy"));`
    },
    ///
    {
        question:
            `JS Algorithm: Create a function that tells you if a sequence of letters is in alphabetical order. The function returns a boolean. The input should not have repeated characters.
            <hr>
<pre>function isAlphabetical(str) {
    ...
}

console.log(isAlphabetical("abef"));
console.log(isAlphabetical("zabc"));
console.log(isAlphabetical("abczz"));</pre>`,
        answer:
`function isAlphabetical(str) {
    let lastLetter = "a";
    let arr = str.split("");
    let uniqueValuesSet = new Set(arr);

    // compares the length of array and set
    if (arr.length !== uniqueValuesSet.size) {
        return false;
    }

    // makes sure you the string only goes forward with the alphabetical order
    for (let i = 0; i < arr.length; i++) {
        if (lastLetter > arr[i]) {
            return false;
        }

        lastLetter = arr[i];
    }
    
    return true;
}

console.log(isAlphabetical("abef"));
console.log(isAlphabetical("zabc"));
console.log(isAlphabetical("abczz"));`
    },
    ///


]
