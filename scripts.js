var r = document.querySelector(':root');
var modesvg = document.getElementById('modesvg').getAttribute('d');
var mode;

var usernameinput = document.getElementById('usernameinput');
var usernameelement = document.getElementById('username');
var username;

var welcomeelement = document.getElementById("welcome");
var welcomebackelement = document.getElementById("welcomeback");

var greetings = ["Marhaban", "Welcome", "Hello there", "Hi", "Hello", "Hi there", "Greetings"]


//setCookie and getCookie functions from w3schools
function setCookie(cname,cvalue,exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays* 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


function setusername() {
  if (username==="" || username===" " || username===null || username==="Guest") {
    username="Guest";
  }
  else {
    let username = usernameinput.value;
    setCookie("username", username, 365);
  }
  window.location.reload();
}

function checkusername() {
  let usernamecookie = getCookie("username");
  if (usernamecookie==="" || usernamecookie===" " || usernamecookie===null || usernamecookie==="Guest") {
    welcomeelement.style.display = "flex";
    welcomebackelement.style.display = "none";
  }
  else {
    welcomeelement.style.display = "none";
    welcomebackelement.style.display = "block";
    document.getElementById("username").innerHTML = usernamecookie;
    document.getElementById("greeting").innerHTML = greetings[Math.floor(Math.random()*greetings.length)];
    //add an API count to keep track of how many users there are
  }
}

function changeusername() {
  if (confirm("Are you sure you want to reset your username?")) {
    setCookie("username", "", 0);
    window.location.reload();
  } else {
    
  }
}

function darkmode() {
    r.style.setProperty('--glass', 'rgba(0, 0, 0, 0.3)');
    r.style.setProperty('--textcolor', 'rgba(255, 255, 255, 0.9)');
    r.style.setProperty('--bluetheme', 'rgb(0, 33, 105)');
    r.style.setProperty('--bgcolor', 'black');
    setCookie("mode", "dark", 365);

    mode=0;
    
    document.getElementById("modesvg").innerHTML = '<path id="darksvg" d="M316.78 16.55h-205.9c-30.5 0-58.22 12.48-78.31 32.57C12.47 69.21 0 96.93 0 127.44c0 30.5 12.47 58.22 32.57 78.31 20.09 20.1 47.81 32.57 78.31 32.57h193.25c21.54 15.43 47.9 24.54 76.26 24.54h.18c36.14 0 69.02-14.79 92.83-38.6 23.8-23.81 38.6-56.67 38.6-92.83 0-36.15-14.78-69.03-38.63-92.8C449.53 14.8 416.67 0 380.57 0h-.18c-23.02 0-44.72 6.02-63.61 16.55zm70.62 97.17.43.09c.82-3.45 2.83-6.19 6.04-8.16 3.2-1.98 6.53-2.57 10.01-1.75l.1-.43c-3.47-.82-6.2-2.83-8.17-6.03-1.98-3.22-2.57-6.55-1.75-10.01l-.43-.1c-.82 3.47-2.83 6.2-6.03 8.18-3.21 1.98-6.55 2.56-10.02 1.74l-.1.43c3.47.82 6.2 2.84 8.18 6.04 1.99 3.19 2.56 6.52 1.74 10zm36.87 16.77.53.12c1.02-4.35 3.55-7.78 7.58-10.26 4.02-2.49 8.2-3.22 12.56-2.19l.13-.53c-4.35-1.03-7.78-3.55-10.26-7.59-2.49-4.03-3.22-8.22-2.2-12.56l-.53-.12c-1.02 4.35-3.55 7.77-7.58 10.26-4.02 2.49-8.21 3.22-12.56 2.19l-.13.53c4.36 1.03 7.78 3.55 10.26 7.58 2.49 4.02 3.22 8.22 2.2 12.57zm-38.79-61.01c-15.69 7.67-26.98 23.26-28.29 41.93-1.96 27.88 19.05 52.06 46.92 54.02 13.23.93 25.64-3.32 35.22-11.02 4.75-3.82 9.66-.45 7.59 4.36-11.33 26.42-38.45 44.04-68.74 41.91-38.29-2.69-67.14-35.91-64.45-74.19C316.3 89.8 347.05 61.67 383.44 62c6.71.06 8.13 4.5 2.04 7.48zm-5.09-53.95h.18c63.75 0 115.91 52.15 115.91 115.9 0 63.75-52.23 115.91-115.91 115.91h-.18c-63.68 0-115.91-52.16-115.91-115.91s52.16-115.9 115.91-115.9z"/>'; 

}

function lightmode() {
    r.style.setProperty('--glass', 'rgba(255, 255, 255, 0.3)');
    r.style.setProperty('--textcolor', 'rgba(0, 0, 0, 0.9)');
    r.style.setProperty('--bluetheme', 'rgb(0, 80, 185)');
    r.style.setProperty('--bgcolor', 'white');
    setCookie("mode", "light", 30);

    mode=1;


    document.getElementById("modesvg").innerHTML = '<path id="lightsvg" d="M128.02 0h.18c22.03 0 42.83 5.66 61 15.6h210.38c30.89 0 59 12.65 79.38 33.04C499.35 68.99 512 97.1 512 128.02c0 30.92-12.66 59.03-33.02 79.4l-.42.38c-20.34 20.15-48.29 32.64-78.98 32.64H189.24c-18.17 9.93-38.98 15.6-61.04 15.6h-.18c-35.2 0-67.22-14.41-90.42-37.6C14.41 195.25 0 163.24 0 128.02s14.4-67.24 37.59-90.43l.91-.83C61.65 14.05 93.29 0 128.02 0zm-5.95 54.42c0-1.95.8-3.73 2.08-5 2.74-2.77 7.27-2.76 10.02-.01l.14.16a7.042 7.042 0 0 1 1.94 4.85v12.95c0 1.95-.8 3.73-2.08 5.01-2.75 2.75-7.27 2.75-10.02 0a7.084 7.084 0 0 1-2.08-5.01V54.42zm6.05 31.17c11.72 0 22.32 4.75 30 12.43 7.67 7.68 12.43 18.29 12.43 30 0 11.72-4.75 22.32-12.43 30s-18.28 12.43-30 12.43c-11.72 0-22.32-4.75-30.01-12.43-7.67-7.68-12.43-18.28-12.43-30 0-11.72 4.76-22.32 12.43-30 7.69-7.67 18.3-12.43 30.01-12.43zm-56.33-5.34a7.114 7.114 0 0 1-2.07-5.01c0-3.9 3.18-7.09 7.09-7.09 1.81 0 3.62.69 5 2.07l9.16 9.16a7.065 7.065 0 0 1 2.08 5.01c0 1.8-.7 3.62-2.08 5.01a7.057 7.057 0 0 1-5.01 2.08c-1.8 0-3.61-.7-5-2.07l-9.17-9.16zm-17.28 53.81c-1.95 0-3.73-.8-5-2.08-2.77-2.74-2.76-7.27-.01-10.01l.15-.14a7.04 7.04 0 0 1 4.86-1.94h12.94a7.082 7.082 0 0 1 7.09 7.09c0 1.95-.8 3.73-2.07 5.01a7.099 7.099 0 0 1-5.02 2.07H54.51zm25.82 50.28a7.049 7.049 0 0 1-5 2.07c-3.91 0-7.09-3.16-7.09-7.08 0-1.81.68-3.62 2.07-5.01l9.31-9.29a7.02 7.02 0 0 1 4.86-1.94 7.09 7.09 0 0 1 7.09 7.09c0 1.79-.69 3.6-2.08 4.99l-9.16 9.17zm53.82 17.29c0 1.94-.8 3.73-2.08 5-2.74 2.76-7.27 2.75-10.02 0l-.13-.15a7.033 7.033 0 0 1-1.94-4.85v-12.95c0-1.96.8-3.73 2.07-5.01 2.76-2.75 7.27-2.75 10.03 0a7.1 7.1 0 0 1 2.07 5.01v12.95zm50.28-25.83a7.055 7.055 0 0 1 2.07 5.01c0 3.89-3.18 7.09-7.08 7.09-1.81 0-3.63-.69-5.01-2.07l-9.16-9.16a7.095 7.095 0 0 1-2.07-5.02c0-3.9 3.18-7.09 7.08-7.09 1.8 0 3.61.7 5 2.08l9.17 9.16zm17.29-53.82c1.93 0 3.73.81 5 2.08 2.76 2.75 2.75 7.27 0 10.02l-.15.14a7.098 7.098 0 0 1-4.85 1.94h-12.95c-1.96 0-3.74-.8-5.01-2.08-2.76-2.75-2.76-7.27 0-10.02a7.049 7.049 0 0 1 5.01-2.08h12.95zM175.89 71.7a7.074 7.074 0 0 1 5-2.07c3.9 0 7.1 3.19 7.1 7.09 0 1.81-.69 3.62-2.07 5l-9.32 9.31a7.12 7.12 0 0 1-4.86 1.93c-3.91 0-7.09-3.18-7.09-7.09 0-1.8.7-3.61 2.08-5l9.16-9.17zm34.17-41.87c2.96 2.47 5.81 5.07 8.53 7.8 23.22 23.15 37.63 55.17 37.63 90.39s-14.42 67.23-37.6 90.42a130.2 130.2 0 0 1-8.5 7.77h189.46c26.83 0 51.24-10.91 69.02-28.5l.32-.35c17.79-17.79 28.85-42.35 28.85-69.34 0-26.99-11.06-51.55-28.85-69.35-17.77-17.8-42.33-28.84-69.34-28.84H210.06zm-82.04-14.71h.18c62.09 0 112.89 50.81 112.89 112.9 0 62.1-50.86 112.9-112.89 112.9h-.18c-62.03 0-112.9-50.8-112.9-112.9 0-62.09 50.81-112.9 112.9-112.9z"/>'; 


}

function checkcookie() {
    let modecookie = getCookie("mode");

    if (modecookie==="light") {
        lightmode();
    }
    else if (modecookie==="dark") {
        darkmode();
    }
    else {
        lightmode();
    }
}

function switchmode() {
  if (mode===1) {
    darkmode();
  }
  else {
    lightmode();
  }
}