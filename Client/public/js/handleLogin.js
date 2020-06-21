const API_URL = 'http://localhost:3001';
const token = localStorage.getItem('token');
const userId = localStorage.getItem('userId');
const dataCT = axios.get(`http://localhost:3001/api/v1/users/${userId}`);
if(token || dataCT.status === 200) {
	redirect('homepage.html');
}
$('.Login').click(function () {
	login($('#email').val().trim(), $('#password').val().trim());
});


async function login(email , password) {
	try {
		const loginResponse = await axios({
			method: 'post',
			url: `${API_URL}/api/v1/login`,
			data: {
				email,
				password
			}
        });
        console.log(loginResponse);
		if (loginResponse.status === 200) {
			console.log(loginResponse);
			// debugger;
			const token = loginResponse.data.access_token;
			const userId = loginResponse.data.userId;
			const username = loginResponse.data.username;
			localStorage.setItem('token', token);
			localStorage.setItem('userId', userId);
			localStorage.setItem('username', username);
			return redirect('homepage.html');
		}
		return alert("Login not successfully");
	} catch (e) {
		alert(e.response);
	}
}