// Sample data for CG resources
const contentData = [
    {
        id: 1,
        title: "Digital Tutors - Unity Mobile Game Development Series",
        category: "tutorials",
        description: "Complete course on creating mobile games with Unity. Includes character modeling, rigging, animation, and game logic scripting.",
        date: "2024-01-15",
        badge: "FREE",
        icon: "🎮"
    },
    {
        id: 2,
        title: "Blender Character Creation - Complete Course",
        category: "tutorials",
        description: "Learn professional character creation workflow from concept to final render. Includes sculpting, retopology, and texturing.",
        date: "2024-01-12",
        badge: "FREE",
        icon: "🎨"
    },
    {
        id: 3,
        title: "Cinema 4D City Pack - 3D Models Collection",
        category: "3d-models",
        description: "High-quality city building models pack. Perfect for architectural visualization and motion graphics projects.",
        date: "2024-01-10",
        badge: "FREE",
        icon: "🏙️"
    },
    {
        id: 4,
        title: "Advanced Maya Lighting and Rendering Techniques",
        category: "tutorials",
        description: "Master professional lighting setups and rendering workflows in Maya. Includes Arnold renderer techniques.",
        date: "2024-01-08",
        badge: "PRO",
        icon: "💡"
    },
    {
        id: 5,
        title: "Substance Designer - PBR Materials Pack",
        category: "textures",
        description: "100+ procedural PBR materials for games and visualization. Fully customizable substance files included.",
        date: "2024-01-05",
        badge: "FREE",
        icon: "🎭"
    },
    {
        id: 6,
        title: "ZBrush Sculpting Fundamentals",
        category: "tutorials",
        description: "Complete guide to digital sculpting in ZBrush. From basic forms to detailed character sculpts.",
        date: "2024-01-03",
        badge: "FREE",
        icon: "🗿"
    },
    {
        id: 7,
        title: "Unreal Engine 5 - Environment Design Course",
        category: "tutorials",
        description: "Create stunning photorealistic environments using UE5's latest features including Nanite and Lumen.",
        date: "2023-12-28",
        badge: "PRO",
        icon: "🌲"
    },
    {
        id: 8,
        title: "Photoshop CC 2024 - Complete Plugin Collection",
        category: "plugins",
        description: "Essential plugins for digital artists. Includes brushes, actions, and automation tools.",
        date: "2023-12-25",
        badge: "FREE",
        icon: "🔌"
    },
    {
        id: 9,
        title: "Houdini Procedural Modeling Masterclass",
        category: "tutorials",
        description: "Learn node-based procedural modeling in Houdini. Create complex parametric models and effects.",
        date: "2023-12-20",
        badge: "PRO",
        icon: "⚡"
    },
    {
        id: 10,
        title: "3ds Max Architectural Visualization Pack",
        category: "3d-models",
        description: "Complete furniture and decor models for interior visualization. High-poly and optimized versions included.",
        date: "2023-12-18",
        badge: "FREE",
        icon: "🛋️"
    },
    {
        id: 11,
        title: "Marvelous Designer - Clothing Creation Tutorial",
        category: "tutorials",
        description: "Create realistic clothing and fabric simulations. Perfect for game characters and fashion design.",
        date: "2023-12-15",
        badge: "FREE",
        icon: "👔"
    },
    {
        id: 12,
        title: "V-Ray 6 for 3ds Max - Complete Training",
        category: "software",
        description: "Master the latest V-Ray features for photorealistic rendering. Includes lighting, materials, and optimization.",
        date: "2023-12-12",
        badge: "PRO",
        icon: "🎬"
    },
    {
        id: 13,
        title: "Stable Diffusion - AI Art Generation Masterclass",
        category: "ai",
        description: "Complete guide to creating stunning AI-generated artwork. Learn prompting techniques, model training, and advanced workflows.",
        date: "2024-01-20",
        badge: "FREE",
        icon: "🤖"
    },
    {
        id: 14,
        title: "ChatGPT for 3D Artists - Workflow Automation",
        category: "ai",
        description: "Leverage AI to automate repetitive tasks, generate scripts, and enhance your creative workflow with ChatGPT.",
        date: "2024-01-18",
        badge: "FREE",
        icon: "💬"
    },
    {
        id: 15,
        title: "Midjourney Complete Course - Concept Art with AI",
        category: "ai",
        description: "Master Midjourney for creating professional concept art. From basic prompts to advanced techniques and style references.",
        date: "2024-01-16",
        badge: "PRO",
        icon: "🎨"
    },
    {
        id: 16,
        title: "AI Texture Generation - Substance 3D Sampler",
        category: "ai",
        description: "Use AI-powered tools to generate realistic textures from photos. Complete workflow with Substance 3D Sampler.",
        date: "2024-01-14",
        badge: "FREE",
        icon: "🖼️"
    },
    {
        id: 17,
        title: "ComfyUI - Advanced AI Image Generation",
        category: "ai",
        description: "Node-based AI image generation with ComfyUI. Create complex workflows for consistent, high-quality results.",
        date: "2024-01-10",
        badge: "PRO",
        icon: "🔗"
    },
    {
        id: 18,
        title: "AI Motion Capture - Rokoko & DeepMotion",
        category: "ai",
        description: "AI-powered motion capture without expensive hardware. Learn Rokoko and DeepMotion for character animation.",
        date: "2024-01-08",
        badge: "FREE",
        icon: "🏃"
    }
];

let currentCategory = 'all';
let currentPage = 1;
const itemsPerPage = 9;

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    renderContent();
    setupEventListeners();
});

// Render content cards
function renderContent() {
    const contentGrid = document.getElementById('contentGrid');
    const filteredData = currentCategory === 'all' 
        ? contentData 
        : contentData.filter(item => item.category === currentCategory || item.badge.toLowerCase() === currentCategory);

    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    const paginatedData = filteredData.slice(startIndex, endIndex);

    contentGrid.innerHTML = paginatedData.map(item => `
        <div class="content-card" data-category="${item.category}">
            <div class="card-image">${item.icon}</div>
            <div class="card-content">
                <span class="card-category">${item.category.replace('-', ' ')}</span>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-description">${item.description}</p>
                <div class="card-meta">
                    <span class="card-date">📅 ${formatDate(item.date)}</span>
                    <span class="card-badge">${item.badge}</span>
                </div>
            </div>
        </div>
    `).join('');

    // Add click animation
    document.querySelectorAll('.content-card').forEach(card => {
        card.addEventListener('click', () => {
            card.style.transform = 'scale(0.98)';
            setTimeout(() => {
                card.style.transform = '';
            }, 200);
        });
    });
}

// Format date
function formatDate(dateString) {
    const date = new Date(dateString);
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return date.toLocaleDateString('en-US', options);
}

// Setup event listeners
function setupEventListeners() {
    // Category filter tags
    const tags = document.querySelectorAll('.tag');
    tags.forEach(tag => {
        tag.addEventListener('click', () => {
            tags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            currentCategory = tag.dataset.category;
            currentPage = 1;
            renderContent();
        });
    });

    // Header navigation links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            currentCategory = category;
            currentPage = 1;
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            link.classList.add('active');
            
            // Update active tag
            tags.forEach(t => t.classList.remove('active'));
            const matchingTag = document.querySelector(`.tag[data-category="${category}"]`);
            if (matchingTag) {
                matchingTag.classList.add('active');
            }
            
            renderContent();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Sidebar category links
    const categoryLinks = document.querySelectorAll('.category-list a');
    categoryLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            currentCategory = category;
            currentPage = 1;
            
            // Update active tag
            tags.forEach(t => t.classList.remove('active'));
            const matchingTag = document.querySelector(`.tag[data-category="${category}"]`);
            if (matchingTag) {
                matchingTag.classList.add('active');
            }
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            const matchingNavLink = document.querySelector(`.nav-link[data-category="${category}"]`);
            if (matchingNavLink) {
                matchingNavLink.classList.add('active');
            }
            
            renderContent();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Footer links
    const footerLinks = document.querySelectorAll('.footer-link');
    footerLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const category = link.dataset.category;
            currentCategory = category;
            currentPage = 1;
            
            // Update active tag
            tags.forEach(t => t.classList.remove('active'));
            const matchingTag = document.querySelector(`.tag[data-category="${category}"]`);
            if (matchingTag) {
                matchingTag.classList.add('active');
            }
            
            // Update active nav link
            navLinks.forEach(l => l.classList.remove('active'));
            const matchingNavLink = document.querySelector(`.nav-link[data-category="${category}"]`);
            if (matchingNavLink) {
                matchingNavLink.classList.add('active');
            }
            
            renderContent();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Recent Posts links
    const recentPostLinks = document.querySelectorAll('.recent-post-link');
    recentPostLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const searchTerm = link.dataset.search;
            const searchInput = document.getElementById('searchInput');
            searchInput.value = searchTerm;
            performSearch();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Tag Cloud links
    const cloudTags = document.querySelectorAll('.cloud-tag');
    cloudTags.forEach(tag => {
        tag.addEventListener('click', (e) => {
            e.preventDefault();
            const searchTerm = tag.dataset.search;
            const searchInput = document.getElementById('searchInput');
            searchInput.value = searchTerm;
            performSearch();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    // Search functionality
    const searchInput = document.getElementById('searchInput');
    const searchBtn = document.querySelector('.search-btn');

    searchBtn.addEventListener('click', performSearch);
    searchInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            performSearch();
        }
    });

    // Pagination
    setupPagination();
}

// Search functionality
function performSearch() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase().trim();
    
    if (!searchTerm) {
        renderContent();
        return;
    }

    const contentGrid = document.getElementById('contentGrid');
    const filteredData = contentData.filter(item => 
        item.title.toLowerCase().includes(searchTerm) ||
        item.description.toLowerCase().includes(searchTerm) ||
        item.category.toLowerCase().includes(searchTerm)
    );

    if (filteredData.length === 0) {
        contentGrid.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 60px 20px;">
                <h2 style="font-size: 24px; margin-bottom: 10px;">No results found</h2>
                <p style="color: var(--text-gray);">Try searching with different keywords</p>
            </div>
        `;
        return;
    }

    contentGrid.innerHTML = filteredData.map(item => `
        <div class="content-card" data-category="${item.category}">
            <div class="card-image">${item.icon}</div>
            <div class="card-content">
                <span class="card-category">${item.category.replace('-', ' ')}</span>
                <h3 class="card-title">${item.title}</h3>
                <p class="card-description">${item.description}</p>
                <div class="card-meta">
                    <span class="card-date">📅 ${formatDate(item.date)}</span>
                    <span class="card-badge">${item.badge}</span>
                </div>
            </div>
        </div>
    `).join('');
}

// Pagination setup
function setupPagination() {
    const pageButtons = document.querySelectorAll('.page-num');
    const prevBtn = document.querySelector('.page-btn:first-child');
    const nextBtn = document.querySelector('.page-btn:last-child');

    pageButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            pageButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            currentPage = index + 1;
            renderContent();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    });

    prevBtn.addEventListener('click', () => {
        if (currentPage > 1) {
            currentPage--;
            updatePaginationUI();
            renderContent();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentPage < 5) {
            currentPage++;
            updatePaginationUI();
            renderContent();
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    });
}

// Update pagination UI
function updatePaginationUI() {
    const pageButtons = document.querySelectorAll('.page-num');
    pageButtons.forEach((btn, index) => {
        btn.classList.toggle('active', index + 1 === currentPage);
    });

    const prevBtn = document.querySelector('.page-btn:first-child');
    const nextBtn = document.querySelector('.page-btn:last-child');
    
    prevBtn.disabled = currentPage === 1;
    nextBtn.disabled = currentPage === 5;
}

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
