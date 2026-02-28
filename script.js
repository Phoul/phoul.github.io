// Links with categories
const linkSections = [
    {
        title: "Code",
        links: [
            { text: "Phoul", url: "https://github.com/phoul", icon: "fa-brands fa-github" },
            { text: "Noire Networks", url: "https://github.com/noirenetworks", icon: "fa-brands fa-github" }

        ]
    },
    {
        title: "Gaming",
        links: [
            { text: "Twitch", url: "https://twitch.tv/opprimereu", icon: "fa-brands fa-twitch" },
            { text: "TGM Series", url: "https://theabsolute.plus/player/opprimereu", icon: "fa-solid fa-hat-wizard" },
         { text: "DCSS", url: "https://dcss-stats.com/players/phoul", icon: "fa-solid fa-dice-d20" },
         { text: "NetHack", url: "https://www.alt.org/nethack/plr.php?player=phoul", icon: "fa-solid fa-dice-d20" },
         { text: "Angband", url: "https://angband.live/ladder/ladder-browse.php?v=&r=&c=&n=&e=angband%40insecure-complexity.ca&s=0", icon: "fa-solid fa-dice-d20" }

        ]
    },
    {
        title: "Social Media",
        links: [
            { text: "Phoul", url: "https://bsky.app/profile/phoul.bsky.social", icon: "fa-brands fa-bluesky" },
            { text: "Noire Networks", url: "https://bsky.app/profile/noirenetworks.bsky.social", icon: "fa-brands fa-bluesky" },
            { text: "MyAnimeList", url: "https://myanimelist.net/profile/opprimereu", icon: "fas fa-tv" },
            { text: "StoryGraph", url: "https://app.thestorygraph.com/profile/phoul", icon: "fa-solid fa-book" },
            { text: "YouTube", url: "https://www.youtube.com/@phoul", icon: "fa-brands fa-youtube" }
        ],
        subsections: [
            {
                title: "Bots",
                links: [
                    { text: "Color Maps", url: "https://bsky.app/profile/colormaps.bsky.social", icon: "fa-brands fa-bluesky" },
                    { text: "The Chaos Carpet", url: "https://bsky.app/profile/chaoscarpet.bsky.social", icon: "fa-brands fa-bluesky" },
                    { text: "The Update Herald", url: "https://bsky.app/profile/theupdateherald.bsky.social", icon: "fa-brands fa-bluesky" }

                ]
            }
        ]
    },
    {
        title: "Volunteering",
        links: [
            { text: "Prevent-A-Thon", url: "https://preventathon.com", icon: "fas fa-shield-alt" }
        ]
    }
];

// Generate link cards
function generateLinkCards() {
    const linksContainer = document.querySelector('.links-container');
    
    // Clear any existing content
    linksContainer.innerHTML = '';
    
    // Loop through each section
    linkSections.forEach(section => {
        // Create section heading
        const sectionHeading = document.createElement('h2');
        sectionHeading.className = 'section-heading';
        sectionHeading.textContent = section.title;
        linksContainer.appendChild(sectionHeading);
        
        // Add links for this section
        section.links.forEach(link => {
            const linkCard = createLinkCard(link);
            linksContainer.appendChild(linkCard);
        });
        
        // Add subsections
        if (section.subsections && section.subsections.length > 0) {
            section.subsections.forEach(subsection => {
                // Create subsection heading
                const subsectionHeading = document.createElement('h3');
                subsectionHeading.className = 'subsection-heading';
                subsectionHeading.textContent = subsection.title;
                linksContainer.appendChild(subsectionHeading);
                
                // Add links for this subsection
                subsection.links.forEach(link => {
                    const linkCard = createLinkCard(link);
                    linksContainer.appendChild(linkCard);
                });
            });
        }
    });
}

// Create a link card element
function createLinkCard(link) {
    const linkCard = document.createElement('a');
    linkCard.href = link.url;
    linkCard.target = "_blank";
    linkCard.rel = "noopener noreferrer";
    linkCard.className = 'link-card';
    
    linkCard.innerHTML = `
        <span class="icon"><i class="${link.icon}"></i></span>
        <span class="text">${link.text}</span>
        <span class="arrow"><i class="fas fa-arrow-right"></i></span>
    `;
    
    return linkCard;
}

// Set current year in footer
function setCurrentYear() {
    const yearElement = document.getElementById('current-year');
    yearElement.textContent = new Date().getFullYear();
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    generateLinkCards();
    setCurrentYear();
});

// Add a hover effect to the whole page
document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
    const x = Math.round((clientX / window.innerWidth) * 100);
    const y = Math.round((clientY / window.innerHeight) * 100);
    
    // Create a gradient effect that follows the mouse
    document.body.style.background = `
        linear-gradient(
            135deg, 
            var(--background-color) ${x}%, 
            #0f3460 ${100 - x}%
        )
    `;
});
