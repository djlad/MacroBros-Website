function dish(called,price,pic){
	this.called = called;
	this.price=price;
	this.pic = pic;
}

mainDish = document.getElementById("mainPicDish")
dishes = document.getElementsByClassName("picDish")
mainDesc = document.getElementById("MainDescription")


descs = 
[
"The chicken is delicious. MacroPoints = 15",
"The brown rice is delicious. MacroPoints = 20",
"The quinoa is delicious. MacroPoints = 25",
"The protein shake is delicious. MacroPoints = 10",

]




for(i=0;i<dishes.length;i++){
	dishes[i].width = window.innerWidth/4
	dishes[i].height = window.innerWidth/4

	dishes[i].desc = descs[i]
	//console.log(des)
	dishes[i].onmouseover = function(){
		console.log("hello")
		mainDish.src = this.src
		mainDesc.innerHTML = this.desc
		this.width*=1.1;
		this.height*=1.1;
	}
	dishes[i].onmouseleave = function(){
		console.log("hello")
		this.width/=1.1;
		this.height/=1.1;
	}
}