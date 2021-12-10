var darkMode = 'off';

function change(){
    if(darkMode === 'off'){
        darkMode = 'on';
        
        document.body.style.backgroundColor = 'black';
        document.body.style.color = 'white';
        document.getElementById('switchInner').style.transform = 'translate(120%, 0px)';
        document.getElementById('switchOuter').style.border = '2px solid orange';
        document.getElementById('switchOuter').style.backgroundColor = 'whitesmoke';
        document.getElementById('switchInner').style.backgroundColor = 'orange';
        
        
        document.getElementsByClassName('sectionTitle')[0].style.borderLeft = '3px solid orange';
        document.getElementsByClassName('sectionTitle')[0].style.borderBottom = '3px solid orange';
        document.getElementsByClassName('sectionTitle')[0].style.color = 'orange';
        document.getElementsByClassName('sectionTitle')[1].style.borderLeft = '3px solid orange';
        document.getElementsByClassName('sectionTitle')[1].style.borderBottom = '3px solid orange';
        document.getElementsByClassName('sectionTitle')[1].style.color = 'orange';
        for(var i = 0; i < document.getElementsByClassName('links').length; i++){
            document.getElementsByClassName('links')[i].style.color = 'white';
            document.getElementsByClassName('links')[i].style.borderBottom = '4px solid black';
        }
        document.getElementById('header').style.backgroundColor = 'black';
        document.getElementById('header').style.backgroundColor = 'box-shadow: 5px 5px 10px #white';

        document.getElementById('bottom').style.backgroundColor = '#57544c';
        
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