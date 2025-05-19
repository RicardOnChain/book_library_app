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



class Interface{

    static mainDiv = document.querySelector(".main")

    render(){
        mainDiv.innerHTML = ""
    }
}


class Flow{

    static innit(){

        const popUpDivList = document.querySelectorAll("#openPopUp")
        
        Array.from(popUpDivList).map(element => {
            element.addEventListener("click", ()=>{
                document.querySelector("form").style.display = "flex"
            })
        })
    }

}