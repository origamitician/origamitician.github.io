function show(){
    console.log('test');
    if(document.getElementById('mobileHeaderOpen').style.display === 'block'){
        document.getElementById('mobileHeaderOpen').style.display = 'none';
        document.getElementById('mobileHeader').style.borderBottom = 'none';
    }else{
        document.getElementById('mobileHeaderOpen').style.display = 'block';
        
    }
}

document.getElementById('mobileHeaderOpen').style.display = 'none';
document.getElementById('menu').addEventListener('click', show);