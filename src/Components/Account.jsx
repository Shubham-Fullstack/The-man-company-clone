import axios from 'axios';
import React, { useState } from 'react'

const Account = () => {
    // const linkTo = useNavigate()
const[icon,setIcon]=useState("fa-regular fa-envelope") //class="fa-solid fa-phone
const[channel,setChannel]=useState("phone number")// email address
const[actionStatement,setActionStatement]=useState("Please enter your 10 digit mobile number") //Please enter your email address
const[placeholder,setPlaceholder]=useState("phone number") // email
const[inpNum,setInpNum]= useState({display:"inline-block"}) //none
const[inpEmail,setInpEmail] = useState({display:"none"}) //inline-block
const[btn,setBtn]=useState("email") //phone

    const[val,setVal]=useState({number:"",code:"",email:""})
    const[users,setUsers]=useState({id:0,phone:"",email:""})

    const getNumber = (numberVal,emailVal) =>{
       setVal({...val,number:numberVal,email:emailVal})
       setUsers({...users,phone:numberVal,email:emailVal})
   }
    const getCode = (codeVal) =>{
    setVal({...val,code:codeVal})
}

const toggle = () =>{
 if(btn==="email"){
    setIcon("fa-solid fa-phone");
    setChannel("email address");
    setActionStatement("Please enter your email address");
    setPlaceholder("email");
    setInpNum({display:"none"});
    setInpEmail({display:"inline-block"});
    setBtn("phone");
    setUsers({...val,phone:"",email:""})
  }
  else{
    setIcon("fa-regular fa-envelope");
    setChannel("phone number");
    setActionStatement("Please enter your 10 digit mobile number");
    setPlaceholder("phone number");
    setInpNum({display:"inline-block"});
    setInpEmail({display:"none"});
    setBtn("email");
    setUsers({...val,phone:"",email:""})
  }
 
}
    
const handleUsers = () =>{
    
if(btn==="email"){
    
  if(val.code==="" && val.number===""){
      alert("country code and Phone number is required")
  }
  else if(val.code==""){
      alert("country code is required")
  }
  else if(val.number==""){
    alert("phone number is required")
}
   else{
    // confirm(`Entered Number is : ${val.code+" "+val.number}`);
    if(confirm(`Entered Number is : ${val.code+" "+val.number}`) === true){
       setUsers({...users,id:users.id+1},console.log(users))
       axios.post("https://ecommerce-api-pakj.onrender.com/Users",users)
       setVal({...val,number:"",code:""})
       }
    else{
    alert("Your Data is not saved please re-enter your data")
    setVal({...val,number:"",code:""})
        }
     }
     } // end of first email

    else{
       if(val.email===""){
        alert("Email is required")
       }

       else{
        
        if(confirm(`entered Email id is: ${val.email}`=== true)){
          setUsers({...users,id:users.id+1},console.log(users))
          axios.post("https://ecommerce-api-pakj.onrender.com/Users",users)
        }
        else
         alert("please re-enter your email")
         setVal({...val,email:""})
       }
    }
    }

  return (
   <>
    <div className='form'> 
        <h2>login with OTP</h2>
        <p>{actionStatement}</p>
        <div style={inpNum}>
            <input type='tel' required onChange={(e)=>{
                getNumber(e.target.value,"")
                }}
            value={val.number} minLength={10} maxLength={10} placeholder={placeholder}/>
            <select name='country-code' id='country-code' onChange={(e)=>{
                getCode(e.target.value)
            }}
            required>
                <option value={null}></option>
                <option value={"+91"}>INDIA (+91)</option>
            </select>
            <label htmlFor='country-code'><img src='https://upload.wikimedia.org/wikipedia/en/thumb/4/41/Flag_of_India.svg/1200px-Flag_of_India.svg.png' width={"35px"} height={"25px"}/></label>
        </div>

        <div style={inpEmail}>
            <input type='email' required onChange={(e)=>{
              getNumber("",e.target.value)
            }} 
            minLength={10} maxLength={45} placeholder={placeholder} style={{padding:"10px"}}/> {/*value={val.number}*/}
        </div>

        <button onClick={()=>{
            handleUsers()
            }}
        >request OTP</button>

        <span>A 6 digit OTP will be sent to your {channel}</span>
        <div className='ruler'>
            <span>Or Sign-in with</span>
        </div>
        <button className='email' onClick={()=>{
          toggle();
         }}>
        <span className={icon}></span>
        <span>{btn}</span>
        </button>
    </div>
   </>
  )
}
export default Account


