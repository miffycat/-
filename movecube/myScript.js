var table=document.getElementsByTagName("table");
var body=document.getElementsByTagName("body")[0];
//利用双循环来做出棋盘
	var m=1;
	var n=1;
	for(m;m<7;m++){
	var tr=document.createElement("tr");
	tr.id=m;
	table[0].appendChild(tr);
	
	for(n;n<7;n++){
	var td=document.createElement("td");
	//横坐标为n，纵坐标为m
	td.id=n*10+m;
	tr.appendChild(td);
	
	}
	n=1;
	}

//创建一个input元素和一个按钮
var inp=document.createElement("input");
var butn=document.createElement("input");
inp.type="text";
butn.type="button";
butn.value="go";
butn.setAttribute("onclick","storders()");
body.appendChild(inp);
body.appendChild(butn);
//创建一个img元素，并将其插入任意td元素中
var img=document.createElement("img");
var tdDe=document.getElementById("43");
img.src="./pics/1.gif";
tdDe.appendChild(img);
//接受移动指令,left-10，right+10，up-1，down+1
var tdId=43;
function storders(){
//平移命令的实现	
	var order=inp.value;
	if(order=="up"){
		if(tdId%10!=1){
		    tdId-=1;
		    document.getElementById(tdId).appendChild(img);
	    }
		//当要图片移动到最上端时，也就是tdId个位数为1时，使其停在最上端
        if(tdId%10==1){
			document.getElementById(tdId).appendChild(img);
		}
	}
	if(order=="down"){
		if(tdId%10!=6){
			tdId+=1;
		    document.getElementById(tdId).appendChild(img);
		}
		//当要图片移动到最下端时，也就是tdId个位数为6时，使其停在最下端
        if(tdId%10==6){
			document.getElementById(tdId).appendChild(img);
		}
	}
	if(order=="left"){
		if((tdId-tdId%10)/10!=1){
			tdId-=10;
			document.getElementById(tdId).appendChild(img);
		}
		//当图片移动到最左端，也就是tdId十位数为1时，使其停在最左端
		if((tdId-tdId%10)/10==1){
			document.getElementById(tdId).appendChild(img);
		}
	}
	if(order=="right"){
		if((tdId-tdId%10)/10!=6){
			tdId+=10;
			document.getElementById(tdId).appendChild(img);
		}
		//当图片移动到最右端，也就是tdId十位数为6时，使其停在最右端
		if((tdId-tdId%10)/10==6){
			document.getElementById(tdId).appendChild(img);
		}
	}
//旋转命令的实现
//pic文件夹中有内容相同方向不同的四张图片，旋转命令每触发一次，
//则将img中图片地址改为相应的地址
    //获取img中的图片地址，将地址中图片名称之前的部分赋给newurl，
    //最后将需要变动的新图片名称newname作为changIsrc的参数
    var iurl=img.src;
    var iurlArr=iurl.split("/");
    var iname=iurlArr[iurlArr.length-1];
    var newurl="";
    function changeIsrc(obj,newname){
    	for(var i=0;i<iurlArr.length-1;i++){
    		newurl+=iurlArr[i]+"/";
    	}
    	newurl+=newname;
    	obj.src=newurl;
    }
    //获取命令clockwise时，图片名称从1~4顺序循环
    if(order=="clockwise"){
    	switch (iname){
    		case "1.gif":
    		changeIsrc(img,"2.gif");
    		break;
    		case "2.gif":
    		changeIsrc(img,"3.gif");
    		break;
    		case "3.gif":
    		changeIsrc(img,"4.gif");
    		break;
    		case "4.gif":
    		changeIsrc(img,"1.gif");
    		break;

    	}

    }
    //获取命令anticlockwise时，图片名称从4~1倒序循环
    if(order=="anticlockwise"){
    	switch (iname){
    		case "1.gif":
    		changeIsrc(img,"4.gif");
    		break;
    		case "2.gif":
    		changeIsrc(img,"1.gif");
    		break;
    		case "3.gif":
    		changeIsrc(img,"2.gif");
    		break;
    		case "4.gif":
    		changeIsrc(img,"3.gif");
    		break;

    	}

    }

}



