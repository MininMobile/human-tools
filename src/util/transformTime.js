/**
 * Transform unit of time to another
 * @param {number} from unit of time
 * @param {"days"|"months"|"years"} totype input measurement
 * @param {"days"|"months"|"years"} fromtype output measurement
 * @param {boolean} round round the output
 * @returns {number} converted unit of time
 */
function transformTime(from, totype = "months", fromtype = "days", round = true) {
	let multiplier = 1;
	let divider = 30;
	let result = 0;

	if      (totype == "days") divider = 1;
	else if (totype == "months") divider = 30;
	else if (totype == "years") divider = 364;
	else    throw new Error();

	if      (fromtype == "days") multiplier = 1;
	else if (fromtype == "months") multiplier = 30;
	else if (fromtype == "years") multiplier = 364;
	else    throw new Error();

	result = ((from * multiplier) + 1) / divider;

	return round ? Math.round(result) : result;
}

module.exports = transformTime;
