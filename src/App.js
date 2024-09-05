import './App.css';

function App() {
  return (
    <div class="login-container">
    <h2>Авторизация</h2>
    <form class="login-form">
      <input type="text" placeholder="Логин" required/>
      <input type="password" placeholder="Пароль" required/>
      <button type="submit">Вход</button>
    </form>
  </div>
  );
}

export default App;
