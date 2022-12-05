const mySelect = document.getElementById('LanguageSelect');
const language_changeA = document.getElementById('language_change');
const Chinese_numA = document.getElementById('Chinese_num');
//const Chinese_directornumA = document.getElementById('Chinese_directornum');
const Chinese_leaveA = document.getElementById('Chinese_leave');
const leaveA = document.getElementById('leave');
const Chinese_dateA = document.getElementById('Chinese_date');
const sureA = document.getElementById('sure');

const language_vietnameseB = document.getElementById('language_vietnamese');
const vietnamese_numB = document.getElementById('vietnamese_num');
//const vietnamese_directornumB = document.getElementById('vietnamese_directornum');
const vietnamese_leaveB = document.getElementById('vietnamese_leave');
const leave_vietnameseB = document.getElementById('leave_vietnamese');
const vietnamese_dateB = document.getElementById('vietnamese_date');
const sure_vietnameseB = document.getElementById('sure_vietnamese');

mySelect.addEventListener('change', (e) => {
  switch (e.target.value) {
	case 'Chinese': {
	  language_changeA.style.display = 'block';
	  Chinese_numA.style.display = 'block';
	  //Chinese_directornumA.style.display = 'block';
	  Chinese_leaveA.style.display = 'block';
	  leaveA.style.display = 'block';
	  Chinese_dateA.style.display = 'block';
	  sureA.style.display = 'block';
	  language_vietnameseB.style.display = 'none';
	  vietnamese_numB.style.display = 'none';
	  //vietnamese_directornumB.style.display = 'none';
	  vietnamese_leaveB.style.display = 'none';
	  leave_vietnameseB.style.display = 'none';
	  vietnamese_dateB.style.display = 'none';
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
	  sureA.style.display = 'none';
	  language_vietnameseB.style.display = 'block';
	  vietnamese_numB.style.display = 'block';
	  //vietnamese_directornumB.style.display = 'block';
	  vietnamese_leaveB.style.display = 'block';
	  leave_vietnameseB.style.display = 'block';
	  vietnamese_dateB.style.display = 'block';
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