import { getOptions } from 'loader-utils';
import validateOptions from 'schema-utils';

const schema = {
    type: 'object',
    properties: {
        test: {
            type: 'string'
        }
    }
};

module.exports = function(source) {
    const options = getOptions(this); // 获取参数

    validateOptions(schema, options, 'my loader'); // 参数校验

    // 处理source
    this.cacheable(); // 缓存
    return `export default ${JSON.stringify(source)}`;
};
