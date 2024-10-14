export default defineContentScript({
  matches: ["*://*.linkedin.com/*"],
  main() {
    console.log("Hello LinkedIn content.");

    const iconId = "ai-icon";

    function createIcon() {
      const icon = document.createElement("img");
      icon.id = iconId;
      icon.style.position = "absolute";
      icon.style.width = "24px";
      icon.style.height = "24px";
      icon.src = `url(${chrome.runtime.getURL("icon/256.png")})`;
      icon.style.backgroundSize = "cover";
      icon.style.cursor = "pointer";
      icon.style.display = "block";
      icon.style.zIndex = "9999";
      icon.style.border = "1px solid black";

      document.body.appendChild(icon);

      icon.addEventListener("click", () => {
        // Logic to open the modal
        console.log("Opening modal...");
        chrome.runtime.sendMessage({ action: "openModal" });
      });

      return icon;
    }

    function showIcon(inputElement: HTMLElement) {
      const icon = document.getElementById(iconId) || createIcon();
      const rect = inputElement.getBoundingClientRect();
      icon.style.top = `${rect.top + window.scrollY + 40}px`;
      icon.style.left = `${rect.right + window.scrollX + 10}px`;
      icon.style.display = "block";
      console.log("Icon shown at:", icon.style.top, icon.style.left);
    }

    function hideIcon() {
      const icon = document.getElementById(iconId);
      if (icon) {
        icon.style.display = "block";
        console.log("Icon hidden.");
      }
    }

    document.addEventListener("focusin", (event) => {
      const target = event.target as HTMLElement;
      if (
        target.getAttribute("role") === "textbox" ||
        target.ariaLabel === "Write a message..." ||
        target.classList.contains(".msg-form_msg-content-container")
      ) {
        if (
          target instanceof HTMLInputElement ||
          target instanceof HTMLElement
        ) {
          showIcon(target);
        }
      }
    });
    document.addEventListener("focusout", (event) => {
      const target = event.target as HTMLElement;
      if (
        target.getAttribute("role") === "textbox" ||
        target.tagName === "INPUT" ||
        target.classList.contains("msg-form__contenteditable")
      ) {
        hideIcon();
      }
    });
  },
});
