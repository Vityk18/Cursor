// Characters info
const getInfo = document.querySelector("#getInfo");
const input = document.querySelector("#input");
getInfo.addEventListener("click", getInfoFunc);

async function getInfoFunc() {
  try {
    document.getElementById("getInfoOutput").innerHTML =
      "Завантажую персонажів... Грьобан*й бекендер...";
    let result = ``;
    const resp = await fetch("https://swapi.dev/api/films/");
    const data = await resp.json();
    const episode = data.results.find((item) => item.episode_id == input.value);
    console.log(episode);
    const dataArr = episode.characters;
    dataArr.forEach(async (element) => {
      const tempResp = await fetch(element);
      const tempData = await tempResp.json();
      result += `Ім'я персонажа: ${tempData.name}, рік народження: ${tempData.birth_year}, стать: ${tempData.gender} <br>`;
      document.getElementById("getInfoOutput").innerHTML = result;
    });
  } catch (error) {
    console.log(error);
  }
}

// Planets
const showAllPlanets = document.querySelector("#getPlanets");
showAllPlanets.addEventListener("click", showAllPlanetsFunc);

async function showAllPlanetsFunc() {
  try {
    document.getElementById("getPlanetsOutput").innerHTML =
      "Завантажую планети... Надіюсь він згорить на сонці...";

    showResults(1);
  } catch (error) {
    console.log(error);
  }
}

async function showResults(page) {
  let result = ``;
  const resp = await fetch(`https://swapi.dev/api/planets/?page=${page}`);
  const data = await resp.json();
  const dataArr = data.results;
  // console.log(dataArr);
  dataArr.forEach((element) => {
    result += `${element.name} <br>`;
    document.getElementById("getPlanetsOutput").innerHTML = result;
  });

  if (page > 1) {
    const backButton = document.createElement("button");
    backButton.id = "back";
    backButton.textContent = "previus page";
    document.getElementById("getPlanetsOutput").appendChild(backButton);

    backButton.addEventListener("click", wow);

    async function wow() {
      showResults(page - 1);
    }
  }

  if (page < 6) {
    const nextButton = document.createElement("button");
    nextButton.id = "next";
    nextButton.textContent = "Next page";
    document.getElementById("getPlanetsOutput").appendChild(nextButton);

    nextButton.addEventListener("click", wow);

    async function wow() {
      showResults(page + 1);
    }
  }
}

