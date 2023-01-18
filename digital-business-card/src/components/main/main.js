import React from 'react';
import './main.css';
import { FaTwitterSquare, FaFacebookSquare, FaInstagramSquare, FaGithubSquare, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function MainContent() {
    return (
        <div className="Rectangle">
            <DisplayNameTitleEmail />
            <DisplayButtons />
            <DisplayAboutInsterests />
            <DisplayeFooter />
        </div>
    )
}
function DisplayNameTitleEmail() {
    return (
        <div>
            <h1 className="name">Luis Fernando Villalón</h1>
            <h2 className="title">Frontend Developer</h2>
            <h3 className="email">luisfvilla012@gmail.com</h3>
        </div>
    )
}

function DisplayButtons() {
    return (
        <div className="btnContainer">
            
            <button onClick={emailUser} className="emailBtn"><MdEmail className = "btnIcon" />Email</button>
            
            <a target='_blank' href={"https://www.linkedin.com/in/luis-villalon/"}>
                <button className="linkedInBtn"><FaLinkedin className = "btnIcon" />LinkedIn</button>
            </a>
        </div>
    )
}

function DisplayAboutInsterests() {
    return (
        <div className="mainText">
            <h4 className="subTitle">About</h4>
            <p className="subText">
            I am a self-taught full-stack developer with an interest 
            in automating daily tasks and creating aesthetically pleasing websites.
            I strive to learn something new everyday relating to technology
            in order to find new ways to make efficient programs.
            </p>
            <h4 className="subTitle">Interests</h4>
            <p className="subText">
            Audacious Coder. Avid Runner. Insatiable Reader. Dedicated Film Watcher. Pizza Fanatic.
            Pop Culture Buff. Caffeine Lover.
            </p>
        </div>
    )
}

function DisplayeFooter() {
    return (
        <div className="footer">
            <a target='_blank' href={"https://twitter.com/suolajboii654"}>
                <FaTwitterSquare className="icon" />
            </a>
            <a target='_blank' href={"https://www.facebook.com/salvadoryluis"}>
                <FaFacebookSquare className="icon" />
            </a>
            <a target='_blank' href={"https://www.instagram.com/luisv.12_/"}>
                <FaInstagramSquare className="icon" />
            </a>
            <a target='_blank' href={"https://github.com/LuisFernandoVillalon"}>
                <FaGithubSquare className="icon" />
            </a>
        </div>
    )
}

function emailUser() {
    window.open('mailto:luisfvilla012@gmail.com?subject=Hi Luis! [Found Your Email Through Your Digital Business Card]&body=Greetings Luis,');
}