interface KeywordStorage {
  filterKeywords: string[];
}

document.addEventListener('DOMContentLoaded', function() {
  loadKeywords();
  document.getElementById('addKeyword')?.addEventListener('click', addKeyword);
});

function loadKeywords(): void {
  chrome.storage.sync.get(['filterKeywords'], (result: KeywordStorage) => {
    const keywords = result.filterKeywords || [];
    const keywordList = document.getElementById('keywordList');
    if (!keywordList) return;
    
    keywordList.innerHTML = '';
    keywords.forEach(keyword => {
      addKeywordToList(keyword);
    });
  });
}

function addKeyword(): void {
  const input = document.getElementById('keywordInput') as HTMLInputElement;
  const keyword = input.value.trim();
  
  if (keyword) {
    chrome.storage.sync.get(['filterKeywords'], (result: KeywordStorage) => {
      const keywords = result.filterKeywords || [];
      if (!keywords.includes(keyword)) {
        keywords.push(keyword);
        chrome.storage.sync.set({ filterKeywords: keywords }, () => {
          addKeywordToList(keyword);
          input.value = '';
        });
      }
    });
  }
}

function addKeywordToList(keyword: string): void {
  const keywordList = document.getElementById('keywordList');
  if (!keywordList) return;

  const div = document.createElement('div');
  div.className = 'keyword-item';
  
  const span = document.createElement('span');
  span.textContent = keyword;
  
  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.onclick = function() {
    chrome.storage.sync.get(['filterKeywords'], (result: KeywordStorage) => {
      const keywords = result.filterKeywords || [];
      const newKeywords = keywords.filter(k => k !== keyword);
      chrome.storage.sync.set({ filterKeywords: newKeywords }, () => {
        div.remove();
      });
    });
  };
  
  div.appendChild(span);
  div.appendChild(deleteButton);
  keywordList.appendChild(div);
} 