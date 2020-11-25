import React from 'react';

import firebase from 'firebase/app';

import FileUploader from 'components/FileUploader/FileUploader';
import PanelHeading from 'components/PanelHeading/PanelHeading';

import './ExplorerPanel.scss';

const ExplorerPanel = () => {
    const onUploadStart = (e, t) => {
        console.log("Upload start, ", e, t);
    }
    const onUploadError = (e, t) => {
        console.log("Upload error, ", e, t);
    }
    const onUploadSuccess = (e) => {
        console.log("Upload success, ", e);
    }
    const onProgress = (e, t) => {
        console.log("Upload progress, ", e, t);
    }
    return (
        <div className="ExplorerPanel__container">
            <PanelHeading text={"Explorer"} />
            <div className="ExplorerPanel__upload_form">
                {/* <Input type="file" name="audio" className="ExplorerPanel__upload_form_input" />
                <Button color="primary">Upload</Button> */}
                <FileUploader
                    accept="audio/*"
                    storageRef={firebase.storage().ref('audio')}
                    onUploadStart={onUploadStart}
                    onUploadError={onUploadError}
                    onUploadSuccess={onUploadSuccess}
                    onProgress={onProgress}
                />
            </div>
        </div>
    )
}

export default ExplorerPanel;