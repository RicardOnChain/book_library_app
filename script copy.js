//brary = []
//
//ray.from(document.querySelectorAll("#openPopUp")).map(element => {
//  element.addEventListener("click", ()=>{
//  document.querySelector("form").style.display = "flex"
//
//

//document.querySelector("form").addEventListener("submit", (event)=>{
//
//    event.preventDefault()
//
//    document.querySelector("#beggining_card").style.display = "none"
//    
//    let formData = new FormData(event.target)       //event.target has all the form input values grouped associated by the "name" atribute. Faster way than querying each and one of the inputs. 
////    
////    let book_name = formData.get("book_name")
////    let book_author = formData.get("book_author")
////    let book_pages = formData.get("book_pages")
////    let have_read = formData.get("book_read")
////
////    createBook(book_name, book_author, book_pages, have_read)
//
//    event.target.reset()
//
//    document.querySelector("form").style.display = "none"
//
//})


//function Book(title,author,pages,have_read){
//    if (!new.target){
//        throw Error ("Please use the new operator to call the object constructor")
//    }
//    
//    this.title = title;
//    this.author = author;
//    this.pages = pages;
//    this.have_read = have_read;
//
//    this.bookId = crypto.randomUUID()
//}

Book.prototype.changeReadStatus = function (){

    this.have_read = this.have_read == "off" ? "on" : "off"
    const readLabel = document.querySelector(`.have_read[data-bookId="${this.bookId}"]`)
    readLabel.textContent = readLabel.textContent === "Have read" ? "Haven't read" : "Have read"
    
    const read_button = document.querySelector(`button[data-bookId="${this.bookId}"]`)
    read_button.textContent = read_button.textContent == "Read" ? "Unread" : "Read"

}


//Book.prototype.deleteObject = function (){
//    library = library.filter(b => b != this)
//    displaybooks(library)
//
//}


//function createBook(title, author, pages, have_read){
//    let newBook = new Book(title, author, pages, have_read)
//    library.push(newBook)
//    displaybooks(library)
//
//}



