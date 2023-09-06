import Progress_bar from "./Progress_cart";
import CartHeader from "./cartheader";
import v from './v.png';
import mg from './mg.png';

export const CartComp = () => {
  const cartStyle = {
    
    // flex: '0 0 calc(33.33% - 20px)',
    flexDirection: 'column',
    background: 'white',
    
    borderRadius: '5px',
    padding: '20px',
    marginLeft: '160px', // Adjust the left margin to match the sidebar width
    marginTop: '20px', 
     boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
     width:"280px"// Add top margin to separate from the header
  };
  const wrapper = {
    display:'flex',
    flexWrap:"wrap",
    flex: '0 0 calc(33.33% - 20px)',
    marginLeft:"30px"
    
    

  }
  const main = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    // Add space between items
  };
  const cartbody={
    display:"flex",
    justifyContent: 'space-between',
    lineHeight: '1.5',
  }
  const bottomCart={
    display: 'flex',
    alignItems: 'center',
    gap:'10px'
  }
  const bottomCartDiv={
    display: 'flex',
    alignItems: 'center',
    justifyContent:'space-between'
  }
  const wordSpace={
    margin:'10px'
  }
  const onOffButton = {
    width: '50px',
    height: '30px',
    borderRadius: '50%', // This creates an ellipse shape
    background: 'lightgray',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    cursor: 'pointer',
  };
  
  return (
    <div >
         <CartHeader/>
         <div style={wrapper}>

         <div className="main" style={cartStyle}>
        <div className="main" style={main}>
          <div>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>DevOps</p>
            <p>Pranathi, 10 Nov'22</p>
          </div>
          <div>
          <button style={{border:'2px solid pink', padding:"10px", paddingRight:'20px'}}>View</button>
            <p></p>
          </div>
        </div>
        <div className="cartbody" style={cartbody}>
          <div>
            <div >
              <span style={wordSpace}>Invited</span>
              <span>120</span>
            </div>
            <div>
              <span >Evaluated</span>
              <span>100</span>
            </div>
          </div>
          <div>
            <div>
              <span>Dropped Off</span>
              <span>03</span>
            </div>
            <div>
              <span>Qualified</span>
              <span>98</span>
            </div>
          </div>
        </div>
        <div>
          <div>Qualifying</div>
          <div>
            <Progress_bar bgcolor="green"progress={20} height={"13px"}  />
          </div>
          <div  style={bottomCartDiv}>
          <div style={bottomCart}>
         
         <img src={v} alt="" />   <p>Duplicate</p>
        
         <img src={mg} alt="" /> <p>Copy link</p>
       </div>
       <div class="button-container">
  <div class="ellipse" style={onOffButton}>
  <div class="rectangle" style={{borderRadius:'50%', background:'black'}}></div>
  </div>
  
 
</div>

          </div>
          
        </div>
      </div>

     
      <div className="main" style={cartStyle}>
        <div className="main" style={main}>
          <div>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>DevOps</p>
            <p>Pranathi, 10 Nov'22</p>
          </div>
          <div>
          <button style={{border:'2px solid pink', padding:"10px", paddingRight:'20px'}}>View</button>
            <p></p>
          </div>
        </div>
        <div className="cartbody" style={cartbody}>
          <div>
            <div >
              <span>Invited</span>
              <span>120</span>
            </div>
            <div>
              <span>Evaluated</span>
              <span>100</span>
            </div>
          </div>
          <div>
            <div>
              <span>Dropped Off</span>
              <span>03</span>
            </div>
            <div>
              <span>Qualified</span>
              <span>98</span>
            </div>
          </div>
        </div>
        <div>
          <div>Qualifying</div>
          <div>
            <Progress_bar bgcolor="green"progress={20} height={"13px"}  />
          </div>
          <div  style={bottomCartDiv}>
          <div style={bottomCart}>
         
         <img src={v} alt="" />   <p>Duplicate</p>
        
         <img src={mg} alt="" /> <p>Copy link</p>
       </div>
       <div>
  <div class="ellipse" style={onOffButton}>
  <div class="rectangle" style={{borderRadius:'50%', background:'black', color:"black"}}></div>
  </div></div>
          </div>
          
        </div>
      </div>


      <div className="main" style={cartStyle}>
        <div className="main" style={main}>
          <div>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>DevOps</p>
            <p>Pranathi, 10 Nov'22</p>
          </div>
          <div>
          <button style={{border:'2px solid pink', padding:"10px", paddingRight:'20px'}}>View</button>
            <p></p>
          </div>
        </div>
        <div className="cartbody" style={cartbody}>
          <div>
            <div >
              <span>Invited</span>
              <span>120</span>
            </div>
            <div>
              <span>Evaluated</span>
              <span>100</span>
            </div>
          </div>
          <div>
            <div>
              <span>Dropped Off</span>
              <span>03</span>
            </div>
            <div>
              <span>Qualified</span>
              <span>98</span>
            </div>
          </div>
        </div>
        <div>
          <div>Qualifying</div>
          <div>
            <Progress_bar bgcolor="green"progress={20} height={"13px"}  />
          </div>
          <div  style={bottomCartDiv}>
          <div style={bottomCart}>
         
         <img src={v} alt="" />   <p>Duplicate</p>
        
         <img src={mg} alt="" /> <p>Copy link</p>
       </div>
     <div>
  <div class="ellipse" style={onOffButton}>
  <div class="rectangle" style={{borderRadius:'50%', background:'black'}}></div>
  </div></div>
          </div>
          
        </div>
      </div>
      
      
      <div className="main" style={cartStyle}>
        <div className="main" style={main}>
          <div>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>DevOps</p>
            <p>Pranathi, 10 Nov'22</p>
          </div>
          <div>
          <button style={{border:'2px solid pink', padding:"10px", paddingRight:'20px'}}>View</button>
            <p></p>
          </div>
        </div>
        <div className="cartbody" style={cartbody}>
          <div>
            <div >
              <span>Invited</span>
              <span>120</span>
            </div>
            <div>
              <span>Evaluated</span>
              <span>100</span>
            </div>
          </div>
          <div>
            <div>
              <span>Dropped Off</span>
              <span>03</span>
            </div>
            <div>
              <span>Qualified</span>
              <span>98</span>
            </div>
          </div>
        </div>
        <div>
          <div>Qualifying</div>
          <div>
            <Progress_bar bgcolor="green"progress={20} height={"13px"}  />
          </div>
          <div  style={bottomCartDiv}>
          <div style={bottomCart}>
         
         <img src={v} alt="" />   <p>Duplicate</p>
        
         <img src={mg} alt="" /> <p>Copy link</p>
       </div>
       <div>
  <div class="ellipse" style={onOffButton}>
  <div class="rectangle" style={{borderRadius:'50%', background:'black'}}></div>
  </div></div>
          </div>
          
        </div>
      </div>

      <div className="main" style={cartStyle}>
        <div className="main" style={main}>
          <div>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>DevOps</p>
            <p>Pranathi, 10 Nov'22</p>
          </div>
          <div>
            <button style={{border:'2px solid pink', padding:"10px", paddingRight:'20px'}}>View</button>
            <p></p>
          </div>
        </div>
        <div className="cartbody" style={cartbody}>
          <div>
            <div >
              <span>Invited</span>
              <span>120</span>
            </div>
            <div>
              <span>Evaluated</span>
              <span>100</span>
            </div>
          </div>
          <div>
            <div>
              <span>Dropped Off</span>
              <span>03</span>
            </div>
            <div>
              <span>Qualified</span>
              <span>98</span>
            </div>
          </div>
        </div>
        <div>
          <div>Qualifying</div>
          <div>
            <Progress_bar bgcolor="green"progress={20} height={"13px"}  />
          </div>
          <div  style={bottomCartDiv}>
          <div style={bottomCart}>
         
         <img src={v} alt="" />   <p>Duplicate</p>
        
         <img src={mg} alt="" /> <p>Copy link</p>
       </div>
       <div>
  <div class="ellipse" style={onOffButton}>
  <div class="rectangle" style={{borderRadius:'50%', background:'black'}}></div>
  </div></div>
          </div>
          
        </div>
      </div>

      <div className="main" style={cartStyle}>
        <div className="main" style={main}>
          <div>
          <p style={{ fontSize: '18px', fontWeight: 'bold' }}>DevOps</p>
            <p>Pranathi, 10 Nov'22</p>
          </div>
          <div>
          <button style={{border:'2px solid pink', padding:"10px", paddingRight:'20px'}}>View</button>
            <p></p>
          </div>
        </div>
        <div className="cartbody" style={cartbody}>
          <div>
            <div >
              <span>Invited</span>
              <span>120</span>
            </div>
            <div>
              <span>Evaluated</span>
              <span>100</span>
            </div>
          </div>
          <div>
            <div>
              <span>Dropped Off</span>
              <span>03</span>
            </div>
            <div>
              <span>Qualified</span>
              <span>98</span>
            </div>
          </div>
        </div>
        <div>
          <div>Qualifying</div>
          <div>
            <Progress_bar bgcolor="green"progress={20} height={"13px"}  />
          </div>
          <div  style={bottomCartDiv}>
          <div style={bottomCart}>
         
         <img src={v} alt="" />   <p>Duplicate</p>
        
         <img src={mg} alt="" /> <p>Copy link</p>
       </div>
       <div>
  <div class="ellipse" style={onOffButton}>
  <div class="rectangle" style={{borderRadius:'50%', background:'black'}}></div>
  </div></div>
          </div>
          
        </div>
      </div>
         </div>
     
    </div>
  );
};

export default CartComp;
