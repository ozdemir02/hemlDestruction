document.addEventListener("DOMContentLoaded", () => {
    
    Promise.all([
        fetch("https://hifi-corner.herokuapp.com/api/v1/categories").then(respons => respons.json()),
        fetch("https://hifi-corner.herokuapp.com/api/v1/brands").then(respons => respons.json())
      ]).then(allResponses => {
        const response1 = allResponses[0] 
        const response2 = allResponses[1]

        response1.forEach(produkt => {
            console.log(produkt)
            document.querySelector(".shop").innerHTML += `
            
            <div class="shop__block-inner">
            <h1 class="block-inner__title"><a class="title__anker" href="/products?category=${produkt}">${produkt}</a></h1>
            </div>
            </div>
            `
            
        })
    });
});