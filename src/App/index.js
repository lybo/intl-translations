import React from 'react'
import PropTypes from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import CssBaseline from '@material-ui/core/CssBaseline'
import Divider from '@material-ui/core/Divider'
import Button from '@material-ui/core/Button'
import Drawer from '@material-ui/core/Drawer'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import TextField from '@material-ui/core/TextField'
import CloudDownloadIcon from '@material-ui/icons/CloudDownload'
import Paper from '@material-ui/core/Paper'
import TranslateIcon from '@material-ui/icons/Translate'
import VisibilityIcon from '@material-ui/icons/Visibility'
import VisibilityOffIcon from '@material-ui/icons/VisibilityOff'
import GitHubIcon from '@material-ui/icons/GitHub'
import Grid from '@material-ui/core/Grid'
import Link from '@material-ui/core/Link'
import useMediaQuery from '@material-ui/core/useMediaQuery'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Highlight from 'react-highlight.js'
import Tree from '../Tree/'
import Download from '../Download/'
import Stats from '../Stats/'
import Preview from '../Preview/'
import getTranslationsToTree from './getTranslationsToTree'
import _ from 'lodash'
import scrollToTop from '../libs/scrollToTop'
// import validate from '../libs/validate'

import en from './tran/en.json'
import el from './tran/el.json'
import es from './tran/es.json'

const drawerWidth = 240

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
  appBarWithDrawer: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  appBarWithoutDrawer: {
    [theme.breakpoints.up('sm')]: {
      width: `100%`,
      marginLeft: 0,
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
  title: {
    flexGrow: 1,
  },
}))

function App(props) {
  const { window } = props
  const classes = useStyles()
  const theme = useTheme()
  // const [isDemo, setIsDemo] = React.useState(false)
  const [drawerOpen, setDrawerOpen] = React.useState(false)

  const [mainLang, setMainLang] = React.useState('en')
  const [selected, setSelected] = React.useState()
  const [data, setData] = React.useState({})
  const [visiblePreview, setVisiblePreview] = React.useState(false)
  const matches = useMediaQuery(theme.breakpoints.up('sm'))

  React.useEffect(() => {
    if (matches && !drawerOpen && data && data[mainLang]) {
      setDrawerOpen(true)
    }
  }, [matches, drawerOpen, data, mainLang])

  const handleDrawerToggle = () => {
    setDrawerOpen(!drawerOpen)
  }

  const drawer = (
    <div>
      <div className={classes.toolbar}>{Object.keys(data).toString()}</div>
      <Divider />

      {data && data[mainLang] ? (
        <Tree
          values={data}
          data={getTranslationsToTree(data[mainLang])}
          onSelect={nodeIds => {
            setSelected(nodeIds)
            scrollToTop()
          }}
          selected={selected}
        />
      ) : null}
    </div>
  )

  const container = window !== undefined ? () => window().document.body : undefined

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={drawerOpen ? classes.appBarWithDrawer : classes.appBarWithoutDrawer}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap className={classes.title}>
            <TranslateIcon /> intl-translations
          </Typography>
          <IconButton
            color="inherit"
            aria-label="GitHub"
            href="https://github.com/lybo/intl-translations"
            target="_blank"
          >
            <GitHubIcon />
          </IconButton>
        </Toolbar>
      </AppBar>

      {drawerOpen ? (
        <nav className={classes.drawer} aria-label="mailbox folders">
          {matches ? (
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open={drawerOpen}
            >
              {drawer}
            </Drawer>
          ) : (
            <Drawer
              container={container}
              variant="temporary"
              anchor={theme.direction === 'rtl' ? 'right' : 'left'}
              open={drawerOpen}
              onClose={handleDrawerToggle}
              classes={{
                paper: classes.drawerPaper,
              }}
              ModalProps={{
                keepMounted: true, // Better open performance on mobile.
              }}
            >
              {drawer}
            </Drawer>
          )}
        </nav>
      ) : null}
      <main className={classes.content}>
        <div className={classes.toolbar} />

        {selected ? (
          <Paper style={{ padding: 20, marginBottom: 20 }}>
            <div>
              <div style={{ textAlign: 'center' }}>
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
                      const newData = JSON.parse(JSON.stringify(data))
                      newData[lang][selected] = e.target.value
                      setData(newData)
                    }}
                  />
                </div>
              ))}
            </div>
          </Paper>
        ) : null}

        <Paper style={{ padding: 20, marginBottom: 20 }}>
          {!data || !data[mainLang] ? (
            <Grid container spacing={10}>
              <Grid item xs={6}>
                <Typography variant="h6" component="h2" gutterBottom align="center">
                  Import languages
                </Typography>

                <Typography style={{ minHeight: 100 }} variant="body1" component="div" gutterBottom align="center">
                  Select the generated json files
                </Typography>
                <br />
                <Button fullWidth color="primary" variant="contained" component="label">
                  Upload JSON Files
                  <input
                    name="files"
                    type="file"
                    multiple
                    hidden
                    onChange={async e => {
                      const input = e.target

                      const results = await Promise.all(
                        [...input.files].map(
                          file =>
                            new Promise((resolve, reject) => {
                              const reader = new FileReader()
                              reader.onloadend = () => {
                                try {
                                  console.log(file)
                                  const lang = file.name.replace('.json', '')
                                  resolve({ lang, data: JSON.parse(reader.result) })
                                } catch (err) {
                                  // Return a blank value; ignore non-JSON (or do whatever else)
                                  console.log('Please use .json!')
                                  resolve()
                                }
                              }
                              reader.readAsText(file)
                            }),
                        ),
                      )

                      const resultsObj = results.reduce(
                        (acc, item) => ({
                          ...acc,
                          [item.lang]: item.data,
                        }),
                        {},
                      )
                      // Do Stuff
                      console.log(results, resultsObj)

                      setMainLang(Object.keys(resultsObj)[0])
                      setData(resultsObj)
                      setDrawerOpen(true)
                    }}
                  />
                </Button>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="h6" component="h2" gutterBottom align="center">
                  Demo
                </Typography>

                <Typography style={{ minHeight: 100 }} variant="body1" component="div" gutterBottom align="center">
                  You can try out with 3 languages 'en', 'el' and 'es'
                </Typography>
                <br />
                <Button
                  onClick={() => {
                    const demoLangs = { en, el, es }
                    setMainLang('en')
                    setData(demoLangs)
                    setDrawerOpen(true)
                    // setIsDemo(true)
                    scrollToTop()
                  }}
                  fullWidth
                  color="primary"
                  variant="contained"
                  component="label"
                >
                  Try the sample
                </Button>
              </Grid>
            </Grid>
          ) : (
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <Button
                color="secondary"
                variant="contained"
                size="small"
                onClick={() => {
                  setMainLang(null)
                  setData({})
                  setDrawerOpen(false)
                  setSelected(null)
                  // setIsDemo(false)
                  scrollToTop()
                }}
              >
                Cancel the translation
              </Button>
            </div>
          )}
          <br />
          <br />

          {data && data[mainLang] ? (
            <React.Fragment>
              <Stats data={data} />
              <br />
              <Grid container spacing={3}>
                <Grid item xs={6}>
                  <Download>
                    {({ download }) => (
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        startIcon={<CloudDownloadIcon />}
                        onClick={() => {
                          download(data)
                        }}
                      >
                        Download
                      </Button>
                    )}
                  </Download>
                </Grid>
                <Grid
                  item
                  xs={6}
                  style={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                  }}
                >
                  <Button
                    variant="contained"
                    color="primary"
                    size="small"
                    startIcon={!visiblePreview ? <VisibilityIcon /> : <VisibilityOffIcon />}
                    onClick={() => {
                      setVisiblePreview(!visiblePreview)
                    }}
                  >
                    {visiblePreview ? 'Hide' : 'Show'} Preview
                  </Button>
                </Grid>
              </Grid>
              <br />
              {visiblePreview ? <Preview data={data} setSelected={setSelected} /> : null}
            </React.Fragment>
          ) : null}
        </Paper>

        <Typography variant="h4" component="h1" align="center" gutterBottom>
          intl-translations
        </Typography>
        <Paper style={{ padding: 20, marginBottom: 20 }}>
          <Typography variant="h6" component="h2" gutterBottom align="center">
            Translation editor for apps
          </Typography>

          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Grid container justify="center" spacing={2}>
                <Grid item>
                  <Paper style={{ padding: 20 }}>
                    <Typography align="center" gutterBottom paragraph>
                      react-intl
                    </Typography>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      target="_blank"
                      href="https://formatjs.io/docs/react-intl"
                    >
                      Details
                    </Button>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper style={{ padding: 20 }}>
                    <Typography align="center" gutterBottom paragraph>
                      vue-intl
                    </Typography>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      target="_blank"
                      href="https://formatjs.io/docs/vue-intl"
                    >
                      Details
                    </Button>
                  </Paper>
                </Grid>
                <Grid item>
                  <Paper style={{ padding: 20 }}>
                    <Typography align="center" gutterBottom paragraph>
                      formatjs
                    </Typography>
                    <Button
                      size="small"
                      variant="contained"
                      color="primary"
                      target="_blank"
                      href="https://formatjs.io/docs/intl"
                    >
                      Details
                    </Button>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Grid>

          <br />
          <Typography variant="body1" component="div" gutterBottom align="center">
            This tool is meant to help developers who use{' '}
            <Link href="https://www.npmjs.com/package/babel-plugin-react-intl-auto" target="_blank">
              babel-plugin-react-intl-auto
            </Link>{' '}
            and{' '}
            <Link href="https://www.npmjs.com/package/extract-react-intl-messages" target="_blank">
              extract-react-intl-messages
            </Link>
          </Typography>
          <br />
        </Paper>

        <Paper style={{ padding: 20, marginBottom: 20 }}>
          <Typography variant="h6" component="h2" gutterBottom align="center">
            JSON format
          </Typography>
          <Typography h3>english (en.json)</Typography>
          <Highlight language="js">
            {`
{
  "ComponentName.error": "Error",
  "ComponentName.Success": "Success",
  "ComponentName.SubComponentName.error": "Error",
  "ComponentName.SubComponentName.Success": "Success"
}
            `}
          </Highlight>
          <Typography h3>greek (el.json)</Typography>
          <Highlight language="js">
            {`
{
  "ComponentName.error": "",
  "ComponentName.Success": "",
  "ComponentName.SubComponentName.error": "",
  "ComponentName.SubComponentName.Success": ""
}
            `}
          </Highlight>
        </Paper>
        <Paper style={{ padding: 20, marginBottom: 20 }}>
          <Typography variant="h6" component="h2" gutterBottom align="center">
            Implemented with
          </Typography>
          <Typography paragraph>
            <ul>
              <li>
                <Link href="https://reactjs.org/" target="_blank">
                  reactjs
                </Link>{' '}
              </li>
              <li>
                <Link href="https://create-react-app.dev/" target="_blank">
                  create-react-app
                </Link>{' '}
              </li>
              <li>
                <Link href="https://material-ui.com/" target="_blank">
                  material-ui
                </Link>{' '}
              </li>
            </ul>
          </Typography>
        </Paper>
      </main>
    </div>
  )
}

App.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
}

export default App
