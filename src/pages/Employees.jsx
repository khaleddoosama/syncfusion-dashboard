import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Search, Inject, Toolbar } from '@syncfusion/ej2-react-grids';

import { employeesData, employeesGrid } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';



const Employees = () => {
  //const editing = { allowDeleting: true, allowEditing: true };
  const { currentMode } = useStateContext()

  
  return (
    <div className={`m-2 md-m-10 mt-24 p-2 ps-3 md-p-10 ${currentMode}-bg rounded-3`}>
      <Header category="Page" title="Employees" />
      <GridComponent
        dataSource={employeesData}
        allowPaging
        allowSorting
        toolbar={['Search']}
        width="auto"
      // allowExcelExport
      // allowPdfExport
      // contextMenuItems={contextMenuItems}
      // editSettings={editing}
      >
        <ColumnsDirective style={{maxWidth:"50%"}}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {employeesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Search, Toolbar]} />
      </GridComponent>
    </div>
  );
};
export default Employees;
