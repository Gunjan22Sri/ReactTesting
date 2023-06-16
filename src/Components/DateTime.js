import React, { useState } from "react";
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

function DispDate() {
    const date = new Date().toLocaleDateString();
    let time = new Date().toLocaleTimeString();
    const [ctime, setTim] = useState(time);
    const timeRefresh = () => {
        time = new Date().toLocaleTimeString();
        setTim(time);
    }
    setInterval(timeRefresh, 1000);

    return (
        <>
            {/* <button className="btn btn-success">click</button> */}
            <h1>Current date: {date}</h1>
            <h2>Current time: {time}</h2>
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <th scope="row">1</th>
                        <td>Mark</td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                    <tr>
                        <th scope="row">2</th>
                        <td>Jacob</td>
                        <td>Thornton</td>
                        <td>@fat</td>
                    </tr>
                    <tr>
                        <th scope="row">3</th>
                        <td colspan="2">Larry the Bird</td>
                        <td>@twitter</td>
                    </tr>
                </tbody>
            </table>
        </>
    );

}
export default DispDate;