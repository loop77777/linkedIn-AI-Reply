export default defineBackground(() => {
  console.log('Hello background!', { id: browser.runtime.id });

  browser.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.action === 'openModal') {
      browser.windows.create({
        url: browser.runtime.getURL(`/popup.html`),
        type: 'popup',
        width: 400,
        height: 300
      });
    }
  });
});
