import React from 'react';
import Field from './components/Field';
import Form from './components/Form';
import Main from './Main';

function App() {
  return (
    <Main>
      <Form>
        <Field.Text label="Email" name="email" type="email" />
      </Form>
    </Main>
  );
}

export default App;
