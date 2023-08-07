$(
    $("nav ul a").click(function(e){
        e.preventDefault();

        let id=$(this).attr("href");
        let ot=$(id).offset().top;
        
        $("html,body").animate({
            scrollTop:ot-$(".navbar").outerHeight()
        });

    })
)

document.querySelector('.all-btn').addEventListener('click',function(){
    let x=document.querySelectorAll('.all');
    x.forEach(i=>{
        i.style="display:block";
    })
})


document.querySelector('.psd-btn').addEventListener('click',function() {
    let y=document.querySelectorAll('.all');
    y.forEach(i=>i.style="display:none");
    let visible=document.querySelectorAll('.psd-to-html');
    visible.forEach(i=>i.style="display:block");
})

document.querySelector('.special-btn').addEventListener('click',function() {
    let y=document.querySelectorAll('.all');
    y.forEach(i=>i.style="display:none");
    let visible=document.querySelectorAll('.special');
    visible.forEach(i=>i.style="display:block");
})

document.querySelector('.fetch-btn').addEventListener('click',function() {
    let y=document.querySelectorAll('.all');
    y.forEach(i=>i.style="display:none");
    let visible=document.querySelectorAll('.fetch-api');
    visible.forEach(i=>i.style="display:block");
})

var app = document.getElementById('app');

var typewriter = new Typewriter(app, {
    loop: true,
});

typewriter
    .typeString('<strong>Web Developer</strong>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>Web Designer</strong>')
    .pauseFor(2500)
    .deleteAll()
    .typeString('<strong>Front End Developer</strong>')
    .pauseFor(2500)
    .start();

