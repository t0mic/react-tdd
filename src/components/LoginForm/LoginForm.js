import { Form, Input, Checkbox, Button } from 'antd';
import './LoginForm.css';

const { Item } = Form;
const { Password } = Input;
const requiredMessage = 'Obavezno polje';

function LoginForm() {
  const onFinish = values => {
    console.log(values);
  };
  const forgottenPassword = () => {
    console.log('zaboravljena lozinka')
  }
  const registerNow = () => {
    console.log('registruj se odmah')
  }
  return (
    <div data-testid="LoginForm">
      <Form data-testid="LoginForm.Form" layout="vertical" className="login-form" onFinish={onFinish}>
        <Item name="korisnickoIme" label="Korisnicko ime" rules={[{ required: true, message: requiredMessage }]}>
          <Input placeholder="Korisnicko ime" />
        </Item>
        <Item name="lozinka" label="Lozinka" rules={[{ required: true, message: requiredMessage }]}>
          <Password placeholder="Lozinka" />
        </Item>
        <Item>
          <Item name="upamtiMe" valuePropName="checked" noStyle>
            <Checkbox>Upamti me</Checkbox>
          </Item>
          <a href="" onClick={forgottenPassword}>Lozinka zaboravljena?</a>
        </Item>
        <Item>
          <Button className="login-form-button" type="primary" htmlType="submit">Uloguj se</Button>
          Nemas nalog? <a href="" onClick={registerNow}>Registruj se</a>
        </Item>
      </Form>
    </div>
  );
}

export default LoginForm;
