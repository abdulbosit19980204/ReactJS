import "./register.css"
const Register=()=>{

    return(
        <div className="regDiv">
            <form action="/action_page.php">
                <input type="text" id="fname" name="firstname" placeholder="Your name.."></input>
                <input type="text" id="lname" name="lastname" placeholder="Your last name.."></input>
                <select id="country" name="country">
                <option value="australia">Australia</option>
                <option value="canada">Canada</option>
                <option value="usa">USA</option>
                </select>
                <input type="email" id="email" name="email" placeholder="Your email.."></input>
                <input type="password" id="password" name="password" placeholder="Your password..."></input>
            
                <input type="submit" value="Submit"></input>
            </form>
        </div>
    )
}

export default Register