import { useState } from "react";
import AssetEditor from "./AssetEditor";
import { Asset } from "./types/Asset"
import AssetList from "./AssetList";



function App() {

  //State (assets) should live in App, useState is runtime logic → must be inside function, State will store → array of Asset
  const [assets, setAssets] = useState<Asset[]>([]);


  const handleAdd = (newAsset: Asset) => {
    //Actually updates the data(state)
    setAssets([...assets, newAsset]);
  }

  const handleRemove = (symbol: string) => {
    setAssets(assets.filter((asset) => asset.symbol !== symbol));
  }


  return (
    <div>
      {/* App → gives function to AssetForm, So later AssetEditor will call onAdd(...) */}
      <AssetEditor onAdd={handleAdd} />
      <AssetList assets={assets} onRemove={handleRemove} />

    </div>
  );
}

export default App;

























































































/*
import { useState } from "react";

import AssetCard from "./AssetCard";

import AssetEditor from "./AssetEditor";


function App() {

  const [assets, setAssets] = useState([
    { name: "Apple", symbol: "AAPL", value: 150, change: 2 }
  ]);

  const [name, setName] = useState("");
  const [symbol, setSymbol] = useState("");
  const [value, setValue] = useState("");
  const [change, setChange] = useState("");

  const handleRemove = (symbol: string) => {
    const updatedAssets = assets.filter(a => a.symbol !== symbol);
    setAssets(updatedAssets);
  }

  const handleAdd = () => {
    const newAsset  = {
      name: name,
      symbol: symbol,
      value: Number(value),
      change: Number(change)
    };

    setAssets([...assets, newAsset]);  

    // reset inputs
    setName("");
    setSymbol("");
    setValue("");
    setChange("");
  };

  return (
    <div>
      <AssetEditor onAdd = {handleAdd}/>


      <input placeholder="Name" value = {name} onChange = {(e) => setName(e.target.value)}/>

      <input placeholder="Symbol" value = {symbol} onChange = {(e) => setSymbol(e.target.value)} />

      <input placeholder="Value" value={value} onChange={(e) => setValue(e.target.value)}/>

      <input placeholder="Change" value={change} onChange={(e) => setChange(e.target.value)}/>

      <button onClick={handleAdd}>Add Asset</button>

      {assets.map((asset) => (
        <AssetCard
          key={asset.symbol}
          name={asset.name}
          symbol={asset.symbol}
          value={asset.value}
          change={asset.change}
          onRemove={handleRemove}
          />
      ))}
    </div>
  );
}

export default App;
*/