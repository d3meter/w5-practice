const januaryComponent = function() {
    return `
        <div class="month">    
            <h2>January</h2>
            ${dayComponent()}
            ${dayComponent()}
            ${dayComponent()}
           </div>
    `
}

const dayComponent = function () {
    return `
        <div class="day">day</div>
    `
}

console.log("hello");
const rootElement = document.querySelector("#root");
rootElement.insertAdjacentHTML("afterend", januaryComponent());