let mainnumber = document.querySelector('.number').textContent;

document.querySelector('.right').addEventListener('click', (event) => {

    event.preventDefault();
    mainnumber++;
    document.querySelector('.mainnumber').textContent = mainnumber;

});

document.querySelector('.left').addEventListener('click', (event) => {

    event.preventDefault();
    mainnumber--;
    document.querySelector('.mainnumber').textContent = mainnumber;

});


/*  Counter App
    This a project I made during the Road to Hire Program. 
    It is a simple counter app made from JavaScript. 
    We used this project to learn how to use DOM events. */