const debounce = (func, wait) => {
    // Source: https://davidwalsh.name/javascript-debounce-function
    let timeout;

    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };

        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
};

// Custom client-side search function
let matches = [];
function search(ev) {
    let term;
    const searchInput = document.getElementById('search');

    // Escape clears everything
    if (ev.key == 'Escape') {
        term = '';
        searchInput.value = '';
    } else {
        term = searchInput.value;
    }

    // search contents of the paragraph tags on this page
    if (term) {
        let content;
        if (document.URL.includes('publications')) {
            console.log("searching pubs!");
            // Searching paragraphs except the first one
            content = document.getElementsByTagName('p');
            content = Array.from(content).slice(1);
            content = content.filter(elem => elem.innerHTML.includes('<strong>'));

       } else if (document.URL.includes('blog')) {
            console.log('search posts!');
            // All header, content, date, tags have post-* in class name
            content = document.getElementsByClassName("group")
            content = Array.from(content)
       }
        // Actually search
        content.forEach((pub) => {
            if (!pub.innerText.toLowerCase().includes(term.toLowerCase())) {
                let toHide = document.URL.includes('publications') ? pub : pub.parentNode
                matches.push(toHide);
                toHide.style.display = "none";
            }
        });
        return matches;
    } else {
        console.log('reset');
        matches.forEach(m => m.style.display = 'block');
        matches = [];
    }
}



document.addEventListener('DOMContentLoaded', () => {
    // Setup search
    const searchInput = document.getElementById('search');
    const debouncedSearch = debounce(search, 50);
    searchInput.addEventListener('input',
        debouncedSearch
    );

});