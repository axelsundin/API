//Renders single item from search result object
function renderSingleSearchItem(object) {
  let resultDiv = document.getElementById("resultDiv");
  clearElementChild(resultDiv.id);
  console.log("renderSingleSearchItem");
  console.log(object);
  const singleItem = document.createElement("div");
  singleItem.className = "singleItem";
  resultDiv.appendChild(singleItem);
  const addBtn = document.createElement("button");
  addBtn.innerText = "Add to list";
  addBtn.addEventListener("click", () => postItem(object));
  singleItem.appendChild(addBtn);
  const prevBtn = document.createElement("button");
  prevBtn.innerText = "Return to results";
  prevBtn.addEventListener("click", () => {
    clearElementChild(resultDiv.id);
    renderSearchItems(latestSearchObject);
  });
  singleItem.appendChild(prevBtn);
  const title = document.createElement("h4");
  title.innerText = `${object.Title} (${object.Year})`;
  singleItem.appendChild(title);
  const imgDiv = document.createElement("div");
  imgDiv.style.width = "80%";
  resultDiv.appendChild(imgDiv);
  const poster = document.createElement("img");
  if (object.Poster === "N/A") {
    poster.src = "https://m.media-amazon.com/images/S/sash/mwwP38NFnDXdP7H.png";
  } else {
    poster.src = object.Poster;
  }
  poster.alt = object.Poster;
  imgDiv.appendChild(poster);
}

//Renders single item from users list (data.json)
function renderSingleItem(object) {
  console.log("renderSingleItem");
  console.log(object);
  const singleItem = document.createElement("div");
  singleItem.className = "singleItem";
  list.appendChild(singleItem);
  const removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  removeBtn.addEventListener("click", () => removeItem(object.Title));
  singleItem.appendChild(removeBtn);
  const prevBtn = document.createElement("button");
  prevBtn.innerText = "Return to list";
  prevBtn.addEventListener("click", () => {
    getList();
  });
  singleItem.appendChild(prevBtn);
  const title = document.createElement("h4");
  title.innerText = `${object.Title} (${object.Year})`;
  singleItem.appendChild(title);
  const imgDiv = document.createElement("div");
  imgDiv.style.width = "80%";
  singleItem.appendChild(imgDiv);
  const poster = document.createElement("img");
  if (object.Poster === "N/A") {
    poster.src = "https://m.media-amazon.com/images/S/sash/mwwP38NFnDXdP7H.png";
  } else {
    poster.src = object.Poster;
  }
  poster.alt = object.Poster;
  imgDiv.appendChild(poster);
}
