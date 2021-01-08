import {Component, Input, OnInit} from '@angular/core';
import {IMenuItem} from "../interfaces/IMenuItem";

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  @Input() items: IMenuItem[] = [
    {
      _id: "HOME",
      title: "خانه",
      href: "/"
    },
    {
      _id: "PRODUCTS",
      title: "محصولات",
      children: [
        {
          _id: "LAPTOPS",
          title: "لپ‌تاپ",
          href: "#"
        },
        {
          _id: "SMARTPHONES",
          title: "تلفن هوشمند",
          href: "#"
        }
      ]
    },
    {
      _id: "ABOUT",
      title: "درباره ما",
      href: "/"
    },
    {
      _id: "CONTACT",
      title: "تماس با ما",
      href: "/"
    },
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
