import {saveAs} from 'file-saver';
import JSZip from 'jszip';

export default function Download(props) {
  const {children} = props;

  return children({
    ...props,
    download: async (langs = {}) => {
      const zip = new JSZip();
      const d = new Date();
      const dformat =
        [d.getMonth() + 1, d.getDate(), d.getFullYear()].join('/') +
        ' ' +
        [d.getHours(), d.getMinutes(), d.getSeconds()].join(':');
      Object.keys(langs).forEach(lang => {
        zip.file(`${lang}.json`, JSON.stringify(langs[lang]));
      });

      const blob = await zip.generateAsync({type: 'blob'});
      saveAs(blob, `${dformat}.zip`);
    },
  });
}
