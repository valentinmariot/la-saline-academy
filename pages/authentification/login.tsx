import {signIn} from "next-auth/react"
import {useState} from "react";

const Login = () => {

    const [userInfo, setUserInfo] = useState({
        email: "",
        password: ""
    })
    const handleLogin = async (e: any) => {
        e.preventDefault()
        const res: any = await signIn('credentials', {
            redirect: false,
            email: userInfo.email,
            password: userInfo.password,
            callbackUrl: `${window.location.origin}`,
        })

        console.log(res)
    }

    return (
        <>
            <form>
                <input onChange={(e) => setUserInfo({...userInfo, email: e.target.value})}/>
                <input onChange={(e) => setUserInfo({...userInfo, password: e.target.value})}/>
                <button onClick={handleLogin}>Login</button>
            </form>


        </>
    )
}

export default Login;