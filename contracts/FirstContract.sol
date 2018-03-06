pragma solidity ^0.4.18;

contract FirstContract  {
    mapping (address => uint256) public balances;

    function () external payable {
        balances[msg.sender] = msg.value;
    }

    function transfer(address _to) external {
    	_to.transfer(balances[msg.sender]);
    }

}
