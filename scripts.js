var accordians=document.getElementsByClassName("accordian_ques");
for(var i=0;i<accordians.length;i++)
{
    accordians[i].addEventListener("click", function(){
        var temp=this.childNodes[1].classList[1];
        for(var j=0;j<accordians.length;j++)
        {
            accordians[j].childNodes[1].classList.remove("fa-times");
            accordians[j].childNodes[1].classList.add("fa-plus");
            accordians[j].nextElementSibling.style.maxHeight=null;            
        }
        if(temp=="fa-plus")
        {
            this.childNodes[1].classList.remove("fa-plus");
            this.childNodes[1].classList.add("fa-times");
            this.nextElementSibling.style.maxHeight= this.nextElementSibling.scrollHeight + "px";
        }
        else
        {
            this.childNodes[1].classList.remove("fa-times");
            this.childNodes[1].classList.add("fa-plus");
            this.nextElementSibling.style.maxHeight = null;
        }
    });
}