import axios from "axios";

const userServiceApi = axios.create({
	baseURL: import.meta.env.VITE_USER_SERVICE,
	headers: {
		'Content-Type': 'application/json',
	}
});

const scheduleServiceApi = axios.create({
	baseURL: import.meta.env.VITE_SCHEDULE_SERVICE,
	headers: {
		'Content-Type': 'application/json',
	}
});

export { userServiceApi, scheduleServiceApi };