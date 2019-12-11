import {Component, OnInit} from '@angular/core';
import { Title} from '../entity';
import {UniversityService} from '../university.service';

@Component({
  selector: 'app-proftitle',
  templateUrl: './proftitle.component.html',
 // styleUrls: ['./proftitle.component.css']
})
export class ProftitleComponent implements OnInit {
  proftitles: Title[];
  constructor(private proftitleService: UniversityService) { }

  ngOnInit() {
    this.getTitles();
  }
  getTitles(): void {
    this.proftitleService.getTitles()
      .subscribe(res => this.proftitles = res);
  }
  delete(title: Title | number): void {
    this.proftitles = this.proftitles.filter(h => h !== title);
    this.proftitleService.deleteTitle(title).subscribe(res => alert(res.message));
  }
}
