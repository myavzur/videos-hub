/**
 * 1 000 => 1K
 * 1.000.000 => 1M
 * 1.000.000.000 => 1B
 */
export const formatNumToShort = (num: number) => {
	if (num >= 1000000000) {
		return (num / 1000000000).toFixed(1).replace(/\.0/, '') + 'B'
	}

	if (num >= 1000000) {
		return (num / 1000000).toFixed(1).replace(/\.0/, '') + 'M'
	}

	if (num >= 1000) {
		return (num / 1000).toFixed(1).replace(/\.0/, '') + 'K'
	}

	return num
}
