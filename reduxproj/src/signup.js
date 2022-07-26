import React from 'react';
import {useSelector,useDispatch } from 'react-redux';
import {username,email,password,confirmPass, signup} from "./actions";

function Signup(){
    const dispatch=useDispatch();
    const error=useSelector(state=>state.register);

 return(
    <section className="vh-100" style={{ backgroundColor: "rgb(214 249 230)" }}>
  <div className="container h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-lg-12 col-xl-11">
        <div className="card text-black" style={{ borderRadius: 25 }}>
          <div className="card-body p-md-5">
            <div className="row justify-content-center">
              <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                  Sign up
                </p>
                <form className="mx-1 mx-md-4" onSubmit={()=>dispatch(signup())}>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example1c">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="form3Example1c"
                        className="form-control"
                        onChange={(e)=>dispatch(username(e.target.value))}
                      />
                      <span>{error.usernameError}</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example3c">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="form3Example3c"
                        className="form-control"
                        onChange={(e)=>dispatch(email(e.target.value))}
                      />
                      <span>{error.emailError}</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example4c">
                        Password
                      </label>
                      <input
                        type="password"
                        id="form3Example4c"
                        className="form-control"
                        onChange={(e)=>dispatch(password(e.target.value))}
                      />
                      <span>{error.passError}</span>
                    </div>
                  </div>
                  <div className="d-flex flex-row align-items-center mb-4">
                    <div className="form-outline flex-fill mb-0">
                    <label className="form-label" htmlFor="form3Example4cd">
                        Repeat your password
                      </label>
                      <input
                        type="password"
                        id="form3Example4cd"
                        className="form-control"
                        onChange={(e)=>dispatch(confirmPass(e.target.value))}
                      />
                       <span>{error.confirmPassError}</span>
                    </div>
                  </div>
                  <div className="d-flex justify-content-center">
                  {(error.usernameError || error.emailError || error.passError || error.confirmPassError)
            ?<input type="submit" defaultValue="Sign up" className="btn btn-primary btn-lg"
            style={{ width: "100%", paddingLeft: "2.5rem", paddingRight: "2.5rem" }} disabled/>
            :<input type="submit" defaultValue="Sign up" className="btn btn-primary btn-lg"
            style={{ width: "100%", paddingLeft: "2.5rem", paddingRight: "2.5rem" }}/>
            }
                  </div>
                  <p className="small fw-bold mt-2 pt-1 mb-0" >
              Don't have an account?{" "}
              <a href="/" className="link-danger ">
                Login
              </a>
            </p>
                </form>
              </div>
              <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                <img
                  src="https://img.freepik.com/free-vector/sign-up-concept-illustration_114360-7895.jpg?w=2000"
                  className="img-fluid"
                  alt="Sample image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


 )
}
export default Signup;