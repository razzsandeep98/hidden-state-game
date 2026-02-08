# hidden-state-game

## Hidden State Onchain Game

### Problem
Traditional onchain games expose all player data publicly, which breaks fairness and removes strategic depth.

### Solution
This project demonstrates encrypted hidden game state on Solana using Arcium.
Players draw encrypted cards stored onchain.
Only the reveal phase decrypts data, ensuring fairness and privacy.

### How Arcium is Used
- Player moves are encrypted before storing onchain.
- Only authorized reveal functions decrypt data.
- Prevents cheating and front-running.

### Tech Stack
- Solana Devnet
- Arcium SDK
- Tailwind UI
- Vercel Hosting

### Impact / Use Cases
- Card Games
- Secret Voting
- Strategy Games
- Social Deduction Games

