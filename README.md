# CodeArt Discord Bot

This is a Discord bot project built using Node.js and the Discord.js library. The bot includes multiple commands organized in categories, event handlers, and utility modules. It uses environment variables for configuration and connects to a database stored in a SQLite file.

## Features

- Multiple command categories: Fun, Bot, General, Moderation
- Event handling for Discord events
- Uses environment variables for sensitive data (such as the bot token)
- SQLite database integration (json.sqlite)

## Installation

1. Clone the repository:

   ```
   git clone <repository-url>
   cd <repository-folder>
   ```

2. Install dependencies:

   ```
   npm install
   ```

3. Create a `.env` file in the root directory with the following content:

   ```
   token=YOUR_DISCORD_BOT_TOKEN
   ```

   Replace `YOUR_DISCORD_BOT_TOKEN` with your actual Discord bot token.

## Usage

Run the bot with:

```
node app.js
```

The bot will start and connect to Discord using the provided token.

### Command Prefix

All bot commands use a specific prefix (e.g., `!` or another character). Ensure you know the prefix set for this bot in the configuration or code to use commands properly. For example, if the prefix is `!`, to use the help command, type:

```
!yardım
```

### First Run Setup

On the first run, make sure to:

- Create and configure your `.env` file with your Discord bot token.
- Install the necessary dependencies with `npm install`.
- Ensure your bot has the necessary permissions in your Discord server.
- Run `node app.js` to start the bot.

### Help Command

Use the help command to get a list of available commands and usage information:

```
yardım
```

This command provides details about the commands you can use with the bot.

## Important Notes

- The `.env` file is excluded from version control for security reasons.
- The database file `json.sqlite` is excluded from the repository as it may contain personal or sensitive data.
- Ensure you do not commit your `.env` or database files to public repositories.

## Project Structure

- `app.js`: Main entry point of the bot.
- `commands/`: Directory containing command files grouped by category.
- `events/`: Event handlers (e.g., messageCreate, ready).
- `utils/`: Utility modules.
- `json.sqlite`: SQLite database file (excluded from git).
- `.env`: Environment variables (excluded from git).

## Dependencies

- discord.js
- dotenv
- mathjs
- mongoose

## License

Copyright (c) 2025 Asil Doğan Gümüş  
All Rights Reserved.

This software and all its files, code, designs, and materials are the exclusive property of Asil Doğan Gümüş.

Not Permitted:
- Copying any part of the software,
- Distributing it,
- Modifying it,
- Creating derivative works,
- Using it for commercial or non-commercial purposes.

Access to this project is for viewing purposes only.  
Any use requires written permission.

Unauthorized use is subject to legal action under applicable copyright laws.
