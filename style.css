:root {
    --primary-blue: #0A66FF;
    --primary-orange: #FF9A1F;
    --light-blue: #4D94FF;
    --light-orange: #FFB04D;
    --dark-text: #1A1A1A;
    --gray-text: #4A4A4A;
    --light-bg: #F8F9FA;
    --white: #FFFFFF;
    --transition: all 0.3s ease;
    --shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    --shadow-hover: 0 15px 40px rgba(0, 0, 0, 0.12);
    --card-shadow: 0 5px 20px rgba(10, 102, 255, 0.1);
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: 'Inter', sans-serif;
    color: var(--gray-text);
    line-height: 1.6;
    overflow-x: hidden;
    background-color: var(--white);
}

h1, h2, h3, h4, h5, h6 {
    font-family: 'Poppins', sans-serif;
    color: var(--dark-text);
    font-weight: 600;
    line-height: 1.3;
}

.container {
    width: 100%;
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px;
}

/* --- Boutons --- */
.btn {
    display: inline-block;
    padding: 14px 32px;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: var(--transition);
    font-size: 16px;
    cursor: pointer;
    border: none;
    font-family: 'Inter', sans-serif;
    text-align: center;
}

.btn-primary {
    background-color: var(--primary-orange);
    color: var(--white);
}

.btn-primary:hover {
    background-color: #e68a1a;
    transform: translateY(-3px);
    box-shadow: var(--shadow-hover);
}

.btn-secondary {
    background-color: transparent;
    color: var(--white);
    border: 2px solid var(--white);
}

.btn-secondary:hover {
    background-color: rgba(255, 255, 255, 0.1);
    transform: translateY(-3px);
}

/* --- HEADER --- */
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 1000;
    background-color: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    box-shadow: 0 2px 20px rgba(0, 0, 0, 0.05);
    transition: var(--transition);
}

header.scrolled {
    padding: 10px 0;
    box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
}

.header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px 0;
}

.logo {
    display: flex;
    align-items: center;
    text-decoration: none;
}

.logo-img {
    height: 60px;
    width: auto;
}

/* --- NAVIGATION --- */
nav ul {
    display: flex;
    list-style: none;
}

nav ul li {
    margin-left: 25px;
}

nav ul li a {
    text-decoration: none;
    color: var(--dark-text);
    font-weight: 500;
    transition: var(--transition);
    position: relative;
    font-size: 15px;
}

nav ul li a:hover {
    color: var(--primary-blue);
}

nav ul li a::after {
    content: '';
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 0;
    height: 2px;
    background-color: var(--primary-blue);
    transition: var(--transition);
}

nav ul li a:hover::after {
    width: 100%;
}

/* --- Bouton menu mobile --- */
.mobile-menu-btn {
    display: none;
    background: none;
    border: none;
    font-size: 26px;
    color: var(--dark-text);
    cursor: pointer;
    z-index: 1001;
}

/* --- Menu mobile déroulant --- */
nav ul.nav-expanded {
    display: flex !important;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    width: 100%;
    background: var(--white);
    padding: 20px 0;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
    z-index: 999;
    animation: slideInDown 0.3s ease forwards;
}

@keyframes slideInDown {
    from {
        opacity: 0;
        transform: translateY(-20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

nav ul.nav-expanded li {
    margin: 0;
    text-align: center;
}

nav ul.nav-expanded li a {
    display: block;
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.05);
}

nav ul.nav-expanded li:last-child a {
    border-bottom: none;
}

/* --- Pour les écrans larges : menu visible --- */
@media (min-width: 769px) {
    nav ul {
        display: flex !important;
        position: static;
        flex-direction: row;
        background: none;
        box-shadow: none;
        height: auto;
    }

    .mobile-menu-btn {
        display: none;
    }
}

/* --- Pour les écrans mobiles : bouton visible --- */
@media (max-width: 768px) {
    nav ul {
        display: none;
    }

    .mobile-menu-btn {
        display: block;
    }

    .logo-img {
        height: 50px;
    }

    header {
        padding: 10px 20px;
    }
}

/* ===========================
   About Page Specific Styles
   =========================== */

/* Hero About Section */
.hero-about {
    position: relative;
    min-height: 80vh;
    padding: 140px 0 80px;
    background: linear-gradient(135deg, var(--primary-blue) 0%, var(--light-blue) 100%);
    color: var(--white);
    overflow: hidden;
}

.hero-about::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    background: url('images/patterns/about-pattern.svg') no-repeat;
    background-size: cover;
    opacity: 0.1;
}

.hero-about-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    position: relative;
    z-index: 2;
}

.hero-about-text h1 {
    font-size: 3rem;
    margin-bottom: 15px;
    color: var(--white);
}

.hero-about-text h1 span {
    color: var(--primary-orange);
}

.hero-about-text .hero-subtitle {
    font-size: 1.3rem;
    margin-bottom: 25px;
    opacity: 0.9;
}

.hero-about-text > p {
    font-size: 1.1rem;
    margin-bottom: 40px;
    line-height: 1.7;
    opacity: 0.95;
}

.hero-stats {
    display: flex;
    gap: 30px;
}

.hero-stat {
    text-align: center;
}

.hero-stat .stat-number {
    font-size: 2.2rem;
    font-weight: 700;
    margin-bottom: 5px;
    color: var(--primary-orange);
}

.hero-stat .stat-label {
    font-size: 0.9rem;
    opacity: 0.8;
}

/* Floating Cards Animation */
.floating-cards {
    position: relative;
    height: 300px;
}

.floating-card {
    position: absolute;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 1px solid rgba(255, 255, 255, 0.2);
    border-radius: 20px;
    padding: 20px;
    text-align: center;
    color: var(--white);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    transition: var(--transition);
}

.floating-card i {
    font-size: 2rem;
    margin-bottom: 10px;
    display: block;
}

.floating-card span {
    font-weight: 600;
    font-size: 0.9rem;
}

.card-1 {
    top: 20px;
    left: 0;
    animation: float 6s ease-in-out infinite;
}

.card-2 {
    top: 120px;
    right: 20px;
    animation: float 6s ease-in-out infinite 2s;
}

.card-3 {
    bottom: 40px;
    left: 50%;
    transform: translateX(-50%);
    animation: float 6s ease-in-out infinite 4s;
}

@keyframes float {
    0%, 100% { transform: translateY(0) rotate(0deg); }
    50% { transform: translateY(-20px) rotate(5deg); }
}

.hero-scroll-indicator {
    position: absolute;
    bottom: 30px;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: rgba(255, 255, 255, 0.7);
    animation: bounce 2s infinite;
}

.hero-scroll-indicator span {
    display: block;
    margin-bottom: 10px;
    font-size: 0.9rem;
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
}

/* Mission Vision Section */
.mission-vision {
    padding: 80px 0;
    background-color: var(--white);
}

.mv-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 40px;
}

.mv-card {
    background: var(--white);
    padding: 40px 30px;
    border-radius: 20px;
    box-shadow: var(--card-shadow);
    border: 1px solid rgba(10, 102, 255, 0.1);
    text-align: center;
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.mv-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
}

.mission-card::before {
    background: linear-gradient(90deg, var(--primary-blue), var(--light-blue));
}

.vision-card::before {
    background: linear-gradient(90deg, var(--primary-orange), var(--light-orange));
}

.mv-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
}

.mv-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 25px;
    background: var(--light-bg);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 2rem;
}

.mission-card .mv-icon {
    color: var(--primary-blue);
}

.vision-card .mv-icon {
    color: var(--primary-orange);
}

.mv-card h2 {
    margin-bottom: 20px;
    font-size: 1.8rem;
}

.mv-card > p {
    margin-bottom: 25px;
    line-height: 1.7;
    color: var(--gray-text);
}

.mv-features {
    list-style: none;
    text-align: left;
}

.mv-features li {
    margin-bottom: 12px;
    display: flex;
    align-items: flex-start;
}

.mv-features li i {
    color: var(--primary-blue);
    margin-right: 12px;
    margin-top: 4px;
    flex-shrink: 0;
}

.vision-card .mv-features li i {
    color: var(--primary-orange);
}

/* Leadership Section */
.leadership {
    padding: 80px 0;
    background-color: var(--light-bg);
}

.leadership-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.leader-card {
    background: var(--white);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--card-shadow);
    transition: var(--transition);
}

.leader-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
}

.leader-image {
    position: relative;
    height: 280px;
    overflow: hidden;
}

.leader-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.leader-card:hover .leader-image img {
    transform: scale(1.05);
}

.leader-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(10, 102, 255, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: var(--transition);
}

.leader-card:hover .leader-overlay {
    opacity: 1;
}

.partner-logo-large {
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: var(--light-bg);
    padding: 40px;
}

.partner-logo-large img {
    max-width: 200px;
    max-height: 120px;
    object-fit: contain;
}

.leader-info {
    padding: 30px;
}

.leader-info h3 {
    margin-bottom: 5px;
    font-size: 1.4rem;
}

.leader-title {
    color: var(--primary-blue);
    font-weight: 600;
    margin-bottom: 15px;
    font-size: 0.95rem;
}

.leader-bio {
    margin-bottom: 20px;
    line-height: 1.6;
    color: var(--gray-text);
}

.leader-expertise {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
}

.expertise-tag {
    background: var(--light-bg);
    color: var(--primary-blue);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 500;
}

/* Values Section */
.values {
    padding: 80px 0;
    background-color: var(--white);
}

.values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.value-card {
    background: var(--white);
    padding: 40px 30px;
    border-radius: 20px;
    text-align: center;
    box-shadow: var(--card-shadow);
    border: 1px solid rgba(10, 102, 255, 0.05);
    transition: var(--transition);
}

.value-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
    border-color: rgba(10, 102, 255, 0.2);
}

.value-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 25px;
    background: linear-gradient(135deg, var(--primary-blue), var(--light-blue));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 2rem;
}

.value-card h3 {
    margin-bottom: 15px;
    font-size: 1.3rem;
}

.value-card p {
    line-height: 1.7;
    color: var(--gray-text);
}

/* Expertise Section */
.expertise {
    padding: 80px 0;
    background: linear-gradient(135deg, var(--light-bg) 0%, var(--white) 100%);
}

.expertise-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
}

.expertise-text h2 {
    font-size: 2.2rem;
    margin-bottom: 15px;
}

.expertise-text > p {
    font-size: 1.1rem;
    margin-bottom: 40px;
    color: var(--gray-text);
}

.expertise-stats {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 30px;
    margin-bottom: 40px;
}

.expertise-stat {
    text-align: center;
}

.expertise-stat .stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 8px;
    color: var(--primary-blue);
}

.expertise-stat .stat-label {
    font-size: 0.9rem;
    color: var(--gray-text);
}

.expertise-chart {
    background: var(--white);
    padding: 40px 30px;
    border-radius: 20px;
    box-shadow: var(--card-shadow);
}

.chart-item {
    margin-bottom: 25px;
}

.chart-item:last-child {
    margin-bottom: 0;
}

.chart-label {
    margin-bottom: 10px;
    font-weight: 600;
    color: var(--dark-text);
}

.chart-bar {
    height: 12px;
    background: var(--light-bg);
    border-radius: 10px;
    overflow: hidden;
    margin-bottom: 8px;
}

.chart-fill {
    height: 100%;
    background: linear-gradient(90deg, var(--primary-blue), var(--light-blue));
    border-radius: 10px;
    width: 0;
    transition: width 1.5s ease-out;
}

.chart-value {
    text-align: right;
    font-weight: 600;
    color: var(--primary-blue);
    font-size: 0.9rem;
}

/* Trust Section */
.trust {
    padding: 80px 0;
    background-color: var(--light-bg);
}

.trust-content {
    text-align: center;
}

.trust-content h2 {
    font-size: 2.2rem;
    margin-bottom: 50px;
}

.trust-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 30px;
    margin-bottom: 50px;
}

.trust-item {
    background: var(--white);
    padding: 40px 25px;
    border-radius: 20px;
    box-shadow: var(--card-shadow);
    transition: var(--transition);
}

.trust-item:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
}

.trust-item i {
    font-size: 3rem;
    color: var(--primary-orange);
    margin-bottom: 20px;
    display: block;
}

.trust-item h3 {
    margin-bottom: 15px;
    font-size: 1.3rem;
}

.trust-item p {
    line-height: 1.6;
    color: var(--gray-text);
}

.trust-cta {
    background: var(--white);
    padding: 40px;
    border-radius: 20px;
    box-shadow: var(--card-shadow);
}

.trust-cta p {
    font-size: 1.2rem;
    margin-bottom: 25px;
    color: var(--dark-text);
}

/* Hero Section avec Slider */
.hero {
    position: relative;
    height: 100vh;
    min-height: 700px;
    max-height: 800px;
    overflow: hidden;
    margin-top: 90px;
}

.hero-slider {
    position: relative;
    width: 100%;
    height: 100%;
}

.slide {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    opacity: 0;
    transition: opacity 1s ease-in-out;
    display: flex;
    align-items: center;
}

.slide.active {
    opacity: 1;
}

.slide-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(135deg, rgba(255, 154, 31, 0.2) 0%, rgba(10, 102, 255, 0.3) 100%);
}

.hero-content {
    position: relative;
    z-index: 2;
    width: 100%;
    padding: 0 20px;
}

.hero-text {
    max-width: 650px;
    text-align: center;
}

.hero-text h1 {
    font-size: 2.8rem;
    margin-bottom: 10px;
    line-height: 1.2;
    color: var(--white);
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
}

.hero-text h1 span {
    color: var(--primary-orange);
}

.hero-subtitle {
    font-size: 1.3rem;
    color: var(--white);
    margin-bottom: 20px;
    font-weight: 500;
    opacity: 0.95;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
}

.hero-text p {
    font-size: 1.1rem;
    margin-bottom: 30px;
    color: rgba(255, 255, 255, 0.95);
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.2);
    line-height: 1.6;
}

.hero-btns {
    display: flex;
    gap: 15px;
    justify-content: center;
    flex-wrap: wrap;
}

/* Contrôles du slider */
.slider-controls {
    position: absolute;
    bottom: 40px;
    left: 0;
    width: 100%;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
}

.slider-prev, .slider-next {
    background: rgba(255, 255, 255, 0.3);
    border: none;
    color: white;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition);
    backdrop-filter: blur(10px);
}

.slider-prev:hover, .slider-next:hover {
    background: rgba(255, 255, 255, 0.5);
    transform: scale(1.1);
}

.slider-dots {
    display: flex;
    gap: 10px;
}

.dot {
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.5);
    cursor: pointer;
    transition: var(--transition);
}

.dot.active {
    background: var(--primary-orange);
    transform: scale(1.2);
}

.dot:hover {
    background: rgba(255, 255, 255, 0.8);
}

/* Services Section */
.services {
    padding: 80px 0;
    background-color: var(--white);
}

.section-header {
    text-align: center;
    margin-bottom: 50px;
}

.section-header h2 {
    font-size: 2.2rem;
    margin-bottom: 15px;
}

.section-header p {
    max-width: 600px;
    margin: 0 auto;
    font-size: 1.1rem;
    color: var(--gray-text);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 25px;
}

.service-card {
    background-color: var(--white);
    border-radius: 20px;
    padding: 30px 25px;
    text-align: left;
    box-shadow: var(--card-shadow);
    transition: var(--transition);
    position: relative;
    overflow: hidden;
    border: 1px solid rgba(10, 102, 255, 0.1);
    height: 100%;
    display: flex;
    flex-direction: column;
}

.service-card::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, var(--primary-blue), var(--primary-orange));
}

.service-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
    border-color: rgba(10, 102, 255, 0.2);
}

.service-icon {
    width: 70px;
    height: 70px;
    margin-bottom: 25px;
    background: linear-gradient(135deg, var(--primary-blue), var(--light-blue));
    border-radius: 18px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 28px;
}

.service-card h3 {
    font-size: 1.4rem;
    margin-bottom: 15px;
    color: var(--dark-text);
}

.service-card p {
    margin-bottom: 20px;
    color: var(--gray-text);
    flex-grow: 1;
}

.service-features {
    list-style: none;
    margin-bottom: 25px;
}

.service-features li {
    margin-bottom: 8px;
    display: flex;
    align-items: center;
    color: var(--gray-text);
}

.service-features li i {
    color: var(--primary-blue);
    margin-right: 10px;
    font-size: 14px;
}

.service-link {
    color: var(--primary-blue);
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    transition: var(--transition);
    font-size: 15px;
    margin-top: auto;
}

.service-link i {
    margin-left: 8px;
    transition: var(--transition);
}

.service-link:hover {
    color: var(--light-blue);
}

.service-link:hover i {
    transform: translateX(5px);
}

/* Stats Section */
.stats {
    padding: 80px 0;
    background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('images/logo/baner.jpeg');
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    color: var(--white);
    position: relative;
}

.stats::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    z-index: 1;
}

.stats .container {
    position: relative;
    z-index: 2;
}

.stats .section-header h2 {
    color: var(--white);
}

.stats .section-header p {
    color: rgba(255, 255, 255, 0.8);
}

.stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
}

.stat-item {
    text-align: center;
    padding: 30px 15px;
    background: rgba(255, 255, 255, 0.1);
    border-radius: 20px;
    box-shadow: var(--card-shadow);
    transition: var(--transition);
    border: 1px solid rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
}

.stat-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
    background: rgba(255, 255, 255, 0.15);
}

.stat-icon {
    font-size: 2.5rem;
    margin-bottom: 15px;
    color: var(--primary-orange);
}

.stat-number {
    font-size: 2.8rem;
    font-weight: 700;
    margin-bottom: 10px;
    font-family: 'Poppins', sans-serif;
    color: var(--white);
}

.stat-label {
    font-size: 1rem;
    color: rgba(255, 255, 255, 0.9);
    line-height: 1.4;
}

/* Innovation Section */
.innovation {
    padding: 80px 0;
    background-color: var(--light-bg);
}

.innovation-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 50px;
    align-items: center;
}

.innovation-text h2 {
    font-size: 2.2rem;
    margin-bottom: 20px;
}

.innovation-text p {
    font-size: 1.1rem;
    margin-bottom: 30px;
    color: var(--gray-text);
}

.innovation-features {
    margin-bottom: 40px;
}

.feature {
    display: flex;
    align-items: flex-start;
    margin-bottom: 25px;
}

.feature i {
    font-size: 1.5rem;
    color: var(--primary-blue);
    margin-right: 15px;
    margin-top: 5px;
}

.feature h4 {
    margin-bottom: 5px;
    font-size: 1.2rem;
}

.feature p {
    margin: 0;
    color: var(--gray-text);
    font-size: 1rem;
}

.innovation-visual {
    display: flex;
    justify-content: center;
}

.innovation-card {
    background: var(--white);
    border-radius: 20px;
    padding: 25px;
    box-shadow: var(--card-shadow);
    border: 1px solid rgba(10, 102, 255, 0.1);
    max-width: 400px;
    width: 100%;
}

.card-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 25px;
    padding-bottom: 15px;
    border-bottom: 2px solid var(--light-bg);
}

.card-header h3 {
    margin: 0;
    color: var(--dark-text);
    font-size: 1.3rem;
}

.card-header span {
    background: var(--primary-orange);
    color: var(--white);
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
}

.card-content {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.product {
    display: flex;
    align-items: center;
    padding: 15px;
    background: var(--light-bg);
    border-radius: 12px;
    transition: var(--transition);
}

.product:hover {
    transform: translateX(5px);
    background: rgba(10, 102, 255, 0.05);
}

.product i {
    font-size: 1.8rem;
    color: var(--primary-blue);
    margin-right: 15px;
}

.product h4 {
    margin-bottom: 5px;
    font-size: 1.1rem;
}

.product p {
    margin: 0;
    font-size: 0.9rem;
    color: var(--gray-text);
}

/* Partners Section */
.partners {
    padding: 80px 0;
    background-color: var(--white);
}

.partners-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 25px;
}

.partner-logo {
    background-color: var(--white);
    height: 140px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-radius: 15px;
    box-shadow: var(--shadow);
    transition: var(--transition);
    padding: 20px;
    text-align: center;
    border: 1px solid rgba(10, 102, 255, 0.1);
}

.partner-logo:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
}

.partner-logo img {
    max-width: 100%;
    max-height: 60px;
    margin-bottom: 15px;
    filter: grayscale(100%);
    transition: var(--transition);
}

.partner-logo:hover img {
    filter: grayscale(0%);
}

.partner-logo i {
    font-size: 3rem;
    color: var(--primary-blue);
    margin-bottom: 15px;
}

.partner-logo p {
    font-size: 0.9rem;
    color: var(--gray-text);
    margin: 0;
}

/* CTA Section */
.cta {
    padding: 80px 0;
    background: linear-gradient(135deg, var(--primary-blue), var(--light-blue));
    color: var(--white);
    text-align: center;
    position: relative;
    overflow: hidden;
}

.cta::before {
    content: '';
    position: absolute;
    top: -50%;
    right: -20%;
    width: 500px;
    height: 500px;
    background: radial-gradient(circle, rgba(255, 154, 31, 0.2) 0%, rgba(255, 154, 31, 0) 70%);
    border-radius: 50%;
}

.cta-content h2 {
    color: var(--white);
    font-size: 2.2rem;
    margin-bottom: 20px;
}

.cta-content p {
    max-width: 600px;
    margin: 0 auto 30px;
    font-size: 1.1rem;
    opacity: 0.9;
}

.cta-btns {
    display: flex;
    gap: 15px;
    justify-content: center;
    margin-bottom: 40px;
}

.cta-features {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}

.cta-features .feature {
    display: flex;
    align-items: center;
    gap: 10px;
    color: rgba(255, 255, 255, 0.9);
}

.cta-features .feature i {
    color: var(--primary-orange);
}

/* Footer */
footer {
    background-color: var(--dark-text);
    color: var(--white);
    padding: 60px 0 20px;
}

.footer-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
    margin-bottom: 40px;
}

.footer-col h3 {
    color: var(--white);
    font-size: 1.2rem;
    margin-bottom: 20px;
    position: relative;
}

.footer-col h3::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 40px;
    height: 3px;
    background-color: var(--primary-orange);
}

.footer-col ul {
    list-style: none;
}

.footer-col ul li {
    margin-bottom: 10px;
}

.footer-col ul li a {
    color: rgba(255, 255, 255, 0.7);
    text-decoration: none;
    transition: var(--transition);
    font-size: 0.95rem;
}

.footer-col ul li a:hover {
    color: var(--white);
    padding-left: 5px;
}

.footer-col p {
    color: rgba(255, 255, 255, 0.7);
    margin-bottom: 15px;
    font-size: 0.95rem;
}

.social-links {
    display: flex;
    gap: 15px;
}

.social-links a {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40px;
    height: 40px;
    background-color: rgba(255, 255, 255, 0.1);
    border-radius: 50%;
    color: var(--white);
    text-decoration: none;
    transition: var(--transition);
}

.social-links a:hover {
    background-color: var(--primary-orange);
    transform: translateY(-3px);
}

.newsletter-form {
    display: flex;
    margin-top: 15px;
}

.newsletter-form input {
    flex: 1;
    padding: 12px 15px;
    border: none;
    border-radius: 50px 0 0 50px;
    font-family: 'Inter', sans-serif;
    font-size: 0.9rem;
}

.newsletter-form button {
    background-color: var(--primary-orange);
    color: var(--white);
    border: none;
    padding: 0 20px;
    border-radius: 0 50px 50px 0;
    cursor: pointer;
    transition: var(--transition);
}

.newsletter-form button:hover {
    background-color: #e68a1a;
}

.footer-bottom {
    text-align: center;
    padding-top: 20px;
    border-top: 1px solid rgba(255, 255, 255, 0.1);
    color: rgba(255, 255, 255, 0.5);
    font-size: 0.9rem;
}

/* Animations */
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: opacity 0.6s ease, transform 0.6s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Responsive */
@media (max-width: 992px) {
    .hero-text h1 {
        font-size: 2.3rem;
    }
    
    .hero-subtitle {
        font-size: 1.1rem;
    }
    
    .innovation-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .innovation-visual {
        order: -1;
    }
    
    .section-header h2 {
        font-size: 2rem;
    }
    
    .hero-about-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }
    
    .hero-about-text h1 {
        font-size: 2.5rem;
    }
    
    .mv-grid {
        grid-template-columns: 1fr;
    }
    
    .expertise-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .expertise-stats {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .leadership-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    nav ul {
        display: none;
    }

    .mobile-menu-btn {
        display: block;
    }

    .hero {
        margin-top: 80px;
        min-height: 600px;
        max-height: 700px;
    }
    
    .hero-text h1 {
        font-size: 2rem;
    }
    
    .hero-subtitle {
        font-size: 1rem;
    }

    .hero-text p {
        font-size: 1rem;
    }

    .hero-btns {
        flex-direction: column;
        align-items: center;
    }

    .btn {
        width: 100%;
        max-width: 250px;
        margin-bottom: 10px;
    }

    .section-header h2 {
        font-size: 1.8rem;
    }
    
    .slider-controls {
        gap: 15px;
    }
    
    .slider-prev, .slider-next {
        width: 40px;
        height: 40px;
    }
    
    .cta-btns {
        flex-direction: column;
        align-items: center;
    }
    
    .cta-features {
        flex-direction: column;
        align-items: center;
        gap: 15px;
    }
    
    .logo-img {
        height: 50px;
    }
    
    .services, .stats, .innovation, .partners, .testimonials, .cta {
        padding: 60px 0;
    }
    
    .services-grid {
        grid-template-columns: 1fr;
    }
    
    .stats-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .partners-grid {
        grid-template-columns: repeat(2, 1fr);
    }
    
    .footer-grid {
        grid-template-columns: 1fr;
        gap: 30px;
    }
    
    .hero-about {
        padding: 120px 0 60px;
    }
    
    .hero-about-text h1 {
        font-size: 2.2rem;
    }
    
    .hero-stats {
        flex-direction: column;
        gap: 20px;
    }
    
    .floating-cards {
        height: 200px;
    }
    
    .values-grid {
        grid-template-columns: 1fr;
    }
    
    .trust-grid {
        grid-template-columns: 1fr;
    }
    
    .expertise-stats {
        grid-template-columns: 1fr;
    }
    
    .hero-scroll-indicator {
        display: none;
    }
}

@media (max-width: 576px) {
    .hero {
        min-height: 500px;
        max-height: 600px;
    }
    
    .hero-text h1 {
        font-size: 1.8rem;
    }
    
    .hero-subtitle {
        font-size: 0.95rem;
    }

    .services, .stats, .innovation, .partners, .testimonials, .cta {
        padding: 50px 0;
    }

    .stat-number {
        font-size: 2.2rem;
    }
    
    .services-grid {
        grid-template-columns: 1fr;
    }
    
    .stats-grid {
        grid-template-columns: 1fr;
    }
    
    .partners-grid {
        grid-template-columns: 1fr;
    }
    
    .logo-img {
        height: 45px;
    }
    
    .section-header h2 {
        font-size: 1.6rem;
    }
    
    .section-header p {
        font-size: 1rem;
    }
    
    .innovation-text h2 {
        font-size: 1.6rem;
    }
    
    .cta-content h2 {
        font-size: 1.8rem;
    }
    
    .btn {
        padding: 12px 24px;
        font-size: 15px;
    }
    
    .hero-about-text h1 {
        font-size: 1.8rem;
    }
    
    .mv-card,
    .value-card,
    .trust-item {
        padding: 30px 20px;
    }
    
    .leader-info {
        padding: 20px;
    }
    
    .expertise-chart {
        padding: 30px 20px;
    }
    
    .trust-cta {
        padding: 30px 20px;
    }
}

/* Animations supplémentaires */
@keyframes progress {
    from { width: 0%; }
    to { width: 100%; }
}

@keyframes slideInUp {
    from {
        opacity: 0;
        transform: translateY(30px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* Loader */
.page-loader {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--white);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 9999;
    transition: opacity 0.5s ease;
}

.loader-content {
    text-align: center;
}

.loader-logo img {
    height: 80px;
    margin-bottom: 20px;
}

.loader-spinner {
    width: 40px;
    height: 40px;
    border: 4px solid #f3f3f3;
    border-top: 4px solid var(--primary-orange);
    border-radius: 50%;
    animation: spin 1s linear infinite;
    margin: 0 auto;
}

@keyframes spin {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

/* Navigation mobile améliorée */
nav ul.nav-expanded {
    display: flex !important;
    flex-direction: column;
    position: fixed;
    top: 0;
    right: 0;
    width: 80%;
    max-width: 300px;
    height: 100vh;
    background: var(--white);
    padding: 80px 20px 20px;
    transform: translateX(100%);
    transition: transform 0.3s ease;
    box-shadow: -5px 0 15px rgba(0, 0, 0, 0.1);
    z-index: 999;
}

.mobile-menu-btn.active i::before {
    content: '\f00d';
}

/* Barre de progression du slider */
.slide-progress {
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 3px;
    background: rgba(255, 255, 255, 0.3);
}

.slide-progress-bar {
    height: 100%;
    background: var(--primary-orange);
    width: 0%;
}

/* Animations de sections */
.section-visible {
    animation: fadeInUp 0.8s ease-out;
}

@keyframes fadeInUp {
    from {
        opacity: 0;
        transform: translateY(50px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
}

/* États de focus améliorés */
.btn:focus, 
a:focus,
input:focus,
button:focus {
    outline: 2px solid var(--primary-orange);
    outline-offset: 2px;
}

/* Transition pour les images lazy */
img.lazy {
    opacity: 0;
    transition: opacity 0.3s ease;
}

img:not(.lazy) {
    opacity: 1;
}

/* Accessibilité */
.skip-link {
    position: absolute;
    top: -40px;
    left: 6px;
    background: #000;
    color: white;
    padding: 8px;
    z-index: 10000;
    text-decoration: none;
}

.skip-link:focus {
    top: 6px;
}

.sr-only {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
}

/* Améliorations pour l'accessibilité */
.nav-link:focus,
.btn:focus,
.service-link:focus {
    outline: 2px solid #0056b3;
    outline-offset: 2px;
}

/* Badge nouveau */
.badge {
    background: #e74c3c;
    color: white;
    padding: 4px 8px;
    border-radius: 12px;
    font-size: 0.7rem;
    font-weight: 600;
}

/* Footer amélioré */
.footer-links {
    margin-top: 10px;
}

.footer-links a {
    margin-left: 20px;
    color: #ccc;
    text-decoration: none;
}

.footer-links a:hover {
    color: white;
}

/* Responsive amélioré */
@media (max-width: 768px) {
    .footer-links {
        text-align: center;
    }
    
    .footer-links a {
        margin: 0 10px;
        display: inline-block;
    }
}













/* ===========================
   Offers Page Specific Styles
   =========================== */

/* Hero Offers Section */
.hero-offers {
    position: relative;
    min-height: 70vh;
    padding: 140px 0 80px;
    background: linear-gradient(135deg, var(--primary-blue) 0%, var(--light-blue) 100%);
    color: var(--white);
    overflow: hidden;
}

.hero-offers::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    background: url('images/patterns/offers-pattern.svg') no-repeat;
    background-size: cover;
    opacity: 0.1;
}

.hero-offers-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    position: relative;
    z-index: 2;
}

.hero-offers-text h1 {
    font-size: 3rem;
    margin-bottom: 15px;
    color: var(--white);
}

.hero-offers-text h1 span {
    color: var(--primary-orange);
}

.hero-offers-text .hero-subtitle {
    font-size: 1.3rem;
    margin-bottom: 25px;
    opacity: 0.9;
}

.hero-offers-text > p {
    font-size: 1.1rem;
    margin-bottom: 40px;
    line-height: 1.7;
    opacity: 0.95;
}

.hero-offers-stats {
    display: flex;
    gap: 30px;
}

.hero-offer-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.hero-offer-stat i {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: var(--primary-orange);
}

.hero-offer-stat span {
    font-size: 0.9rem;
    font-weight: 600;
}

/* Offers Animation */
.offers-animation {
    position: relative;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.animation-circle {
    position: absolute;
    width: 120px;
    height: 120px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-weight: 600;
    text-align: center;
    padding: 10px;
    animation: orbit 8s linear infinite;
}

.animation-center {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: var(--primary-orange);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--white);
    z-index: 2;
}

.animation-center i {
    font-size: 2rem;
    margin-bottom: 5px;
}

.animation-center span {
    font-size: 0.8rem;
    font-weight: 600;
}

.circle-1 {
    animation-delay: 0s;
    background: rgba(10, 102, 255, 0.3);
}

.circle-2 {
    animation-delay: -2.6s;
    background: rgba(255, 154, 31, 0.3);
}

.circle-3 {
    animation-delay: -5.2s;
    background: rgba(77, 148, 255, 0.3);
}

@keyframes orbit {
    0% {
        transform: rotate(0deg) translateX(150px) rotate(0deg);
    }
    100% {
        transform: rotate(360deg) translateX(150px) rotate(-360deg);
    }
}

/* Offers Navigation */
.offers-nav {
    background: var(--light-bg);
    padding: 30px 0;
    border-bottom: 1px solid rgba(10, 102, 255, 0.1);
}

.offers-nav-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}

.offer-nav-btn {
    background: var(--white);
    border: 2px solid transparent;
    padding: 12px 24px;
    border-radius: 50px;
    font-weight: 600;
    color: var(--gray-text);
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 8px;
}

.offer-nav-btn:hover {
    border-color: var(--primary-blue);
    color: var(--primary-blue);
    transform: translateY(-2px);
}

.offer-nav-btn.active {
    background: var(--primary-blue);
    color: var(--white);
    border-color: var(--primary-blue);
}

/* Main Offers Section */
.main-offers {
    padding: 80px 0;
    background: var(--white);
}

.offers-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
}

.offer-card {
    background: var(--white);
    border-radius: 20px;
    padding: 0;
    box-shadow: var(--card-shadow);
    border: 1px solid rgba(10, 102, 255, 0.1);
    transition: var(--transition);
    position: relative;
    overflow: hidden;
}

.offer-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
    border-color: rgba(10, 102, 255, 0.3);
}

.offer-badge {
    position: absolute;
    top: 20px;
    right: 20px;
    background: var(--primary-blue);
    color: var(--white);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 2;
}

.offer-badge.highlight {
    background: var(--primary-orange);
}

.offer-header {
    padding: 30px 30px 20px;
    border-bottom: 1px solid var(--light-bg);
    text-align: center;
}

.offer-icon {
    width: 80px;
    height: 80px;
    margin: 0 auto 20px;
    background: linear-gradient(135deg, var(--primary-blue), var(--light-blue));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 2rem;
}

.offer-header h3 {
    margin-bottom: 15px;
    font-size: 1.4rem;
}

.offer-price {
    color: var(--gray-text);
    font-size: 1.1rem;
}

.offer-price span {
    color: var(--primary-blue);
    font-weight: 700;
    font-size: 1.3rem;
}

.offer-content {
    padding: 25px 30px;
}

.offer-content > p {
    margin-bottom: 20px;
    line-height: 1.6;
    color: var(--gray-text);
}

.offer-features {
    list-style: none;
    margin-bottom: 25px;
}

.offer-features li {
    margin-bottom: 12px;
    display: flex;
    align-items: flex-start;
}

.offer-features li i {
    color: var(--primary-blue);
    margin-right: 12px;
    margin-top: 4px;
    flex-shrink: 0;
}

.offer-duration {
    display: flex;
    align-items: center;
    gap: 10px;
    color: var(--gray-text);
    font-size: 0.9rem;
}

.offer-duration i {
    color: var(--primary-orange);
}

.offer-footer {
    padding: 0 30px 30px;
    text-align: center;
}

.offer-footer .btn {
    width: 100%;
}

/* Offers Comparison Section */
.offers-comparison {
    padding: 80px 0;
    background: var(--light-bg);
}

.comparison-table {
    background: var(--white);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--card-shadow);
}

.comparison-header {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    background: var(--primary-blue);
    color: var(--white);
    font-weight: 600;
}

.comparison-header > div {
    padding: 20px;
    text-align: center;
    border-right: 1px solid rgba(255, 255, 255, 0.1);
}

.comparison-header > div:last-child {
    border-right: none;
}

.comparison-row {
    display: grid;
    grid-template-columns: 2fr 1fr 1fr 1fr 1fr;
    border-bottom: 1px solid var(--light-bg);
}

.comparison-row:last-child {
    border-bottom: none;
}

.comparison-row > div {
    padding: 15px 20px;
    text-align: center;
    border-right: 1px solid var(--light-bg);
    display: flex;
    align-items: center;
    justify-content: center;
}

.comparison-row > div:last-child {
    border-right: none;
}

.comparison-feature {
    font-weight: 600;
    background: var(--light-bg);
    justify-content: flex-start !important;
}

/* Government Focus Section */
.government-focus {
    padding: 80px 0;
    background: linear-gradient(135deg, var(--light-bg) 0%, var(--white) 100%);
}

.government-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 60px;
    align-items: start;
}

.government-text h2 {
    font-size: 2.2rem;
    margin-bottom: 15px;
}

.government-text > p {
    font-size: 1.1rem;
    margin-bottom: 40px;
    color: var(--gray-text);
}

.government-features {
    margin-bottom: 40px;
}

.government-feature {
    display: flex;
    align-items: flex-start;
    margin-bottom: 30px;
}

.government-feature i {
    font-size: 2rem;
    color: var(--primary-blue);
    margin-right: 20px;
    margin-top: 5px;
    flex-shrink: 0;
}

.government-feature h4 {
    margin-bottom: 8px;
    font-size: 1.2rem;
}

.government-feature p {
    color: var(--gray-text);
    line-height: 1.6;
}

.government-cta {
    background: var(--white);
    padding: 30px;
    border-radius: 15px;
    box-shadow: var(--card-shadow);
    border-left: 4px solid var(--primary-blue);
}

.government-cta h3 {
    margin-bottom: 10px;
    color: var(--primary-blue);
}

.government-cta p {
    margin-bottom: 20px;
    color: var(--gray-text);
}

.government-visual {
    display: flex;
    justify-content: center;
}

.government-badge {
    background: var(--white);
    padding: 40px 30px;
    border-radius: 20px;
    box-shadow: var(--card-shadow);
    text-align: center;
    border: 2px solid var(--primary-blue);
}

.government-badge i {
    font-size: 3rem;
    color: var(--primary-orange);
    margin-bottom: 15px;
    display: block;
}

.government-badge span {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--primary-blue);
    display: block;
    margin-bottom: 10px;
}

.government-badge p {
    color: var(--gray-text);
    font-size: 0.9rem;
    line-height: 1.5;
}

/* Offers CTA Section */
.offers-cta {
    padding: 80px 0;
    background: linear-gradient(135deg, var(--primary-blue), var(--light-blue));
    color: var(--white);
    text-align: center;
}

.offers-cta-content h2 {
    color: var(--white);
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.offers-cta-content > p {
    max-width: 600px;
    margin: 0 auto 40px;
    font-size: 1.2rem;
    opacity: 0.9;
}

.cta-features {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.cta-feature {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
}

.cta-feature i {
    color: var(--primary-orange);
}

.cta-btns {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

/* Responsive Design for Offers Page */
@media (max-width: 992px) {
    .hero-offers-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }
    
    .hero-offers-text h1 {
        font-size: 2.5rem;
    }
    
    .hero-offers-stats {
        justify-content: center;
    }
    
    .government-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .comparison-header,
    .comparison-row {
        grid-template-columns: 1fr;
        display: block;
    }
    
    .comparison-header > div,
    .comparison-row > div {
        border-right: none;
        border-bottom: 1px solid var(--light-bg);
        text-align: left;
        justify-content: flex-start;
    }
    
    .comparison-header > div:last-child,
    .comparison-row > div:last-child {
        border-bottom: none;
    }
}

@media (max-width: 768px) {
    .hero-offers {
        padding: 120px 0 60px;
    }
    
    .hero-offers-text h1 {
        font-size: 2.2rem;
    }
    
    .hero-offers-stats {
        flex-direction: column;
        gap: 20px;
    }
    
    .offers-nav-container {
        flex-direction: column;
        align-items: center;
    }
    
    .offer-nav-btn {
        width: 100%;
        max-width: 250px;
        justify-content: center;
    }
    
    .offers-grid {
        grid-template-columns: 1fr;
    }
    
    .cta-features {
        flex-direction: column;
        gap: 20px;
    }
    
    .cta-btns {
        flex-direction: column;
        align-items: center;
    }
    
    .animation-circle {
        width: 100px;
        height: 100px;
        font-size: 0.8rem;
    }
}

@media (max-width: 576px) {
    .hero-offers-text h1 {
        font-size: 1.8rem;
    }
    
    .offer-card {
        margin: 0 10px;
    }
    
    .offer-header,
    .offer-content,
    .offer-footer {
        padding: 20px;
    }
    
    .government-cta {
        padding: 20px;
    }
    
    .offers-cta-content h2 {
        font-size: 2rem;
    }
}











/* ===========================
   Projects Page Specific Styles
   =========================== */

/* Hero Projects Section */
.hero-projects {
    position: relative;
    min-height: 70vh;
    padding: 140px 0 80px;
    background: linear-gradient(135deg, var(--primary-blue) 0%, var(--light-blue) 100%);
    color: var(--white);
    overflow: hidden;
}

.hero-projects::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    background: url('images/patterns/projects-pattern.svg') no-repeat;
    background-size: cover;
    opacity: 0.1;
}

.hero-projects-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    position: relative;
    z-index: 2;
}

.hero-projects-text h1 {
    font-size: 3rem;
    margin-bottom: 15px;
    color: var(--white);
}

.hero-projects-text h1 span {
    color: var(--primary-orange);
}

.hero-projects-text .hero-subtitle {
    font-size: 1.3rem;
    margin-bottom: 25px;
    opacity: 0.9;
}

.hero-projects-text > p {
    font-size: 1.1rem;
    margin-bottom: 40px;
    line-height: 1.7;
    opacity: 0.95;
}

.hero-projects-stats {
    display: flex;
    gap: 30px;
}

.hero-project-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.hero-project-stat i {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: var(--primary-orange);
}

.hero-project-stat span {
    font-size: 0.9rem;
    font-weight: 600;
}

/* Projects Animation */
.projects-animation {
    position: relative;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.project-orb {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 1.5rem;
    animation: float 6s ease-in-out infinite;
}

.project-center {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: var(--primary-orange);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--white);
    z-index: 2;
}

.project-center i {
    font-size: 2rem;
    margin-bottom: 5px;
}

.project-center span {
    font-size: 0.8rem;
    font-weight: 600;
}

.orb-1 {
    top: 20px;
    left: 50px;
    animation-delay: 0s;
}

.orb-2 {
    top: 120px;
    right: 30px;
    animation-delay: -2s;
}

.orb-3 {
    bottom: 40px;
    left: 80px;
    animation-delay: -4s;
}

@keyframes float {
    0%, 100% { 
        transform: translateY(0) rotate(0deg); 
    }
    50% { 
        transform: translateY(-20px) rotate(180deg); 
    }
}

/* Projects Navigation */
.projects-nav {
    background: var(--light-bg);
    padding: 30px 0;
    border-bottom: 1px solid rgba(10, 102, 255, 0.1);
}

.projects-nav-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}

.project-nav-btn {
    background: var(--white);
    border: 2px solid transparent;
    padding: 12px 24px;
    border-radius: 50px;
    font-weight: 600;
    color: var(--gray-text);
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 8px;
}

.project-nav-btn:hover {
    border-color: var(--primary-blue);
    color: var(--primary-blue);
    transform: translateY(-2px);
}

.project-nav-btn.active {
    background: var(--primary-blue);
    color: var(--white);
    border-color: var(--primary-blue);
}

/* Main Projects Section */
.main-projects {
    padding: 80px 0;
    background: var(--white);
}

.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 30px;
}

.project-card {
    background: var(--white);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--card-shadow);
    border: 1px solid rgba(10, 102, 255, 0.1);
    transition: var(--transition);
    position: relative;
}

.project-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
    border-color: rgba(10, 102, 255, 0.3);
}

.project-badge {
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 2;
    color: var(--white);
}

.project-badge.success {
    background: #28a745;
}

.project-badge.primary {
    background: var(--primary-blue);
}

.project-badge.warning {
    background: #ffc107;
    color: var(--dark-text);
}

.project-image {
    position: relative;
    height: 250px;
    overflow: hidden;
}

.project-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.project-card:hover .project-image img {
    transform: scale(1.05);
}

.project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(10, 102, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: var(--transition);
}

.project-card:hover .project-overlay {
    opacity: 1;
}

.project-links {
    display: flex;
    gap: 15px;
}

.project-link, .project-demo, .project-info {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--white);
    color: var(--primary-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: var(--transition);
    border: none;
    cursor: pointer;
}

.project-link:hover, .project-demo:hover, .project-info:hover {
    background: var(--primary-orange);
    color: var(--white);
    transform: scale(1.1);
}

.project-content {
    padding: 25px;
}

.project-header {
    margin-bottom: 15px;
}

.project-header h3 {
    font-size: 1.4rem;
    margin-bottom: 5px;
}

.project-subtitle {
    color: var(--primary-blue);
    font-weight: 600;
    font-size: 0.9rem;
}

.project-description {
    margin-bottom: 20px;
    line-height: 1.6;
    color: var(--gray-text);
}

.project-features {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
}

.project-feature {
    display: flex;
    align-items: center;
    gap: 5px;
    background: var(--light-bg);
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 0.8rem;
    color: var(--gray-text);
}

.project-feature i {
    color: var(--primary-blue);
    font-size: 0.7rem;
}

.project-meta {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

.project-stat {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.9rem;
    color: var(--gray-text);
}

.project-stat i {
    color: var(--primary-orange);
}

.project-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
}

.project-status {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.9rem;
    font-weight: 600;
}

.project-status.available {
    color: #28a745;
}

.project-status.licensed {
    color: var(--primary-blue);
}

.project-status.developing {
    color: #ffc107;
}

.project-status.sold {
    color: #6f42c1;
}

.project-footer .btn {
    flex-shrink: 0;
}

/* Projects Stats Section */
.projects-stats {
    padding: 80px 0;
    background: var(--light-bg);
}

.projects-stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
}

.project-stat-item {
    background: var(--white);
    padding: 40px 20px;
    border-radius: 20px;
    text-align: center;
    box-shadow: var(--card-shadow);
    transition: var(--transition);
}

.project-stat-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
}

.project-stat-icon {
    font-size: 3rem;
    color: var(--primary-blue);
    margin-bottom: 20px;
}

.project-stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--dark-text);
}

.project-stat-label {
    color: var(--gray-text);
    font-size: 0.9rem;
}

/* Licensing Section */
.licensing {
    padding: 80px 0;
    background: var(--white);
}

.licensing-content {
    display: grid;
    grid-template-columns: 2fr 1fr;
    gap: 60px;
    align-items: start;
}

.licensing-text h2 {
    font-size: 2.2rem;
    margin-bottom: 15px;
}

.licensing-text > p {
    font-size: 1.1rem;
    margin-bottom: 40px;
    color: var(--gray-text);
}

.licensing-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 25px;
    margin-bottom: 40px;
}

.licensing-option {
    background: var(--light-bg);
    padding: 30px 25px;
    border-radius: 15px;
    text-align: center;
    transition: var(--transition);
}

.licensing-option:hover {
    transform: translateY(-5px);
    background: var(--white);
    box-shadow: var(--card-shadow);
}

.licensing-option i {
    font-size: 2.5rem;
    color: var(--primary-blue);
    margin-bottom: 20px;
    display: block;
}

.licensing-option h4 {
    margin-bottom: 15px;
    font-size: 1.2rem;
}

.licensing-option p {
    margin-bottom: 15px;
    color: var(--gray-text);
    line-height: 1.6;
}

.licensing-price {
    font-weight: 700;
    color: var(--primary-orange);
    font-size: 1.1rem;
}

.licensing-visual {
    display: flex;
    justify-content: center;
}

.licensing-badge {
    background: var(--white);
    padding: 40px 30px;
    border-radius: 20px;
    box-shadow: var(--card-shadow);
    text-align: center;
    border: 2px solid var(--primary-blue);
}

.licensing-badge i {
    font-size: 3rem;
    color: var(--primary-orange);
    margin-bottom: 15px;
    display: block;
}

.licensing-badge span {
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--primary-blue);
    display: block;
    margin-bottom: 10px;
}

.licensing-badge p {
    color: var(--gray-text);
    font-size: 0.9rem;
    line-height: 1.5;
}

/* Projects CTA Section */
.projects-cta {
    padding: 80px 0;
    background: linear-gradient(135deg, var(--primary-blue), var(--light-blue));
    color: var(--white);
    text-align: center;
}

.projects-cta-content h2 {
    color: var(--white);
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.projects-cta-content > p {
    max-width: 600px;
    margin: 0 auto 40px;
    font-size: 1.2rem;
    opacity: 0.9;
}

.cta-features {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.cta-feature {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
}

.cta-feature i {
    color: var(--primary-orange);
}

.cta-btns {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

/* Responsive Design for Projects Page */
@media (max-width: 992px) {
    .hero-projects-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }
    
    .hero-projects-text h1 {
        font-size: 2.5rem;
    }
    
    .hero-projects-stats {
        justify-content: center;
    }
    
    .licensing-content {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .hero-projects {
        padding: 120px 0 60px;
    }
    
    .hero-projects-text h1 {
        font-size: 2.2rem;
    }
    
    .hero-projects-stats {
        flex-direction: column;
        gap: 20px;
    }
    
    .projects-nav-container {
        flex-direction: column;
        align-items: center;
    }
    
    .project-nav-btn {
        width: 100%;
        max-width: 250px;
        justify-content: center;
    }
    
    .project-footer {
        flex-direction: column;
        align-items: stretch;
    }
    
    .project-status {
        justify-content: center;
        margin-bottom: 10px;
    }
    
    .cta-features {
        flex-direction: column;
        gap: 20px;
    }
    
    .cta-btns {
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 576px) {
    .hero-projects-text h1 {
        font-size: 1.8rem;
    }
    
    .projects-grid {
        grid-template-columns: 1fr;
        margin: 0 10px;
    }
    
    .project-content {
        padding: 20px;
    }
    
    .licensing-options {
        grid-template-columns: 1fr;
    }
    
    .projects-cta-content h2 {
        font-size: 2rem;
    }
}







/* ===========================
   Realisations Page Specific Styles
   =========================== */

/* Hero Realisations Section */
.hero-realisations {
    position: relative;
    min-height: 70vh;
    padding: 140px 0 80px;
    background: linear-gradient(135deg, var(--primary-blue) 0%, var(--light-blue) 100%);
    color: var(--white);
    overflow: hidden;
}

.hero-realisations::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    background: url('images/patterns/realisations-pattern.svg') no-repeat;
    background-size: cover;
    opacity: 0.1;
}

.hero-realisations-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    position: relative;
    z-index: 2;
}

.hero-realisations-text h1 {
    font-size: 3rem;
    margin-bottom: 15px;
    color: var(--white);
}

.hero-realisations-text h1 span {
    color: var(--primary-orange);
}

.hero-realisations-text .hero-subtitle {
    font-size: 1.3rem;
    margin-bottom: 25px;
    opacity: 0.9;
}

.hero-realisations-text > p {
    font-size: 1.1rem;
    margin-bottom: 40px;
    line-height: 1.7;
    opacity: 0.95;
}

.hero-realisations-stats {
    display: flex;
    gap: 30px;
}

.hero-realisation-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.hero-realisation-stat i {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: var(--primary-orange);
}

.hero-realisation-stat span {
    font-size: 0.9rem;
    font-weight: 600;
}

/* Realisations Animation */
.realisations-animation {
    position: relative;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.realisation-orb {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 1.5rem;
    animation: float 6s ease-in-out infinite;
}

.realisation-center {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: var(--primary-orange);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--white);
    z-index: 2;
}

.realisation-center i {
    font-size: 2rem;
    margin-bottom: 5px;
}

.realisation-center span {
    font-size: 0.8rem;
    font-weight: 600;
}

.orb-1 {
    top: 20px;
    left: 50px;
    animation-delay: 0s;
}

.orb-2 {
    top: 120px;
    right: 30px;
    animation-delay: -2s;
}

.orb-3 {
    bottom: 40px;
    left: 80px;
    animation-delay: -4s;
}

/* Realisations Navigation */
.realisations-nav {
    background: var(--light-bg);
    padding: 30px 0;
    border-bottom: 1px solid rgba(10, 102, 255, 0.1);
}

.realisations-nav-container {
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
}

.realisation-nav-btn {
    background: var(--white);
    border: 2px solid transparent;
    padding: 12px 24px;
    border-radius: 50px;
    font-weight: 600;
    color: var(--gray-text);
    cursor: pointer;
    transition: var(--transition);
    display: flex;
    align-items: center;
    gap: 8px;
}

.realisation-nav-btn:hover {
    border-color: var(--primary-blue);
    color: var(--primary-blue);
    transform: translateY(-2px);
}

.realisation-nav-btn.active {
    background: var(--primary-blue);
    color: var(--white);
    border-color: var(--primary-blue);
}

/* Main Realisations Section */
.main-realisations {
    padding: 80px 0;
    background: var(--white);
}

.realisations-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    gap: 30px;
}

.realisation-card {
    background: var(--white);
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--card-shadow);
    border: 1px solid rgba(10, 102, 255, 0.1);
    transition: var(--transition);
    position: relative;
}

.realisation-card:hover {
    transform: translateY(-10px);
    box-shadow: var(--shadow-hover);
    border-color: rgba(10, 102, 255, 0.3);
}

.realisation-badge {
    position: absolute;
    top: 20px;
    left: 20px;
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 0.8rem;
    font-weight: 600;
    z-index: 2;
    color: var(--white);
}

.realisation-badge.success {
    background: #28a745;
}

.realisation-image {
    position: relative;
    height: 250px;
    overflow: hidden;
}

.realisation-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: var(--transition);
}

.realisation-card:hover .realisation-image img {
    transform: scale(1.05);
}

.realisation-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(10, 102, 255, 0.9);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: var(--transition);
}

.realisation-card:hover .realisation-overlay {
    opacity: 1;
}

.realisation-links {
    display: flex;
    gap: 15px;
}

.realisation-link, .realisation-demo, .realisation-info {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--white);
    color: var(--primary-blue);
    display: flex;
    align-items: center;
    justify-content: center;
    text-decoration: none;
    transition: var(--transition);
    border: none;
    cursor: pointer;
}

.realisation-link:hover, .realisation-demo:hover, .realisation-info:hover {
    background: var(--primary-orange);
    color: var(--white);
    transform: scale(1.1);
}

.realisation-content {
    padding: 25px;
}

.realisation-header {
    margin-bottom: 15px;
}

.realisation-header h3 {
    font-size: 1.4rem;
    margin-bottom: 5px;
}

.realisation-subtitle {
    color: var(--primary-blue);
    font-weight: 600;
    font-size: 0.9rem;
}

.realisation-description {
    margin-bottom: 20px;
    line-height: 1.6;
    color: var(--gray-text);
}

.realisation-features {
    display: flex;
    flex-wrap: wrap;
    gap: 10px;
    margin-bottom: 20px;
}

.realisation-feature {
    display: flex;
    align-items: center;
    gap: 5px;
    background: var(--light-bg);
    padding: 6px 12px;
    border-radius: 15px;
    font-size: 0.8rem;
    color: var(--gray-text);
}

.realisation-feature i {
    color: var(--primary-blue);
    font-size: 0.7rem;
}

.realisation-meta {
    display: flex;
    gap: 20px;
    margin-bottom: 20px;
}

.realisation-stat {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.9rem;
    color: var(--gray-text);
}

.realisation-stat i {
    color: var(--primary-orange);
}

.realisation-footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 15px;
}

.realisation-status {
    display: flex;
    align-items: center;
    gap: 5px;
    font-size: 0.9rem;
    font-weight: 600;
}

.realisation-status.delivered {
    color: #28a745;
}

.realisation-footer .btn {
    flex-shrink: 0;
}

/* Realisations Stats Section */
.realisations-stats {
    padding: 80px 0;
    background: var(--light-bg);
}

.realisations-stats-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 30px;
}

.realisation-stat-item {
    background: var(--white);
    padding: 40px 20px;
    border-radius: 20px;
    text-align: center;
    box-shadow: var(--card-shadow);
    transition: var(--transition);
}

.realisation-stat-item:hover {
    transform: translateY(-5px);
    box-shadow: var(--shadow-hover);
}

.realisation-stat-icon {
    font-size: 3rem;
    color: var(--primary-blue);
    margin-bottom: 20px;
}

.realisation-stat-number {
    font-size: 2.5rem;
    font-weight: 700;
    margin-bottom: 10px;
    color: var(--dark-text);
}

.realisation-stat-label {
    color: var(--gray-text);
    font-size: 0.9rem;
}

/* Testimonials Section */
.testimonials {
    padding: 80px 0;
    background: var(--white);
}

.testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 30px;
}

.testimonial-card {
    background: var(--white);
    padding: 30px;
    border-radius: 20px;
    box-shadow: var(--card-shadow);
    border: 1px solid rgba(10, 102, 255, 0.1);
    transition: var(--transition);
}

.testimonial-card:hover {
    transform: translateY(-8px);
    box-shadow: var(--shadow-hover);
}

.testimonial-content {
    position: relative;
    margin-bottom: 25px;
}

.testimonial-content i {
    font-size: 2rem;
    color: var(--primary-orange);
    margin-bottom: 15px;
    display: block;
}

.testimonial-content p {
    font-style: italic;
    line-height: 1.6;
    color: var(--gray-text);
}

.testimonial-author {
    display: flex;
    align-items: center;
    gap: 15px;
}

.author-avatar {
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: var(--light-bg);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--primary-blue);
    font-size: 1.2rem;
}

.author-info h4 {
    margin-bottom: 5px;
    font-size: 1.1rem;
}

.author-info p {
    color: var(--gray-text);
    font-size: 0.9rem;
    margin: 0;
}

/* Realisations CTA Section */
.realisations-cta {
    padding: 80px 0;
    background: linear-gradient(135deg, var(--primary-blue), var(--light-blue));
    color: var(--white);
    text-align: center;
}

.realisations-cta-content h2 {
    color: var(--white);
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.realisations-cta-content > p {
    max-width: 600px;
    margin: 0 auto 40px;
    font-size: 1.2rem;
    opacity: 0.9;
}

.cta-features {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.cta-feature {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
}

.cta-feature i {
    color: var(--primary-orange);
}

.cta-btns {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

/* Responsive Design for Realisations Page */
@media (max-width: 992px) {
    .hero-realisations-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }
    
    .hero-realisations-text h1 {
        font-size: 2.5rem;
    }
    
    .hero-realisations-stats {
        justify-content: center;
    }
    
    .realisations-grid {
        grid-template-columns: 1fr;
    }
}

@media (max-width: 768px) {
    .hero-realisations {
        padding: 120px 0 60px;
    }
    
    .hero-realisations-text h1 {
        font-size: 2.2rem;
    }
    
    .hero-realisations-stats {
        flex-direction: column;
        gap: 20px;
    }
    
    .realisations-nav-container {
        flex-direction: column;
        align-items: center;
    }
    
    .realisation-nav-btn {
        width: 100%;
        max-width: 250px;
        justify-content: center;
    }
    
    .realisation-footer {
        flex-direction: column;
        align-items: stretch;
    }
    
    .realisation-status {
        justify-content: center;
        margin-bottom: 10px;
    }
    
    .cta-features {
        flex-direction: column;
        gap: 20px;
    }
    
    .cta-btns {
        flex-direction: column;
        align-items: center;
    }
}

@media (max-width: 576px) {
    .hero-realisations-text h1 {
        font-size: 1.8rem;
    }
    
    .realisations-grid {
        grid-template-columns: 1fr;
        margin: 0 10px;
    }
    
    .realisation-content {
        padding: 20px;
    }
    
    .realisations-cta-content h2 {
        font-size: 2rem;
    }
    
    .testimonials-grid {
        grid-template-columns: 1fr;
    }
}










/* ===========================
   Contact Page Specific Styles
   =========================== */

/* Hero Contact Section */
.hero-contact {
    position: relative;
    min-height: 70vh;
    padding: 140px 0 80px;
    background: linear-gradient(135deg, var(--primary-blue) 0%, var(--light-blue) 100%);
    color: var(--white);
    overflow: hidden;
}

.hero-contact::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 100%;
    background: url('images/patterns/contact-pattern.svg') no-repeat;
    background-size: cover;
    opacity: 0.1;
}

.hero-contact-content {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 60px;
    align-items: center;
    position: relative;
    z-index: 2;
}

.hero-contact-text h1 {
    font-size: 3rem;
    margin-bottom: 15px;
    color: var(--white);
}

.hero-contact-text h1 span {
    color: var(--primary-orange);
}

.hero-contact-text .hero-subtitle {
    font-size: 1.3rem;
    margin-bottom: 25px;
    opacity: 0.9;
}

.hero-contact-text > p {
    font-size: 1.1rem;
    margin-bottom: 40px;
    line-height: 1.7;
    opacity: 0.95;
}

.hero-contact-stats {
    display: flex;
    gap: 30px;
}

.hero-contact-stat {
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.hero-contact-stat i {
    font-size: 2.5rem;
    margin-bottom: 10px;
    color: var(--primary-orange);
}

.hero-contact-stat span {
    font-size: 0.9rem;
    font-weight: 600;
}

/* Contact Animation */
.contact-animation {
    position: relative;
    height: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
}

.contact-orb {
    position: absolute;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.2);
    backdrop-filter: blur(10px);
    border: 2px solid rgba(255, 255, 255, 0.3);
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 1.5rem;
    animation: float 6s ease-in-out infinite;
}

.contact-center {
    position: absolute;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    background: var(--primary-orange);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: var(--white);
    z-index: 2;
}

.contact-center i {
    font-size: 2rem;
    margin-bottom: 5px;
}

.contact-center span {
    font-size: 0.8rem;
    font-weight: 600;
}

.orb-1 {
    top: 20px;
    left: 50px;
    animation-delay: 0s;
}

.orb-2 {
    top: 120px;
    right: 30px;
    animation-delay: -2s;
}

.orb-3 {
    bottom: 40px;
    left: 80px;
    animation-delay: -4s;
}

/* Contact Main Section */
.contact-main {
    padding: 80px 0;
    background: var(--white);
}

.contact-grid {
    display: grid;
    grid-template-columns: 1fr 1.2fr;
    gap: 60px;
}

/* Contact Information */
.contact-info h2 {
    font-size: 2.2rem;
    margin-bottom: 15px;
}

.contact-description {
    font-size: 1.1rem;
    margin-bottom: 40px;
    color: var(--gray-text);
}

.contact-methods {
    display: flex;
    flex-direction: column;
    gap: 25px;
    margin-bottom: 40px;
}

.contact-method {
    display: flex;
    gap: 20px;
    padding: 25px;
    background: var(--light-bg);
    border-radius: 15px;
    transition: var(--transition);
}

.contact-method:hover {
    background: var(--white);
    box-shadow: var(--card-shadow);
    transform: translateY(-5px);
}

.method-icon {
    width: 60px;
    height: 60px;
    background: linear-gradient(135deg, var(--primary-blue), var(--light-blue));
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--white);
    font-size: 1.5rem;
    flex-shrink: 0;
}

.method-content h3 {
    margin-bottom: 8px;
    font-size: 1.2rem;
}

.method-content p {
    margin-bottom: 12px;
    color: var(--gray-text);
}

.method-link {
    color: var(--primary-blue);
    font-weight: 600;
    text-decoration: none;
    display: inline-flex;
    align-items: center;
    gap: 5px;
    transition: var(--transition);
}

.method-link:hover {
    color: var(--primary-orange);
}

.method-link i {
    transition: var(--transition);
}

.method-link:hover i {
    transform: translateX(3px);
}

/* Business Hours */
.business-hours h3 {
    margin-bottom: 20px;
    font-size: 1.3rem;
}

.hours-grid {
    display: flex;
    flex-direction: column;
    gap: 12px;
}

.hour-item {
    display: flex;
    justify-content: space-between;
    padding: 12px 0;
    border-bottom: 1px solid var(--light-bg);
}

.hour-item:last-child {
    border-bottom: none;
}

.hour-item span:first-child {
    font-weight: 600;
}

.hour-item span:last-child {
    color: var(--gray-text);
}

/* Contact Form */
.contact-form-container {
    background: var(--white);
    padding: 40px;
    border-radius: 20px;
    box-shadow: var(--card-shadow);
    border: 1px solid rgba(10, 102, 255, 0.1);
}

.form-header {
    text-align: center;
    margin-bottom: 30px;
}

.form-header h2 {
    font-size: 1.8rem;
    margin-bottom: 10px;
}

.form-header p {
    color: var(--gray-text);
}

.contact-form {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.form-group {
    display: flex;
    flex-direction: column;
}

.form-group label {
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--dark-text);
}

.form-group input,
.form-group select,
.form-group textarea {
    padding: 12px 16px;
    border: 2px solid var(--light-bg);
    border-radius: 10px;
    font-family: 'Inter', sans-serif;
    font-size: 1rem;
    transition: var(--transition);
    background: var(--white);
}

.form-group input:focus,
.form-group select:focus,
.form-group textarea:focus {
    outline: none;
    border-color: var(--primary-blue);
    box-shadow: 0 0 0 3px rgba(10, 102, 255, 0.1);
}

.form-group textarea {
    resize: vertical;
    min-height: 120px;
}

.error-message {
    color: #dc3545;
    font-size: 0.85rem;
    margin-top: 5px;
    min-height: 20px;
}

.form-footer {
    text-align: center;
}

.btn-full {
    width: 100%;
}

.form-note {
    margin-top: 15px;
    font-size: 0.9rem;
    color: var(--gray-text);
}

/* Map Section */
.contact-map {
    padding: 80px 0;
    background: var(--light-bg);
}

.map-container {
    position: relative;
    height: 400px;
    border-radius: 20px;
    overflow: hidden;
    box-shadow: var(--card-shadow);
}

#map {
    height: 100%;
    width: 100%;
}

.map-overlay {
    position: absolute;
    top: 20px;
    left: 20px;
    background: var(--white);
    padding: 20px;
    border-radius: 10px;
    box-shadow: var(--shadow);
    max-width: 300px;
}

.map-info h3 {
    margin-bottom: 10px;
    color: var(--primary-blue);
}

.map-info p {
    margin-bottom: 8px;
    color: var(--gray-text);
    display: flex;
    align-items: center;
    gap: 8px;
}

.map-info p i {
    color: var(--primary-orange);
}

/* FAQ Section */
.contact-faq {
    padding: 80px 0;
    background: var(--white);
}

.faq-grid {
    display: flex;
    flex-direction: column;
    gap: 15px;
}

.faq-item {
    background: var(--white);
    border: 1px solid var(--light-bg);
    border-radius: 15px;
    overflow: hidden;
    transition: var(--transition);
}

.faq-item:hover {
    border-color: rgba(10, 102, 255, 0.2);
    box-shadow: var(--card-shadow);
}

.faq-question {
    padding: 25px;
    cursor: pointer;
    display: flex;
    justify-content: space-between;
    align-items: center;
    transition: var(--transition);
}

.faq-question:hover {
    background: var(--light-bg);
}

.faq-question h3 {
    margin: 0;
    font-size: 1.1rem;
    color: var(--dark-text);
}

.faq-question i {
    color: var(--primary-blue);
    transition: var(--transition);
}

.faq-answer {
    padding: 0 25px;
    max-height: 0;
    overflow: hidden;
    transition: all 0.3s ease;
}

.faq-item.active .faq-answer {
    padding: 0 25px 25px;
    max-height: 500px;
}

.faq-item.active .faq-question i {
    transform: rotate(180deg);
}

.faq-answer p {
    margin-bottom: 15px;
    color: var(--gray-text);
}

.faq-answer ul {
    margin-bottom: 15px;
    padding-left: 20px;
}

.faq-answer li {
    margin-bottom: 8px;
    color: var(--gray-text);
}

/* Contact CTA Section */
.contact-cta {
    padding: 80px 0;
    background: linear-gradient(135deg, var(--primary-blue), var(--light-blue));
    color: var(--white);
    text-align: center;
}

.contact-cta-content h2 {
    color: var(--white);
    font-size: 2.5rem;
    margin-bottom: 20px;
}

.contact-cta-content > p {
    max-width: 600px;
    margin: 0 auto 40px;
    font-size: 1.2rem;
    opacity: 0.9;
}

.cta-features {
    display: flex;
    justify-content: center;
    gap: 40px;
    margin-bottom: 40px;
    flex-wrap: wrap;
}

.cta-feature {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 1.1rem;
}

.cta-feature i {
    color: var(--primary-orange);
}

.cta-btns {
    display: flex;
    gap: 20px;
    justify-content: center;
    flex-wrap: wrap;
}

/* Responsive Design for Contact Page */
@media (max-width: 992px) {
    .hero-contact-content {
        grid-template-columns: 1fr;
        gap: 40px;
        text-align: center;
    }
    
    .hero-contact-text h1 {
        font-size: 2.5rem;
    }
    
    .hero-contact-stats {
        justify-content: center;
    }
    
    .contact-grid {
        grid-template-columns: 1fr;
        gap: 40px;
    }
    
    .map-overlay {
        position: relative;
        top: 0;
        left: 0;
        max-width: none;
        margin-top: 20px;
    }
}

@media (max-width: 768px) {
    .hero-contact {
        padding: 120px 0 60px;
    }
    
    .hero-contact-text h1 {
        font-size: 2.2rem;
    }
    
    .hero-contact-stats {
        flex-direction: column;
        gap: 20px;
    }
    
    .contact-method {
        flex-direction: column;
        text-align: center;
    }
    
    .method-icon {
        align-self: center;
    }
    
    .contact-form-container {
        padding: 30px 20px;
    }
    
    .cta-features {
        flex-direction: column;
        gap: 20px;
    }
    
    .cta-btns {
        flex-direction: column;
        align-items: center;
    }
    
    .faq-question {
        padding: 20px;
    }
    
    .faq-question h3 {
        font-size: 1rem;
    }
}

@media (max-width: 576px) {
    .hero-contact-text h1 {
        font-size: 1.8rem;
    }
    
    .contact-cta-content h2 {
        font-size: 2rem;
    }
    
    .contact-method {
        padding: 20px;
    }
    
    .map-container {
        height: 300px;
    }
}
