//element selection
const inputBox1 = document.getElementById("description1");
const inputBox2 = document.getElementById("description2");
const inputBox3 = document.getElementById("description3");
const remaining1 = document.querySelector(".remaining1");
const remaining3 = document.querySelector(".remaining3");
const err = document.querySelector(".err");

//event handling for first input-box
inputBox1.addEventListener("input", (e) => {
  const input = e.target.value;
  remaining1.innerText = `${input.length}/500`;
});

//event handling for second input-box
inputBox2.addEventListener("input", (e) => {
  const input = e.target.value;

  if (input.length === 0) {
    inputBox2.classList.remove("border-slate-300");
    err.classList.remove("hidden");
    inputBox2.classList.add("border-red-300");
    err.classList.add("block");
  } else {
    inputBox2.classList.remove("border-red-300");
    err.classList.remove("block");
    inputBox2.classList.add("border-slate-300");
    err.classList.add("hidden");
  }
});

//event handling for first input-box
inputBox3.addEventListener("input", (e) => {
  const input = e.target.value;
  remaining3.innerText = `${input.length}/500`;
});
