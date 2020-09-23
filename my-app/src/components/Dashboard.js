import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
    return (
        <div>
            <Link exact to={"/inventory"}>
            <h4>Click here to view your inventory</h4>
            </Link>
        </div>
    )
}

export default Dashboard;