function HelloWorld(props) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello, {props.name}</h1>
    </div>
  );
}

export default HelloWorld;