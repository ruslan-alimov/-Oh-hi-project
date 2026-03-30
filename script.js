const countries = {
    usa: {
        greeting: "Hello",
        fact: "The United States has 50 states and is home to the Grand Canyon, one of the world's natural wonders."
    },
    france: {
        greeting: "Bonjour",
        fact: "France is famous for the Eiffel Tower and has over 1,200 types of cheese."
    },
    japan: {
        greeting: "Konnichiwa",
        fact: "Japan has over 6,800 islands and is known for its advanced technology and sakura trees."
    },
    spain: {
        greeting: "Hola",
        fact: "Spain has 17 autonomous regions and is the birthplace of flamenco dancing."
    },
    germany: {
        greeting: "Guten Tag",
        fact: "Germany has the world's largest beer festival, Oktoberfest, and invented the Christmas tree tradition."
    },
    italy: {
        greeting: "Ciao",
        fact: "Italy is shaped like a boot and is the birthplace of pizza and pasta."
    },
    china: {
        greeting: "Nǐ hǎo",
        fact: "China has the world's longest continuous civilization and built the Great Wall."
    },
    india: {
        greeting: "Namaste",
        fact: "India is home to the Taj Mahal and has over 1.4 billion people speaking hundreds of languages."
    },
    brazil: {
        greeting: "Olá",
        fact: "Brazil is the largest country in South America and hosts the world's biggest carnival in Rio."
    },
    russia: {
        greeting: "Privet",
        fact: "Russia spans 11 time zones and has the deepest lake in the world, Lake Baikal."
    },
    Uzbekiston: {
        greeting: "Salom",
        fact: "Uzbekistan is home to the ancient Silk Road cities of Samarkand and Bukhara, known for their stunning Islamic architecture."{

    };


const select = document.getElementById('country-select');
const greetingElement = document.getElementById('greeting');
const factElement = document.getElementById('fact');

select.addEventListener('change', function() {
    const selectedCountry = select.value;
    if (selectedCountry && countries[selectedCountry]) {
        const countryData = countries[selectedCountry];
        greetingElement.textContent = countryData.greeting;
        factElement.textContent = countryData.fact;
    } else {
        greetingElement.textContent = "Select a country to see the greeting!";
        factElement.textContent = "Fun fact will appear here.";
    }
});