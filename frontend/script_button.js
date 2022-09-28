const monthComponent = function (nth, name, days) {
    let daysHTML = "";
    
    for (let i = 1; i <= days; i++){
        daysHTML += dayComponent(i);
    }
    
    return `
        <section id="${nth}" class="${name}">    
            <h2>${name}</h2>
            ${daysHTML}
           </section>
    `
}

const dayComponent = function (dayCount) {
    return `
        <div class="day">${dayCount}</div>
    `
}

console.log("hello");
const rootElement = document.querySelector("#root");

rootElement.insertAdjacentHTML("beforeend", "<button>show calendar</button>");
const buttonElement = rootElement.querySelector("button");
buttonElement.addEventListener("click", function(){
    rootElement.insertAdjacentHTML("beforeend", monthComponent(1, "January", 31));
    rootElement.insertAdjacentHTML("beforeend", monthComponent(1, "February", 28));
})
