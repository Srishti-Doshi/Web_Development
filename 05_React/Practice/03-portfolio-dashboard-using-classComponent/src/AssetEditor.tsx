import { useState } from "react";
import { type Asset } from "./types/Asset"

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
