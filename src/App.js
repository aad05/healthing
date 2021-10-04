import React, { useEffect, useState } from "react";
import { Root } from "./root";
import SyncLoader from "react-spinners/SyncLoader";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 10000);
  }, []);
  return (
    <div>
      {loading ? (
        <div className="loader">
          <SyncLoader color={"#e95258"} loading={loading} size={10} />
        </div>
      ) : (
        <Root />
      )}
    </div>
  );
}
export default App;
