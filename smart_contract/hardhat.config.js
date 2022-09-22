 require("@nomicfoundation/hardhat-toolbox");
 require("@nomicfoundation/hardhat-chai-matchers");

// /** @type import('hardhat/config').HardhatUserConfig */
// module.exports = {
//   solidity: "0.8.9",
// };

//https://eth-goerli.g.alchemy.com/v2/Q7v1UZLgrBuzL5C-OPFpPpZr7v3jHgj0

//require('@nomiclabs/hardhat-waffle')

module.exports={
    solidity:'0.8.0',
    networks:{
        goerli:{
            url:'https://eth-goerli.g.alchemy.com/v2/xdg1TlWIZ3u1egpKQQQ0inWRj0RGEXU5',
            accounts:['9424da184acdd19848e9804fd179c6cf5276f2c3d4ee45400a90defd596f9998']
        }
    }
}