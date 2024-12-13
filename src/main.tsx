import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, HashRouter } from 'react-router-dom';
import { Provider } from 'react-redux';

import { App } from '@/app/App';
import { store } from '@/app/store/store';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <HashRouter>
            <Provider store={store}>
                <App />
            </Provider>
        </HashRouter>
    </StrictMode>,
);
