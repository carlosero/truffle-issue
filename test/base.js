var FirstContract = artifacts.require("./FirstContract.sol");
var SecondContract = artifacts.require("./SecondContract.sol");

contract('FirstContract', async (accounts)  => {
	beforeEach(async () => {
		this.firstContract = await FirstContract.deployed();
		this.secondContract = await SecondContract.deployed();
		this.investor = accounts[2];
	})
	context('as investor', async ()  => {
		it("should allow me to contribute ether", async ()  => {
			await this.firstContract.sendTransaction({ value: 222222222, from: this.investor });
            let balance = await this.firstContract.balances.call(this.investor);
			assert.equal(balance.valueOf(), 222222222);
		});

		it("should allow me to move my balance to second contract", async () => {
			let res = this.firstContract.transfer(this.secondContract.address, 1111111, {from: this.investor});
            let balance = await this.secondContract.balances.call(this.firstContract.address);
			assert.equal(balance.valueOf(), 1111111);
		});
	});
});
