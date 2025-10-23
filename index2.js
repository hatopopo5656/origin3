$(document).ready(function () {
  let startTime;
  let intervalTime;
  let elapsed = 0;
  let timing = false;

  function updateDisplay(time) {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    const milliseconds = Math.floor((time %1000) / 100);

    $(".time").text(`${hours}:${minutes}:${seconds}:${milliseconds}`);
  }

  $(".button_start").on("click", function () {
    if (timing) return;
    timing = true;
     $(".button_start").prop("disabled", true);
     $(".button_stop").prop("disabled",false);
     $(".button_reset").prop("disabled",false);
    startTime = Date.now() - elapsed;
    intervalTime = setInterval(function () {
      elapsed = Date.now() - startTime;
      updateDisplay(elapsed);
    }, 10);
  });

  $(".button_stop").on("click", function () {
    clearInterval(intervalTime);
    timing =false;
       $(".button_start").prop("disabled", false);
       $(".button_stop").prop("disabled",true);
       $(".button_reset").prop("disabled",false);
  });

  $(".button_reset").on("click", function () {
    clearInterval(intervalTime);
    elapsed = 0;
    timing = false;
     $(".button_start").prop("disabled", false);
     $(".button_stop").prop("disabled",true);
     $(".button_reset").prop("disabled",true);
    $(".time").text("0:0:0:0");
  });
});