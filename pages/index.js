import { useEffect, useState } from "react";
import { useAccount, useConnect, useDisconnect } from "wagmi";

export default function Home() {
  const [mounted, setMounted] = useState(false);
  const { connect, connectors, error, isLoading, pendingConnector } =
    useConnect();
  const { address } = useAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section>
      {mounted ? (
        <main
          className={`flex min-h-screen flex-col items-center justify-between p-24 bg-white text-black`}
        >
          {connectors.map((connector) => (
            <button
              // disabled={!connector.ready}
              key={connector.id}
              onClick={() => connect({ connector })}
              className="border boder-1 border-black rounded-sm px-3 py-1"
            >
              <p>{connector.name}</p>
            </button>
          ))}

          {error && <div>{error.message}</div>}
          {address ? (
            <div>
              <p>Address: {address}</p>
              <button
                className="px-3 py-1 border border-black rounded-sm"
                onClick={disconnect}
              >
                Log out
              </button>
            </div>
          ) : null}
        </main>
      ) : null}
    </section>
  );
}
