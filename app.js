"use strict";
let data = "";
const quotes = document.getElementById("quotes");
const author = document.getElementById("author");
const btn = document.getElementById("btn");

const random = () => {
  const num = Math.floor(Math.random() * data.length);
  quotes.innerText = `${data[num].text}`;
  author.innerText = `${data[num].author}`;
};
btn.addEventListener("click", () => {
  random();
});
const getQuotes = async () => {
  const api = await fetch("https://type.fit/api/quotes");
  data = await api.json();
};
getQuotes();
