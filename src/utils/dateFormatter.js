const dateFormatter = (date) => {
	const array = date.split('-').map(fig => parseInt(fig));

switch (array[2]) {
	case 1:
		array[2] += 'st';
	break;
	case 2:
		array[2] += 'nd';
	break;
	case 3:
		array[2] += 'rd';
	break;
	case 21:
		array[2] += 'st';
	break;
	case 22:
		array[2] += 'nd';
	break;
	case 23:
		array[2] += 'rd';
	break;
	default:
		array[2] += 'th';
}

switch (array[1]) {
	case 1:
		array[1] = 'January';
	break;
	case 2:
		array[1] = 'February';
	break;
	case 3:
		array[1] = 'March';
	break;
	case 4:
		array[1] = 'April';
	break;
	case 5:
		array[1] = 'May';
	break;
	case 6:
		array[1] = 'June';
	break;
	case 7:
		array[1] = 'July';
	break;
	case 8:
		array[1] = 'August';
	break;
	case 9:
		array[1] = 'September';
	break;
	case 10:
		array[1] = 'October';
	break;
	case 11:
		array[1] = 'Novemnber';
	break;
	case 12:
		array[1] = 'December';
	break;	
	default:
	break;	
}

return array[2] +' '+ array[1] +' '+ array[0]	
}

export default dateFormatter;