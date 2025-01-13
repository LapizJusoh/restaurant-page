function addMenu() {
  const content = document.querySelector("#content");
  const div = document.createElement("div");
  const p = document.createElement("p");
  
  div.className = "stuff";
  p.innerHTML = `This is Menu!`;
  content.appendChild(div);
  div.appendChild(p);
};

export default addMenu;