console.log("Database loaded...");

// function replaceWhiteSpaces (whatString) {
//     return whatString.replace("      ", "");
// }

const DATABASE = [
    {
        question:
            `
                // How do you add something to the beginning and end of an array?

                var myArray = [1, 2, 3, 4];
            `,
        answer:
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
        question:
            `
                // How do you create a private variable in JavaScript?

                function secretVariable() {
                    var private = "Super secret code";
                }
            `,
        answer:
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
        question:
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
        answer:
            `
                // This has to do with closures.

                ===> 3
            `,
        source: "https://www.youtube.com/watch?v=6Wzj7kxfRdI"
    },
    {
        question:
            `
                // What is the output?

                ===> console.log(typeof typeof 1);
            `,
        answer:
            `
                // 1. typeof 1 is turned to "number"
                // 2. typeof "number" is turned to "string"
            `,
        source: "https://www.youtube.com/watch?v=6Wzj7kxfRdI"
    },
    {
        question:
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
        answer:
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
        question:
            `
                // what is the order of the output of the letters and why?

                console.log('a');
        
                let timmy = setTimeout(function () {
                    console.log('b');
                }, 0);
        
                console.log('c');
            `,
        answer:
            `
                ===> a
                ===> c
                ===> b
            `,
        source: "https://www.youtube.com/watch?v=USbiLiF9NDY&list=PLyuRouwmQCjlLW9NjqoBbf9eVaFX4F9UZ"
    },
    {
        question:
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
        answer:
            `
                ===> 1
                ===> 2
            `,
        source: "https://www.youtube.com/watch?v=j1ykOrC2f0A&list=PLyuRouwmQCjlLW9NjqoBbf9eVaFX4F9UZ&index=2"
    }
]


