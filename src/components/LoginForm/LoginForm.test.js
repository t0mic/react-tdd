// import '../../../matchMedia.mock';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import LoginForm from './LoginForm';

describe('LoginForm Component', () => {
  beforeEach(() => {
    jest.spyOn(console, 'warn').mockImplementation(() => {});
  });

  it('should render root element', () => {
    render(<LoginForm />);
    const component = screen.getByTestId('LoginForm');
    expect(component).toBeInTheDocument();
  });
  it('should contain <form> element', () => {
    render(<LoginForm />);
    const form = screen.getByTestId('LoginForm.Form');
    expect(form).toBeInTheDocument();
  });
  it('should contain <input> field for username', () => {
    render(<LoginForm />);
    const username = screen.getByPlaceholderText('Korisnicko ime');
    expect(username).toBeInTheDocument();
  });
  it('should contain username form item', () => {
    render(<LoginForm />);
    const usernameFormItem = screen.getByLabelText('Korisnicko ime');
    expect(usernameFormItem).toBeInTheDocument();
  });
  it('should contain <input> field for password', () => {
    render(<LoginForm />);
    const password = screen.getByPlaceholderText('Lozinka');
    expect(password).toBeInTheDocument();
  });
  it('should contain password form item', () => {
    render(<LoginForm />);
    const passwordFormItem = screen.getByLabelText('Lozinka');
    expect(passwordFormItem).toBeInTheDocument();
  });
  it('should contain checkbox field for remembering login', () => {
    render(<LoginForm />);
    const checkbox = screen.getByText('Upamti me');
    expect(checkbox).toBeInTheDocument();
  });
  it('should contain password forgotten link', () => {
    render(<LoginForm />);
    const passwordForgotten = screen.getByText('Lozinka zaboravljena?');
    expect(passwordForgotten).toBeInTheDocument();
  });
  it('should contain button for submitting form', () => {
    render(<LoginForm />);
    const submit = screen.getByText('Uloguj se');
    expect(submit).toBeInTheDocument();
  });
  it('should contain text <nemas nalog>', () => {
    render(<LoginForm />);
    const text = screen.getByText('Nemas nalog?');
    expect(text).toBeInTheDocument();
  });
  it('should contain register now link', () => {
    render(<LoginForm />);
    const link = screen.getByText('Registruj se');
    expect(link).toBeInTheDocument();
  });
  it('should render required fields error', async () => {
    render(<LoginForm />);
    const submit = screen.getByText('Uloguj se');
    fireEvent.click(submit);
    await waitFor(() => {
      expect(screen.getAllByText('Obavezno polje')).toHaveLength(2);
    });
  });
  it('should submit form with valid data', async () => {
    render(<LoginForm />);
    const consoleSpy = jest.spyOn(console, 'log');
    const username = screen.getByPlaceholderText('Korisnicko ime');
    const password = screen.getByPlaceholderText('Lozinka');
    const checkbox = screen.getByText('Upamti me');
    const submit = screen.getByText('Uloguj se');

    fireEvent.change(username, { target: { value: 'MarkoTomic' } });
    fireEvent.change(password, { target: { value: 'Lozinka123' } });
    fireEvent.click(checkbox);
    fireEvent.click(submit);
    const expectResult = {
      korisnickoIme: 'MarkoTomic',
      lozinka: 'Lozinka123',
      upamtiMe: true
    }
    await waitFor(() => {
      expect(consoleSpy).toHaveBeenCalledWith(expectResult);
    });
  });
  it('should console forgotten password', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<LoginForm />);
    const passwordForgotten = screen.getByText('Lozinka zaboravljena?');
    fireEvent.click(passwordForgotten)
    expect(consoleSpy).toHaveBeenCalledWith('zaboravljena lozinka');
  });
  it('should console register now', () => {
    const consoleSpy = jest.spyOn(console, 'log');
    render(<LoginForm />);
    const link = screen.getByText('Registruj se');
    fireEvent.click(link)
    expect(consoleSpy).toHaveBeenCalledWith('registruj se odmah');
  });
});