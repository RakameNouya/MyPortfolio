# MyPortfolio
#### Video Demo:  (https://youtu.be/7NfBsoNJ4Bs)

#### Description:

    # Project Overview
        This project is a comprehensive personal portfolio website designed to showcase my journey as a Multimedia Engineering Technology student at the Electronic Engineering Polytechnic Institute of Surabaya (EEPIS). The primary goal of this project was to create a "human-centered" digital hub that effectively communicates my unique intersection of skills: graphic design, storytelling, UI/UX, and emerging technologies like AI and Blockchain.

        In a digital era dominated by templates, I chose to build this site from scratch using HTML, CSS, JavaScript, and the Bootstrap 5 framework. This allowed me to ensure that the user experience (UX) mirrored my personal brand—clean, professional, yet creatively immersive. The site is fully responsive, ensuring that whether a potential collaborator views it on a desktop or a mobile device, the storytelling remains consistent and engaging.

    # File Functionality
    1.  index.html (The Gateway)
        The homepage serves as the first point of contact. It features a "Hero Section" with a concise mission statement that introduces my focus on multimedia storytelling and AI.

        Key Features: A short bio accompanied by a profile image with hover effects, and a series of Call-to-Action (CTA) buttons.

        Dynamic Elements: I implemented two separate Bootstrap Carousels here. One showcases my professional certificates and achievements, while the other highlights my formal and informal education logos. These were chosen to provide social proof of my expertise without cluttering the page with static images.

    2.  about.html (The Narrative)
        This page is dedicated to the "Story Section." Unlike a standard resume, this page focuses on the why behind my work.

        Content: It includes a detailed table of core skills and toolkits (from Adobe Creative Suite to WebXR stacks).

        Interactive Timeline: I developed a custom "Career Timeline" using CSS. This allows visitors to quickly scan my progression from 2021 to the present. I also integrated Bootstrap Tooltips here to provide additional context for each year when hovered.

    3.  projects.html (The Showcase)
        The heart of the portfolio, this page utilizes a grid system to display my work in UI/UX, Illustration, and 3D Modeling.

        Interactive Filtering: I implemented a JavaScript-based filter system. Users can click buttons (e.g., "UI/UX", "3D") to instantly hide or show relevant project cards. This demonstrates my ability to handle DOM manipulation and improves the user's ability to find specific types of work.

        Card Design: Each project is housed in a Bootstrap Card with custom "zoom-in" CSS effects on the images to create a tactile, interactive feel.

    4.  contact.html (The Interaction)
        This page provides multiple channels for communication.

        Form Logic: It includes a functional-looking contact form. Using JavaScript, I added an event listener to the form that prevents a page reload, validates inputs, and displays a success message ("Thank you! Your message has been sent. 🚀") upon submission.

        FAQ Section: I included a Bootstrap Accordion for frequently asked questions, such as collaboration inquiries, to save time for both myself and the visitor.

    5.  styles.css & scripts.js (The Engine)
        styles.css: Contains all custom styling, including the fixed navigation bar, custom button gradients, timeline layouts, and the "zoom-in" animation classes. I used CSS Flexbox and Grid extensively to handle layouts that Bootstrap's default classes couldn't achieve.

        scripts.js: This file manages the logic for the project filtering, the contact form confirmation, and the dynamic hover descriptions for the CTA buttons on the index page.

    # Design Choices and Debates
        The "Single Page" vs. "Multi-Page" Debate
        Initially, I debated creating a single-page scrolling website. While trendy, I decided against it in favor of a Multi-Page Application (MPA) structure. Because my work spans very different fields (from 3D modeling to campus journalism), I felt that separate pages allowed each "chapter" of my story to breathe. It also allowed for better SEO practices and a cleaner navigation experience for users specifically looking for my contact info or just my projects.

    # Typography and Visual Hierarchy
        I chose to use Bootstrap’s default Sans-Serif stack for its high readability across devices. I prioritized visual hierarchy by using heavy h1 and h2 tags centered on the page to act as anchors for the user's eyes. I also debated the use of the "zoom-in" effect on images. While some might find it distracting, I decided to keep it because, as a multimedia student, I wanted the site to feel "alive" and responsive to the user's cursor movements.

    # Color Palette and Accessibility
        I opted for a dark-themed table and clean white backgrounds for the main content. This "high contrast" approach was a conscious choice to ensure accessibility for users with visual impairments while maintaining a modern, "tech-focused" aesthetic. The primary color (Bootstrap Blue) was used for buttons to provide a familiar "action" color that users instinctively know to click.

    # Conclusion
        This portfolio is more than just a collection of links; it is a reflection of my growth as an engineer and a designer. By building it, I strengthened my understanding of responsive design, JavaScript event handling, and technical documentation. I am proud to share this as the culmination of my efforts to bridge the gap between human emotion and digital technology.
