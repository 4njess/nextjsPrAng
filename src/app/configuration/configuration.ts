import { configurationLoader} from './request';
import { settings } from "./settings";

export async function abc(){
  const conf = await configurationLoader(settings)
  return conf

}



//export var conf = await configurationLoader(settings)

