function addStyleSheet(string) {
  let link = document.createElement("link");
  link.setAttribute("rel", "stylesheet");
  link.setAttribute("class", "set-rtl");
  link.type = "text/css";
  link.href = string;
  document.head.appendChild(link);
}

export function swapStyleSheet(sheetA, sheetB) {
  document.querySelectorAll("link[rel=stylesheet]").forEach((element) => {
    element.remove();
    addStyleSheet(element.href.replace(sheetA, sheetB));
  });
}

export default swapStyleSheet;
