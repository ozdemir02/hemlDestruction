document.addEventListener("DOMContentLoaded", () => {

    const params = new URLSearchParams(document.location.search);
    const categoryName = params.get('category');
    console.log(categoryName);
    const manufacturerList = params.get('manufacturer');
    const mainElement = document.querySelector(".main__shop");
    const path = window.location.pathname.replace(/\//g,'');
    let spin = document.querySelector(".spin");
    let scroll = document.querySelector(".bodyScroll")

    document.querySelector(".main__url").textContent = `Home / ${document.location.pathname.replace(/\//g,'')} `
    document.querySelector(".form__title").textContent = categoryName


    fetch(`https://hifi-corner.herokuapp.com/api/v1/products?category=${categoryName}`)
    .then((respons) => respons.json())
        .then((resultat) => {
            setTimeout(function(){
                spin.removeChild(document.querySelector(".spinner"))
                spin.remove()
                scroll.classList.remove("bodyScroll")
             }, 1300);
            resultat.forEach(produkt => { 
                document.querySelector(".items__totalItems").textContent = resultat.length;
                const clone = mainElement.content.cloneNode(true);
                clone.querySelector(".card__info-link").href= `/${path.slice(0, -1)}/?sku=${produkt.sku}`;
                clone.querySelector(".figure__img").src = produkt.images;
                clone.querySelector(".products__title").innerText = produkt.make + " " + produkt.model;
                clone.querySelector(".products__subtitle").innerText = "£" + produkt.price;
                mainElement.appendChild(clone);
            });
        });
       
    getAllCategories();
    function getAllCategories () { 
        fetch("https://hifi-corner.herokuapp.com/api/v1/categories", {
            "method": "GET"
          })
          .then(response => console.log(response.json()))
          .catch(err => console.error(err));
    }
       
    fetch(`https://hifi-corner.herokuapp.com/api/v1/brands`)
    .then((respons) => respons.json())
        .then((resultat) => {
            resultat.forEach(produkt => {
                document.querySelector(".shopby__container2").innerHTML +=
                ` <p class="main__links2">${produkt.name}(<span class="links2__counter"></span>)</p>`
                document.querySelector(".categories3__unorderedlist3").innerHTML += `
                <li class="unorderedlist3__list"><a class="unorderedlist3__anker" href="?make=${produkt.name}">${produkt.name}</a></li>
                `
            });
        });
    
});
