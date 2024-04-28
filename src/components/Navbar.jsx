import $ from 'jquery';
import { useEffect } from "react";

const Navbar = () => {

    useEffect(() => {
        $("nav ul li > a:not(:only-child)").click(function (e) {
            $(this).siblings(".nav-dropdown").slideToggle()
            $(".nav-dropdown").not($(this).siblings()).hide()
            e.stopPropagation()
        })
        $("html").click(function () {
            $(".nav-dropdown").hide()
        })
        $("#burger-menu").click(function () {
            $("nav ul").slideToggle()
            document.querySelector("nav ul").style.display = "flex"
        })
        $("nav ul li a").on("click", function () {
            $("nav ul").slideToggle()
            document.querySelector("#burger-menu").classList.toggle("active")
        })
        $("#burger-menu").on("click", function () {
            this.classList.toggle("active")
        })
        $(document).scroll(function () {
            $("nav").toggleClass("scrolled", $(this).scrollTop() > 500)
            // $("header").height() - ($("header").height() / 1.5)
        })

        const navLinks = document.querySelectorAll("#nav-list li a")
        const sections = [$('header'), ...document.querySelectorAll('section')]
        navLinks[0].classList.add("selected")
        window.onscroll = _ => {
            sections.forEach(sec => {
                let top = window.scrollY + 1
                let offset = sec.offsetTop
                let height = sec.offsetHeight
                let id = sec.id

                if (top >= offset && top < offset + height) {
                    navLinks.forEach(link => {
                        link.classList.remove('selected')
                        document.querySelector(`#nav-list li a[href="#${id}"`).classList.add('selected')
                    })
                }
                // header += main fix
                if (top < 570) {
                    document.querySelector(`#nav-list li a[href="#about"`).classList.remove('selected')
                    document.querySelector(`#nav-list li a[href="#home"`).classList.add('selected')
                }
            })
        }
    }, []);

    return (
        <nav>
            <div id="logo-container"><span>Sam's X Management</span></div>
            <div id="nav-container">
                <ul id="nav-list">
                    <li><a href="#home">Home</a></li>
                    <li><a href="#about">About</a></li>
                    <li><a href="#testimonials">Testimonials</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#faq">F.A.Q</a></li>
                    <li><a href="#call">Book a call</a></li>
                </ul>
                <div id="nav-mobile"><a id="burger-menu" data-href="#"><span></span></a></div>
            </div>
        </nav>
    );
}

export default Navbar;