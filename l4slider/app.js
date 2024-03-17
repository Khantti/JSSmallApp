const slides = document.getElementsByClassName('carousel-item');
const dots = document.querySelectorAll('.dot');
// console.log(slides);
// console.log(dots);

let currslide = 1;


document.getElementById('prev').addEventListener('click',function(){
	// console.log('i am prev');

	// console.log(currslide -= 1);
	// console.log(currslide--);

	carousel(currslide-=1);
});

document.getElementById('next').addEventListener('click',function(){
	// console.log('i am next');

	// console.log(currslide += 1);
	// console.log(currslide++);

	carousel(currslide+=1);
});

carousel(currslide);

function carousel(slidenum){
	// currslide 1 to 3 & 3 to 1
	// console.log(slidenum);

	var x,y;

	// hide all slides
	for(x=0;x<slides.length;x++){
		slides[x].style.display = "none";
	}
	// hide all dots
	for(y=0;y<slides.length;y++){
		// dots[y].className = "dot";
		// dots[y].className.replace('dot');
		dots[y].classList.remove('active');
		
	}
	if(slidenum > slides.length){
		currslide = 1;
	}else if(slidenum < 1){
		currslide = slides.length;
	}else{

	}
	console.log(currslide);

	slides[currslide-1].style.display = "block";

	// dots[currslide-1].className = "dots active";
	// dots[currslide-1].className += " active";
	dots[currslide-1].classList.add('active');

}

for(var q=0;q<dots.length;q++){
	dots[q].addEventListener('click',function(e){
		// console.log('hay');
		// console.log(this.getAttribute('data-bs-slide-to'));

		currslide = this.getAttribute('data-bs-slide-to');
		carousel(currslide);
	})
}