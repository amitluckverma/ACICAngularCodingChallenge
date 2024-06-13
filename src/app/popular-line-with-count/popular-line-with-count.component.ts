import { Component, OnInit } from '@angular/core';
import { LineOfBusiness } from '../LineOfBusiness';
import { LineOfBusinessService } from '../lineOfBusiness.service';
import { InMemoryDataService } from '../in-memory-data.service';

@Component({
  selector: 'app-popular-line-with-count',
  templateUrl: './popular-line-with-count.component.html',
  styleUrls: ['./popular-line-with-count.component.css']
})
export class PopularLineWithCountComponent implements OnInit {
  lineOfBusinessCounts: { name: string, count: number }[] = [];
  constructor(private inMemoryDataService: InMemoryDataService) { }

  ngOnInit(): void {
    this.getLineOfBusinessCounts();
  }
  getLineOfBusinessCounts(): void {
    this.lineOfBusinessCounts = this.inMemoryDataService.getLineOfBusinessCount();
  }
}
