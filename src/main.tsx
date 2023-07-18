import ReactDOMClient from 'react-dom/client'
import { GlobalStyle as ResetCSS } from './styles/reset.styles.ts';
import { StyleSheetManager } from 'styled-components';
import {App} from "./view/App.tsx";

const container = document.getElementById('root') as HTMLElement;
const root = ReactDOMClient.createRoot(container);
root.render(
    <StyleSheetManager shouldForwardProp={(name) => !name.startsWith('$')}>
        <ResetCSS />
        <App />
    </StyleSheetManager>)