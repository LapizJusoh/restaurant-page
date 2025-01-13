import "./styles.css";

(() => {
  const content = document.querySelector("#content");
  const div = document.createElement("div");
  const p = document.createElement("p");
  
  div.className = "stuff";
  p.innerHTML = `This is Home!`;
  content.appendChild(div);
  div.appendChild(p);
})();

(() => {
  const content = document.querySelector("#content");
  const div = document.createElement("div");
  const p = document.createElement("p");
  
  div.className = "stuff";
  p.innerHTML = `This is Menu!`;
  content.appendChild(div);
  div.appendChild(p);
})();

(() => {
  const content = document.querySelector("#content");
  const div = document.createElement("div");
  const p = document.createElement("p");
  
  div.className = "stuff";
  p.innerHTML = `This is Contact Us!`;
  content.appendChild(div);
  div.appendChild(p);
})();