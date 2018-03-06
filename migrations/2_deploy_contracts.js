var FirstContract = artifacts.require("./FirstContract.sol");
var SecondContract = artifacts.require('./eip20/SecondContract.sol');

module.exports = function(deployer) {
  deployer.deploy(FirstContract);
  deployer.deploy(SecondContract);
};
