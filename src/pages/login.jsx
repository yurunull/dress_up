import React, { useState } from 'react';

const Login = () => {
    // ユーザー名、パスワード、エラーメッセージなどの状態管理
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isRegistering, setIsRegistering] = useState(false);
    const [error, setError] = useState('');
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    // 正しいユーザー名とパスワード（初期設定）
    const correctUsername = 'admin';
    const correctPassword = 'password123';

    // ログイン認証を行う関数
    const authenticate = () => {
        if (username === correctUsername && password === correctPassword) {
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('ユーザー名またはパスワードが間違っています。');
        }
    };

    // 新規登録を行う関数
    const register = () => {
        if (newPassword !== confirmPassword) {
            setError('パスワードが一致しません。');
            return;
        }
        if (newUsername && newPassword) {
            // 新規登録が成功した場合、認証状態を更新
            setIsAuthenticated(true);
            setError('');
        } else {
            setError('すべてのフィールドを入力してください。');
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md bg-white p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold text-center mb-6">
                    {isRegistering ? '新規登録' : 'ログイン'}
                </h2>

                {!isAuthenticated ? (
                    <div>
                        {!isRegistering ? (
                            <div>
                                <div className="mb-4">
                                    <label htmlFor="username" className="block text-sm font-medium text-gray-700">ユーザー名</label>
                                    <input
                                        type="text"
                                        id="username"
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="password" className="block text-sm font-medium text-gray-700">パスワード</label>
                                    <input
                                        type="password"
                                        id="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                                <button
                                    onClick={authenticate}
                                    className="w-full py-2 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 focus:outline-none"
                                >
                                    ログイン
                                </button>
                                <p className="text-center mt-4">
                                    新規登録するには <span
                                        className="text-blue-500 cursor-pointer"
                                        onClick={() => setIsRegistering(true)}
                                    >こちら</span>
                                </p>
                            </div>
                        ) : (
                            <div>
                                <div className="mb-4">
                                    <label htmlFor="newUsername" className="block text-sm font-medium text-gray-700">ユーザー名</label>
                                    <input
                                        type="text"
                                        id="newUsername"
                                        value={newUsername}
                                        onChange={(e) => setNewUsername(e.target.value)}
                                        className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="newPassword" className="block text-sm font-medium text-gray-700">パスワード</label>
                                    <input
                                        type="password"
                                        id="newPassword"
                                        value={newPassword}
                                        onChange={(e) => setNewPassword(e.target.value)}
                                        className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                                <div className="mb-4">
                                    <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">パスワード確認</label>
                                    <input
                                        type="password"
                                        id="confirmPassword"
                                        value={confirmPassword}
                                        onChange={(e) => setConfirmPassword(e.target.value)}
                                        className="mt-1 block w-full px-4 py-2 border rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-400"
                                    />
                                </div>
                                <button
                                    onClick={register}
                                    className="w-full py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 focus:outline-none"
                                >
                                    新規登録
                                </button>
                                <p className="text-center mt-4">
                                    既にアカウントをお持ちですか？ <span
                                        className="text-blue-500 cursor-pointer"
                                        onClick={() => setIsRegistering(false)}
                                    >ログイン</span>
                                </p>
                            </div>
                        )}
                        {error && <p className="text-red-500 text-center mt-4">{error}</p>}
                    </div>
                ) : (
                    <div className="text-center">
                        <h1 className="text-2xl font-semibold mb-4">ログイン成功！</h1>
                        <p>ここにコンテンツが表示されます。</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default Login;
