const mySelect = document.getElementById('LanguageSelect');
const language_changeA = document.getElementById('language_change');
const Chinese_numA = document.getElementById('Chinese_num');
//const Chinese_directornumA = document.getElementById('Chinese_directornum');
const Chinese_leaveA = document.getElementById('Chinese_leave');
const leaveA = document.getElementById('leave');
const Chinese_dateA = document.getElementById('Chinese_date');
const Chinese_timeA = document.getElementById('Chinese_time');
const sureA = document.getElementById('sure');

const language_vietnameseB = document.getElementById('language_vietnamese');
const vietnamese_numB = document.getElementById('vietnamese_num');
//const vietnamese_directornumB = document.getElementById('vietnamese_directornum');
const vietnamese_leaveB = document.getElementById('vietnamese_leave');
const leave_vietnameseB = document.getElementById('leave_vietnamese');
const vietnamese_dateB = document.getElementById('vietnamese_date');
const vietnamese_timeB = document.getElementById('vietnamese_time');
const sure_vietnameseB = document.getElementById('sure_vietnamese');

const starttime1 = document.getElementById('starttime');
const test1 = document.getElementById('test');
const endtime1 = document.getElementById('endtime');

mySelect.addEventListener('change', (e) => {
  switch (e.target.value) {
	case 'Chinese': {
	  language_changeA.style.display = 'block';
	  Chinese_numA.style.display = 'block';
	  //Chinese_directornumA.style.display = 'block';
	  Chinese_leaveA.style.display = 'block';
	  leaveA.style.display = 'block';
	  Chinese_dateA.style.display = 'block';
	  Chinese_timeA.style.display = 'block';
	  sureA.style.display = 'block';
	  language_vietnameseB.style.display = 'none';
	  vietnamese_numB.style.display = 'none';
//	  vietnamese_directornumB.style.display = 'none';
	  vietnamese_leaveB.style.display = 'none';
	  leave_vietnameseB.style.display = 'none';
	  vietnamese_dateB.style.display = 'none';
	  vietnamese_timeB.style.display = 'none';
	  sure_vietnameseB.style.display = 'none';
	  break;
	}
	case 'vietnamese': {
	  language_changeA.style.display = 'none';
	  Chinese_numA.style.display = 'none';
	  //Chinese_directornumA.style.display = 'none';
	  Chinese_leaveA.style.display = 'none';
	  leaveA.style.display = 'none';
	  Chinese_dateA.style.display = 'none';
	  Chinese_timeA.style.display = 'none';
	  sureA.style.display = 'none';
	  language_vietnameseB.style.display = 'block';
	  vietnamese_numB.style.display = 'block';
//	  vietnamese_directornumB.style.display = 'block';
	  vietnamese_leaveB.style.display = 'block';
	  leave_vietnameseB.style.display = 'block';
	  vietnamese_dateB.style.display = 'block';
	  vietnamese_timeB.style.display = 'block';
	  sure_vietnameseB.style.display = 'block';
	  break;
	}
	default: {
	  language_changeA.style.display = 'block';
	  language_vietnameseB.style.display = 'none';
	  break;
	}  
  }
});
leaveA.addEventListener('change', (e) => {
  switch (e.target.value) {
	case '特休': {
		starttime1.style.display = 'none';
		test1.style.display = 'none';
		endtime1.style.display = 'none';
		Chinese_timeA.style.display = 'none';
	  break;
	}
	case '婚假': {
		starttime1.style.display = 'none';
		test1.style.display = 'none';
		endtime1.style.display = 'none';
		Chinese_timeA.style.display = 'none';
	  break;
	}
	case '喪假(父母、養父母、繼父母、配偶喪亡者)': {
		starttime1.style.display = 'none';
		test1.style.display = 'none';
		endtime1.style.display = 'none';
		Chinese_timeA.style.display = 'none';
	  break;
	}
	case '喪假(祖父母、子女、配偶之父母、配偶之養父母或繼父母喪亡者)': {
		starttime1.style.display = 'none';
		test1.style.display = 'none';
		endtime1.style.display = 'none';
		Chinese_timeA.style.display = 'none';
	  break;
	}
	case '喪假(曾祖父母、兄弟姊妹、配偶之祖父母喪亡者)': {
		starttime1.style.display = 'none';
		test1.style.display = 'none';
		endtime1.style.display = 'none';
		Chinese_timeA.style.display = 'none';
	  break;
	}
	case '陪產假': {
		starttime1.style.display = 'none';
		test1.style.display = 'none';
		endtime1.style.display = 'none';
		Chinese_timeA.style.display = 'none';
	  break;
	}
	case '分娩假': {
		starttime1.style.display = 'none';
		test1.style.display = 'none';
		endtime1.style.display = 'none';
		Chinese_timeA.style.display = 'none';
	  break;
	}
	case '產檢假': {
		starttime1.style.display = 'none';
		test1.style.display = 'none';
		endtime1.style.display = 'none';
		Chinese_timeA.style.display = 'none';
	  break;
	}	
	default: {
		starttime1.style.display = 'block';
		test1.style.display = 'block';
		endtime1.style.display = 'block';
		Chinese_timeA.style.display = 'block';
	  break;
	}  
  }
});
leave_vietnameseB.addEventListener('change', (e) => {
  switch (e.target.value) {
	case '特休': {
		starttime1.style.display = 'none';
		test1.style.display = 'none';
		endtime1.style.display = 'none';
		vietnamese_timeB.style.display = 'none';
	  break;
	}
	case '婚假': {
		starttime1.style.display = 'none';
		test1.style.display = 'none';
		endtime1.style.display = 'none';
		vietnamese_timeB.style.display = 'none';
	  break;
	}
	case '喪假(父母、養父母、繼父母、配偶喪亡者)': {
		starttime1.style.display = 'none';
		test1.style.display = 'none';
		endtime1.style.display = 'none';
		vietnamese_timeB.style.display = 'none';
	  break;
	}
	case '喪假(祖父母、子女、配偶之父母、配偶之養父母或繼父母喪亡者)': {
		starttime1.style.display = 'none';
		test1.style.display = 'none';
		endtime1.style.display = 'none';
		vietnamese_timeB.style.display = 'none';
	  break;
	}
	case '喪假(曾祖父母、兄弟姊妹、配偶之祖父母喪亡者)': {
		starttime1.style.display = 'none';
		test1.style.display = 'none';
		endtime1.style.display = 'none';
		vietnamese_timeB.style.display = 'none';
	  break;
	}
	case '陪產假': {
		starttime1.style.display = 'none';
		test1.style.display = 'none';
		endtime1.style.display = 'none';
		vietnamese_timeB.style.display = 'none';
	  break;
	}
	case '分娩假': {
		starttime1.style.display = 'none';
		test1.style.display = 'none';
		endtime1.style.display = 'none';
		vietnamese_timeB.style.display = 'none';
	  break;
	}
	case '產檢假': {
		starttime1.style.display = 'none';
		test1.style.display = 'none';
		endtime1.style.display = 'none';
		vietnamese_timeB.style.display = 'none';
	  break;
	}	
	default: {
		starttime1.style.display = 'block';
		test1.style.display = 'block';
		endtime1.style.display = 'block';
		vietnamese_timeB.style.display = 'block';
	  break;
	}  
  }
});