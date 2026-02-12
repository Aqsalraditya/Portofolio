import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faReact, faDocker, faPython } from '@fortawesome/free-brands-svg-icons';
import Chip from '@mui/material/Chip';
import { faFigma, faLaravel } from '@fortawesome/free-brands-svg-icons';
import '../assets/styles/Expertise.scss';

const labelsFirst = [
    "HTML5",
    "CSS3",
    "Tailwind CSS",
    "JavaScript",
    "PHP",
    "Laravel",
    "ReactJs",
    "Vue.js",
    "MySQL"
];

const labelsSecond = [
    "GitHub",
    "GitLab",
    "Trello",
    "Figma",
    "Postman"
];

const labelsThird = [
    "Flutter (Dasar)",
    "UI/UX Design",
    "Responsive Design"
];

function Expertise() {
    return (
    <div className="container" id="expertise">
        <div className="skills-container">
            <h1>Expertise</h1>
            <div className="skills-grid">
                {/* Full Stack Web Development */}
                <div className="skill">
                    <FontAwesomeIcon icon={faLaravel} size="3x"/>
                    <h3>Full Stack Web Development</h3>
                    <p>Saya berpengalaman membangun aplikasi web yang dinamis menggunakan ekosistem PHP (Laravel) dan JavaScript modern seperti ReactJS dan Vue.js. Fokus saya adalah menciptakan kode yang bersih dan database MySQL yang teroptimasi.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tech stack:</span>
                        {labelsFirst.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* UI/UX Design & Tools */}
                <div className="skill">
                    <FontAwesomeIcon icon={faFigma} size="3x"/>
                    <h3>UI/UX & Collaboration</h3>
                    <p>Sebelum masuk ke tahap koding, saya terbiasa merancang antarmuka di Figma. Dalam bekerja tim, saya sangat disiplin menggunakan Git (GitHub/GitLab) dan Trello untuk memastikan manajemen proyek yang efisien.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Tools:</span>
                        {labelsSecond.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>

                {/* Mobile & Future Tech */}
                <div className="skill">
                    <FontAwesomeIcon icon={faReact} size="3x"/>
                    <h3>Mobile Development</h3>
                    <p>Memiliki minat besar dalam pengembangan aplikasi mobile lintas platform. Saat ini saya sedang mendalami Flutter untuk melengkapi kemampuan saya dalam menghadirkan solusi digital di berbagai perangkat.</p>
                    <div className="flex-chips">
                        <span className="chip-title">Exploring:</span>
                        {labelsThird.map((label, index) => (
                            <Chip key={index} className='chip' label={label} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Expertise;