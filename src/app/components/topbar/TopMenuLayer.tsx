import * as React from "react";
import { observer } from "mobx-react";
import { observable } from "mobx";
import { LanguageSwitcher } from "app/components/toolbar/LanguageSwitcher";
import { AppConfig } from "app/AppConfig";
import { UserPreferences } from "app/UserPreferences";
import { MenuItem, MenuLayer, Translation } from "@alethio/cms";

export interface ITomMenuLayerProps {
    open: boolean;
    translation: Translation;
    appConfig: AppConfig;
    userPreferences: UserPreferences;
    slots?: JSX.Element[];
    onRequestClose(): void;
}

@observer
export class TopMenuLayer extends React.Component<ITomMenuLayerProps> {
    @observable
    searchOpen = false;

    render() {
        let { open, translation: tr } = this.props;

        return <MenuLayer open={open} onRequestClose={this.props.onRequestClose}>
            { this.props.slots }
            <MenuItem title={tr.get("toolbar.localization.label")} sticky>
                <LanguageSwitcher
                    appConfig={this.props.appConfig}
                    translation={tr}
                    userPreferences={this.props.userPreferences}
                    onLocaleChange={this.onClose}
                />
            </MenuItem>
        </MenuLayer>;
    }

    private onClose = () => {
        this.searchOpen = false;
        this.props.onRequestClose();
    }
}
