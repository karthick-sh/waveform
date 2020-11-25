import React from 'react';

import Channel from 'components/Channel/Channel';
import ExplorerPanel from 'containers/ExplorerPanel/ExplorerPanel';
import EffectsPanel from 'containers/EffectsPanel/EffectsPanel';

import './Workspace.scss';

const Workspace = () => {
    return (
        <div className="Workspace__container">
            <div className="Workspace__channel_container">
                <Channel />
                <Channel />
            </div>
            <div className="Workspace__feature_container">
                <ExplorerPanel />
            </div>
        </div>
    )
}

export default Workspace;