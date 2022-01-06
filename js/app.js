var color;
var listOfDifficulties = [5.5, 7.5, 5, 8.5, 7, 4.5];
for (var i = 0; i < document.getElementsByClassName('difficultyVisual').length; i++){
    if(listOfDifficulties[i] <= 4){
        color = 'green';
    }else if (listOfDifficulties[i] > 4 && listOfDifficulties[i] <= 6){
        color = '#42aaf5';
    }else if (listOfDifficulties[i] > 6 && listOfDifficulties[i] <= 7.5){
        color = '#e89a2c';
    }else{
        color = '#f05d35';
    }
    document.getElementsByClassName('difficultyVisual')[i].style.background = 'linear-gradient(to right, ' + color + ' 0%, ' + color + ' ' + listOfDifficulties[i]*10 + '%, lightgrey ' + listOfDifficulties[i]*10 +'%, lightgrey 100%)';
}

function show(){
    console.log('test');
    if(document.getElementById('mobileHeaderOpen').style.display === 'block'){
        document.getElementById('mobileHeaderOpen').style.display = 'none';
        document.getElementById('mobileHeader').style.borderBottom = 'none';
    }else{
        document.getElementById('mobileHeaderOpen').style.display = 'block';
        
    }
}

document.getElementById('menu').addEventListener('click', show);