import React, {useContext} from "react";
import { UserContext } from "./ComponentA.jsx";

import ComponentD from "./ComponentD";

function ComponentC(/*props*/) {

    const user = useContext(UserContext);

    return (
        <div className="box">
            <h1>ComponentC</h1>
            {/* <ComponentD user = {props.user}></ComponentD> */}

            <h2>{`Hello Again ${user}`}</h2>

            <ComponentD></ComponentD>
        </div>
    );
}

export default ComponentC