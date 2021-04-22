import "../common.scss";
import "./validator.scss";

let oddRun = true;

const mockText1 = `<span class="sucess">Lorem (1/4)</span><br> ipsum dolor sit amet consectetur adipisicing elit. <br>br
  Aspernatur nemo explicabo dolore recusandae incidunt fuga eos, <br> <br>`;

const mockText2fail = `<span class="fail">quisquam (2/4)</span><br> hic debitis nesciunt in dignissimos, saepe sapiente labore illo omnis atque illum doloremque?<br> <br>`;

const mockText2sucess = `<span class="sucess">quisquam (2/4)</span><br> hic debitis nesciunt in dignissimos, saepe sapiente labore illo omnis atque illum doloremque?<br> <br>`;

const mockText3 = `<span class="sucess">Lorem (3/4)</span><br> ipsum dolor sit amet consectetur adipisicing elit. Perferendis necessitatibus veritatis asperiores ex iste voluptatibus, vero possimus, et sint dolor minus voluptates libero ullam at magni voluptate culpa aliquam? Aperiam.<br> <br>`;

const mockText4 = `<span class="sucess">Lorem (4/4)</span><br> ipsum dolor sit, amet consectetur adipisicing elit. Animi fuga magnam tempora placeat esse praesentium. Praesentium impedit ipsum voluptas culpa.<br> <br>`;

// form Elements
const form = document.getElementById("fileForm");
const validateBtn = document.getElementById("validate-btn");
const uploadBtn = document.getElementById("upload-btn");

// log Elements
const log = document.getElementById("log");
const logTitle = document.getElementById("logTitle");

function validate(e) {
  e.preventDefault();
  logTitle.classList.add("none");
  uploadBtn.classList.add("none");
  log.innerHTML = `...`;

  let currentMock2 = oddRun ? mockText2fail : mockText2sucess;
  setTimeout(() => {
    log.innerHTML = mockText1 + "...";
  }, 500);
  setTimeout(() => {
    log.innerHTML = mockText1 + currentMock2 + "...";
  }, 1000);
  setTimeout(() => {
    log.innerHTML = mockText1 + currentMock2 + mockText3 + "...";
  }, 1500);
  setTimeout(() => {
    log.innerHTML = mockText1 + currentMock2 + mockText3 + mockText4;
    if (!oddRun) {
      uploadBtn.classList.remove("none");
    }
    oddRun = !oddRun;
  }, 2000);
}
form.addEventListener("submit", validate);
