function signup(){
    return(
        <>
        <form action="get">
        <input required type="text"  placeholder="Mobilenumber or Email"/>
        <input type="password" placeholder="Full Name" />
        <input type="text"  placeholder="PhoneNumber Username or Email"/>
        <input type="password" placeholder="Password" />
        <button>Sign-In</button>
        </form>
        </>
    )
}

export default signup;