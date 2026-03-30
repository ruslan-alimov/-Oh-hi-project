// Refactored Code to Simplify DOM References and Event Handlers

document.addEventListener('DOMContentLoaded', () => {
    const countryImages = {
        canada: 'https://en.wikipedia.org/wiki/File:Flag_of_Canada.svg',
        usa: 'https://en.wikipedia.org/wiki/File:Flag_of_the_United_States.svg',
        uk: 'https://en.wikipedia.org/wiki/File:Flag_of_the_United_Kingdom.svg',
        germany: 'https://en.wikipedia.org/wiki/File:Flag_of_Germany.svg'
    };

    const imageContainer = document.getElementById('country-images');
    const countrySelector = document.getElementById('country-selector');

    countrySelector.addEventListener('change', (event) => {
        const selectedCountry = event.target.value;
        const imageUrl = countryImages[selectedCountry];

        if (imageUrl) {
            imageContainer.innerHTML = `<img src='${imageUrl}' alt='${selectedCountry} flag' />`;
        }
    });
});