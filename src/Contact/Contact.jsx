import React from "react";
import "./Contact.css";

export default function Contact() {
    return(
        <section className="contact">
            <div className="quest__board">
            <h1 className="quest__title">NEW QUEST AVAILABLE!</h1>
            <div className="quest__card">
                <h2 className="quest__name">Hire a Full-Stack Developer</h2>
                <ul className="quest__details">
                    <li><strong>Objective:</strong> Find a skilled developer to join your team</li>
                    <li><strong>Class:</strong> Full-stack Developer</li>
                    <li><strong>Level:</strong> Senior-Level Coding Wizard</li>
                    <li><strong>Rewards:</strong> Clean code, strong UX, reliable delivery</li>
                </ul>
                <div className="quest__acitons">
                    <a href="mailto:mrwatson2113@gmail.com" className="quest__btn-primary">Accept Quest!</a>
                    <a href="https://docs.google.com/document/d/1kKrp5mP7LiwFRRzxch5vvrWfeAbl8Ss_" className="quest__btn-secondary">More Details...</a>
                </div>
            </div>
            </div>
        </section>
    )
}