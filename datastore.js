
let user = {
	id: 0,
	name: "Kevin",
	number: "09067283002",
	pic: "images/WhatsApp Image 2024-02-29 at 03.27.29_68cc8bf4.jpg"
};

let contactList = [
	{
		id: 0,
		name: "Anthony",
		number: "08088645311",
		pic: "images/asdsd12f34ASd231.png",
		lastSeen: "Apr 29 2018 17:58:02"
	},
	{
		id: 1,
		name: "Mr Uthman",
		number: "08088645311",
		pic: "images/Ass09123asdj9dk0qw.jpg",
		lastSeen: "Apr 28 2018 22:18:21"
	},
	{
		id: 2,
		name: "Miss Semiat",
		number: "08088645311",
		pic: "images/asd1232ASdas123a.png",
		lastSeen: "Apr 28 2018 19:23:16"
	},
	{
		id: 3,
		name: "Kudus SQI",
		number: "08088645311",
		pic: "images/Alsdk120asdj913jk.jpg",
		lastSeen: "Apr 29 2018 11:16:42"
	},
	{
		id: 4,
		name: "My love",
		number: "08088645311",
		pic: "images/nifemi.jpg",
		lastSeen: "Apr 27 2018 17:28:10"
	}
];

let groupList = [
	{
		id: 1,
		name: "SQI COLLEGE OF ICT",
		members: [0, 1, 5],
		pic: "images/download.jpg"
	},
	{
		id: 2,
		name: "Web Developers",
		members: [0, 2],
		pic: "images/1921231232_Ag1asE.png"
	},
	{
		id: 3,
		name: "notes",
		members: [0],
		pic: "images/8230192232_asdEWq2.png"
	}
];

// message status - 0:sent, 1:delivered, 2:read

let messages = [
	{
		id: 0,
		sender: 2,
		body: "Have you done your assignment?",
		time: "April 25, 2018 13:21:03",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 1,
		sender: 0,
		body: "	Almost done",
		time: "April 25, 2018 13:22:03",
		status: 2,
		recvId: 2,
		recvIsGroup: false
	},
	{
		id: 2,
		sender: 0,
		body: "how you doin'?",
		time: "April 25, 2018 18:15:23",
		status: 2,
		recvId: 3,
		recvIsGroup: false
	},
	{
		id: 3,
		sender: 3,
		body: "i'm fine...wat abt u?",
		time: "April 25, 2018 21:05:11",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 4,
		sender: 0,
		body: "i'm good too",
		time: "April 26, 2018 09:17:03",
		status: 1,
		recvId: 3,
		recvIsGroup: false
	},
	{
		id: 5,
		sender: 3,
		body: "anyone online?",
		time: "April 27, 2018 18:20:11",
		status: 0,
		recvId: 1,
		recvIsGroup: true
	},
	{
		id: 6,
		sender: 1,
		body: "No assignment today ooo",
		time: "April 27, 2018 17:23:01",
		status: 1,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 7,
		sender: 0,
		body: "Ok",
		time: "April 27, 2018 08:11:21",
		status: 2,
		recvId: 2,
		recvIsGroup: false
	},
	{
		id: 8,
		sender: 2,
		body: "Why didn't you come to class on Friday?",
		time: "April 27, 2018 08:22:12",
		status: 2,
		recvId: 0,
		recvIsGroup: false
	},
	{
		id: 9,
		sender: 0,
		body: "I had an appointment",
		time: "April 27, 2018 08:31:23",
		status: 1,
		recvId: 2,
		recvIsGroup: false
	},
	{
		id: 10,
		sender: 0,
		body: "I love you ",
		time: "April 27, 2018 22:41:55",
		status: 2,
		recvId: 4,
		recvIsGroup: false
	},
	{
		id: 11,
		sender: 1,
		body: "You can talk to me",
		time: "April 28 2018 17:10:21",
		status: 0,
		recvId: 1,
		recvIsGroup: true
	}
];

let MessageUtils = {
	getByGroupId: (groupId) => {
		return messages.filter(msg => msg.recvIsGroup && msg.recvId === groupId);
	},
	getByContactId: (contactId) => {
		return messages.filter(msg => {
			return !msg.recvIsGroup && ((msg.sender === user.id && msg.recvId === contactId) || (msg.sender === contactId && msg.recvId === user.id));
		});
	},
	getMessages: () => {
		return messages;
	},
	changeStatusById: (options) => {
		messages = messages.map((msg) => {
			if (options.isGroup) {
				if (msg.recvIsGroup && msg.recvId === options.id) msg.status = 2;
			} else {
				if (!msg.recvIsGroup && msg.sender === options.id && msg.recvId === user.id) msg.status = 2;
			}
			return msg;
		});
	},
	addMessage: (msg) => {
		msg.id = messages.length + 1;
		messages.push(msg);
	}
};