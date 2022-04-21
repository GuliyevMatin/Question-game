$(() => {
  class Question {
    count = 1;
    questionTitle = $(".questionTitle");
    questionContent = $(".questionContent");
    answerCard = $("#answerCard");
    alfabet = ["A", "B", "C"];
    rightAnswer = 0;
    wrongAnswer = 0;
    total = $(".total");
    game = {
      Question1: {
        question: "Which is the biggest airport in the world?",
        answer: ["King Fahd", "THY", "Orlando"],
        currentAnswer: "A",
      },
      Question2: {
        question: "how much does an elephant weigh",
        answer: ["4ton-10ton", "20ton", "800Kg"],
        currentAnswer: "A",
      },
      Question3: {
        question: "Everything ...... in the JavaScript",
        answer: ["String", "Number", "Object"],
        currentAnswer: "C",
      },
      Question4: {
        question: "what is the most popular city in the world",
        answer: ["London", "Paris", "New York"],
        currentAnswer: "C",
      },
      Question5: {
        question: "what is the poorest city in the world",
        answer: ["Somali", "Monrovia", "Kenya"],
        currentAnswer: "B",
      },
    };
    newArr = Object.keys(this.game).length;
    startGame() {
      this.questionTitle.html(`Question${this.count}`);

      this.questionContent.html(this.game[this.questionTitle.html()].question);
      for (let index = 0; index < this.alfabet.length; index++) {
        let a = $("<div>")
          .html(
            `
          <h3 class="answerVariant${this.alfabet[index]} bg-dark text-light p-2">${
              this.alfabet[index]
            }</h3>
          <p  class="answerLetter${index} p-2">${
              this.game[this.questionTitle.html()].answer[index]
            }</p>
          `
          )
          .addClass("answerCard w-100");
        this.answerCard.append(a);
      }
      this.count++;
    }
    verifyAnswer(e) {
      if (
        e.key ===
        this.game[this.questionTitle.html()].currentAnswer.toLowerCase()
      ) {
        $(`.answerVariant${e.key.toUpperCase()}`).removeClass("bg-dark").css({"background-color":"green"})
        this.currentAnswer++
      } else {
        $(`.answerVariant${e.key.toUpperCase()}`).removeClass("bg-dark").css({"background-color":"red"})
        this.wrongAnswer++
      }
    }
  }

  $("#questionSection").hide();
  $("#start").on("click", () => {
    $("#startGameSection").hide();
    $("#questionSection").show();
  });

  const myObj = new Question();
  myObj.startGame();

  window.onkeypress = (e) => {
    $(".progress-bar").css({ width: "+=250px" });
    myObj.verifyAnswer(e), 3000;
    setTimeout(() => {
      myObj.answerCard.html("");
      myObj.startGame();
    }, 1000);
console.log(myObj.count , myObj.newArr);
    if (myObj.count === (myObj.newArr + 1)) {
      $("#questionSection").hide();
      $("#startGameSection").show();
      let result = +(myObj.currentAnswer / myObj.newArr)*100
      console.log(result);
      myObj.total.html( + "%");
    }
  };

  // myObj.answerQuestion();

 
});

// showQuestion() {
//   this.questionTitle.html(`Question${this.count}`);

//       for (let index = 0; index < this.newArr.length; index++) {
//         if (this.questionTitle.html() === item) {
//           this.questionContent.html(this.game[index].question);
//         let a = $("<div>")
//           .html(
//             `
//     <h3 id="answerVariant${index}" class="answerVariant bg-dark text-light p-2">${this.alfabet[index]}</h3>
//     <p id="answerLetter${index}" class="answerLetter p-2">${this.game[index].answer[index]}</p>
//     `
//           )
//           .addClass("answerCard w-100");
//         this.answerCard.append(a);
//       }
//     }

// }
// answerQuestion() {
//   // console.log();

//   window.onkeypress = (e) => {
//     this.count++;

//     for (let index = 0; index < this.alfabet.length; index++) {
//       if (
//         $(`#answerVariant${index}`).text().toLowerCase() === e.key &&
//         $(`#answerLetter${index}`).text() ===
//           this.game[this.questionTitle.html()].currentAnswer
//       ) {
//         setTimeout(this.showQuestion(),1000)
//         console.log(this.count);
//       } else {
//         setTimeout(this.showQuestion(),1000)
//       }
//     }
//   };
// }
