const main = async () => {
  const gameContractFactory = await hre.ethers.getContractFactory('MyEpicGame');
  const gameContract = await gameContractFactory.deploy(                        
    ["Goku", "Luffy", "Naruto"],       
    ["https://imgur.com/oimv6mi.png", 
    "https://imgur.com/H1b6UW6.png", 
    "https://i.imgur.com/58Sz3Ud.png"],
    [300, 200, 100],                    
    [100, 50, 25],
    "Dio Brando", // Boss name
    "https://imgur.com/1D6OPAN.png", // Boss image
    10000, // Boss hp
    50 // Boss attack damage
  );
  await gameContract.deployed();
  console.log("Contract deployed to:", gameContract.address);

};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();