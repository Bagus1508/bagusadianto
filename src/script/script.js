const modalAbout = document.getElementById("modalAboutMe");
const btnModalAbout = document.getElementById("btnModalAboutMe");
const btnCloseAbout = document.getElementById("closeModalAbout");

const modalProject = document.getElementById("modalProjects");
const btnModalProjects = document.getElementById("btnModalProjects");
const btnCloseProjects = document.getElementById("closeModalProjects");

const modalInformation = document.getElementById("modalInformation");
const btnModalInformation = document.getElementById("btnModalInformation");
const btnCloseInformation = document.getElementById("closeModalInformation");

const modalContact = document.getElementById("modalContact");
const btnModalContact = document.getElementById("btnModalContact");
const btnCloseContact = document.getElementById("closeModalContact");

/* My Love Variable */
const modalMyLove = document.getElementById("modalMyLove");
const btnModalMyLove = document.getElementById("btnModalMyLove");
const btnCloseMyLove = document.getElementById("closeModalMyLove");
const btnNext = document.getElementById("next");

function btnModal(modalId, btnModal) {
    btnModal.onclick = function (){
        modalId.style.display = "block"
    }
    return;
}

/* function windowCloseModal(modalId){
    window.onclick = function(event) {
        if (event.target == modalId) {
            modalId.style.display = "none";
        }
    }
} */

function btnCloseModal(modalId, btnCloseId){
    btnCloseId.onclick = function(){
        modalId.style.display = "none"
    }
}

/* CountDown Birthday */
// Set the date we're counting down to
var countDownDate = new Date("Mar 13, 2024 00:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("countDown").innerHTML = days + " hari " + hours + "j "
  + minutes + "m " + seconds + "d ";

  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    const confirmEndCountDown = alert('Klik Icon Love');
    /* My Love Button */
    btnModalMyLove.onclick = function (){
        modalMyLove.style.display = "block"

        checkAnswer.onclick = function() {
            var userAnswer = document.getElementById('userAnswer').value;
            if(userAnswer == 'Love You') {
                document.getElementById('answer').innerHTML = 'Love You Too sayang kohhh &#128573;';
                btnNext.style.display = "block"
            } else {
                document.getElementById('answer').innerHTML = "Salah Kocak \n Jawabannya tuh \'Love You'"
            }
            return;
        }

        next.onclick = function() {
            var headerTextModal = document.getElementById('headerTextModal');
            var contentTextModalChild = document.getElementById('contentTextModalChild');
            const titleHome = document.getElementById('titleHome');
            const birthdaySound = document.getElementById('birthdaySound');

            alert('Sebelum lanjut, volume nya nyalain ayang');
            alert('Kalau udah klik oke njihh');

            titleHome.innerHTML = "Selamat Ulang Tahun<br>Ayang Yupi &#x1F63D;&#x1F63D;&#x1F63D;"

            birthdaySound.setAttribute("autoplay", '');
            birthdaySound.setAttribute("loop", '');

            birthdaySound.play();

            birthdaySound.currentTime = 14;

            setTimeout(function() {
                birthdaySound.pause();
            }, 196000);

            contentTextModalChild.style.display = "none"
            headerTextModal.innerHTML = "Selamat Ulang Tahun Ayang Yupi &#x1F63D;&#x1F63D;&#x1F63D;"

            document.getElementById("contentTextModalChild2").style.display = "block";
        }

        btnCloseMyLove.onclick = function(){
            modalMyLove.style.display = "none"
        }
    }
  }
}, 1000);


document.addEventListener("DOMContentLoaded", function () {
    btnModal(modalAbout, btnModalAbout);
    btnCloseModal(modalAbout, btnCloseAbout);

    btnModal(modalProject, btnModalProjects);
    btnCloseModal(modalProject, btnCloseProjects);

    btnModal(modalInformation, btnModalInformation);
    btnCloseModal(modalInformation, btnCloseInformation);

    btnModal(modalContact, btnModalContact);
    btnCloseModal(modalContact, btnCloseContact);
});