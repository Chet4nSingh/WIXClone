const heroRadios = document.querySelectorAll('input[type="radio"]');
const radioTicks = document.querySelectorAll('.tick-option');
const primaryNavLists = document.querySelectorAll('.primary-nav > li');
const navListDetails = document.querySelectorAll('.nav-list-details');

radioTicks.forEach((tick) => {
    tick.classList.add('hidden');
})

heroRadios.forEach((radio) => {
    radio.addEventListener('change', (e) => {
        const tickOption = document.querySelector(`label[for="${e.target.id}"] > .tick-option`);
        tickOption.classList.remove('hidden');       
        radioTicks.forEach((tick) => {
            if (tick !== tickOption) {
                tick.classList.add('hidden');
            }
        }) 
    })
})

for (let list of primaryNavLists) {
    const details = list.firstElementChild;
    
}