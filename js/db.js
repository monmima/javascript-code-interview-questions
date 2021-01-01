console.log("Database loaded...");

const database = [
    {
        question:
            `
                JS: What do you use to know if an array has a character or number in it?
            `,
        answer:
`arr.includes(1);

Example:

arr = [1, 2, 3, 4]
console.log(arr.includes(1));`
    },
    ///
    {
        question:
            `
                JS: How do you find the last position of a character in a string?
            `,
        answer:
`string.lastIndexOf("@");`
    },
    ///
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
                JS: How do you add something to the start of an array?

                <hr>

<pre>var arr = [1, 2, 3, 4];

// your code here

console.log(arr);</pre>
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

///

    {
        question:
            `
                JS: Keep only two decimals to the number.
                <hr>
<pre>var num = 10.3416;

// your code here

console.log(num);</pre>
            `,
        answer:
`var num = 10.3416;

num.toFixed(2);

console.log(num);`
    },

    {
        question:
            `
                JS: Draw a CSS circle.
                <hr>
<pre>.circle {
    <!--  code here -->
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
<pre>var x = 0;
x = x + 5;</pre>
            `,
        answer:
`var x = 0;
x += 5;`
    },
    ///
    {
        question:
            `
                JS: Shorten the operator.
                <hr>
<pre>var x = 5;
x = x * 5;</pre>
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
`"onclick" is not camel-cased.

&lt;button onclick="alert('Alert!')"&gt;Click me.&lt;/button&gt;`
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
<pre>const john = ["john", "smith"];

// your code here

console.log(john);</pre>
            `,
        answer:
`const john = ["john", "smith"];

john.pop();

console.log(john);`
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
    <!--  code here -->
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
<pre>var multiply = (x, y) => { return x * y };</pre>
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
            `Interview: <strong>Besides the syntax</strong>, what is the difference between an arrow function and a normal function?`,
        answer:
`The scope (this keyword) is not the same.`
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
`tabindex="1"`
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
<pre>let num = 100;

// your code here

console.log(typeof num);</pre>
            `,
        answer:
`let num = 100;

num = num.toString();

or

num = String(num);

console.log(typeof num);`
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
            `JS: What is the output?
            <hr>
<pre>console.log(100 / 0);</pre>
            `,
        answer:
`Infinity`
    },
    ///
    {
        question:
            `JS: What is the output?
            <hr>
<pre>console.log(5 / []);</pre>`,
        answer:
`Infinity`
    },
    ///
    {
        question:
            `JS: How do you find the type of an array?
            <hr>
<pre>// code here
console.log(x);</pre>`,
        answer:
`let x = Array.isArray([1, 2]]);
console.log(x);`
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
    content: "&#92;2618&#92;0a";
}`
    },
    ///
    {
        question:
            `JS: Find the value of the first element greater than 10.
            <hr>
<pre>const arr = [5, 12, 8, 130, 44];

const answer = ...;

console.log(answer);</pre>
            `,
        answer:
`const arr = [5, 12, 8, 130, 44];

const answer = arr.find(i => i > 10);

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
    // code here
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
            `CSS: Create a rule making images responsive.
            <hr>
<pre>img.responsive {
    <!--  code here -->
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
    <!--  code here -->
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
    <!--  code here -->
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
            `HTML: What tag do you use around a sample output from a computer program?`,
        answer:
`&lt;samp&gt;`
    },
    ///
    {
        question:
            `HTML: How do you disable tracking when you open a page through a new tab?
            <hr>
<pre>&lt;a href="www.site.com" target="_blank" title=""&gt;</pre>`,
        answer:
`&lt;a href="www.site.com" target="_blank" rel="noopener noreferrer" title=""&gt;`
    },
    ///
    {
        question:
            `HTML: How do open a link in a new tab?
            <hr>
<pre>&lt;a href="www.site.com" title=""&gt;</pre>`,
        answer:
`You give the link the attribute <code>target="_blank"</code>.`
    },
    ///
    {
        question:
            `JS: Erase one item starting from index 0 in the array.
            <hr>
<pre>const arr = ["cat", "dog", "horse", "camel"];

// your code here

console.log(arr);</pre>`,
        answer:
`const arr = ["cat", "dog", "horse", "camel"];

arr.splice(0, 1);

or

arr.shift();

console.log(arr);`
    },

    {
        question:
            `JS: Besides <code>typeof</code>, what else can you use to find out if a value is of type <code>number</code>?
            <hr>
<pre>const x = 5;

// your code here

console.log(newVar);<pre>`,
        answer:
`const x = 5;

const newVar = Number.isInteger(x);

console.log(newVar);`
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
<pre>// code here
    console.log("Page ready!");
// code here</pre>`,
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
    <!--  code here -->
}</pre>`,
        answer:
`<pre>div {
    background-size: 100% 100%;
}</pre>`
    },
    ///
    {
        question:
            `Terminal: How do you list the files from a folder?`,
        answer:
`dir

or

ls`
    },
    ///
    {
        question:
            `HTML: What are the two mandatory attributes for any input field?`,
        answer:
`name
id`
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
            `JS: How do you open a new tab with JS (and not by just clicking a link).`,
        answer:
`window.open("https://www.wikipedia.org");`
    },
    ///
    {
        question:
            `JS: What command to you type in the CLI to create a new React project?`,
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
            `HTML: How do you create a link tag that targets an ID on another HTML page?`,
        answer:
`&lt;a href="test2.html#chap6" title="Link to another page"&gt;test&lt;/a&gt;`
    },
    ///
    {
        question:
            `JS: Give an example of an invalid variable name.`,
        answer:
`let 1stName = "John";

A variable name cannot start with a number.`
    },
    ///
    {
        question:
            `JS: Create a line of code that turns text from an <code>h3</code> tag to red.`,
        answer:
`document.querySelector("h3").style.color = "red";`
    },
    ///
    {
        question:
            `JS: Given a rectangular matrix of characters, add a border of asterisks to it.
            <hr>
<pre>function addBorder(arr) {
    // code here
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
    {
        question:
            `HTML: List the names of 7 semantic elements.`,
        answer:
`<header>
<nav>
<main>
<article>
<section>
<aside>
<footer>`
    },
    ///
    {
        question:
            `CSS What is the purpose of <strong>right 20px</strong> and <strong>30%</strong> below?
            <hr>
<pre>background: url(images/moon.png), no repeat right 20px / 30%;</pre>`,
        answer:
`right 20px = position
30% = size`
    },
    ///
    {
        question:
            `JS: What is passing by value and passing by reference?`,
        answer:
`// Passing by value is what happens when you create a primitive from another primitive.
a = 5;
b = a;
b += 5;
console.log(a, b);

// Passing by reference is what happens when you create a non-primitive from another non-primtive.
let arr1 = [1, 2, 3];
let arr2 = arr1;
arr2.push("x");
console.log(arr1, arr2);

// To avoid problems with this, you must create a new non-primtive.
let arr3 = [1, 2];
let arr4 = [...arr3, "x"];
console.log(arr3, arr4);

// Or with objects
let obj1 = { channel: "Youtube"};
let obj2 = {...obj1};
obj2.name = "John";
console.log(obj1, obj2);`
    },
    ///
    {
        question:
            `JS: What are the data types in JS?`,
        answer:
`Primitives
- booleans
- numbers (whole numbers, floating-point numbers)
- null (empty value which is user-assigned)
- undefined (no values)
- strings

Non-primtives
- objects
- arrays (technically are objects)`
    },
    ///
    {
        question:
            `Interview: What is the difference between == and ===?`,
        answer:
`== compares the value
=== compares both the value and the type

Example:

5 == "5" would return true
5 === "5" would return false

Bonus:

It's better to only use === because you want to write your code in the strictest fashion possible to avoid bugs.`
    },
    ///
    {
        question:
            `Interview: How does it work in the background for 5 == "5" to evaluate to true?`,
        answer:
`There is a type conversion performed in the background, and then a comparison.`
    },
    ///
    {
        question:
            `Interview: What is closure?`,
        answer:
`It's a function that returns another function.
It's used to stored private variables.

Example:

function outer() {
    var name = 'Mozilla'; // name is a local variable created by outer()
    function inner() { // displayName() is the inner function, a closure
        console.log(name); // use variable declared in the parent function
    }
    inner();
}

outer();

Bonus:
Makes code relevant and easy to debug.
Limits scope of variables.`
    },
    ///
    {
        question:
            `Interview: What is lexical and block scope?`,
        answer:
`This is the same as asking the difference between const, let and var.

Var has a lexical scope.

Const and let have a block scope.

Var is hoisted whereas let and const aren't.
`
    },
    ///
    {
        question:
            `Interview: What is hoisting?`,
        answer:
`Variables and functions are brought back to the top of the scope if this is not where they were declared. This might cause undesirable effects.

Example: 

console.log(myVar); // returns "undefined"
var myVar = "string";

console.log(test); // returns "test is not defined"
let test = "string";`
    },
    ///
    {
        question:
            `Interview: What is "use strict"?`,
        answer:
`'Defines that JavaScript code should be executed in "strict mode".' [w3schools.com]

Prevents the accidental creation of global variables, etc. Nowadays this isn't as important because people will use Webpack with a linter, etc.

Example:

"use strict"

function doStuff() {
    x = 10; // "use strict" catches this error (no var declaration) and creates a message in the console;

    return x;
}

doStuff();`
    },
    ///
    {
        question:
            `Interview: What is the difference between splice and delete on an array?`,
        answer:
`1. Splice removes the item and shifts the rest of the array.
2. Delete removes the item but does not shift the rest of the array. Consequently, the arr keeps the same length but has a value which left "undefined".

Example:

let arr = ["cat", "dog", "horse", "tortoise"];
delete arr[2];
arr.splice(0, 1);

console.log(arr); // ["dog", , "tortoise"]
console.log(arr[1]); // undefined`
    },
    ///
    {
        question:
            `Interview: How can you remove an item from an <strong>object</strong>? Write the code for this.`,
        answer:
`const obj = {
    prop1: "chair",
    prop2: "table"
}

console.log(obj); // { prop1: "chair", prop2: "table" }
delete obj.prop1;
console.log(obj); // { prop2: "table" }`
    },
    ///
    {
        question:
            `Interview: What is the this keyword?`,
        answer:
`It refers to the context you are working in.
Often used with OOP.

Example:

class Person {
    constructor(firstN, lastN) {
        this.firstN = firstN,
        this.lastN = lastN
    }

    fullName() {
        return this.firstN + " " + this.lastN
    }
}

let john = new Person("John", "Doe");
console.log(john.fullName()); // John Doe

Bonus:

Arrow functions don't work well with the this keyword.`
    },
    ///
    {
        question:
            `JS: What do you call "string" and "number"?`,
        answer:
`These are two different types.`
    },
    ///
    {
        question:
            `HTML: What does ARIA stand for?`,
        answer:
`Accessible rich Internet application. This is a way to make web content and web applications more accessible to people with disabilities.`
    },
    ///
    {
        question:
            `CSS: What is the CSS shortcut for this?
            <hr>
            <pre>color: #666666;</pre>`,
        answer:
`c#666`
    },
    ///
    {
        question:
            `HTML: How do you change the image depending on the screen width?`,
        answer:
`With srcset.`
    },
    ///
    {
        question:
            `JS: What is the output?
            <hr>
<pre>let A = 5;
let a = 6;

a === A;</pre>`,
        answer:
`false`
    },
    ///
    {
        question:
            `CSS: What is the CSS shortcut for this?
            <hr>
            font-weight: bold;`,
        answer:
`fwb`
    },
    ///
    {
        question:
            `CSS: What is the CSS shortcut for this?
            <hr>
            text-decoration: none;`,
        answer:
`tdn`
    },
    ///
    {
        question:
            `JS: What do you use to know if a number is positive, negative or zero?`,
        answer:
`Math.sign(20);
Math.sign(-20);
Math.sign(0);`
    },
    ///
    {
        question:
            `JS: What are some of the ways you can create an array?`,
        answer:
`const arr1 = [1]

or

// map
const arr2 = example1.map((val) => {
    return val + 1;
});

or

// not recommended!
const badArr = new Array();`
    },
    ///
    {
        question:
            `Interview: What is the difference between undefined and null?`,
        answer:
`Undefined is a variable that has not been assigned a value.

Null is an assigned value, which is "nothing".

Example:

var test;
console.log(test); // returns undefined

Bonus:
Undeclared = doesn't even exist
Undefined = has not been given a value yet`
    },
    ///
    {
        question:
            `JS: What is the output?
            <hr>
<pre>console.log(0.2 + 0.1)</pre>`,
        answer:
`0.30000000000000004

One thing that can be done to solve this issues is:
console.log((0.2 + 0.1).toFixed(2))

Anothing possibility is to validate with a server-side language.`
    },
    ///
    {
        question:
            `JS: What is instanceof and when should you use it?`,
        answer:
`Instanceof should not be used to find the type of a value.
Typeof is there for that.

// Bad practice
console.log("string" instanceof String); // false

// Instance of tells you is something is a class.
class Test {
    constructor(name) {
        this.name = name;
    }
}

let test = new Test("mytest");
console.log(test instanceof Test);

// careful! A class is also an Object.
console.log(test instanceof Object);`
    },
    ///
    {
        question:
            `JS: What line of code do you use to create a redirection to another HTML page?`,
        answer:
`window.location.replace("https://www.protonmail.com");

or

location.replace("https://www.protonmail.com");`
    },
    ///
    {
        question:
            `Interview: What are falsy values?`,
        answer:
`Everything is truthy, except for 6 values.
These values are falsy:

undefined
null
NaN
0
""
false`
    },
    ///
    {
        question:
            `Interview: Tell me about global variables.`,
        answer:
`In Javascript, the window object is a global variable.

In day-to-day life, it's better to avoid global variables.

Their scope is global, hence the name.

It's a bad coding convention to use globals.

Usually, it's not necessary to create globals.`
    },
    ///
    {
        question:
            `Interview: What is the output?
            <hr>
<pre>console.log(2 + 3 + "7");</pre>`,
        answer:
`57
This is called type coercion.`
    },
    ///
    {
        question:
            `Interview: What is type coercion?`,
        answer:
`Example:

console.log(2 + 3 + "7");`
    },
    ///
    {
        question:
            `Interview: What is typeof?`,
        answer:
`Tells you the type of a value.

Example:

console.log(typeof 5); // returns number
console.log(typeof "5"); // returns string

Bonus:

console.log(typeof [1, 2, 3]); // returns object
console.log(Array.isArray([1, 2, 3])); // returns true

console.log(typeof NaN); // number
console.log(isNaN(NaN)); // true`
    },
    ///
    {
        question:
            `Interview: What is the output?
            <hr>
<pre>console.log(typeof NaN);</pre>`,
        answer:
`number

To solve this, use:

console.log(isNaN(NaN)); // true`
    },
    ///
    {
        question:
            `Interview: What is the output?
            <hr>
<pre>console.log(typeof undefined);</pre>`,
        answer:
`undefined`
    },
    ///
    {
        question:
            `Interview: What can you tell about object notation?`,
        answer:
`user.firstName // dot notation
user["firstName"] // bracket notation

Dot notation should be used as much as possible instead of bracket notation.
`
    },
    ///
    {
        question:
            `Interview: What is an anonymous function?`,
        answer:
`It's a function that doesn't have it's own name.
Instead, the function is store inside a variable.

// Normal function
function add(num1, num2) {
    return num1 + num2;
}

// Anonymous function
const add = function(num1, num2) {
    return num1 + num2;
}`
    },
    ///
    {
        question:
            `Interview: What is a higher order function?`,
        answer:
`- The same as a callback.
- You pass it in.
- They are called at a later date (synchronously or asynchronously).

Example:

The map() method takes a callback, for instance.

const arr = [1, 2, 3, 4, 5];

const arr2 = arr.map((val) => val + 5);

console.log(arr2); // [6, 7, 8, 9, 10]`
    },
    ///
    {
        question:
            `Interview: What is a callback?`,
        answer:
`- The same as a higher order function.
- You pass it in.
- They are called at a later date (synchronously or asynchronously).

Example:

The map() method takes a callback, for instance.

const arr = [1, 2, 3, 4, 5];

const arr2 = arr.map((val) => val + 5);

console.log(arr2); // [6, 7, 8, 9, 10]`
    },
    ///
    {
        question:
            `JS: What characters do you use to reuse a matched regexp pattern?`,
        answer:
`$1 // JS
&bsol;1 // text editor
&bsol;&bsol;1 // Python`
    },
    ///
    {
        question:
            `Sass: What is the difference between .sass and .scss files?`,
        answer:
`.scss // new Sass
.sass // old Sass`
    },
    ///
    {
        question:
            `Interview: What are some naming conventions?`,
        answer:
`camelCase
isAdult // boolean
hasChild // boolean
getTotal // function
in CSS, you try to add as few selectors as possible
in CSS, you use dash case
CONSTANT
limit the amount of variables`
    },
    ///
    {
        question:
            `Terminal: How do you empty the terminal window?`,
        answer:
`clear`
    },
    ///
    {
        question:
            `Interview: How do you empty an array?
            <hr>
<pre>let x = 15;</pre>`,
        answer:
`let x = 15;
x = [];

or 

let arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]

arr.splice(0);
console.log(arr); // []

or

while (arr.length > 0) {
    arr.pop();
}

or 

let arr = [1, 2, 3];
console.log(arr); // [1, 2, 3]

arr.length = 0;
console.log(arr); // []`
    },
    ///
    {
        question:
            `Interview: What is a MUL function?`,
        answer:
`MUL stands for multiplication.
It's a function that returns one or many nested anonymous functions.
It's not necessarily a good idea. It's dirty.

Example:

function example(x) {
    return (y) => {
        return (z) => {
            return x * y * z;
        }
    }
}

console.log(example(5)(2)(4)); // 40`
    },
    ///
    {
        question:
            `JS: How do you add a prop to the class?
            <hr>
<pre>class Test {
    constructor(string) {
        this.string = string;
    }

    printString() {
        console.log(this.string);
    }
}

let inst = new Test("myString");</pre>`,
        answer:
`class Test {
    constructor(string) {
        this.string = string;
    }

    printString() {
        console.log(this.string);
    }
}

let inst = new Test("myString");
inst.age = 25;
console.log(inst); // Test { string: "myString", age: 25 }`
    },
    ///
    {
        question:
            `Interview: What is an IIFE?`,
        answer:
`- Stands for "immediately invoked function expression"
- Runs as soon as it is defined
- Mainly used to avoid global variables
- Not as useful as it used to be since the introduction of "let" and "const" in ES6
- Used in frameworks/libraries such as jQuery
- Arrow functions

Example:

(function() {
    console.log("my logic");
})();`
    },
    ///
    {
        question:
            `JS: Write a barebone IIFE.`,
        answer:
`(function() {
    console.log("my logic");
})();`
    },
    ///
    {
        question:
            `JS: What is the output?
            <hr>
<pre>console.log(0 / 0);</pre>`,
        answer:
`NaN`
    },
    ///
    {
        question:
            `JS: What is the output?
            <hr>
<pre>console.log(typeof NaN);</pre>`,
        answer:
`number

This would be the solution to really find out:

console.log(isNaN(NaN)) // true`
    },
    ///
    {
        question:
            `JS: What is the output?
            <hr>
<pre>console.log(parseInt("hellos"));</pre>`,
        answer:
`NaN`
    },
    ///
    {
        question:
            `JS: What is the output?
            <hr>
<pre>console.log(0 / 0);</pre>`,
        answer:
`NaN`
    },
    ///
    {
        question:
            `Interview: What is the difference between undeclared and undefined?`,
        answer:
`- Undeclared: Doesn't exist at all.

- Undefined: Exists, but has no value.
-- Could be a non-existing property of an object too.`
    },
    ///
    {
        question:
            `Interview: Name the DOM selectors.`,
        answer:
`- document.getElementById("")
- document.getElementsByClassName("")
- document.getElementsByTagName("")

Slower:
- document.querySelector("")
- document.querySelectorAll("")

To find out more you could use console.log on any of the above.`
    },
    ///
    {
        question:
            `Interview: How do you copy an object?`,
        answer:
`With the spread operator.

Example:

const newObj = {...oldObj};`
    },
    ///
    {
        question:
            `JS: What is the difference between splice() and slice()?`,
        answer:
`- splice() changes the array permanently (mnemonic device: p is for permanent)
- slice() does not

- you can add items to an array with splice()`
    },
    ///
    {
        question:
            `JS: What is the difference between map(), filter(), and reduce()?`,
        answer:
`- map() creates a copy of an array
- filter() filters out items from an array
- reduce() allows you to combine map() and filter() AND can be used to add up all values from an array`
    },
    ///
    {
        question:
            `Algorithm: Create a function that flattens an array.
            <hr>
<pre>function flattenArray(arr) {
    // code here
}

console.log(flattenArray([1, 2, [3, 4]])); // [1, 2, 3, 4]</pre>`,
        answer:
`* Keep in mind that to flatten everything deeply, you could use arr.flat(Infinity)."

function flattenArray(arr) {
    const flat = arr.flat(1);
    return flat;
}

console.log(flattenArray([1, 2, [3, 4]])); // [1, 2, 3, 4]`
    },
    ///
    {
        question:
            `Interview: Give an example of array or object destructuring.`,
        answer:
`const [month, day, year] = [5, 11, 1955];
console.log(month);

// or

let {
    firstName: fn,
    lastName: ln
} = {
    firstName: "John",
    lastName: "Doe"
};

console.log(fn); // John
console.log(ln); // Doe`
    },
    ///
    {
        question:
            `Interview: What are the rest and spread operator?`,
        answer:
`Rest parameters (packs elements)
- turns an indefinite number of arguments as an array

Spread operator (unpack elements)
- copies an array
- concatenates arrays
- adds to an array`
    },
    ///
    {
        question:
            `Interview: What are some of the new ES6 features?`,
        answer:
`- template litterals
- rest parameter/sprea operators
- let/const
- default values in functions
- arrow functions`
    },
    ///
    {
        question:
            `Interview: Explain event delegation`,
        answer:
`JS event listeners fire not only on a single DOM element, but on all its children .`
    },
    ///
    {
        question:
            `Interview: Describe event bubbling (aka event propagation)`,
        answer:
`Events on an element will bubble up and also fire on all parents.`
    },
    ///
    {
        question:
            `JS: What is the output?
            <hr>
console.log("3" + 4);
console.log("4" / "2");
console.log("4" - "3");`,
        answer:
`console.log("3" + 4); // 34
console.log("4" / "2"); // 2
console.log("4" - "3"); // 1`
    },
    ///
    {
        question:
            `Interview: How can you maintain state in an application?`,
        answer:
`You use local storage.`
    },
    ///
    {
        question:
            `Interview: How can you erase duplicates from an array?`,
        answer:
`1. set
2. iterate through the array and push to a new array is the value is not included in the first one`
    },
    ///
    {
        question:
            `Interview: What are the HTTP methods/verbs?`,
        answer:
`- POST (create)
- GET (read)
- PUT (update)
- DELETE (delete)

In summary, the HTML equivalent of CRUD is PGPD.`
    },
    ///
    {
        question:
            `JS: Add a line to print the id to the console.
            <hr>
<pre>&lt;button id="test"&gt;test&lt;/button&gt;

&lt;script&gt;

    document.querySelector("#test").addEventListener("click", function(e) {
        // code here
    });

&lt;/script&gt;</pre>`,
        answer:
`&lt;button id="test"&gt;test&lt;/button&gt;

&lt;script&gt;

    document.querySelector("#test").addEventListener("click", function(e) {
        console.log(this.id); // test
    });

&lt;/script&gt;`
    },
    ///
    {
        question:
            `HTML: What should you use instead of the <code>center</tag>?`,
        answer:
`margin: 0 auto

* This tag is deprecated.`
    },
    ///
    {
        question:
            `Interview: What are HTML status code? List them and explain what they are for.`,
        answer:
`- 100: Information code.
- 200: Works.
- 300: Redirect.
- 400: Problem on the client side.
- 500: Problem on the server side.`
    },
    ///
    {
        question:
            `Interview: What is the difference between synchronous and asynchronous code?`,
        answer:
`- Synchronous: Top to bottom. Line by line.
- Asynchronous: Top to bottom, except for asynchronous tasks.

Example:

A call to a database.`
    },
    ///
    {
        question:
            `Interview: What are some timer methods in JS?`,
        answer:
`- setTimeOut: Single instance (happens once).
- setInterval: Multiple instance (happens many time).`
    },
    ///
    {
        question:
            `Interview: What is a promise?`,
        answer:
`- A promise is an easy of handling asynchronous data.
- A promise will always resolve (rejected case or successful case).

Example:
- Getting 

Bonus:
- Important question!`
    },
    ///
    {
        question:
            `Interview: What is a promise?`,
        answer:
`- A promise is an easy of handling asynchronous data.
- A promise will always resolve (rejected case or successful case).

Example:

- Getting 

Bonus:

- Important question!`
    },
    ///
    {
        question:
            `Interview: What is async/await for?`,
        answer:
`It makes it possible to wait to turn an asynchronous method to a synchronous one.

Example:

You make a fetch call and you want to wait for the result before doing anything else.

Bonus:

Ideally, you should wrap this is a try / catch block.`
    },
    ///
    {
        question:
            `Interview: Name some CSS properties.`,
        answer:
`- border
- margin
- font-size
- padding
- box-shadow`
    },
    ///
    {
        question:
            `Interview: Name some CSS properties.`,
        answer:
`- border
- margin
- font-size
- padding
- box-shadow`
    },
    ///
    {
        question:
            `Interview: What is the difference between <code>display: none</code> and <code>visibility: hidden</code>?`,
        answer:
`- display: none; | spacing of the element removed
- visibility: hidden; | the spacing remains there;`
    },
    ///
    {
        question:
            `Interview: What is the difference between a <code>span</code> and a <code>div</div> tag?`,
        answer:
`- span: inline element
- div: block element`
    },
    ///
    {
        question:
            `JS: How do you turn a number to a string?`,
        answer:
`num.toString()`
    },
    ///
    ///
    {
        question:
            `JS: How do you turn a number to a string?`,
        answer:
`num.toString()`
    },
    ///
    ///
    {
        question:
            `JS: How do you write the filter method?`,
        answer:
`["a", "b", "c"].filter((v, i) => {
    console.log(v, i);
});`
    },
    ///
    ///
    {
        question:
            `JS: How do you generate a random number between 1 and 10?`,
        answer:
`Math.floor(Math.random() * 10 + 1)`
    },
    ///
    ///
    {
        question:
            `JS: What is the easiest way to repeat a string?`,
        answer:
`"car".repeat(3);`
    },
    ///
    {
        question:
            `JS: How do you build a while loop?`,
        answer:
`let count = 0;

while (count <= 10) {
    console.log(count);
    count++;
}`
    },
    ///
    ///
    {
        question:
            `JS: How do you remove all punctuations in a string?`,
        answer:
`"This is an airport.".replace(/\W/g, " ");`
    },
    ///
    ///
    {
        question:
            `JS: How do you create a simple for loop?`,
        answer:
`arr = [1, 2, 3];

for (v of arr) {
    console.log(v);
}`
    },
    ///
    {
        question:
            `JS: How do you sort a string array?`,
        answer:
`["c", "a", "b"].sort()`
    },
    ///
    {
        question:
            `JS: How do you turn a number of type string to a number of type number?`,
        answer:
`parseInt("33")`
    },
    ///
    {
        question:
            `JS: How do you write a simple reduce function?`,
        answer:
`const reduced = [2, 3, 4].reduce((total, current) => {
    return total += current;
}, 0);`
    },
    ///
    {
        question:
            `JS: How do you write a simple ternary operator?`,
        answer:
`const trueOrFalse = true ? "true" : "false";`
    },
    ///
    {
        question:
            `JS: How do you eliminate duplicates in an array?`,
        answer:
`[...new Set(arr)]`
    },
    ///
    {
        question:
            `JS: How do you get the positive value of a number?`,
        answer:
`Math.abs(-1)`
    },
    ///
    {
        question:
            `JS: How do you get the last item fron an array?`,
        answer:
`arr[arr.length - 1]`
    },
    ///
    {
        question:
            `JS: How do you get the first character of a string?`,
        answer:
`myString[0]`
    },
    ///
    {
        question:
            `JS: How do you sort an array of number?`,
        answer:
`arr.sort(function(a, b) { return a - b });`
    },
    ///
    {
        question:
            `JS: How do get all characters from a string but the first one?`,
        answer:
`str.substring(1)

or 

str.slice(1)`
    },
    ///
    {
        question:
            `JS: How do you get the index of an item in an array?`,
        answer:
`letters.indexOf("a")`
    },
    ///
    ///
    {
        question:
            `Interview: How do you find out if an object is a copy of another object?`,
        answer:
`Object.is(obj1, obj2)

or

JSON.stringify(obj1) === JSON.stringify(obj2)`
    },
    ///
    ///
    {
        question:
            `Interview: How do you duplicate an object?`,
        answer:
`{...obj}`
    },
    ///
    ///
    {
        question:
            `JS: How do you write a simple every function and what is it for?`,
        answer:
`The every function check if all elements in an array pass a test.

Example:

[2, 3, 4, 5].every((i) => i < 40)`
    },
    ///
    {
        question:
            `JS: How do you add stuff to the middle of an array?`,
        answer:
`With .splice().

Example:

arr = [1, 2, 3, 4];

arr.splice(2, 0, "car", "truck")

console.log(arr);`
    },
    ///
]


