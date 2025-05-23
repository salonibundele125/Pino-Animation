const sounds = ['applause', 'boo', 'gasp', 'tada', 'victory', 'wrong'];
sounds.forEach(sounds=>{
    const btn =document.createElement('button');
    btn.innerHTML=sounds
    btn.classList.add('btn');
    btn.addEventListener('click',()=>{
        stopSongs()
        document.getElementById(sounds).play()

    })
    document.getElementById('buttons').appendChild(btn)
})
function stopSongs(){
    sounds.forEach(sounds=>{
        const songs= document.getElementById(sounds)
        songs.pause()
        songs.currentTime=0;
    })
}
