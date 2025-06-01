fetch('/index.json')
  .then(response => response.json())
  .then(docs => {
    const idx = lunr(function () {
      this.ref('href');
      this.field('title');
      this.field('content');
      this.field('excerpt'); // 👈 Add this line
      docs.forEach(doc => this.add(doc));
    });

    const input = document.getElementById('search');
    const results = document.getElementById('results');

    input.addEventListener('input', function () {
      const query = this.value.trim();
      if (query.length < 2) {
        results.innerHTML = '';
        return;
      }

      const hits = idx.search(query);
      if (hits.length > 0) {
        results.innerHTML = '<ul class="list pl0">' + hits.map(hit => {
          const match = docs.find(d => d.href === hit.ref);
          return `<li class="mb2"><a href="${match.href}" class="link blue underline">${match.title}</a></li>`;
        }).join('') + '</ul>';
      } else {
        results.innerHTML = '<p class="gray">No results found</p>';
      }
    });
  });
