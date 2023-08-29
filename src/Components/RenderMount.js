import "../CSS/renderMount.css";
import Records from "../data/mountains.json";

const RenderMount = ({ mtnDisplay, mountainArray }) => {
  console.log("mountainArray is " + mountainArray);
  console.log("mtnDisplay is " + mtnDisplay);
  let mtnNum = mountainArray.indexOf(mtnDisplay);
  console.log("mountain number is " + mtnNum);
  console.log("what is this " + Records.mountains[mtnNum].name);

  return (
    <div></div>
    // <div className="mountain-data">
    //   <p>{Records.mountains[mtnNum].name}</p>
    //   <p>{Records.mountains[mtnNum].elevation}</p>
    //   <p>{Records.mountains[mtnNum].effort}</p>
    //   <p>{Records.mountains[mtnNum].desc}</p>
    // </div>
  );
};

export default RenderMount;
