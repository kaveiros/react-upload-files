import React, { useState } from 'react'
import { Button, Uploader } from 'rsuite'
import axios from 'axios'

const UploadFiles = () => {

    const initialState = []
    const [selectedFiles, setSelectedFiles] = useState([])


    const handleChange = (e) => {

        console.log(initialState)
        let newState = [...initialState]
        console.log(newState)

        let newFiles = e.target.files

        setSelectedFiles([...selectedFiles, ...newFiles])

    }

    const handleUpload = (e) => {
        console.log(e)
        const data = new FormData()
             for (let f = 0 ; f < selectedFiles.length; f++) {
                data.append('file', selectedFiles[f])
             }
            axios.post("http://localhost:4000/upload", data)//, {headers:{'Content-Type': 'multipart/form-data'}})
                .then(res => { // then print response status
                    console.log(res)
                })
            console.log(e)
            setSelectedFiles([])

            

    }

    return (
        <div className="rs-uploader rs-uploader-text">
            <input className="rs-uploader-trigger-btn" type="file" multiple={true} name="file" onChange={handleChange}/>
            <Button onClick={handleUpload} >Upload</Button>
        </div>
    )
}

export default UploadFiles