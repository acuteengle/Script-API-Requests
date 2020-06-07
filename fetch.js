
const fetch = require("node-fetch");
const url = "https://api.kanye.rest";

const doSomethingWithData = (data) => {
    console.log(data);
}

const getData = async url => {
  try {
    const response = await fetch(url);
    const json = await response.json();
    doSomethingWithData(json);
  } catch (error) {
    console.log(error);
  }
};

getData(url);