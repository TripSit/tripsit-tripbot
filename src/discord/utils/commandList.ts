import {Command} from './commandDef';
import {hello} from '../commands/global/hello';
import {test} from '../commands/guild/test';
import logger from '../../global/utils/logger';
const PREFIX = require('path').parse(__filename).name;

logger.debug(`[${PREFIX}] start!`);

export const GuildCommandList: Command[] = [test];

export const GlobalCommandList: Command[] = [hello];

export const CommandList: Command[] = [hello, test];
