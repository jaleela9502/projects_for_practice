fetch('https://fakestoreapi.com/products')
    .then((data) => {
        return data.json();
    })
    .then((product) => {
        // Check if the response is an array or an object with a 'product' property
        const products = Array.isArray(product) ? product : [product];

        let pdt = "";
        products.map((values) => {
            pdt += `<div id="card">
                        <img src="${values.image}" alt="img" class ="img">
                        <h4 class="title">${values.title}</h4>
                        <p class="desc">${values.category}</p>
                        <p class="amt">${values.price}</p>
                    </div>`;
        });

        // Append pdt to an element in your HTML document
        document.getElementById('main').innerHTML = pdt;
    })
    .catch((err) => {
        console.log(err);
    });
