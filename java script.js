
let GL = 0;
let trati = 0;
let PC;
let Name;
let value_company; // стоимость компании
let company_bank_0 = 0;
let company_bank = 0; // банк компании 
let	mining_companies; // Добыча компании
let XP_company = 0; // Опыт компании
let LVL_company; // Уровень компании
let work_player; // Работа игрока
let worker_1 = 0;
let worker_3 = 0;
let worker_5 = 0;


function Entrance(){
	if (localStorage.PC == 1) {
		Open_I_Player();
		
		document.getElementById('Glav').style.display="none";
		document.getElementById('Game').style.display="block";
		document.getElementById('Name').style.display="none";
		document.getElementById('recovery').style.display="none";
		setInterval(update_player, 100);
		setInterval(F_worker_1_S, 1000);
		setInterval(F_worker_3_S, 1000);
		setInterval(F_worker_5_S, 1000);
	}else{
		Game();
	}
}
function Game(){
	document.getElementById('recovery').style.display="none";
	document.getElementById('Game').style.display="none";
	document.getElementById('Name').style.display="block";
	document.getElementById('Glav').style.display="none";
}
function write_a_name(){
	setInterval(update_player, 100);
	setInterval(F_worker_1_S, 1000);
	setInterval(F_worker_3_S, 1000);
	setInterval(F_worker_5_S, 1000);
	let PC = localStorage.setItem('PC', 0);
	localStorage.PC = 1;
	localStorage.setItem('Name', document.getElementById('Name_Player').value);
	let Name = localStorage.Name;
	document.getElementById('Name').style.display="none";
	document.getElementById('Game').style.display="block";
	document.getElementById('Name_companyPlayer').innerHTML = Name;
}

function company(){
	document.getElementById('I_Player').style.display="none";
	document.getElementById('Player_2').style.display="none";
	document.getElementById('Player_3').style.display="none";
	document.getElementById('Player_4').style.display="none";
	document.getElementById('Player_5').style.display="none";
}
function Open_I_Player(){
	company();
	document.getElementById('I_Player').style.display="block";
}
function Player_2(){
	company();
	document.getElementById('Player_2').style.display="block";
}
function Player_3(){
	company();
	document.getElementById('Player_3').style.display="block";
}
function Player_4(){
	company();
	document.getElementById('Player_4').style.display="block";
}
function Player_5(){
	company();
	document.getElementById('Player_5').style.display="block";
}

// компания игрока функционал
function update_player(){
	if (localStorage._if == 1 || localStorage._if == 2 ) {
		
		if (GL == 0) {
			localStorage.XP_2 = parseInt(localStorage.XP) ;
			localStorage.bank_2 = parseInt(localStorage.bank) ;
			GL = 1;
			localStorage.setItem('trati', 0);
		}else{

			// Опыт
			document.getElementById('Player_XP_p').innerHTML = "Опыт: " +  parseInt(localStorage.XP_3) + " ХР";
			localStorage.XP_3 = (parseInt(localStorage.XP_2) + XP_company);
			document.getElementById('Player_XP_p').innerHTML = "Опыт: " +  parseInt(localStorage.XP_3) + " ХР";
			localStorage.XP = parseInt(localStorage.XP_3);
			document.getElementById('Player_LVL_p').innerHTML = "Уровень: " +  parseInt(localStorage.LVL_company);
			

			// Банк

			document.getElementById('Bank').innerHTML = "Банк " + parseInt(localStorage.bank) + " ₽"; // вывод банка
			localStorage.bank_3 = (parseInt(localStorage.bank_2) + company_bank - parseInt(localStorage.trati) + parseInt(localStorage.symma));
			document.getElementById('Bank').innerHTML = "Банк: " +  parseInt(company_bank_0) + " ₽";
			localStorage.bank = parseInt(localStorage.bank_3);
			company_bank_0 = parseInt(localStorage.bank)




			//

			

			// Уровни
			if (localStorage.XP_3 >= 20 && localStorage.LVL_company == 1)  {
				
				localStorage.LVL_company = 2;	
			}else if (localStorage.XP_3 >= 30 &&  localStorage.LVL_company == 2) {
				
				localStorage.LVL_company = 3;
			}else if (localStorage.XP_3 >= 40 &&  localStorage.LVL_company == 3) {
				
				localStorage.LVL_company = 4;
			}else if (localStorage.XP_3 >= 50 &&  localStorage.LVL_company == 4) {
				
				localStorage.LVL_company = 5;
			}else if (localStorage.XP_3 >= 60 &&  localStorage.LVL_company == 5) {
				
				localStorage.LVL_company = 6;
			}else if (localStorage.XP_3 >= 70 &&  localStorage.LVL_company == 6) {
				
				localStorage.LVL_company = 7;
			}else if (localStorage.XP_3 >= 80 &&  localStorage.LVL_company == 7) {
				
				localStorage.LVL_company = 8;
			}else if (localStorage.XP_3 >= 90 &&  localStorage.LVL_company == 8) {
				
				localStorage.LVL_company = 9;
			}else if (localStorage.XP_3 >= 100 &&  localStorage.LVL_company == 9) {
				
				localStorage.LVL_company = 10;
			}else if (localStorage.XP_3 >= 110 &&  localStorage.LVL_company == 10) {
				
				localStorage.LVL_company = 11;
			}else if (localStorage.XP_3 >= 120 &&  localStorage.LVL_company == 11) {
				
				localStorage.LVL_company = 12;
			}

			

		}
		
		
	}else{

		localStorage._if = 1;
		
		localStorage.setItem('symma', 0);
		localStorage.setItem('worker_1', 0);
		localStorage.setItem('worker_3', 0);
		localStorage.setItem('worker_5', 0);
		localStorage.setItem('trati', 0);
		localStorage.setItem('LVL_company', 1);
		localStorage.setItem('bank', 0);
		localStorage.setItem('bank_2', 0);
		localStorage.setItem('bank_3', 0);
		localStorage.setItem('bank_4', 0);
		localStorage.setItem('XP', 0);
		localStorage.setItem('XP_2', 0);
		localStorage.setItem('XP_3', 0);
		localStorage.setItem('XP_4', 0);
		XP_company = XP_company + parseInt(localStorage.XP_2) ;
		company_bank = company_bank + parseInt(localStorage.bank_2) ;
	}

	//parseInt

	
	
	
	
}		function Work_Player(){


			
			company_bank += 1;
			localStorage.setItem('bank', company_bank); // Сохраняем
			XP_fynkcional();
		}


function XP(){
	
} 		function XP_fynkcional(){
			
			
			
			
			XP_company += 1;
			localStorage.setItem('XP', XP_company);



		}

function F_worker_1(){
	if (company_bank_0 >= 10) {
		
		localStorage.trati = parseInt(localStorage.trati) + 10;
		
		localStorage.worker_1 = parseInt(localStorage.worker_1) + 1;

	}
}
function F_worker_1_S(){
	symma_1 = 0;
	symma_1 = parseInt(localStorage.worker_1) * 1
	localStorage.symma = parseInt(localStorage.symma) + symma_1
	
}

function F_worker_3(){
	if (company_bank_0 >= 30) {
		localStorage.trati = parseInt(localStorage.trati) + 30;
		
		localStorage.worker_3 = parseInt(localStorage.worker_1) + 1;
	}
}
function F_worker_3_S(){
	symma_3 = 0;
	symma_3 = parseInt(localStorage.worker_3) * 3
	localStorage.symma = parseInt(localStorage.symma) + symma_3
}
function F_worker_5(){
	if (company_bank_0 >= 50) {
		localStorage.trati = parseInt(localStorage.trati) + 50;
		
		localStorage.worker_5 = parseInt(localStorage.worker_5) + 1;
	}
}
function F_worker_5_S(){
	symma_5 = 0;
	symma_5 = parseInt(localStorage.worker_5) * 5
	localStorage.symma = parseInt(localStorage.symma) + symma_5
}
function recovery(){
	localStorage.clear();
	Game();
}