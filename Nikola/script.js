let arrCars=[]
let arrCats=[]
let arrPerson=[]
let btn=document.getElementById('btn')


class Cars {
    brand;
    model;
    color;
    age;
    img;


    constructor(brand,model,color,age){
        this.brand=brand
        this.model=model
        this.color=color
        this.age=age
        this.img= img

        arrCars.push(this)
    }

    showText(){
        return `<div class="card" style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.brand} - ${this.model}</h5>
          <p class="card-text">Color: ${this.color} <br> Year of production: ${this.age} </p>
          <a href="#" class="btn btn-primary">More information</a>
        </div>
      </div>`
        
    }
   
}

class MotorBike extends Cars{
    speed;


    constructor(brand,model,color,age,img,speed){
        super(brand,model,color,age,img)
        this.speed =speed
    }
    showText(){
        return `<div class="card " style="width: 18rem;">
        <img src="${this.img}" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${this.brand} - ${this.model}</h5>
          <p class="card-text">Color: ${this.color} </p> 
          <p>Year of production: ${this.age} </p>
          <p> Maximal speed : ${this.speed} </p>
          <a href="#" class="btn btn-primary">More information</a>
        </div>
      </div>`
        
    }
}


let car1 = new Cars("BMW","X3","black",2020,img="https://cdn.pixabay.com/photo/2016/02/22/20/22/bmw-1216469_960_720.jpg")
let car2 = new Cars("Audi","a3","blue",2019, img="https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019_960_720.jpg")
let car3 = new Cars("VW","Tiguan","silver",2021,img="https://cdn.pixabay.com/photo/2019/01/27/15/45/vw-3958334_960_720.jpg")
let car4 = new Cars("VW","Tiguan","silver",2021,img="https://cdn.pixabay.com/photo/2019/01/27/15/45/vw-3958334_960_720.jpg")


for(let val of arrCars){
    document.getElementById('container').innerHTML += `<div> ${val.showText()} </div>`
   
}

let moto6=new MotorBike("jamaha","p3","yellow",2018,img="https://cdn.pixabay.com/photo/2016/03/27/17/59/motorcycle-1283299_960_720.jpg",250)
let moto7=new MotorBike("jamaha","p3","yellow",2018,img="https://cdn.pixabay.com/photo/2016/03/27/17/59/motorcycle-1283299_960_720.jpg",250)

document.getElementById('moto').innerHTML += `<div> ${moto6.showText()} </div>`;
document.getElementById('moto').innerHTML += `<div> ${moto7.showText()} </div>`;






        










