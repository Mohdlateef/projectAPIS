 const Apikey='iWRwUhTbRkZc7W7cJTyGMdl4jFxFxhd9nTstY7uF'
 const url='https://api.nasa.gov/planetary/apod?'
 let showcontent=document.querySelector(".section1");
 let searchBtn=document.getElementById("search");
 let  inputDate=document.getElementById("date");
 searchBtn.addEventListener("click",addcontent);
 
 //used when user add data
 function addcontent(){
    let date=inputDate.value;
    let request=new XMLHttpRequest();
    request.open('Get',url+"date="+ date + "&api_key=" + Apikey ,true);
    request.send();
    request.onload=function()
    {
        if(request.status==200)
        {
            showcontent.innerHTML=""
            let data=JSON.parse(request.responseText);
            let imageurl=data.hdurl;
            console.log(data.date);
            let showdate=document.createElement("div");
            showdate.innerHTML=`<div class="heading"> <p>Picture On </p><p> ${data.date}</p></div>`

            let image=document.createElement("img");
            image.src=imageurl;
            // showdate.innerText=data.date;
            let para=document.createElement("p");
            para.innerText=data.explanation
            showcontent.append(showdate,image,para);
          

        }
        else{
            alert("please enter a valid date")
        }

    }
}
addcontent();