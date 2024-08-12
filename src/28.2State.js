import ReactDOM from "react-dom/client"
const root = ReactDOM.createRoot(document.getElementById("root"))

//State


function Changemyname()
{

    var [myname,setmyname] = useState("Ramana")

    function change()
    {
      setmyname("kavin")  
    }
return(
    <div>
        <h1>{myname}</h1>
        <button onClick={change}>Change</button>
    </div>
)
}
root.render(<Changemyname/>)