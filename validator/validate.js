import "../common.scss";
import "./validator.scss";

let oddRun = true;

function returnMock(mockNumber, className) {
  return (`<span class="${className}">Message (${mockNumber})</span><br> Location in the spreadsheet<br> <br></br>`)
}

// form Elements
const form = document.getElementById("fileForm");
const validateBtn = document.getElementById("validate-btn");
//const uploadBtn = document.getElementById("upload-btn");

// log Elements
const log = document.getElementById("log");
const logTitle = document.getElementById("logTitle");

// logTitle states
let logTitleInitial = "Upload a file to start the validator"
let logTitle3Warn1Err = `Found <span class="warn">03 Warnings</span> and <span class="error">01 Error</span>`
let LogTitleNoErrors = `Spreadsheet validated, 0 issues found.`

function validate(e) {
  e.preventDefault();
  console.log(e.target[0].files[0])
  logTitle.classList.add("none");
  log.innerHTML = ""
  //uploadBtn.classList.add("none");

  if(oddRun){
    setTimeout(() => {
      logTitle.innerHTML = logTitle3Warn1Err
      logTitle.classList.remove("none");
      log.innerHTML = `...`;
    }, 200);
    setTimeout(() => {
      log.innerHTML = returnMock("1/3", "warn") + "...";
    }, 500);
    setTimeout(() => {
      log.innerHTML = returnMock("1/3", "warn") + returnMock("2/3", "warn") + "...";
    }, 800);
    setTimeout(() => {
      log.innerHTML = returnMock("1/3", "warn") + returnMock("2/3", "warn") + returnMock("3/3", "warn") + "...";
    }, 1100);
    setTimeout(() => {
      log.innerHTML = returnMock("1/3", "warn") + returnMock("2/3", "warn") + returnMock("3/3", "warn") + returnMock("1/1", "error");
      oddRun = !oddRun;
    }, 1400);
  } else {
    setTimeout(() => {
      logTitle.innerHTML = LogTitleNoErrors
      logTitle.classList.remove("none");
      oddRun = !oddRun;
    }, 200);
  }
  
}
form.addEventListener("submit", validate);
