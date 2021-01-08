import React from 'react';
import PropTypes from 'prop-types';
import {makeStyles} from '@material-ui/core/styles';
import TreeView from '@material-ui/lab/TreeView';
import TreeItem from '@material-ui/lab/TreeItem';
import Typography from '@material-ui/core/Typography';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import ArrowRightIcon from '@material-ui/icons/ArrowRight';
import TranslateIcon from '@material-ui/icons/Translate';
import FolderIcon from '@material-ui/icons/Folder';
import Badge from '@material-ui/core/Badge';
import _ from 'lodash';

const useTreeItemStyles = makeStyles(theme => ({
  root: {
    color: theme.palette.text.secondary,
    // '&:hover > $content': {
    //   backgroundColor: theme.palette.action.hover,
    // },
    // '&:focus > $content, &$selected > $content': {
    //   backgroundColor: `var(--tree-view-bg-color, ${theme.palette.grey[400]})`,
    //   color: 'var(--tree-view-color)',
    // },
    // '&:focus > $content $label, &:hover > $content $label, &$selected > $content $label': {
    //   backgroundColor: 'transparent',
    // },
  },
  content: {
    color: theme.palette.text.secondary,
    borderTopRightRadius: theme.spacing(2),
    borderBottomRightRadius: theme.spacing(2),
    paddingRight: theme.spacing(1),
    fontWeight: theme.typography.fontWeightMedium,
    '$expanded > &': {
      fontWeight: theme.typography.fontWeightRegular,
    },
  },
  group: {
    marginLeft: 0,
    '& $content': {
      paddingLeft: theme.spacing(2),
    },
  },
  expanded: {},
  selected: {},
  label: {
    fontWeight: 'inherit',
    color: 'inherit',
  },
  labelRoot: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0.5, 0),
  },
  labelIcon: {
    marginRight: theme.spacing(1),
  },
  labelText: {
    fontWeight: 'inherit',
    flexGrow: 1,
  },
}));

function StyledTreeItem(props) {
  const classes = useTreeItemStyles();
  const {
    labelText,
    labelIcon: LabelIcon,
    labelInfo,
    color,
    bgColor,
    badge,
    ...other
  } = props;

  return (
    <TreeItem
      label={
        <div className={classes.labelRoot}>
          <Badge
            variant="dot"
            color="error"
            invisible={!badge}
            anchorOrigin={{
              vertical: 'top',
              horizontal: 'left',
            }}>
            <LabelIcon color="inherit" className={classes.labelIcon} />
          </Badge>
          <Typography variant="body2" className={classes.labelText}>
            {labelText}
          </Typography>
          <Typography variant="caption" color="inherit">
            {labelInfo}
          </Typography>
        </div>
      }
      style={{
        '--tree-view-color': color,
        '--tree-view-bg-color': bgColor,
      }}
      classes={{
        root: classes.root,
        content: classes.content,
        expanded: classes.expanded,
        selected: classes.selected,
        group: classes.group,
        label: classes.label,
      }}
      {...other}
    />
  );
}

StyledTreeItem.propTypes = {
  bgColor: PropTypes.string,
  color: PropTypes.string,
  labelIcon: PropTypes.elementType,
  labelInfo: PropTypes.string,
  labelText: PropTypes.string.isRequired,
};

const useStyles = makeStyles({
  root: {
    height: 264,
    flexGrow: 1,
    maxWidth: 400,
  },
});
function getObject(array, key, value) {
  let o;
  array.some(function iter(a) {
    if (a[key] === value) {
      o = a;
      return true;
    }
    return Array.isArray(a.children) && a.children.some(iter);
  });
  return o;
}

export default function Tree(props) {
  const {values, data = [], onSelect} = props;
  const langs = Object.keys(values);
  const classes = useStyles();

  const renderTree = nodes => (
    <StyledTreeItem
      key={nodes.id}
      nodeId={nodes.id}
      badge={(() => {
        return !langs.every(lang => {
          const allPaths = Object.keys(values[lang]).filter(
            key => nodes.id.includes(key) || key.includes(nodes.id),
          );
          const hasValue = allPaths
            .filter(key => !_.get(data, `${lang}.${key}.children`))
            .every(key => values[lang][key]);

          return hasValue;
        });
      })()}
      labelText={nodes.name}
      labelIcon={Array.isArray(nodes.children) ? FolderIcon : TranslateIcon}>
      {renderChildren(nodes.children)}
    </StyledTreeItem>
  );
  const renderChildren = children => {
    return Array.isArray(children)
      ? children.map(node => renderTree(node))
      : null;
  };

  return (
    <TreeView
      className={classes.root}
      onNodeSelect={(event, nodeIds) => {
        const node = getObject(data, 'id', nodeIds);
        if (!node.children) {
          onSelect(nodeIds);
          // } else {
          //   onSelect(null);
        }
      }}
      defaultExpanded={['1']}
      defaultCollapseIcon={<ArrowDropDownIcon />}
      defaultExpandIcon={<ArrowRightIcon />}
      defaultEndIcon={<div style={{width: 24}} />}>
      {renderChildren(data)}
    </TreeView>
  );
}
