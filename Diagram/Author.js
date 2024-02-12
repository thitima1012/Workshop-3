class Author {
    name = "";
    email = "";
    gender = "";
    constructor(name, email, gender) {
        this.name = name;
        this.email = email;
        this.gender = gender;
    }
    getName() {
        return this.name;
    }
    getEmail() {
        return this.email;
    }
    setEmail() {
        this.email = email;
    }
    toString() {
        return `Author [name = ${this.name}, Email = ${this.email}, gender = ${this.gender}]`;
    }
}

/* -------Book------- */
class Book {
    name = "";
    authors =[];
    price = 0;
    qty = 0;
    // constructor(name, authors, price) {
    //     this.name = name;
    //     this.author = author;
    //     this.price = price;

    // }
    constructor(name, authors, price, qty=0) {
        this.name = name;
        this.authors = authors;
        this.price = price;
        this.qty = qty;
    }
    getName() {
        return this.name;
    }
    getAuthors() {
        return this.authors;
    }
    getPrice() {
        return this.price;
    }
    setPrice(price) {
        this.price.push(price);
    }
    getQty() {
        return this.qty;
    }
    setQty(qty) {
        this.qty.push(qty);
    }
    toString() {
        let authorname = "";
        for (let i = 0; i < this.authors.length; i++) {
            authorname += this.authors[i].toString();
            if (i<this.authors.length - 1) {
                authorname += ", ";
            }
        }
        return `Book [name = ${this.name}, 
            authors = {${authorname}}, 
            price = ${this.price}, 
            qty = ${this.qty}]`;
    }
    getAuthorsName(){
        let authorName = "";
        for(let i = 0; i < this.authors.length; i++) {
            authorName += this.authors[i].getName();
            if (i < this.authors.length - 1) {
                authorNames += ", ";
            }
        }
        return authorNames;
    }
}

const main = () => {
    const author1 = new Author("Vick", "vick@email.com", "M");
    const author2 = new Author("Mind", "mind@email.com", "F");
    // console.log(author1.toString());
    // console.log(author2.toString());

    const book1 = new Book("กระต่ายกับเต่า", [author1, author2], 299, 10);
    console.log(book1.toString());
}

main();
