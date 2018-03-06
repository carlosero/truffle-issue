pragma solidity ^0.4.18;

contract SecondContract  {
    mapping (address => uint256) public balances;

    function () external payable {
        balances[msg.sender] = msg.value;
    }

}
