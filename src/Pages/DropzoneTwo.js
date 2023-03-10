import React, { useCallback, useEffect, useMemo, useState } from "react";
// import { useDropzone } from "react-dropzone";
import useDropzone from "../Hooks/useDropzone";

import {
  baseStyle,
  // DropzonStyle,
  selectImageStyle,
  imageStyle,
} from "../Styles/style";

function DropzoneComponent() {
  const [files, setFiles] = useState([]);
  const [
    getRootProps,
    getInputProps,
    style,
    handleUpload,
    imgLink,
    compresLink,
    uploadSize,
    compresSize,
  ] = useDropzone();

  // const hanleComp = () => {
  //   alert("Hey");
  // };
  // clean up
  // useEffect(
  //   () => () => {
  //     files.forEach((file) => {
  //       URL.revokeObjectURL(file.preview);
  //       console.log(files);
  //     });
  //   },
  //   [files]
  // );

  // useEffect(() => () => {});
  return (
    <div style={selectImageStyle}>
      <div {...getRootProps({ style })}>
        <input {...getInputProps()} />
        <div>Select Image or Drag and drop your image here.</div>
        <br />
        {imgLink && <img src={imgLink} alt="" style={imageStyle} />}
        <p>{imgLink}</p>
        <p>{uploadSize}</p>
        <br />
        <p>{uploadSize}</p>
      </div>

      {/* <button onClick={handleUpload}>UPLOAD</button> */}
      {/* <img src={compresLink} alt="" /> */}
    </div>
  );
}

export default DropzoneComponent;
