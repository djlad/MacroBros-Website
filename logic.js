c = document.getElementsByClassName("citem")
citems = []
for(i = 0;i<c.length;i++){
	citems.push($("#"+c[i].id))
}

function findHidden(){
	x = {}
	citems.forEach(function(e){
		console.log(e)
		if(e[0].hidden == false)x =  e;
	})

	return x
}

function change(right){
	//citems[this.active].hide("slide", { direction: "right" }, 700);
	citems[this.active].fadeOut(700);

	right?this.active++:this.active--
	if(this.active >= this.citems.length)this.active = 0
	if(this.active <0)this.active = this.citems.length-1
	current = citems[this.active]

	contrast[this.active]?$("#top").css("color","#778899"):$("#top").css("color","black");


	$('#top').css('background-image', 'url('+bgPics[this.active]+')')
	setTimeout(function(){
				current.fadeIn(1000)
		//$('#top').css('background-image', 'url('+bgPics[this.active]+')')
		//current.show("slide", { direction: "left" }, 700);
	},699)
}

ccell = {
	active:0,
	citems:citems,
	change : change
}
delaySlidesTimes = 0
function delaySlides(){
	clearInterval(slides1)

	if(delaySlidesTimes !== 0)clearTimeout(resetSlides)
	delaySlidesTimes++
	resetSlides = setTimeout(function(){
		slides1 = setInterval(function(){
			ccell.change(true)
		},3000)
	},5000)
}

slides1 = setInterval(function(){
	ccell.change(true)
},3000)



bgPics=[
	"https://scontent-a-ord.xx.fbcdn.net/hphotos-xaf1/v/t1.0-9/10568870_844833482201138_8235162392388230573_n.jpg?oh=0b002dba1f8f37f755c0ba3c7fbe57e0&oe=551273D1",
	"http://thumbs.dreamstime.com/z/roast-chicken-rice-side-view-21865196.jpg",
	//"http://biz.prlog.org/LifestylesofSI/logo.jpg",
	"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xpa1/v/t1.0-9/10441079_844535468897606_1872278484219816144_n.jpg?oh=6525865c2944de44d341983f8c1bc561&oe=55005E2D&__gda__=1426465429_9b5cee79be2f8192394f119b49c16b4b",
	"http://www.siths.org/ourpages/auto/2011/9/27/50381421/alg_staten_island_tech.jpg"
]
contrast = []
for(i=0;i<bgPics.length;i++){
	contrast.push(false)
}
contrast[2] = true

pics = [

"https://fbcdn-sphotos-b-a.akamaihd.net/hphotos-ak-xap1/t31.0-8/s960x960/10682326_10202889980746938_2811323105864152406_o.jpg",
"https://scontent-b-ams.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/10509766_704766986257097_4569499936634167643_n.jpg?oh=758ce4d9a2cb6e7cb18e3010238dc452&oe=55055E43",
"https://fbcdn-sphotos-a-a.akamaihd.net/hphotos-ak-xfp1/v/t1.0-9/1004526_684785738203024_95232340_n.jpg?oh=8e1db52283054b4da7c7f9b7edd4fb56&oe=5501F8AF&__gda__=1427192253_3aaf1d28c6339099bc0dd383ea03c931",
"https://scontent-a-ams.xx.fbcdn.net/hphotos-xap1/v/t1.0-9/10151276_836566833025393_1328391927_n.jpg?oh=1d8d44bf909a2d30b2a3508e5dd5ce07&oe=54D1FC13",
"https://scontent-b-ams.xx.fbcdn.net/hphotos-xfp1/v/t1.0-9/10427681_803157016371589_275643773131316702_n.jpg?oh=3cba3c83b7972c557c3e8c76f539bc74&oe=55149EEA",
"https://fbcdn-sphotos-g-a.akamaihd.net/hphotos-ak-xpf1/v/t1.0-9/1424383_855140914507024_6991506519585811371_n.jpg?oh=d33615e86ae440a24359c9c679cd6ed6&oe=550E67E4&__gda__=1426821925_8f309b59dea8da7211e7e3b8703957cd",
"https://scontent-b-ams.xx.fbcdn.net/hphotos-xaf1/v/l/t1.0-9/10556241_737415326318296_6071871967562560592_n.jpg?oh=93bba753042fc38b17f1a0a7f3adff3d&oe=551766C4",
"https://scontent-a-ams.xx.fbcdn.net/hphotos-frc3/v/t1.0-9/1006325_622656714421147_727697853_n.jpg?oh=0c2627047020c205e607ac23c415c464&oe=551ACD4C",
"https://scontent-a-ams.xx.fbcdn.net/hphotos-ash2/v/t1.0-9/999587_672223589466540_1012990343_n.jpg?oh=b86093641b1acda737f4a0e7186ce0b5&oe=55019DC6"
]

middle = document.getElementById("middle")
profileImages = middle.getElementsByTagName("img")
profiles = document.getElementsByClassName("profile")
descr = []

for(i=0;i<profileImages.length;i++){
	imgSize = window.innerWidth/4
	profileImages[i].src = pics[i]
	profileImages[i].width = imgSize
	profileImages[i].height = imgSize

	descr.push(profiles[i].getElementsByTagName("p"))

	profiles[i].onmouseover = function(e){
		this.getElementsByTagName("p")[0].hidden = false
		image = this.getElementsByTagName("img")[0]
		if(image.width == imgSize){
			image.width*=1.1
			image.height*=1.1
		}
	}
	profiles[i].onmouseleave = function(e){
		this.getElementsByTagName("p")[0].hidden = true
		this.getElementsByTagName("img")[0].width=imgSize
		this.getElementsByTagName("img")[0].height=imgSize
	}

	descr[i][0].hidden = true
}


