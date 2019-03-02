import React from 'react';
import './ImageLinkForm.css';

const ImageLinkForm = ({ onInputChange, onButtonSubmit }) => {
  return (
    <div>
      <p className="f3">
        {'請在以下欄位輸入圖片網址，偵測出圖片人臉位置'}
      </p>
      <div className="center">
        <div className="form center pa4 br3 shadow-5">
          <input className="f4 pa2 w-70 center" type="text" onChange={onInputChange}/>
          <button className="w-30 grow f4 link ph3 pv2 dib white bg-orange" onClick={onButtonSubmit}>偵測</button>
        </div>
      </div>
    </div>
  );
}

export default ImageLinkForm;