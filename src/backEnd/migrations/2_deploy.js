const NFT = artifacts.require("NFT");

module.exports = function(deployer) {
  deployer.deploy(NFT);
};