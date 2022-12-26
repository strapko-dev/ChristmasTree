let tree = document.querySelector('.wrapper_tree');
let ball_wrap = document.getElementById('ball_wrap')
let wrap = document.querySelector('.wrapper');
let popup = document.querySelector('.popup');
let ball = document.createElement('img');
let num = 0;

function show(elem) {
    elem.classList.remove('hidden')
    elem.classList.add('show')
}

function hidden(elem) {
    elem.classList.remove('show')
    elem.classList.add('hidden')
}

tree.addEventListener('click', () => show(popup));
tree.addEventListener('click', () => hidden(ball_wrap));

document.forms.amountBalls.onsubmit = christmas;

function christmas() {

    let deleteElement = ball_wrap.querySelectorAll('IMG');
    for (let i = 0; i < deleteElement.length; i++) {
        deleteElement[i].remove();
    }

    let form = document.forms.amountBalls;
    num = form.amount.value;
    console.log(num);

    hidden(popup);
    let coords = tree.getBoundingClientRect();

    if (num > 5) {
        alert('The number is more 5!!!')
        return false;
    }

    if (num > 3) {
        let handlerPlusY1 = 0;
        let handlerPlusX1 = 0;
        for(let i = 0; i < 3; i++) {
            ball = document.createElement('img');
            ball.src = 'img/ChristmasBall.png';
            ball.classList.add('ball');
    
            handlerPlusY1 += 90;
            handlerPlusX1 += 50;
    
            ball.style.left = coords.left + 180 + handlerPlusX1 + 'px';
            ball.style.top = coords.top + handlerPlusY1 + 'px';
    
            ball_wrap.append(ball)
        }

        let handlerPlusY2 = 0;
        let handlerPlusX2 = 0;
        for (let i = 0; i < num - 3; i++) {
            ball = document.createElement('img');
            ball.src = 'img/ChristmasBall.png';
            ball.classList.add('ball');
    
            handlerPlusY2 += 90;
            handlerPlusX2 += 50;
    
            ball.style.left = coords.left + 100 + handlerPlusX2 + 'px';
            ball.style.top = coords.top + 100 + handlerPlusY2 + 'px';

            ball_wrap.append(ball)
        }

    } else if (num <= 3) {
        let handlerPlusY1 = 0;
        let handlerPlusX1 = 0;

        for(let i = 0; i < num; i++) {
            ball = document.createElement('img');
            ball.src = 'img/ChristmasBall.png';
            ball.classList.add('ball');
    
            handlerPlusY1 += 90;
            handlerPlusX1 += 50;
    
            ball.style.left = coords.left + 180 + handlerPlusX1 + 'px';
            ball.style.top = coords.top + handlerPlusY1 + 'px';
    
            ball_wrap.append(ball)
        }
    }

    if (popup.classList.contains('hidden') && num != 0) {
        show(ball_wrap);
    }

    return false;
}


