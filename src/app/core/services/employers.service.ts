import { Injectable } from '@angular/core';
import { AngularFireDatabase, SnapshotAction } from '@angular/fire/compat/database';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployersService {

  private API_URL = '/employers';

  constructor(private db: AngularFireDatabase) { }

  getEmployers(): Observable<any[]> {
    return this.db.list<any>(this.API_URL).snapshotChanges().pipe(map(response => response.map(flight => this.assignKey(flight))));
  }
  private assignKey(flight: SnapshotAction<any>) {
    return {
      ...flight.payload.val(), key: flight.key
    }
  }

  // Employers() {
  //   this.db.list<any>(this.API_URL).valueChanges().subscribe(items => {
  //     console.log(items);
  //     items.forEach(values => { console.log(values) });
  //   });
  // }
}
