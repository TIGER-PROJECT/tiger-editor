import fs from 'fs';
import path from 'path';
import log from './logger';

export default class LngLoader
{
    constructor (p) {
        //Path is relative to root
        this.path = p || 'src/locales';
    }

    get () {
        let files = fs.readdirSync(this.path);

        let locales = {};
        files.forEach((file) => {
            let basename = path.basename(file, '.json');

            let content, json;
            try {
                content = fs.readFileSync(path.join(this.path, file), 'utf8');
                json    = JSON.parse(content);
            } catch (err) {
                log.error(err);
            }

            locales[ basename ] = json;
        });
        return locales;
    }
};
