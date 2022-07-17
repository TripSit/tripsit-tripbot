import {Command} from './commandDef';
import {Hello} from '../commands/hello';
import {test} from '../commands/test';

export const CommandList: Command[] = [Hello, test];
