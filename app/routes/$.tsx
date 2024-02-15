import { useOutletContext } from "@remix-run/react";

export default function Index({}) {
    const outletCon = useOutletContext()
    const mycon = JSON.stringify(outletCon)
  return (
    <>
      <h2 className="my-14">{mycon}</h2>
    </>
  );
}