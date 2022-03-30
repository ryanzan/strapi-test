module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '7c9063bcf14caa572c158e32f41af0cc'),
  },
});
