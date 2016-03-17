/*
 * Example of using Typescript with React
 */
import * as React from "react";
import * as ReactDOM from "react-dom";
import Hello from "../Hello/hello";
import {name, timeNow} from "../TypescriptModule/aModule";

ReactDOM.render(
    <Hello name={name} />,
    document.getElementById("root")
);

console.log(timeNow());
