const accessKey = "ESjefLBB5GHFv7OEzrtg3l-YP9CrIkCSBRAcs0idVxk";

const searchForm = document.getElementById("search-form");
const searchBox = document.getElementById("search-box");
const searchResult = document.getElementById("search-result");
const showMoreBtn = document.getElementById("show-more-btn");

let keyword = "";
let page = 1;

async function searchImages() {
  keyword = searchBox.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accessKey}&per_page=12`;

  const response = await fetch(url);
  const data = await response.json();

  if (page === 1) {
    searchResult.innerHTML = ""; // Clear search results only on first page
  }

  const results = data.results;

  results.map((result) => {
    const image = document.createElement("img");
    image.src = result.urls.small;

    const imageLink = document.createElement("a");
    imageLink.href = result.links.html;
    imageLink.target = "_blank";

    imageLink.appendChild(image);
    searchResult.appendChild(imageLink);
  });

  // Check for empty results within the loop
  if (data.total === 0) {
    const message = document.createElement("p");
    message.innerText = "No Images Found!"; // More descriptive message
    searchResult.appendChild(message);
    showMoreBtn.style.display = "none";
    return; // Exit the loop to avoid creating empty elements
  }

  showMoreBtn.style.display = data.total > 12 ? "block" : "none"; // Show button only if more results
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  page = 1;
  searchImages();
});

showMoreBtn.addEventListener("click", () => {
  page++;
  searchImages();
});
