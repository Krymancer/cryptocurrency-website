/* @refresh reload */
import './index.css';
import {render} from 'solid-js/web';

import Main from '@pages/Main';

render(() => <Main />, document.getElementById('root') as HTMLElement);
