// Inspiration: https://stackoverflow.com/questions/46681243/add-play-button-h1-p-on-video

const mainvideo = document.getElementById("mainvideo");
const bigwave = document.getElementById("bigwave");
const start = document.getElementById("start");

mainvideo.style.display = "none";
bigwave.style.display = "none";

$(document).ready(function () {
  $(".play").click(function () {
    //animation here in the future
    if ($(this).parent().prev().get(0).paused) {
      bigwave.style.display = "block";

      setTimeout(function () {
        mainvideo.style.display = "block";
        mainvideo.play();
        bigwave.style.display = "none";
      }, 2000);

      $(this).parent().prev().get(0).play();
      $(this).parent().prev().removeClass("blurEffect");
      $(".content").hide();
    }
  });

  $(".video").on("ended", function () {
    $(this).addClass("blurEffect");
    $(".content").show();
    document.getElementById("secondpage").scrollIntoView();
  });
});

// INTERVIEW VIDEO

const interviewvideo = document.getElementById("interview-video");
const startinterview = document.getElementById("start-interview");

// interviewvideo.style.display = "block";

$(document).ready(function () {
  $(".play-interview").click(function () {
    //animation here in the future
    if ($(this).parent().prev().get(0).paused) {
      $(this).parent().prev().get(0).play();
      $(this).parent().prev().removeClass("blurEffect");
      $(".content-int").hide();
    }
  });

  $(".video-interview").on("ended", function () {
    $(this).addClass("blurEffect");
    $(".content-int").show();
  });
});
