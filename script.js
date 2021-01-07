const enlist = 1610290800000;
const discharge = 1657378800000;

function countdown() {
    const current = new Date().getTime();
    let toCount;

    if (current <= enlist) {
        toCount = enlist;
    } else {
        toCount = discharge;
    }

    toCount -= current;
    const days = Math.floor(toCount / (1000 * 60 * 60 * 24));
    const hours = Math.floor((toCount % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((toCount % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((toCount % (1000 * 60)) / 1000);

    return [`${days}일 ${hours}시간 ${minutes}분 ${seconds}초`, current <= enlist];
}

window.addEventListener('load', () => {
    setInterval(()=> {
        data = countdown();
        document.getElementById('mode').innerText = (data[1] ? '입대' : '전역');
        document.getElementById('timer').innerText = data[0];
    }, 1000);
});