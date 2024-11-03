document.getElementById('searchButton').addEventListener('click', function() {
    var searchTerm = document.getElementById('searchInput').value;
    fetch('/search?term=' + searchTerm)
        .then(response => response.json())
        .then(data => {
            var resultsDiv = document.getElementById('results');
            resultsDiv.innerHTML = '';
            data.forEach(product => {
                var productDiv = document.createElement('div');
                productDiv.textContent = product.name + ' - ' + product.price;
                resultsDiv.appendChild(productDiv);
            });
        });
});
