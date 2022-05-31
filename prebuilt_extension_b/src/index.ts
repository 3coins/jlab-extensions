import {
  JupyterFrontEnd,
  JupyterFrontEndPlugin
} from '@jupyterlab/application';

import {
  IPrebuiltA 
} from 'prebuilt-extension-a';

/**
 * Initialization data for the prebuilt-extension-b extension.
 */
const plugin: JupyterFrontEndPlugin<void> = {
  id: 'prebuilt-extension-b:plugin',
  autoStart: true,
  activate: (app: JupyterFrontEnd, a: IPrebuiltA) => {
    console.log('JupyterLab extension prebuilt-extension-b is activated!');
    console.log(`prebuilt-a: ${a}`);
  },
  requires: [
    IPrebuiltA
  ]
};

export default plugin;
