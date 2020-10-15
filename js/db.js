console.log("Database loaded...");

// function replaceWhiteSpaces (whatString) {
//     return whatString.replace("      ", "");
// }

const DATABASE = {
    q001: {
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
    q002: {
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
     q003: {
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
     q004: {
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
     q005: {
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
     }
}

// https://www.geeksforgeeks.org/how-to-iterate-over-a-javascript-object/
for (let key in DATABASE) { 
    if (DATABASE.hasOwnProperty(key)) { 
        // console.log(DATABASE[key].question);
        // console.log(DATABASE[key].answer);
        // console.log(key);

        // document.querySelector("main").innerHTML +=
        // `
        //     <div><pre>
        //         ${(DATABASE[key].question)}
        //     </pre></div>

        //     <div><pre>
        //         ${DATABASE[key].answer}
        //     </pre></div>
        // `

        document.querySelector("#accordion").innerHTML +=
        `
        ${key}
            <div class="card">
                <div class="card-header" id="heading-${key}">
                    <h5 class="mb-0">
                        <div class="collapsed" data-toggle="collapse" data-target="#${key}" aria-expanded="false" aria-controls="${key}">
                            <pre>
                                ${(DATABASE[key]).question}
                            </pre>
                        </div>
                    </h5>
                </div>

                <div id="${key}" class="collapse" aria-labelledby="${key}" data-parent="#accordion">
                    <div class="card-body">
                        <pre>
                            ${(DATABASE[key]).answer}
                        </pre>

                        <a href="${(DATABASE[key]).source}" title="Source for this question">Link to the source</a>
                    </div>
                </div>
            </div>
        `;
    } 
} 

