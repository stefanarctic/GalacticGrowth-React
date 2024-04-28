import { useEffect } from "react";

const CalendlyScript = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        document.body.appendChild(script);
    }, []);
    return (<></>);
}

export default CalendlyScript;