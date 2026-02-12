import React from "react";
import mock11 from '../assets/images/mock11.png';
import mock12 from '../assets/images/mock12.png';
import mock13 from '../assets/images/mock13.png';
import mock14 from '../assets/images/mock14.png';
import mock15 from '../assets/images/mock15.png';
import mock16 from '../assets/images/mock16.png';
import mock17 from '../assets/images/mock17.jpg';
import mock18 from '../assets/images/mock18.png';
import mock19 from '../assets/images/mock19.png';
import mock20 from '../assets/images/mock20.png';
import mock21 from '../assets/images/mock21.png';
import mock22 from '../assets/images/mock22.png';
import mock23 from '../assets/images/mock23.png';
import mock24 from '../assets/images/mock24.png';
import mock25 from '../assets/images/mock25.png';
import mock26 from '../assets/images/mock26.png';
import mock27 from '../assets/images/mock27.png';
import mock28 from '../assets/images/mock28.png';
import mock29 from '../assets/images/mock29.png';
import mock30 from '../assets/images/mock30.png';
import mock31 from '../assets/images/mock31.png';
import mock32 from '../assets/images/mock32.png';
import mock33 from '../assets/images/mock33.png';
import mock34 from '../assets/images/mock34.png';
import mock35 from '../assets/images/mock35.png';
import mock36 from '../assets/images/mock36.png';
import '../assets/styles/Project.scss';

function Project() {
    return (
        <div className="projects-container" id="projects">
            <h1>Personal Projects</h1>
                <div className="projects-grid">
                    {/* Proyek 1 */}
                    <div className="project">
                        <a href="/spp-documentation.pdf" target="_blank" rel="noreferrer"><img src={mock11} className="zoom" alt="thumbnail" width="100%"/></a>
                        <a href="/spp-documentation.pdf" target="_blank" rel="noreferrer"><h2>Pembayaran SPP</h2></a>
                        <p>Developed a comprehensive school tuition payment system to streamline financial administration, featuring automated billing, payment history tracking, and real-time reporting for students and staff.</p>
                    </div>

                    {/* Proyek 2 */}
                    <div className="project">
                        <a href="/pengaduan-masyarakat.pdf" target="_blank" rel="noreferrer"><img src={mock12} className="zoom" alt="thumbnail" width="100%"/></a>
                        <a href="/pengaduan-masyarakat.pdf" target="_blank" rel="noreferrer"><h2>Pengaduan Masyarakat</h2></a>
                        <p>Created a public service complaint platform that allows citizens to report local issues. The system facilitates transparent communication between the community and authorities with status tracking for every report.</p>
                    </div>

                    {/* Proyek 3 */}
                    <div className="project">
                        <a href="/absensi-fingerprint.pdf" target="_blank" rel="noreferrer"><img src={mock13} className="zoom" alt="thumbnail" width="100%"/></a>
                        <a href="/absensi-fingerprint.pdf" target="_blank" rel="noreferrer"><h2>Absensi Fingerprint</h2></a>
                        <p>Integrated hardware and software to build an employee attendance system using fingerprint authentication, ensuring accurate data logs, reducing manual errors, and automating monthly attendance summaries.</p>
                    </div>

                    {/* Proyek 4 */}
                    <div className="project">
                        <a href="/perpustakaan.pdf" target="_blank" rel="noreferrer"><img src={mock14} className="zoom" alt="thumbnail" width="100%"/></a>
                        <a href="/perpustakaan.pdf" target="_blank" rel="noreferrer"><h2>Perpustakaan</h2></a>
                        <p>Built a digital library management system to organize book collections, manage member registrations, and automate the borrowing and returning process with built-in overdue notification features.</p>
                    </div>

                    {/* Proyek 5 */}
                    <div className="project">
                        <a href="/cuaca-app.pdf" target="_blank" rel="noreferrer"><img src={mock15} className="zoom" alt="thumbnail" width="100%"/></a>
                        <a href="/cuaca-app.pdf" target="_blank" rel="noreferrer"><h2>Cuaca</h2></a>
                        <p>Developed a real-time weather application using OpenWeather API to provide users with accurate forecasts, humidity levels, and wind speed data based on their current geographic location.</p>
                    </div>

                    {/* Proyek 6 */}
                    <div className="project">
                        <a href="/inventaris-system.pdf" target="_blank" rel="noreferrer"><img src={mock16} className="zoom" alt="thumbnail" width="100%"/></a>
                        <a href="/inventaris-system.pdf" target="_blank" rel="noreferrer"><h2>Inventaris</h2></a>
                        <p>Designed an inventory control system for businesses to monitor stock levels in real-time, manage supplier information, and generate low-stock alerts to prevent supply chain disruptions.</p>
                    </div>

                    {/* Proyek 7 */}
                    <div className="project">
                        <a href="/perpustakaan-v2.pdf" target="_blank" rel="noreferrer"><img src={mock17} className="zoom" alt="thumbnail" width="100%"/></a>
                        <a href="/perpustakaan-v2.pdf" target="_blank" rel="noreferrer"><h2>Perpustakaan V2</h2></a>
                        <p>An enhanced version of the library system featuring a more advanced search algorithm, database optimization for large record sets, and a redesigned user interface for better accessibility.</p>
                    </div>

                    {/* Proyek 8 */}
                    <div className="project">
                        <a href="/ecommerce-platform.pdf" target="_blank" rel="noreferrer"><img src={mock21} className="zoom" alt="thumbnail" width="100%"/></a>
                        <a href="/ecommerce-platform.pdf" target="_blank" rel="noreferrer"><h2>E-Commerce</h2></a>
                        <p>Developed a full-stack e-commerce platform with a functional shopping cart, product categorization, secure checkout simulation, and an admin dashboard for efficient product and order management.</p>
                    </div>
            </div>

            <h1 className="cert-title">Certificates</h1>
            <div className="certificates-grid">
                <div className="certificate-item">
                    <img src={mock18} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Codepolitan</h2>
                </div>
                <div className="certificate-item">
                    <img src={mock19} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Dicoding</h2>
                </div>
                <div className="certificate-item">
                    <img src={mock20} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Dicoding</h2>
                </div>
                <div className="certificate-item">
                    <img src={mock22} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Dicoding</h2>
                </div>
                <div className="certificate-item">
                    <img src={mock23} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>K3-Learning</h2>
                </div>
                <div className="certificate-item">
                    <img src={mock24} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Unity</h2>
                </div>
                <div className="certificate-item">
                    <img src={mock25} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Wadhwani</h2>
                </div>
                <div className="certificate-item">
                    <img src={mock26} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Wadhwani</h2>
                </div>
                <div className="certificate-item">
                    <img src={mock27} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Wadhwani</h2>
                </div>
                <div className="certificate-item">
                    <img src={mock28} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Wadhwani</h2>
                </div>
                <div className="certificate-item">
                    <img src={mock29} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Wadhwani</h2>
                </div>
                <div className="certificate-item">
                    <img src={mock30} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Wadhwani</h2>
                </div>
                <div className="certificate-item">
                    <img src={mock31} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Wadhwani</h2>
                </div>
                <div className="certificate-item">
                    <img src={mock32} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Wadhwani</h2>
                </div>
                <div className="certificate-item">
                    <img src={mock33} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Wadhwani</h2>
                </div>
                <div className="certificate-item">
                    <img src={mock34} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Wadhwani</h2>
                </div>
                <div className="certificate-item">
                    <img src={mock35} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Wadhwani</h2>
                </div>
                <div className="certificate-item">
                    <img src={mock36} className="zoom" alt="thumbnail" width="100%"/>
                    <h2>Wadhwani SkillsScore</h2>
                </div>
            </div>
        </div>
    );
}

export default Project;