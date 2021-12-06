// UPDATING TIMER WITH REAL TIME
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

    document.getElementById('hr').innerText = `${hr}`;
    document.getElementById('min').innerText = `${min}`;
    document.getElementById('sec').innerText = `${sec}`;
}

// CALLING getTime() EVERY SECOND
setInterval(getTime,1000);


// TIME SETTING VARIABLE
let wake_up_time = '';
let lunch_time = '';
let nap_time = '';

// GET ALL-3 TIME VALUES FROM THE USER
document.getElementById('wake-up-time').addEventListener('change', () => {
  wake_up_time = document.getElementById('wake-up-time').value;
});

document.getElementById('lunch-time').addEventListener('change', () => {
    lunch_time = document.getElementById('lunch-time').value;
  });
document.getElementById('nap-time').addEventListener('change', () => {
    nap_time = document.getElementById('nap-time').value;
  });  


// AFTER USER CLIKE SET TIME BUTTON - SHOW THE HIDDEN SCHEDULE BOX
    document.getElementsByClassName('set-time-btn')[0].addEventListener('click', () => {
        if(wake_up_time && lunch_time && nap_time){
        document.querySelector('.final-schedule').classList.remove('hidden');
        document.getElementById('wakeUp').textContent = wake_up_time;
        document.getElementById('lunch').textContent = lunch_time;
        document.getElementById('nap').textContent = nap_time;
    
    
        let hour = document.getElementById('hr').innerText;
        let phase = document.getElementById('phase').innerText;
        
        let hr_and_phase = (hour+phase).toLowerCase();
    
    
        let hr_wakeTime = wake_up_time.split('-')[0];
        let hr_lunchTime = lunch_time.split('-')[0];
        let hr_napTime = nap_time.split('-')[0];
    
    
    
        if(hr_and_phase == hr_wakeTime){
            document.getElementById('d-img').style.background ='white url("./img/wakeup_image.svg")';
            document.getElementById('img-text').textContent = 'wake up!!';
        }else if(hr_and_phase == hr_lunchTime){
            document.getElementById('d-img').style.background ='white url("./img/lunch_image.svg")';
            document.getElementById('img-text').textContent = 'lets have some lunch';
        }else if(hr_and_phase == hr_napTime){
            document.getElementById('d-img').style.background =' white url("./img/goodnight_image.svg")';
            document.getElementById('img-text').textContent = ' good night!! ';
        }
    
        }else {
            alert('SET ALL THE TIME');
        }
    
    });