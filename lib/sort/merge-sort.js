/**
 * 归并排序指定数组。
 * @param {Object} p_array 数组。
 * @param {Boolean} [p_descend] 默认为升序排列。指定为 true 时降序排列。
 * @returns {Object} 排序后的数组。
 */
module.exports = function (p_array, p_descend)
{
    if (p_array == null || p_array.length === 0)
    {
        return p_array;
    }
    return _sort(p_array, p_descend);
};

/**
 * 排序指定数组。
 * @param {Object} p_array 数组。
 * @param {Boolean} [p_descend] 默认为升序排列。指定为 true 时降序排列。
 * @returns {Object} 排序后的数组。
 */
function _sort(p_array, p_descend)
{
    const length = p_array.length;
    if (length <= 1)
    {
        return p_array;
    }
    else
    {
        const middle = parseInt(length / 2);
        return _merge(_sort(p_array.slice(0, middle), p_descend), _sort(p_array.slice(middle), p_descend), p_descend);
    }
}

/**
 * 数组不停拆分至最小单元后，开始按顺序合并。
 * @param {Object} p_left 左侧数组。
 * @param {Object} p_left 右侧数组。
 * @param {Boolean} [p_descend] 默认为升序排列。指定为 true 时降序排列。
 * @returns {Object} 排序后的数组。
 */
function _merge(p_left, p_right, p_descend)
{
    const result = [];
    if (p_descend)
    {
        while (p_left.length !== 0 && p_right.length !== 0)
        {
            result.push(p_left[0] >= p_right[0] ? p_left.shift() : p_right.shift());
        }
        return result.concat(p_left.concat(p_right));
    }
    else
    {
        while (p_left.length !== 0 && p_right.length !== 0)
        {
            result.push(p_left[0] <= p_right[0] ? p_left.shift() : p_right.shift());
        }
        return result.concat(p_left.concat(p_right));
    }
}
