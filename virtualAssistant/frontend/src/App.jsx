import React from 'react'

function App(){
  return(
     <Routes>
       <Route path='/signup' element={<SignUp/>}/>
       <Route path='/signin' element={<SignIn/>}/>
     </Routes>
  )
}

export default App
