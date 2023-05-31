const hre = require("hardhat");

async function main() {
  const MzTz = await hre.ethers.getContractFactory("MzTz");
  const mzTz = await MzTz.deploy();

  await mzTz.deployed();

  console.log( "MozziTozzi deployed to:" , mzTz.address);
}


main()
.then(() => process.exit(0))
.catch((error) => {
console.error(error);
process.exit = 1;
});
