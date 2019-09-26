import { Component, OnInit } from '@angular/core';
import {PhotosService} from './services/photos.service';
import {Photo} from './models/Photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  constructor(public photosService: PhotosService){}

    photos: Photo[] =[];
    albumsId = [1,2,3];

  ngOnInit(){
    this.photosService.getPhotos()
    .subscribe(
      photos => {
        console.log(photos);
        this.photos = photos;
      },
      err => console.log(err)

    )

  }
 
}
