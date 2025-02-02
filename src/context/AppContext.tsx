import { createContext } from 'react';

import { AppProviderState } from './AppProvider';

export type AppContextType = AppProviderState & {
  fetchData(value: string): Promise<void>;
};

const AppContext = createContext<AppContextType | undefined>(undefined);

export default AppContext;
