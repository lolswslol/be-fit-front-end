module.exports = {
  name: 'my-account',
  exposes: {
    './Module': 'my-account/src/app/remote-entry/entry.module.ts',
  },
};
