import { log } from '../deps.ts';
await log.setup({
  //define handlers
  handlers: {
    console: new log.handlers.ConsoleHandler("DEBUG", {
      formatter: "[{levelName}] {msg}",
    }),
  },
  //assign handlers to loggers  
  loggers: {
    default: {
      level: "DEBUG",
    },
    client: {
      level: "INFO",
    },
  },
});

const logger = log.getLogger();

export default logger
// const cl = log.getLogger('client');

// dl.debug('string message 1');
// dl.info(10000000);
// cl.warning(new Date());
