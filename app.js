const dob = document.querySelector('#birthday');
const luckyNum = document.querySelector('#luckyNum');
const btn = document.querySelector('#enter');
const output = document.querySelector('#output');
const reset = document.querySelector('#reset');
//const dobForm = document.querySelector("#") Add <form></form> in html



 btn.addEventListener('click',function() {
    let date = dob.value;
    if (date === "") {
        alert('Please, Enter your Birth Date!')
    } else {
        let dateInt = parseInt(date.replaceAll('-', ""));
        let num = luckyNum.value;
        if (num === "") {
            alert('Please, Enter your Lucky Number!')
        } else {
            isDivisible(dateInt, num);
            
        }
    }
});

/* instead of using replace all
for (let i = 0; i < DOB.value.length; i++) {
        if (DOB.value[i] > 0 && DOB.value[i] <= 9) {
            date += (DOB.value[i]);
        }
    }

    date = Number(date);


    while (date > 0) {
        curr = date % 10;
        sum += curr;
        date = Math.floor(date / 10);
    }
*/

function isDivisible(date, num) {
    let sum = 0;

    while (date > 0) {
        let lastDigit = date % 10;
        sum = sum + lastDigit;
        date = date / 10;
    }

    let sumDigits = parseInt(sum);

    if (sumDigits % num == 0) {
        output.innerText = 'How Lucky! Your Birthdate is lucky.';
    } else {
        output.innerText = 'No Worries! Your Birthdate is not lucky.';
    }
}

reset.addEventListener('click', function() {
    dob.value = "";
    output.innerText = "";
    luckyNum.value = "";
});
