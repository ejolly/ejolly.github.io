// Copy button that indicates a successful copy.

function addCopyButtons() {

  // Get all code blocks
  let blocks = document.querySelectorAll("pre");

  blocks.forEach((block) => {
    // only add a button if browser supports Clipboard API
    if (navigator.clipboard) {
      let button = document.createElement("button");
      button.classList.add('copy-button');
      button.addEventListener("click", copyCode, false);
      button.addEventListener("touchend", copyCode, false);
      button.innerText = 'Copy Code';
      block.appendChild(button);
    }
  });

  async function copyCode(e) {
    e.preventDefault();
    const pre = e.srcElement.parentElement;
    let code = pre.querySelector("code");
    e.target.innerText = 'Copied!';
    await navigator.clipboard.writeText(code.innerText);
    console.log(code.innerText)
    setTimeout(() => {
      e.target.innerText = 'Copy Code';
    }, 1000);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  addCopyButtons();
});