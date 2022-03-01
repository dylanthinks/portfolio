import { createGlobalStyle } from 'styled-components';

import Nunito from './Nunito-Regular.ttf';
import SourceSerifPro from './SourceSerifPro-Regular.ttf';

const FontStyles = createGlobalStyle`
    @font-face {
        font-family: 'Nunito';
        src: local('Nunito'), local('Nunito'),
        url(${Nunito}) format('ttf'),
        url(${SourceSerifPro}) format('ttf');
        font-weight: 300;
        font-style: normal;
    }
`;

export default FontStyles;