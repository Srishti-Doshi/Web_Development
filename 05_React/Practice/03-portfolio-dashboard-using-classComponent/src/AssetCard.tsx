import { type Asset } from "./types/Asset";

interface AssetCardProps {
    asset: Asset;
    onRemove: (symbol: string) => void;
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
