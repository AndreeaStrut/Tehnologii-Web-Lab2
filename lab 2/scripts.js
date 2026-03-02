let allResources = [];

fetch('./data/resources.json')
    .then(res => res.json())
    .then(data => {
        allResources = data;
        render(allResources);
        createTags(allResources);
    });

function render(data) {
    const container = document.getElementById('resourceContainer');
    container.innerHTML = '';

    data.forEach(item => {
        const card = document.createElement('article');
        card.className = 'card';
        let pagePath = "";
        if (item.name.includes("Biblioteca")) {
            pagePath = "pages/library.html";
        } else if (item.name.includes("Cantina")) {
            pagePath = "pages/cafeteria.html";
        } else if (item.name.includes("Evenimente") || item.name.includes("Sala")) {
            pagePath = "pages/events.html";
        }

        const tags = item.tags.map(t => `<span class="tag">#${t}</span>`).join('');

        card.innerHTML = `
            <a href="${pagePath}" style="text-decoration: none; color: inherit; display: block;">
                <h3>${item.name}</h3>
                <div class="card-detail"><span>📍</span> ${item.location}</div>
                <div class="card-detail"><span>⏰</span> ${item.program}</div>
                <div class="card-detail"><span>🏢</span> Tip: ${item.type}</div>
                <div class="tag-container">${tags}</div>
            </a>
        `;
        container.appendChild(card);
    });
}

function filterByType(type) {
    const filtered = type === 'all' ? allResources : allResources.filter(r => r.type === type);
    render(filtered);
}

function createTags(data) {
    const cloud = document.getElementById('tagCloud');
    const tags = [...new Set(data.flatMap(r => r.tags))];
    
    cloud.innerHTML = tags.map(tag => 
        `<span class="filter-tag" onclick="filterByTag('${tag}')">${tag}</span>`
    ).join(' ');
}

function filterByTag(tag) {
    const filtered = allResources.filter(r => r.tags.includes(tag));
    render(filtered);
}