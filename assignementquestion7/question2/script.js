const clock = document.querySelector(".Displaybox");

const getTime = () => {
    const now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds =  now.getSeconds();

    clock.innerHTML = `<h3 class="hd2">${hours} hours  ${minutes} minutes  ${seconds} seconds </h3>`; 
}

getTime();  