import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from "@angular/router";
import { ApartamentsService } from '../apartaments-service';
import { DataModel } from '../../models/data-model';

@Component({
  selector: 'app-apartament-view',
  imports: [RouterLink],
  templateUrl: './apartament-view.html',
  styleUrl: './apartament-view.css',
})
export class ApartamentView {

  data!: DataModel;

  constructor(
    private readonly apartamentsService: ApartamentsService,
    private readonly route: ActivatedRoute,
    
  ) {}

  ngOnInit() {
    this.getApartament();
  }

  getApartament() {
    const id: number = this.route.snapshot.params['id'];
    this.apartamentsService.getApartament(id).subscribe((res) => {
      console.log(res);
      this.data = res;
    });
  }

}
