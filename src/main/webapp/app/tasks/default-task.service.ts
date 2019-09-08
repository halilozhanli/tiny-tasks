import {HttpClient, HttpParams} from '@angular/common/http';
import {Inject, Injectable} from '@angular/core';
import {Observable} from 'rxjs';

import {BASE_URL} from '../app.tokens';
import {Task} from './task';
import {TaskService} from './task.service';

@Injectable()
export class DefaultTaskService implements TaskService {

    constructor(private http: HttpClient, @Inject(BASE_URL) private baseUrl: string) {
    }

    create(name: string): Observable<Task> {
        return this.http.post<Task>(this.baseUrl + '/tasks', {name: name} as Task);
    }

    delete(id: string): Observable<void> {
        return this.http.delete<void>(this.baseUrl + '/tasks/' + id);
    }

    done(id: string): Observable<Task> {
        return this.http.put<Task>(`${this.baseUrl}/tasks/${id}`, {done: true} as Task);
    }

    getAll(): Observable<Task[]> {
        return this.http.get<Task[]>(this.baseUrl + '/tasks/ordered');
    }

    deleteCompletedTasks(): Observable<void> {
        let params = new HttpParams().set('done', true.toString());
        return this.http.delete<void>(this.baseUrl + '/tasks', {
            params: params
        });
    }
}
