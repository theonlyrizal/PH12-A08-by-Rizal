import React from 'react';
import { useLocalStorage } from '@uidotdev/usehooks';
import { ToastContainer, toast } from 'react-toastify';
import { AppInstallContext } from './AppInstallContext';
const AppInstallProvider = ({ children }) => {
  const [installedApps, setInstalledApps] = useLocalStorage('installedApps', []);

  const installApp = (app) => {
    setInstalledApps([...installedApps, app]);
    toast.success(`Successfully Installed ${app.title}`);
  };

  const uninstallApp = (app) => {
    setInstalledApps(installedApps.filter((pick) => pick.id !== app.id));
    toast.success(`Uninstalled ${app.title}`);
  };

  return (
    <AppInstallContext.Provider value={{ installedApps, installApp, uninstallApp }}>
      {children}
      <ToastContainer position="bottom-right" hideProgressBar />
    </AppInstallContext.Provider>
  );
};

export default AppInstallProvider;
