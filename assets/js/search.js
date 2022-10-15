// Custom client-side search function
var nonMatches = [];
var headings = [];

function debounce(func, wait) {
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
  let term;
  const searchInput = document.getElementById('search');
  const searchIcon = document.getElementById('search-icon');

  // Escape clears everything
  if (ev.key == 'Escape') {
    term = '';
    searchInput.value = '';
  } else {
    term = searchInput.value;
  }

  // search contents of the paragraph tags on this page
  if (term) {
    nonMatches = [];
    let content;
    if (document.URL.includes('publications')) {
      console.log("searching pubs!");
      // Searching paragraphs except the first one
      content = document.getElementsByTagName('p');
      content = Array.from(content).slice(1);
      content = content.filter(elem => elem.innerHTML.includes('<strong>'));

      // Hide headings by default when searching otherwise it looks weird
      headings = Array.from(document.querySelectorAll("h1, h2, h3, h4, h5, h6"));
      headings.forEach(h => h.style.display = "none");

    } else if (document.URL.includes('blog')) {
      console.log('search posts!');
      // All header, content, date, tags have post-* in class name
      content = document.getElementsByClassName("group");
      content = Array.from(content);
    }

    // Actually search by setting non-matches to display none
    content.forEach((pub) => {
      let elem = document.URL.includes('publications') ? pub : pub.parentNode;
      if (!elem.innerText.toLowerCase().includes(term.toLowerCase())) {
        nonMatches.push(elem);
        elem.style.display = "none";
      } else {
        elem.style.display = 'block';
      }
    });

    // Style the input box red if there are no results
    if (nonMatches.length === content.length) {
      searchInput.classList.add('no-results');
      searchIcon.classList.add('no-results');
    } else {
      searchInput.classList.remove('no-results');
      searchIcon.classList.remove('no-results');
    }
  } else {
    // Reset everything
    console.log('reset');
    nonMatches.forEach(m => m.style.display = 'block');
    nonMatches = [];
    if (headings.length) {
      headings.forEach(h => h.style.display = 'block');
      headings = [];
    }
    searchInput.classList.remove('no-results');
    searchIcon.classList.remove('no-results');
  }
}



document.addEventListener('DOMContentLoaded', () => {
  // Setup search on page
  const searchInput = document.getElementById('search');
  const debouncedSearch = debounce(search, 50);
  searchInput.addEventListener('input',
    debouncedSearch
  );

});