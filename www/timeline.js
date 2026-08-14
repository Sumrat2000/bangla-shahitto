// টাইমলাইন রেন্ডার + ক্লিকে একই জায়গায় এক্সপ্যান্ড অ্যানিমেশন
document.addEventListener('DOMContentLoaded', () => {
  const nodesWrap = document.getElementById('tlNodes');

  timelineData.forEach((item, idx) => {
    const entry = document.createElement('div');
    entry.className = 'tl-entry';
    entry.id = `entry-${item.id}`;

    entry.innerHTML = `
      <div class="tl-node" data-id="${item.id}">
        <span class="tl-node-year">${item.year}</span>
      </div>
      <div class="tl-teaser" data-id="${item.id}">
        <b>${item.title}</b>
        <small>${item.shortDesc}</small>
      </div>
      <div class="tl-card" id="card-${item.id}">
        <div class="tl-card-inner">
          <img class="tl-card-img" src="${item.image}" alt="${item.title}">
          <div class="tl-card-body">
            <h2>${item.title}</h2>
            <p class="tl-card-desc">${item.shortDesc} · ${item.year}</p>
            ${item.sections.map(sec => `
              <div class="tl-section">
                <h3>${sec.heading}</h3>
                <ul>
                  ${sec.points.map(p => `<li>${p}</li>`).join('')}
                </ul>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    `;
    nodesWrap.appendChild(entry);
  });

  // ক্লিক হ্যান্ডলার: নোড বা টিজারে ক্লিক করলে ওই জায়গাতেই কার্ড খুলবে/বন্ধ হবে
  nodesWrap.addEventListener('click', (e) => {
    const trigger = e.target.closest('.tl-node, .tl-teaser');
    if (!trigger) return;
    const id = trigger.dataset.id;
    const card = document.getElementById(`card-${id}`);
    const node = document.querySelector(`.tl-node[data-id="${id}"]`);
    const isOpen = card.classList.contains('open');

    // অন্য সব বন্ধ করি যাতে একটাই সম্প্রসারিত থাকে (readability)
    document.querySelectorAll('.tl-card.open').forEach(c => {
      if (c !== card) c.classList.remove('open');
    });
    document.querySelectorAll('.tl-node.open').forEach(n => {
      if (n !== node) n.classList.remove('open');
    });

    card.classList.toggle('open', !isOpen);
    node.classList.toggle('open', !isOpen);

    if (!isOpen) {
      setTimeout(() => {
        card.closest('.tl-entry').scrollIntoView({ behavior: 'smooth', block: 'start' });
      }, 120);
    }
  });
});
