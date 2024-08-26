import './App.css';
import Path from './Routes/path';
import { FormProvider, useForm } from 'react-hook-form';

function App() {

  const methods = useForm();

  return (
    <FormProvider {...methods}>
    <Path />
    </FormProvider>
  );
}

export default App;
