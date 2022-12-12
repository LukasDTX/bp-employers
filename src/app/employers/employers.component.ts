import { Component, OnInit } from '@angular/core';
import { EmployersService } from '../core/services/employers.service';

@Component({
  selector: 'app-employers',
  templateUrl: './employers.component.html',
  styleUrls: ['./employers.component.scss']
})
export class EmployersComponent implements OnInit {

  constructor(private employersService: EmployersService) { }

  ngOnInit(): void {
    this.employersService.getEmployers().subscribe(console.log);
    // this.employersService.Employers();
  }

}
