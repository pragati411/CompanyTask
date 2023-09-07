import { useState } from "react"

const DisplayName = ()=>{
    const [name, setName] = useState("")
    const [showData,setShowData]=useState('')

    const handleChange= ()=>{

        setShowData(name)
    }
    return(
        <div>
<div>
    <input type="text"  placeholder="enter your name" value={name} onChange={(e)=> {
        setName(e.target.value)
    }}/>
</div>
<button onClick={handleChange}>Submit</button>
<p>{showData}</p>
        </div>
    )
}
export default DisplayName
