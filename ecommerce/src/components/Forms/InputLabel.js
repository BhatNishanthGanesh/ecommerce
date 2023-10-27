const InputLabel = ({ input, children }) => {
    return (
        <label className="d-block" for={input}>
            {children}
        </label>
    );
};
export default InputLabel;
