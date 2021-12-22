import { Draggable } from 'react-beautiful-dnd';

function Row({ task, index }) {
  return (
    <Draggable draggableId={index.toString()} index={index}>
      {(provided) => (
        <div className="w-full mb-2 bg-white">
          <div
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            className="p-3 border"
          >
            <p className="flex-grow p-3 bg-white border">{task}</p>
            {/* <button className="p-3 bg-slate-200">{task} sdfgdsf hsdfhsfdh s</button> */}
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Row;
