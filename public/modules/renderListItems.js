//Renders items from search result object
function renderSearchItems(listArray) {
  listArray.map((result) => {
    const listItem = document.createElement("div");
    listItem.className = "listItem";
    resultDiv.appendChild(listItem);

    const imgDiv = document.createElement("div");
    imgDiv.className = "imgDiv";
    listItem.appendChild(imgDiv);

    const poster = document.createElement("img");
    poster.className = "posterList";
    if (result.Poster === "N/A") {
      poster.src =
        "https://m.media-amazon.com/images/S/sash/mwwP38NFnDXdP7H.png";
    } else {
      poster.src = result.Poster;
    }
    poster.alt = result.Poster;
    imgDiv.appendChild(poster);

    const div = document.createElement("div");
    div.className = "textDiv";
    listItem.appendChild(div);

    const title = document.createElement("h4");
    title.innerText = `${result.Title} (${result.Year})`;
    div.appendChild(title);

    const addBtn = document.createElement("button");
    addBtn.innerText = "Add to list";
    addBtn.addEventListener("click", () =>
      searchSingle({ action: "post", id: result.imdbID })
    );
    div.appendChild(addBtn);

    const infoBtn = document.createElement("button");
    infoBtn.innerText = "Detailed info";
    infoBtn.addEventListener("click", () =>
      searchSingle({ action: "render", id: result.imdbID })
    );
    div.appendChild(infoBtn);
  });
}

//Renders items from users list (data.json)
function renderListItems(listArray) {
  listArray.map((result) => {
    const listItem = document.createElement("div");
    listItem.className = "listItem";
    list.appendChild(listItem);
    const imgDiv = document.createElement("div");
    imgDiv.className = "imgDiv";
    listItem.appendChild(imgDiv);
    const poster = document.createElement("img");
    poster.className = "posterList";
    if (result.Poster === "N/A") {
      poster.src =
        "https://m.media-amazon.com/images/S/sash/mwwP38NFnDXdP7H.png";
    } else {
      poster.src = result.Poster;
    }
    poster.alt = result.Poster;
    imgDiv.appendChild(poster);
    const div = document.createElement("div");
    div.className = "textDiv";
    listItem.appendChild(div);
    const title = document.createElement("h4");
    title.innerText = `${result.Title} (${result.Year})`;
    const removeBtn = document.createElement("button");
    removeBtn.innerText = "Remove";
    removeBtn.addEventListener("click", () => removeItem(result.imdbID));
    const infoBtn = document.createElement("button");
    infoBtn.innerText = "Detailed info";
    infoBtn.addEventListener("click", () => {
      clearElementChild(list.id);
      renderSingleItem(result);
    });
    div.appendChild(title);
    div.appendChild(removeBtn);
    div.appendChild(infoBtn);
  });
}
