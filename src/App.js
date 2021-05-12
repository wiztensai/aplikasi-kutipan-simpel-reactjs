import React from 'react'
import {
  NavLink,
  Link,
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

function App () {
  return (
    <div
      style={{
        width: '50%',
        height: '100vh',
        margin: 'auto',
        backgroundColor: '#f5f5f5',
        padding: '0px 8px 8px 8px',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <Router>
        <h2 style={{ alignSelf: 'center' }}>Aplikasi Kutipan</h2>

        <div
          style={{
            display: 'flex',
            alignSelf: 'center',
            width: '50%',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: '12px'
          }}
        >
          <NavLink to='/' exact activeStyle={{ color: 'blue' }}>
            Musk
          </NavLink>

          <NavLink to='/einstein' activeStyle={{ color: 'blue' }}>
            Einstein
          </NavLink>

          <NavLink to='/tesla' activeStyle={{ color: 'blue' }}>
            Tesla
          </NavLink>
          
        </div>

        <div>
          <Switch>
            <Route path='/tesla'>
              <p>
                "Saya tidak peduli mereka mencuri ide saya, tapi saya peduli
                bahwa mereka tidak memiliki ide mereka sendiri"
              </p>
            </Route>            

            <Route path='/musk-detail'>
              <div>
                <button
                  onClick={() => {
                    window.history.back()
                  }}
                >
                  Back
                </button>
                <ol>
                  <li>Mulai belajar pemrograman computer di usia 9 tahun</li>
                  <li>Pernah dikira tuli oleh ibunya</li>
                </ol>
              </div>
            </Route>

            <Route path='/einstein'>
              <p>
                "Hal yang penting adalah tidak berhenti bertanya. Keingintahuan
                memiliki alasan kenapa ada"
              </p>
            </Route>

            <Route path='/'>
              <div>
                <p>
                  "Orang bekerja lebih baik ketika mereka tahu apa tujuannya dan
                  mengapa. Adalah penting orang-orang datang bekerja di pagi
                  hari dan menikmati pekerjaannya"
                </p>

                <button>
                  <Link to='/musk-detail'>Beberapa fakta</Link>
                </button>
              </div>
            </Route>

          </Switch>
        </div>
      </Router>
    </div>
  )
}

export default App
