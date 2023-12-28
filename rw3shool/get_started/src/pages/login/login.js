import "./login.css"
const Login=()=>{

    return(
        <div className="logDiv">
            <form action="/action_page.php">
                <input type="email" id="email" name="email" placeholder="Your email.."></input>
                <input type="password" id="password" name="password" placeholder="Your password..."></input>

                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Login