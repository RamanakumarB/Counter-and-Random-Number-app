
function One()
{
    var num = 67
    return(
        <div>
        <h1>I am One</h1>
        <Two num = {num}></Two>
        </div>
    )
}



function Two(num)
{
    return(
        <div>
        <h1>I am two</h1>
        <Three num = {num.num}></Three>
        </div>
    )
}

function Three(num)
{
    return(
        <div>
        <h1>I am three</h1>
        <h2>I received Number {num.num}</h2>
        </div>
    )
}

root.render(<One></One>)




