import { Component, OnInit, Input } from '@angular/core';
import { MenuService } from './menu.service';
import { Menu } from './menu.model';

@Component({
  selector: 'app-menuregistry',
  templateUrl: './menuregistry.component.html',
  styleUrls: ['./menuregistry.component.css'],
  //providers:[MenuService]
})
export class MenuregistryComponent implements OnInit {
 selectedMenu:Menu;
  constructor(private menuService:MenuService) { }

  ngOnInit() {
    this.menuService.menuSelected
    .subscribe(
      (menu:Menu)=>{
        this.selectedMenu=menu;
      }
    );
  }

}
