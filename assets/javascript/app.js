//VARIABLES

let questions = [{
        question: "Who is the oldest of the Kardashian sisters?",
        choices: ["Kourtney", "Kim", "Khloe", "Kendell"],
        answer: "Kourtney",
    }, {
        question: "Who wrote the McDonald’s jingle, 'I’m Lovin’ It?'",
        choices: ["Justin Timberlake", "Pusha T", "Paul McCartney", "Max Martin"],
        correct: "Pusha T",
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
    }


];

let game = {
    questions: questions,
    currentQuestion: 0,
    counter: 30,
    correct: 0,
    wrong: 0,
    timer: function() {
        game.counter--;
        $('#counter').html(game.counter);
        if (game.counter <= 0) {
            console.log("Time's Up!")
            game.timeUp();
        }

    },
    loadQuestion: function() {
        this.timer.setInterval(game.timer, 1000);
        ('.container').html(`<h2 ${questions.game.currentQuestion.question}</h2>`)
    },
    nextQuestion: function() {

    },
    timeUp: function() {

    },
    results: function() {

    },
    clicked: function() {

    },
    answeredCorrect: function() {

    },
    answeredWrong: function() {

    },
    reset: function() {

    }
}


//FUNCTIONS

$('#start').on('click', () => {
    $('#start').remove();
})