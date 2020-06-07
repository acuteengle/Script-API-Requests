const axios = require("axios");
const url = "https://api.kanye.rest";

//Using another function after the data is returned
const doSomethingWithData = (data) => {
    console.log(data);
}

const getData = async url => {
    try {
        const response = await axios.get(url);
        doSomethingWithData(response.data);
    } 
    catch (error) {
        console.log(error);
    }
};

getData(url);

//Using Async and Await
const getQuote = async () => {
    try {
        return await axios.get(url)
    } 
    catch (error) {
        console.error(error)
    }
}

const quoteData = async () => {
    const response = await getQuote()
    console.log(response.data)
}

quoteData()