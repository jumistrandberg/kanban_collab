const DropIndicator = ({ beforeTaskId, columnId }) => {
  return (
    <div
      data-before={beforeTaskId || "-1"}
      data-column={columnId}
      className="drop"
    />
  );
};

export default DropIndicator;
