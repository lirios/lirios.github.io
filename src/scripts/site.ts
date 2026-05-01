const initDrawer = () => {
  const drawer = document.querySelector<HTMLElement>('[data-site-drawer]');
  const scrim = document.querySelector<HTMLElement>('[data-drawer-scrim]');
  const openButton = document.querySelector<HTMLButtonElement>('[data-drawer-open]');
  const closeButton = document.querySelector<HTMLButtonElement>('[data-drawer-close]');

  if (!drawer || !scrim || !openButton || !closeButton) {
    return;
  }

  const setOpen = (open: boolean) => {
    drawer.toggleAttribute('data-open', open);
    scrim.toggleAttribute('data-open', open);
    openButton.setAttribute('aria-expanded', String(open));
    document.body.classList.toggle('drawer-open', open);
  };

  openButton.addEventListener('click', () => setOpen(true));
  closeButton.addEventListener('click', () => setOpen(false));
  scrim.addEventListener('click', () => setOpen(false));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
      setOpen(false);
    }
  });
};

const initTabs = () => {
  document.querySelectorAll<HTMLElement>('[data-tabs]').forEach((root) => {
    const tabs = root.querySelector<HTMLElement>('md-tabs');
    const panels = Array.from(root.querySelectorAll<HTMLElement>('[role="tabpanel"]'));

    if (!tabs || panels.length === 0) {
      return;
    }

    const syncPanels = () => {
      const activeIndex = Number((tabs as unknown as { activeTabIndex?: number }).activeTabIndex ?? 0);
      panels.forEach((panel, index) => {
        panel.hidden = index !== activeIndex;
      });
    };

    tabs.addEventListener('change', syncPanels);

    // md-tabs is a Lit component; wait for its first render before syncing so
    // that activeTabIndex reflects the `active` attribute on the first tab.
    const updateComplete = (tabs as unknown as { updateComplete?: Promise<boolean> }).updateComplete;
    (updateComplete ?? Promise.resolve()).then(syncPanels);
  });
};

const init = () => {
  initDrawer();
  initTabs();
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init, { once: true });
} else {
  init();
}
