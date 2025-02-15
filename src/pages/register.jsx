import React, { useState } from 'react';

const Register = () => {
  // フォームの入力を管理するための状態
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  // 登録フォーム送信時の処理
  const handleRegister = (e) => {
    e.preventDefault();  // ページリロードを防ぐ

    // 入力バリデーション
    if (name === '') {
      setError('名前を入力してください');
      return;
    }

    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email)) {
      setError('正しいメールアドレスを入力してください');
      return;
    }

    if (password === '' || confirmPassword === '') {
      setError('パスワードを入力してください');
      return;
    }

    if (password !== confirmPassword) {
      setError('パスワードが一致しません');
      return;
    }

    // 仮の登録処理（ここではコンソールに表示）
    console.log('登録成功:', { name, email, password });

    // エラーをリセットしてフォームをクリア
    setError('');
    setName('');
    setEmail('');
    setPassword('');
    setConfirmPassword('');
  };

  return (
    <div>
      <h2>新規登録</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}  {/* エラーメッセージ表示 */}

      <form onSubmit={handleRegister}>
        <div>
          <label htmlFor="name">名前</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}  // 名前の入力を管理
            placeholder="名前"
            required
          />
        </div>

        <div>
          <label htmlFor="email">メールアドレス</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}  // メールアドレスの入力を管理
            placeholder="example@example.com"
            required
          />
        </div>

        <div>
          <label htmlFor="password">パスワード</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}  // パスワードの入力を管理
            placeholder="パスワード"
            required
          />
        </div>

        <div>
          <label htmlFor="confirmPassword">パスワード確認</label>
          <input
            type="password"
            id="confirmPassword"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}  // パスワード確認の入力を管理
            placeholder="パスワード確認"
            required
          />
        </div>

        <button type="submit">登録</button>
      </form>
    </div>
  );
};

export default Register;
