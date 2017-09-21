window.onload=initPic;
var Pictures=new Array("images/1.jpg","images/2.jpg","images/3.jpg","images/4.jpg","images/5.jpg","images/6.jpg",
	"images/7.jpg","images/8.jpg","images/9.jpg","images/10.jpg","images/4.jpg","images/11.jpg","images/12.jpg","images/13.jpg","images/14.jpg"
	);
var thisPic=0;
document.getElementById("words").style.opacity="1";

function initPic() {
		
		
		var autoPlay=setInterval("processNext()","3000");
		document.getElementById("img").onmouseover=function(){
			clearInterval(autoPlay);
		};
		document.getElementById("img").onmouseout=function(){
			autoPlay=setInterval("processNext()","3000");
		};
		

		document.getElementById('prev').onclick=processPrev;
		document.getElementById('next').onclick=processNext;

		
	

}

function processPrev()
{
	if(thisPic==0){
		thisPic=Pictures.length;
	}
	thisPic--;
	document.getElementById("img").src=Pictures[thisPic];
	
	return false;
}

function processNext(){
	thisPic++;
	if(thisPic==Pictures.length){
		thisPic=0;
	}
	document.getElementById("img").src=Pictures[thisPic];
	
	return false;
}
var flag=0;

 function bigger(){
 	if(flag==0){
 		document.getElementById("img").style.width="600px";
 		document.getElementById("img").style.height="800px";
 		flag++;
 	}
 	else{
 		document.getElementById("img").style.width="360px";
 		document.getElementById("img").style.height="480px";
 		flag--;
 	}
 	
 }


