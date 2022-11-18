import { Injectable } from '@angular/core';
import { Task } from '../Task';
import{Observable} from 'rxjs'
import{HttpClient,HttpHeaders} from '@angular/common/http'

const httpOptions={
  headers:new HttpHeaders({
    'Content-Type':'application/json'
  })
}

@Injectable({
  providedIn: 'root'
})


export class TaskService {
  private apiUrl="http://localhost:7000/tasks";

  constructor(private http:HttpClient)  { }
  getTasks():Observable<Task[]>{
return this.http.get<Task[]>(this.apiUrl);

  }
deleteSTask(task:Task):Observable<Task>{
  const url=`${this.apiUrl}/${task.id}`;
return this.http.delete<Task>(url);
}
updateToggle(task:Task):Observable<Task>{
  const url=`${this.apiUrl}/${task.id}`
  return this.http.put<Task>(url,task);

}

saveTask(task:Task):Observable<Task>{

  return this.http.post<Task>(this.apiUrl,task,httpOptions);
}


}
