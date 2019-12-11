import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UniversityService} from '../university.service';
import {Location} from '@angular/common';
import {Title} from '../entity';

@Component({
  selector: 'app-add-proftitle',
  templateUrl: './add-proftitle.component.html',
 // styleUrls: ['../add-proftitle/add-proftitle.component.css']
})
export class AddProftitleComponent implements OnInit {
@Input() proftitle: Title;
  constructor(
    private route: ActivatedRoute,
    private proftitleService: UniversityService,
    private location: Location
  ) { }

  ngOnInit() {
  }
  save(description: string, no: string, remarks: string): void { // 多个文本框数据
    this.proftitle = {id: null, no: no.trim(), description: description.trim(), remarks: remarks.trim()};
    if (!description) { return; }
    this.proftitleService.addTitle(this.proftitle)
      .subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
