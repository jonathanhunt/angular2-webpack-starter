import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { PhotosService } from '../services/photos.service';
import { AlbumsList } from '../models/albums-list.data';
import { AlbumInfo } from '../models/album-info.data';


@Component({
  selector: 'albums-list',
  template: require('./albums-list.component.html')
})

export class AlbumsListComponent {
  albums: Array<AlbumInfo> = new Array<AlbumInfo>();

  constructor (private photosService: PhotosService) {
  }

  ngOnInit() {
    this.photosService.getPhotosets().subscribe(
      (result) => {
        if (result) {
          this.albums = result.albums;
        }
      },
      (error) => {
        if (error) {

        }
      }
    );
  }
}
