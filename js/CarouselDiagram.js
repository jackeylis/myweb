var doms ={
    carousel:document.querySelector('.carousel'),
    indicators:document.querySelectorAll('.indicator span'),
};
/*移动到轮播图到第几个板块 
* @param{*}index
*
index：板块的下标
*/

function moveTo(index) {
    //移动图片的位置
    doms.carousel.style.transform ="translateX(-"+index+"00%)";
    //去除当前选中的指示器
    var active = document.querySelector('.indicator .active');
    active.classList.remove('active');
    //重新设置要选中的指示器
    doms.indicators[index].classList.add('active');
	
}
doms.indicators.forEach(function(itme,i){
    itme.onclick=function(){
        moveTo(i);
    }
})
