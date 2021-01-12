let zzzz = 0 
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



//  для бота
let	lvlUpMn = 1.5
let SumUpMn = 1.05

// Покупка компаний
function ShopBot2(){
	if (localStorage.bank >= parseInt(localStorage.SummaBot2 )) {
		localStorage.IdBot2 = 1;
		
	}
}
function ShopBot3(){
	if (localStorage.bank >= parseInt(localStorage.SummaBot3) && parseInt(localStorage.IdBot2) == 1 ) {
		localStorage.IdBot3 = 1;
		
	}
}
function ShopBot4(){
	if (localStorage.bank >= parseInt(localStorage.SummaBot4) && parseInt(localStorage.IdBot3) == 1 && parseInt(localStorage.IdBot2) == 1) {
		localStorage.IdBot4 = 1;
		
	}
}
function ShopBot5(){
	if (localStorage.bank >= parseInt(localStorage.SummaBot5) && parseInt(localStorage.IdBot4) == 1 && parseInt(localStorage.IdBot3) == 1 && parseInt(localStorage.IdBot2) == 1) {
		localStorage.IdBot5 = 1;
		
	}
}
function Entrance(){
	if (localStorage.PC == 1) {
		Open_I_Player();
		setInterval(BotsUpdate, 1000);
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
		document.getElementById('C-N2-p').innerHTML = localStorage.Name_2;
		document.getElementById('C-N3-p').innerHTML = localStorage.Name_3;
		document.getElementById('C-N4-p').innerHTML = localStorage.Name_4;
		document.getElementById('C-N5-p').innerHTML = localStorage.Name_5;
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
	setInterval(BotsUpdate, 1000);
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

	document.getElementById('Name_companyPlayer_2').innerHTML = localStorage.Name_2;
	document.getElementById('Name_companyPlayer_3').innerHTML = localStorage.Name_3;
	document.getElementById('Name_companyPlayer_4').innerHTML = localStorage.Name_4;
	document.getElementById('Name_companyPlayer_5').innerHTML = localStorage.Name_5;

	document.getElementById('C-N2-p').innerHTML = localStorage.Name_2;
	document.getElementById('C-N3-p').innerHTML = localStorage.Name_3;
	document.getElementById('C-N4-p').innerHTML = localStorage.Name_4;
	document.getElementById('C-N5-p').innerHTML = localStorage.Name_5;
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
			localStorage.exp = parseInt(localStorage.exp) ;
			localStorage.bank = parseInt(localStorage.bank) ;
			GL = 1;
			localStorage.setItem('trati', 0);
			document.getElementById('StoimostDobihu_1').innerHTML = parseInt(localStorage.MonX1) + "<br>" + " Добыча + 1 ₽";
		document.getElementById('StoimostDobihu_2').innerHTML = parseInt(localStorage.MonX2) + "<br>" + " Добыча + 3 ₽";
		document.getElementById('StoimostDobihu_3').innerHTML = parseInt(localStorage.MonX3) + "<br>" + " Добыча + 5 ₽";
		}else{

				
					if (localStorage.IdBot2 == 1) {
						if (localStorage.IdBot3 == 1) {
							if (localStorage.IdBot4 == 1) {
								if (localStorage.IdBot5 == 1) {
											document.getElementById('ShopBot5').innerHTML = "Куплен "
											localStorage.bank = (parseInt(localStorage.bank) + parseInt(localStorage.Money2) +  parseInt(localStorage.Money3) + parseInt(localStorage.Money4) + parseInt(localStorage.Money5))
											document.getElementById('Bank').innerHTML = "Банк " + parseInt(localStorage.bank) + " ₽"; // вывод 5
											if (zzzz == 0 ) {
												alert("УУУУУРРРРРАААА Игра пройдена " );
												zzzz = 1;
											}
											
								}else{
										document.getElementById('ShopBot4').innerHTML = "Куплен "
										localStorage.bank = (parseInt(localStorage.bank) + parseInt(localStorage.Money2) +  parseInt(localStorage.Money3) + parseInt(localStorage.Money4))
										document.getElementById('Bank').innerHTML = "Банк " + (parseInt(localStorage.bank) + parseInt(localStorage.Money2) +  parseInt(localStorage.Money3) + parseInt(localStorage.Money4)) + " ₽"; // вывод 4 
								}
							}else{
									document.getElementById('ShopBot3').innerHTML = "Куплен "
									localStorage.bank = (parseInt(localStorage.bank) + parseInt(localStorage.Money2) + parseInt(localStorage.Money3))
									document.getElementById('Bank').innerHTML = "Банк " + parseInt(localStorage.bank) + " ₽"; // вывод 3 
							}
						}else{
								document.getElementById('ShopBot2').innerHTML = "Куплен"
								localStorage.bank = (parseInt(localStorage.bank) + parseInt(localStorage.Money2))
								document.getElementById('Bank').innerHTML = "Банк " + parseInt(localStorage.bank) + " ₽"; // вывод 2 
						}
					}else{
						
						document.getElementById('Bank').innerHTML = "Банк " + (parseInt(localStorage.bank)) + " ₽"; // вывод банка
					}
				





			// Опыт
			document.getElementById('Player_XP_p').innerHTML = "Опыт: " +  parseInt(localStorage.exp) + " | " + parseInt(localStorage.lvlUp) + " ХР";
			
			// lvl 
			
			document.getElementById('Player_LVL_p').innerHTML = "Уровень: " +  parseInt(localStorage.lvl);
			

			

			
			



			let W = 0;
			W = (parseInt(localStorage.secent_1) + parseInt(localStorage.secent_3) + parseInt(localStorage.secent_5))
			//
			document.getElementById('dobiha').innerHTML = "Добыча " + W  + " ₽ в сек";
			document.getElementById('Stoimost').innerHTML = "Стоимость компании " + Math.ceil(((parseInt(W) / 10) + (parseInt(localStorage.LVL_company)*100) + (parseInt(localStorage.bank)/10))) + " ₽ ";

			// Уровни
			

			if (localStorage.exp >= parseInt(localStorage.lvlUp)) {
				localStorage.lvl = parseInt(localStorage.lvl) + 1
				localStorage.lvlUp = parseInt(localStorage.lvlUp) * lvlUpMn;
				localStorage.lvlUp = (parseInt(localStorage.lvlUp));

			}

			

		}
		
		
	}else{





		// игрок

		localStorage._if = 1;

		localStorage.setItem('lvlUp', 10);
		localStorage.setItem('lvl', 1);
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
		localStorage.setItem('exp', 0);
		localStorage.setItem('MonX3', 300);
		localStorage.setItem('MonX2', 200);
		localStorage.setItem('MonX1', 100);

		document.getElementById('StoimostDobihu_1').innerHTML = parseInt(localStorage.MonX1) + "<br>" + " Добыча + 1 ₽";
		document.getElementById('StoimostDobihu_2').innerHTML = parseInt(localStorage.MonX2) + "<br>" + " Добыча + 3 ₽";
		document.getElementById('StoimostDobihu_3').innerHTML = parseInt(localStorage.MonX3) + "<br>" + " Добыча + 5 ₽";




		// бот 2 
		localStorage.setItem('Money2', 0);
		localStorage.setItem('InSecPl2', 1);
		localStorage.setItem('lvl2', 1);
		localStorage.setItem('exp2', 0);
		localStorage.setItem('lvlUp2', 10);
		localStorage.setItem('MonX3_2', 300);
		localStorage.setItem('MonX2_2', 200);
		localStorage.setItem('MonX1_2', 100);
		localStorage.setItem('BotRab2', 0);
		localStorage.setItem('SummaBot2', 0);
		

		// бот 3 
		localStorage.setItem('Money3', 0);
		localStorage.setItem('InSecPl3', 1);
		localStorage.setItem('lvl3', 1);
		localStorage.setItem('exp3', 0);
		localStorage.setItem('lvlUp3', 10);
		localStorage.setItem('MonX3_3', 300);
		localStorage.setItem('MonX2_3', 200);
		localStorage.setItem('MonX1_3', 100);
		localStorage.setItem('BotRab3', 0);
		localStorage.setItem('SummaBot3', 0);


		// бот  4
		localStorage.setItem('Money4', 0);
		localStorage.setItem('InSecPl4', 1);
		localStorage.setItem('lvl4', 1);
		localStorage.setItem('exp4', 0);
		localStorage.setItem('lvlUp4', 10);
		localStorage.setItem('MonX3_4', 300);
		localStorage.setItem('MonX2_4', 200);
		localStorage.setItem('MonX1_4', 100);
		localStorage.setItem('BotRab4', 0);
		localStorage.setItem('SummaBot4', 0);


		// бот 5 
		localStorage.setItem('Money5', 0);
		localStorage.setItem('InSecPl5', 1);
		localStorage.setItem('lvl5', 1);
		localStorage.setItem('exp5', 0);
		localStorage.setItem('lvlUp5', 10);
		localStorage.setItem('MonX3_5', 300);
		localStorage.setItem('MonX2_5', 200);
		localStorage.setItem('MonX1_5', 100);
		localStorage.setItem('BotRab5', 0);
		localStorage.setItem('SummaBot5', 0);



	}

}		
function Work_Player(){
			localStorage.bank = parseInt(localStorage.bank) + 1;
			localStorage.exp = parseInt(localStorage.exp) + 1;
			
		 
		}
function F_worker_1(){
	if (localStorage.bank >= parseInt(localStorage.MonX1)) {
		
		localStorage.bank = parseInt(localStorage.bank) - parseInt(localStorage.MonX1);
		localStorage.MonX1 = parseInt(localStorage.MonX1) * SumUpMn;
		document.getElementById('StoimostDobihu_1').innerHTML = parseInt(localStorage.MonX1) + "<br>" + " Добыча + 1 ₽";
		

		
		
		localStorage.worker_1 = parseInt(localStorage.worker_1) + 1;
		localStorage.secent_1 = parseInt(localStorage.worker_1) * 1;

		localStorage.exp = parseInt(localStorage.exp) + 1;

	}
}
function F_worker_1_S(){
	localStorage.bank = parseInt(localStorage.bank) + parseInt(localStorage.secent_1)
	
}

function F_worker_3(){
	if (localStorage.bank >= parseInt(localStorage.MonX2)) {
		localStorage.bank = parseInt(localStorage.bank) - parseInt(localStorage.MonX2);
		localStorage.MonX2 = parseInt(localStorage.MonX2) * SumUpMn;
		document.getElementById('StoimostDobihu_2').innerHTML = parseInt(localStorage.MonX2) + "<br>" + " Добыча + 3 ₽";
		localStorage.worker_3 = parseInt(localStorage.worker_3) + 1;
		localStorage.secent_3 = parseInt(localStorage.worker_3) * 3;

		localStorage.exp = parseInt(localStorage.exp) + 2;
	}
}
function F_worker_3_S(){
	localStorage.bank = parseInt(localStorage.bank) + parseInt(localStorage.secent_3)
}
function F_worker_5(){
	if (localStorage.bank >= parseInt(localStorage.MonX3)) {
		localStorage.bank = parseInt(localStorage.bank) - parseInt(localStorage.MonX3);
		localStorage.MonX3 = parseInt(localStorage.MonX3) * SumUpMn;
		document.getElementById('StoimostDobihu_3').innerHTML = parseInt(localStorage.MonX3) + "<br>" + " Добыча + 5 ₽";
		localStorage.worker_5 = parseInt(localStorage.worker_5) + 1;
		localStorage.secent_5 = parseInt(localStorage.worker_5) * 5;

		localStorage.exp = parseInt(localStorage.exp) + 3;
	}
}
function F_worker_5_S(){
	localStorage.bank = parseInt(localStorage.bank) + parseInt(localStorage.secent_5)
}
function recovery(){
	localStorage.clear();
	Game();
}

//Боты
function BotsUpdate(){
	// Бот1
	document.getElementById('L-C2-p').innerHTML = parseInt(localStorage.lvl2);
	localStorage.setItem('SummaBot2', 0);
	localStorage.SummaBot2 = ((parseInt(localStorage.Money2) + parseInt(localStorage.InSecPl2)) * 2 * parseInt(localStorage.lvl2) + 5000);
	document.getElementById('S-C2-p').innerHTML = "Стоимость компании " + (parseInt(localStorage.SummaBot2)) + " ₽";
	document.getElementById('C-M2-p').innerHTML = "Рабочих " + parseInt(localStorage.BotRab2);


	localStorage.exp2 = parseInt(localStorage.exp2) + 1;
		if (localStorage.exp2 >= parseInt(localStorage.lvlUp2)) {
			localStorage.lvl2 = parseInt(localStorage.lvl2) + 1
			localStorage.lvlUp2 = parseInt(localStorage.lvlUp2) * lvlUpMn;
			localStorage.lvlUp2 = Math.floor(parseInt(localStorage.lvlUp2));

		}
		localStorage.Money2 = parseInt(localStorage.Money2) + parseInt(localStorage.InSecPl2);
		if (localStorage.Money2 >= parseInt(localStorage.MonX3_2)) {
				if (localStorage.Money2 >= (parseInt(localStorage.MonX3_2) * 5)) {
					if (localStorage.Money2 >= (parseInt(localStorage.MonX3_2) * 10)) {
						if (localStorage.Money2 >= (parseInt(localStorage.MonX3_2) * 100)) {
							if (localStorage.Money2 >= (parseInt(localStorage.MonX3_2) * 1000)) {
								localStorage.Money2 = parseInt(localStorage.Money2) -  (parseInt(localStorage.MonX3_2)*1000)
	                			localStorage.InSecPl2 = parseInt(localStorage.InSecPl2) +(5*1000)
								localStorage.MonX3_2 = parseInt(localStorage.MonX3_2) * SumUpMn
								localStorage.BotRab2 = parseInt(localStorage.BotRab2) + 1000
							}

							else{
	                			localStorage.Money2 = parseInt(localStorage.Money2) -  (parseInt(localStorage.MonX3_2)*100)
	                			localStorage.InSecPl2 = parseInt(localStorage.InSecPl2) +(5*100)
	            				localStorage.MonX3_2 = parseInt(localStorage.MonX3_2) * SumUpMn
	            				localStorage.BotRab2 = parseInt(localStorage.BotRab2) + 100
	            				}
							}
						else{
	                		localStorage.Money2 = parseInt(localStorage.Money2) -  (parseInt(localStorage.MonX3_2)*10)
	                		localStorage.InSecPl2 = parseInt(localStorage.InSecPl2) +(5*10)
	                		localStorage.MonX3_2 = parseInt(localStorage.MonX3_2) * SumUpMn
	            			localStorage.BotRab2 = parseInt(localStorage.BotRab2) + 10
	            			}
					
						}
					else{
	                	localStorage.Money2 = parseInt(localStorage.Money2) -  (parseInt(localStorage.MonX3_2)*5)
	                	localStorage.InSecPl2 = parseInt(localStorage.InSecPl2) +(5*5)
	                	localStorage.MonX3_2 = parseInt(localStorage.MonX3_2) * SumUpMn
	            		localStorage.BotRab2 = parseInt(localStorage.BotRab2) + 5
	            		}

				}

				else{
	                localStorage.Money2 = parseInt(localStorage.Money2) -  parseInt(localStorage.MonX3_2)
	                localStorage.InSecPl2 = parseInt(localStorage.InSecPl2) +5
	                localStorage.MonX3_2 = parseInt(localStorage.MonX3_2) * SumUpMn
	                localStorage.BotRab2 = parseInt(localStorage.BotRab2) + 1

	            }
	          
		}
		else if (localStorage.Money2 >= parseInt(localStorage.MonX2_2)) {
			if (localStorage.Money2 >= (parseInt(localStorage.MonX2_2) * 5)) {
				if (localStorage.Money2 >= (parseInt(localStorage.MonX2_2) * 10)) {
					if (localStorage.Money2 >= (parseInt(localStorage.MonX2_2) * 100)) {
						if (localStorage.Money2 >= (parseInt(localStorage.MonX2_2) * 100)) {
							localStorage.Money2 = parseInt(localStorage.Money2) -  (parseInt(localStorage.MonX2_2)*1000)
                			localStorage.InSecPl2 = parseInt(localStorage.InSecPl2) +(3*1000)
							localStorage.MonX2_2 = parseInt(localStorage.MonX2_2) * SumUpMn
							localStorage.BotRab2 = parseInt(localStorage.BotRab2) + 1000
							}
						else{
                			localStorage.Money2 = parseInt(localStorage.Money2) -  (parseInt(localStorage.MonX2_2)*100)
                			localStorage.InSecPl2 = parseInt(localStorage.InSecPl2) +(3*100)
            				localStorage.MonX2_2 = parseInt(localStorage.MonX2_2) * SumUpMn
            				localStorage.BotRab2 = parseInt(localStorage.BotRab2) + 100
            				}
						}
					else{
                		localStorage.Money2 = parseInt(localStorage.Money2) -  (parseInt(localStorage.MonX2_2)*10)
                		localStorage.InSecPl2 = parseInt(localStorage.InSecPl2) +(3*10)
            			localStorage.MonX2_2 = parseInt(localStorage.MonX2_2) * SumUpMn
            			localStorage.BotRab2 = parseInt(localStorage.BotRab2) + 10
            			}
					}
				else{
                	localStorage.Money2 = parseInt(localStorage.Money2) -  (parseInt(localStorage.MonX2_2)*5)
                	localStorage.InSecPl2 = parseInt(localStorage.InSecPl2) +(3*5)
            		localStorage.MonX2_2 = parseInt(localStorage.MonX2_2) * SumUpMn
            		localStorage.BotRab2 = parseInt(localStorage.BotRab2) + 5
            		}
			}
			else{
                localStorage.Money2 = parseInt(localStorage.Money2) -  parseInt(localStorage.MonX2_2)
                localStorage.InSecPl2 = parseInt(localStorage.InSecPl2) +3
                localStorage.MonX2_2 = parseInt(localStorage.MonX2_2) * SumUpMn
            	localStorage.BotRab2 = parseInt(localStorage.BotRab2) + 1
            }
		}
		else if (localStorage.Money2 >= parseInt(localStorage.MonX1_2)) {
			if (localStorage.Money2 >= (parseInt(localStorage.MonX1_2) * 5)) {
				if (localStorage.Money2 >= (parseInt(localStorage.MonX1_2) * 10)) {
					if (localStorage.Money2 >= (parseInt(localStorage.MonX1_2) * 100)) {
						if (localStorage.Money2 >= (parseInt(localStorage.MonX1_2) * 100)) {
							localStorage.Money2 = parseInt(localStorage.Money2) -  (parseInt(localStorage.MonX1_2)*1000)
                			localStorage.InSecPl2 = parseInt(localStorage.InSecPl2) +(1*1000)
							localStorage.MonX1_2 = parseInt(localStorage.MonX1_2) * SumUpMn
							localStorage.BotRab2 = parseInt(localStorage.BotRab2) + 1000
						}	
						else{
                			localStorage.Money2 = parseInt(localStorage.Money2) -  (parseInt(localStorage.MonX1_2)*100)
                			localStorage.InSecPl2 = parseInt(localStorage.InSecPl2) +(1*100)
            				localStorage.MonX1_2 = parseInt(localStorage.MonX1_2) * SumUpMn
            				localStorage.BotRab2 = parseInt(localStorage.BotRab2) + 100
            				}
						}
					else{
                		localStorage.Money2 = parseInt(localStorage.Money2) -  (parseInt(localStorage.MonX1_2)*10)
                		localStorage.InSecPl2 = parseInt(localStorage.InSecPl2) +(1*10)
            			localStorage.MonX1_2 = parseInt(localStorage.MonX1_2) * SumUpMn
            			localStorage.BotRab2 = parseInt(localStorage.BotRab2) + 10
            			}
					}
				else{
                	localStorage.Money2 = parseInt(localStorage.Money2) -  (parseInt(localStorage.MonX1_2)*5)
                	localStorage.InSecPl2 = parseInt(localStorage.InSecPl2) +(1*5)
            		localStorage.MonX1_2 = parseInt(localStorage.MonX1_2) * SumUpMn
            		localStorage.BotRab2 = parseInt(localStorage.BotRab2) + 5
            		
            		}
			}
			else{
                localStorage.Money2 = parseInt(localStorage.Money2) -  parseInt(localStorage.MonX1_2)
                localStorage.InSecPl2 = parseInt(localStorage.InSecPl2) +1
                localStorage.MonX1_2 = parseInt(localStorage.MonX1_2) * SumUpMn
            	localStorage.BotRab2 = parseInt(localStorage.BotRab2) + 1
            	
            }
		}
	// Бот2
	document.getElementById('L-C3-p').innerHTML = parseInt(localStorage.lvl3);
	localStorage.SummaBot3 =  ((parseInt(localStorage.Money3) + parseInt(localStorage.InSecPl3)) * 2 *  parseInt(localStorage.lvl3) + 10000)
	document.getElementById('S-C3-p').innerHTML = "Стоимость компании " + parseInt(localStorage.SummaBot3) + " ₽";
	document.getElementById('C-M3-p').innerHTML = "Рабочих " + parseInt(localStorage.BotRab3);		
	localStorage.exp3 = parseInt(localStorage.exp3) + 2;
		if (localStorage.exp3 >= parseInt(localStorage.lvlUp3)) {
			localStorage.lvl3 = parseInt(localStorage.lvl3) + 1
			localStorage.lvlUp3 = parseInt(localStorage.lvlUp3) * lvlUpMn;
			localStorage.lvlUp3 = Math.floor(parseInt(localStorage.lvlUp3));

		}
		localStorage.Money3 = (parseInt(localStorage.Money3) + parseInt(localStorage.InSecPl3)) * 1.05;
		if (localStorage.Money3 >= parseInt(localStorage.MonX3_3)) {
				if (localStorage.Money3 >= (parseInt(localStorage.MonX3_3) * 5)) {
					if (localStorage.Money3 >= (parseInt(localStorage.MonX3_3) * 10)) {
						if (localStorage.Money3 >= (parseInt(localStorage.MonX3_3) * 100)) {
							if (localStorage.Money3 >= (parseInt(localStorage.MonX3_3) * 1000)) {
								localStorage.Money3 = parseInt(localStorage.Money3) -  (parseInt(localStorage.MonX3_2)*1000)
	                			localStorage.InSecPl3 = parseInt(localStorage.InSecPl3) +(5*1000)
								localStorage.MonX3_3 = parseInt(localStorage.MonX3_3) * SumUpMn
								localStorage.BotRab3 = parseInt(localStorage.BotRab3) + 1000
							}

							else{
	                			localStorage.Money3 = parseInt(localStorage.Money3) -  (parseInt(localStorage.MonX3_2)*100)
	                			localStorage.InSecPl3 = parseInt(localStorage.InSecPl3) +(5*100)
	            				localStorage.MonX3_3 = parseInt(localStorage.MonX3_3) * SumUpMn
	            				localStorage.BotRab3 = parseInt(localStorage.BotRab3) + 100
	            				}
							}
						else{
	                		localStorage.Money3 = parseInt(localStorage.Money3) -  (parseInt(localStorage.MonX3_3)*10)
	                		localStorage.InSecPl3 = parseInt(localStorage.InSecPl3) +(5*10)
	                		localStorage.MonX3_3 = parseInt(localStorage.MonX3_3) * SumUpMn
	            			localStorage.BotRab3 = parseInt(localStorage.BotRab3) + 10
	            			}
					
						}
					else{
	                	localStorage.Money3 = parseInt(localStorage.Money3) -  (parseInt(localStorage.MonX3_3)*5)
	                	localStorage.InSecPl3 = parseInt(localStorage.InSecPl3) +(5*5)
	                	localStorage.MonX3_3 = parseInt(localStorage.MonX3_3) * SumUpMn
	            		localStorage.BotRab3 = parseInt(localStorage.BotRab3) + 5
	            		}

				}

				else{
	                localStorage.Money3 = parseInt(localStorage.Money3) -  parseInt(localStorage.MonX3_3)
	                localStorage.InSecPl3 = parseInt(localStorage.InSecPl3) +5
	                localStorage.MonX3_3 = parseInt(localStorage.MonX3_3) * SumUpMn
	                localStorage.BotRab3 = parseInt(localStorage.BotRab3) + 1

	            }
	          
		}
		else if (localStorage.Money3 >= parseInt(localStorage.MonX2_3)) {
			if (localStorage.Money3 >= (parseInt(localStorage.MonX2_3) * 5)) {
				if (localStorage.Money3 >= (parseInt(localStorage.MonX2_3) * 10)) {
					if (localStorage.Money3 >= (parseInt(localStorage.MonX2_3) * 100)) {
						if (localStorage.Money3 >= (parseInt(localStorage.MonX2_3) * 100)) {
							localStorage.Money3 = parseInt(localStorage.Money3) -  (parseInt(localStorage.MonX2_2)*1000)
                			localStorage.InSecPl3 = parseInt(localStorage.InSecPl3) +(3*1000)
							localStorage.MonX2_3 = parseInt(localStorage.MonX2_3) * SumUpMn
							localStorage.BotRab3 = parseInt(localStorage.BotRab3) + 1000
							}
						else{
                			localStorage.Money3 = parseInt(localStorage.Money3) -  (parseInt(localStorage.MonX2_3)*100)
                			localStorage.InSecPl3 = parseInt(localStorage.InSecPl3) +(3*100)
            				localStorage.MonX2_3 = parseInt(localStorage.MonX2_3) * SumUpMn
            				localStorage.BotRab3 = parseInt(localStorage.BotRab3) + 100
            				}
						}
					else{
                		localStorage.Money3 = parseInt(localStorage.Money3) -  (parseInt(localStorage.MonX2_3)*10)
                		localStorage.InSecPl3 = parseInt(localStorage.InSecPl3) +(3*10)
            			localStorage.MonX2_3 = parseInt(localStorage.MonX2_3) * SumUpMn
            			localStorage.BotRab3 = parseInt(localStorage.BotRab3) + 10
            			}
					}
				else{
                	localStorage.Money3 = parseInt(localStorage.Money3) -  (parseInt(localStorage.MonX2_3)*5)
                	localStorage.InSecPl3 = parseInt(localStorage.InSecPl3) +(3*5)
            		localStorage.MonX2_3 = parseInt(localStorage.MonX2_3) * SumUpMn
            		localStorage.BotRab3 = parseInt(localStorage.BotRab3) + 5
            		}
			}
			else{
                localStorage.Money3 = parseInt(localStorage.Money3) -  parseInt(localStorage.MonX2_2)
                localStorage.InSecPl3 = parseInt(localStorage.InSecPl3) +3
                localStorage.MonX2_3 = parseInt(localStorage.MonX2_3) * SumUpMn
            	localStorage.BotRab3 = parseInt(localStorage.BotRab3) + 1
            }
		}
		else if (localStorage.Money3 >= parseInt(localStorage.MonX1_3)) {
			if (localStorage.Money3 >= (parseInt(localStorage.MonX1_3) * 5)) {
				if (localStorage.Money3 >= (parseInt(localStorage.MonX1_3) * 10)) {
					if (localStorage.Money3 >= (parseInt(localStorage.MonX1_3) * 100)) {
						if (localStorage.Money3 >= (parseInt(localStorage.MonX1_3) * 100)) {
							localStorage.Money3 = parseInt(localStorage.Money3) -  (parseInt(localStorage.MonX1_3)*1000)
                			localStorage.InSecPl3 = parseInt(localStorage.InSecPl3) +(1*1000)
							localStorage.MonX1_3 = parseInt(localStorage.MonX1_3) * SumUpMn
							localStorage.BotRab3 = parseInt(localStorage.BotRab3) + 1000
						}	
						else{
                			localStorage.Money3 = parseInt(localStorage.Money3) -  (parseInt(localStorage.MonX1_3)*100)
                			localStorage.InSecPl3 = parseInt(localStorage.InSecPl3) +(1*100)
            				localStorage.MonX1_3 = parseInt(localStorage.MonX1_3) * SumUpMn
            				localStorage.BotRab3 = parseInt(localStorage.BotRab3) + 100
            				}
						}
					else{
                		localStorage.Money3 = parseInt(localStorage.Money3) -  (parseInt(localStorage.MonX1_3)*10)
                		localStorage.InSecPl3 = parseInt(localStorage.InSecPl3) +(1*10)
            			localStorage.MonX1_3 = parseInt(localStorage.MonX1_3) * SumUpMn
            			localStorage.BotRab3 = parseInt(localStorage.BotRab3) + 10
            			}
					}
				else{
                	localStorage.Money3 = parseInt(localStorage.Money3) -  (parseInt(localStorage.MonX1_3)*5)
                	localStorage.InSecPl3 = parseInt(localStorage.InSecPl3) +(1*5)
            		localStorage.MonX1_3 = parseInt(localStorage.MonX1_3) * SumUpMn
            		localStorage.BotRab3 = parseInt(localStorage.BotRab3) + 5
            		
            		}
			}
			else{
                localStorage.Money3 = parseInt(localStorage.Money3) -  parseInt(localStorage.MonX1_3)
                localStorage.InSecPl3 = parseInt(localStorage.InSecPl3) +1
                localStorage.MonX1_3 = parseInt(localStorage.MonX1_3) * SumUpMn
            	localStorage.BotRab3 = parseInt(localStorage.BotRab3) + 1
            	
            }
		}
	//Бот 3
	document.getElementById('L-C4-p').innerHTML = parseInt(localStorage.lvl4);
	localStorage.SummaBot4 = ((parseInt(localStorage.Money4) + parseInt(localStorage.InSecPl4)) * 2 * parseInt(localStorage.lvl4) + 15000)
	document.getElementById('S-C4-p').innerHTML = "Стоимость компании " + parseInt(localStorage.SummaBot4) + " ₽";
	document.getElementById('C-M4-p').innerHTML = "Рабочих " + parseInt(localStorage.BotRab4);


	localStorage.exp4 = parseInt(localStorage.exp4) + 3;
		if (localStorage.exp4 >= parseInt(localStorage.lvlUp4)) {
			localStorage.lvl4 = parseInt(localStorage.lvl4) + 1
			localStorage.lvlUp4 = parseInt(localStorage.lvlUp4) * lvlUpMn;
			localStorage.lvlUp4 = Math.floor(parseInt(localStorage.lvlUp4));

		}
		localStorage.Money4 = (parseInt(localStorage.Money4) + parseInt(localStorage.InSecPl4))*1.1;
		if (localStorage.Money4 >= parseInt(localStorage.MonX3_4)) {
				if (localStorage.Money4 >= (parseInt(localStorage.MonX3_4) * 5)) {
					if (localStorage.Money4 >= (parseInt(localStorage.MonX3_4) * 10)) {
						if (localStorage.Money4 >= (parseInt(localStorage.MonX3_4) * 100)) {
							if (localStorage.Money4 >= (parseInt(localStorage.MonX3_4) * 1000)) {
								localStorage.Money4 = parseInt(localStorage.Money4) -  (parseInt(localStorage.MonX3_4)*1000)
	                			localStorage.InSecPl4 = parseInt(localStorage.InSecPl4) +(5*1000)
								localStorage.MonX3_4 = parseInt(localStorage.MonX3_4) * SumUpMn
								localStorage.BotRab4 = parseInt(localStorage.BotRab4) + 1000
							}

							else{
	                			localStorage.Money4 = parseInt(localStorage.Money4) -  (parseInt(localStorage.MonX3_4)*100)
	                			localStorage.InSecPl4 = parseInt(localStorage.InSecPl4) +(5*100)
	            				localStorage.MonX3_4 = parseInt(localStorage.MonX3_4) * SumUpMn
	            				localStorage.BotRab4 = parseInt(localStorage.BotRab4) + 100
	            				}
							}
						else{
	                		localStorage.Money4 = parseInt(localStorage.Money4) -  (parseInt(localStorage.MonX3_4)*10)
	                		localStorage.InSecPl4 = parseInt(localStorage.InSecPl4) +(5*10)
	                		localStorage.MonX3_4 = parseInt(localStorage.MonX3_4) * SumUpMn
	            			localStorage.BotRab4 = parseInt(localStorage.BotRab4) + 10
	            			}
					
						}
					else{
	                	localStorage.Money4 = parseInt(localStorage.Money4) -  (parseInt(localStorage.MonX3_4)*5)
	                	localStorage.InSecPl4 = parseInt(localStorage.InSecPl4) +(5*5)
	                	localStorage.MonX3_4 = parseInt(localStorage.MonX3_4) * SumUpMn
	            		localStorage.BotRab4 = parseInt(localStorage.BotRab4) + 5
	            		}

				}

				else{
	                localStorage.Money4 = parseInt(localStorage.Money4) -  parseInt(localStorage.MonX3_4)
	                localStorage.InSecPl4 = parseInt(localStorage.InSecPl4) +5
	                localStorage.MonX3_4 = parseInt(localStorage.MonX3_4) * SumUpMn
	                localStorage.BotRab4 = parseInt(localStorage.BotRab4) + 1

	            }
	          
		}
		else if (localStorage.Money4 >= parseInt(localStorage.MonX2_4)) {
			if (localStorage.Money4 >= (parseInt(localStorage.MonX2_4) * 5)) {
				if (localStorage.Money4 >= (parseInt(localStorage.MonX2_4) * 10)) {
					if (localStorage.Money4 >= (parseInt(localStorage.MonX2_4) * 100)) {
						if (localStorage.Money4 >= (parseInt(localStorage.MonX2_4) * 100)) {
							localStorage.Money4 = parseInt(localStorage.Money4) -  (parseInt(localStorage.MonX2_4)*1000)
                			localStorage.InSecPl4 = parseInt(localStorage.InSecPl4) +(3*1000)
							localStorage.MonX2_4 = parseInt(localStorage.MonX2_4) * SumUpMn
							localStorage.BotRab4 = parseInt(localStorage.BotRab4) + 1000
							}
						else{
                			localStorage.Money4 = parseInt(localStorage.Money4) -  (parseInt(localStorage.MonX2_4)*100)
                			localStorage.InSecPl4 = parseInt(localStorage.InSecPl4) +(3*100)
            				localStorage.MonX2_4 = parseInt(localStorage.MonX2_4) * SumUpMn
            				localStorage.BotRab4 = parseInt(localStorage.BotRab4) + 100
            				}
						}
					else{
                		localStorage.Money4 = parseInt(localStorage.Money4) -  (parseInt(localStorage.MonX2_4)*10)
                		localStorage.InSecPl4 = parseInt(localStorage.InSecPl4) +(3*10)
            			localStorage.MonX2_4 = parseInt(localStorage.MonX2_4) * SumUpMn
            			localStorage.BotRab4 = parseInt(localStorage.BotRab4) + 10
            			}
					}
				else{
                	localStorage.Money4 = parseInt(localStorage.Money4) -  (parseInt(localStorage.MonX2_4)*5)
                	localStorage.InSecPl4 = parseInt(localStorage.InSecPl4) +(3*5)
            		localStorage.MonX2_4 = parseInt(localStorage.MonX2_4) * SumUpMn
            		localStorage.BotRab4 = parseInt(localStorage.BotRab4) + 5
            		}
			}
			else{
                localStorage.Money4 = parseInt(localStorage.Money4) -  parseInt(localStorage.MonX2_4)
                localStorage.InSecPl4 = parseInt(localStorage.InSecPl4) +3
                localStorage.MonX2_4 = parseInt(localStorage.MonX2_4) * SumUpMn
            	localStorage.BotRab4 = parseInt(localStorage.BotRab4) + 1
            }
		}
		else if (localStorage.Money4 >= parseInt(localStorage.MonX1_4)) {
			if (localStorage.Money4 >= (parseInt(localStorage.MonX1_4) * 5)) {
				if (localStorage.Money4 >= (parseInt(localStorage.MonX1_4) * 10)) {
					if (localStorage.Money4 >= (parseInt(localStorage.MonX1_4) * 100)) {
						if (localStorage.Money4 >= (parseInt(localStorage.MonX1_4) * 100)) {
							localStorage.Money4 = parseInt(localStorage.Money4) -  (parseInt(localStorage.MonX1_4)*1000)
                			localStorage.InSecPl4 = parseInt(localStorage.InSecPl4) +(1*1000)
							localStorage.MonX1_4 = parseInt(localStorage.MonX1_4) * SumUpMn
							localStorage.BotRab4 = parseInt(localStorage.BotRab4) + 1000
						}	
						else{
                			localStorage.Money4 = parseInt(localStorage.Money4) -  (parseInt(localStorage.MonX1_4)*100)
                			localStorage.InSecPl4 = parseInt(localStorage.InSecPl4) +(1*100)
            				localStorage.MonX1_4 = parseInt(localStorage.MonX1_4) * SumUpMn
            				localStorage.BotRab4 = parseInt(localStorage.BotRab4) + 100
            				}
						}
					else{
                		localStorage.Money4 = parseInt(localStorage.Money4) -  (parseInt(localStorage.MonX1_4)*10)
                		localStorage.InSecPl4 = parseInt(localStorage.InSecPl4) +(1*10)
            			localStorage.MonX1_4 = parseInt(localStorage.MonX1_4) * SumUpMn
            			localStorage.BotRab4 = parseInt(localStorage.BotRab4) + 10
            			}
					}
				else{
                	localStorage.Money4 = parseInt(localStorage.Money4) -  (parseInt(localStorage.MonX1_4)*5)
                	localStorage.InSecPl4 = parseInt(localStorage.InSecPl4) +(1*5)
            		localStorage.MonX1_4 = parseInt(localStorage.MonX1_4) * SumUpMn
            		localStorage.BotRab4 = parseInt(localStorage.BotRab4) + 5
            		
            		}
			}
			else{
                localStorage.Money4 = parseInt(localStorage.Money4) -  parseInt(localStorage.MonX1_4)
                localStorage.InSecPl4 = parseInt(localStorage.InSecPl4) +1
                localStorage.MonX1_4 = parseInt(localStorage.MonX1_4) * SumUpMn
            	localStorage.BotRab4 = parseInt(localStorage.BotRab4) + 1
            	
            }
		}
	//Бот 4
	document.getElementById('L-C5-p').innerHTML = parseInt(localStorage.lvl5);
	localStorage.SummaBot5 = ((parseInt(localStorage.Money5) + parseInt(localStorage.InSecPl5)) * 2 * parseInt(localStorage.lvl5) + 25000)
	document.getElementById('S-C5-p').innerHTML = "Стоимость компании " + parseInt(localStorage.SummaBot5) + " ₽";
	document.getElementById('C-M5-p').innerHTML = "Рабочих " + parseInt(localStorage.BotRab5);


	localStorage.exp5 = parseInt(localStorage.exp5) + 4;
		if (localStorage.exp5 >= parseInt(localStorage.lvlUp5)) {
			localStorage.lvl5 = parseInt(localStorage.lvl5) + 1
			localStorage.lvlUp5 = parseInt(localStorage.lvlUp5) * lvlUpMn;
			localStorage.lvlUp5 = Math.floor(parseInt(localStorage.lvlUp5));

		}
		localStorage.Money5 = (parseInt(localStorage.Money5) + parseInt(localStorage.InSecPl5))*1.2;
		if (localStorage.Money5 >= parseInt(localStorage.MonX3_5)) {
				if (localStorage.Money5 >= (parseInt(localStorage.MonX3_5) * 5)) {
					if (localStorage.Money5 >= (parseInt(localStorage.MonX3_5) * 10)) {
						if (localStorage.Money5 >= (parseInt(localStorage.MonX3_5) * 100)) {
							if (localStorage.Money5 >= (parseInt(localStorage.MonX3_5) * 1000)) {
								localStorage.Money5 = parseInt(localStorage.Money5) -  (parseInt(localStorage.MonX3_5)*1000)
	                			localStorage.InSecPl5 = parseInt(localStorage.InSecPl5) +(5*1000)
								localStorage.MonX3_5 = parseInt(localStorage.MonX3_5) * SumUpMn
								localStorage.BotRab5 = parseInt(localStorage.BotRab5) + 1000
							}

							else{
	                			localStorage.Money5 = parseInt(localStorage.Money5) -  (parseInt(localStorage.MonX3_5)*100)
	                			localStorage.InSecPl5 = parseInt(localStorage.InSecPl5) +(5*100)
	            				localStorage.MonX3_5 = parseInt(localStorage.MonX3_5) * SumUpMn
	            				localStorage.BotRab5 = parseInt(localStorage.BotRab5) + 100
	            				}
							}
						else{
	                		localStorage.Money5 = parseInt(localStorage.Money5) -  (parseInt(localStorage.MonX3_5)*10)
	                		localStorage.InSecPl5 = parseInt(localStorage.InSecPl5) +(5*10)
	                		localStorage.MonX3_5 = parseInt(localStorage.MonX3_5) * SumUpMn
	            			localStorage.BotRab5 = parseInt(localStorage.BotRab5) + 10
	            			}
					
						}
					else{
	                	localStorage.Money5 = parseInt(localStorage.Money5) -  (parseInt(localStorage.MonX3_5)*5)
	                	localStorage.InSecPl5 = parseInt(localStorage.InSecPl5) +(5*5)
	                	localStorage.MonX3_5 = parseInt(localStorage.MonX3_5) * SumUpMn
	            		localStorage.BotRab5 = parseInt(localStorage.BotRab5) + 5
	            		}

				}

				else{
	                localStorage.Money5 = parseInt(localStorage.Money5) -  parseInt(localStorage.MonX3_5)
	                localStorage.InSecPl5 = parseInt(localStorage.InSecPl5) +5
	                localStorage.MonX3_5 = parseInt(localStorage.MonX3_5) * SumUpMn
	                localStorage.BotRab5 = parseInt(localStorage.BotRab5) + 1

	            }
	          
		}
		else if (localStorage.Money5 >= parseInt(localStorage.MonX2_5)) {
			if (localStorage.Money5 >= (parseInt(localStorage.MonX2_5) * 5)) {
				if (localStorage.Money5 >= (parseInt(localStorage.MonX2_5) * 10)) {
					if (localStorage.Money5 >= (parseInt(localStorage.MonX2_5) * 100)) {
						if (localStorage.Money5 >= (parseInt(localStorage.MonX2_5) * 100)) {
							localStorage.Money5 = parseInt(localStorage.Money5) -  (parseInt(localStorage.MonX2_5)*1000)
                			localStorage.InSecPl5 = parseInt(localStorage.InSecPl5) +(3*1000)
							localStorage.MonX2_5 = parseInt(localStorage.MonX2_5) * SumUpMn
							localStorage.BotRab5 = parseInt(localStorage.BotRab5) + 1000
							}
						else{
                			localStorage.Money5 = parseInt(localStorage.Money5) -  (parseInt(localStorage.MonX2_5)*100)
                			localStorage.InSecPl5 = parseInt(localStorage.InSecPl5) +(3*100)
            				localStorage.MonX2_5 = parseInt(localStorage.MonX2_5) * SumUpMn
            				localStorage.BotRab5 = parseInt(localStorage.BotRab5) + 100
            				}
						}
					else{
                		localStorage.Money5 = parseInt(localStorage.Money5) -  (parseInt(localStorage.MonX2_5)*10)
                		localStorage.InSecPl5 = parseInt(localStorage.InSecPl5) +(3*10)
            			localStorage.MonX2_5 = parseInt(localStorage.MonX2_5) * SumUpMn
            			localStorage.BotRab5 = parseInt(localStorage.BotRab5) + 10
            			}
					}
				else{
                	localStorage.Money5 = parseInt(localStorage.Money5) -  (parseInt(localStorage.MonX2_5)*5)
                	localStorage.InSecPl5 = parseInt(localStorage.InSecPl5) +(3*5)
            		localStorage.MonX2_5 = parseInt(localStorage.MonX2_5) * SumUpMn
            		localStorage.BotRab5 = parseInt(localStorage.BotRab5) + 5
            		}
			}
			else{
                localStorage.Money5 = parseInt(localStorage.Money5) -  parseInt(localStorage.MonX2_5)
                localStorage.InSecPl5 = parseInt(localStorage.InSecPl5) +3
                localStorage.MonX2_5 = parseInt(localStorage.MonX2_5) * SumUpMn
            	localStorage.BotRab5 = parseInt(localStorage.BotRab5) + 1
            }
		}
		else if (localStorage.Money5 >= parseInt(localStorage.MonX1_5)) {
			if (localStorage.Money5 >= (parseInt(localStorage.MonX1_5) * 5)) {
				if (localStorage.Money5 >= (parseInt(localStorage.MonX1_5) * 10)) {
					if (localStorage.Money5 >= (parseInt(localStorage.MonX1_5) * 100)) {
						if (localStorage.Money5 >= (parseInt(localStorage.MonX1_5) * 100)) {
							localStorage.Money5 = parseInt(localStorage.Money5) -  (parseInt(localStorage.MonX1_5)*1000)
                			localStorage.InSecPl5 = parseInt(localStorage.InSecPl5) +(1*1000)
							localStorage.MonX1_5 = parseInt(localStorage.MonX1_5) * SumUpMn
							localStorage.BotRab5 = parseInt(localStorage.BotRab5) + 1000
						}	
						else{
                			localStorage.Money5 = parseInt(localStorage.Money5) -  (parseInt(localStorage.MonX1_5)*100)
                			localStorage.InSecPl5 = parseInt(localStorage.InSecPl5) +(1*100)
            				localStorage.MonX1_5 = parseInt(localStorage.MonX1_5) * SumUpMn
            				localStorage.BotRab5 = parseInt(localStorage.BotRab5) + 100
            				}
						}
					else{
                		localStorage.Money5 = parseInt(localStorage.Money5) -  (parseInt(localStorage.MonX1_5)*10)
                		localStorage.InSecPl5 = parseInt(localStorage.InSecPl5) +(1*10)
            			localStorage.MonX1_5 = parseInt(localStorage.MonX1_5) * SumUpMn
            			localStorage.BotRab5 = parseInt(localStorage.BotRab5) + 10
            			}
					}
				else{
                	localStorage.Money5 = parseInt(localStorage.Money5) -  (parseInt(localStorage.MonX1_5)*5)
                	localStorage.InSecPl5 = parseInt(localStorage.InSecPl5) +(1*5)
            		localStorage.MonX1_5 = parseInt(localStorage.MonX1_5) * SumUpMn
            		localStorage.BotRab5 = parseInt(localStorage.BotRab5) + 5
            		
            		}
			}
			else{
                localStorage.Money5 = parseInt(localStorage.Money5) -  parseInt(localStorage.MonX1_5)
                localStorage.InSecPl5 = parseInt(localStorage.InSecPl5) +1
                localStorage.MonX1_5 = parseInt(localStorage.MonX1_5) * SumUpMn
            	localStorage.BotRab5 = parseInt(localStorage.BotRab5) + 1
            	
            }
		}
}

