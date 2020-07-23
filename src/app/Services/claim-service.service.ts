import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { ClaimStatus } from '../../assets/model/claimStatus';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClaimServiceService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getClaimsData(): Observable<ClaimStatus[]> {
    return this.http.get<ClaimStatus[]>(this.baseUrl + 'claims');
  }

  getDocument(id): Observable<any> {
    return this.http.get(this.baseUrl + 'claimDocument/' + id);
  }

  updateDocument(id, myObj): Observable<any> {
    return this.http.put(this.baseUrl + 'claimDocument/' + id, myObj);
  }

  saveClaimsData(id, myObj): Observable<any> {
    return this.http.put(this.baseUrl + 'claims/' + id, myObj);
  }
}
