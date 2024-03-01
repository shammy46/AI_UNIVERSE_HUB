
const loadCard = async () => {
    const res = await fetch(' https://openapi.programming-hero.com/api/ai/tools');
    const data = await res.json();
    const cards = data.data.tools;
    console.log(cards);
    displayCards(cards);

}

const displayCards = (cards) => {
    const cardContainer = document.getElementById('card-container');

    cards.forEach(card => {
        console.log(card);

        const hubCard = document.createElement('div');
        hubCard.classList = `card w-96 bg-base-100 shadow-xl`;
        hubCard.innerHTML = `
        <figure><img src="${card.image}" alt="Shoes" /></figure>
                    <div class="card-body">
                        <h2 class="card-title">Features</h2>
                        <div>
                        <ul class = "list-disc">
                            <li>${card.features[0]}</li>
                            <li>${card.features[1]}</li>
                            <li>${card.features[2]}</li>
                        </ul>
                         </div>
                         <hr>
                         <div class="flex gap-8">
                            <div class="space-y-3">
                                <h2 class="card-title">${card.name}</h2>
                                <p>${card.published_in}</p>
                            </div>
                            <div class="card-actions justify-end">
                            <button class="btn btn-circle btn-outline">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg>
                            </button>
                            </div>
                        </div>
                    </div>`;
        cardContainer.appendChild(hubCard);

    });

}




loadCard();