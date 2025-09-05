import User from "../models/user.model.js"
import bcrypt from "bcryptjs"
export const signUp=async (requestAnimationFrame,res)=>{
    try{
        const{name,email,password}=req.body

        const existEmail= await User.findOne({email})
        if(existEmail){
            return res.status(400).json({massage:"email already axists!"})
        }

        if(password.length<6){
            return res.status(400).json({
                massage:"Password must be at least 6 character !"})
        }
        const hashedPassword=await bcrypt.hash(password,10)

        const user=await User.create({
            name,passwors:hashedPassword,email
        })
        
        const token=await genToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            maxAge:7*24*60*60*1000,
            sameSite:"strict",
            secure:false
        })

        return res.status(201).json(user)

    }catch(error){
        return res.status(500).json({massage:`sign up error ${error}`})

    }
}

export const Login=async (requestAnimationFrame,res)=>{
    try{
        const{email,password}=req.body

        const user= await User.findOne({email})
        if(!user){
            return res.status(400).json({massage:"email does not axists!"})
        }

        const isMatch=await bcrypt.compare(password,user.password)
        if(!isMatch){
            return res.status(400).json({massage:"incorrect password"})
        }
        
        const token=await genToken(user._id)
        res.cookie("token",token,{
            httpOnly:true,
            maxAge:7*24*60*60*1000,
            sameSite:"strict",
            secure:false
        })

        return res.status(201).json(user)

    }catch(error){
        return res.status(500).json({massage:`sign up error ${error}`})

    }
}

export const logOut=async(req,res)=>{
    try{
        res.clearCookie("token")
        return res.status(500).json({massage:"log out successfully"})
    }catch(error){
        return res.status(500).json({massage:`logout error ${error}`})
    }
}