import axios from 'axios';
export const  LoginUser = async () => {
    try {
        const response = await axios.post('/api/login', { username, password });
        console.log(response.data);
        // Redirect to the user dashboard
      } catch (error) {
        console.log(error);
        setErrorMessage('Invalid username or password');
      }
}