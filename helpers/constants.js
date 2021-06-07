const Enum = {
  STARTER: 'starter',
  PRO: 'pro',
  BUSINESS: 'business',
};

const HttpCode = {
  OK: 200,
  CREATED: 201,
  BAD_REQUST: 400,
  UNAUTHORIZED: 401,
  FORBIDDEN: 403,
  NOT_FOUND: 404,
  CONFLICT: 409,
  INTERNAL_SERVER_ERROR: 500,
};

module.exports = { Enum, HttpCode};