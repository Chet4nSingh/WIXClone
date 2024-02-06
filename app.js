const heroRadios = document.querySelectorAll('input[type="radio"]');
const radioTicks = document.querySelectorAll('.tick-option');

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