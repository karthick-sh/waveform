import React, { useState, useEffect } from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';

import firebase from 'firebase/app';

import FileUploader from 'components/FileUploader/FileUploader';
import PanelHeading from 'components/PanelHeading/PanelHeading';

import './ExplorerPanel.scss';

const ExplorerPanel = () => {
    const [uploadNotification, setUploadNotification] = useState("");
    const [showNotification, setShowNotification] = useState(false);

    const onUploadStart = (filename) => {
        setUploadNotification("Uploading " + filename);
        setShowNotification(true);
    }
    const onUploadError = (filename) => {
        setUploadNotification("Failed to upload " + filename);
    }
    const onUploadSuccess = (filename, downloadLink) => {
        setUploadNotification("Uploaded " + filename + " successfully!");
        setTimeout(() => {
            setShowNotification(false);
        }, 2000);
    }

    useEffect(() => {
        firebase.storage().ref().child('audio').listAll().then((res) => {
            res.items.forEach((itemRef) => {
                console.log(itemRef, itemRef.name);
            });
        })
    }, [])

    return (
        <div className="ExplorerPanel__container">
            <PanelHeading text={"Explorer"} />
            <div className="ExplorerPanel__upload_form">
                <FileUploader
                    accept="audio/*"
                    storageRef={firebase.storage().ref('audio')}
                    onUploadStart={onUploadStart}
                    onUploadError={onUploadError}
                    onUploadSuccess={onUploadSuccess}
                />
                <span className={"ExplorerPanel__notification " + (showNotification ? "ExplorerPanel__notification_show" : "")}>{uploadNotification}</span>
            </div>
        </div>
    )
}

export default ExplorerPanel;