import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {
  selectedCar;
  Cars =[
    {
      name :'Maruthi',
      imgUrl : 'https://cdn.pixabay.com/photo/2016/02/13/13/11/cuba-1197800__340.jpg',
      model :'Model : 1945',
      information : 'The Maruti Swift has 1 Diesel Engine and 1 Petrol Engine on offer. The Diesel engine is 1248 cc while the Petrol engine is 1197 cc. Depending upon the variant and fuel type the Swift has a mileage of 22.0 to 28.4 kmpl. The Swift is a 5 seater Hatchback and has a length of 3840mm.'
    },
    {
      name :'Suzuki',
      imgUrl : 'https://cdn.pixabay.com/photo/2015/05/28/23/12/auto-788747__340.jpg',
      model : 'Model : 1885',
      information :'The Suzuki has 1 kerosine Engine and 1 Diesel Engine on offer. The Diesel engine is 1248 cc while the kersine engine is 466 cc. Depending upon the variant and fuel type the Swift has a mileage of 22.0 to 28.4 kmpl. The Suzuki is a 5 seater Hatchback and has a length of 3840mm.'
    },
    {
      name :'Lamborghini',
      imgUrl : 'https://cdn.pixabay.com/photo/2016/04/01/12/16/car-1300629__340.png',
      model :'Model : 2010',
      information : 'The Lamborghini Swift has 1 Lamborghini Engine and 1 Lamborghini Engine on offer. The Diesel engine is 5000 cc while the Petrol engine is 5000 cc. Depending upon the variant and fuel type the Swift has a mileage of 3.0 to 5.0 kmpl. The Swift is a 5 seater Hatchback and has a length of 5000.'
    },
    {
      name :'BMW',
      imgUrl : 'https://cdn.pixabay.com/photo/2015/09/02/12/25/bmw-918408__340.jpg',
      model :'Model : 2010',
      information : 'BMW cars price starts at Rs. 35.20 lakh for the cheapest car X1 and goes up to Rs. 2.43 crore for the top model BMW 7 Series. BMW offers 14 new car models in India. X1 (Rs. 35.20 lakh), Z4 (Rs. 64.90 lakh) and 3 Series GT (Rs. 47.70 lakh) are among the popular cars from BMW.'
    },
    {
      name :'Lamborghini Aventador',
      imgUrl : 'https://cdn.pixabay.com/photo/2014/09/07/22/34/car-race-438467__340.jpg',
      model :'Model : 2015',
      information : 'The Petrol engine is 6498 cc. It is available with the Automatic transmission. Depending upon the variant and fuel type the Aventador has a mileage of 5.0 to 7.69 kmpl. The Aventador is a 2 seater Coupe and has a length of 4843 mm, width of 2273 mm and a wheelbase of 2700mm.'
    },
    {
      name :'Audi A3',
      imgUrl : 'https://cdn.pixabay.com/photo/2015/01/19/13/51/car-604019__340.jpg',
      model :'Model : 2015',
      information : 'Audi A3 Variants & Price: The Audi A3 is available in two variants: Premium Plus and Technology, priced from Rs 28.99 lakh to 31.99 lakh (ex-showroom pan-India). Audi A3 Engines: The A3 comes with a 1.4-litre TFSI turbocharged petrol engine that makes 150PS of power and 250Nm.'
    },
    {
      name : 'Ferrari 812 superfast',
      imgUrl : 'https://cdn.pixabay.com/photo/2013/07/12/12/56/ford-mustang-146580__340.png',
      model :'Model : 2019',
      information : 'The Ferrari 812 Superfast, replacement for the F12berlinetta, is one of the few exotic cars still equipped with a V12. The front-mounted 6.5L engine produces 800 horsepower and 530 lb. ft of torque and barely weighs 1600 kilos. Performance is mind-blowing (0-100 km/h in 2.9 seconds) and the engine sound is exquisite.'
    },
    {
      name : 'Bugatti La Voiture Noire',
      imgUrl : 'https://cdn.pixabay.com/photo/2017/04/06/22/11/auto-2209439__340.png',
      model :'Model : 2012',
      information : 'The Bugatti La Voiture Noire is a one-off supercar based on the Chiron. Unveiled at the 2019 Geneva Motor Show, it joins the Divo as a derivative from the already famous Chiron hypercar. The La Voiture Noire is a modern reinterpretation of the Type 57 SC Atlantic from the 1930s.'
    },
    {
      name : 'Mercedes-Benz E-Class',
      imgUrl : 'https://cdn.pixabay.com/photo/2016/12/03/18/57/amg-1880381__340.jpg',
      model :'Model : 2015',
      information : 'The Mercedes-Benz E-Class has 2 Diesel Engine and 2 Petrol Engine on offer. ... Depending upon the variant and fuel type the E-Class has a mileage of 10.98 to 18.0 kmpl. The E-Class is a 5 seater Sedan and has a length of 4988mm, width of 1907mm and a wheelbase of 2939mm.'
    }
  ]
  constructor() { }

  ngOnInit() {
  }
  sendCar(car) {
    this.selectedCar = car;
    console.log(car);
  }
}
