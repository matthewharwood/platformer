const render = (obj, tileWidth, tileHeight) => {
  const el = document.createElement("span");

  el.textContent = obj.type;
  el.className = `${obj.name}`;
  el.style.position = "absolute";
  const pos = `translate3d(${obj.pos[0] * tileWidth}px, ${obj.pos[1] *
    tileHeight}px, 1px)`;

  el.style.transform = pos;

  // console.log(el);
  document.body.appendChild(el);
};

export { render };
