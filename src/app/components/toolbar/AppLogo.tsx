import * as React from "react";
import { IconButton } from "@alethio/ui/lib/control/IconButton";
import { AppIcon } from "app/components/toolbar/AppIcon";

export interface IToolbarLogoProps {

}

export class AppLogo extends React.Component<IToolbarLogoProps> {
    render() {
        return (
            <IconButton Icon={AppIcon} color={theme => theme.colors.toolbarAlethioIconHover} />
        );
    }
}
