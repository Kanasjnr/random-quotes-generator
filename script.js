const url = `https://quote-garden.onrender.com/api/v3/quotes/random`;
let navBar = document.querySelector(".navigationLink");

const byRandomDiv = document.getElementById('byRandomDiv');
const byAuthorDiv = document.getElementById('byAuthorDiv');
const byGenreDiv = document.getElementById('byGenreDiv');
console.log(navBar);

const ResultEl = document.querySelector(".result");
const generateBtn = document.querySelector(".generateBtn");
ResultEl.style.display = 'none'

// atRandom()

generateBtn.addEventListener("click", function() {
    const activeNavMenu = document.querySelector(".active");
    const functionName = activeNavMenu.getAttribute("data-function");
  
    if (functionName && window[functionName] && typeof window[functionName] === "function") {
      window[functionName]();
    }
  });


// Add a click event listener to the parent element
navBar.addEventListener("click", (event) => {
  if (event.target.classList.contains("navMenu")) {
    // if (event.target.tagName === 'LI') {
    console.log(event.target.tagName);
    // Remove 'active' class from all navbar items
    let navBarItems = document.querySelectorAll(".navMenu");
    console.log(navBarItems);
    navBarItems.forEach((item) => {
      item.classList.remove("active");
    });
    // Add 'active' class to the clicked navbar item
    event.target.classList.add("active");
    
    const activeNavMenu = document.querySelector(".active");
    const selectedFunction = activeNavMenu.getAttribute('data-function');
    byRandomDiv.style.display = (selectedFunction === 'atRandom') ? 'flex' : 'none';
    byAuthorDiv.style.display = (selectedFunction === 'byAuthor') ? 'flex' : 'none';
    byGenreDiv.style.display = (selectedFunction === 'byGenre') ? 'flex' : 'none';
    ResultEl.innerHTML = ''
  }
});

function atRandom() {
  console.log("Function 1 executed");
  const generateNo = document.getElementById("randomNo");

        let generateNoValue = parseInt(generateNo.value)
        console.log(generateNoValue);


        fetch(`${url}?count=${generateNoValue}`)        
        .then((response) => response.json())
        .then((data) => {
            console.log(data);
            // console.log(data.data[0].quoteText);
            // console.log(data.data[0].quoteAuthor);
            // console.log(data.data[1].quoteText);
            // console.log(data.data[2].quoteText);

            let sentences = [];
            let author = []

            // Generate sentences (you can replace this logic with your own sentence generation logic)
            for (var i = 0; i < generateNoValue; i++) {
                sentences.push(data.data[i].quoteText);
                author.push(data.data[i].quoteAuthor)
            }

            console.log(sentences);
            ResultEl.style.display = ''
            ResultEl.innerHTML = ''
            for (var j = 0; j < sentences.length; j++) {
                ResultEl.innerHTML += `
                <div class="quotes">
                <div class="quoteContent">
                    <h4>${sentences[j]}</h4>
                <p>-${author[j]}</p>
                </div>
            </div>
                `
            }
            // Display sentences in the output div using innerHTML
            // var outputDiv = document.getElementById("output");
            // outputDiv.innerHTML = ""; // Clear previous content
            // for (var j = 0; j < sentences.length; j++) {
            //     outputDiv.innerHTML += "<p>" + sentences[j] + "</p>";
            // }


    })
}

function byGenre() {
//   console.log("Function 2 executed");
//   // Your function 2 logic goes here

//   const appendOptionsElToSelectEl = (optionItem, selectEl) => {
//     const optionEl = document.createElement("option"); //create <option> element on html
//     optionEl.value = optionItem.code; //The value of the option
//     optionEl.textContent = optionItem.description; //The displayed description of the option. That will be shown
//     selectEl.appendChild(optionEl);
//   };

//   const populateSelectEl = (selectEl, optionItems) => {
//     optionItems.forEach((optionItem) =>
//       appendOptionsElToSelectEl(optionItem, selectEl)
//     );
//   };
//   const setUpCurrencies = async () => {
//     const fromCurrency = document.getElementById("fromCurrency");
//     const toCurrency = document.getElementById("toCurrency");

//     const currencyOptions = await getCurrencyOptions();
//     const currenciesArray = Object.keys(currencyOptions); //Convert the keys to array

//     const currencies = currenciesArray.map(
//       (currencyKeys) => currencyOptions[currencyKeys]
//     );

//     // console.log(currencies);

//     populateSelectEl(fromCurrency, currencies);
//     populateSelectEl(toCurrency, currencies);
//   };
//   setUpCurrencies();
}

function byAuthor() {
  console.log("Function 3 executed");
  // Your function 3 logic goes here
}
