let latestSearchObject = undefined;

getList();

function clearElementChild(element) {
  let elementToClear = document.getElementById(element);
  let child = elementToClear.lastElementChild;
  while (child) {
    elementToClear.removeChild(child);
    child = elementToClear.lastElementChild;
  }
}

async function getList() {
  const list = document.getElementById("list");
  clearElementChild(list.id);

  const listItems = await makeRequest("http://localhost:3000/api", "GET");
  renderListItems(listItems);
}

async function postItem(item) {
  console.log("postItem()");
  console.log(item);
  const response = await makeRequest("http://localhost:3000/api", "POST", item);
  console.log(response);
  getList();
}

async function removeItem(item) {
  const response = await makeRequest("http://localhost:3000/api", "DELETE", {
    Title: item,
  });
  getList();
}

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
  console.log("searchSingle:");
  console.log(response);
  if (reqObject.action === "render") {
    renderSingleSearchItem(response);
  } else if (reqObject.action === "post") {
    postItem(response);
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
