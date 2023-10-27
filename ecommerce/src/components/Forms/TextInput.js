const TextInput = ({ type, id }) => {
    return (
        <input
            className="p-2 w-100 mb-4 d-block rounded border-0"
            type={type}
            id={id}
        ></input>
    );
};
export default TextInput;
