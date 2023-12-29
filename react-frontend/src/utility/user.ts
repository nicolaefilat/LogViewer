class User {
	SESSION_ID_KEY = "session"
	
	get_user_session() {
		const sessionItem = localStorage.getItem(this.SESSION_ID_KEY)
		if (sessionItem == null) {
			throw Error("There is no user session set up.")
		}
		return sessionItem
	}
	
	has_user_session() {
		const userSession = localStorage.getItem(this.SESSION_ID_KEY)
		return userSession !== null
	}
	
	set_user_session(session: string) {
		localStorage.setItem(this.SESSION_ID_KEY, session)
	}
	
	clear_user_session() {
		localStorage.removeItem(this.SESSION_ID_KEY)
	}
}

const user = new User();
export {user}