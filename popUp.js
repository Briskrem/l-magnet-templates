const section2 = document.querySelector('.two')

window.addEventListener('scroll', function(e){
    
    let scrolled = window.scrollY
    if(scrolled > 345 && scrolled < 355){
        console.log('done')
        let div = document.createElement("div");
        div.id = 'ad'
        document.body.appendChild(div)

    }
    // let revealTop = section2.getBoundingClientRect().top;
    // if(revealTop < 2 && revealTop > -2){
    //     console.log(revealTop,'ppppp89kmknknjnkjnjknjknjknjnjnjnjnjnjn')
    // }

})