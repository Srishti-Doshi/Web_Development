import { useState } from "react";
import { Asset } from "./types/Asset"

interface AssetEditorProps {
    onAdd: (asset: Asset) => void;
}



function AssetEditor({ onAdd }: AssetEditorProps) {

    //Asset form temporarily store : name, symbol, value, change
    // App → stores ALL assets
    // AssetForm → stores current input only

    const [name, setName] = useState("");
    const [symbol, setSymbol] = useState("");
    const [value, setValue] = useState("");
    const [change, setChange] = useState("");

    const handleAdd = () => {
        //Collect Input -> send data to App
        const newAsset: Asset = {
            name,
            symbol,
            value: Number(value),
            change: Number(change)
        };

        onAdd(newAsset);

        //reset inputs
        setName("");
        setSymbol("");
        setValue("");
        setChange("");
    }


    return (
        <div>
            <h2>Portfolio Dashboard: </h2>

            {/* value={name} → shows state */}
            {/* onChange → updates state */}
            {/*This is called: Controlled Component */}
            <input placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} />

            <input placeholder="Symbol" value={symbol} onChange={(e) => setSymbol(e.target.value)} />

            <input placeholder="Value" value={value} onChange={(e) => setValue(e.target.value)} />

            <input placeholder="Change" value={change} onChange={(e) => setChange(e.target.value)} />

            {/* User types → state updates → UI updates */}

            <button onClick={handleAdd}>Add Asset</button>
        </div>
    );
}

export default AssetEditor;









































































































/*
import React from "react";

interface AssetEditorProps{
    onAdd: (asset: {
        name: string;
        symbol: string;
        value: number;
        change: number;
    }) => void;
}

interface AssetEditorState {
    name: string;
    symbol: string;
    value: string;
    change: string;
}

class AssetEditor extends React.Component<AssetEditorProps, AssetEditorState>{

    state: AssetEditorState = {
        name: "",
        symbol: "",
        value: "",
        change: "",
    };

   handleSubmit = () => {
    const newAsset = {
        name: this.state.name,
        symbol: this.state.symbol,
        value: Number(this.state.value),
        change: Number(this.state.change)
    };
    this.props.onAdd(newAsset);
   };

    render(){
        return(
            <div>
                <h2>Asset Editor</h2>

                <input placeholder="Name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>

                <input placeholder="Symbol" value={this.state.symbol} onChange={(e) => this.setState({symbol: e.target.value})}/>

                <input placeholder="Value" value = {this.state.value} onChange={(e) => this.setState({value: e.target.value})} />

                <input placeholder="Change" value = {this.state.change} onChange={(e) => this.setState({change: e.target.value})} />

                <button onClick = {this.handleSubmit}>Add Asset</button>

            </div>
        );
    }
}

export default AssetEditor;
*/