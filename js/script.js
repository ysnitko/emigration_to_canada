const sliders = document.querySelectorAll('.slider');

sliders.forEach(sliderEl => {
  const slider = new A11YSlider(sliderEl, {
    adaptiveHeight: true,
    dots: true,
    arrows: false,
    slidesToShow: 2,
    responsive: {
        768: {
          slidesToShow: 2,
          arrows: false
        },
        960: {
          disable: false, // slider disabled 960px to 1199px
          dots: true
        },
        1200: {
          disable: false,
          slidesToShow: 4,
          dots: true // dots enabled 1200px and up
        }
      }
  });
});

// выпадающее меню
function dropCity() {
  document.getElementById("city").style.display = "block";
  document.getElementById("arr_1").style.transform = 'rotate(180deg)';
  document.getElementById("arrow_1").style.fill = '#E55241';
  document.getElementById('town').style.color = '#E55241';
  document.getElementById('temp').style.color = '#E55241';
  document.getElementById('clouds').style.fill = '#E55241';
}

function dropLang() {
  document.getElementById("lang_menu").style.display = "block";
  document.getElementById("arr_2").style.transform = 'rotate(180deg)';
  document.getElementById("arrow_2").style.fill = '#E55241';
  document.getElementById('lang').style.color = '#E55241';
  document.getElementById("earth").style.fill = '#E55241';
}

function dropAccount() {
  document.getElementById("account_menu").style.display = "block";
  document.getElementById("arr_3").style.transform = 'rotate(180deg)';
  document.getElementById("arrow_3").style.fill = '#E55241';
  document.getElementById('acc').style.color = '#E55241';
  document.getElementById("user_1").style.fill = '#E55241';
  document.getElementById("user_2").style.fill = '#E55241';
 }

// закрытие меню по клику вне блока
document.addEventListener("mouseup", function(event) {
  const cityShow = document.getElementById("city");
  if (!cityShow.contains(event.target)) {
      cityShow.style.display = 'none'
      document.getElementById('clouds').style.fill = '#3A3E48';
      document.getElementById("arr_1").style.transform = 'rotate(0deg)';
      document.getElementById("arrow_1").style.fill = '#3A3E48';
      document.getElementById('town').style.color = '#3A3E48';
      document.getElementById('temp').style.color = '#3A3E48';
      document.getElementById('clouds').style.fill = '#3A3E48';
  }
});

document.addEventListener("mouseup", function(event) {
  const langShow = document.getElementById("lang_menu");
  if (!langShow.contains(event.target)) {
    langShow.style.display = 'none';
    document.getElementById("arr_2").style.transform = 'rotate(0deg)';
    document.getElementById("arrow_2").style.fill = '#3A3E48';
    document.getElementById('lang').style.color = '#3A3E48';
    document.getElementById("earth").style.fill = '#3A3E48';
  }
});

document.addEventListener("mouseup", function(event) {
  const accShow = document.getElementById("account_menu");
  if (!accShow.contains(event.target)) {
    accShow.style.display = 'none';
    document.getElementById("arr_3").style.transform = 'rotate(0deg)';
    document.getElementById("arrow_3").style.fill = '#3A3E48';
    document.getElementById('acc').style.color = '#3A3E48';
    document.getElementById("user_1").style.fill = '#3A3E48';
    document.getElementById("user_2").style.fill = '#3A3E48';
  }
});

// поле поиск
function btnOn() {
  document.getElementById("row_2").style.display = "flex";
  document.getElementById("row_2").style.width = "65%";
  document.getElementById("row_1").style.display = "none";
  document.getElementById('btn_search').style.background = "url(/images/search_close.svg)";
  document.getElementById('header_search').style.width = '70%';
}

// скрывает меню блок вопроса на странице Иммиграция
function closeQuestion() {
    document.getElementById("btn").style.display = 'none';
}

//валидация формы авторизации

function userid_validation() {
const checkEmpty = document.getElementById('nameUser');
const checkEmptyname = document.getElementById('answer');
const emailValid = document.getElementById('email_not_valid');
const passEmpty = document.getElementById('pass_empty');
const uid_len = checkEmpty.value.length;
const uid_len_last = checkEmptyname.value.length;
const uid_len_pass = passEmpty.value.length;
const uid_len_email = emailValid.value.length;
const re = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;
  
      if (uid_len == 0)  {
        checkEmpty.style.borderColor = '#E55241';
        checkEmpty.style.borderWidth = '1px';
        checkEmpty.placeholder = 'Введите имя';
      }
      
      else {
        checkEmpty.style.borderColor = 'limegreen';
      }
  
      if (uid_len_last == 0) {
        checkEmptyname.style.borderColor = '#E55241';
        checkEmptyname.style.borderWidth = '1px';
        checkEmptyname.placeholder = 'Введите пароль';
        document.getElementById('numbers').style.borderColor = '#E55241';
        document.getElementById('numbers').style.borderWidth = '1px';

      }
      
      else {
        checkEmptyname.style.borderColor = 'limegreen';
        document.getElementById('numbers').style.borderColor = 'limegreen';
      }
  
      if (uid_len_pass == 0) {
        passEmpty.style.borderColor = '#E55241';
        passEmpty.style.borderWidth = '1px'
        passEmpty.placeholder = 'Введите правильный ответ';
      }
      
      else {
        passEmpty.style.borderColor = 'limegreen';
      }

      if (uid_len_email == 0) {
        emailValid.style.borderColor = '#E55241';
        emailValid.style.borderWidth = '1px';
        emailValid.placeholder = 'Введите электронной почты';
      }
      
      else {
        emailValid.style.borderColor = 'limegreen';
      }

      if (isEmailValid(emailValid.value)) {
        emailValid.style.borderColor = 'limegreen';
  
      } else {
        emailValid.style.borderColor = '#E55241';
        emailValid.style.borderWidth = '1px';
        alert('введите правильный адрес электронной почты');
      }
  
      function isEmailValid(value) {
        return re.test(value);
      }
  } 