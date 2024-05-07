import type { StrapiCloudCommand } from '../types';
import { runAction } from '../utils/helpers';
import action from './action';

/**
 * `$ cloud device flow logout`
 */
const command: StrapiCloudCommand = ({ command, ctx }) => {
  return command
    .command('cloud:logout')
    .alias('logout')
    .description('Strapi Cloud Logout')
    .option('-d, --debug', 'Enable debugging mode with verbose logs')
    .option('-s, --silent', "Don't log anything")
    .action(() => runAction('logout', action)(ctx));
};

export default command;
