let count = 0;
function counter(){
	setInterval(()=>{
		const element = document.querySelector("h4");
		element.innerHTML = count;
		count++;
	}, 1000)
}

counter()