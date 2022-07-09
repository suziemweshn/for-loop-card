let memberDetails=[
    {
        name:"Aladesuru Oriyomi",
        image:"img/testimonial-2.jpg",
        bestFood:"pounded yam and okro soup",
        complexion:"dark-skinned",
        thingsLearnt:"html,css,boostrap,javascript",
        bestMovie:"At the moment",
        age:"23",
        Track:"Beginner front end"

    },
    {
        name:"Austin Tonayam",
        image:"img/testimonial-1.jpg",
        bestFood:"pounded yam and okro soup",
        complexion:"dark-skinned",
        thingsLearnt:"html,css,boostrap,javascript",
        bestMovie:"At the moment",
        age:"23",
        Track:"Beginner front end"  
    },
    {
        name:"Susan Mwende",
        image:"img/testimonial-3.jpg",
        bestFood:"pounded yam and okro soup",
        complexion:"dark-skinned",
        thingsLearnt:"html,css,boostrap,javascript",
        bestMovie:"At the moment",
        age:"23",
        Track:"Beginner front end"
    }
]
let text=" ";
for(i=0;i<memberDetails.length;i++){
    const members=memberDetails[i];
   text +=`<div class="col-lg-4 col-md-6 col-sm-12">
    <div class="card mb-5 bg-white">
        <div class="card" style="width: 18rem;">
           <img src=${members.image} class="card-img-top container mt-5" alt="${members.name}" height="285px">
           <div class="card-body">
              <h5 class="card-title text-center">${members.name}</h5>
      
           </div>
           <ul class="list-group list-group-flush">
       
           <li class="list-group-item">${members.bestFood}</li>
           <li class="list-group-item">${members.bestMovie}</li>
           <li class="list-group-item">${members.complexion}</li>
           <li class="list-group-item">${members.age}</li>
           <li class="list-group-item">${members.thingsLearnt}</li>
           <li class="list-group-item">${members.Track}</li>
           </ul>
           <div class="card-body">
            <button class="btn btn-primary" onclick="name()">click Me</button>
           </div>
        </div>
    </div>
</div>`;
    
};

document.querySelector(".row").innerHTML=text;
function name(){
    alert(memberDetails[i].name);
}
