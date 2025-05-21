const content = document.querySelector('#content');
const url = 'https://api.sampleapis.com/coffee/hot';

const hitAPI = async (url) => {
    const api = await fetch(url);
    const data = await api.json();
    return data;
};

document.addEventListener('DOMContentLoaded', async () => {
    let data = await hitAPI(url); // ✅ No .data — the API directly returns the array

    let text = '<ul class="population">';
    data.forEach(element => {
        text += `<li>
                    <h3>${element.title}</h3>
                    <p>${element.description}</p>
                    <img src="${element.image}" alt="${element.title}" width="200" />
                    <p>Ingredients: ${element.ingredients.join(', ')}</p>
                </li>`;
    });
    text += '</ul>';

    content.innerHTML = text;
});

