const video1=document.getElementById('projectVideo1');
const hoverSign=document.querySelector('.hover-sign');

//sidebar elements
const sideBar=document.querySelector('.sidebar');
const menu=document.querySelector('.menu-icon');
const close=document.querySelector('.close-icon');

const videoList = [video1];
videoList.forEach(function(video){
    video.addEventListener('mouseover', function(){
        video.play()
        hoverSign.classList.add("active");
    })
    video.addEventListener('mouseout', function(){
        video.pause()
        hoverSign.classList.remove("active");
    })
})

menu.addEventListener('click', function(){
    sideBar.classList.add("open-sidebar");
    sideBar.classList.remove("close-sidebar");
})
close.addEventListener('click', function(){
    sideBar.classList.add("close-sidebar");
    sideBar.classList.remove("open-sidebar");
})
