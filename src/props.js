function Book(props) {
    return (
        <div>
            <h1>{props.bookName} </h1>
            <p>{props.authorname}</p>
        </div>
    )
}


var booklist = [
    {
        bookName : "Rch Dad Poor Dad",
        authorname : "Robert"
    },
    {
        bookName : "Atomic Habits",
        authorname: "James Clear"
    }
    
]
root.render(
    <div>
        {
            booklist.map(function(item){
                return <Book bookName = {item.bookName} authorname = {item.authorname}></Book>
            })
        }
    </div>
)