const url = 'https://api.meetus.tube';
const webUrl = 'https://meetus.tube/';
const tubeUrl = 'https://video.meetus.tube/'

// const url = 'http://localhost:8080';
// const webUrl = 'http://localhost:4200/';

export const environment = {
  production: true,
  hmr: false,
  serverUrl: `${url}/api/v1/`,
  socketUrl: `${url}/`,
  webUrl: webUrl,
  tubeUrl: tubeUrl,
  domain: '.meetus.tube',
  EncryptIV: 8625401029409790,
  EncryptKey: 8625401029409790,
  siteKey: '0x4AAAAAAAUtBoxdqH7NpIaT',
  secretKey: '0x4AAAAAAAUtBtTrRf7EnMn-dmdmAXPcngo',
  qrLink: `${webUrl}settings/edit-profile/`,
};
