function Book(title,author,pages,have_read){
    if (!new.target){
        throw Error ("Please use the new operator to call the object constructor")
    }
    
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.have_read = have_read;
    this.info= function (){ return (`${title} by ${author}, ${pages} pages, ${have_read}`)
}
}

const a = new Book("a", "John", 125, "have read")

console.log(a.info())

Object.getPrototypeOf(a) === a.prototype; // returns true
