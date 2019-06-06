/**
 * 经典洗牌打乱算法。
 *
 * @param {Object} p_array 数组。
 *
 * @returns {Object} 打乱后的数组。
 */
module.exports = function shuffle(p_array)
{
    if (p_array && p_array.length > 0)
    {
        let index;
        const length = p_array.length;
        for (let i = length - 1; i > 0; i--)
        {
            index = Math.floor(Math.random() * i);
            [p_array[i], p_array[index]] = [p_array[index], p_array[i]];
        }
    }
    return p_array;
};
