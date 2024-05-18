const URL = "https://api.weatherapi.com/v1/current.json?key=9593595eee804c038e862030240803&q=Ambala&aqi=no";

let cityName = document.querySelector(".cityname p");
let countryName = document.querySelector(".country p");
let temp = document.querySelector(".temp p");
let status = document.querySelector(".weatherstat p");
var searchBar = document.querySelector("#searchOP");
let changeLocBut = document.querySelector(".loclogochotu");

function clickKaro(){
    var dabao= new MouseEvent("click",{
        bubbles: true,
        cancelable: true,
        view: window
    });
    changeLocBut.dispatchEvent(dabao);
}

changeLocBut.addEventListener("click", () => {
    clickKaro();
})

searchBar.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
        let searchTerm = searchBar.value;
        fetch(URL.replace("Ambala", searchTerm))
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                cityName.innerText = data.location.name;
                countryName.innerText = data.location.country;
                temp.innerText = `${data.current.temp_c}°C`;
                status.innerText = data.current.condition.text;
            })
    }
})

















