import React, { useRef, useState } from 'react';
import { Button, Label } from 'reactstrap';
import firebase from 'firebase/app';

import ProgressRing from 'components/ProgressRing/ProgressRing';

import './FileUploader.scss';

const FileUploader = ({ storageRef, onUploadSuccess }) => {
    const [filename, setFilename] = useState("Choose File...");
    const [progress, setProgress] = useState(0);
    const [uploadError, setUploadError] = useState(false);
    const [uploadSuccess, setUploadSuccess] = useState(false);
    const inputRef = useRef(null);

    const onUpload = (e) => {
        e.preventDefault();
        setFilename(inputRef.current.files[0].name);
        startUpload(inputRef.current.files[0]);
        return false;
    }

    const startUpload = (file) => {
        setUploadError(false);
        setUploadSuccess(false);
        let uploadTask = storageRef.child(file.name).put(file);
        // Listen for state changes, errors, and completion of the upload.
        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED, (snapshot) => {
            // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
            const newProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100
            setProgress(newProgress);
            console.log('Upload is ' + newProgress + '% done');
        }, (error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            setUploadError(true);
        }, () => {
            uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
                setUploadSuccess(true);
                onUploadSuccess(downloadURL);
            });
        });
    }
    return (
        <div className="FileUploader__container">
            <div className="FileUploader__input">
                <input type="file" accept="audio/*" ref={inputRef} onChange={onUpload} hidden/>
                <Button color="primary" onClick={() => inputRef.current.click()}>Browse</Button>
                <Label>{filename}</Label>
            </div>
            <div className="FileUploader__progress">
                <ProgressRing radius="24" stroke="5" progress={progress} uploadError={uploadError} uploadSuccess={uploadSuccess}/>
            </div>
        </div>
    )
}

export default FileUploader;