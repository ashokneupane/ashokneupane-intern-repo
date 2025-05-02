export default function Button(props) {
    return (
        <button
            className="bg-blue-400 hover:bg-blue-600 text-white font-bold rounded active:bg-blue-700"
            onClick={props.onClick}
        >
            {props.children}
        </button>
    );
}