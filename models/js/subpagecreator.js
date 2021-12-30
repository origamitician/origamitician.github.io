function createSubPage(number, list){
    var pe = document.createElement('div');
    pe.id = 'pictureAndExplanation';
    document.getElementById('topWebsite').appendChild(pe);

    var i = document.createElement('img');
    i.id = 'topImg';
    i.setAttribute('src', detailedSubpages[number].image);
    document.getElementById('pictureAndExplanation').appendChild(i);

    var e = document.createElement('div');
    e.id = 'explanation';
    document.getElementById('pictureAndExplanation').appendChild(e);
    
    var t = document.createElement('p');
    t.id = 'title';
    t.innerHTML = 'How to fold: ' + detailedSubpages[number].pageName;
    document.getElementById('explanation').appendChild(t);

    var titleflex = document.createElement('div');
    titleflex.id = 'titleFlexMain';
    document.getElementById('explanation').appendChild(titleflex);

    var time = document.createElement('p');
    time.id = 'time';
    time.innerHTML = ' Est. time to fold: ' + detailedSubpages[number].time + '.';
    document.getElementById('titleFlexMain').appendChild(time);

    var titleflexinner = document.createElement('div');
    titleflexinner.id = 'titleFlexInner';
    document.getElementById('titleFlexMain').appendChild(titleflexinner);

    var d = document.createElement('p');
    d.id = 'difficulty';
    d.innerHTML = 'Difficulty: '
    document.getElementById('titleFlexInner').appendChild(d);

    var d1 = document.createElement('p');
    d1.id = 'difficultyDisplay';
    d1.innerHTML = detailedSubpages[number].difficulty + "/10";
    document.getElementById('titleFlexInner').appendChild(d1);
    var color;
    if(detailedSubpages[number].difficulty <= 4){
        color = 'green';
    }else if (detailedSubpages[number].difficulty > 4 && detailedSubpages[number].difficulty <= 6){
        color = '#42aaf5';
    }else if (detailedSubpages[number].difficulty > 6 && detailedSubpages[number].difficulty <= 7.5){
        color = '#e89a2c';
    }else{
        color = '#f05d35';
    }
    document.getElementById('difficultyDisplay').style.background = 'linear-gradient(to right, ' + color + ' 0%, ' + color + ' ' + detailedSubpages[number].difficulty*10 + '%, lightgrey ' + detailedSubpages[number].difficulty*10 +'%, lightgrey 100%)';

    var description = document.createElement('p');
    description.id = 'description';
    description.innerHTML = detailedSubpages[number].detailedDescription;
    document.getElementById('explanation').appendChild(description);

    //3 links

    var a = document.createElement('p');
    a.className = 'explanationLinks';
    a.innerHTML = 'Instructions';
    document.getElementById('explanation').appendChild(a);
    var b = document.createElement('p');
    b.className = 'explanationLinks';
    b.innerHTML = 'Gallery';
    document.getElementById('explanation').appendChild(b);
    var c = document.createElement('p');
    c.className = 'explanationLinks';
    c.innerHTML = 'Similar models';
    document.getElementById('explanation').appendChild(c);

    //instructions

    var pdf = document.createElement('p');
    pdf.innerHTML = '⚠️ Warning: Steps with an asterisk (*) are tricky! The download link is below the instructions. Please also see my ';
    pdf.className = 'pdftitle';
    document.getElementById('between').appendChild(pdf);

    var download2 = document.createElement('a');
    download2.className = 'downloadLink';
    download2.setAttribute('href', 'https://origamitician.github.io/usagepolicy.html');
    download2.setAttribute('target', '_blank');
    var inner = document.createTextNode('usage policy (Opens in new window).');
    download2.appendChild(inner);
    document.getElementsByClassName('pdftitle')[0].appendChild(download2);

    var instructions = document.createElement('img');
    instructions.id = 'instructionImage';
    instructions.setAttribute('src', detailedSubpages[number].instructions);
    document.getElementById('instructionSection').appendChild(instructions);
    
    var download = document.createElement('div');
    download.className = 'pdftitle';
    download.innerHTML = 'View and download these instructions (printing is not recommended) as a PDF ';
    document.getElementById('instructionSection').appendChild(download);

    download2 = document.createElement('a');
    download2.className = 'downloadLink';
    download2.setAttribute('href', 'https://pitchk.github.io/sea-shrimp/shrimp.pdf');
    download2.setAttribute('target', '_blank');
    var inner = document.createTextNode('here.');
    download2.appendChild(inner);
    document.getElementsByClassName('pdftitle')[1].appendChild(download2);

    //gallery
    for (var i = 0; i < detailedSubpages[number].images.length; i++){
        var galleryImage = document.createElement('div');
        galleryImage.className = 'indivGalleryImage';
        document.getElementById('gallerySection').appendChild(galleryImage);

        var img = document.createElement('img');
        img.className = 'galleryImage';
        img.setAttribute('src', detailedSubpages[number].images[i].url);
        document.getElementsByClassName('indivGalleryImage')[i].appendChild(img);

        var caption = document.createElement('p');
        caption.className = 'caption';
        caption.innerHTML = detailedSubpages[number].images[i].caption;
        document.getElementsByClassName('indivGalleryImage')[i].appendChild(caption);

        if (i % 2 == 0){
            document.getElementsByClassName('indivGalleryImage')[i].style.marginLeft = '15%';
            document.getElementsByClassName('indivGalleryImage')[i].style.marginRight = '5%';
        }else{
            document.getElementsByClassName('indivGalleryImage')[i].style.marginLeft = '5%';
            document.getElementsByClassName('indivGalleryImage')[i].style.marginRight = '15%';
        }
    }

    //similar models
    for (var i = 0; i < list.length; i++){
        var d = document.createElement('div');
        d.className = 'outer';
        document.getElementById('relatedSection').appendChild(d);
    
        var img = document.createElement('img');
        img.className = 'relatedImg';
        img.setAttribute('src', detailedSubpages[list[i]].image);
        document.getElementsByClassName('outer')[i].appendChild(img);
        
        var innerDiv = document.createElement('div');
        innerDiv.className = 'innerDiv';
        document.getElementsByClassName('outer')[i].appendChild(innerDiv);
    
        var title = document.createElement('a');
        title.className = 'modelTitle';
        var innerLink = document.createTextNode(detailedSubpages[list[i]].pageName)
        title.setAttribute('href', detailedSubpages[list[i]].webLink);
        title.setAttribute('target', '_blank');
        title.appendChild(innerLink);
        document.getElementsByClassName('innerDiv')[i].appendChild(title);
    
        var subtitle = document.createElement('p');
        subtitle.className = 'modelSubtitle';
        subtitle.innerHTML = detailedSubpages[list[i]].shortDescription;
        document.getElementsByClassName('innerDiv')[i].appendChild(subtitle);
    
        //difficulty display
        var difficulty = document.createElement('div');
        difficulty.className = 'difficultyDiv';
        document.getElementsByClassName('innerDiv')[i].appendChild(difficulty);

        var time = document.createElement('p');
        time.className = 'time';
        time.innerHTML = '⏱️ Estimated time: ' + detailedSubpages[list[i]].time;
        document.getElementsByClassName('difficultyDiv')[i].appendChild(time);

        var difficulty2 = document.createElement('div');
        difficulty2.className = 'innerDifficultyDiv';
        document.getElementsByClassName('difficultyDiv')[i].appendChild(difficulty2);
    
        var word = document.createElement('p');
        word.className = 'difficultyWord';
        word.innerHTML = 'Difficulty: ';
        document.getElementsByClassName('innerDifficultyDiv')[i].appendChild(word);

        var num = document.createElement('p');
        num.className = 'difficultyDisplay2';
        num.innerHTML = detailedSubpages[list[i]].difficulty + '/10';
        document.getElementsByClassName('innerDifficultyDiv')[i].appendChild(num);
    }

    for (var i = 0; i < document.getElementsByClassName('difficultyDisplay2').length; i++){
        if(detailedSubpages[list[i]].difficulty <= 4){
            color = 'green';
        }else if (detailedSubpages[list[i]].difficulty > 4 && detailedSubpages[list[i]].difficulty <= 6){
            color = '#42aaf5';
        }else if (detailedSubpages[list[i]].difficulty > 6 && detailedSubpages[list[i]].difficulty <= 7.5){
            color = '#e89a2c';
        }else{
            color = '#f05d35';
        }
        document.getElementsByClassName('difficultyDisplay2')[i].style.background = 'linear-gradient(to right, ' + color + ' 0%, ' + color + ' ' + detailedSubpages[list[i]].difficulty*10 + '%, lightgrey ' + detailedSubpages[list[i]].difficulty*10 +'%, lightgrey 100%)';
    }

    var final = document.createElement('a');
    final.id = 'exploreMore';
    var innerAdding = document.createTextNode('Explore all models');
    final.setAttribute('href', "/models");
    final.setAttribute('target', '_blank');
    final.appendChild(innerAdding);
    document.getElementById('relatedSection').appendChild(final);

    document.getElementById('gallerySection').style.marginBottom = (Math.ceil(detailedSubpages[number].images.length / 2)*33) + "%";

    document.getElementsByClassName('pdftitle')[1].style.fontSize = '165%';
    
}