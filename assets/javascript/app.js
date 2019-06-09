$('#start').on('click', function() {
    $('#start').remove();
    game.loadQuestion();
})

$(document).on('click', '.answer-button', function(e) {
    game.clicked(e);
})





// TRIVIA QUESTIONS
let questions = [{

    question: "Who is the oldest of the Kardashian sisters?",
    choices: ["Kourtney", "Kim", "Khloe", "Kendell"],
    answer: "Kourtney",
}, {
    question: "Who wrote the McDonald’s jingle, 'I’m Lovin’ It?'",
    choices: ["Justin Timberlake", "Pusha T", "Paul McCartney", "Max Martin"],
    answer: "Pusha T",
}, {
    question: "What was the original name of Destiny's Child?",
    choices: ["Girls Tyme", "Blaque", "Patron Saints", "702"],
    answer: "Girls Tyme",
}, {
    question: "How many times was Elizabeth Taylor married?",
    choices: ["7", "12", "10", "8"],
    answer: "8",
}, {
    question: "Who is Alecia Moore better known as?",
    choices: ["Lady Gaga", "P!NK", "Iggy Azalea", "Alicia Keys"],
    answer: "P!NK",
}, {
    question: "What popular band was Dave Grohl in before The Foo Fighters'? ",
    choices: ["Pearl Jam", "Nirvana", "Stone Temple Pilots", "Hole"],
    answer: "Nirvana",
}, {
    question: "What are the fans of Justin Bieber usually referred to as?",
    choices: ["Beliebers", "Believers", "Bieb Hive", "Biebs Army"],
    answer: "Beliebers",
}, {
    question: "Who was the most Googled person in 2018?",
    choices: ["Cardi B", "Khloe Kardashian", "Meghan Markle", "Stormy Daniels"],
    answer: "Meghan Markle",
}, {
    question: "On the TV Show 'Seinfeld' the character 'Kramer' went by another name on the Pilot Episode...What was that name?",
    choices: ["Kramer", "Hoffman", "Kosmo", "Kessler"],
    answer: "Kessler",
}, {
    question: "What TV Show had a main character utter the final words 'I went ahead and ordered some for the table'?",
    choices: ["Cheers", "Friends", "The Sopranos", "Mad Men"],
    answer: "The Sopranos",
}];

//VARIABLES

let game = {
    questions: questions,
    currentQuestion: 0,
    counter: 15,
    correct: 0,
    wrong: 0,
    noAnswer: 0,
    countdown: function() {
        game.counter--;

        $('#counter').html(game.counter);

        if (game.counter <= 0) {
            console.log("Time's Up!");
            game.timeUp();
        }
    },
    loadQuestion: function() {
        timer = setInterval(game.countdown, 1000);

        // POST QUESTION TO PAGE
        $('#game-section').html(`<h2> ${questions[game.currentQuestion].question}</h2>`);

        for (let i = 0; i < questions[game.currentQuestion].choices.length; i++) {

            // STORING ANSWER IN CHOICES[I]
            $('#game-section').append('<button class="answer-button" id="button-' + i + '" data-name="' + questions[game.currentQuestion].choices[i] + '">' + questions[game.currentQuestion].choices[i] + '</button>');



            // $('.'#game-section'').append(`<button class=answer-button id=button- ${i}  data-name ${questions[game.currentQuestion].choices[i]} > ${questions[game.currentQuestion].choices[i]}  </button>`);

        }

        // LOOP THROUGH QUESTIONS W/ ANSWER CHOICES
    },
    nextQuestion: function() {
        game.counter = 15;
        $('#counter').html(game.counter);
        game.currentQuestion++;
        game.loadQuestion();

    },
    timeUp: function() {
        clearInterval(timer);
        game.noAnswer++;
        $('#game-section').html('<h2>Time/s Up!</h2>');
        $('#game-section').append(`<h3>Correct Answer:  ${questions[game.currentQuestion].answer}</h3>`);
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3000);
        } else {
            setTimeout(game.nextQuestion, 3000);
        }

    },
    results: function() {
        clearInterval(timer);
        $('#game-section').html('<h2>All Done!</h2>');
        $('#game-section').append(`<h3>Correct:  ${game.correct}<h/3>`);
        $('#game-section').append(`<h3>Wrong: ${game.wrong}</h3>`);
        $('#game-section').append(`<h3>Not Answered: ${game.noAnswer}</h3>`);
    },
    clicked: function(e) {
        clearInterval(timer);

        if ($(e.target).data("name") === questions[game.currentQuestion].answer) {
            game.answeredCorrect();
        } else {
            game.answeredWrong();
        }

    },
    answeredCorrect: function() {
        console.log("you got it!");
        clearInterval(timer);
        game.correct++
            $('#game-section').html('<h3>You got it right!</h3>');
        if (game.currentQuestion == questions.length - 1) {
            setTimeout(game.results, 3000);
        } else {
            setTimeout(game.nextQuestion, 3000);
        }
    },
    answeredWrong: function() {
        console.log("wrong");
        clearInterval(timer);
        game.wrong++;
        $('#game-section').html('<h3>You got it wrong!</h3>');
        $('#game-section').append(`<h3>The correct answer is: ${questions[game.currentQuestion].answer}</h3>`);
        if (game.currentQuestion == questions.length - 1) {

        }


    },
    reset: function() {

    }
}