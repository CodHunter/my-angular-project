import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

import { Observable } from 'rxjs';
import { ClaimStatus } from '../../assets/model/claimStatus';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClaimServiceService {

  baseUrl = 'https://api.jsonbin.io/b/5f19786cc1edc466175cca22/4';

  constructor(private http: HttpClient) { }

  options = {
    headers: new HttpHeaders({
      'secret-key': '$2b$10$o23nffcCE1bKdWlIGlRo5uXjUO80XLKkTxBVKKYhIGGeSB24f6F6O',
      'versioning': 'false'
    })
  };

  getClaimsData(): Observable<any> {
    return this.http.get<any>(this.baseUrl, this.options);
  }

  getDocument(): Observable<any> {
    const option1 = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'secret-key': '$2b$10$o23nffcCE1bKdWlIGlRo5uXjUO80XLKkTxBVKKYhIGGeSB24f6F6O'
      })
    };
    return this.http.get('https://api.jsonbin.io/b/5f19885a9180616628476815/1', option1);
  }

  updateDocument(id, myObj): Observable<any> {
    const option1 = {
      headers: new HttpHeaders({
        'secret-key': '$2b$10$o23nffcCE1bKdWlIGlRo5uXjUO80XLKkTxBVKKYhIGGeSB24f6F6O',
        'versioning': 'false'
      })
    };
    return this.http.put('https://api.jsonbin.io/b/5f19885a9180616628476815/1' , myObj, option1);
  }

  saveClaimsData(id, myObj): Observable<any> {
    const option1 = {
      headers: new HttpHeaders({
        'versioning': 'false'
      })
    };
    return this.http.put('https://api.jsonbin.io/b/5f19786cc1edc466175cca22', myObj, this.options);
  }
}
