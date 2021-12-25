var changeLog = [{date: 'Date', type: 'Type of change', description: 'Description'}, 
{date: '12/24/21', type: 'New subpage', description: 'Official change log established'}, 
{date: '12/17/21', type: 'Code', description: 'Homepage now mobile compatible'},
{date: '12/9/21', type: 'New subpage', description: 'Homepage created. Most of the code was from https://pitchk.github.io/h, my old website. Not mobile compatible yet'},
{date: '12/9/21', type: 'N/A', description: 'Initial commit on GitHub'}];

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

    var p = document.createElement('p');
    p.className = 'type';
    p.innerHTML = changeLog[i].type;
    if(i == 0){
        p.style.fontSize = '130%';
        p.style.fontWeight = 'bold';
    }else{
        p.style.fontSize = '125%';
    }
    document.getElementsByClassName('indivChangeLog')[i].appendChild(p);

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
}