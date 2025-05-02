/* eslint-disable react/react-in-jsx-scope */
export default function Button(props) {
  return (
    <button
      className="bg-blue-400 hover:bg-blue-600 text-white font-bold rounded hover:bg-blue-600 active:bg-blue-700"
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
}
