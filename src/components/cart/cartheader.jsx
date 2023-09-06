const CartHeader = () => {

    
  const containerStyle = {
    marginLeft:'40px'
  };
  
  const inputContainerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '10px',
    marginLeft:'-160px',
    border: 'none',
  };
  
  const inputStyle = {
    padding: '5px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    marginRight: '10px',
    width: '50%', // Set the width to 50%
    border: 'none',
    fontSize: '16px',
    boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
    
  };
  
  const buttonStyle = {
    padding: '5px 10px',
    backgroundColor: 'pink',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
    border: 'none',
    fontSize: '16px',
    
  };
return(
    <div>
        <div>
      <h1 style={{marginLeft:"190px"}}>Condiate Assessment</h1>
      <div style={inputContainerStyle}>
        <input type="text" placeholder="Search Assessment" style={inputStyle} />
        <button style={buttonStyle}>+ Create New</button>
        </div>
        </div>

    </div>
    )
}
export default CartHeader