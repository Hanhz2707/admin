import React from 'react';
import {GridComponent, ColumnsDirective, ColumnDirective, Page, Inject, Resize, Sort, ContextMenu, Filter, ExcelExport, PdfExport, Edit} from '@syncfusion/ej2-react-grids';
import {ordersData, contextMenuItems, ordersGrid} from '../data/dummy';
import {Header} from '../components';


const Orders = () => {
  return (
    <div>
      <Header category='Page' title='Orders' />
    </div>
  );
};

export default Orders;