// Copy button that appears on hover for code blocks. Also appears if the code block is
// tapped/clicked on to indicate a successful copy.

function addCopyButtons() {

  // Get all code blocks
  let blocks = document.querySelectorAll("pre");

  blocks.forEach((block) => {
    // only add a button if browser supports Clipboard API
    if (navigator.clipboard) {
      let button = document.createElement("button");
      button.classList.add('copy-button');
      button.innerText = 'Copied!';
      button.style.display = 'none';
      block.appendChild(button);
      block.addEventListener("click", copyCode);
      block.addEventListener("mouseenter", () => {
        button.innerText = 'Copy Code';
        button.style.display = 'unset';
      });
      // Reset
      block.addEventListener("mouseleave", () => {
        button.style.display = 'none';
        button.innerText = 'Copied!';
      });
    }
  });

  async function copyCode(e) {
    let text;
    let pre;
    if (e.target !== e.currentTarget) {
      // console.log('child clicked')
      const code = e.srcElement.parentElement;
      pre = code.parentElement;
      text = code.innerText;
    } else {
      // console.log('pre clicked')
      pre = e.srcElement;
      let code = pre.querySelector("code");
      text = code.innerText;
    }
    let button = pre.querySelector('button');
    button.innerText = 'Copied!';
    await navigator.clipboard.writeText(text);
    button.style.display = 'unset';
    setTimeout(() => {
      button.style.display = 'none';
    }, 1000);
  }
}
document.addEventListener('DOMContentLoaded', () => {
  addCopyButtons();
});