export function splitChars(element: HTMLElement) {
  const text = element.innerText;
  element.innerHTML = "";

  return text.split("").map((char) => {
    const span = document.createElement("span");
    span.textContent = char === " " ? "\u00A0" : char;
    element.appendChild(span);
    return span;
  });
}