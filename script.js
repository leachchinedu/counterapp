function btnClick(type) {
    var currentCount = document.querySelector('#count').innerHTML;
    if (type === 'increment') {
        if( currentCount < 50) {
            ++currentCount;
        }
    } else {
        if(currentCount != 0) {
            --currentCount;
        }
    }

    document.querySelector('#count').innerHTML = currentCount--;

}

