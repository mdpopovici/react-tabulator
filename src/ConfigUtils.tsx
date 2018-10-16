// .prettierignore    (to keep relevant props together)
const NOOPS = () => {};

// TODO: add proper types for props & callbacks
export interface IProps {
  className?: string;
  columns: any[];
  data: any[];
  height?: number;
  layout?: string, /// layout type "fitColumns" | "fitData" - default: "fitData"
	layoutColumnsOnNewData?: boolean, // update column widths on setData - default: false
	columnMinWidth?: number, // minimum global width for a column - default: 40
	columnVertAlign?: string, // vertical alignment of column headers - default: 'top'
	resizableColumns?: boolean, // resizable columns - default: true
	resizableRows?: boolean, // resizable rows - default: false
	autoResize?: boolean, // auto resize table - default: true
	tooltips?: boolean, // Tool tip value - default: false
	tooltipsHeader?: boolean, // Tool tip for headers - default: false
	tooltipGenerationMode?: string, // when to generate tooltips - default: 'load'
	initialSort?: boolean, // initial sorting criteria - default: false
	initialFilter?: boolean, // initial filtering criteria - default: false
	footerElement?: boolean, // hold footer element - default: false
	index?: string, // filed for row index - default: 'id'
	keybindings?:[], // array for keybindings - default: []
	clipboard?: boolean, // enable clipboard - default: false
	clipboardCopyStyled?: boolean, // formatted table data - default: true
	clipboardCopySelector?: string, // method of chosing which data is coppied to the clipboard - default: 'active'
	clipboardCopyFormatter?: string, // convert data to a clipboard string - default: 'table'
	clipboardCopyHeader?: boolean, // include table headers in copt - default: true
	clipboardPasteParser?: string, // convert pasted clipboard data to rows - default: 'table'
	clipboardPasteAction?: string, // how to insert pasted data into the table - default: 'insert'
  rowClick?: (e: any, row: any) => void;
  tableBuilding?: () => void;
  tableBuilt?: () => void;
  rowDblClick?: any;
  rowContext?: any;
  rowTap?: any;
  rowDblTap?: any;
  rowTapHold?: any;
  rowAdded?: any;
  rowDeleted?: any;
  rowMoved?: any;
  rowUpdated?: any;
  rowSelectionChanged?: any;
  rowSelected?: any;
  rowDeselected?: any;
  rowResized?: any;
  cellClick?: any;
  cellDblClick?: any;
  cellContext?: any;
  cellTap?: any;
  cellDblTap?: any;
  cellTapHold?: any;
  cellEditing?: any;
  cellEdited?: any;
  cellEditCancelled?: any;
  columnMoved?: any;
  columnResized?: any;
  columnTitleChanged?: any;
  columnVisibilityChanged?: any;
  headerClick?: any;
  headerDblClick?: any;
  headerContext?: any;
  headerTap?: any;
  headerDblTap?: any;
  headerTapHold?: any;
  htmlImporting?: any;
  htmlImported?: any;
  dataLoading?: any;
  dataLoaded?: any;
  dataEdited?: any;
  ajaxRequesting?: any;
  ajaxResponse?: any;
  ajaxError?: any;
  dataFiltering?: any;
  dataFiltered?: any;
  dataSorting?: any;
  dataSorted?: any;
  renderStarted?: any;
  renderComplete?: any;
  pageLoaded?: any;
  localized?: any;
  dataGrouping?: any;
  dataGrouped?: any;
  groupVisibilityChanged?: any;
  groupClick?: any;
  groupDblClick?: any;
  groupContext?: any;
  groupTap?: any;
  groupDblTap?: any;
  groupTapHold?: any;
  movableRowsSendingStart?: any;
  movableRowsSent?: any;
  movableRowsSentFailed?: any;
  movableRowsSendingStop?: any;
  movableRowsReceivingStart?: any;
  movableRowsReceived?: any;
  movableRowsReceivedFailed?: any;
  movableRowsReceivingStop?: any;
  validationFailed?: any;
  clipboardCopied?: any;
  clipboardPasted?: any;
  clipboardPasteError?: any;
  downloadDataFormatter?: any;
  downloadReady?: any;
  downloadComplete?: any;
  options?: any; // Tabulator options object
}

// get callbacks from props (default: NOOP) & set them to Tabulator options
export const propsToOptions = (props: any) => {
  const output: any = {}

  const defaultOptions = ['height', 'layout', 'layoutColumnsOnNewData', 'columnMinWidth', 'columnVertAlign',
  'resizableColumns', 'resizableRows', 'autoResize', 'tooltips', 'tooltipsHeader', 'tooltipGenerationMode',
  'initialSort', 'initialFilter', 'footerElement', 'index', 'keybindings', 'clipboard', 'clipboardCopyStyled',
  'clipboardCopySelector', 'clipboardCopyFormatter', 'clipboardCopyHeader', 'clipboardPasteParser', 'clipboardPasteAction']

  for (const opt of defaultOptions) {
    if (typeof props[opt] !== 'undefined') {
      output[opt] = props[opt]
    }
  }

  const names = ['tableBuilt','rowClick','rowDblClick','rowContext','rowTap','rowDblTap','rowTapHold',
    'rowAdded','rowDeleted','rowMoved','rowUpdated','rowSelectionChanged','rowSelected','rowDeselected','rowResized',
    'cellClick','cellDblClick','cellContext','cellTap','cellDblTap','cellTapHold','cellEditing','cellEdited','cellEditCancelled',
    'columnMoved','columnResized','columnTitleChanged','columnVisibilityChanged',
    'headerClick','headerDblClick','headerContext','headerTap','headerDblTap','headerTapHold',
    'htmlImporting','htmlImported','dataLoading','dataLoaded','dataEdited',
    'ajaxRequesting','ajaxResponse','ajaxError','dataFiltering','dataFiltered','dataSorting','dataSorted',
    'renderStarted','renderComplete','pageLoaded','localized','dataGrouping','dataGrouped',
    'groupVisibilityChanged','groupClick','groupDblClick','groupContext','groupTap','groupDblTap','groupTapHold',
    'movableRowsSendingStart','movableRowsSent','movableRowsSentFailed','movableRowsSendingStop','movableRowsReceivingStart','movableRowsReceived','movableRowsReceivedFailed','movableRowsReceivingStop',
    'validationFailed','clipboardCopied','clipboardPasted','clipboardPasteError',
    'downloadDataFormatter','downloadReady','downloadComplete'];
  
  for (const callbackName of names) {
    output[callbackName] = props[callbackName] || NOOPS
  }
  return output
}