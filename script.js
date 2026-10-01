/* ============================================================
   SOWMYA PINNINTI
   PRODUCT MANAGEMENT PORTFOLIO
   SINGLE FILE VERSION
   HTML + CSS + JAVASCRIPT
   ============================================================ */


/* ============================================================
   PAGE HTML
   ============================================================ */

document.body.innerHTML = `

<header class="header">

    <div class="logo">
        SOWMYA<span>.</span>
    </div>

    <nav class="nav">

        <a href="#home" class="nav-link active">HOME</a>
        <a href="#about" class="nav-link">ABOUT</a>
        <a href="#projects" class="nav-link">PROJECTS</a>
        <a href="#experience" class="nav-link">EXPERIENCE</a>
        <a href="#skills" class="nav-link">SKILLS</a>
        <a href="#contact" class="nav-link">CONTACT</a>

    </nav>

    <div class="header-right">

        <a href="mailto:YOUR_EMAIL" class="header-email">
            YOUR_EMAIL
        </a>

        <div class="header-divider"></div>

        <button class="menu-button" id="menuButton">

            <span></span>
            <span></span>
            <span></span>

        </button>

    </div>

</header>


<!-- =========================================================
     MOBILE MENU
     ========================================================= -->

<div class="mobile-menu" id="mobileMenu">

    <button class="mobile-close" id="mobileClose">
        ×
    </button>

    <a href="#home">HOME</a>
    <a href="#about">ABOUT</a>
    <a href="#projects">PROJECTS</a>
    <a href="#experience">EXPERIENCE</a>
    <a href="#skills">SKILLS</a>
    <a href="#contact">CONTACT</a>

</div>



<!-- =========================================================
     HERO
     ========================================================= -->

<section class="hero" id="home">

    <div class="hero-inner">


        <!-- LEFT CONTENT -->
        <div class="hero-left">

            <div class="eyebrow">

                PRODUCT MANAGEMENT

                <span>•</span>

                TECH

                <span>•</span>

                INNOVATION

            </div>


            <h1 class="hero-title">

                <span class="hero-white">
                    Welcome 
                </span>



            </h1>


            <div class="hero-subtitle">

                I build ideas into

                <span>digital</span>

                

                <span>products.</span>

            </div>


            <p class="hero-description">

                I am a Product-focused professional with a technology background,
                passionate about solving customer problems, making
                data-informed decisions and creating meaningful digital
                experiences.

            </p>


            <div class="hero-buttons">

                <a href="#projects" class="button-primary">

                    VIEW MY WORK

                    <span>→</span>

                </a>


                <a href="#about" class="button-secondary">

                    MORE ABOUT ME

                </a>

            </div>

        </div>



        <!-- =================================================
             RIGHT PORTRAIT
             ================================================= -->

        <div class="hero-right">


            <!-- Pink decorative ring -->

            <div class="decorative-ring"></div>


            <!-- Portrait -->

            <div class="portrait-area">

                <img
                    src="images/profile.jpeg"
                    alt="Sowmya Pinninti"
                    class="portrait-image"
                >


                <!-- Soft black blending layers -->

                <div class="portrait-fade-bottom"></div>

                <div class="portrait-fade-left"></div>

                <div class="portrait-fade-right"></div>


                <!-- Label -->

                <div class="portrait-label">

                    PM&nbsp;&nbsp;×&nbsp;&nbsp;TECH

                </div>

            </div>


            <!-- Cyan dot -->

            <div class="cyan-dot"></div>


            <!-- Coral dot -->

            <div class="coral-dot"></div>

        </div>

    </div>


    <!-- =====================================================
         HERO BOTTOM
         ===================================================== -->

    <div class="hero-footer">

        <div class="scroll-explore">

            <span class="scroll-line"></span>

            <span>
                SCROLL TO EXPLORE
            </span>

        </div>


        <div class="social-links">

            <a href="https://www.linkedin.com/in/sowmyapinninti/" target="_blank">
                LINKEDIN ↗
            </a>

            <span class="social-divider"></span>

            <a href="#" target="_blank">
                GITHUB ↗
            </a>

        </div>

    </div>

</section>



<!-- =========================================================
     ABOUT
     ========================================================= -->

<section class="section about-section" id="about">

    <div class="section-number">
        01
    </div>

    <div class="section-label">
        ABOUT ME
    </div>

    <h4>

        Technology background *
            Product mindset = ME
        

    </h4>


    <div class="about-text">

        <p>

            I am an MBA candidate with a technology background
            and experience in software development.

        </p>

        <p>

            My interest lies at the intersection of business,
            technology and customer needs — understanding problems,
            identifying opportunities and turning ideas into
            useful digital products.

        </p>

        <p>

            I enjoy combining technical understanding,
            structured thinking and data-informed decision-making
            to create better product experiences.

        </p>

    </div>

</section>



<!-- =========================================================
     PROJECTS
     ========================================================= -->

<section class="section projects-section" id="projects">

    <div class="section-number">
        02
    </div>

    <div class="section-label">
        SELECTED WORK
    </div>

    <h2>

        Ideas into

        <span>
            products.
        </span>

    </h2>


    <div class="projects-grid">


        <!-- PROJECT 01 -->

        <article class="project-card">

            <div class="project-top">

                <span>
                    01
                </span>

                <span>
                    AI / PRODUCT
                </span>

            </div>


            <div class="project-image ai-project">

                <div class="ai-core">
                    AI
                </div>

                <div class="ai-orbit orbit-one"></div>

                <div class="ai-orbit orbit-two"></div>

            </div>


            <div class="project-content">

                <div class="project-category">
                    PRODUCT MANAGEMENT • AI
                </div>

                <h3>
                    AI in SaaS Product Management
                </h3>

                <p>

                    Exploring how artificial intelligence can support
                    backlog prioritisation, customer feedback analysis
                    and roadmap planning.

                </p>

                <a href="#">
                    VIEW CASE STUDY →
                </a>

            </div>

        </article>



        <!-- PROJECT 02 -->

        <article class="project-card">

            <div class="project-top">

                <span>
                    02
                </span>

                <span>
                    DATA / PRODUCT
                </span>

            </div>


            <div class="project-image dashboard-project">

                <div class="dashboard-header"></div>

                <div class="dashboard-chart">

                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>

                </div>

            </div>


            <div class="project-content">

                <div class="project-category">
                    DATA • PRODUCT INSIGHTS
                </div>

                <h3>
                    Customer Feedback Dashboard
                </h3>

                <p>

                    A product insight dashboard designed to organise
                    customer feedback and identify recurring themes
                    that can support product decisions.

                </p>

                <a href="CloudfarePrototype.html">
                    VIEW CASE STUDY →
                </a>

            </div>

        </article>



        <!-- PROJECT 03 -->

        <article class="project-card">

            <div class="project-top">

                <span>
                    03
                </span>

                <span>
                    FINTECH / DIGITAL
                </span>

            </div>


            <div class="project-image insurance-project">

                <div class="insurance-card">

                    <small>
                        DIGITAL
                    </small>

                    <strong>
                        INSURANCE
                    </strong>

                    <span>
                        PRODUCT EXPERIENCE
                    </span>

                </div>

            </div>


            <div class="project-content">

                <div class="project-category">
                    FINTECH • DIGITAL PRODUCT
                </div>

                <h3>
                    Digital Insurance Product
                </h3>

                <p>

                    Product thinking applied to digital insurance
                    services, customer journeys and technology-enabled
                    experiences.

                </p>

                <a href="#">
                    VIEW CASE STUDY →
                </a>

            </div>

        </article>

<!-- PROJECT 04 -->

<article class="project-card">

    <div class="project-top">

        <span>
            04
        </span>

        <span>
            MOBILITY / SAAS
        </span>

    </div>


    <div class="project-image rapido-project">

        <div class="rapido-card">

            <small>
                RAPIDO
            </small>

            <strong>
                PRO
            </strong>

            <span>
                CAPTAIN SAAS EXPERIENCE
            </span>

        </div>

    </div>


    <div class="project-content">

        <div class="project-category">
            PRODUCT STRATEGY • SAAS
        </div>

        <h3>
            Rapido Pro
        </h3>

        <p>

            A premium SaaS product concept exploring how Rapido
            could create an additional recurring revenue stream
            while improving convenience and business intelligence
            for Captains and Drivers.

        </p>

        <a href="rapido.html">
            VIEW CASE STUDY →
        </a>

    </div>

</article>

    </div>

</section>



<!-- =========================================================
     EXPERIENCE
     ========================================================= -->

<section class="section experience-section" id="experience">

    <div class="section-number">
        03
    </div>

    <div class="section-label">
        EXPERIENCE
    </div>

    <h2>

        From technology

        <span>
            to product.
        </span>

    </h2>


    <div class="experience-list">


        <div class="experience-row">

            <div class="experience-year">
                2023 — 2024
            </div>

            <div class="experience-main">

                <h3>
                    Full Stack Developer
                </h3>

                <div class="experience-company">
                    TCS
                </div>

                <p>

                    Worked on digital insurance services using Java,
                    Spring Boot, SQL, JavaScript and web technologies.
                    Contributed to customer-facing features,
                    APIs and business requirements.

                </p>

            </div>

        </div>



        <div class="experience-row">

            <div class="experience-year">
                2025 — PRESENT
            </div>

            <div class="experience-main">

                <h3>
                    MBA — Business Administration
                </h3>

                <div class="experience-company">
                    UNIVERSITY OF CHESTER
                </div>

                <p>

                    Developing knowledge across strategy, business
                    intelligence, marketing analytics, financial
                    decision-making and organisational behaviour.

                </p>

            </div>

        </div>



        <div class="experience-row">

            <div class="experience-year">
                PRESENT
            </div>

            <div class="experience-main">

                <h3>
                    Product Management Focus
                </h3>

                <div class="experience-company">
                    PRODUCT • DATA • TECHNOLOGY
                </div>

                <p>

                    Building product-focused projects and developing
                    practical experience across product discovery,
                    customer insights, prioritisation and digital
                    product strategy.

                </p>

            </div>

        </div>

    </div>

</section>



<!-- =========================================================
     SKILLS
     ========================================================= -->

<section class="section skills-section" id="skills">

    <div class="section-number">
        04
    </div>

    <div class="section-label">
        CAPABILITIES
    </div>

    <h2>

        What I

        <span>
            bring.
        </span>

    </h2>


    <div class="skills-grid">


        <div class="skill">

            <div class="skill-number">
                01
            </div>

            <h3>
                Product Management
            </h3>

            <p>

                Product discovery, requirements,
                prioritisation, roadmaps and
                stakeholder collaboration.

            </p>

        </div>


        <div class="skill">

            <div class="skill-number">
                02
            </div>

            <h3>
                Data & Analytics
            </h3>

            <p>

                Customer insights, feedback analysis,
                business intelligence and
                data-informed decision-making.

            </p>

        </div>


        <div class="skill">

            <div class="skill-number">
                03
            </div>

            <h3>
                Technology
            </h3>

            <p>

                Java, Spring Boot, SQL, JavaScript,
                HTML, CSS and API-based systems.

            </p>

        </div>


        <div class="skill">

            <div class="skill-number">
                04
            </div>

            <h3>
                Product Thinking
            </h3>

            <p>

                Customer problems, experimentation,
                prioritisation and translating ideas
                into practical solutions.

            </p>

        </div>

    </div>

</section>



<!-- =========================================================
     CONTACT
     ========================================================= -->

<section class="contact-section" id="contact">

    <div class="contact-label">
        HAVE AN OPPORTUNITY?
    </div>

    <h2>

        Let's build

        <span>
            something useful.
        </span>

    </h2>

    <div class="contact-details">

    <a href="mailto:sowmyapinninti724@gmail.com" class="contact-link">
        <span>emial:</span>
        sowmyapinninti724@gmail.com
    </a>
<p>
    <a href="https://www.linkedin.com/in/sowmyapinninti"
       class="contact-link"
       target="_blank"
       rel="noopener noreferrer">
        <span>linkedln: </span>
       https://www.linkedin.com/in/sowmyapinninti
    </a>
</p>
</div>

<a href="mailto:sowmyapinninti724@gmail.com" class="contact-button">
    GET IN TOUCH
    <span class="hand-up">☝️</span>
</a>

</section>



<!-- =========================================================
     FOOTER
     ========================================================= -->

<footer class="footer">

    <div class="footer-logo">
        SOWMYA<span>.</span>
    </div>

    <div class="footer-middle">

        PRODUCT MANAGEMENT
        <span>•</span>
        TECHNOLOGY
        <span>•</span>
        INNOVATION

    </div>

    <a href="#home">
        BACK TO TOP ↑
    </a>

</footer>

`;



/* ============================================================
   CSS
   ============================================================ */

const style = document.createElement("style");

style.textContent = `


/* ============================================================
   GLOBAL RESET
   ============================================================ */

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    background: #080808;
    color: #f3f0eb;
    font-family: Arial, Helvetica, sans-serif;
    overflow-x: hidden;
}

body,
button,
a {
    -webkit-font-smoothing: antialiased;
}

a {
    color: inherit;
    text-decoration: none;
}

button {
    font-family: inherit;
}



/* ============================================================
   COLOURS
   ============================================================ */

:root {

    --black: #080808;

    --white: #f3f0eb;

    --grey: #aaa6a0;

    --dark-grey: #77736e;

    --coral: #ff625d;

    --cyan: #37dce0;

    --pink: #ee63a9;

    --line: rgba(255,255,255,.11);

}



/* ============================================================
   HEADER
   ============================================================ */

.header {

    position: fixed;

    top: 0;
    left: 0;
    right: 0;

    height: 82px;

    padding: 0 5.8vw;

    display: flex;

    align-items: center;

    justify-content: space-between;

    border-bottom: 1px solid var(--line);

    background: rgba(8,8,8,.92);

    backdrop-filter: blur(16px);

    z-index: 1000;

}


.logo {

    font-size: 24px;

    font-weight: 800;

    letter-spacing: 2px;

    color: white;

}

.logo span {

    color: var(--coral);

}


.nav {

    display: flex;

    align-items: center;

    gap: 32px;

    margin-left: auto;

    margin-right: 35px;

}


.nav-link {

    position: relative;

    font-size: 12px;

    letter-spacing: 1px;

    color: #aaa6a0;

    transition: color .25s ease;

}


.nav-link:hover {

    color: white;

}


.nav-link.active {

    color: var(--coral);

}


.nav-link.active::after {

    content: "";

    position: absolute;

    left: 0;

    right: 0;

    height: 1px;

    bottom: -10px;

    background: var(--coral);

}


.header-right {

    display: flex;

    align-items: center;

    gap: 25px;

}


.header-email {

    font-size: 11px;

    color: #aaa6a0;

    letter-spacing: .5px;

}


.header-divider {

    height: 30px;

    width: 1px;

    background: rgba(255,255,255,.2);

}


.menu-button {

    width: 52px;

    height: 52px;

    border-radius: 50%;

    border: 1px solid rgba(255,255,255,.25);

    background: transparent;

    display: flex;

    flex-direction: column;

    align-items: center;

    justify-content: center;

    gap: 5px;

    cursor: pointer;

}


.menu-button span {

    width: 20px;

    height: 1px;

    background: white;

}



/* ============================================================
   MOBILE MENU
   ============================================================ */

.mobile-menu {

    position: fixed;

    inset: 0;

    z-index: 3000;

    background: #080808;

    display: flex;

    flex-direction: column;

    justify-content: center;

    align-items: center;

    gap: 28px;

    transform: translateX(100%);

    transition: transform .45s ease;

}


.mobile-menu.open {

    transform: translateX(0);

}


.mobile-menu a {

    font-family: Arial, sans-serif;

    font-size: 30px;

    letter-spacing: 2px;

}


.mobile-close {

    position: absolute;

    right: 30px;

    top: 25px;

    background: transparent;

    border: none;

    color: white;

    font-size: 40px;

    cursor: pointer;

}



/* ============================================================
   HERO
   ============================================================ */

.hero {

    position: relative;

    min-height: 100vh;

    padding: 82px 5.8vw 0;

    background:

        radial-gradient(
            circle at 76% 45%,
            rgba(255,255,255,.025),
            transparent 30%
        ),

        #080808;

}


.hero-inner {

    position: relative;

    max-width: 1450px;

    min-height: calc(100vh - 82px);

    margin: 0 auto;

    display: grid;

    grid-template-columns: 51% 49%;

    align-items: center;

}



/* ============================================================
   HERO LEFT
   ============================================================ */

.hero-left {

    position: relative;

    z-index: 10;

    padding-left: 2.5vw;

    padding-bottom: 35px;

}


.eyebrow {

    color: #aaa6a0;

    font-size: 12px;

    letter-spacing: 2px;

    margin-bottom: 32px;

}


.eyebrow span {

    color: var(--coral);

    margin: 0 7px;

}



/* ============================================================
   MAIN TITLE
   ============================================================ */

.hero-title {

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-weight: 400;

    font-size: clamp(
        76px,
        8.1vw,
        132px
    );

    line-height: .82;

    letter-spacing: -6px;

    margin-bottom: 42px;

}


.hero-white {

    display: block;

    color: var(--white);
    font-size: xxx-large;

}


.hero-coral {

    display: block;

    color: var(--coral);

    margin-top: 8px;

}



/* ============================================================
   HERO SUBTITLE
   ============================================================ */

.hero-subtitle {

    font-size: clamp(
        30px,
        3vw,
        45px
    );

    line-height: 1.08;

    letter-spacing: -1.4px;

    margin-bottom: 28px;

    color: var(--white);

}


.hero-subtitle span {

    color: var(--cyan);

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-style: italic;

}



/* ============================================================
   DESCRIPTION
   ============================================================ */

.hero-description {

    max-width: 590px;

    color: #aaa6a0;

    font-size: 15px;

    line-height: 1.75;

    margin-bottom: 31px;

}



/* ============================================================
   HERO BUTTONS
   ============================================================ */

.hero-buttons {

    display: flex;

    gap: 17px;

}


.button-primary,
.button-secondary {

    height: 50px;

    padding: 0 27px;

    border-radius: 30px;

    display: inline-flex;

    align-items: center;

    justify-content: center;

    font-size: 11px;

    letter-spacing: 1.2px;

    font-weight: 700;

    transition:
        transform .25s ease,
        background .25s ease;

}


.button-primary {

    background: var(--coral);

    color: #111;

}


.button-primary span {

    font-size: 19px;

    margin-left: 15px;

}


.button-secondary {

    border: 1px solid rgba(255,255,255,.45);

    color: white;

}


.button-primary:hover,
.button-secondary:hover {

    transform: translateY(-3px);

}



/* ============================================================
   HERO RIGHT
   ============================================================ */

.hero-right {

    position: relative;

    height: 650px;

    display: flex;

    justify-content: center;

    align-items: center;

}



/* ============================================================
   PORTRAIT AREA
   ============================================================ */

.portrait-area {

    position: relative;

    width: min(460px, 34vw);

    aspect-ratio: 3 / 4;

    z-index: 5;

}



/* ============================================================
   ACTUAL PHOTO
   ============================================================ */

.portrait-image {

    position: absolute;

    inset: 0;

    width: 100%;

    height: 100%;

    display: block;

    object-fit: cover;

    /*
       THIS IS THE IMPORTANT PART.

       Your original photo is tall.
       3:4 keeps the face and upper body.
    */

    object-position: center 20%;

    border: none;

    outline: none;

    border-radius: 0;

    box-shadow: none;

    /*
       The mask removes the hard rectangle
       at the bottom and edges.
    */

    -webkit-mask-image:

        linear-gradient(
            to bottom,

            black 0%,

            black 63%,

            rgba(0,0,0,.96) 72%,

            rgba(0,0,0,.78) 81%,

            rgba(0,0,0,.40) 90%,

            transparent 100%
        );

    mask-image:

        linear-gradient(
            to bottom,

            black 0%,

            black 63%,

            rgba(0,0,0,.96) 72%,

            rgba(0,0,0,.78) 81%,

            rgba(0,0,0,.40) 90%,

            transparent 100%
        );

}



/* ============================================================
   LEFT EDGE BLENDING
   ============================================================ */

.portrait-fade-left {

    position: absolute;

    inset: 0;

    pointer-events: none;

    z-index: 3;

    background:

        linear-gradient(
            to right,

            #080808 0%,

            rgba(8,8,8,.88) 5%,

            rgba(8,8,8,.35) 15%,

            transparent 28%
        );

}



/* ============================================================
   RIGHT EDGE BLENDING
   ============================================================ */

.portrait-fade-right {

    position: absolute;

    inset: 0;

    pointer-events: none;

    z-index: 3;

    background:

        linear-gradient(
            to left,

            #080808 0%,

            rgba(8,8,8,.78) 5%,

            rgba(8,8,8,.25) 16%,

            transparent 29%
        );

}



/* ============================================================
   BOTTOM BLENDING
   ============================================================ */

.portrait-fade-bottom {

    position: absolute;

    left: -5%;

    right: -5%;

    bottom: -2%;

    height: 38%;

    pointer-events: none;

    z-index: 4;

    background:

        linear-gradient(
            to bottom,

            transparent 0%,

            rgba(8,8,8,.12) 20%,

            rgba(8,8,8,.60) 58%,

            #080808 100%
        );

}



/* ============================================================
   EXTRA SOFT GLOW AROUND PHOTO
   ============================================================ */

.portrait-area::before {

    content: "";

    position: absolute;

    inset: -25px;

    z-index: 1;

    pointer-events: none;

    background:

        radial-gradient(
            ellipse at center,
            rgba(255,255,255,.035),
            transparent 65%
        );

}



/* ============================================================
   PM × TECH LABEL
   ============================================================ */

.portrait-label {

    position: absolute;

    right: -40px;

    bottom: 22%;

    z-index: 20;

    padding: 14px 24px;

    background: var(--pink);

    color: #111;

    font-size: 11px;

    font-weight: 800;

    letter-spacing: 2px;

    transform: rotate(-6deg);

    white-space: nowrap;

}



/* ============================================================
   DECORATIVE PINK RING
   ============================================================ */

.decorative-ring {

    position: absolute;

    width: 55px;

    height: 55px;

    border: 1px solid var(--pink);

    border-radius: 50%;

    top: 60px;

    left: 8%;

    z-index: 2;

}



/* ============================================================
   CYAN DOT
   ============================================================ */

.cyan-dot {

    position: absolute;

    width: 18px;

    height: 18px;

    border-radius: 50%;

    background: var(--cyan);

    right: 4%;

    top: 46%;

    z-index: 20;

}



/* ============================================================
   CORAL DOT
   ============================================================ */

.coral-dot {

    position: absolute;

    width: 15px;

    height: 15px;

    border-radius: 50%;

    background: var(--coral);

    right: 2%;

    bottom: 75px;

    z-index: 20;

}



/* ============================================================
   HERO FOOTER
   ============================================================ */

.hero-footer {

    position: absolute;

    left: 8%;

    right: 8%;

    bottom: 30px;

    display: flex;

    justify-content: space-between;

    align-items: center;

    z-index: 20;

}



/* ============================================================
   SCROLL
   ============================================================ */

.scroll-explore {

    display: flex;

    align-items: center;

    gap: 35px;

    color: #aaa6a0;

    font-size: 10px;

    letter-spacing: 2px;

}


.scroll-line {

    width: 1px;

    height: 43px;

    background: white;

}



/* ============================================================
   SOCIAL
   ============================================================ */

.social-links {

    display: flex;

    align-items: center;

    gap: 28px;

}


.social-links a {

    color: #aaa6a0;

    font-size: 10px;

    letter-spacing: 1.5px;

}


.social-divider {

    width: 1px;

    height: 25px;

    background: rgba(255,255,255,.2);

}



/* ============================================================
   GENERAL SECTIONS
   ============================================================ */

.section {

    position: relative;

    max-width: 1450px;

    margin: auto;

    padding: 160px 8vw;

    border-top: 1px solid var(--line);

}


.section-number {

    position: absolute;

    right: 8vw;

    top: 55px;

    color: var(--coral);

    font-size: 11px;

    letter-spacing: 2px;

}


.section-label {

    color: var(--coral);

    font-size: 20px;

    letter-spacing: 3px;

    margin-bottom: 28px;

}


.section h2 {

    max-width: 900px;

    font-family:
        Georgia,
        "Times New Roman",
        serif;

    font-weight: 400;

    font-size: clamp(
        50px,
        6.5vw,
        0px
    );

    line-height: .95;

    letter-spacing: -4px;

}


.section h2 span {

    color: var(--coral);

    font-style: italic;

}



/* ============================================================
   ABOUT
   ============================================================ */

.about-text {

    max-width: 6900px;

    margin-left: ;

    margin-top: 27px;

}


.about-text p {

    color: #aaa6a0;

    font-size: 17px;

    line-height: 1.8;

    margin-bottom: 25px;

}



/* ============================================================
   PROJECTS
   ============================================================ */

.projects-grid {

    margin-top: 90px;

    display: grid;

    grid-template-columns: repeat(3, 1fr);

    gap: 25px;

}


.project-card {

    border-top: 1px solid rgba(255,255,255,.2);

    padding-top: 18px;

}


.project-top {

    display: flex;

    justify-content: space-between;

    color: var(--coral);

    font-size: 10px;

    letter-spacing: 1.5px;

    margin-bottom: 18px;

}


.project-image {

    height: 310px;

    background: #111;

    position: relative;

    overflow: hidden;

    margin-bottom: 25px;

}



/* AI PROJECT */

.ai-project {

    display: flex;

    justify-content: center;

    align-items: center;

}


.ai-core {

    width: 145px;

    height: 145px;

    border: 1px solid var(--cyan);

    border-radius: 50%;

    display: flex;

    align-items: center;

    justify-content: center;

    color: var(--cyan);

    font-size: 40px;

}


.ai-orbit {

    position: absolute;

    border: 1px solid rgba(255,255,255,.15);

    border-radius: 50%;

}


.orbit-one {

    width: 220px;

    height: 220px;

}


.orbit-two {

    width: 290px;

    height: 290px;

}



/* DASHBOARD */

.dashboard-project {

    padding: 30px;

}


.dashboard-header {

    height: 30px;

    border-bottom: 1px solid rgba(255,255,255,.15);

    margin-bottom: 35px;

}


.dashboard-chart {

    height: 185px;

    display: flex;

    align-items: flex-end;

    gap: 15px;

}


.dashboard-chart span {

    flex: 1;

    background: var(--cyan);

}


.dashboard-chart span:nth-child(1) {
    height: 35%;
}

.dashboard-chart span:nth-child(2) {
    height: 65%;
}

.dashboard-chart span:nth-child(3) {
    height: 48%;
}

.dashboard-chart span:nth-child(4) {
    height: 80%;
}

.dashboard-chart span:nth-child(5) {
    height: 58%;
}



/* INSURANCE */

.insurance-project {

    display: flex;

    justify-content: center;

    align-items: center;

}
.rapido-project {
    background: #111111;
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 280px;
}

.rapido-card {
    width: 70%;
    padding: 30px;
    background: #ff4f3f;
    color: #ffffff;
    text-align: left;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    gap: 8px;
}

.rapido-card small {
    font-size: 11px;
    letter-spacing: 2px;
    opacity: 0.8;
}

.rapido-card strong {
    font-family: Georgia, serif;
    font-size: 42px;
    line-height: 1;
}

.rapido-card span {
    font-size: 11px;
    letter-spacing: 1px;
}

.insurance-card {

    padding: 42px;

    border: 1px solid var(--coral);

    transform: rotate(-5deg);

}


.insurance-card small {

    display: block;

    color: var(--cyan);

    letter-spacing: 3px;

    font-size: 10px;

    margin-bottom: 15px;

}


.insurance-card strong {

    display: block;

    font-family: Georgia, serif;

    font-size: 32px;

    margin-bottom: 20px;

}


.insurance-card span {

    font-size: 9px;

    letter-spacing: 2px;

    color: #aaa6a0;

}


.project-category {

    color: var(--cyan);

    font-size: 10px;

    letter-spacing: 2px;

    margin-bottom: 12px;

}


.project-content h3 {

    font-family: Georgia, serif;

    font-size: 30px;

    font-weight: 400;

    margin-bottom: 15px;

}


.project-content p {

    color: #aaa6a0;

    font-size: 14px;

    line-height: 1.7;

    margin-bottom: 20px;

}


.project-content a {

    color: var(--coral);

    font-size: 10px;

    letter-spacing: 1.5px;

}



/* ============================================================
   EXPERIENCE
   ============================================================ */

.experience-list {

    margin-top: 90px;

}


.experience-row {

    display: grid;

    grid-template-columns: 200px 1fr;

    gap: 60px;

    padding: 45px 0;

    border-top: 1px solid var(--line);

}


.experience-year {

    color: var(--coral);

    font-size: 10px;

    letter-spacing: 1.5px;

}


.experience-main h3 {

    font-family: Georgia, serif;

    font-size: 38px;

    font-weight: 400;

    margin-bottom: 12px;

}


.experience-company {

    color: var(--cyan);

    font-size: 11px;

    letter-spacing: 2px;

    margin-bottom: 20px;

}


.experience-main p {

    max-width: 680px;

    color: #aaa6a0;

    line-height: 1.7;

    font-size: 15px;

}



/* ============================================================
   SKILLS
   ============================================================ */

.skills-grid {

    margin-top: 90px;

    display: grid;

    grid-template-columns: repeat(2, 1fr);

}


.skill {

    min-height: 280px;

    padding: 35px;

    border-top: 1px solid var(--line);

    border-right: 1px solid var(--line);

}


.skill:nth-child(even) {

    border-right: none;

}


.skill-number {

    color: var(--coral);

    font-size: 10px;

    letter-spacing: 2px;

}


.skill h3 {

    font-family: Georgia, serif;

    font-size: 38px;

    font-weight: 400;

    margin-top: 55px;

    margin-bottom: 20px;

}


.skill p {

    max-width: 470px;

    color: #aaa6a0;

    line-height: 1.7;

}



/* ============================================================
   CONTACT
   ============================================================ */

.contact-section {

    padding: 170px 8vw;

    text-align: center;

    border-top: 1px solid var(--line);

}


.contact-label {

    color: var(--cyan);

    font-size: 10px;

    letter-spacing: 3px;

    margin-bottom: 35px;

}


.contact-section h2 {

    font-family: Georgia, serif;

    font-size: clamp(
        55px,
        8vw,
        115px
    );

    line-height: .9;

    font-weight: 400;

    letter-spacing: -5px;

    margin-bottom: 50px;

}


.contact-section h2 span {

    display: block;

    color: var(--coral);

    font-style: italic;

}


.contact-button {

    display: inline-flex;

    height: 55px;

    padding: 0 35px;

    border-radius: 30px;

    align-items: center;

    justify-content: center;

    background: var(--coral);

    color: #111;

    font-size: 11px;

    font-weight: 700;

    letter-spacing: 1.5px;

}



/* ============================================================
   FOOTER
   ============================================================ */

.footer {

    padding: 45px 8vw;

    border-top: 1px solid var(--line);

    display: flex;

    align-items: center;

    justify-content: space-between;

}


.footer-logo {

    font-size: 22px;

    font-weight: 800;

    letter-spacing: 2px;

}


.footer-logo span {

    color: var(--coral);

}


.footer-middle {

    color: #77736e;

    font-size: 9px;

    letter-spacing: 1.5px;

}


.footer-middle span {

    color: var(--coral);

    margin: 0 5px;

}


.footer > a {

    color: #aaa6a0;

    font-size: 10px;

    letter-spacing: 1px;

}



/* ============================================================
   TABLET
   ============================================================ */

@media (max-width: 1100px) {

    .nav {

        gap: 18px;

    }

    .header-email,
    .header-divider {

        display: none;

    }

    .hero-inner {

        grid-template-columns: 1fr 1fr;

    }

    .hero-title {

        font-size: 76px;

    }

    .portrait-area {

        width: 330px;

    }

    .portrait-label {

        right: -25px;

    }

}



/* ============================================================
   MOBILE
   ============================================================ */

@media (max-width: 800px) {

    .header {

        height: 72px;

        padding: 0 22px;

    }

    .nav {

        display: none;

    }

    .hero {

        padding: 72px 22px 0;

    }

    .hero-inner {

        min-height: auto;

        display: flex;

        flex-direction: column;

        align-items: stretch;

    }

    .hero-left {

        padding: 75px 0 0;

        text-align: center;

    }

    .eyebrow {

        font-size: 9px;

        letter-spacing: 1.2px;

    }

    .hero-title {

        font-size: 65px;

        letter-spacing: -2px;

    }

    .hero-subtitle {

        font-size: 28px;

    }

    .hero-description {

        margin-left: auto;

        margin-right: auto;

        font-size: 14px;

    }

    .hero-buttons {

        justify-content: center;

        flex-wrap: wrap;

    }

    .hero-right {

        height: 500px;

        margin-top: 30px;

    }

    .portrait-area {

        width: 300px;

    }

    .portrait-label {

        right: -20px;

        bottom: 20%;

        padding: 11px 17px;

        font-size: 9px;

    }

    .decorative-ring {

        top: 30px;

        left: 10%;

    }

    .cyan-dot {

        right: 5%;

    }

    .coral-dot {

        right: 5%;

        bottom: 40px;

    }

    .hero-footer {

        display: none;

    }

    .section {

        padding: 100px 22px;

    }

    .section h2 {

        font-size: 52px;

        letter-spacing: -2px;

    }

    .about-text {

        margin-top: 55px;

    }

    .projects-grid {

        grid-template-columns: 1fr;

    }

    .experience-row {

        grid-template-columns: 1fr;

        gap: 20px;

    }

    .experience-main h3 {

        font-size: 30px;

    }

    .skills-grid {

        grid-template-columns: 1fr;

    }

    .skill {

        border-right: none;

    }

    .footer {

        flex-direction: column;

        gap: 20px;

        text-align: center;

    }

}



/* ============================================================
   SMALL MOBILE
   ============================================================ */

@media (max-width: 480px) {

    .hero-title {

        font-size: 57px;

    }

    .hero-subtitle {

        font-size: 25px;

    }

    .portrait-area {

        width: 270px;

    }

    .hero-right {

        height: 450px;

    }

    .button-primary,
    .button-secondary {

        width: 220px;

    }

}



/* ============================================================
   SCROLL REVEAL
   ============================================================ */

.reveal {

    opacity: 0;

    transform: translateY(30px);

    transition:

        opacity .8s ease,

        transform .8s ease;

}


.reveal.visible {

    opacity: 1;

    transform: translateY(0);

}

`;

document.head.appendChild(style);



/* ============================================================
   MOBILE MENU
   ============================================================ */

const menuButton =
    document.getElementById("menuButton");

const mobileMenu =
    document.getElementById("mobileMenu");

const mobileClose =
    document.getElementById("mobileClose");


if (menuButton) {

    menuButton.addEventListener(
        "click",
        function () {

            mobileMenu.classList.add("open");

        }
    );

}


if (mobileClose) {

    mobileClose.addEventListener(
        "click",
        function () {

            mobileMenu.classList.remove("open");

        }
    );

}


document
    .querySelectorAll(".mobile-menu a")
    .forEach(function (link) {

        link.addEventListener(
            "click",
            function () {

                mobileMenu.classList.remove("open");

            }
        );

    });



/* ============================================================
   ACTIVE NAVIGATION
   ============================================================ */

const pageSections =
    document.querySelectorAll("section[id]");

const navigationLinks =
    document.querySelectorAll(".nav-link");


window.addEventListener(
    "scroll",
    function () {

        let currentSection = "home";


        pageSections.forEach(
            function (section) {

                const sectionTop =
                    section.offsetTop - 180;

                if (
                    window.scrollY >= sectionTop
                ) {

                    currentSection =
                        section.id;

                }

            }
        );


        navigationLinks.forEach(
            function (link) {

                link.classList.remove("active");


                if (
                    link.getAttribute("href")
                    === "#" + currentSection
                ) {

                    link.classList.add("active");

                }

            }
        );

    }
);



/* ============================================================
   SCROLL REVEAL
   ============================================================ */

const revealItems =
    document.querySelectorAll(
        ".project-card, .experience-row, .skill, .about-text"
    );


const revealObserver =
    new IntersectionObserver(

        function (entries) {

            entries.forEach(
                function (entry) {

                    if (
                        entry.isIntersecting
                    ) {

                        entry.target
                            .classList
                            .add("visible");

                    }

                }
            );

        },

        {
            threshold: 0.12
        }

    );


revealItems.forEach(
    function (item) {

        item.classList.add("reveal");

        revealObserver.observe(item);

    }
);



/* ============================================================
   IMAGE ERROR CHECK
   ============================================================ */

const portrait =
    document.querySelector(".portrait-image");


if (portrait) {

    portrait.addEventListener(
        "error",
        function () {

            console.log(
                "Profile image not found. Make sure the file is located at images/profile.jpg"
            );

        }
    );

}