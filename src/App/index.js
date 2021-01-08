import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Button from '@material-ui/core/Button';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import Paper from '@material-ui/core/Paper';
import TranslateIcon from '@material-ui/icons/Translate';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Highlight from 'react-highlight.js';
import Tree from '../Tree/';
import Download from '../Download/';
import getTranslationsToTree from './getTranslationsToTree';
import _ from 'lodash';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: {
    ...theme.mixins.toolbar,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function App(props) {
  const {window} = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const [mainLang, setMainLang] = React.useState('en');
  const [selected, setSelected] = React.useState();
  const [data, setData] = React.useState({});

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar}>{Object.keys(data).toString()}</div>
      <Divider />

      {data && data[mainLang] ? (
        <Tree
          values={data}
          data={getTranslationsToTree(data[mainLang])}
          onSelect={nodeIds => {
            setSelected(nodeIds);
          }}
        />
      ) : null}
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            <TranslateIcon /> intl-translations
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}>
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open>
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />

        <Paper style={{padding: 20, marginBottom: 20}}>
          <input
            name="files"
            type="file"
            multiple
            onChange={async e => {
              const input = e.target;

              const results = await Promise.all(
                [...input.files].map(
                  file =>
                    new Promise((resolve, reject) => {
                      const reader = new FileReader();
                      reader.onloadend = () => {
                        try {
                          console.log(file);
                          const lang = file.name.replace('.json', '');
                          resolve({lang, data: JSON.parse(reader.result)});
                        } catch (err) {
                          // Return a blank value; ignore non-JSON (or do whatever else)
                          console.log('Please use .json!');
                          resolve();
                        }
                      };
                      reader.readAsText(file);
                    }),
                ),
              );

              const resultsObj = results.reduce(
                (acc, item) => ({
                  ...acc,
                  [item.lang]: item.data,
                }),
                {},
              );
              // Do Stuff
              console.log(results, resultsObj);

              setMainLang(Object.keys(resultsObj)[0]);
              setData(resultsObj);
            }}
          />

          {data && data[mainLang] ? (
            <Download>
              {({download}) => (
                <Button
                  variant="contained"
                  color="primary"
                  size="small"
                  startIcon={<CloudDownloadIcon />}
                  onClick={() => {
                    download(data);
                  }}>
                  Download
                </Button>
              )}
            </Download>
          ) : null}
        </Paper>
        {selected ? (
          <Paper style={{padding: 20, marginBottom: 20}}>
            <div>
              <div style={{textAlign: 'center'}}>
                <b>{selected}</b>
              </div>
              {Object.keys(data).map(lang => (
                <div key={`lang-field-${lang}`}>
                  <TextField
                    id="outlined-basic"
                    label={lang}
                    variant="outlined"
                    size="small"
                    helperText={`translate in ${lang}`}
                    margin="normal"
                    fullWidth
                    multiline
                    value={_.get(data[lang], selected)}
                    onChange={(e, value) => {
                      const newData = JSON.parse(JSON.stringify(data));
                      newData[lang][selected] = e.target.value;
                      setData(newData);
                    }}
                  />
                </div>
              ))}
            </div>
          </Paper>
        ) : null}
        <Paper style={{padding: 20, marginBottom: 20}}>
          <Typography paragraph>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
            dolor purus non enim praesent elementum facilisis leo vel. Risus at
          </Typography>
          <Typography h3>
              english (en.json)
          </Typography>
          <Highlight language="js">
            {`
{
  "ComponentName.error": "Error",
  "ComponentName.Success": "Success"
}
            `}
          </Highlight>
          <Typography h3>
              greek (el.json)
          </Typography>
          <Highlight language="js">
            {`
{
  "ComponentName.error": "",
  "ComponentName.Success": ""
}
            `}
          </Highlight>
        </Paper>
      </main>
    </div>
  );
}

App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default App;
