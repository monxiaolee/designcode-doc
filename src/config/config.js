/**
 * Created by monxiaoLee on 18/6/04.
 */
import Env from './env';

let config = {
    env: Env,
    filePath: 'https://file.iviewui.com/file/',
    version: 46,
    liveVersion: 1
};

if (config.env === 'development') {
    config.filePath = 'http://127.0.0.1:9800/overview/'
}

export default config;