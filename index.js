//IMAGE GALLERY图片自动播放
window.onload = function(){
    var oSwiper = document.getElementById('swiper');
    var oUl = document.getElementsByTagName('ul')[1];
    var Li = oUl.getElementsByTagName('li');//获取ul下的所有li

    oUl.innerHTML = oUl.innerHTML+oUl.innerHTML;//li下的内容进行想加
    oUl.style.width = Li[0].offsetWidth*Li.length+'px';//ul的宽度等于每个li的宽度乘以所有li的长度

    var speed = 2

    //主方法
    function move(){
        //如果左边横向滚动了长度一半之后,回到初始位置
        if(oUl.offsetLeft<-oUl.offsetWidth/speed){
            oUl.style.left = '0'
        }
        //如果右边横向滚动的距离大于0 就让他的位置回到一半
        if(oUl.offsetLeft>0){
            oUl.style.left = -oUl.offsetWidth/speed+'px';
        }

        //oUl.style.left = oUl.offsetLeft-2+'px';//进行左横向滚动
        oUl.style.left = oUl.offsetLeft+speed+'px';//进行右横向滚动
    }

    var timer = setInterval(move,30);
    //鼠标指向的时候 暂停
    oSwiper.onmouseover=function(){
        clearInterval(timer);
    }
    //鼠标离开之后 继续滚动
    oSwiper.onmouseout=function(){
        timer = setInterval(move,30)
    }
}

//展开
var show_btn=document.getElementById("to-show");
show_btn.onclick=function(){
    var show=document.getElementById("show");
    if(show.style.display == 'none'){
      show.style.display = 'block';
    }else{
      show.style.display = 'none';
    }
}

