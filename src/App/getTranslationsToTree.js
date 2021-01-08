import _ from 'lodash';
export default function getTranslationsToTree(json = {}) {
  const obj = {};
  Object.keys(json).forEach((key) => {
    _.set(obj, key, json[key]);
  });

  const getTree = (data, path) => {
    if ('string' === typeof data) {
      return {children: null, value: data};
    }

    const children = Object.keys(data).map(key => {
      const id = path ? `${path}.${key}` : key;
      return {
        id,
        name: key,
        ...getTree(data[key], id),
      };
    });

    return {children, value: null};
  };

  const root = getTree(obj);

  return root.children;
}
