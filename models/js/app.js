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

