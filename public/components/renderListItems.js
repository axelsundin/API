//Renders items from search result object
function renderSearchItems(listArray) {
  listArray.map((result) => {
    const listItem = document.createElement("div");
    listItem.className = "listItem";
    resultDiv.appendChild(listItem);
    const imgDiv = document.createElement("div");
    imgDiv.style.width = "22%";
    listItem.appendChild(imgDiv);
    const poster = document.createElement("img");
    poster.src = result.Poster;
    poster.alt = result.Poster;
    imgDiv.appendChild(poster);
    const div = document.createElement("div");
    div.style.width = "78%";
    listItem.appendChild(div);
    const title = document.createElement("h4");
    title.innerText = `${result.Title} (${result.Year})`;
    const addBtn = document.createElement("button");
    addBtn.innerText = "Add to list";
    addBtn.onclick = () => postItem(result);
    div.appendChild(title);
    div.appendChild(addBtn);
  });
}

//Renders items from users list (data.json)
function renderListItems(listArray) {
  listArray.map((result) => {
    const listItem = document.createElement("div");
    listItem.className = "listItem";
    list.appendChild(listItem);
    const imgDiv = document.createElement("div");
    imgDiv.style.width = "22%";
    listItem.appendChild(imgDiv);
    const poster = document.createElement("img");
    poster.src = result.Poster;
    poster.alt = result.Poster;
    imgDiv.appendChild(poster);
    const div = document.createElement("div");
    div.style.width = "78%";
    listItem.appendChild(div);
    const title = document.createElement("h4");
    title.innerText = `${result.Title} (${result.Year})`;
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.onclick = () => removeItem(result.Title);
    div.appendChild(title);
    div.appendChild(removeBtn);
  });
}
