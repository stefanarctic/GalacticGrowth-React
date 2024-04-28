import { useEffect } from "react";

const GetYear = () => {
    useEffect(() => {
        document.querySelector('#year').textContent = new Date().getUTCFullYear();
    }, []);
    return (<></>);
}

export default GetYear;