import { Component, OnInit,AfterViewInit, ViewChild, ElementRef } from '@angular/core';


@Component({
  selector: 'app-view-map',
  templateUrl: './view-map.component.html',
  styleUrls: ['./view-map.component.css']
})
export class ViewMapComponent implements OnInit {
  @ViewChild("mapContainer", { static: false })
  gmap!: ElementRef;
  map: google.maps.Map | undefined;
  lat = 40.73061;
  lng = -73.935242;
  
  constructor() { }

  ngOnInit(): void {
  }

}
