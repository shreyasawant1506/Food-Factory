import { Component, OnInit, Input, EventEmitter} from '@angular/core';
import { Menu } from '../../menu.model';
import { MenuService } from '../../menu.service';

@Component({
  selector: 'app-fooditem',
  templateUrl: './fooditem.component.html',
  styleUrls: ['./fooditem.component.css']
})
export class FooditemComponent implements OnInit {

 @Input() menu:Menu;
 @Input() index:number;
// menuSelected=new EventEmitter<Menu>();

 // constructor(private menuservice:MenuService) { }

  ngOnInit() {
  }

  // onSelected(){
  //   this.menuservice.menuSelected.emit(this.menu);
  // }
}
