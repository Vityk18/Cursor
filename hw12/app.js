// Characters info
const getInfo = document.querySelector("#getInfo");
getInfo.onclick = getInfoFunc;

async function getInfoFunc() {
  try {
    document.getElementById("getInfoOutput").innerHTML =
      "Завантажую персонажів... Грьобан*й бекендер...";
    let result = ``;
    const resp = await fetch("https://swapi.dev/api/films/");
    const data = await resp.json();
    const dataArr = data.results[1].characters;
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
showAllPlanets.onclick = showAllPlanetsFunc;

async function showAllPlanetsFunc() {
  try {
    document.getElementById("getPlanetsOutput").innerHTML =
      "Завантажую планети... Надіюсь він згорить на сонці...";
    let result = ``;
    const resp = await fetch("https://swapi.dev/api/planets/");
    const data = await resp.json();
    const dataArr = data.results;
    // console.log(dataArr);
    dataArr.forEach((element) => {
      result += `${element.name} <br>`
      document.getElementById("getPlanetsOutput").innerHTML = result;
    });
  } catch (error) {
    console.log(error);
  }
}

