let getTime = () => {
    let hr = new Date().getHours();
    let min = new Date().getMinutes();
    let sec = new Date().getSeconds();

    document.getElementById('phase').innerText = `${hr >=12 ? 'PM' : "AM"}`

    switch(hr) {
        case 13:
            hr = 1;
            break;
        case 14:
            hr = 2;
            break;
        case 15:
            hr = 3;
            break;
        case 16:
            hr = 4;
            break;
        case 17:
            hr = 5;
            break;
        case 18:
            hr = 6;
            break;
        case 19:
            hr = 7;
            break;    
        case 20:
            hr = 8;
            break;
        case 21:
            hr = 9;
            break;
        case 22:
            hr = 10;
            break;
        case 23:
            hr = 11;
            break;
        case 24:
            hr = 12;
            break;    
    }

    document.getElementById('hr').innerText = `${hr > 9 ? hr : '0' + hr}`;
    document.getElementById('min').innerText = `${min > 9 ? min : '0' + min}`;
    document.getElementById('sec').innerText = `${sec > 9 ? sec : '0' + sec}`;
}

setInterval(getTime,999);