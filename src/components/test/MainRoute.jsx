import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const MainRoute = () => {
    return <Button><Link to='second'>Second Route</Link></Button>
}

export default MainRoute;