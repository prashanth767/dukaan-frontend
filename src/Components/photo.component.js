import React, { useState, useEffect } from 'react';
import axios from 'axios';
import binaryToBase64 from '../utils/binaryToBase64.js';
import {getStorage,ref, getDownloadURL } from "firebase/storage";
import storage from  "./firebase";


const Photo = (props) => {
  const [photo, setPhoto] = useState(null);
  const [photoUrl, setPhotoUrl] = useState(null);

  useEffect(() => {
      getDownloadURL(ref(storage, `${props.logoUrl}`))
        .then((url) => {
            // This can be downloaded directly:
            const xhr = new XMLHttpRequest();
            xhr.responseType = 'blob';
            xhr.onload = (event) => {
              const blob = xhr.response;
            };
            xhr.open('GET', url);
            xhr.send();

            console.log(url);
            setPhotoUrl(url);
         })
         .catch((error) => {
           console.error(error);
         });

  }, [props.id]);

  return (
    <img src={photoUrl} alt="Photo" style={{ width: '100%', height: '100%' }}/>
  );
}

export default Photo;

//    axios.get("http://localhost:8080/photos/64286c727787bf1078430ec5",{ responseType: "blob" })
//      .then(response => {
//        //const blob = new Blob([response.data], { type: "image/jpeg" });
//        //const url = URL.createObjectURL(blob);
//        //setPhoto(url);
//        const photoData = response.data;
//
//        // Convert Binary data to Base64-encoded string
//        //  const base64String = btoa(
//        //    new Uint8Array(photoData.data).reduce(
//        //      (data, byte) => data + String.fromCharCode(byte),
//        //      ""
//        //    )
//        //  );
//
////        const base64String = binaryToBase64(photoData);
////        console.log(base64String);
////        setPhoto(base64String);
//         const reader = new FileReader();
//         reader.readAsDataURL(photoData);
//         reader.onloadend = () => {
//           setPhoto(reader.result);
//         };
//
//      })
//      .catch(error => {
//        console.error(error);
//      });