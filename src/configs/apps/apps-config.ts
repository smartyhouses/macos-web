import { createAppConfig } from '🍎/helpers/create-app-config';

const wallpapers = createAppConfig({
  title: 'Wallpapers',
  resizable: true,

  height: 600,
  width: 800,

  dockBreaksBefore: true,
});

const calculator = createAppConfig({
  title: 'Calculator',

  expandable: true,
  resizable: false,

  height: 300 * 1.414,
  width: 300,
});

const calendar = createAppConfig({
  title: 'Calendar',
  resizable: true,
});

const vscode = createAppConfig({
  title: 'VSCode',
  resizable: true,

  height: 600,
  width: 800,
});

const finder = createAppConfig({
  title: 'Finder',
  resizable: true,

  // dockBreaksBefore: true,
  shouldOpenWindow: false,
});

const safari = createAppConfig({
  title: 'Safari',
  resizable: true,
});

const systemPreferences = createAppConfig({
  title: 'System Preferences',
  resizable: true,
});

const purusTwitter = createAppConfig({
  title: `Agents`,
  resizable: true,

  dockBreaksBefore: true,

  height: 600,
  width: 800,
});

const viewSource = createAppConfig({
  title: `View agents`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () => window.open('https://ag.prtl.cc', '_blank'),
});

const vercel = createAppConfig({
  title: `Powered by Portal`,
  resizable: true,

  shouldOpenWindow: false,
  externalAction: () =>
    window.open('https://prtl.cc', '_blank'),

  dockBreaksBefore: true,
});

const appstore = createAppConfig({
  title: 'App Store',
  resizable: true,
});

export const appsConfig = {
  finder,
  wallpapers,
  calculator,
  calendar,
  vscode,
  appstore,
  safari,
  'system-preferences': systemPreferences,
  'purus-twitter': purusTwitter,
  'view-source': viewSource,
  vercel,
};
