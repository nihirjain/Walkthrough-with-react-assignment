function signin(){
    return(
        <>
        <form action="get">
        <input required type="text"  placeholder="PhoneNumber Username or Email"/>
        <input type="password" placeholder="Password" />
        <button>Sign-In</button>
        </form>
        </>
    )
}

export default signin;