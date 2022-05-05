import { useState } from "react";
import "./App.css";
import Text from "./components/atoms/Text";
import Card from "./components/molecules/Card";

const App = () => {
  let text1 = "He's not the sharpest knife in the drawer.";
  let text2 = "The big building was blazing with lights.";
  let text3 = "Now you must answer some big questions.";
  let text4 = "Get Your Act Together!";

  const [isBold1, setIsBold1] = useState(false);
  const [isItalic1, setIsItalic1] = useState(false);
  const [isUnderline1, setIsUnderline1] = useState(false);
  const [fontSize1, setFontSize1] = useState(28);
  const [fontColor1, setFontfontColor1] = useState("#000000");

  const [isBold2, setIsBold2] = useState(false);
  const [isItalic2, setIsItalic2] = useState(false);
  const [isUnderline2, setIsUnderline2] = useState(false);
  const [fontSize2, setFontSize2] = useState(28);
  const [fontColor2, setFontColor2] = useState("#000000");

  const [isBold3, setIsBold3] = useState(false);
  const [isItalic3, setIsItalic3] = useState(false);
  const [isUnderline3, setIsUnderline3] = useState(false);
  const [fontSize3, setFontSize3] = useState(28);
  const [fontColor3, setFontColor3] = useState("#000000");

  const [isBold4, setIsBold4] = useState(false);
  const [isItalic4, setIsItalic4] = useState(false);
  const [isUnderline4, setIsUnderline4] = useState(false);
  const [fontSize4, setFontSize4] = useState(28);
  const [fontColor4, setFontColor4] = useState("#000000");

  return (
    <div className={"app"}>
      <div className={"app-container"}>
        <Card
          onClick1={() => {
            isBold1 ? setIsBold1(false) : setIsBold1(true);
          }}
          onClick2={() => {
            isItalic1 ? setIsItalic1(false) : setIsItalic1(true);
          }}
          onClick3={() => {
            isUnderline1 ? setIsUnderline1(false) : setIsUnderline1(true);
          }}
          onInput1={(event) => {
            setFontSize1(event.target.value);
          }}
          inputText1={fontSize1}
          onInput2={(event) => {
            setFontfontColor1(event.target.value);
          }}
          inputText2={fontColor1}
        />
        <Text
          text={text1}
          style={{
            fontWeight: isBold1 ? "bold" : "normal",
            fontStyle: isItalic1 ? "italic" : "normal",
            textDecorationLine: isUnderline1 ? "underline" : "none",
            fontSize: `${fontSize1}px`,
            color: fontColor1,
          }}
          className={"app-text"}
        />
        <Card
          onClick1={() => {
            isBold2 ? setIsBold2(false) : setIsBold2(true);
          }}
          onClick2={() => {
            isItalic2 ? setIsItalic2(false) : setIsItalic2(true);
          }}
          onClick3={() => {
            isUnderline2 ? setIsUnderline2(false) : setIsUnderline2(true);
          }}
          onInput1={(event) => {
            setFontSize2(event.target.value);
          }}
          inputText1={fontSize2}
          onInput2={(event) => {
            setFontColor2(event.target.value);
          }}
          inputText2={fontColor2}
        />
        <Text
          text={text2}
          style={{
            fontWeight: isBold2 ? "bold" : "normal",
            fontStyle: isItalic2 ? "italic" : "normal",
            textDecorationLine: isUnderline2 ? "underline" : "none",
            fontSize: `${fontSize2}px`,
            color: fontColor2,
          }}
          className={"app-text"}
        />
        <Card
          onClick1={() => {
            isBold3 ? setIsBold3(false) : setIsBold3(true);
          }}
          onClick2={() => {
            isItalic3 ? setIsItalic3(false) : setIsItalic3(true);
          }}
          onClick3={() => {
            isUnderline3 ? setIsUnderline3(false) : setIsUnderline3(true);
          }}
          onInput1={(event) => {
            setFontSize3(event.target.value);
          }}
          inputText1={fontSize3}
          onInput2={(event) => {
            setFontColor3(event.target.value);
          }}
          inputText2={fontColor3}
        />
        <Text
          text={text3}
          style={{
            fontWeight: isBold3 ? "bold" : "normal",
            fontStyle: isItalic3 ? "italic" : "normal",
            textDecorationLine: isUnderline3 ? "underline" : "none",
            fontSize: `${fontSize3}px`,
            color: fontColor3,
          }}
          className={"app-text"}
        />
        <Card
          onClick1={() => {
            isBold4 ? setIsBold4(false) : setIsBold4(true);
          }}
          onClick2={() => {
            isItalic4 ? setIsItalic4(false) : setIsItalic4(true);
          }}
          onClick3={() => {
            isUnderline4 ? setIsUnderline4(false) : setIsUnderline4(true);
          }}
          onInput1={(event) => {
            setFontSize4(event.target.value);
          }}
          inputText1={fontSize4}
          onInput2={(event) => {
            setFontColor4(event.target.value);
          }}
          inputText2={fontColor4}
        />
        <Text
          text={text4}
          style={{
            fontWeight: isBold4 ? "bold" : "normal",
            fontStyle: isItalic4 ? "italic" : "normal",
            textDecorationLine: isUnderline4 ? "underline" : "none",
            fontSize: `${fontSize4}px`,
            color: fontColor4,
          }}
          className={"app-text"}
        />
      </div>
    </div>
  );
};

export default App;
