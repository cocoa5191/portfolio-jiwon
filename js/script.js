$(document).ready(function(){
  console.log('Ready!');

});


// 인트로 텍스트 셔플 

let textContainer = document.querySelector(".text");
let palette = document.querySelector(".palette-container");
let texts = document.querySelectorAll(".big");

function isTouchDevice() {
  return (
    "ontouchstart" in window ||
    navigator.maxTouchPoints > 0 ||
    navigator.msMaxTouchPoints > 0
  );
}

function shufflealignement() {
  texts.forEach((text) => {
    if (!text.classList.contains("fixed")) {
      text.classList.remove("right");
      text.classList.remove("middle");
      let r = Math.floor(Math.random() * 3);
      if (r == 0) {
        text.classList.add("right");
      } else if (r == 1) {
        text.classList.add("middle");
      }
    }
  });
}

function suffleRotation() {
  texts.forEach((text) => {
    text.classList.remove("rotated");
    if (!text.classList.contains("fixed")) {
      let r = Math.floor(Math.random() * 4);
      if (r == 0) {
        text.classList.add("rotated");
      }
    }
  });
}

let counter = 0;

window.addEventListener("mousemove", () => {
  counter++;
  if (counter % 30 == 0) {
    shufflealignement();
    suffleRotation();
  }
});

let state = 0;

window.addEventListener("click", () => {
  clickTouchHandler();
});
window.addEventListener("touchend", () => {
  clickTouchHandler();
});

function clickTouchHandler() {
  shufflealignement();
  suffleRotation();

  state = state > 1 ? 0 : (state += 1);
  console.log(state);

  textContainer.classList.remove("hidden");
  palette.classList.remove("hidden");
  pinkLine.classList.remove("hidden");
  greenLine.classList.remove("hidden");

  if (state == 0) {
    textContainer.classList.add("hidden");
    greenLine.classList.add("hidden");
  } else if (state == 1) {
    palette.classList.add("hidden");
    pinkLine.classList.add("hidden");
  }
};

// 인트로 슬라이드

// let a = document.querySelector(".homepage-title ");

// $(document).ready(function() {
//   let isAnimating = false;

//   // 페이지 로드 시 header와 footer를 숨김
//   $('header, footer, a').hide();

//   $(window).on('wheel', function(event) {
//     if (!isAnimating) {
//       if (event.originalEvent.deltaY > 0) { // 아래로 스크롤할 때
//         isAnimating = true;
//         $('.intro').css('transform', 'translateY(-100vh)'); // .intro를 위로 이동
//         $('header, footer, a').fadeIn(); // header와 footer를 보이게 함

//         setTimeout(function() {
//           isAnimating = false;
//         }, 500); // 애니메이션 후 재스크롤 가능

//       } else if (event.originalEvent.deltaY < 0) { // 위로 스크롤할 때
//         isAnimating = true;
//         $('.intro').css('transform', 'translateY(0)'); // .intro를 원래 위치로
//         $('header, footer, a').fadeOut(); // header와 footer를 숨김

//         setTimeout(function() {
//           isAnimating = false;
//         }, 500); // 애니메이션 후 재스크롤 가능
//       }
//     }
//   });
// });

// $(document).ready(function() {
//   let isAnimating = false;

//   // 페이지 로드 시 header와 footer를 숨김
//   $('header, footer, a').hide();

//   $(window).on('wheel', function(event) {
//     if (!isAnimating) {
//       if (event.originalEvent.deltaY > 0) {
//         scrollDown();
//       } else if (event.originalEvent.deltaY < 0) {
//         scrollUp();
//       }
//     }
//   });

//   $('#swipe_up').on('click', function() {
//     if (!isAnimating) {
//       scrollDown();
//     }
//   });

//   function scrollDown() {
//     isAnimating = true;
//     $('.intro').css('transform', 'translateY(-100vh)');
//     $('.intro').hide();
//     $('header, footer, a').fadeIn();

//     setTimeout(function() {
//       isAnimating = false;
//     }, 500);
//   }

//   function scrollUp() {
//     isAnimating = true;
//     $('.intro').css('transform', 'translateY(0)');
//     $('.intro').show();
//     $('header, footer, a').fadeOut();

//     setTimeout(function() {
//       isAnimating = false;
//     }, 500);
//   }

// });




$(document).ready(function() {
  let isAnimating = false;

  // 페이지 로드 시 header와 footer를 숨김
  $('header, footer, a').hide();

  $(window).on('wheel', function(event) {
      if (!isAnimating) {
          if (event.originalEvent.deltaY > 0) {
              scrollDown();
          } else if (event.originalEvent.deltaY < 0) {
              scrollUp();
          }
      }
  });

  $('#swipe_up').on('click', function() {
      if (!isAnimating) {
          scrollDown();
      }
  });

  function scrollDown() {
      isAnimating = true;
      $('.intro').css('transform', 'translateY(-100vh)').fadeOut(500, function() {
          $('header, footer, a').fadeIn();
          isAnimating = false;
      });
  }

  function scrollUp() {
      isAnimating = true;
      $('.intro').css('transform', 'translateY(0)').fadeIn(500, function() {
          $('header, footer, a').fadeOut();
          isAnimating = false;
      });
  }

});