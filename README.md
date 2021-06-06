## 📃 Instructions to run & upload on IPFS:
0. **Install node v12.10.0:**
</br>**```curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.37.2/install.sh | bash```
</br>```nvm install 12.10.0```
</br>```nvm alias default 12.10.0```
</br>  Restart Terminal**
1. **Install Truffle:**
</br>**```npm i -g truffle```**
2. **Install IPFS:**
</br>**```npm i -g ipfs```
Restart Terminal**
3. **Run IPFS Node:**
</br>**```jsipfs daemon```**
4. **Get project directory (in new terminal window):**
</br>**```git clone https://github.com/dappuniversity/nft_masterclass_1.git```**
5. **Enter project directory and install dependecies:**
</br>**```cd nft_masterclass_1 && npm i```**
6. **Enter truffle developer mode:**
</br>**```truffle develop```**
7. **Migrate contracts (locally):**
</br>**```migrate --reset```**
8. **Mint NFTs (locally):**
</br>**```exec src/backEnd/scripts/mint.js```**
9. **Migrate contracts on public network (in this case Kovan):**
</br>**a) Rename .env_example to .env and fill accordingly)
</br>b) Get Kovan ETH i.e. from https://faucet.kovan.network/ or https://gitter.im/kovan-testnet/faucet
</br>c) Off VPN(if got and ON), then type:
</br>```migrate --reset --network kovan```**
10. **Mint NFTs on public network (in this case Kovan):**
</br>**```exec src/backEnd/scripts/mint.js --network kovan```**
**11. Run dApp:**
</br>**```npm start```**
12. **Enter dApp in browser:**
</br>**```localhost:3000```**
13. **Connect to the dApp:**
</br>**If running publicly set MetaMask network to Kovan.
</br>If running locally set MetaMask network to (Settings>Networks>Add Network):**
</br>![MetaMask setting](https://i.gyazo.com/b34e8bec896844352e70a7382e1f18d4.png)


## 📃 Instructions to publish on IPFS:
0. **Run IPFS Node (if not running already)**
</br>**```jsipfs daemon```**
1. **Create build directory (inside project directory)**
</br>**```npm run build```**
2. **Publish on IPFS**
</br>**```jsipfs add -r build```**
3. **Copy the latest generated hash and paste into the place of hash below:**
</br>**https://ipfs.io/ipfs/hash**
</br>**For the first time may take a while to load dApp**
4. **Create Human readable link**
</br>**[Use this site](https://bitly.com/)**

## 📃 Instructions to publish on Surge:
0. **Create build directory (inside project directory):**
</br>**```npm run build```**
1. **Enter build directory:**
</br>**```cd build```**
1. **Install Surge:**
</br>**```npm i -g surge```**
2. **Publish on Surge:**
</br>**```surge```**
</br>**...and follow the instructions**
# deploy_polygon
