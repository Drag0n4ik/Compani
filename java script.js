// проверь это 
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
		StartBot();
		document.getElementById('div').style.display="none";
		document.getElementById('Glav').style.display="none";
		document.getElementById('Game').style.display="block";
		document.getElementById('Name').style.display="none";
		document.getElementById('recovery').style.display="none";
		setInterval(update_player, 100);
		setInterval(F_worker_1_S, 1000);
		setInterval(F_worker_3_S, 1000);
		setInterval(F_worker_5_S, 1000);
		document.getElementById('Name_companyPlayer').innerHTML = localStorage.Name;
		document.getElementById('Name_companyPlayer_2').innerHTML = localStorage.Name_2;
		document.getElementById('Name_companyPlayer_3').innerHTML = localStorage.Name_3;
		document.getElementById('Name_companyPlayer_4').innerHTML = localStorage.Name_4;
		document.getElementById('Name_companyPlayer_5').innerHTML = localStorage.Name_5;
	}else{
		Game();
	}
}
function Game(){
	document.getElementById('div').style.display="none";
	document.getElementById('recovery').style.display="none";
	document.getElementById('Game').style.display="none";
	document.getElementById('Name').style.display="block";
	document.getElementById('Glav').style.display="none";
}
function write_a_name(){
	StartBot();
	setInterval(update_player, 100);
	setInterval(F_worker_1_S, 1000);
	setInterval(F_worker_3_S, 1000);
	setInterval(F_worker_5_S, 1000);
	let PC = localStorage.setItem('PC', 0);
	localStorage.PC = 1;
	localStorage.setItem('Name', document.getElementById('Name_Player').value);
	localStorage.setItem('Name_2', document.getElementById('Name_Player_2').value);
	localStorage.setItem('Name_3', document.getElementById('Name_Player_3').value);	
	localStorage.setItem('Name_4', document.getElementById('Name_Player_4').value);
	localStorage.setItem('Name_5', document.getElementById('Name_Player_5').value);


	document.getElementById('Name').style.display="none";
	document.getElementById('Game').style.display="block";
	document.getElementById('Name_companyPlayer').innerHTML = localStorage.Name;
	document.getElementById('Name_companyPlayer_2').innerHTML = localStorage.Name_2;
	document.getElementById('Name_companyPlayer_3').innerHTML = localStorage.Name_3;
	document.getElementById('Name_companyPlayer_4').innerHTML = localStorage.Name_4;
	document.getElementById('Name_companyPlayer_5').innerHTML = localStorage.Name_5;
}

function company(){
	document.getElementById('I_Player').style.display="none";
	document.getElementById('Player_2').style.display="none";
	document.getElementById('Player_3').style.display="none";
	document.getElementById('Player_4').style.display="none";
	document.getElementById('Player_5').style.display="none";

	document.getElementById('companyPlayer').style.background="#999";
	document.getElementById('company_Bot_Id2').style.background="#999";
	document.getElementById('company_Bot_Id3').style.background="#999";
	document.getElementById('company_Bot_Id4').style.background="#999";
	document.getElementById('company_Bot_Id5').style.background="#999";
}
function Open_I_Player(){
	company();
	document.getElementById('I_Player').style.display="block";
	document.getElementById('companyPlayer').style.background="#998";
}
function Player_2(){
	company();
	document.getElementById('Player_2').style.display="block";
	document.getElementById('company_Bot_Id2').style.background="#998";
}
function Player_3(){
	company();
	document.getElementById('Player_3').style.display="block";
	document.getElementById('company_Bot_Id3').style.background="#998";
}
function Player_4(){
	company();
	document.getElementById('Player_4').style.display="block";
	document.getElementById('company_Bot_Id4').style.background="#998";
}
function Player_5(){
	company();
	document.getElementById('Player_5').style.display="block";
	document.getElementById('company_Bot_Id5').style.background="#998";
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



			let W = 0;
			W = (parseInt(localStorage.secent_1) + parseInt(localStorage.secent_3) + parseInt(localStorage.secent_5))
			//
			document.getElementById('dobiha').innerHTML = "Добыча " + W  + " ₽ в сек";
			document.getElementById('Stoimost').innerHTML = "Стоимость компании " + Math.ceil(((parseInt(W) / 10) + (parseInt(localStorage.LVL_company)*100) + (parseInt(localStorage.bank)/10))) + " ₽ ";

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




		// игрок

		localStorage._if = 1;
		
		localStorage.setItem('symma', 0);
		localStorage.setItem('secent_1', 0);
		localStorage.setItem('secent_3', 0);
		localStorage.setItem('secent_5', 0);
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




		// бот 2 
		
		




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
		localStorage.secent_1 = parseInt(localStorage.worker_1) * 1;

	}
}
function F_worker_1_S(){
	symma_1 = 0;
	symma_1 = parseInt(localStorage.worker_1) * 1
	localStorage.symma = parseInt(localStorage.symma) + symma_1
	
}

function F_worker_3(){
	if (company_bank_0 >= 300) {
		localStorage.trati = parseInt(localStorage.trati) + 300;
		
		localStorage.worker_3 = parseInt(localStorage.worker_3) + 1;
		localStorage.secent_3 = parseInt(localStorage.worker_3) * 3;
	}
}
function F_worker_3_S(){
	symma_3 = 0;
	symma_3 = parseInt(localStorage.worker_3) * 3
	localStorage.symma = parseInt(localStorage.symma) + symma_3
}
function F_worker_5(){
	if (company_bank_0 >= 500) {
		localStorage.trati = parseInt(localStorage.trati) + 500;
		
		localStorage.worker_5 = parseInt(localStorage.worker_5) + 1;
		localStorage.secent_5 = parseInt(localStorage.worker_5) * 5;
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
// Запуск ботов
function StartBot(){
	Bot1();
	Bot2();
	Bot3();
	Bot4();
}

// Бот 1(компания 2)
function Bot1(){
	document.getElementById('C-N2-p').innerHTML = "2s";
	
	//setInterval(Bot1Update, 1000);
}
function Bot1Update(){
	document.getElementById('L-C2-p').innerHTML = "1l";
	document.getElementById('S-C2-p').innerHTML = "Стоимость компании " + "10000" + " ₽";
	document.getElementById('C-M2-p').innerHTML = "Рабочих " + "10";
}

// Бот 2(компания 3)
function Bot2(){
	
}

// Бот 3(компания 4)
function Bot3(){
	
}

// Бот 4(компания 5)
function Bot4(){
	
}