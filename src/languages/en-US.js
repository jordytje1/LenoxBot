const { Language, util } = require('klasa');

module.exports = class extends Language {

	constructor(...args) {
		super(...args);
		this.language = {
			/**
			 * @Defaults
			 */
			DEFAULT: (key) => `${key} has not been localized for en-US yet.`,
			DEFAULT_LANGUAGE: "Default Language",

			// Prompts
			MESSAGE_PROMPT_TIMEOUT: "The prompt has timed out.",
			MESSAGE_PROMPT_CANCELED: "Canceled command.",
			MULTIPLE_ITEMS_FOUND_PROMPT: (results) => `Multiple items found. Please choose one of the following, or type cancel.${results}`,
			ANSWER_CANCEL_PROMPT: "cancel",

			// Commands
			COMMAND_PING: "Ping?",
			COMMAND_PINGPONG: (latencyms, latencyapims) => `Latency: ${latencyms} \nAPI Latency: ${latencyapims}`,
			COMMAND_HELP_DESCRIPTION: "Display help for a command.",
			COMMAND_HELP_DM: "📥 | The list of commands you have access to has been sent to your DMs.",
			COMMAND_HELP_NODM: "❌ | You have DMs disabled, I couldn't send you the commands in DMs.",
			COMMAND_HELP_USAGE: (usage) => `Usage :: ${usage}`,
			COMMAND_HELP_EXTENDED_DESC: "**Extended Help:**",
			COMMAND_HELP_EXTENDED: "Extended Help ::",
			COMMAND_HELP_DESCRIPTION_DESC: "**Description:**",
			COMMAND_HELP_USAGE_DESC: "**Usage:**",
			COMMAND_HELP_ALIASES_DESC: "**Aliases:**",
			COMMAND_HELP_NO_ALIASES_DESC: "no aliases",
			COMMAND_HELP_CATEGORIES: (category) => `**${category} Commands**:\n`,
			COMMAND_HELP_CATEGORIES_TITLE: (category) => `${category} Commands`,
			COMMAND_TRANSLATE_EMBED_TITLE: "Translation project",
			COMMAND_TRANSLATE_EMBED_DESCRIPTION: "Our goal is to offer LenoxBot in many different languages. It allows anyone to change the bot's language to their native language. However, there are over 10 thousand words to translate and that's why we need your help. \nYou have the opportunity to help us to translate LenoxBot by joining the project linked below! \n\nThank you and have fun!",
			COMMAND_TRANSLATE_EMBEDFIELDTITLE: "Translation project link:",
			COMMAND_VOTE_EMBEDAUTHOR: "Voting:",
			COMMAND_VOTE_EMBEDDESCRIPTION: (link) => `You will receive between 100-1000 credits for the upvote on the weekdays. \nFrom Friday to Sunday you will receive between 200-2000 credits. \n\nLink: ${link}`,
			COMMAND_GITHUB_EMBEDTITLE: "LenoxBot's GitHub Repository:",
			COMMAND_GITHUB_EMBEDDESCRIPTION: "Our source code of LenoxBot (including the website) is available in our GitHub Repository. \n\nThe branch **master** is the branch which is currently online on LenoxBot. \nThe branch **testing** is the branch where we push all new updates and test it before realising them.",
			COMMAND_GITHUB_FIELDTITLELINK: "LenoxBot's GitHub Repository link:",
			COMMAND_GITHUB_FIELDTITLECONTRIBUTE: "How do you contribute?",
			COMMAND_GITHUB_FIELDDESCRIPTIONCONTRIBUTE: "We would be very happy to receive help from developers who are able to help us out to fix bugs or add new features. Currently we are only 2 developers who can work on LenoxBot. If you're interested in helping us out, you can read the following document: https://github.com/LenoxBot/LenoxBot/blob/testing/.github/CONTRIBUTING.md",
			COMMAND_EVAL_CHOOSE_ONE_OF_THE_OPTIONS_PROMPT: (_options) => `Choose one of the following options: ${_options.join(", ")}`,
			ANSWER_EVAL_UPLOAD_TO_SERVICE_PROMPT: ["file", "haste", "hastebin", "mystbin", "console", "log", "default", "none", "cancel"],
			COMMAND_EVAL_TIMEOUT: (seconds) => `TIMEOUT: Took longer than ${seconds} seconds.`,
			COMMAND_EVAL_ERROR: (time, output, type) => `**Error**:${output}\n**Type**:${type}\n${time}`,
			COMMAND_EVAL_OUTPUT: (time, output, type) => `**Output**:${output}\n**Type**:${type}\n${time}`,
			COMMAND_EVAL_OUTPUT_CONSOLE: (time, type) => `Sent the result to console.\n**Type**:${type}\n${time}`,
			COMMAND_EVAL_OUTPUT_FILE: (time, type) => `Sent the result as a file.\n**Type**:${type}\n${time}`,
			COMMAND_EVAL_OUTPUT_HASTEBIN: (time, url, type) => `Sent the result to hastebin: ${url}\n**Type**:${type}\n${time}\n`,
			COMMAND_EVAL_OUTPUT_MYSTBIN: (time, url, type) => `Sent the result to mystbin: ${url}\n**Type**:${type}\n${time}\n`,
			COMMAND_HEAPSNAPSHOT_CAPTURING: "Capturing HEAP Snapshot. This may take a while...",
			COMMAND_HEAPSNAPSHOT_CAPTURED_DONE: (path) => `Captured in \`${path}\`, check! Remember, do NOT share this with anybody, it may contain a lot of sensitive data.`,
			COMMAND_HANGMAN_MENTIONPLAYQUESTION: (mention, author) => `${mention}, do you want to play hangman against ${author}?`,
			COMMAND_HANGMAN_EMBEDTITLESTART: "Hangman game has been started!",
			COMMAND_HANGMAN_EMBEDTITLECHANCES: (chances) => `${chances}/15 chances left`,
			COMMAND_HANGMAN_EMBEDDESCRIPTION: (word) => `**Word to guess:**\n${word}`,
			COMMAND_HANGMAN_LETTERORWORDMESSAGE: (author) => `${author}, please send a letter (A-Z) or guess the word!`,
			COMMAND_HANGMAN_EMBEDTITLECORRECT: (author, letter) => `${author} guessed the letter "**${letter}**" correctly! 😄`,
			COMMAND_HANGMAN_EMBEDTITLECORRECTWORD: (author, word) => `${author} guessed the word "**${word}**" correctly! 😄`,
			COMMAND_HANGMAN_EMBEDDESCRIPTIONWITHTRIED: (triedletters, word) `**Wrong letters used:** ${triedletters} \n\n**Word to guess:**\n${word}`,
			COMMAND_HANGMAN_MENTIONGAMEWON: (author, word) => `${author} won this game! The word to guess was: "**${word}**"`,
			COMMAND_HANGMAN_EMBEDTITLEWRONG: (author, letter) => `${author} guessed the letter "**${letter}**" wrong! 😢`,
			COMMAND_HANGMAN_EMBEDTITLEWRONGWORD: (author, word) => `${author} guessed the word "**${word}**" wrong! 😢`,
			COMMAND_HANGMAN_MENTIONNOWIN: (word) => `Nobody won! The word to guess was: "**${word}**"`,
			COMMAND_HANGMAN_MENTIONCORRECTWORD: (author, word) => `${author} won this game! The word to guess was: "**${word}**"`,
			COMMAND_HANGMAN_NOTWORDCHARACTERS: (letterscount) => `The word must have ${letterscount} letters!`,
			COMMAND_HANGMAN_NOLETTER: "You entered an invalid character!",
			COMMAND_HANGMAN_NOANSWERMENTION: (author, mention, word) => `${author} didn't give an answer! ${mention} won this game! The word to guess was: "**${word}**"`,
			COMMAND_HANGMAN_DONTWANTTOPLAY: "We are sorry but the mentioned Discord user doesn't want to play hangman against you!",
			COMMAND_HANGMAN_LETTERORWORDMESSAGENOMENTION: "Please send a letter (A-Z) or guess the word!",
			COMMAND_HANGMAN_EMBEDTITLECORRECTNOMENTION: (letter) => `You guessed the letter "**${letter}**" correctly! 😄`,
			COMMAND_HANGMAN_EMBEDTITLECORRECTNOMENTIONWORD: (word) => `You guessed the word "**${word}**" correctly! 😄`,
			COMMAND_HANGMAN_GAMELOST: (word) => `You lost this game! The word to guess was: "**${word}**"`,
			COMMAND_HANGMAN_GAMEWON: (word) => `You won this game! The word to guess was: "**${word}**"`,
			COMMAND_HANGMAN_EMBEDTITLEWRONGNOMENTION: (letter) `You guessed the letter "**${letter}**" wrong! 😢`,
			COMMAND_HANGMAN_EMBEDTITLEWRONGNOMENTIONWORD: (word) => `You guessed the word "**${word}**" wrong! 😢`,
			COMMAND_HANGMAN_NOANSWER: (word) => `You didn't give an answer! The word to guess was "**${word}**"`,
			COMMAND_HANGMAN_GUESSEDLETTERALREADY: "You guessed this letter already!",
			COMMAND_EIGHTBALL_NOINPUT: "You have to specify what you want to ask the bot!",
			COMMAND_EIGHTBALL_ANSWERS: ["It is certain", "It is decidedly so", "Without a doubt", "Yes definitely", "You may rely on it", "As I see it, yes", "Most likely", "Outlook good", "Yes!", "Signs point to yes", "Reply hazy try again", "Ask again later", "Better not tell you now", "Cannot predict now", "Concentrate and ask again", "Don't count on it", "My reply is no", "My sources say no", "Outlook not so good", "Very doubtful", "No!", "Your questions are weird", "I think so", "Stop!", "What?"],
			COMMAND_EIGHTBALL_QUESTION: "Your question:",
			COMMAND_EIGHTBALL_EMBEDFIELD: "Answer:",
			COMMAND_ROCKPAPERSCISSORS_NOINPUT: "You forgot to specify whether you take rock, paper or scissors",
			COMMAND_ROCKPAPERSCISSORS_EMBEDFOOTER: "Rock-paper-scissors minigame",
			COMMAND_ROCKPAPERSCISSORS_ROCKDRAW: "I've chosen rock! ✊ \nDraw!",
			COMMAND_ROCKPAPERSCISSORS_SCISSORSWIN: "I've chosen scissors! ✌ \nYou won!",
			COMMAND_ROCKPAPERSCISSORS_PAPERLOST: "I've chosen paper! ✋ \nYou lost!",
			COMMAND_ROCKPAPERSCISSORS_PAPERWIN: "I've chosen paper! ✋ \nYou won!",
			COMMAND_ROCKPAPERSCISSORS_ROCKLOST: "I've chosen rock! ✊ \nYou lost!",
			COMMAND_ROCKPAPERSCISSORS_SCISSORSDRAW: "I've chosen scissors! ✌ \nDraw!",
			COMMAND_ROCKPAPERSCISSORS_SCISSORSLOST: "I've chosen scissors! ✌ \nYou lost!",
			COMMAND_ROCKPAPERSCISSORS_PAPERDRAW: "I've chosen paper! ✋ \nDraw!",
			COMMAND_ROCKPAPERSCISSORS_ROCKWIN: "I've chosen rock! ✊ \nYou won!",
			COMMAND_ROCKPAPERSCISSORS_ERROR: "You didn't specify correctly if you want to take rock, paper or scissors!",
			COMMAND_ROCKPAPERSCISSORS_VALIDATION: ['rock', 'paper', 'scissors'],
			COMMAND_ROCKPAPERSCISSORS_ROCK: "rock",
			COMMAND_ROCKPAPERSCISSORS_PAPER: "paper",
			COMMAND_ROCKPAPERSCISSORS_SCISSORS: "scissors",
			COMMAND_PENISSIZECALCULATOR_ANSWERS: ["Your penis is 2.30 millimeters small. There's still more to go on!", "Your penis is 2.80 millimeters long. You did a major step forward, I'm proud of you!", "Your penis is 3.00 meters long. I think you set a new world record, congratulations!", "Your penis isn't even 1 millimeter small. I would recommend you to consult a doctor.", "Your penis is so small that there isn't a unit. Sorry :(", "Your penis is very big ... 30 meters! I'm speechless...", "Where is your penis?", "Do you even have a penis?", "Oh god that resembles a big sausage", "Wow, that's crazy! 40 centimeters"],
			COMMAND_TICTACTOE_NOMENTION: "You must mention a user to play TicTacToe!",
			COMMAND_TICTACTOE_NOTONLINE: "The mentioned user has to be online to play TicTacToe against you!",
			COMMAND_TICTACTOE_BOTMENTION: "You cannot mention a bot to play TicTacToe!",
			COMMAND_TICTACTOE_ERROR: "You cannot play with yourself. You have to mention a user against whom you want to play.",
			COMMAND_TICTACTOE_GAMECREATED: "New TicTacToe Game created!",
			COMMAND_TICTACTOE_TURN: "It's your turn",
			COMMAND_TICTACTOE_TITLE: "TicTacToe game",
			COMMAND_TICTACTOE_NOANSWERTITLE: "Time's up!",
			COMMAND_TICTACTOE_NOANSWER: (author, user) => `${author} did not answer for 15 seconds why ${user} won this round.`,
			COMMAND_TICTACTOE_WIN: (user) => `${user} won this round!`,
			COMMAND_TICTACTOE_WANNAPLAY: (mention, author) => `${mention}, do you want to play TicTacToe against ${author}? If yes, answer with '**YES**'!`,
			COMMAND_TICTACTOE_GAMECANCELED: (mention) => `Game canceled because ${mention} didn't answer or doesn't want to play!`,
			COMMAND_TICTACTOE_GAMEEND: "Game is over!",
			COMMAND_TICTACTOE_DRAW: "No one has won, it's draw! The next round may be better.",

			// Command Descriptions
			COMMAND_PING_DESCRIPTION: "Runs a connection test to Discord.",
			COMMAND_TRANSLATE_DESCRIPTION: "Gives you informations about our translation project.",
			COMMAND_VOTE_DESCRIPTION: "All details about voting for LenoxBot.",
			COMMAND_GITHUB_DESCRIPTION: "All details about our GitHub Repository of LenoxBot.",
			COMMAND_EVAL_DESCRIPTION: "Evaluates arbitrary Javascript. Reserved for bot owner.",
			COMMAND_EVAL_EXTENDEDHELP: [
				"The eval command evaluates code as-in, any error thrown from it will be handled.",
				"It also uses the flags feature. Write --silent, --depth=number or --async to customize the output.",
				"The --silent flag will make it output nothing.",
				"The --depth flag accepts a number, for example, --depth=2, to customize util.inspect's depth.",
				"The --async flag will wrap the code into an async function where you can enjoy the use of await, however, if you want to return something, you will need the return keyword.",
				"The --showHidden flag will enable the showHidden option in util.inspect.",
				"If the output is too large, it'll send the output as a file, or in the console if the bot does not have the ATTACH_FILES permission.",
			].join("\n"),
			COMMAND_EXEC_DESCRIPTION: "Execute commands in the terminal, use with EXTREME CAUTION.",
			COMMAND_EXEC_EXTENDEDHELP: [
				'The --silent flag runs in silent mode, not showing any console output',
				'The --language <lang> flag sets the language of the outputted code block',
				'The --raw flag sends the output raw, without any code blocks',
				'The --delete flag deletes the command message',
				'The --file flag interperts the response as a file URL/path to send',
				'The --filename <name> flag sets the name for the sent file',
				'The --wait flag waits for the program to finish before sending the output',
				'The --timeout <ms> flag sets a timeout'
			].join("\n"),
			COMMAND_HEAPSNAPSHOT_DESCRIPTION: "Creates a heapdump for finding memory leaks.",
			COMMAND_HEAPSNAPSHOT_EXTENDEDHELP: [
				'The heapsnapshot command is very useful for bots that have memory issues, it uses the heapdump library',
				'which freezes the entire process for a moment to analyze all elements from the process\' HEAP, NEVER share',
				'heapsnapshot files with anybody, as everything your bot holds is included in that file.\n\nTo open heapsnapshot',
				'files, open Google Chrome, open Developer Tools, go to the tab Memory, and in Profiles, click on the button "load".',
				'Finally, open the profile and you will be given a table of all objects in your process, have fun!\n\nP.S:',
				'heapsnapshot files are as big as the amount of RAM you use, in big bots, the snapshots can freeze the bot',
				'much longer and the files can be much heavier.'
			].join(' '),
			COMMAND_HANGMAN_DESCRIPTION: "Play hangman alone or with your Discord friends.",
			COMMAND_EIGHTBALL_DESCRIPTION: "Ask the bot a question.",
			COMMAND_EIGHTBALL_EXTENDEDHELP: "eightball Am I pretty?",
			COMMAND_ROCKPAPERSCISSORS_DESCRIPTION: "Play a round of rock-paper-scissors with the bot.",
			COMMAND_ROCKPAPERSCISSORS_EXTENDEDHELP: "rockpaperscissors scissors",
			COMMAND_PENISSIZECALCULATOR_DESCRIPTION: "Calculates the size of the penis of you or a user.",
			COMMAND_PENISSIZECALCULATOR_EXTENDEDHELP: ["penissizecalculator", "penissizecalculator @Tester#8234"].join("\n"),
			COMMAND_TICTACTOE_DESCRIPTION: "Play a round of TicTacToe against another Discord user.",
			COMMAND_TICTACTOE_EXTENDEDHELP: "tictactoe @Tester#7584",
		}
	}

	async init() {
		await super.init();
	}

}