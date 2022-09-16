export interface Lesson {
    details: {
        title: string;
        description: string;
        points: number;
        instructions: string[]
    },
    initialCode: string;
    expectedOutput: Array<{type: string, text: string}>;
    congratsMessage: string[];
}


const lessons: Lesson[] = [
    {
        details: {
            title: "0. Hello World",
            description: "Printing to the console.",
            points: 10,
            instructions: [
                "<h2>Hello World!</h2>",
                "<p>Welcome! If this is the first time you've coded before, you're in for a treat. This course will introduce you to the fundamentals of JavaScript, and we'll have a little fun along the way too. Let's get started!</p>",
                "<h3>House Tour</h3>",
                "<p>Oh, and this is a great time to get used to the HSMC Code interface. <b>On the left is your code editor</b>, which you'll type your code into. It has syntax highlighting and everything! Pretty neat, huh?</p>",
                "<p>On the right is your console. This is where you'll see the output of your code. <b>Below the console is your lesson instructions</b>, which you're reading right now!</p>",
                "<h3>First Steps</h3>",
                "<p>A function (a sub-routine that does work based on parameters we give, and returns a result) that we'll use often in this course is <code>console.log</code>. This function prints whatever you want to the console.",
                "<p>For example, if we wanted to print \"Hi Mom!\" to the console, we would type <code>console.log(\"Hi Mom!\");</code>. Note the quotation marks-- this is how we tell our program that \"Hi Mom!\" is a <i>string</i>. More on this later!</p>",
                "<main>So let's try it out! <b>Print <code>Hello World!</code> to the console</b>. Note that all lessons expect the output to be <b>case-sensitive</b>, so make sure your output looks <i>exactly</i> right.</main>",
                "<p>Don't worry if it's a little confusing. Everything will be explained later, and you can contact us in the #help channel on our Discord if you're stuck.</p>",
            ]
        },
        initialCode: '// Print "Hello World!" to the console. Click "Run" to run your program once you\'re done coding.\n// (Hint: It\'s not "print()". That sends this webpage to your real-life printer.)',
        expectedOutput: [
            {type: "log", text: "Hello World!"}
        ],
        congratsMessage: [
            "<b>You just coded your first program! Congrats!</b>",
            "<p><code>console.log</code> is how you print stuff to the console. In a real web browser, you'd see it in the Developer Tools console (CTRL+SHIFT+J).</p>",
            "<p>You can also use <code>console.warn</code> and <code>console.error</code> in your code to make debugging easier!</p>",
            "<p>You can click \"Keep Coding\" below to test them out, or continue on to the next lesson.</p>"
        ]
    },
    {
        details: {
            title: "1. Variables",
            description: "Get started with variables and learn the main data types.",
            points: 10,
            instructions: [
                "<h2>Variables, Data Types, Oh My!</h2>",
                "<p>Now, let's talk about variables. <b>Variables are how your programs store data.</b> It can be anything, really: numbers, text, etc.</p>",
                "<p>JavaScript has three main 'types' we'll put in variables:</p><ul>",
                "<li><b>Numbers</b> are just that: numbers. They can be integers (whole numbers) or decimals (floating point numbers). They can be positive or negative. You can do math operations on them: + (add), - (subtract), * (multiply), / (divide), etc.</li>",
                "<li><b>Strings</b> are text. You've already seen them in the previous lesson. They're surrounded by quotation marks, and can be single (<code>'</code>) or double (<code>\"</code>) quotes. You can concatenate strings together with the + operator.</li>",
                "<li><b>Booleans</b> are either <code>true</code> or <code>false</code>. They're used for logic and comparisons.</li>",
                "</ul>",
                "<p>In JavaScript, there are three ways to declare variables:</p><ul>",
                "<li><code>let</code> is how you'll define most variables. You can change the value of a <code>let</code> variable after it is declared (created).</li>",
                "<li><code>const</code> is how you'll define constants. Constants are variables that can't be changed. They're useful for storing values that shouldn't change, like the number of days in a year.</li>",
                "<li><code>var</code> is the old way of declaring variables. It's still used, but it's not recommended. You probably don't need to use this.</li>",
                "</ul>",
                "<main>For this lesson, <b>Fill in the blanks in the <code>console.log</code>s describing each variable's data type</b>.</main>",
                "<p><b>Notice how you can put multiple arguments into <code>console.log</code>?</b> You can put as many arguments as you want (separated by commas), and they'll all be printed to the console. Pretty neat!</p>",
            ]
        },
        initialCode: "// Declaring our variables. Which types are these?\nconst a = 5;\nconst b = \"Hello World!\";\nconst c = true;\n\n// Now, fill in the blanks!\nconsole.log(a, 'is a ____');\nconsole.log(b, 'is a ____');\nconsole.log(c, 'is a ____');",
        expectedOutput: [
            {type: "log", text: "5 is a number"},
            {type: "log", text: "Hello World! is a string"},
            {type: "log", text: "true is a boolean"}
        ],
        congratsMessage: [
            "<b>Great job!</b> You just learned how to declare and use variables.",
            "<p>As a fun exercise, try assigning a new value to one of the variables (e.g. add <code>a = 10;</code> to line 5) and see what happens. Note you don't write the <code>const/let/var</code> after assigning a variable.</p>",
            "<p>Did it work? If it didn't, why not? What happens if you change the variables from <code>const</code> to <code>let</code>?</p>"
        ]
    }
]

export default lessons;