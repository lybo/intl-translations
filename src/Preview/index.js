import React from 'react'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import { makeStyles } from '@material-ui/core/styles'
// import TableContainer from '@material-ui/core/TableContainer';

const useStyles = makeStyles(theme => ({
  rowDone: {
    background: 'rgba(0, 220, 0, 0.1)',
  },
  rowUndone: {
    background: 'rgba(220, 0, 0, 0.1)',
  },
  rowHeader: {
    background: 'rgba(200, 200, 200, 0.2)',
  },
}))

export default function Preview(props) {
  const { data, setSelected } = props
  const classes = useStyles()
  const keys = Object.keys(data[Object.keys(data)[0]])
  const langs = Object.keys(data)
  return (
    <Table size="small" aria-label="a dense table">
      <TableHead>
        <TableRow className={classes.rowHeader}>
          <TableCell>Keys</TableCell>
          {langs.map(lang => (
            <TableCell>{lang}</TableCell>
          ))}
        </TableRow>
      </TableHead>
      <TableBody>
        {keys.map(key => {
          return (
            <TableRow key={`preview-lang-data-${key}`}>
              <TableCell
                align="left"
                style={{ verticalAlign: 'top' }}
                onClick={() => {
                  setSelected(key)
                }}
              >
                <b>{key}</b>
              </TableCell>
              {langs.map(lang => (
                <TableCell align="left">{data[lang][key]}</TableCell>
              ))}
            </TableRow>
          )
        })}
      </TableBody>
    </Table>
  )
}
