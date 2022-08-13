import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Book } from "./model/Book";

@Injectable()

export class BookService {
    private url = 'http://localhost:44382/api/bookstore'

    httpOptions = {
        Header: new HttpHeaders({'content-type': 'application/json'})
    }

    constructor(private http:HttpClient) { }

    ngOnInit(): void{

    }

    getBook(){
        return this.http.get(this.url)
    }
}