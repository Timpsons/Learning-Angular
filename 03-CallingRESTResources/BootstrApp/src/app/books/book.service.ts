import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Book } from './book';

@Injectable({
    providedIn: 'root'
})
export class BookService {

    constructor() { }

    getBooks(): Observable<Book[]> {
        return of(MOCKED_BOOKS);
    }
}

const MOCKED_BOOKS: Book[] = [
    { id: 1, name: '"Something" is a nice word', isbn: 'ISBN 978-3-86680-192-9', releaseDate: '2018-03-18', authors: [''] },
    { id: 2, name: 'How to become a good Developer', isbn: 'ISBN 736-3-62845-286-3', releaseDate: '2018-05-02', authors: [''] },
    { id: 3, name: 'Funny Cats Phenomenon', isbn: 'ISBN 784-7-73457-244-2', releaseDate: '2018-03-18', authors: [''] },
    { id: 4, name: 'Gardening Robots for Dummies', isbn: 'ISBN 364-4-83429-374-1', releaseDate: '2018-08-23', authors: [''] },
    { id: 5, name: 'Splash!', isbn: 'ISBN 934-3-82494-839-4', releaseDate: '2018-01-18', authors: [''] },
    { id: 6, name: 'Is DVORAK the better QWERTZ?', isbn: 'ISBN 393-7-49469-468-3', releaseDate: '2018-02-09', authors: [''] },
    { id: 7, name: 'Gamer Mice Catalog 2018', isbn: 'ISBN 925-2-68320-582-6', releaseDate: '2018-07-16', authors: [''] },
    { id: 8, name: 'Amazon - From Books To Cloud', isbn: 'ISBN 260-5-520-58295-735-2', releaseDate: '2018-05-30', authors: [''] },
];
