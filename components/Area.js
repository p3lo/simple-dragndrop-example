import Row from './Row';
import { Droppable } from 'react-beautiful-dnd';
import { DragDropContext } from 'react-beautiful-dnd';
import initialData from '../DUMMY_DATA';
import { useEffect, useState } from 'react';
import produce from 'immer';

function Area() {
  const [data, setData] = useState(initialData);
  const [winReady, setwinReady] = useState(false);

  useEffect(() => {
    setwinReady(true);
  }, []);

  const onDragEnd = (result) => {
    const { destination, source, draggableId } = result;
    if (!destination) {
      return;
    }
    if (destination.droppableId === source.droppableId && destination.index === source.index) {
      return;
    }

    const moveData = produce(data, (draft) => {
      const getItem = data.sections[source.index];

      draft.sections.splice(source.index, 1);
      draft.sections.splice(destination.index, 0, getItem);
    });
    setData(moveData);
  };
  return (
    <div className="">
      <DragDropContext onDragEnd={onDragEnd}>
        {winReady ? (
          <div>
            <Droppable droppableId={'1'}>
              {(provided) => (
                <div ref={provided.innerRef} {...provided.droppableProps} className="p-[8px]">
                  {data.sections.map((section, key) => (
                    <Row key={key} task={section.title} index={key} />
                  ))}
                  {provided.placeholder}
                </div>
              )}
            </Droppable>
          </div>
        ) : null}
      </DragDropContext>
    </div>
  );
}

export default Area;
