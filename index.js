
const provider = new ethers.providers.Web3Provider(window.ethereum);
const transferCryptoTestamentContract = new ethers.Contract(transTestaABI, transTestaADDRESS, provider.getSigner());

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
		const owner = transferCryptoTestamentContract.getOwner();
       	 	return owner;		
	}
	getTime(addressContract){

	}
	getTotal(addressContract){
		const total = transferCryptoTestamentContract.getMount();
        	return total;
	}
	getRemain(addressContract){
		const remain = transferCryptoTestamentContract.getRemain();
        	return remain;
	}
	//String split by ' ', split it to beneficiaris
	getBeneficiaris(addressContract){
		 const lisBeneficiaries = transferCryptoTestamentContract.getBeneficiaris();
        	return lisBeneficiaries;
	}
	rollUp(){

	}
	executeTestament(){

	}
	withdraw(){

	}
	sendEth(){

	}
	addBeneficiary(address,percent){
	
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
