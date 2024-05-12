'use client';

import styles from './image-picker.module.css';
import {useRef, useState} from "react";

export default function ImagePicker({label, name}) {
    const [pickedImage, setPickedImage] = useState()

    const imageInput = useRef();

    function handlePick() {

        imageInput.current.click();

    }

    function handleImageChange(event) {
        const file = event.target.files[0];

        // if user did not pick a file
        if (!file) {
            setPickedImage(null);
            return;
        }

        //to display the image preview we need to convert into data url.
        // a value can be used as an input for an image element so that
        // can be used as a source for an image element.
        // we use the FileReader native JavaScript class;
        const fileReader = new FileReader();

        // we get hold the data url that's being generated
        // by assigning a value to the onload property of
        // this fileReader object. A function that is triggered, when
        // fileReader.readAsDataURL(file) is done
        fileReader.onload = () => {
            // we access it by fileReader.result
            setPickedImage(fileReader.result);
        };

        fileReader.readAsDataURL(file);

    }


    return (
        <div className={styles.picker}>
            <label htmlFor={name}>{label}</label>
            <div className={styles.controls}>

                <div className={styles.preview}>
                    {!pickedImage && <p>No image picked yet.</p>}
                    {pickedImage && <Image src={pickedImage} alt='The image selected by the user'/>}
                </div>
                <input
                    ref={imageInput}
                    type="file"
                    id={name}
                    className={styles.input}
                    accept='image/png, image/jpeg' name={name}
                    onChange={handleImageChange}
                    required
                />
            </div>

            <button className={styles.button} type='button' onClick={handlePick}>Choose Image</button>

        </div>

    );
}