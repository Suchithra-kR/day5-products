import { Component } from '@angular/core';

@Component({
  selector: 'app-cards',
  standalone: true,
  imports: [],
  templateUrl: './cards.component.html',
  styleUrl: './cards.component.css'
})
export class CardsComponent {
  products=[
    {
      id:1,
      title:"",
      image:"../../../assets/beauty.jpg",
      description:""
  },
  {
    id:2,
    title:"",
    image:"../../../assets/mobile.jpg",
    description:""
},
{
  id:3,
  title:"",
  image:"../../../assets/electronics.jpg",
  description:""
},
{
  id:4,
  title:"",
  image:"../../../assets/mobile.jpg",
  description:""
},
{
  id:5,
  title:"",
  image:"../../../assets/homeappliences.jpg",
  description:""
},
{
  id:6,
  title:"",
  image:"../../../assets/fashion.png",
  description:""
},
]

}
