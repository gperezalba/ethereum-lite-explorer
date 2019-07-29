import * as React from "react";
import { ISvgIconProps } from "@alethio/ui/lib/util/react/SvgIcon";

export interface IAlethioIconProps extends ISvgIconProps {
}

export class AppIcon extends React.PureComponent<IAlethioIconProps> {
    render() {
        return (
            <svg width="40px" height="40px"
                 xmlns="http://www.w3.org/2000/svg" viewBox="0 0 283.5 283.5" version="1.1">

                <circle cx="141.7" cy="141.7" r="141.7" fill="#0a2346"/>
                <path d="M148.8 53.5h-17.5c-1.3 0-2.3 1-2.3 2.3v17.5c0 1.3 1 2.3 2.3 2.3h17.5c1.3 0 2.3-1 2.3-2.3V55.8c0-1.3-1-2.3-2.3-2.3z" fill="#60bffc"/>
                <path d="M129.1 150.2v23.3c0 1.4 1.1 2.6 2.6 2.6h19.4c24.5-1.1 44.1-21.3 44.1-46.1s-19.5-45-44.1-46.1h-48.4c-1.4 0-2.6 1.1-2.6 2.6v134c0 1.4 1.1 2.6 2.6 2.6h16.9c1.4 0 2.6-1.1 2.6-2.6V107.1c0-1.4 1.1-2.6 2.6-2.6h26.5c13 1.1 23.3 12 23.3 25.4 0 12.3-8.7 22.6-20.3 24.9-1.6.3-3.1-.9-3.1-2.5v-2.2h-22.1z" fill="#fff"/>
                <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="140.07" y1="158.416" x2="140.07" y2="106.177">
                    <stop offset="0" stop-color="#fff"/>
                    <stop offset=".659" stop-color="#60bffc"/>
                    <stop offset=".979" stop-color="#0071bc"/>
                </linearGradient>
                <path fill="url(#a)" d="M129.1 104.6h22v68.6h-22z"/>
            </svg>
        );
    }
}
