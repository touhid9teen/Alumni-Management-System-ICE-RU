

export const routes = {
	home: {
		title: "Home",
		key: "home",
		path: "/",
	},
	login: {
		title: "Login",
		key: "login",
		path: "/login",
	},
	signup: {
		title: "Signup",
		key: "signup",
		path: "/sign-up",
	},
	pageNotFound: {
		title: "Page Not Found",
		key: "page-not-found",
		path: "*",
	},
	newsUpdate: {
		title: "News Update",
		key: "news-update",
		path: "/news-update",
	},
	editProfile: {
		title: "Edit Profile",
		key: "edit-profile",
		path: "/edit-profile",
	},
	alumniAssociationCommittee: {
		title: "Alumni Association Committee",
		key: "alumni-association-committee",
		path: "/alumni-association-committee",
	},
	blog: {
		title: "Blog",
		key: "blog",
		path: "/blog",
	},
	events: {
		title: "Events",
		key: "events",
		path: "/events",
	},
	eventDetails: {
		title: "EventDetails",
		key: "event-details",
		path: "/events/details/:id",
	},
	alumniProfile: {
		title: "Alumni Profile",
		key: "alumni-profile",
		path: "/dashboard/profile/:studentId",
	},
	alumniTableInfo: {
		title: "Alumni Table Info",
		key: "alumni-table-info",
		path: "/dashboard",
	},
	createEvent: {
		title: "Create Event",
		key: "create-event",
		path: "/events/create-event",
	}
};
