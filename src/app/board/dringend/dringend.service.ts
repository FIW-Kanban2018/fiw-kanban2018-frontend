import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DringendService {
  constructor(private http: HttpClient) {}

  urlServer = 'http://localhost:8080/dringend';

  public sendData(data: Map<string, string>): Observable<any> {
    const urlNew = this.urlServer + '/new';
    console.log(
      urlNew
    );
    const convMap = {};
    data.forEach((val: string, key: any) => {
      convMap[key] = val;
    });
    return this.http.post(urlNew, convMap);
  }
  public getDringendCard(id: number) {
    const urlId = this.urlServer + id;
    return this.http.get(urlId).subscribe(res => { console.log(res); });
  }
}