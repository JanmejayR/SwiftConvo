 import jwt from 'jsonwebtoken'

 const generateTokenAndSetCookie = (userId , res) =>{
    const token = jwt.sign({userId} , process.env.JWT_SECRET , { expiresIn: '15d'
   })

    res.cookie("jwt" , token,{
       maxAge: 15 * 24 * 60 * 60 * 1000, // by default this thing is in milliseconds, we are converting it to 15 days
       httpOnly: true, // prevent XSS attacks or cross-site scripting attacks. Doing httpOnly:true prevents javascript to access this cookie
       sameSite:"strict", // to prevent CSRF attacks(cross-site request forgery attacks)
       
       secure: process.env.NODE_ENV !== "development"// to check if we'll use https or not depending on if the app is in development mode

 })
}
 export default generateTokenAndSetCookie;