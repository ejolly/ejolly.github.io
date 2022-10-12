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

function search(ev) {
    let term
    const searchInput = document.getElementById('search')
    if (ev.key == 'Escape') {
        term = ''
        searchInput.value = ''
    } else {
        term = searchInput.value
    }
    // search contents of the paragraph tags on this page
    if (term) {
        console.log("search!");
        const ps = document.getElementsByTagName('p');
        const pubs = Array.from(ps).slice(1);
        let matches = [];
        pubs.forEach((pub) => {
            if (pub.innerHTML.includes('<strong>')) {
                if (!pub.innerText.toLowerCase().includes(term.toLowerCase())) {
                    matches.push(pub);
                    pub.style.display = "none";
                }
            }
        });
        return matches;
    } else {
        console.log('reset');
        const ps = document.getElementsByTagName('p');
        const pubs = Array.from(ps).slice(1);
        pubs.forEach((pub) => {
            if (pub.innerHTML.includes('<strong>')) {
                pub.style.display = "block";
            }
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('search');
    const debouncedSearch = debounce(search, 50)
    searchInput.addEventListener('keyup',
        debouncedSearch
    );
});