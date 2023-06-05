import { Form, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <Form>
      <h6 className="text-primary mb-3">
        Для продолжения необходимо зарегистрироваться
      </h6>
      <Form.Group controlId="email">
        <Form.Label>Email</Form.Label>
        <Form.Control type="email" placeholder="Введите email" />
      </Form.Group>
      <Form.Group controlId="password">
        <Form.Label>Пароль</Form.Label>
        <Form.Control type="password" placeholder="Введите пароль" />
      </Form.Group>
      <Form.Group controlId="confirmPassword">
        <Form.Label>Повторите пароль</Form.Label>
        <Form.Control type="password" placeholder="Повторите пароль" />
      </Form.Group>
      <Form.Group controlId="agreement">
        <Form.Check type="checkbox" label="С условиями согласен" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Зарегистрироваться
      </Button>
      <Form.Group className="mt-3">
        <Link to="/auth/login">Есть аккаунт? Войти</Link>
      </Form.Group>
      <Form.Group className="mt-3">
        <Link to="/">На главную</Link>
      </Form.Group>
    </Form>
  );
}

export default RegisterPage;
