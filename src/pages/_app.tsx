import "../UI/styles/global.css"
import NavGlobal from "../UI/components/nav/NavGlobal"

export default function _app({ Component, pageProps }) {
    return (
        <>
            <NavGlobal/>
            <Component {...pageProps}/>
        </>
    )
};