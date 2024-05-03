const btnSearch = document.getElementById('btnSearch');


function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    fetch('travel_recommendation_api.json')
        .then(response => response.json())
        .then(data => {
            const countries = data.countries.find(item => item.name.toLowerCase() === input);

            if (countries) {
                const cities = countries.cities.join(', ');
                const temples = countries.temples.join(', ');
                const beaches = countries.beaches;

                resultDiv.innerHTML += `<h2>${countries.name}</h2>`;
                resultDiv.innerHTML += `<img src="${countries.imageUrl}" alt="hjh">`;

                resultDiv.innerHTML += `<p><strong>Cities:</strong> ${cities}</p>`;
                resultDiv.innerHTML += `<p><strong>Temples:</strong> ${temples}</p>`;
                resultDiv.innerHTML += `<p><strong>Beaches:</strong> ${beaches}</p>`;
            } else {
                resultDiv.innerHTML = 'Condition not found.';
            }
        })
        .catch(error => {
            console.error('Error:', error);
            resultDiv.innerHTML = 'An error occurred while fetching data.';
        });
}
btnSearch.addEventListener('click', searchCondition);