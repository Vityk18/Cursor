const A = document.getElementById("65");
const S = document.getElementById("83");
const D = document.getElementById("68");
const F = document.getElementById("70");
const G = document.getElementById("71");
const H = document.getElementById("72");
const J = document.getElementById("74");
const K = document.getElementById("75");
const L = document.getElementById("76");


A.onclick = testa;
S.onclick = tests;
D.onclick = testd;
F.onclick = testf;
G.onclick = testg;
H.onclick = testh;
J.onclick = testj;
K.onclick = testk;
L.onclick = testl;

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 65) {
    testa();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 83) {
    tests();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 68) {
    testd();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 70) {
    testf();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 71) {
    testg();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 72) {
    testh();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 74) {
    testj();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 75) {
    testk();
  }
});

document.addEventListener("keydown", function (event) {
  if (event.keyCode === 76) {
    testl();
  }
});

function testa() {
  document.getElementById("a11").play();
  A.classList.add("playing");
  setTimeout(() => A.classList.remove("playing"), 1000);
}

function tests() {
  document.getElementById("a22").play();
  S.classList.add("playing");
  setTimeout(() => S.classList.remove("playing"), 1000);
}

function testd() {
  document.getElementById("a33").play();
  D.classList.add("playing");
  setTimeout(() => D.classList.remove("playing"), 1000);
}

function testf() {
  document.getElementById("a44").play();
  F.classList.add("playing");
  setTimeout(() => F.classList.remove("playing"), 1000);
}

function testg() {
  document.getElementById("a55").play();
  G.classList.add("playing");
  setTimeout(() => G.classList.remove("playing"), 1000);
}

function testh() {
  document.getElementById("a66").play();
  H.classList.add("playing");
  setTimeout(() => H.classList.remove("playing"), 1000);
}

function testj() {
  document.getElementById("a77").play();
  J.classList.add("playing");
  setTimeout(() => J.classList.remove("playing"), 1000);
}

function testk() {
  document.getElementById("a88").play();
  K.classList.add("playing");
  setTimeout(() => K.classList.remove("playing"), 1000);
}

function testl() {
  document.getElementById("a99").play();
  L.classList.add("playing");
  setTimeout(() => L.classList.remove("playing"), 1000);
}
