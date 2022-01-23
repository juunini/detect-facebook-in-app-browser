export default () => ['FBAN', 'FBAV']
  .find((agent) => navigator.userAgent.includes(agent)) !== undefined;
