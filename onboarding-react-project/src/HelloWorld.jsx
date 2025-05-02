/* eslint-disable react/react-in-jsx-scope */
import PropTypes from 'prop-types';

function HelloWorld(props) {
  return (
    <div>
      <h1 className="text-3xl font-bold underline">Hello, {props.name}</h1>
    </div>
  );
}

HelloWorld.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HelloWorld;
