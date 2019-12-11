import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {UniversityService} from '../university.service';
import {Location} from '@angular/common';
import {Title} from '../entity';

@Component({
  selector: 'app-update-proftitle',
  templateUrl: './update-proftitle.component.html',
//  styleUrls: ['../update-proftitle/update-proftitle.component.css']
})
export class UpdateProftitleComponent implements OnInit {
@Input() proftitle: Title;

  constructor(
    private route: ActivatedRoute,
    private proftitleService: UniversityService,
    private location: Location
  ) { }
  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.proftitleService.getTitle(id)
      .subscribe(res => this.proftitle = res);
  }
  goBack(): void {
    this.location.back();
  }

  save(): void {
    this.proftitleService.updateTitle(this.proftitle)
      .subscribe((res) => {alert(res.message); this.goBack(); });
  }
}
