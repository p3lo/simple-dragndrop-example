import { Draggable } from 'react-beautiful-dnd';

function Row({ task, index }) {
  return (
    <Draggable draggableId={index.toString()} index={index}>
      {(provided) => (
        <div className="w-full mb-2 bg-white">
          <div {...provided.draggableProps} ref={provided.innerRef} className="p-3 border">
            <div className="flex">
              <p className="flex-grow p-3 bg-white border">{task}</p>
              {/* <button className="p-3 bg-slate-200">{task} sdfgdsf hsdfhsfdh s</button> */}
              <p {...provided.dragHandleProps} className="p-2 border">
                DragMe
              </p>
            </div>
          </div>
        </div>
      )}
    </Draggable>
  );
}

export default Row;
