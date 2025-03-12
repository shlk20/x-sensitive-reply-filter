interface KeywordStorage {
  filterKeywords: string[];
}

function containsFilteredKeyword(text: string, keywords: string[]): boolean {
  return keywords.some(keyword =>
    text.toLowerCase().includes(keyword.toLowerCase())
  );
}

function filterReplies(): void {
  try {
    chrome.storage.sync.get(['filterKeywords'], (result: KeywordStorage) => {
      if (chrome.runtime.lastError) {
        console.error("Storage error:", chrome.runtime.lastError);
      } else {
        const keywords = result.filterKeywords || [];

        const replies = document.querySelectorAll('[data-testid="tweet"]');

        replies.forEach((reply: Element) => {
          const tweetTextElement = reply.querySelector('[data-testid="tweetText"]');
          const tweetText = tweetTextElement?.textContent || '';

          if (containsFilteredKeyword(tweetText, keywords)) {
            (reply as HTMLElement).style.display = 'none';
          }
        });
      }
    });
  } catch (error) {
    console.log("Error accessing storage:", error);
  }
}

// Run filter on page load and periodically
filterReplies();
setInterval(filterReplies, 2000);

// Listen for changes in storage
chrome.storage.onChanged.addListener((changes, namespace) => {
  if (namespace === 'sync' && changes.filterKeywords) {
    filterReplies();
  }
}); 