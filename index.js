$(() => {
  class Question {
    count = 1;
    questionTitle = $("#questionTitle");
    questionContent = $("#questionContent");
    answerCard = $("#answerCard");
    alfabet = ["A", "B", "C"];
    game = {
      Question1: [
        { question: "Which is the biggest airport in the world?" },
        { answer: ["King Fahd", "THY", "Orlando"] },
      ],
      Question2: [
        { question: "how much does an elephant weigh" },
        { answer: ["4ton-10ton", "20ton", "800Kg"] },
      ],
      Question3: [
        { question: "Everything ...... in the JavaScript" },
        { answer: ["Object", "String", "Number"] },
      ],
      Question4: [
        { question: "what is the most popular city in the world" },
        { answer: ["New York", "London", "Paris"] },
      ],
      Question5: [
        { question: "what is the poorest city in the world" },
        { answer: ["Monrovia", "Somali", "Kenya"] },
      ],
    };

    showQuestion() {
      let newArr = Object.keys(this.game);
      this.questionTitle.html(`Question${this.count}`);

      for (const item of newArr) {
        if (this.questionTitle.html() === item) {
          for (const iterator of this.game[item]) {
            this.questionContent.html(iterator.question);
          }
        }
      }
    }
  }

  const myObj = new Question();

  myObj.showQuestion();

  $("#questionSection").hide();
  $("#start").on("click", () => {
    $("#startGameSection").hide();
    $("#questionSection").show();
  });
});
