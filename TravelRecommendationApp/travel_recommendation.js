const btnSearch = document.getElementById('btnSearch');
btnSearch.addEventListener('click', searchCondition);


function searchCondition() {
    const input = document.getElementById('conditionInput').value.toLowerCase();
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = '';

    console.log(fetch('travel_recommendation_api.json'));

}
