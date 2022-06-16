import React from 'react'
import { useState } from 'react'

export default function Signup() {
    const [prefix,setprefix] = useState("")
    const [firstname,setfirstname] = useState("")
    const [lastname,setlastname] = useState("")
    const [email,setemail] = useState("")
    const [Number,setnumber] = useState("")
    const [password,setpassword] = useState("")
    const [password2,setpassword2] = useState("")

    const onSignUPpress=() => {
        console.log(prefix,firstname,lastname,email,Number,password,password2);
    }
  return (
    <React.Fragment>
            <div class="container" style={{"margin-top": "1em"}}>
      {/* <!-- Sign up form --> */}
      <form>
        {/* <!-- Sign up card --> */}
        <div class="card person-card">
          <div class="card-body">
            {/* <!-- Sex image --> */}
            <img
              id="img_sex"
              class="person-img"
              src="https://visualpharm.com/assets/217/Life%20Cycle-595b40b75ba036ed117d9ef0.svg"
            />
            {/* <!-- id="who_message" --> */}
            <h2 class="card-title">Write Your Name</h2>
            {/* <!-- First row (on medium screen) --> */}
            <div class="row">
              <div class="form-group col-md-2">
                <select id="input_sex" class="form-control">
                  <option onChange={e => setprefix(e.target.value)} value="Mr.">Mr.</option>
                  <option onChange={e => setprefix(e.target.value)} value="Ms.">Ms.</option>
                </select>
              </div>
              <div class="form-group col-md-5">
                <input
                  id="first_name"
                  type="text"
                  class="form-control"
                  onChange={e=>setfirstname(e.target.value)}
                  placeholder="First name"
                />
                <div id="first_name_feedback" class="invalid-feedback"></div>
              </div>
              <div class="form-group col-md-5">
                <input
                  id="last_name"
                  type="text"
                  class="form-control"
                  onChange={e=>setlastname(e.target.value)}
                  placeholder="Last name"
                />
                <div id="last_name_feedback" class="invalid-feedback"></div>
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-6" style={{"padding": "0.5rem"}}>
            <div class="card">
              <div class="card-body">
                <h2 class="card-title">Contact Details</h2>
                <div class="form-group">
                  <label for="email" class="col-form-label">Email</label>
                  <input
                    type="email"
                    class="form-control"
                    onChange={e=>setemail(e.target.value)}
                    id="email"
                    placeholder="example@gmail.com"
                    required
                  />
                  <div class="email-feedback"></div>
                </div>
                <div class="form-group">
                  <label for="tel" class="col-form-label">Phone number</label>
                  <input
                    type="text"
                    class="form-control"
                    id="tel"
                    onChange={e=>setnumber(e.target.value)}
                    placeholder="+91 69999 99999"
                    required
                  />
                  <div class="phone-feedback"></div>
                </div>

                <h2 class="card-title">Create Password</h2>
                <div class="form-group">
                  <label for="password" class="col-form-label">Password</label>
                  <input
                    type="password"
                    onChange={e=>setpassword(e.target.value)}
                    class="form-control"
                    id="password"
                    placeholder="Type your password"
                    required
                  />
                  <div class="password-feedback"></div>
                </div>
                <div class="form-group">
                  <label for="password_conf" class="col-form-label"
                    >Repeat Password</label
                  >
                  <input
                    type="password"
                    class="form-control"
                    id="password_conf"
                    onChange={e=>setpassword2(e.target.value)}
                    placeholder="Type your password again"
                    required
                  />
                  <div class="password_conf-feedback"></div>
                </div>
                <br />
                <br />
              </div>
            </div>
          </div>

          <div class="col-md-6">
            <div class="card">
              <div class="card-body">
                <h2 class="card-title">Tell us about yourself ?</h2>
                <div class="form-group">
                  <p>Are you a</p>
                  <select id="input_sex" class="form-control">
                    <option value="Mr.">Student</option>
                    <option value="Ms.">Fresher</option>
                  </select>
                </div>

                <div class="form-group">
                  <p>Educational Level</p>
                  <select id="input_sex" class="form-control">
                    <option value="Ms.">Higher Secondary</option>
                    <option value="Ms.">Undergraduate</option>
                    <option value="Ms.">Postgraduate</option>
                    <option value="Ms.">Ph.D.</option>
                  </select>
                </div>

                <div class="form-group">
                  <label for="text" class="col-form-label"
                    >College or School</label
                  >
                  <input
                    type="text"
                    class="form-control"
                    id="password"
                    placeholder="Write your college or school name"
                    required
                  />
                </div>

                <div class="form-group">
                  <p>Upload Resume/ College Degree/ Marksheet</p>
                  <input type="file" id="myFile" name="filename" />
                  <input type="submit" />
                </div>

                <div class="form-group">
                  <p>Are you Looking for</p>
                  <select id="input_sex" class="form-control">
                    <option value="Mr.">Job</option>
                    <option value="Ms.">Internship</option>
                    <option value="Ms.">Course</option>
                    <option value="Ms.">Career Guidance</option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div style={{"margin-top": "1em"}}>
          <button type="button" onClick={onSignUPpress} class="btn btn-primary btn-lg btn-block">
            Sign up !
          </button>
        </div>
      </form>
    </div>
    <script src="JS/user.js"></script>
    </React.Fragment>
  )
}
