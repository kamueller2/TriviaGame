//VARIABLES

let questions = [{
        question: "Who is the oldest of the Kardashian sisters?",
        answers: ["Kourtney", "Kim", "Khloe", "Kendell"],
        correct: "Kourtney",
    }, {
        question: "Who wrote the McDonald’s jingle, “I’m Lovin’ It?”",
        answers: ["Justin Timberlake", "Pusha T", "Paul McCartney", "Max Martin"],
        correct: "Pusha T",
    }, {
        question: "What was the original name of Destiny's Child?",
        answers: ["Girls Tyme", "Blaque", "Patron Saints", "702"],
        correct: "Girls Tyme",
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