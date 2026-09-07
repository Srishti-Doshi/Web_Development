import {Asset} from "./types/Asset";
import AssetCard from "./AssetCard";

interface AssetListProps{
    assets: Asset[];
    onRemove: (string:string) => void;
}

function AssetList({assets, onRemove}: AssetListProps){
    return(
        <div>
            {assets.map((asset) => (
                <AssetCard 
                key = {asset.symbol} 
                asset = {asset}
                onRemove={onRemove}
                />
            ))}
        </div>
    )
}

export default AssetList;