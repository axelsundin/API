let currentItem = undefined;

getList();

function clearListClass() {
  var list = document.getElementById("list");
  var child = list.lastElementChild;
  while (child) {
    list.removeChild(child);
    child = list.lastElementChild;
  }
}

async function getList() {
  clearListClass();
  const list = document.getElementById("list");

  const listItems = await makeRequest("http://localhost:3000/api", "GET");
  listItems.map((item) => {
    const div = document.createElement("div");
    const text = document.createElement("h3");
    const removeBtn = document.createElement("button");
    div.className = "listItem";
    text.innerText = item.Title;
    removeBtn.innerText = "Remove";

    list.appendChild(div);
    div.appendChild(text);
    div.appendChild(removeBtn);

    removeBtn.onclick = () => removeItem(item.Title);
  });
}

async function postItem(item) {
  const response = await makeRequest("http://localhost:3000/api", "POST", {
    Title: item.Title,
  });
  console.log(response);
  getList();
}

async function removeItem(item) {
  const response = await makeRequest("http://localhost:3000/api", "DELETE", {
    Title: item,
  });
  console.log(response);
  getList();
}

async function searchMovie() {
  const div = document.getElementById("search");
  const searchInput = document.getElementById("searchInput");
  const result = document.getElementById("result");
  const poster = document.getElementById("poster");
  const response = await makeSearchRequest(
    `http://www.omdbapi.com/?t=${searchInput.value}&apikey=b4a443f9`
  );

  currentItem = response;

  if (response.Response === "True") {
    console.log(response);
    result.innerText = `${response.Title} (${response.Year}) ${response.imdbRating}(IMDb) `;
    poster.src = response.Poster;
    poster.alt = response.Poster;
    const addBtn = document.createElement("button");
    addBtn.innerText = "Add to list";
    addBtn.onclick = () => postItem(currentItem);
    div.appendChild(addBtn);
  } else {
    console.log(response);
    result.innerText = "Couldn't find a match...";
  }
}

async function makeRequest(url, method, body) {
  try {
    const response = await fetch(url, {
      headers: { "Content-type": "application/json" },
      method,
      body: JSON.stringify(body),
    });

    const result = await response.json();

    return result;
  } catch (err) {
    console.log(err);
  }
}

async function makeSearchRequest(url) {
  try {
    const response = await fetch(url);

    const result = await response.json();

    return result;
  } catch (err) {
    console.log(err);
  }
}
