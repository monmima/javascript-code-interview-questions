console.log("Database loaded...");

// function replaceWhiteSpaces (whatString) {
//     return whatString.replace("      ", "");
// }

const DATABASE = [
    {
        questionPre:
            `
                // How do you add something to the beginning and end of an array?

                var myArray = [1, 2, 3, 4];
            `,
        answerPre:
            `
                // ES5
                myArray.unshift("start");
                myArray.push("end);

                console.log(myArray);

                // ES6
                // Spread operator

                myArray = ["start", ...myArray, "end"];

                console.log(myArray);
            `,
        source: "https://www.youtube.com/watch?v=6Wzj7kxfRdI"
    },
    {
        questionPre:
            `
                // How do you create a private variable in JavaScript?

                function secretVariable() {
                    var private = "Super secret code";
                }
            `,
        answerPre:
            `
                // The only way to do that is to mess with the scope.

                function secretVariable() {
                    var private = "Super secret code";
                    return function() {
                        return private;
                    }
                }

                var getPrivateVariable = secretVariable();

                console.log(getPrivateVariable());

                /**
                 * The following would just return "undefined".
                 * 
                 * console.log(secretVariable());
                 * 
                 * /
            `,
        source: "https://www.youtube.com/watch?v=6Wzj7kxfRdI"
    },
    {
        questionPre:
            `
                // What is the output?

                var num = 4;
                function outer() {
                    var num = 2;
                    function inner() {
                        num++;
                        var num = 3;
                        console.log(num)
                    }
                    inner();
                }
                outer();
            `,
        answerPre:
            `
                // This has to do with closures.

                ===> 3
            `,
        source: "https://www.youtube.com/watch?v=6Wzj7kxfRdI"
    },
    {
        questionPre:
            `
                // What is the output?

                ===> console.log(typeof typeof 1);
            `,
        answerPre:
            `
                // 1. typeof 1 is turned to "number"
                // 2. typeof "number" is turned to "string"
            `,
        source: "https://www.youtube.com/watch?v=6Wzj7kxfRdI"
    },
    {
        questionPre:
            `
                // What is the output?

                var hero = {
                    _name: "John Doe",
                    getSecretIdentity: function() {
                        return this._name;
                    }
                };

                var stoleSecretIdenity = hero.getSecretIdentity;

                console.log(stoleSecretIdentity);
                console.log(hero.getSecretIdentity());
            `,
        answerPre:
            `
                ===> undefined
                ===> John Doe

                // To get John Doe twice, you need to use the bind method.
                // Because we set it to a new variable, you need you have that bind.

                var stoleSecretIdenity = hero.getSecretIdentity.bind(hero);
            `,
        source: "https://www.youtube.com/watch?v=6Wzj7kxfRdI"
    },
    {
        questionPre:
            `
                // what is the order of the output of the letters and why?

                console.log('a');
        
                let timmy = setTimeout(function () {
                    console.log('b');
                }, 0);
        
                console.log('c');
            `,
        answerPre:
            `
                ===> a
                ===> c
                ===> b
            `,
        source: "https://www.youtube.com/watch?v=USbiLiF9NDY&list=PLyuRouwmQCjlLW9NjqoBbf9eVaFX4F9UZ"
    },
    {
        questionPre:
            `
                // What is the output?

                let num = 0;
                async function increment() {
                    num += await 2;
                    console.log(num);
                }
                increment();
                num += 1;
                console.log(num);
            `,
        answerPre:
            `
                ===> 1
                ===> 2
            `,
        source: "https://www.youtube.com/watch?v=j1ykOrC2f0A&list=PLyuRouwmQCjlLW9NjqoBbf9eVaFX4F9UZ&index=2"
    },
    {
        questionPre:
            `
                // Revealing module pattern
                // Turn this object literal into a module that only exposes the render method
                
                let myModule = {
                    data: [],
                    render: () => {
                
                    },
                    add: () => {
                
                    },
                    remove: () => {
                
                    }
                };
            `,
        answerPre:
            `
                // IIFE
                // The way the reveal works is because these are declared insided of a function, they cease to exist after the function has finished running

                let myModule = (function(){
                    let _data = [];
                    let _render = function() {
                        // e.g. click listeners for _add and _remove
                    }
                    let _add = function() {
                
                    }
                    let _remove = function() {
                
                    }
                    return {
                        render: _render
                    }
                })();
                
                myModule.render(); // will work
                myModule._add(); // will fail
            `,
        source: "https://www.youtube.com/watch?v=e0u8z-9aAEw&list=PLyuRouwmQCjlLW9NjqoBbf9eVaFX4F9UZ&index=3"
    }
]


