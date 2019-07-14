const { Command } = require('klasa');

module.exports = class extends Command {

	constructor(...args) {
		super(...args, {
			runIn: ['text'],
			description: language => language.get('COMMAND_LOOP_DESCRIPTION'),
			extendedHelp: language => language.get('COMMAND_LOOP_EXTENDEDHELP'),
			requiredPermissions: ['SEND_MESSAGES', 'CONNECT', 'SPEAK']
		});
	}

	run(message) {
		const { queue, loop } = message.guildSettings.get('music');
		const voice_connection = message.guild.voice ? message.guild.voice.connection : null;
		const voice_channel = message.member.voice.channel;
		if (!voice_channel) throw message.language.get('COMMAND_LOOP_NOCHANNEL');
		if (!queue.length || !voice_connection) throw message.language.get('COMMAND_LOOP_NOQUEUE');
		loop = !loop;
		queue[0].repeat = false;
		return message.channel.sendLocale('COMMAND_LOOP_IS', [music_settings.loop]);
	}

};
