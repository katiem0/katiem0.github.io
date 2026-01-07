/**
 * Clipboard functions
 *
 * Dependencies:
 *   - popper.js (https://github.com/popperjs/popper-core)
 *   - clipboard.js (https://github.com/zenorocha/clipboard.js)
 */

const clipboardSelector = '.code-header>button';
const ICON_SUCCESS = 'fas fa-check';
const ATTR_TIMEOUT = 'timeout';
const ATTR_TITLE_SUCCEED = 'data-title-succeed';
const ATTR_TITLE_ORIGIN = 'data-bs-original-title';
const TIMEOUT = 2000; // in milliseconds

function isLocked(node) {
  if ($(node)[0].hasAttribute(ATTR_TIMEOUT)) {
    let timeout = $(node).attr(ATTR_TIMEOUT);
    if (Number(timeout) > Date.now()) {
      return true;
    }
  }
  return false;
}

function lock(node) {
  $(node).attr(ATTR_TIMEOUT, Date.now() + TIMEOUT);
}

function unlock(node) {
  $(node).removeAttr(ATTR_TIMEOUT);
}

function getIcon(btn) {
  let iconNode = $(btn).children();
  return iconNode.attr('class');
}

const ICON_DEFAULT = getIcon(clipboardSelector);

function showTooltip(btn) {
  const succeedTitle = $(btn).attr(ATTR_TITLE_SUCCEED);
  $(btn).attr(ATTR_TITLE_ORIGIN, succeedTitle).tooltip('show');
}

function hideTooltip(btn) {
  $(btn).tooltip('hide').removeAttr(ATTR_TITLE_ORIGIN);
}

function setSuccessIcon(btn) {
  let btnNode = $(btn);
  let iconNode = btnNode.children();
  iconNode.attr('class', ICON_SUCCESS);
}

function resumeIcon(btn) {
  let btnNode = $(btn);
  let iconNode = btnNode.children();
  iconNode.attr('class', ICON_DEFAULT);
}

export function initClipboard() {
  // Initial the clipboard.js object
  if ($(clipboardSelector).length) {
    const clipboard = new ClipboardJS(clipboardSelector, {
      text(trigger) {
        // Use text function exclusively to avoid target validation issues
        const codeHeader = trigger.parentNode;
        if (!codeHeader) {
          console.warn('No code header found for clipboard button');
          return '';
        }

        const highlightDiv = codeHeader.nextElementSibling;
        if (!highlightDiv) {
          console.warn('No highlight div found after code header');
          return '';
        }

        // Try to find the rouge-code td (for table-based structure with line numbers)
        const rougeCode = highlightDiv.querySelector('td.rouge-code pre');
        if (rougeCode) {
          return rougeCode.textContent || '';
        }

        // Try simple code structure (for console/plaintext/shell without table)
        const simpleCode = highlightDiv.querySelector('code');
        if (simpleCode) {
          return simpleCode.textContent || '';
        }

        // For direct pre/code structure without nested elements
        const directPre = highlightDiv.querySelector('pre');
        if (directPre) {
          return directPre.textContent || '';
        }

        // If highlight div contains just text without wrapper elements
        if (highlightDiv.classList.contains('highlight')) {
          return highlightDiv.textContent || '';
        }

        console.warn('Could not extract text from code block');
        return '';
      }
    });

    const clipboardList = document.querySelectorAll(clipboardSelector);
    [...clipboardList].map(
      (elem) =>
        new bootstrap.Tooltip(elem, {
          placement: 'left'
        })
    );

    clipboard.on('success', (e) => {
      e.clearSelection();

      const trigger = e.trigger;
      if (isLocked(trigger)) {
        return;
      }

      setSuccessIcon(trigger);
      showTooltip(trigger);
      lock(trigger);

      setTimeout(() => {
        hideTooltip(trigger);
        resumeIcon(trigger);
        unlock(trigger);
      }, TIMEOUT);
    });

    clipboard.on('error', (e) => {
      console.error('Clipboard copy failed:', e);
      // Fallback to manual copy
      const text = e.text || '';
      if (text && navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
          console.log('Fallback copy successful');
        });
      }
    });
  }
  /* --- Post link sharing --- */

  $('#copy-link').on('click', (e) => {
    let target = $(e.target);

    if (isLocked(target)) {
      return;
    }

    // Copy URL to clipboard
    navigator.clipboard.writeText(window.location.href).then(() => {
      const defaultTitle = target.attr(ATTR_TITLE_ORIGIN);
      const succeedTitle = target.attr(ATTR_TITLE_SUCCEED);
      // Switch tooltip title
      target.attr(ATTR_TITLE_ORIGIN, succeedTitle).tooltip('show');
      lock(target);

      setTimeout(() => {
        target.attr(ATTR_TITLE_ORIGIN, defaultTitle);
        unlock(target);
      }, TIMEOUT);
    });
  });
}
