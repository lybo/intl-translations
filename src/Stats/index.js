import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import {makeStyles} from '@material-ui/core/styles';
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
}));

export default function Stats(props) {
  const {data} = props;
  const classes = useStyles();
  const langs = Object.keys(data).map(lang => {
    const keys = Object.keys(data[lang]);
    const numberOfKeys = keys.length;
    const numberOfTranslations = keys.filter(key => data[lang][key]).length;
    return {
      id: lang,
      name: lang,
      numberOfKeys,
      numberOfTranslations,
    };
  });
  return (
    <Table size="small" aria-label="a dense table">
      <TableHead>
        <TableRow className={classes.rowHeader}>
          <TableCell>Langs</TableCell>
          <TableCell align="right">Number Of Keys</TableCell>
          <TableCell align="right">Number Of Translations</TableCell>
          <TableCell align="right">Translated</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
        {langs.map(lang => {
          const isDone = lang.numberOfTranslations / lang.numberOfKeys === 1;
          return (
            <TableRow key={`stats-lang-data-${lang.id}`} className={isDone ? classes.rowDone : classes.rowUndone }>
              <TableCell component="th" scope="row">
                <b>{lang.name}</b>
              </TableCell>
              <TableCell align="right">{lang.numberOfKeys}</TableCell>
              <TableCell align="right">{lang.numberOfTranslations}</TableCell>
              <TableCell align="right">
                {Math.round(
                  (lang.numberOfTranslations / lang.numberOfKeys) * 100,
                )}{' '}
                %
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
}
