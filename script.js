const countries = {
    usa: {
        greeting: "Hello",
        fact: "The United States has 50 states and is home to the Grand Canyon, one of the world's natural wonders.",
        flag: "🇺🇸",
        deco: "🗽 🏈 🍔"
    },
    france: {
        greeting: "Bonjour",
        fact: "France is famous for the Eiffel Tower and has over 1,200 types of cheese.",
        flag: "🇫🇷",
        deco: "🗼 🥐 🍷"
    },
    japan: {
        greeting: "Konnichiwa",
        fact: "Japan has over 6,800 islands and is known for its advanced technology and sakura trees.",
        flag: "🇯🇵",
        deco: "🌸 🍣 🏯"
    },
    spain: {
        greeting: "Hola",
        fact: "Spain has 17 autonomous regions and is the birthplace of flamenco dancing.",
        flag: "🇪🇸",
        deco: "💃 🥘 ⚽"
    },
    germany: {
        greeting: "Guten Tag",
        fact: "Germany has the world's largest beer festival, Oktoberfest, and invented the Christmas tree tradition.",
        flag: "🇩🇪",
        deco: "🍺 🎄 🚗"
    },
    italy: {
        greeting: "Ciao",
        fact: "Italy is shaped like a boot and is the birthplace of pizza and pasta.",
        flag: "🇮🇹",
        deco: "🍕 🍝 🎭"
    },
    china: {
        greeting: "Nǐ hǎo",
        fact: "China has the world's longest continuous civilization and built the Great Wall.",
        flag: "🇨🇳",
        deco: "🏯 🧧 🥢"
    },
    india: {
        greeting: "Namaste",
        fact: "India is home to the Taj Mahal and has over 1.4 billion people speaking hundreds of languages.",
        flag: "🇮🇳",
        deco: "🕌 🍛 🎨"
    },
    brazil: {
        greeting: "Olá",
        fact: "Brazil is the largest country in South America and hosts the world's biggest carnival in Rio.",
        flag: "🇧🇷",
        deco: "🎭 🏜️ ⚽"
    },
    russia: {
        greeting: "Privet",
        fact: "Russia spans 11 time zones and has the deepest lake in the world, Lake Baikal.",
        flag: "🇷🇺",
        deco: "🫖 ❄️ 🏛️"
    },
    uzbekistan: {
        greeting: "Salom",
        fact: "Uzbekistan is home to the ancient Silk Road cities of Samarkand and Bukhara, known for their stunning Islamic architecture.",
        flag: "🇺🇿",
        deco: "🏰 🐪 🧵"
    }
};


const select = document.getElementById('country-select');
const greetingElement = document.getElementById('greeting');
const factElement = document.getElementById('fact');
const flagElement = document.getElementById('flag-display');
const countryNameElement = document.getElementById('country-name');
const decoElement = document.getElementById('deco-display');

select.addEventListener('change', function() {
    const selectedCountry = select.value;
    if (selectedCountry && countries[selectedCountry]) {
        const countryData = countries[selectedCountry];
        flagElement.textContent = countryData.flag;
        countryNameElement.textContent = select.options[select.selectedIndex].text;
        greetingElement.textContent = countryData.greeting;
        factElement.textContent = countryData.fact;
        decoElement.textContent = countryData.deco;
    } else {
        flagElement.textContent = "🌍";
        countryNameElement.textContent = "Select a country";
        greetingElement.textContent = "Greeting will appear here";
        factElement.textContent = "Fun fact will appear here.";
        decoElement.textContent = "✨";
    }
});