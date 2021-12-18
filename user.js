var darkMode = 'off';

function change(){
    if(darkMode === 'off'){
        darkMode = 'on';
        
        //body changes
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

        //header changes
        for(var i = 0; i < document.getElementsByClassName('links').length; i++){
            document.getElementsByClassName('links')[i].style.color = 'white';
            document.getElementsByClassName('links')[i].style.borderBottom = '4px solid black';
           
        }

        //footer changes
        document.getElementsByClassName('topbottomheaders')[0].style.color = 'orange';
        document.getElementsByClassName('topbottomheaders')[0].style.borderLeft = '4px solid orange';
        document.getElementsByClassName('topbottomheaders')[0].style.borderBottom = '4px solid orange';
        document.getElementsByClassName('topbottomheaders')[1].style.color = 'orange';
        document.getElementsByClassName('topbottomheaders')[1].style.borderLeft = '4px solid orange';
        document.getElementsByClassName('topbottomheaders')[1].style.borderBottom = '4px solid orange';
        document.getElementsByClassName('bottomheaders')[0].style.color = 'orange';
        document.getElementsByClassName('bottomheaders')[0].style.borderLeft = '4px solid orange';
        document.getElementsByClassName('bottomheaders')[0].style.borderBottom = '4px solid orange';
        document.getElementById('header').style.backgroundColor = 'black';
        document.getElementById('header').style.backgroundColor = 'box-shadow: 5px 5px 5px #white';
        document.getElementById('iconpc').style.color = 'orange';
        document.getElementById('bottom').style.backgroundColor = '#3b3834';
        document.getElementById('bottomIcon').style.color = 'orange';
        document.getElementById('credit').style.backgroundColor = 'black';
      
    }else{
        darkMode = 'off';
        
        //body changes
        document.body.style.backgroundColor = 'whitesmoke';
        document.body.style.color = 'black';
        document.getElementById('switchInner').style.transform = 'translate(0px, 0px)';
        document.getElementById('switchOuter').style.border = '2px solid black';
        document.getElementById('switchOuter').style.backgroundColor = 'whitesmoke';
        document.getElementById('switchInner').style.backgroundColor = 'black';
        document.getElementsByClassName('sectionTitle')[0].style.borderLeft = '3px solid black';
        document.getElementsByClassName('sectionTitle')[0].style.borderBottom = '3px solid black';
        document.getElementsByClassName('sectionTitle')[0].style.color = 'black';
        document.getElementsByClassName('sectionTitle')[1].style.borderLeft = '3px solid black';
        document.getElementsByClassName('sectionTitle')[1].style.borderBottom = '3px solid black';
        document.getElementsByClassName('sectionTitle')[1].style.color = 'black';

        //header changes
        for(var i = 0; i < document.getElementsByClassName('links').length; i++){
            document.getElementsByClassName('links')[i].style.color = 'black';
            document.getElementsByClassName('links')[i].style.borderBottom = '4px solid white';
        }

        //footer changes
        document.getElementsByClassName('topbottomheaders')[0].style.color = 'purple';
        document.getElementsByClassName('topbottomheaders')[0].style.borderLeft = '4px solid purple';
        document.getElementsByClassName('topbottomheaders')[0].style.borderBottom = '4px solid purple';
        document.getElementsByClassName('topbottomheaders')[1].style.color = 'purple';
        document.getElementsByClassName('topbottomheaders')[1].style.borderLeft = '4px solid purple';
        document.getElementsByClassName('topbottomheaders')[1].style.borderBottom = '4px solid purple';
        document.getElementsByClassName('bottomheaders')[0].style.color = 'purple';
        document.getElementsByClassName('bottomheaders')[0].style.borderLeft = '4px solid purple';
        document.getElementsByClassName('bottomheaders')[0].style.borderBottom = '4px solid purple';
        document.getElementById('header').style.backgroundColor = 'white';
        document.getElementById('header').style.backgroundColor = 'box-shadow: 5px 5px 18px #888888';
        document.getElementById('iconpc').style.color = 'black';
        document.getElementById('bottom').style.backgroundColor = 'orange';
        document.getElementById('bottomIcon').style.color = 'black';
        document.getElementById('credit').style.backgroundColor = 'grey';

    }
}

document.getElementById('switchOuter').addEventListener('click', change);