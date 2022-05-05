import Button from "../../atoms/Button";
import Input from "../../atoms/Input";
import "./styles.css";

const Card = (props) => {
  return (
    <div className={"card-container"}>
      <Button
        label={"Bold"}
        onClick={props.onClick1}
        className={"card-button"}
      />
      <Button
        label={"Italic"}
        onClick={props.onClick2}
        className={"card-button"}
      />
      <Button
        label={"Underline"}
        onClick={props.onClick3}
        className={"card-button"}
      />
      <Input
        placeholder={"font-size"}
        type="number"
        maxLength={2}
        onInput={props.onInput1}
        text={props.inputText1}
        className={"card-input-size"}
      />
      <Input
        placeholder={"color"}
        type="color"
        maxLength={15}
        onInput={props.onInput2}
        text={props.inputText2}
        className={"card-input-color"}
      />
    </div>
  );
};
export default Card;
