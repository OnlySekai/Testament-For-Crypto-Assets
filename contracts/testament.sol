//SPDX-License-Identifier: GPL-3.0

pragma solidity > 0.8.0;

contract testament {

    uint public mount;
    string note;
    string time;
    event CreateTestament(uint mount, string note, string time);
    function setMount(uint _mount) public {    //nhap vao tong tai san
        mount = _mount;  
    }
    function setNote(string memory _note) public{  //ghi chu
        note = _note;
    }
    function setTime(string memory _time) public { //thoi gian nhap
        time = _time;
    }

    function getNote() public view returns(string memory){  //tra ve ghi chu
        return note;
    }
     function getTime() public view returns(string memory){  //tra ve thoi gian
        return time;
    }
    event NewBeneficiary(string name, uint percent, string identifi);      //tao danh sach nguoi thu huong di chuc
    struct  Beneficiary{         
        string name;
        uint percent;
        string identifi;
    }
    Beneficiary[] public beneficiaries;
    function addBeneficiary(string memory _name, uint _percent, string memory _identifi) public{
        beneficiaries.push(Beneficiary(_name, _percent, _identifi)) ;
        emit NewBeneficiary(_name, _percent, _identifi);

    }
    

}