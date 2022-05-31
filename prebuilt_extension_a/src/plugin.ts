import {
    JupyterFrontEnd,
    JupyterFrontEndPlugin
  } from '@jupyterlab/application';
  import { IPrebuiltA } from './tokens';
  
  /**
   * Initialization data for the prebuilt-extension-a extension.
   */
  const plugin: JupyterFrontEndPlugin<IPrebuiltA> = {
    id: 'prebuilt-extension-a:plugin',
    autoStart: true,
    activate: (app: JupyterFrontEnd) => {
      console.log('JupyterLab extension prebuilt-extension-a is activated!');
      return {
        propertyA: "foo"
      }
    },
    provides: IPrebuiltA
  };
  
  export default plugin;
  