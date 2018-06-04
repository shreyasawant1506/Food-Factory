import { Component, OnInit, Input } from '@angular/core';
import { DataStorageService } from '../shared/data-storage.service';
import { Menu } from '../menuregistry/menu.model';
import {Response} from '@angular/http';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private dataStorage:DataStorageService,
  public authService:AuthService) { }

  ngOnInit() {
  }

  onSaveData(){
    this.dataStorage.storeMenu()
    .subscribe(
      (response:Response)=>{
        console.log(response);
      }
    );
  }

  onFetch(){
    this.dataStorage.getMenu();
  }
  onLogOut(){
    this.authService.logout();
  }
}
