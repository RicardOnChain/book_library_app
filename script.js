class Book{

    static library = []

    constructor (title, author,pages,have_read){
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.have_read = have_read;
        this.bookId = crypto.randomUUID()
        Book.library.push(this)
    }

    changeReadStatus(){
        this.have_read  = this.have_read == "off" ? "on" : "off"
    }

    deleteBook(){
        Book.library = Book.library.filter(book => book != this)

    }


}



const Interface = (()=> {

    const mainDiv = document.querySelector(".main")
    const formDiv = document.querySelector("form")
    const beginningCard = document.querySelector("#beggining_card")

    
    const showPopUp = ()=> formDiv.style.display = "flex"
    const closePopUp = ()=> formDiv.style.display = "none"
    const closeBegginingCard = () => beginningCard.style.display = "none"

    const createBookCard = (bookObject) => {

        const read_button = document.createElement("button")
        read_button.textContent = bookObject.have_read == "on" ? "Unread" : "Read"
        read_button.setAttribute("data-bookId", bookObject.bookId)
        read_button.addEventListener("click", ()=> {
            bookObject.changeReadStatus()
            changeReadLabel(bookObject)
            render()
        })

        const delete_button = document.createElement("button")
        delete_button.textContent = "Delete"
        delete_button.setAttribute("id", "delete_book")
        delete_button.addEventListener("click", ()=> {
            bookObject.deleteBook()
            render()
        })

        const buttonDiv= document.createElement("div")
        buttonDiv.classList.add("action_buttons")
        buttonDiv.append(read_button,delete_button)

        const pageLabel = document.createElement("div")
        pageLabel.textContent = `${bookObject.pages} pages`
        pageLabel.classList.add("pages")

        const haveReadLabel = document.createElement("div")
        haveReadLabel.textContent = bookObject.have_read === "on" ? "Have read" : "Haven't read"
        haveReadLabel.classList.add("have_read")
        haveReadLabel.setAttribute("data-bookId", bookObject.bookId)

        const labelsDiv= document.createElement("div")
        labelsDiv.classList.add("labels")
        labelsDiv.append(haveReadLabel,pageLabel)

        const cardDiv = document.createElement("div")
        cardDiv.setAttribute("id", "book_card")
        cardDiv.setAttribute("data-bookId", bookObject.bookId)
        cardDiv.classList.add("card")

        const h2 = document.createElement("h2")
        h2.textContent=bookObject.title

        const p = document.createElement("p")
        p.textContent="by"
        
        const h4 = document.createElement("h4")
        h4.textContent=bookObject.author

        cardDiv.append(h2,p,h4,labelsDiv,buttonDiv)

        return (cardDiv)

    }

    const changeReadLabel = (bookObject) => {

        const readLabel = document.querySelector(`.have_read[data-bookId="${bookObject.bookId}"]`)
        readLabel.textContent = readLabel.textContent === "Have read" ? "Haven't read" : "Have read"
        
        const read_button = document.querySelector(`button[data-bookId="${bookObject.bookId}"]`)
        read_button.textContent = read_button.textContent == "Read" ? "Unread" : "Read"


    }


    const render = ()=>{

        mainDiv.innerHTML = ""

        Book.library.forEach(book => {
            mainDiv.appendChild(createBookCard(book))

        })
    }

    return {showPopUp, closePopUp,render, closeBegginingCard}

})()






const Flow = (()=>{

    const innit = ()=>{                                                     

        const popUpDivList = document.querySelectorAll("#openPopUp")
        const formDiv = document.querySelector("form")
        
        Array.from(popUpDivList).map(element => {
            element.addEventListener("click", ()=>Interface.showPopUp())        
        })

        formDiv.addEventListener("submit", (e) => submitBook(e))

        

    }

    const submitBook = (e) => {
        
        e.preventDefault()

        let formData = new FormData(e.target)
        
        let book_name = formData.get("book_name")
        let book_author = formData.get("book_author")
        let book_pages = formData.get("book_pages")
        let have_read = formData.get("book_read")

        new Book (book_name, book_author, book_pages, have_read)

        e.target.reset()

        Interface.closePopUp()
        Interface.closeBegginingCard()
        Interface.render()
    }

    innit()

})()



