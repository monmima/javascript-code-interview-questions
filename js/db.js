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
                Node.js: How do you read a file?
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
`fs.writeFileSync("new-file.txt", "File content.");`
    },
    {
        question:
            `
                JS: How do you add something to the beginning of an array?

                <hr>

                var myArray = [1, 2, 3, 4];
            `,
        answer:
`// ES5
myArray.unshift("start");

// ES6
// Spread operator

myArray = ["start", ...myArray];`
    },
    {
        question:
            `
                JS: How do you add something to the end of an array?

                <hr>

                var myArray = [1, 2, 3, 4];
            `,
        answer:
`// ES5
myArray.push("end");

// ES6
// Spread operator

myArray = [...myArray, "end"];
`
    },
    {
        question:
            `
                JS: How do you reverse a string?

                <hr>

                var myString = "1234";
            `,
        answer:
`var newString = myString.split("").reverse().join("")`
    },

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

    printString() {
        console.log(this.string);
    }
}`
    },

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
                JS: Store a random number in the variable.
                <hr>
<pre>
let myVar;
</pre>
            `,
        answer:
`myVar = Math.floor(Math.random() * 10 + 1);`
    },

    {
        question:
            `
                JS: Keep only two decimals to the number.
                <hr>
<pre>
var number = 10.3416;
</pre>
            `,
        answer:
`var newNumber = number.toFixed(2);`
    },

    {
        question:
            `
                JS: Draw a CSS circle.
            `,
        answer:
`.circle {
    height: 25px;
    width: 25px;
    background-color: black;
    border-radius: 50%;
}`
    },
    
    {
        question:
            `
                JS: Create a simple keyframe spin animation.
            `,
        answer:
`@keyframes spin {
    0% {
        transform: rotate(0deg);
    }
    100% {
        transform: rotate(360deg);
    }
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
    background-color: lightgreen;
    height: 10px;
    width: 100px;
}</pre>
            `,
        answer:
`.test {
    ***animation: spin 3s infinite;***
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

]
