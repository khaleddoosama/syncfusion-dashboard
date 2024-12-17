import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective } from '@syncfusion/ej2-react-kanban';

import { kanbanData, kanbanGrid } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Kanban = () => {
  const { currentMode } = useStateContext()

  return (
    <div className={`m-2 md-m-10 mt-24 p-2 ps-3 md-p-10 ${currentMode}-bg rounded-3`}>
      <Header category="App" title="Kanban" />
      <KanbanComponent
        id='Kanban'
        keyField="Status"
        dataSource={kanbanData}
        cardSettings={{ contentField: 'Summary', headerField: 'Id' }}
      >
        <ColumnsDirective>
          {kanbanGrid.map((item, index) => <ColumnDirective key={ index }  {...item} />)}
        </ColumnsDirective>
      </KanbanComponent>
    </div>
  )
}

export default Kanban