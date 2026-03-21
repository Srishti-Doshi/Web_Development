import React from "react";
import { type Asset } from "./types/Asset";

interface AssetEditorProps {
    onAdd: (asset: Asset) => void;
}

interface AssetEditorState {
    name: string;
    symbol: string;
    value: string;
    change: string;
}

/*
Props → what parent sends  
State → internal data  

state in Functional component is stored in → useState  
State in class component is stored in → this.state
*/

class AssetEditorClass extends React.Component<AssetEditorProps, AssetEditorState> {
    state: AssetEditorState = {
        name: "",
        symbol: "",
        value: "",
        change: ""
    };

    handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        this.setState({
            [e.target.name]: e.target.value
            //Dynamic key → becomes actual field name
        } as Pick<AssetEditorState, keyof AssetEditorState>);
    };

    //Since, setState is a method of the class, so we must access it using this.setState.

    handleSubmit = () => {
        const newAsset: Asset = {
            name: this.state.name,
            symbol: this.state.symbol,
            value: Number(this.state.value),
            change: Number(this.state.change)
        };

        this.props.onAdd(newAsset);

        this.setState({
            name: "",
            symbol: "",
            value: "",
            change: ""
        });
    }

    render() {
        return (
            <div>
                <input
                    name="name"
                    placeholder="Name"
                    value={this.state.name}
                    onChange={this.handleChange}
                />

                <input
                    name="symbol"
                    placeholder="Symbol"
                    value={this.state.symbol}
                    onChange={this.handleChange}
                />

                <input
                    name="value"
                    placeholder="Value"
                    value={this.state.value}
                    onChange={this.handleChange}
                />

                <input
                    name="change"
                    placeholder="Change"
                    value={this.state.change}
                    onChange={this.handleChange}
                />

                <button onClick = {this.handleSubmit}>Add Asset</button>
            </div>
        );
    }
}

export default AssetEditorClass;


/*
User types → state updates  
Click button → handleSubmit runs  
→ object created  
→ this.props.onAdd(newAsset)  
→ App updates  
→ UI updates  
 */


/**
✔ Functional (useState)
✔ Class (this.state + this.setState)
 */