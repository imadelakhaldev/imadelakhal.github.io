const BLACKLISTED_KEY_CODES = [38];
const COMMANDS = {
  help:
    'Supported commands: <span class="code">about</span>, <span class="code">experience</span>, <span class="code">education</span>, <span class="code">skills</span>, <span class="code">resume</span>, <span class="code">contact</span>',
  about:
    "Hello 👋<br>I'm Imad Elakhal. 19 years old web & mobile developer currently living in Morocco. I enjoy the limitless potential of impact that I have using technology, programming, and creativity. Outside of coding, you can find me reading books, or traveling.",
  skills:
    '<span class="code">Languages:</span> C/C++, HTML, CSS, JavaScript & Java.<br><span class="code">Technologies:</span> Git, SQL & Firebase.<br><span class="code">Frameworks:</span> Bootstrap & jQuery.',
  education:
    "Higher Secondary, Morocco.<br>Khan Academy - Computer Science.<br>42 Bootcamp - C Programming.<br>Udacity - Full Stack Developer Track.<br>And a lot of self learning.",
  resume: "<a href='./resume.pdf' class='success link'>resume.pdf</a>",
  experience: "<a href='https://www.tastech.com/' target='_blank' class='success link'>Online Restaurant Delivery System.</a><br>Freelancing for 4 years.",
  contact:
    "You can contact me on any of following links:<br><a href='https://www.facebook.com/Elakhal/' target='_blank' class='success link'>Facebook</a> ,<a href='https://www.instagram.com/Elakhal/' target='_blank' class='success link'>Instagram</a>, <a href='https://www.linkedin.com/in/Elakhal/' target='_blank' class='success link'>Linkedin.</a><br>You can email me at: imadelakhaldev@gmail.com"
};
let userInput, terminalOutput;

const app = () => {
  userInput = document.getElementById("userInput");
  terminalOutput = document.getElementById("terminalOutput");
  document.getElementById("dummyKeyboard").focus();
  console.log("Application loaded");
};

const execute = function executeCommand(input) {
  let output;
  input = input.toLowerCase();
  if (input.length === 0) {
    return;
  }
  output = `<div class="terminal-line"><span class="success">➜</span> <span class="directory">~</span> ${input}</div>`;
  if (!COMMANDS.hasOwnProperty(input)) {
    output += `<div class="terminal-line">no such command: ${input}</div>`;
    console.log("Oops! no such command");
  } else {
    output += COMMANDS[input];
  }

  terminalOutput.innerHTML = `${
    terminalOutput.innerHTML
  }<div class="terminal-line">${output}</div>`;
  terminalOutput.scrollTop = terminalOutput.scrollHeight;
};

const key = function keyEvent(e) {
  const input = userInput.innerHTML;

  if (BLACKLISTED_KEY_CODES.includes(e.keyCode)) {
    return;
  }

  if (e.key === "Enter") {
    execute(input);
    userInput.innerHTML = "";
    return;
  }

  userInput.innerHTML = input + e.key;
};

const backspace = function backSpaceKeyEvent(e) {
  if (e.keyCode !== 8 && e.keyCode !== 46) {
    return;
  }
  userInput.innerHTML = userInput.innerHTML.slice(
    0,
    userInput.innerHTML.length - 1
  );
};

document.addEventListener("keydown", backspace);
document.addEventListener("keypress", key);
document.addEventListener("DOMContentLoaded", app);