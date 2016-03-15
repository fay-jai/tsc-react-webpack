import * as React from "react";

class HelloProps {
    public name: string;
}

class Hello extends React.Component<HelloProps, {}> {
    render() {
        return <div>Hello, {this.props.name}</div>;
    }
}

export default Hello;
