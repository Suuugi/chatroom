CREATE TABLE IF NOT EXISTS users (
  uname text not null,
  logged_in boolean,
  PRIMARY KEY(uname)
);

CREATE TABLE IF NOT EXISTS messages (
  tstamp timestamp,
  uname text references users(uname),
  msg text,
  PRIMARY KEY(tstamp, uname, msg)
);