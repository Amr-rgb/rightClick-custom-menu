const btn = document.getElementById("btn");
const menu = document.getElementById("menu");

document.body.onmousemove = function (ev) {
  btn.oncontextmenu = function (e) {
    e.preventDefault();

    menu.style.top = ev.pageY + "px";
    menu.style.left = ev.pageX + "px";
    menu.style.opacity = 0.95;
    menu.style.pointerEvents = "initial";
  };
};

function resetMenu() {
  menu.style.opacity = 0;
  menu.style.pointerEvents = "none";
}

document.body.onclick = resetMenu;
