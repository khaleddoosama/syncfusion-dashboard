import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Sort, Filter, Page, Edit, Inject, Toolbar, Selection } from '@syncfusion/ej2-react-grids';

import { customersData, customersGrid } from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';


const Customers = () => {
  const { currentMode } = useStateContext();

  return (
    <div className={`m-2 md-m-10 mt-24 p-2 ps-3 md-p-10 ${currentMode}-bg rounded-3`}>
      <Header category="Page" title="Customers" />
      <GridComponent
        dataSource={customersData}
        allowPaging
        allowSorting
        toolbar={['Delete']}
        editSettings={{ allowDeleting: true, allowEditing: true }}
        width="auto"
      // allowExcelExport
      // allowPdfExport
      // contextMenuItems={contextMenuItems}
      // editSettings={editing}
      >
        <ColumnsDirective style={{ maxWidth: "50%" }}>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {customersGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Page, Toolbar, Sort, Filter, Edit, Selection]} />
      </GridComponent>
    </div>
  );
}

export default Customers