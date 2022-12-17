let total = document.getElementById("total");
// let reset = document.getElementsByClassName("resetBtn");
let count = 0;


function increment() {
    count++;
    total.textContent = count;
    if (count < 8) {
        total.style.color = 'red';
    } else if (count >= 8) {
        total.style.color = 'green';
    }

}

function decrement() {
    count--;
    total.textContent = count;
    if (count < 8) {
        total.style.color = 'red';
    } else if (count >= 8) {
        total.style.color = 'green';
    }
}

function reset() {
    window.location.reload();
}


function save() {
    if (count < 8) {
        let total = document.createElement('p')
        total.innerHTML = `You consumed ${count} cups of water today, you have ${8 - count} cups remaining`;
        let div = document.querySelector('div.previous-days')
        div.appendChild(total)
        total.style.color = 'red';
    }
    else if (count >= 8) {
        let total = document.createElement('p')
        total.innerHTML = `Great job, you reached the recommended daily water intake! A total of ${count} cups today`;
        let div = document.querySelector('div.previous-days')
        div.appendChild(total)
        total.style.color = 'green';
    }

}











