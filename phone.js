const loadPhones = async (searchText) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data = await res.json();
    const phones = data.data;
    // console.log(phones);
    displayPhones(phones);
}




const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone container')

    // clear container before adding new seached items

    phoneContainer.innerHTML = '';

    // console.log(phones);
    phones.forEach(phone => {
        // console.log(phone);

        // step-1: Create a card div for each card
        const phoneCard = document.createElement('div');

        phoneCard.classList = `card w-auto m-5 bg-gray-100 shadow-xl text-black p-5`;
        // step-2: Set inner Text
        phoneCard.innerHTML = `
            <figure><img src="${phone.image}" />
            </figure>
            <div class="card-body mx-auto ">
            <h2 class="card-title">Brand: ${phone.brand}</h2>
            <h2 class="card-title">Model: ${phone.phone_name}</h2>
            <p>${phone.slug}</p>
            <div class="card-actions justify-center">
                <button class="btn btn-primary">Buy Now</button>
            </div>
            </div>
        `
        // step-3: append
        phoneContainer.appendChild(phoneCard);

    });
}



const seachClickHandler = () => {
    const searchText = document.getElementById('seach-field').value;
    console.log(searchText)
    loadPhones(searchText);
}




// loadPhones();