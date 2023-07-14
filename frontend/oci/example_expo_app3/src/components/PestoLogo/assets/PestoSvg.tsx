

import Svg, { G, Path } from 'react-native-svg';
import { MD3Theme, useTheme } from 'react-native-paper';

interface PestoSvgProps {
    width?: number;
    height?: number;
    theme?: MD3Theme;
}
const pestoDefaultTheme = useTheme();


export default function PestoLogo (props:PestoSvgProps) { return (
        <Svg width={ props.width || "280" } height={props.height || "290"} >
        
        </Svg>
    )
}