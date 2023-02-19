<h1>Decentralized MATIC Tokens Transfer App</h1>
<p>This is a decentralized application that allows you to transfer MATIC tokens between two Ethereum addresses on the Rinkeby test network. The app was built using React, TailwindCSS, Hardhat, and Solidity.</p>
<h2>Features</h2>
<ul>
  <li>Connect your MetaMask wallet to the Rinkeby test network</li>
  <li>View your MATIC token balance</li>
  <li>Transfer MATIC tokens from one address to another</li>
  <li>Verify the transaction on Etherscan</li>
</ul>
<h2>Prerequisites</h2>
<p>To use this app, you will need the following:</p>
<ul>
  <li>Node.js v12 or later</li>
  <li>MetaMask browser extension</li>
</ul>
<h2>Installation</h2>
<ol>
  <li>Clone this repository</li>
  <li>Install the dependencies: <code>npm install</code></li>
  <li>Start the local development server: <code>npm start</code></li>
</ol>
<p>The app should be available at <a href="http://localhost:3000">http://localhost:3000</a>.</p>
<h2>Usage</h2>
<ol>
  <li>Connect your MetaMask wallet to the Rinkeby test network.</li>
  <li>The app should display your MATIC token balance.</li>
  <li>Enter the recipient address and the amount of tokens you want to transfer.</li>
  <li>Click the "Transfer" button and confirm the transaction in your wallet.</li>
  <li>Wait for the transaction to be confirmed on the Rinkeby test network.</li>
  <li>Click the "View on Etherscan" button to view the transaction on Etherscan.</li>
</ol>
<h2>Smart Contract</h2>
<p>The smart contract used in this app was built using Solidity and deployed on the Goerli test network. The contract implements the ERC20 token standard and allows users to transfer MATIC tokens between two addresses.</p>
<p>The smart contract code can be found in the <code>contracts</code> directory. To deploy the contract on the Rinkeby test network, you will need to have a private key with some test Ether on the Rinkeby network. You can use Hardhat to deploy the contract by running the following command:</p>
<pre>npx hardhat run scripts/deploy.js --network goerli</pre>
<h2>Contributing</h2>
<p>If you would like to contribute to this project, feel free to submit a pull request. Before submitting a pull request, please make sure to run the tests and the linter:</p>
<pre>npm run test
npm run lint</pre>
