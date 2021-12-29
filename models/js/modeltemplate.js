function show(){
    if(document.getElementById('mobileHeaderOpen').style.display === 'block'){
        document.getElementById('mobileHeaderOpen').style.display = 'none';
    }else{
        document.getElementById('mobileHeaderOpen').style.display = 'block';
        document.getElementById('mobileHeader').style.borderBottom = 'none';
    }
}
document.getElementById('mobileHeaderOpen').style.display = 'none';
document.getElementById('menu').addEventListener('click', show);

//zoom
document.getElementById('range').oninput = function() {
    document.getElementById('sliderText').innerHTML = "Zoom (" + this.value + "%):";
    document.getElementById('instructionImage').style.width = this.value + "%";
    document.getElementById('instructionImage').style.marginLeft = ((100 - this.value) / 2) + "%";
    document.getElementById('instructionImage').style.marginRight = ((100 - this.value) / 2) + "%";
}

//dark mode
var darkMode = 'off';

function change(){
    if(darkMode === 'off'){
        darkMode = 'on';
        document.getElementById('instructionSection').style.backgroundColor = 'black';
        document.getElementById('instructionSection').style.color = 'white';
        document.getElementById('instructionImage').style.filter = 'invert(1)';
        document.getElementById('switchOuter').style.border = '2px solid white';
        document.getElementById('switchOuter').style.backgroundColor = 'orange';
        document.getElementById('switchInner').style.backgroundColor = 'white';
        document.getElementById('range').style.backgroundColor = 'grey';
        document.getElementById('switchInner').style.transform = 'translate(120%, 0px)';
    }else{
        darkMode = 'off';
        document.getElementById('instructionSection').style.backgroundColor = 'whitesmoke';
        document.getElementById('instructionSection').style.color = 'black';
        document.getElementById('instructionImage').style.filter = 'invert(0)';
        document.getElementById('switchOuter').style.border = '2px solid black';
        document.getElementById('switchOuter').style.backgroundColor = 'whitesmoke';
        document.getElementById('switchInner').style.backgroundColor = 'black';
        document.getElementById('switchInner').style.transform = 'translate(0px, 0px)';

    }
}

document.getElementById('switchOuter').addEventListener('click', change);