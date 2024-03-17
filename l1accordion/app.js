const getacctitles = document.getElementsByClassName("acctitle");
// console.log(getacctitles); // HTMLCollection
const getactivecontents = document.querySelectorAll('.acccontent');
// console.log(getactivecontents); //NodeList

// console.log(getacctitles.length);

// console.log(getacctitles[0]);
// console.log(getacctitles[1]);
// console.log(getacctitles[2]);
// console.log(getacctitles[3]);


for(var x = 0;x<getacctitles.length;x++){
	// console.log(x); // 0 to 3
	// console.log(getacctitles[x]);

	getacctitles[x].addEventListener('click',function(e){
		// console.log('hay');

		// console.log(e);
		// console.log(e.target);
		// console.log(this);

		// console.log(e.target.classList);

		// e.target.classList.toggle("active");
		this.classList.toggle('active');
							// acctitle 		acccontent
		const getcontent = this.nextElementSibling;
		// console.log(getcontent);
		// console.log(getcontent.scrollHeight);

		// getcontent.style.height = getcontent.scrollHeight+ "px";

		if(getcontent.style.height){
			getcontent.style.height = null; //beware cant set 0
		}else{
			getcontent.style.height = getcontent.scrollHeight+ "px";
		}
	});

	if(getacctitles[x].classList.contains('active')){
		// console.log(getactivecontents[x]);
		getactivecontents[x].style.height = getactivecontents[x].scrollHeight + "px";
	}
}

