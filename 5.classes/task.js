class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    fix() {
        this.state = this.state * 1.5;
    }

    set state(state) {

        if (state <= 0) {
            return this._state = 0;
        } else if (state >= 100) {
            return this._state = 100;
        } else {
            return this._state = state;
        }
    }

    get state() {
        return this._state;
    }
}

class Magazine extends PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type = "magazine";
    }
}

class Book extends PrintEditionItem {
    constructor(author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book {
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}





class Library {
    constructor(name) {
      this.name = name;
      this.books = [];
    }

    addBook(book) {
        if (book.state >= 30) {
        this.books.push(book);
        }
    }

    findBookBy(type, value) {
        return this.books.find(book => book[type] === value) || null;
    }

    giveBookByName(bookName) {
        const bookGive = this.findBookBy('name', bookName);
        if (bookGive) {
            this.books.splice(this.books.indexOf(bookGive), 1)
            return bookGive;
        }

        return null
    }
}



class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(mark, subjectName) {
        if (mark < 2 || mark > 5) {
            return "Ошибка, оценка должна быть числом от 2 до 5";
        } else if (mark >= 2 && mark <= 5 && this.marks[subjectName]) {
            this.marks[subjectName].push(mark);
        } else {
            this.marks[subjectName] = [mark];
        }
    }

    getAverageBySubject(subjectName) {
        if (subjectName in this.marks === false) {
            return 0;
        } else {
            return this.marks[subjectName].reduce( ( acc, item ) => acc + item / this.marks[subjectName].length, 0 );
        }
    }

    getAverage() {
        let result = 0;
        let subjects = Object.keys(this.marks);
        subjects.forEach(item => result += this.getAverageBySubject(item));
        return result / subjects.length;
    }
}



    