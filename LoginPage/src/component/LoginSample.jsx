import React,{useState} from 'react'
import axios from 'axios';

import {Link,useHistory} from 'react-router-dom'
import {
    MDBBtn,
    MDBContainer,
    MDBRow,
    MDBCol,
    MDBCard,
    MDBCardBody,
    MDBInput,
    MDBIcon
  }
  from 'mdb-react-ui-kit';
export default function LoginSample() {
    const history=useHistory();
    const [loginDetails,setloginDetails]=useState({username:'',password:''})
    const handleLogin = async () => {
      try {
        const response = await axios.post('/api/login', { loginDetails });
        console.log(response.data);
        // Redirect to the user dashboard
      } catch (error) {
        console.log(error);
        if(error.response.status){
          alert("Request failed with status code 404")
        }else{
          alert("something went wrong on server")
        }

      }
    };
    const loginIn=e=>{
      e.preventDefault();
      if(loginDetails.username.trim()==''|| loginDetails.password.trim()==''){
        console.log("empty")
   
        return;
      }
      handleLogin();
        console.log(loginDetails)
    }

    
    const handleReset=(e)=>{
      e.preventDefault();
     setloginDetails({
      username:'',
      password:''
     })
     console.log(loginDetails)
    }

    const handleChange=(event,field)=>{
      let actualValue=event.target.value;
      setloginDetails({
        ...loginDetails,
        [field]:actualValue
      })
    }
  
  return (
    <MDBContainer fluid >

      <MDBRow className='d-flex justify-content-center align-items-center h-100' >
        <MDBCol col='12' style={{background:'blueviolet'}}>

          <MDBCard className='bg-dark text-white my-5 mx-auto' style={{borderRadius: '1rem', maxWidth: '400px'}}>
            <MDBCardBody className='p-5 d-flex flex-column align-items-center mx-auto w-100'>

              <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
              <p className="text-white-50 mb-5">Please enter your login and password!</p>

              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Email address' id='formControlLg' type='email' size="lg" value={setloginDetails.username} onChange={(e)=>handleChange(e,'username')}/>
              <MDBInput wrapperClass='mb-4 mx-5 w-100' labelClass='text-white' label='Password' id='formControlLg' type='password' size="lg" value={setloginDetails.password} onChange={(e)=>handleChange(e,'password')}/>

              <p className="small mb-3 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={loginIn}>
                Login
              </MDBBtn>
              <MDBBtn outline className='mx-2 px-5' color='white' size='lg' onClick={handleReset}>
                Reset
              </MDBBtn>

              <div className='d-flex flex-row mt-3 mb-5'>
                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='facebook-f' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='twitter' size="lg"/>
                </MDBBtn>

                <MDBBtn tag='a' color='none' className='m-3' style={{ color: 'white' }}>
                  <MDBIcon fab icon='google' size="lg" />
                </MDBBtn>
              </div>

              <div>
                <p className="mb-0">Don't have an account? <a href="#!" class="text-white-50 fw-bold">Sign Up</a></p>

              </div>
            </MDBCardBody>
          </MDBCard>

        </MDBCol>
      </MDBRow>

    </MDBContainer>
  )
}
