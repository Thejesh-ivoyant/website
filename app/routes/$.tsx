import { useOutletContext } from "@remix-run/react";
import ErrorBoundaryPage from "~/common-components/errorpage";

export default function Index({}) {
    const outletCon = useOutletContext()
    const mycon = JSON.stringify(outletCon)
    // <h2 className="my-14">{mycon}</h2>
  return (
    <>
     <ErrorBoundaryPage/>
    </>
  );
}