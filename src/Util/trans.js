/**
 * Transform unit of time to another
 * @param {number} from Unit of time
 * @param {string} totype Unit of time represented in `from` argument
 * @param {string} fromtype Previous unit of time
 * @returns {number} Requested unit of time
 */
function transformTime(from, totype = "months", fromtype = "days", round = true) {
	let multiplier = 1;
	let divider = 30;
	let result = 0;

	if		(totype == "days") divider = 1;
	else if (totype == "months") divider = 30;
	else if (totype == "years") divider = 364;

	if		(fromtype == "days") multiplier = 1;
	else if (fromtype == "months") multiplier = 30;
	else if (fromtype == "years") multiplier = 364;

	result = ((from * multiplier) + 1) / divider;

	return round ? Math.round(result) : result;
}

module.exports = transformTime;