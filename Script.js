let para = document.querySelector(".p3");
      let time_over = document.querySelector(".time-over");
      let input1 = document.querySelector("#input1");
      let time_span = document.querySelector("#time-span");
      let selector = document.querySelector("#selector");
      let score_span = document.querySelector("#score-span");
      let array = ["jug", "dog", "sparrow", "toilet", "banana"];
      let WordDisplay;
      let Levels = {
        Easy: 9,
        Medium: 6,
        Tough: 3,
      };
      let currentLevel = Levels.Easy;
      let timer = currentLevel + 1;
      let interv;
      let guessValue = 0;

      window.addEventListener("load", Loading);
      input1.addEventListener("input", Check);
      selector.addEventListener("change", Selecttion);

      function Loading() {
        let random = Math.floor(Math.random() * array.length);

        WordDisplay = array[random];

        para.innerHTML = WordDisplay;
        document.getElementById("sec-sp").innerHTML = currentLevel;

        interv = setInterval(CountDown, 1000);
      }

      function CountDown() {
        console.log("working");
        if (timer > 0) {
          timer--;

          time_span.innerHTML = timer;
        } else {
          clearInterval(interv);
          timer = 0;
          time_over.style.color = "red";
          time_over.innerHTML = "Time Over!!!";
        }
      }

      function Check() {
        if (input1.value == WordDisplay) {
          guessValue++;
          score_span.innerHTML = guessValue;
          time_over.style.color = "green";
          time_over.innerHTML = "Correct!";
          input1.value = "";
          Loading();
        }
      }

      function Selecttion(e) {
        console.log(e);

        let selectedValues = e.target.value;
        if (selectedValues == "Easy") {
          currentLevel = Levels.Easy;
          document.getElementById("sec-sp").innerHTML = currentLevel;
          timer = currentLevel + 1;
        } else if (selectedValues == "Medium") {
          currentLevel = Levels.Medium;
          timer = currentLevel + 1;
          document.getElementById("sec-sp").innerHTML = currentLevel;
        } else if (selectedValues == "Difficult") {
          currentLevel = Levels.Tough;
          console.log(currentLevel);
          timer = currentLevel + 1;
          document.getElementById("sec-sp").innerHTML = currentLevel;
        }
      }