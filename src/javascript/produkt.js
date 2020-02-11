document.addEventListener("DOMContentLoaded", () => {

	const params = new URLSearchParams(window.location.search);
	const path = window.location.pathname.replace(/\//g,'');
    const skuId = params.get('sku');
    const mainElement = document.querySelector(".main")
    
    fetch(`https://hifi-corner.herokuapp.com/api/v1/products/`)
    .then((respons) => respons.json())
        .then((resultat) => {
            let spin = document.querySelector(".spin");
            spin.removeChild(document.querySelector(".spinner"))
            spin.remove()
            resultat.forEach(produkt => {
                if (produkt.sku == skuId) {
                    let produktDesc = "Read More."
                    mainElement.innerHTML = `
                    <p class="main__home">Home / Amplifiers / ${produkt.model}</p>
                    <img class="large__img" src="../assets/images/WEBSHOP_BANNER.png" alt="">
            
                    <aside class="flex__container">
                        <img class="product__img" src="${produkt.images}" alt="">
                    </aside>
                    <section class="main__text">
                        <h1 class="main__h1">${produkt.make + " " + produkt.model}</h1>
                        <p class="main__other">See other ${produkt.make} products</p>
                        <p class="main__text2">${produkt.description}
                        </p>
                        <div class="btn__container">
                          <button class="btn1">ASK A QUESTION</button> <button class="btn1">PART EXCHANGE</button> 
                          <button class="btn1">PAY BY FINANCE</button> <button class="btn1">SEEN A BETTER PRICE?</button>
                        </div>
                    </section>
            
                    <section class="main__more">
                        <h2 class="more__views-sub">More Views</h2>
                        <img class="sub__img" src="${produkt.images}" alt="">
                        <img class="sub__img" src="${produkt.images}" alt="">   
                    </section>
                    
                    <section class="main__checkout">
                        <form class="checkout__form">
                            <div class="form__select">
                                <h5 class="select__title">Finish<label>*</label> <label class="select__subtitle">* Required Fields</label></h5>
                                <form class="select__form" action="/action_page.php">
                                    <select class="form__select1" name="cars" size="4" multiple>
                                      <option value="black">Black</option>
                                      <option value="silver">Silver</option>
                                    </select>
                                </form>
                            </div>
                            <div class="form__card">
                                <label class="card__qty"> Qty: <input type="text" value="1" class="qty__input"> <button class="qty__button">Add To Cart</button></label>
                                <p class="card__subtitle">-OR-</p>
                                <img class="card__image" src="../assets/images/paypal-checkout.png"> 
                            </div>
                        </form>
                    </section>
            
                    <section class="main__table">
                        <h2 class="table__title">Additional Information</h2>
                        <table class="table__tabel">
                            <tr>
                                <th class="tr__links">Manufacturer</th>
                                <th>${produkt.make}</th>
                            </tr>
                            <tr>
                                <th class="tr__links">Manufacturer Link</th>
                                <th class="tr__golden">${produkt.make}</th>
                            </tr>
                            <tr>
                                <th class="tr__links">Free Warranty</th>
                                <th>3 years</th>
                            </tr>
                            <tr>
                                <th class="tr__links">Delivery Charges</th>
                                <th>Free</th>
                            </tr>
                            <tr>
                                <th class="tr__links">Delivery Time</th>
                                <th>1 - 5 days</th>
                            </tr>
                            <tr>
                                <th class="tr__links">Card Subcharges</th>
                                <th>no</th>
                            </tr>
                        </table>
                    </section>
            
                    <section class="main__desc">
                        <h2 class="desc__title">DESCRIPTION</h2>
                        <table class="desc__table">   
                            <tr class="table__tr">
                                <th class="tr__title">Manufacturer</th>
                                <th class="tr__answer">${produkt.make}</th>
                            </tr>
                            <tr class="table__tr">
                                <th class="tr__title">Model</th>
                                <th class="tr__answer">${produkt.model}</th>
                            </tr>
                            <tr class="table__tr">
                                <th class="tr__title">Power Output</th>
                                <th class="tr__answer">100W</th>
                            </tr>
                            <tr class="table__tr">
                                <th class="tr__title">Colors</th>
                                <th class="tr__answer">Black, Silver</th>
                            </tr>
                            <tr class="table__tr">
                                <th class="tr__title">Power Rank</th>
                                <th class="tr__answer">B+</th>
                            </tr>
                            <tr class="table__tr">
                                <th class="tr__title">Dimentions</th>
                                <th class="tr__answer">40cm x 33cm x 40cm</th>
                            </tr>
                            <tr class="table__tr">
                                <th class="tr__title">Manufacturer Date</th>
                                <th class="tr__answer">2015</th>
                            </tr>
                            <tr class="table__tr">
                                <th class="tr__title">In Stock</th>
                                <th class="tr__answer">500+</th>
                            </tr>
                            <tr class="table__tr">
                            <th class="tr__title">Full Description</th>
                            <th class="tr__answer">${produkt.description.slice(0, 150) + '...'} <p class="tr__answer--readMore">Read More</p> </th>
                        </tr>
                        </table>
                    </section>`
                }
        });
    });
});
