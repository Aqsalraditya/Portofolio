import React from "react";
import '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase } from '@fortawesome/free-solid-svg-icons';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../assets/styles/Timeline.scss'

function Timeline() {
  return (
    <div id="history">
      <div className="items-container">
        <h1>Career History</h1>
        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: 'white', color: 'rgb(39, 40, 34)' }}
            contentArrowStyle={{ borderRight: '7px solid  white' }}
            date="July 2025 - Dec 2025"
            iconStyle={{ background: '#5000ca', color: 'rgb(39, 40, 34)' }}
            icon={<FontAwesomeIcon icon={faBriefcase} />}
          >
            <h3 className="vertical-timeline-element-title">Sentral Bisnis Wikrama</h3>
            <p>
              Mengembangkan aplikasi web dengan Vue.js (frontend) dan backend dasar, termasuk pembuatan serta integrasi API dengan database.
              Membangun sistem dengan fitur autentikasi dan CRUD master data, serta melakukan perapihan UI/UX agar alur aplikasi lebih rapi dan user-friendly.
              Mengembangkan sistem absensi fingerprint online dengan laporan, rekap data, dashboard statistik, dan notifikasi WhatsApp.
              Melakukan analisis, deployment, dan maintenance sistem, termasuk perancangan alur, normalisasi data, serta perbaikan bug agar sistem stabil dan siap digunakan.
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </div>
  );
}

export default Timeline;