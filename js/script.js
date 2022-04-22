const $container = document.querySelector('.container');
const $wrapper = document.querySelector('.wrapper');
const BASE_URL = 'https://swapi.dev/api/'
let pageCounter =  1
window.addEventListener('load' , () => {
    getData(`${BASE_URL}starships` , `page=${pageCounter}` , cb => {
        cardTemplate(cb.results)
    })
})
function getData(url , query, callback){
    fetch(`${url}?${query}`)
        .then(res => res.json())
        .then(response => {
            callback(response)
        })
}
function cardTemplate(base){
    const markup = base.map(({name , url}) => `
        <div class="card" onclick="getSingleData('${url }')">
            ${name}
        </div>
    `).join('')
    $wrapper.innerHTML = markup
}
function getSingleData(url){
    getData(url, '', cb => {
        console.log(cb);
        $container.innerHTML = `
            <div class="single">
                <img src="">
                <ul>
                    <li>
                        Name: <span>${cb.name}</span>
                    </li>
                    <li>
                        MGLT: <span>${cb.MGLT}</span>
                    </li>
                    <li>
                        Cargo_capacity: <span>${cb.cargo_capacity}</span>
                    </li>
                    <li>
                        Passengers: <span>${cb.passengers}</span>
                    </li>
                    <li>
                        Crew: <span>${cb.crew}</span>
                    </li>
                    <li>
                        Consumables: <span>${cb.consumables}</span>
                    </li>
                </ul>
                <button class="back" onclick="goBack()">Go Back</button>
            </div>
            
        `
    })
}
function goBack(){
    window.location.reload()
}
