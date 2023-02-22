import { makeStyles } from '@mui/styles'

const useStyles = makeStyles((theme) => ({
  tableContainer: {
    width: '100%',
    overflowY: 'scroll',
  },
  paginationTable: {
    minWidth: 500,
    '& .MuiTableBody-root .MuiTableRow-root': {
      height: 92,
    },
  },
  dataRow: {
    '&:hover': {
      cursor: 'pointer',
      backgroundColor: '#F7F8FF',
    },
  },
  headerRow: {
    '& .MuiTableCell-root': {
      color: theme.typography.fontHeader.colorGray_2,
      lineHeight: '16px',
      fontSize: theme.typography.body2.fontSize,
      fontWeight: theme.typography.fontWeightRegular,
      padding: '12px 16px',
    },
    '& :first-child': {
      paddingLeft: 32,
    },
  },
  tableFooterContainer: {
    height: 72,
  },
  tableFooter: {
    '& .MuiToolbar-root': {
      display: 'flex',
      gap: 10,
      '& .MuiInputBase-root, & .MuiTablePagination-actions': {
        margin: 0,
      },
      '& .MuiTablePagination-displayedRows': {
        display: 'none',
      },
    },
  },
}))

export default useStyles
