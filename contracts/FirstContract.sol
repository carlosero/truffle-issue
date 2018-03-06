pragma solidity ^0.4.18;

contract FirstContract  {
    mapping (address => uint256) public balances;

    function () external payable {
        balances[msg.sender] = msg.value;
    }

    function transfer(address _to, uint256 _amount) external {
    	_to.transfer(_amount);
    }
}
