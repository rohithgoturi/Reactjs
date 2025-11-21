import a from "./app.js";

var h1 = document.createElement('h1');
h1.innerHTML = "Hello from js 2";
document.body.appendChild(h1);

var h2 = document.createElement(h2);
h2.innerHTML = `imported value ${a}`;
document.body.appendChild(h2);
