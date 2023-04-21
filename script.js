const NewYear = '1 jan 2024';


const DaysEL = document.getElementById('days')
const HoursEl = document.getElementById('hours')
const MinsEl = document.getElementById('mins')
const SecondsEL = document.getElementById('seconds')

function countdown(){
    const  NewYearDate = new Date(NewYear);
    const CurrentDate = new Date();

    const TotalSeconds = (NewYearDate - CurrentDate) / 1000;

    const days = Math.floor(TotalSeconds / 3600 /24);
    const hours = Math.floor(TotalSeconds / 3600) % 24;
    const mins = Math.floor(TotalSeconds / 60) % 60;
    const seconds = Math.floor(TotalSeconds ) % 60; 
    DaysEL.innerHTML = days;
    HoursEl.innerHTML = hours;
    MinsEl.innerHTML = mins;
    SecondsEL.innerHTML = seconds;
}
countdown()
setInterval(countdown,1000)
