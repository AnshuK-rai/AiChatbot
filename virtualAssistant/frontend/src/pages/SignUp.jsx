import React from 'react'
import bg from ".../assets/authBg.png"
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
function SignUp(){
  const[showPassword,setShowPassword]=useState(false)
  const navigate=useNavigate()
  const[name,setName]=useState("")
  const[email,setEmail]=useState("")
  const[password,setpassword]=useState("")
  
  return(
    <div className='w-full h-[100vh] bg-cover flex justify-center items-center' style={{backgroundImage:`url(${bg})`}}>
      <from className='w-[90%] h-[600px] max-w-[500] bg-[#00000062] backdrop-blur shadow-lg shadow-black flex flex-col items-center justify-center gap-[20px] px-[20px]'>
        <h1 className='text-white text-[30px] font-semibold mb-[30px]'>Register to <span className='text-blue-400'>Virtual Assistant</span></h1>
       <input type="text" placeholder='Enter your Name' className='w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-grey-300 px-[20px] py-[10px] rounded-full text-[18px] relative'/>
         <input type="email" placeholder='Email' className='w-full h-[60px] outline-none border-2 border-white bg-transparent text-white placeholder-grey-300 px-[20px] py-[10px] rounded-full text-[18px]'/>
        <div className='w-full h-[60px] border-2 border-white bg-transparent text-white rounded-full  text-[18px]'>
          <input type={showPassword?"text":"password"} placeholder='password' classsName='w-full h-full rounded-full outline-none bg-transparent placeholder-grey-300 px-[20px] py-[10px]' />
          {!ShowPassword && <IoEye className='absolute top-[18px] right-[20px] text-[white] w-[25px] h-[25px] text-[white] cursor-pointer' onClick={()=>setShowPassword(true)}/>}
           {ShowPassword && <IoEyeOff className='absolute top-[18px] right-[20px] text-[white] w-[25px] h-[25px] text-[white] cursor-pointer' onClick={()=>setShowPassword(false)}/>}
          
        </div>
         <button className='min-w-[150px] h-[60px] mt-[30px] text-black font-semibold bg-white rounded-full text-[19px] '>Sign Up</button>
        <p className='text-[white] text-[18px] cursor pointer'onClick={(=>navigate("/signip)}>Already have an account ? <span className='text-blue-400'>Sign In</span></p>
      </from>
    </div>
    )
}

export default SignUp

