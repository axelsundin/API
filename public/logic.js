//global variable saving latest search results
let latestSearchObject = undefined;

//Fetches users list at start
getList();

async function getList() {
  const list = document.getElementById("list");
  clearElementChild(list.id);

  const listItems = await makeRequest("http://localhost:3000/api", "GET");
  renderListItems(listItems);
}

async function postItem(item) {
  const response = await makeRequest("http://localhost:3000/api", "POST", item);
  getList();
}

async function removeItem(item) {
  const response = await makeRequest("http://localhost:3000/api", "DELETE", {
    ID: item,
  });
  getList();
}

//Search with multiple results
async function searchMultiple() {
  const searchInput = document.getElementById("searchInput");
  let resultDiv = document.getElementById("resultDiv");
  clearElementChild(resultDiv.id);

  const response = await makeSearchRequest(
    `http://www.omdbapi.com/?s=${searchInput.value}&apikey=b4a443f9`
  );
  latestSearchObject = response.Search;
  if (response.Response === "True") {
    renderSearchItems(response.Search);
  } else if (response.Response === "False") {
    const title = document.createElement("h3");
    title.innerText = response.Error;
    resultDiv.appendChild(title);
  }
}

async function searchSingle(reqObject) {
  const response = await makeSearchRequest(
    `http://www.omdbapi.com/?i=${reqObject.id}&apikey=b4a443f9`
  );
  if (reqObject.action === "render") {
    renderSingleSearchItem(response);
  } else if (reqObject.action === "post") {
    postItem(response);
  }
}

//Requests to local API
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

//Requests to external API
async function makeSearchRequest(url) {
  try {
    const response = await fetch(url);

    const result = await response.json();

    return result;
  } catch (err) {
    console.log(err);
  }
}

//clears element
function clearElementChild(element) {
  let elementToClear = document.getElementById(element);
  let child = elementToClear.lastElementChild;
  while (child) {
    elementToClear.removeChild(child);
    child = elementToClear.lastElementChild;
  }
}
