function addCopyButtons() {
    const copyButtonLabel = "Copy Code";

    // use a class selector if available
    let blocks = document.querySelectorAll("pre");

    blocks.forEach((block) => {
        // only add a button if browser supports Clipboard API
        if (navigator.clipboard) {
            let button = document.createElement("button");
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
            pre = code.parentElement
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

function addCopyClick() {

    // use a class selector if available
    let blocks = document.querySelectorAll("pre");

    blocks.forEach((block) => {
        // only add a button if browser supports Clipboard API
        if (navigator.clipboard) {
            block.addEventListener("click", copyCode);
        }
    });

    async function copyCode(event) {
        const pre = event.target;
        let code = pre.querySelector("code");
        let text = code.innerText;
        await navigator.clipboard.writeText(text);
        let button = document.createElement("button");
        button.innerText = 'Copied!';
        block.appendChild(button);
        setTimeout(() => {
            code.innerText = text;
        }, 1000);
    }
}
document.addEventListener('DOMContentLoaded', () => {

    // Setup copy buttons
    addCopyButtons();
    // addCopyClick()
});