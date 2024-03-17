// GET UI

const getmap = document.querySelector('.map-container');

let getsmallcolor = document.getElementById('smallcolor'),
    getmediumcolor = document.getElementById('mediumcolor'),
    getlargecolor = document.getElementById('largecolor');

var circleidx = 0;

getmap.addEventListener('click',function(e){
    // console.log('i am working');

    circleidx++;
    // console.log(circleidx);

    // console.log(e.target);

    if(e.target.classList.contains('map-container')){
        const cx = e.offsetX;
        const cy = e.offsetY;
        console.log(cx,cy);

        const newspan = document.createElement('span');
        newspan.id = circleidx;
        newspan.classList.add('circle');

        newspan.style.left = `${cx}px`;
        newspan.style.top = `${cy}px`;

        // newspan.style.setProperty('--small-color','darkblue');
        // newspan.style.setProperty('--medium-color','steelblue');
        // newspan.style.setProperty('--large-color','skyblue');

        // console.log(newspan);

        if(getsmallcolor.selectedIndex > 0 && getmediumcolor.selectedIndex && getlargecolor.selectedIndex){
            newspan.style.setProperty('--small-color',getsmallcolor.value);
            newspan.style.setProperty('--medium-color',getmediumcolor.value);
            newspan.style.setProperty('--large-color',getlargecolor.value);
        }

        this.appendChild(newspan);
    }
});
