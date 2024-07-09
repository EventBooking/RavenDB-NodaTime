const nuget = require("@eventbooking/nuget");

nuget.updateAndPublish("Raven.Client.NodaTime")
	.catch(console.error);