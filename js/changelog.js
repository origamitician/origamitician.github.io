var changeLog = [{date: 'Date', description: 'Description', link: 0, linkDisplay: 0}, 

{date: '1/9/22', description: 'Added ninjastar favicon!', link: '/favicon.ico', linkDisplay: 'favicon.ico'}, 

{date: '1/8/22', description: 'Added 6th subpage "Tank with long cannon"', link: '/models/tank-w-long-cannon.html', linkDisplay: 'tank-w-long-cannon.html'}, 

{date: '1/8/22', description: 'Added 5th subpage "A simple plant (ver. 2)"', link: '/models/plant2.html', linkDisplay: 'plant2.html'}, 

{date: '1/5/22', description: 'Huge bug fixes - subpages now mobile compatible', link: 0, linkDisplay: 0}, 

{date: '1/5/22', description: 'Added "models" page; displays all models and updates accordingly to any new changes in listOfSubpages.js. ', link: 'https://origamitician.github.io/models/', linkDisplay: '/models'}, 

{date: '1/5/22', description: 'Added fourth subpage "Robot"', link: 'https://origamitician.github.io/models/simple-robot.html', linkDisplay: 'simple-robot.html'}, 

{date: '1/5/22', description: 'Updated third subpage "A simple plant (ver. 1)"', link: 'https://origamitician.github.io/models/plant1.html', linkDisplay: 'plant1.html'}, 

{date: '1/5/22', description: 'Updated second subpage "Attacker Fish"', link: 'https://origamitician.github.io/models/attacker-fish.html', linkDisplay: 'attacker-fish.html'}, 

{date: '12/29/21', description: 'Updated first subpage - sea shrimp', link: 'https://origamitician.github.io/models/sea-shrimp.html', linkDisplay: 'sea-shrimp.html'}, 

{date: '12/27/21', description: 'Subpage generator finished', link: 'https://origamitician.github.io/models/js/subpagecreator.js', linkDisplay: 'subpagecreator.js'}, 

{date: '12/24/21', description: 'Official change log established', link: 0, linkDisplay: 0}, 

{date: '12/17/21', description: 'Homepage now mobile compatible', link: "https://origamitician.github.io", linkDisplay: 'origamitician.github.io'},

{date: '12/9/21', description: 'Homepage created. Most of the code was from https://pitchk.github.io/h, my old website. Not mobile compatible yet', link: "https://origamitician.github.io", linkDisplay: 'origamitician.github.io'},

{date: '12/9/21', description: 'Initial commit on GitHub', link: 0, linkDisplay: 0}];

for (var i = 0; i < changeLog.length; i++){
    var flex = document.createElement('div');
    flex.className = 'indivChangeLog';
    if(i == changeLog.length-1){
        flex.style.borderBottom = '1px solid black';
    }
    document.getElementById('changelog').appendChild(flex);

    var number = document.createElement('p');
    number.className = 'number';
    if (i == 0){
        number.innerHTML = 'Edit #';
        number.style.fontSize = '130%';
        number.style.fontWeight = 'bold';
    }else{
        number.innerHTML = changeLog.length - i;
    }
    document.getElementsByClassName('indivChangeLog')[i].appendChild(number);

    var d = document.createElement('p');
    d.className = 'date';
    d.innerHTML = changeLog[i].date;
    if(i == 0){
        d.style.fontSize = '130%';
        d.style.fontWeight = 'bold';
    }else{
        d.style.fontSize = '125%';
    }
    document.getElementsByClassName('indivChangeLog')[i].appendChild(d);
    
    var a = document.createElement('p');
    a.className = 'description';
    a.innerHTML = changeLog[i].description;
    if(i == 0){
        a.style.fontSize = '130%';
        a.style.fontWeight = 'bold';
    }else{
        a.style.fontSize = '125%';
    }
    document.getElementsByClassName('indivChangeLog')[i].appendChild(a);
    if(i == 0){
        var li = document.createElement('p');
        li.id = 'headerLink';
        li.innerHTML = 'Links (if applicable)';
        li.style.fontSize = '130%';
        document.getElementsByClassName('indivChangeLog')[i].appendChild(li);
    }else{
        if(changeLog[i].link != 0){
            var l = document.createElement('a');
            l.className = 'relevantLink';
            l.setAttribute('href', changeLog[i].link);
            l.setAttribute('target', '_blank');
            l.appendChild(document.createTextNode(changeLog[i].linkDisplay));
            l.style.fontSize = '125%';
            document.getElementsByClassName('indivChangeLog')[i].appendChild(l);
        }
    }
    
    
}