import React, { useEffect, useRef } from "react";
import useBaseStore from "store";

export const TextInputBoxDraw = React.memo(() => {
  const { inputBox, setInputBox, inputBoxWidth, setInputBoxWidth } =
    useBaseStore();
  const inputRef = useRef();
  const widthRef = useRef();

  useEffect(() => {
    if (inputRef.current) inputRef.current.focus();
    if (inputRef.current && widthRef.current) {
      const newWidth = Math.max(
        widthRef.current.getBoundingClientRect().width + 10,
        20
      );
      setInputBoxWidth(newWidth);
    }
  }, [inputBox, setInputBoxWidth, widthRef]);

  const handleInputChange = (e) => {
    setInputBox({ x: inputBox.x, y: inputBox.y, value: e.target.value });
  };

  if (inputBox?.x)
    return (
      <div
        style={{
          position: "absolute",
          margin: `${inputBox.y - 2}px 0 0 ${inputBox.x - 4}px`,
          display: "flex",
        }}
      >
        <input
          ref={inputRef}
          style={{ width: `${inputBoxWidth}px` }}
          onChange={handleInputChange}
        ></input>
        <span
          ref={widthRef}
          style={{ fontSize: "15px", whiteSpace: "pre", visibility: "hidden" }}
        >
          {inputBox.value}
        </span>
      </div>
    );
});

export const TextDraw = React.memo(({ texts }) => {
  return (
    <>
      {texts.map((text, index) => (
        <div
          style={{
            position: "absolute",
            margin: `${text.y}px 0 0 ${text.x}px`,
            display: "flex",
            fontSize: "14px",
          }}
        >
          {text.text}
        </div>
      ))}
    </>
  );
});
