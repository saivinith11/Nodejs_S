//method  ---->obj



//method  ---->obj
const video={
    titie:'a',
    play(){
        console.log(this);
    }
};

video.stop=function(){
console.log(this);
};

video.stop();


function playVideo(a,b){
    console.log(this);
}

playVideo.call({name:'sai'},1,2);
playVideo.apply({name:'sai'},[1,2]);

playVideo();