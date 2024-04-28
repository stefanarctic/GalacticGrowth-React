import { useEffect } from "react";

const ScrollAni = () => {

    useEffect(() => {
        // ik the codebase needs be optimized

        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show')
                }
                // else {
                //     entry.target.classList.remove('show')
                // }
            })
        })

        const hiddenElements = document.querySelectorAll('.hidden')
        hiddenElements.forEach(el => observer.observe(el))
        // List -> transition-delay

    }, []);

    return (<></>);
}

export default ScrollAni;