document.addEventListener("DOMContentLoaded", () => {

    let mainElement = document.querySelector(".main__slideshow");
    let counter = 0;

    

    const productsJson = fetch("./data/slideshowprodukt.json")
                               .then(function(response){
                                    return response.json();
                                })
                               .then((result) => {
                                const produkter = result.produkter.find(function(destinationE){
                                return destinationE.id === counter;
                                }); 

                                    console.log(result.produkter[counter])

                                    let htmlSlide = `
                                    <h2 class="slideshow__title">${result.produkter[counter].title}</h2>
                                    <figure class="slideshow__slide">
                                        <img class="slide__prima" src="${result.produkter[counter].image}">
                                    </figure>
                                    `
                                    mainElement.innerHTML += htmlSlide;
                               })

});
