import { useReducer } from "react";
import { type Asset } from "./types/Asset";
import AssetList from "./AssetList";
import AssetEditorClass from "./AssetEditorClass";

interface PortfolioState {
  assets: Asset[];
}

type PortfolioAction =
  | { type: "add"; asset: Asset }
  | { type: "remove"; symbol: string };

/*
dispatch(action)
→ reducer runs
→ returns new state
→ UI updates
*/

//All logic now lives inside reducer
function portfolioReducer(
  state: PortfolioState,
  action: PortfolioAction,
): PortfolioState {
  switch (action.type) {
    case "add":
      return { assets: [...state.assets, action.asset] };
    case "remove":
      return {
        assets: state.assets.filter((asset) => asset.symbol !== action.symbol),
      };
    default:
      return state;
  }
}

function App() {
  //state → holds data
  // dispatch → updates data

  const [state, dispatch] = useReducer(portfolioReducer, { assets: [] });

  //dispatch = replacement of setState function

  //Instead of directly updating state we send action → reducer handles logic
  const handleAdd = (newAsset: Asset) => {
    dispatch({ type: "add", asset: newAsset });
  };

  const handleRemove = (symbol: string) => {
    dispatch({ type: "remove", symbol });
  };

  return (
    <div>
      <AssetEditorClass onAdd={handleAdd} />
      {/* Now data is inside state object (not direct variable) */}
      <AssetList assets={state.assets} onRemove={handleRemove} />
    </div>
  );
}

export default App;

//dispatch → action → reducer → new state → UI update
