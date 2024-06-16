function displayQuote(response) {
  console.log("quote generated");
  new Typewriter("#quote", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generateQuote(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "5of9b61e3227f64b3eaa050fcft44f04";
  let context =
    "You are a knowledgeable quote expert and love to write captivating short quotes. Your mission is to generate a short paragraph quote in basic HTML. Make sure to follow the user instructions. Sign the quote with 'MasegoN' inside a <strong> element at the end of the quote";
  let prompt = `User instructions: Generate a Quote about ${instructionsInput.value}`;
  let apiURL = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let quoteElement = document.querySelector("#quote");
  quoteElement.classList.remove("hidden");
  quoteElement.innerHTML = `<div class="generating">⌛ Generating a quote about ${instructionsInput.value}</div>`;

  console.log("Generatig quote");
  console.log(`Prompt: ${prompt}`);
  console.log(`Context: ${context}`);

  axios.get(apiURL).then(displayQuote);
}

let quoteFormElement = document.querySelector("#quote-generator-form");
quoteFormElement.addEventListener("submit", generateQuote);
