//Renders single item from search result object
function renderSingleSearchItem(object) {
  let resultDiv = document.getElementById("resultDiv");
  clearElementChild(resultDiv.id);

  console.log("renderSingleSearchItem");
  console.log(object);

  const singleItem = document.createElement("div");
  singleItem.className = "singleItem";
  resultDiv.appendChild(singleItem);

  const btnDiv = document.createElement("div");
  btnDiv.className = "btnDiv";
  singleItem.appendChild(btnDiv);

  const addBtn = document.createElement("button");
  addBtn.innerText = "Add to list";
  addBtn.addEventListener("click", () => postItem(object));
  btnDiv.appendChild(addBtn);

  const prevBtn = document.createElement("button");
  prevBtn.innerText = "Return to results";
  prevBtn.addEventListener("click", () => {
    clearElementChild(resultDiv.id);
    renderSearchItems(latestSearchObject);
  });
  btnDiv.appendChild(prevBtn);

  const topDiv = document.createElement("div");
  topDiv.className = "topDiv";
  singleItem.appendChild(topDiv);

  const title = document.createElement("h2");
  title.innerText = `${object.Title}`;
  topDiv.appendChild(title);

  const genre = document.createElement("h5");
  genre.innerText = `${object.Genre}`;
  topDiv.appendChild(genre);

  const poster = document.createElement("img");
  poster.className = "posterSingle";
  if (object.Poster === "N/A") {
    poster.src = "https://m.media-amazon.com/images/S/sash/mwwP38NFnDXdP7H.png";
  } else {
    poster.src = object.Poster;
  }
  poster.alt = object.Poster;
  topDiv.appendChild(poster);

  const hr = document.createElement("hr");
  topDiv.appendChild(hr);

  const plot = document.createElement("p");
  plot.innerText = `${object.Plot}`;
  topDiv.appendChild(plot);

  const hr2 = document.createElement("hr");
  topDiv.appendChild(hr2);

  const info = document.createElement("h5");
  info.innerText = `Actors: ${object.Actors}/10
  Director: ${object.Director}
  Writer: ${object.Writer}`;
  topDiv.appendChild(info);

  const hr3 = document.createElement("hr");
  topDiv.appendChild(hr3);

  const additionalInfo = document.createElement("h5");
  additionalInfo.innerText = `Rating: ${object.imdbRating}
  Released: ${object.Released}
  Runtime: ${object.Runtime}
  Country: ${object.Country}
  Language: ${object.Language}`;
  topDiv.appendChild(additionalInfo);

  /* const singleItem = document.createElement("div");
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
  singleItem.appendChild(imgDiv);
  const poster = document.createElement("img");
  poster.className = "posterSingle";
  if (object.Poster === "N/A") {
    poster.src = "https://m.media-amazon.com/images/S/sash/mwwP38NFnDXdP7H.png";
  } else {
    poster.src = object.Poster;
  }
  poster.alt = object.Poster;
  imgDiv.appendChild(poster); */
}

//Renders single item from users list (data.json)
function renderSingleItem(object) {
  console.log("renderSingleItem");
  console.log(object);
  const singleItem = document.createElement("div");
  singleItem.className = "singleItem";
  list.appendChild(singleItem);

  const btnDiv = document.createElement("div");
  btnDiv.className = "btnDiv";
  singleItem.appendChild(btnDiv);

  const removeBtn = document.createElement("button");
  removeBtn.innerText = "Remove";
  removeBtn.addEventListener("click", () => removeItem(object.imdbID));
  btnDiv.appendChild(removeBtn);

  const prevBtn = document.createElement("button");
  prevBtn.innerText = "Return to list";
  prevBtn.addEventListener("click", () => {
    getList();
  });
  btnDiv.appendChild(prevBtn);

  const topDiv = document.createElement("div");
  topDiv.className = "topDiv";
  singleItem.appendChild(topDiv);

  const title = document.createElement("h2");
  title.innerText = `${object.Title}`;
  topDiv.appendChild(title);

  const genre = document.createElement("h5");
  genre.innerText = `${object.Genre}`;
  topDiv.appendChild(genre);

  const poster = document.createElement("img");
  poster.className = "posterSingle";
  if (object.Poster === "N/A") {
    poster.src = "https://m.media-amazon.com/images/S/sash/mwwP38NFnDXdP7H.png";
  } else {
    poster.src = object.Poster;
  }
  poster.alt = object.Poster;
  topDiv.appendChild(poster);

  const hr = document.createElement("hr");
  topDiv.appendChild(hr);

  const plot = document.createElement("p");
  plot.innerText = `${object.Plot}`;
  topDiv.appendChild(plot);

  const hr2 = document.createElement("hr");
  topDiv.appendChild(hr2);

  const info = document.createElement("h5");
  info.innerText = `Actors: ${object.Actors}/10
  Director: ${object.Director}
  Writer: ${object.Writer}`;
  topDiv.appendChild(info);

  const hr3 = document.createElement("hr");
  topDiv.appendChild(hr3);

  const additionalInfo = document.createElement("h5");
  additionalInfo.innerText = `Rating: ${object.imdbRating}
  Released: ${object.Released}
  Runtime: ${object.Runtime}
  Country: ${object.Country}
  Language: ${object.Language}`;
  topDiv.appendChild(additionalInfo);
}
