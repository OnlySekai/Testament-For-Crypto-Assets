class Contract {
	let addressContract;
	let addressOwner;
	let timeLeft;
	let total;
	let remain;
	constructor(addressContract){
		this.addressContract=addressContract;
	}
	addressOwner=getOwner(addressContract);
	timeLeft=getTime(addressContract);
	total=getTotal;
	remain=getRemain;
	const Beneficiaris= getBeneficiaris().split(` `);
	getOwner(addressContract){
		
	}
	getTime(addressContract){

	}
	getTotal(addressContract){

	}
	getRemain(addressContract){

	}
	//String split by ' ', split it to beneficiaris
	getBeneficiaris(addressContract){

	}
	rollUp(){

	}
	executeTestament(){

	}
	withdraw(){

	}
	sendEth(){

	}

}

class IoDatabase{
	let record={addressContract:0,timeLeft:0};
	readData(){
		//read from StillLive.txt and write to Testament active 
	}
	modifiedData(){
		//write or remove record
	}
}

class InteractContract{
	contract=new Contract(addressContract);
	//write details about contract
	updateContract(){
		//modified beneficiaries
	}
}