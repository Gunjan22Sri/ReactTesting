import { useEffect, useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import cartoon from '../images/cartoon.jpg'

function Greetings() {
    let [uname, setName] = useState("admin")
    function sayHi() {
        uname = "user"
        setName(uname)
    }

    return (
        <div>
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="name" value={uname} class="form-control" id="exampleInputEmail1" />
                    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
                </div>
                <img src={cartoon} />
                <button type="submit" class="btn btn-primary" onClick={sayHi}>Submit</button>
            </form>
        </div>
    );
}

export default Greetings;