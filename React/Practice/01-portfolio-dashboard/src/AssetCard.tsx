import { Asset } from "./types/Asset"

interface AssetCardProps {
    asset: Asset;
    onRemove: (symbol: string)=> void;
}


function AssetCard({ asset, onRemove }: AssetCardProps) {
    return (
        <div>
            {asset.name} ({asset.symbol}) - ${asset.value} - {asset.change}%

            <button onClick={() => onRemove(asset.symbol)}>Remove</button>
        </div>
    );
}

export default AssetCard;








































































































/*
interface AssetCardProps{
    name: string;
    symbol: string;
    value: number;
    change: number;
    onRemove: (symbol: string) => void;
}


//destructuring 
function AssetCard({name, symbol, value, change, onRemove}: AssetCardProps){
    return(
        <div>
            <h3>{name} ({symbol})</h3>
            <p>Value: ${value}</p>
            <p>Change: {change}%</p>

            <button onClick={()=> onRemove(symbol)}>Remove</button>
        </div>
    );
}

export default AssetCard;
*/